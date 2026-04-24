'use client';

import { track } from '@vercel/analytics';

type AnalyticsValue = string | number | boolean | null | undefined;
type AnalyticsProperties = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const MAX_VALUE_LENGTH = 255;
const TRACKED_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'gbraid',
  'wbraid',
] as const;

const cleanValue = (value: AnalyticsValue): AnalyticsValue => {
  if (typeof value !== 'string') return value;
  return value.slice(0, MAX_VALUE_LENGTH);
};

const getAttribution = (): AnalyticsProperties => {
  if (typeof window === 'undefined') return {};

  const url = new URL(window.location.href);
  const attribution: AnalyticsProperties = {
    path: url.pathname,
    page: url.href.slice(0, MAX_VALUE_LENGTH),
  };

  for (const param of TRACKED_PARAMS) {
    const value = url.searchParams.get(param);
    if (value) attribution[param] = value;
  }

  if (document.referrer) {
    try {
      attribution.referrer_host = new URL(document.referrer).hostname;
    } catch {
      attribution.referrer_host = document.referrer.slice(0, MAX_VALUE_LENGTH);
    }
  }

  return attribution;
};

const sanitizeProperties = (properties: AnalyticsProperties): AnalyticsProperties =>
  Object.fromEntries(
    Object.entries(properties).map(([key, value]) => [key.slice(0, MAX_VALUE_LENGTH), cleanValue(value)])
  );

export function trackMarketingEvent(name: string, properties: AnalyticsProperties = {}) {
  const payload = sanitizeProperties({
    ...getAttribution(),
    ...properties,
  });

  track(name.slice(0, MAX_VALUE_LENGTH), payload);

  window.gtag?.('event', name, {
    event_category: 'marketing',
    ...payload,
  });
}
