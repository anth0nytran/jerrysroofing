import type { Metadata } from 'next';
import { siteConfig } from '../config';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Roof Estimate in Katy, Texas | Jerrys Roofing",
  description:
    "Get a free roof inspection and estimate from Jerrys Roofing. Roof replacement, Roof Rejoov, gutters, siding & painting in Katy, Texas, Cypress, Cinco Ranch & Richmond. Call (409) 351-1529.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: "Contact & Free Estimate | Jerrys Roofing — Katy, Texas",
    description:
      'Get your free estimate today. Serving Katy, Cypress, Cinco Ranch, Richmond & surrounding areas.',
    url: 'https://roofingbyjerry.com/contact',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteConfig.domain}/contact` },
  ],
};

const contactFaqs = [
  {
    q: 'How fast do you respond?',
    a: 'Most estimate requests get a reply within 1–2 hours during business hours. For urgent issues, call (409) 351-1529 directly — Jerry is available any time.',
  },
  {
    q: 'Is the inspection really free?',
    a: 'Yes — 100% free, zero obligation. We inspect your roof and give you an honest, upfront estimate. No hidden fees, no pressure.',
  },
  {
    q: 'What info do you need from me?',
    a: "Just your phone number and address. That's it. We'll reach out to schedule a time that works for you.",
  },
  {
    q: 'Do you offer financing or payment plans?',
    a: "We offer flexible options on larger jobs like roof replacements. During your consultation, let us know your budget and we'll work with you. We accept cash, checks, and all major credit cards.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: contactFaqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContactPageClient faqs={contactFaqs} />
    </>
  );
}
