import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { trackServerEvent } from '../../lib/serverAnalytics';

export const runtime = 'nodejs';

const MAX_MESSAGE_LENGTH = 5000;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#39;';
      default:
        return char;
    }
  });

const normalize = (value: unknown) =>
  typeof value === 'string' ? value.replace(/\r\n/g, '\n').trim() : '';

const pickField = (data: Record<string, unknown>, keys: string[]) => {
  for (const key of keys) {
    const value = normalize(data[key]);
    if (value) return value;
  }
  return '';
};

const parseBody = async (req: Request): Promise<Record<string, unknown>> => {
  const contentType = req.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    const json = await req.json();
    if (json && typeof json === 'object') {
      return json as Record<string, unknown>;
    }
    return {};
  }

  const form = await req.formData();
  const data: Record<string, unknown> = {};
  for (const [key, value] of form.entries()) {
    if (typeof value === 'string') {
      data[key] = value;
    }
  }
  return data;
};

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await parseBody(req);
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  // --------------------------------------------------------------------------
  // SPAM PROTECTION - Tier 1: Honeypots, Time Validation, Content Filtering
  // --------------------------------------------------------------------------

  // 1. Honeypot checks - multiple trap fields bots commonly fill
  const honeypotFields = ['website', 'company_url', 'fax', 'address2'];
  for (const field of honeypotFields) {
    if (pickField(data, [field])) {
      // Silently succeed to not alert bot operators
      return NextResponse.json({ ok: true }, { status: 200 });
    }
  }

  // 2. Time-based validation - reject submissions under 3 seconds
  const formTimestamp = pickField(data, ['_ts']);
  if (formTimestamp) {
    const submissionTime = parseInt(formTimestamp, 10);
    const timeDiff = Date.now() - submissionTime;
    const MIN_SUBMISSION_TIME_MS = 3000; // 3 seconds
    if (!isNaN(submissionTime) && timeDiff < MIN_SUBMISSION_TIME_MS) {
      // Too fast - likely a bot
      return NextResponse.json({ ok: true }, { status: 200 });
    }
  }

  const name = pickField(data, ['name', 'fullName', 'fullname']);
  const phone = pickField(data, ['phone', 'phoneNumber', 'phone_number', 'tel']);
  const address = pickField(data, ['address', 'streetAddress']);
  const zipCode = pickField(data, ['zipCode', 'zip_code', 'zip']);
  const message = pickField(data, ['message', 'details', 'notes']);
  const company = pickField(data, ['company', 'companyName', 'company_name']);
  const service = pickField(data, ['service', 'serviceNeeded', 'service_needed']);
  const page = pickField(data, ['page', 'pageUrl', 'page_url']);
  const site = pickField(data, ['site', 'siteUrl', 'site_url']);

  if (!name || !phone || !address || !zipCode || !service) {
    return NextResponse.json(
      { ok: false, error: 'Please provide your name, phone, address, zip code, and service needed.' },
      { status: 400 }
    );
  }

  // Input format validation (mirrors frontend patterns)
  const namePattern = /^[A-Za-z\s\-']{2,50}$/;
  if (!namePattern.test(name)) {
    return NextResponse.json(
      { ok: false, error: 'Name should contain only letters, spaces, and hyphens (2-50 characters).' },
      { status: 400 }
    );
  }

  const phoneDigits = phone.replace(/\D/g, '');
  if (phoneDigits.length < 10 || phoneDigits.length > 11) {
    return NextResponse.json(
      { ok: false, error: 'Please enter a valid 10-digit phone number.' },
      { status: 400 }
    );
  }

  const zipPattern = /^\d{5}$/;
  if (!zipPattern.test(zipCode)) {
    return NextResponse.json(
      { ok: false, error: 'Please enter a valid 5-digit zip code.' },
      { status: 400 }
    );
  }

  if (message && message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { ok: false, error: 'Message is too long. Please keep it under 5000 characters.' },
      { status: 400 }
    );
  }

  // 3. Content filtering - detect spam patterns
  const combinedText = `${name} ${address} ${zipCode} ${service} ${message}`.toLowerCase();

  // 3a. Check for excessive URLs (more than 2 is suspicious)
  const urlPattern = /https?:\/\/|www\./gi;
  const urlCount = (combinedText.match(urlPattern) || []).length;
  if (urlCount > 2) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // 3b. Check for spam keywords
  const spamKeywords = [
    // Crypto / financial scams
    'crypto', 'bitcoin', 'ethereum', 'nft', 'forex', 'investment opportunity',
    // Gambling
    'casino', 'poker', 'gambling', 'bet ',
    // Pharma
    'viagra', 'cialis', 'pharmacy',
    // SEO / marketing solicitation
    'seo', 'backlinks', 'web traffic', 'ranking', 'search engine',
    'link building', 'domain authority', 'page rank', 'serp',
    'digital marketing', 'social media marketing', 'lead generation',
    'google ads', 'ppc', 'keyword research', 'organic traffic',
    'website redesign', 'web design services', 'web development services',
    // Classic scams
    'nigerian prince', 'lottery winner', 'congratulations you won',
    'click here now', 'act now', 'limited time',
    'work from home', 'make money fast', 'earn $$',
    // Sales / solicitation patterns
    'free report', 'free audit', 'free consultation', 'free quote',
    'free analysis', 'free review', 'free assessment',
    'i prepared', 'i noticed your', 'i found your',
    'your website', 'your site', 'your business',
    'reply "', "reply '", 'reply with', 'reply yes', 'reply sure',
    'schedule a call', 'book a call', 'hop on a call',
    'we can help', 'we specialize', 'we offer',
    'growth strategy', 'increase your', 'boost your',
    'actionable', 'roi', 'conversion rate',
  ];
  if (spamKeywords.some(keyword => combinedText.includes(keyword))) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // 3b2. Check name field for business/marketing names
  const spamNamePatterns = [
    /\bseo\b/i, /\bmarketing\b/i, /\bagency\b/i, /\bconsulting\b/i,
    /\bdigital\b/i, /\bmedia\b/i, /\bsolutions\b/i, /\bservices\b/i,
    /\bgroup\b/i, /\bpartners\b/i, /\bventures\b/i, /\bgrowth\b/i,
    /\bleads?\b/i, /\bweb\b/i, /\bdesign\b/i, /\bdev\b/i,
  ];
  const nameLower = name.toLowerCase();
  if (spamNamePatterns.some(pattern => pattern.test(nameLower))) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // 3b3. Solicitation detection - someone offering services instead of requesting them
  if (message) {
    const msgLower = message.toLowerCase();
    const solicitationSignals = [
      /\bi (?:can|will|could|would|prepared|created|made|noticed|found|checked|reviewed|analyzed)\b/,
      /\bour (?:team|company|agency|service|platform|tool)\b/,
      /\breply\s*["'`]?\s*(?:yes|sure|ok|interested|send)\b/,
      /\bfree\s+(?:report|audit|analysis|consultation|assessment|review|demo|trial)\b/i,
      /\.(?:com|net|org|io|co)\b/,
    ];
    const matchCount = solicitationSignals.filter(p => p.test(msgLower)).length;
    if (matchCount >= 2) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }
  }

  // 3c. Check for all-caps messages (spam indicator)
  if (message && message.length > 20) {
    const upperCount = (message.match(/[A-Z]/g) || []).length;
    const letterCount = (message.match(/[a-zA-Z]/g) || []).length;
    if (letterCount > 0 && upperCount / letterCount > 0.7) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }
  }

  // 3d. Check for non-ASCII character overload (foreign spam)
  const nonAsciiPattern = /[^\x00-\x7F]/g;
  const nonAsciiCount = (combinedText.match(nonAsciiPattern) || []).length;
  if (combinedText.length > 0 && nonAsciiCount / combinedText.length > 0.3) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // --------------------------------------------------------------------------
  // END SPAM PROTECTION
  // --------------------------------------------------------------------------


  const timestamp = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short',
  }).format(new Date());
  const safeName = name || 'Website Form';
  const safeService = service || 'Website Form';
  const brandName = "Jerry's Roofing";
  const brandTagline = 'Straight forward roofing with quality as the focus';
  const brandAddress = 'Katy, TX';
  const brandPrimary = '#0A2E5B';
  const brandPrimaryDeep = '#061D3A';
  const brandAccent = '#E3FE08';
  const brandAccentDeep = '#C9E000';
  const urgentRed = '#DC2626';
  const fromEmail = process.env.LEAD_FROM_EMAIL || "Jerrys Roofing <leads@roofingbyjerry.com>";
  const subject = `New Lead: ${safeService} | ${safeName}`;

  const pageUrlIsDev =
    !!page &&
    (/localhost/i.test(page) || /127\.0\.0\.1/.test(page) || /0\.0\.0\.0/.test(page));
  const pageUrlDisplay = page ? (pageUrlIsDev ? `${page} (dev link)` : page) : '';
  const leadAnalyticsProperties = {
    service: safeService,
    zip_code: zipCode,
    source_page: pageUrlDisplay || page || 'unknown',
    has_message: Boolean(message),
    message_length: message.length,
  };
  const phoneLink = (() => {
    if (!phone) return '';
    if (phone.trim().startsWith('+')) {
      return phone.replace(/[^\d+]/g, '');
    }
    const digits = phone.replace(/\D/g, '');
    if (!digits) return '';
    if (digits.length === 10) return `+1${digits}`;
    if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
    return digits;
  })();

  const textLines = [
    `Timestamp: ${timestamp}`,
    name ? `Name: ${name}` : '',
    phone ? `Phone: ${phone}` : '',
    address ? `Address: ${address}` : '',
    zipCode ? `Zip Code: ${zipCode}` : '',
    company ? `Company: ${company}` : '',
    service ? `Service: ${service}` : '',
    pageUrlDisplay ? `Page: ${pageUrlDisplay}` : '',
    site ? `Site: ${site}` : '',
    `Message:\n${message || '(none)'}`,
  ].filter(Boolean);

  const text = textLines.join('\n');
  const escapedMessage = message ? escapeHtml(message).replace(/\n/g, '<br />') : '';
  const html = `
  <div style="background-color:${brandPrimaryDeep};margin:0;padding:24px 12px;font-family:'Barlow','Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
    <span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden;">
      New quote request from ${escapeHtml(safeName)} &mdash; respond within 5 minutes.
    </span>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;margin:0 auto;background:#ffffff;border:3px solid ${brandAccent};border-radius:14px;box-shadow:0 18px 40px rgba(0,0,0,0.35);overflow:hidden;">

      <!-- HEADER: Navy with lime stripe -->
      <tr>
        <td style="background:${brandPrimary};padding:0;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr><td style="height:6px;background:${brandAccent};line-height:6px;font-size:0;">&nbsp;</td></tr>
            <tr>
              <td style="padding:22px 24px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td>
                      <div style="font-size:22px;font-weight:900;letter-spacing:0.5px;color:#ffffff;text-transform:uppercase;line-height:1;">${brandName}</div>
                      <div style="font-size:11px;color:${brandAccent};font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-top:6px;">${brandAddress} &middot; (409) 351-1529</div>
                    </td>
                    <td align="right" valign="top">
                      <span style="display:inline-block;background:${brandAccent};color:${brandPrimary};font-weight:900;font-size:11px;padding:8px 12px;border-radius:4px;letter-spacing:1.5px;text-transform:uppercase;">New Lead</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr><td style="height:4px;background:${brandAccent};line-height:4px;font-size:0;">&nbsp;</td></tr>
          </table>
        </td>
      </tr>

      <!-- LEAD HEADLINE -->
      <tr>
        <td style="padding:24px 24px 14px;background:#ffffff;">
          <div style="font-size:13px;color:${brandPrimary};font-weight:800;letter-spacing:1.5px;text-transform:uppercase;margin:0 0 6px;">${escapeHtml(safeService)}</div>
          <div style="font-size:28px;font-weight:900;line-height:1.15;margin:0 0 8px;color:${brandPrimary};">${escapeHtml(safeName)}</div>
          <div style="font-size:12px;color:#64748b;">${escapeHtml(timestamp)}</div>
        </td>
      </tr>

      <!-- CTA BUTTONS -->
      <tr>
        <td style="padding:0 24px 20px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="padding:0 0 10px;">
                <a href="tel:${escapeHtml(phoneLink || phone)}" style="display:block;background:${brandAccent};color:${brandPrimary};text-decoration:none;font-weight:900;font-size:16px;text-align:center;padding:16px 18px;border-radius:8px;letter-spacing:0.5px;text-transform:uppercase;border:2px solid ${brandPrimary};">
                  &#9742; Call ${escapeHtml(phone)} Now
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="sms:${escapeHtml(phoneLink || phone)}" style="display:block;background:${brandPrimary};color:${brandAccent};text-decoration:none;font-weight:900;font-size:14px;text-align:center;padding:13px 18px;border-radius:8px;letter-spacing:0.5px;text-transform:uppercase;border:2px solid ${brandAccent};">
                  &#9993; Send a Text
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- LEAD DETAILS -->
      <tr>
        <td style="padding:0 24px 20px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:2px solid ${brandPrimary};border-radius:10px;overflow:hidden;">
            <tr>
              <td style="background:${brandPrimary};padding:12px 16px;font-weight:900;color:${brandAccent};font-size:12px;letter-spacing:1.5px;text-transform:uppercase;">Lead Details</td>
            </tr>
            <tr>
              <td style="padding:4px 16px;background:#ffffff;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="font-size:14px;">
                  <tr><td style="padding:10px 0;color:#64748b;width:120px;font-weight:600;">Name</td><td style="padding:10px 0;color:${brandPrimary};font-weight:800;">${escapeHtml(safeName)}</td></tr>
                  <tr><td style="padding:10px 0;color:#64748b;font-weight:600;border-top:1px solid #f1f5f9;">Phone</td><td style="padding:10px 0;border-top:1px solid #f1f5f9;"><a href="tel:${escapeHtml(phoneLink || phone)}" style="color:${brandPrimary};text-decoration:none;font-weight:800;">${escapeHtml(phone)}</a></td></tr>
                  <tr><td style="padding:10px 0;color:#64748b;font-weight:600;border-top:1px solid #f1f5f9;">Address</td><td style="padding:10px 0;color:${brandPrimary};font-weight:800;border-top:1px solid #f1f5f9;">${escapeHtml(address)}</td></tr>
                  <tr><td style="padding:10px 0;color:#64748b;font-weight:600;border-top:1px solid #f1f5f9;">Zip Code</td><td style="padding:10px 0;color:${brandPrimary};font-weight:800;border-top:1px solid #f1f5f9;">${escapeHtml(zipCode)}</td></tr>
                  <tr><td style="padding:10px 0;color:#64748b;font-weight:600;border-top:1px solid #f1f5f9;">Service</td><td style="padding:10px 0;color:${brandPrimary};font-weight:800;border-top:1px solid #f1f5f9;">${escapeHtml(safeService)}</td></tr>
                  ${pageUrlDisplay ? `<tr><td style="padding:10px 0;color:#64748b;font-weight:600;border-top:1px solid #f1f5f9;">Page URL</td><td style="padding:10px 0;border-top:1px solid #f1f5f9;"><a href="${escapeHtml(page)}" style="color:${brandPrimary};text-decoration:underline;font-weight:700;">${escapeHtml(pageUrlDisplay)}</a></td></tr>` : ''}
                  ${site ? `<tr><td style="padding:10px 0;color:#64748b;font-weight:600;border-top:1px solid #f1f5f9;">Site</td><td style="padding:10px 0;border-top:1px solid #f1f5f9;"><a href="${escapeHtml(site)}" style="color:${brandPrimary};text-decoration:underline;font-weight:700;">${escapeHtml(site)}</a></td></tr>` : ''}
                  ${company ? `<tr><td style="padding:10px 0;color:#64748b;font-weight:600;border-top:1px solid #f1f5f9;">Company</td><td style="padding:10px 0;color:${brandPrimary};font-weight:800;border-top:1px solid #f1f5f9;">${escapeHtml(company)}</td></tr>` : ''}
                  <tr>
                    <td style="padding:12px 0;color:#64748b;font-weight:600;vertical-align:top;border-top:1px solid #f1f5f9;">Message</td>
                    <td style="padding:12px 0;color:${brandPrimary};border-top:1px solid #f1f5f9;">
                      ${escapedMessage ? `<div style="font-weight:600;line-height:1.5;">${escapedMessage}</div>` : `<div style="font-style:italic;color:#94a3b8;">No message provided.</div>`}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- BRAND FOOTER -->
      <tr>
        <td style="padding:0 24px 24px;">
          <div style="border-left:5px solid ${brandAccent};background:#f8fafc;padding:14px 16px;border-radius:6px;">
            <div style="font-size:13px;color:${brandPrimary};font-weight:800;line-height:1.4;">${brandName} &mdash; ${brandAddress}</div>
            <div style="font-size:11px;color:#64748b;font-style:italic;margin-top:4px;">${brandTagline}</div>
          </div>
        </td>
      </tr>

      <!-- BOTTOM STRIPE -->
      <tr><td style="height:6px;background:${brandAccent};line-height:6px;font-size:0;">&nbsp;</td></tr>
    </table>
  </div>
  `;

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL;
  const isProduction = process.env.NODE_ENV === 'production';
  const isDryRun = process.env.LEAD_DRY_RUN === 'true';

  if (isDryRun || !resendApiKey || !toEmail) {
    const missingVars = [
      !resendApiKey ? 'RESEND_API_KEY' : '',
      !toEmail ? 'LEAD_TO_EMAIL' : '',
    ].filter(Boolean);

    if (isProduction && !isDryRun && missingVars.length > 0) {
      return NextResponse.json(
        { ok: false, error: `Server misconfigured. Missing ${missingVars.join(' and ')}.` },
        { status: 500 }
      );
    }

    await trackServerEvent('Lead Submitted', {
      ...leadAnalyticsProperties,
      delivery_mode: 'dry_run',
    }, req);

    return NextResponse.json(
      {
        ok: true,
        mode: 'dry-run',
        message:
          missingVars.length > 0
            ? `Dry run only. Missing ${missingVars.join(' and ')}.`
            : 'Dry run enabled. Email not sent.',
      },
      { status: 200 }
    );
  }

  const resend = new Resend(resendApiKey);
  const bcc = process.env.LEADS_BCC_EMAIL
    ? process.env.LEADS_BCC_EMAIL.split(',').map((entry) => entry.trim()).filter(Boolean)
    : undefined;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    bcc,
    replyTo: undefined,
    subject,
    text,
    html,
  });

  if (error) {
    const errorMessage =
      process.env.NODE_ENV === 'development'
        ? `Failed to send email: ${error.message || 'Unknown Resend error'}`
        : 'Failed to send email.';

    return NextResponse.json({ ok: false, error: errorMessage }, { status: 500 });
  }

  await trackServerEvent('Lead Submitted', {
    ...leadAnalyticsProperties,
    delivery_mode: 'email',
  }, req);

  return NextResponse.json({ ok: true }, { status: 200 });
}
