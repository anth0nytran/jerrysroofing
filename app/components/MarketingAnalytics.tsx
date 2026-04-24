'use client';

import { useEffect } from 'react';
import { trackMarketingEvent } from '../lib/analytics';

const CTA_RE = /quote|estimate|inspection|contact|call|text|claim|directions/i;

const getText = (element: Element) =>
  (element.getAttribute('aria-label') || element.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 120);

const getLinkType = (href: string, url: URL) => {
  if (href.startsWith('tel:')) return 'phone';
  if (href.startsWith('mailto:')) return 'email';
  if (/google\.com\/maps|maps\.app\.goo\.gl/i.test(url.href)) return 'directions';
  if (url.origin !== window.location.origin) return 'outbound';
  if (url.pathname.startsWith('/contact')) return 'contact';
  if (url.pathname.startsWith('/services') || url.pathname.startsWith('/roof-rejoov')) return 'service';
  if (url.pathname.startsWith('/service-area')) return 'service_area';
  if (url.pathname.startsWith('/insurance-claims')) return 'insurance_claims';
  if (url.pathname.startsWith('/blog') || url.pathname.startsWith('/glossary')) return 'seo_content';
  return 'internal';
};

export function MarketingAnalytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const element = target?.closest('a, button, [role="button"]');
      if (!element) return;

      const label = getText(element);
      const href = element.getAttribute('href') || '';

      if (element instanceof HTMLAnchorElement && href) {
        const url = new URL(href, window.location.href);
        const type = getLinkType(href, url);

        if (type === 'phone') {
          trackMarketingEvent('Phone Click', { label, location: window.location.pathname });
          return;
        }

        if (type === 'email') {
          trackMarketingEvent('Email Click', { label, location: window.location.pathname });
          return;
        }

        if (type === 'directions') {
          trackMarketingEvent('Directions Click', { label, destination_host: url.hostname });
          return;
        }

        if (type === 'outbound') {
          trackMarketingEvent('Outbound Click', { label, destination_host: url.hostname });
          return;
        }

        if (CTA_RE.test(label) || ['contact', 'service', 'service_area', 'insurance_claims'].includes(type)) {
          trackMarketingEvent('CTA Click', {
            label,
            cta_type: type,
            destination_path: url.pathname,
          });
        }

        return;
      }

      if (element instanceof HTMLButtonElement && CTA_RE.test(label)) {
        trackMarketingEvent('CTA Click', {
          label,
          cta_type: element.type === 'submit' ? 'form_submit' : 'button',
          location: window.location.pathname,
        });
      }
    };

    const onSubmit = (event: SubmitEvent) => {
      const form = event.target instanceof HTMLFormElement ? event.target : null;
      if (!form) return;

      const data = new FormData(form);
      trackMarketingEvent('Lead Form Attempt', {
        form_id: form.id || form.getAttribute('aria-label') || 'lead_form',
        service: String(data.get('service') || ''),
        zip_code: String(data.get('zipCode') || data.get('zip_code') || ''),
      });
    };

    document.addEventListener('click', onClick, true);
    document.addEventListener('submit', onSubmit, true);

    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('submit', onSubmit, true);
    };
  }, []);

  return null;
}
