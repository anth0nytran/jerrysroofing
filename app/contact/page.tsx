import type { Metadata } from 'next';
import { siteConfig } from '../config';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us — Book a Tree Service Consultation in Humble, TX',
  description:
    'Book a consultation with José Hernández Tree Service. Tree trimming, tree removal, landscaping services & more in Humble, Dayton, Baytown, Spring, The Woodlands & Conroe. Affordable options & fair pricing. Call (713) 291-6992.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact & Book Consultation | José Hernández Tree Service — Humble TX',
    description:
      'Book your consultation today. Serving Humble, Dayton, Baytown, Spring, The Woodlands, Conroe & surrounding areas.',
    url: 'https://hernandeztreeservice.com/contact',
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
    a: 'Most consultation requests get a reply within 1–2 hours during business hours. For emergencies, call (713) 291-6992 directly — our crew can often be on-site the same day.',
  },
  {
    q: 'Is the consultation really free?',
    a: 'Yes — 100% free, zero obligation. We assess the job and give you an honest, upfront price. No hidden fees, no pressure.',
  },
  {
    q: 'What info do you need from me?',
    a: 'Just your phone number and address. That\'s it. We\'ll reach out to schedule a time that works for you.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'We offer flexible options on larger jobs. During your consultation, let us know your budget and we\'ll work with you. We accept cash, checks, and all major credit cards.',
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
