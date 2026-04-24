import { track } from '@vercel/analytics/server';

type AnalyticsValue = string | number | boolean | null | undefined;
type AnalyticsProperties = Record<string, AnalyticsValue>;

const MAX_VALUE_LENGTH = 255;

const cleanValue = (value: AnalyticsValue): AnalyticsValue => {
  if (typeof value !== 'string') return value;
  return value.slice(0, MAX_VALUE_LENGTH);
};

const sanitizeProperties = (properties: AnalyticsProperties): AnalyticsProperties =>
  Object.fromEntries(
    Object.entries(properties).map(([key, value]) => [key.slice(0, MAX_VALUE_LENGTH), cleanValue(value)])
  );

export async function trackServerEvent(
  eventName: string,
  properties: AnalyticsProperties,
  request: Request
) {
  try {
    await track(eventName.slice(0, MAX_VALUE_LENGTH), sanitizeProperties(properties), {
      request: { headers: request.headers },
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[analytics] Failed to track server event', error);
    }
  }
}
