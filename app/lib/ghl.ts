// GoHighLevel (LeadConnector) lead sync.
//
// On a website form submission we upsert the person as a Contact in the GHL
// sub-account, map every form field into its structured custom field, and stamp
// the trigger tags (website-lead, website-form). Those tags are what the client
// wires their auto-text / auto-opportunity automation off of — this file only
// guarantees the contact + tags + structured data land in GHL. It is
// deliberately best-effort: any failure here must NOT break the email fallback
// or the visitor's submission.

const GHL_API_BASE = process.env.GHL_API_BASE || 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';
const REQUEST_TIMEOUT_MS = 8000;

// Tags that kick off the client's automation. Comma-separated env override.
const DEFAULT_TAGS = ['website-lead', 'website-form'];

// GHL custom field IDs for the Jerry's Roofing location (tB1wjZRZZzB1pOFskidv).
// Pulled live from GET /locations/{id}/customFields. IDs are stable per field.
const FIELD = {
  serviceNeeded: 'D5LvhsQ8PA0UhBA772MX', // SINGLE_OPTIONS — roofing service list
  timeline: '9UUJdq0COLT6XImyfkFH', // SINGLE_OPTIONS
  zipCode: '4XLuQ7513fHI0P6F7BOb', // TEXT
  message: '5Ez41NSYVjIA5JqdbwjQ', // LARGE_TEXT
  projectAddress: 'CQsbjushynPPpbt39R9B', // TEXT
  smsConsent: 'tLBibEORaU6lmqG1gx1m', // SINGLE_OPTIONS Yes/No
  ageConsent: 'zLdoag5ubR4GTdLTEbJY', // SINGLE_OPTIONS Yes/No
  smsConsentSource: 'QeYtuiqFeb8RUFEwYjms', // TEXT — page URL consent was given on
  leadSource: 'AfH6R6cxQblzMxHqrWqn', // SINGLE_OPTIONS — "Website Form"
  formType: 'HtiBNpHCzz26cDA3ej26', // TEXT
  formSubmittedAt: 'lmko3D912sjhUBQISgEc', // DATE
} as const;

// Website timeline wording -> the option values that already exist on the GHL
// Timeline dropdown (shared with the Facebook lead form). A SINGLE_OPTIONS field
// rejects any value not in its option list, so we normalize before sending.
const TIMELINE_MAP: Record<string, string> = {
  'ASAP (active leak / emergency)': 'ASAP',
  'Within 2 weeks': 'Within 30 Days',
  'Within 1-3 months': '1-3 Months',
  'Just exploring / no rush': 'Just Gathering Information',
  // pass-through for values already canonical
  ASAP: 'ASAP',
  'Within 30 Days': 'Within 30 Days',
  '1-3 Months': '1-3 Months',
  'Just Gathering Information': 'Just Gathering Information',
};

export interface GhlLeadInput {
  name: string;
  email: string;
  phone?: string; // E.164 preferred (e.g. +14093511529)
  address?: string;
  zipCode?: string;
  company?: string;
  service?: string;
  timeline?: string;
  message?: string;
  page?: string;
  smsConsent?: boolean;
  ageConfirmed?: boolean;
  consentTimestamp?: string;
}

export interface GhlSyncResult {
  ok: boolean;
  skipped?: boolean;
  contactId?: string;
  isNew?: boolean;
  error?: string;
}

const splitName = (fullName: string): { firstName: string; lastName: string } => {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length <= 1) {
    return { firstName: parts[0] || '', lastName: '' };
  }
  return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
};

const ghlFetch = async (path: string, body: unknown, token: string) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(`${GHL_API_BASE}${path}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Version: GHL_API_VERSION,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
};

const parseTags = (): string[] => {
  const raw = process.env.GHL_WEBSITE_LEAD_TAGS || process.env.GHL_WEBSITE_LEAD_TAG;
  if (!raw) return DEFAULT_TAGS;
  const tags = raw.split(',').map((t) => t.trim()).filter(Boolean);
  return tags.length ? tags : DEFAULT_TAGS;
};

const buildNote = (input: GhlLeadInput): string =>
  [
    'New website lead',
    input.service ? `Service: ${input.service}` : '',
    input.timeline ? `Timeline: ${input.timeline}` : '',
    input.address ? `Address: ${input.address}` : '',
    input.zipCode ? `Zip: ${input.zipCode}` : '',
    input.company ? `Company: ${input.company}` : '',
    input.page ? `Source page: ${input.page}` : '',
    `Message: ${input.message || '(none)'}`,
    '',
    `SMS consent: ${input.smsConsent ? 'YES (opted in)' : 'NO'}`,
    `Age 18+ confirmed: ${input.ageConfirmed ? 'YES' : 'NO'}`,
    input.consentTimestamp ? `Consent timestamp: ${input.consentTimestamp}` : '',
  ]
    .filter(Boolean)
    .join('\n');

const buildCustomFields = (input: GhlLeadInput): Array<{ id: string; field_value: string }> => {
  const fields: Array<{ id: string; field_value: string }> = [];
  const push = (id: string, value?: string) => {
    if (value) fields.push({ id, field_value: value });
  };

  push(FIELD.serviceNeeded, input.service);
  push(FIELD.timeline, input.timeline ? TIMELINE_MAP[input.timeline] : undefined);
  push(FIELD.zipCode, input.zipCode);
  push(FIELD.message, input.message);
  push(FIELD.projectAddress, input.address);
  push(FIELD.smsConsent, input.smsConsent ? 'Yes' : 'No');
  push(FIELD.ageConsent, input.ageConfirmed ? 'Yes' : 'No');
  push(FIELD.smsConsentSource, input.page);
  push(FIELD.leadSource, 'Website Form');
  push(FIELD.formType, 'Website Estimate Form');
  push(FIELD.formSubmittedAt, input.consentTimestamp);

  return fields;
};

/**
 * Upserts the lead as a GHL contact, applies the trigger tags, maps every form
 * field into its structured custom field, and logs a human-readable note.
 * Never throws — returns a result object.
 */
export async function syncLeadToGhl(input: GhlLeadInput): Promise<GhlSyncResult> {
  const token = process.env.GHL_API_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!token || !locationId) {
    // Not configured — quietly skip so email + submission still succeed.
    return { ok: false, skipped: true, error: 'GHL not configured' };
  }

  const { firstName, lastName } = splitName(input.name);

  const contactPayload: Record<string, unknown> = {
    locationId,
    name: input.name || undefined,
    firstName: firstName || undefined,
    lastName: lastName || undefined,
    email: input.email || undefined,
    phone: input.phone || undefined,
    address1: input.address || undefined,
    postalCode: input.zipCode || undefined,
    companyName: input.company || undefined,
    source: 'Website Form',
    tags: parseTags(),
    customFields: buildCustomFields(input),
  };

  try {
    // Upsert merges on email/phone so repeat submitters don't create dupes and
    // the trigger tags are (re)applied — that's what fires the automation.
    const res = await ghlFetch('/contacts/upsert', contactPayload, token);

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      return { ok: false, error: `Upsert failed (${res.status}): ${detail.slice(0, 500)}` };
    }

    const json = (await res.json().catch(() => ({}))) as {
      contact?: { id?: string };
      id?: string;
      new?: boolean;
    };
    const contactId = json.contact?.id || json.id;
    const isNew = json.new;

    if (!contactId) {
      return { ok: false, error: 'Upsert returned no contact id' };
    }

    // Attach a human-readable note (best-effort; the structured custom fields
    // above are the source of truth for automations/merge fields).
    try {
      await ghlFetch(`/contacts/${contactId}/notes`, { body: buildNote(input) }, token);
    } catch {
      // ignore — note is a nicety, contact + tags + fields are what matter
    }

    return { ok: true, contactId, isNew };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown GHL error';
    return { ok: false, error: message };
  }
}
