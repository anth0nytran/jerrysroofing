import type { Metadata } from 'next';
import { siteConfig, serviceData } from '../config';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: "Roof Replacement, Gutters, Siding & Painting | Jerrys Roofing — Katy, Texas",
  description:
    "Trusted roofing & exterior services in Katy, Texas, Cypress, Cinco Ranch & Richmond TX. 7 years experience. Roof replacement, Roof Rejoov, gutters, siding, painting & driveway repaints. Free estimates. Call (409) 351-1529.",
  alternates: { canonical: '/services' },
  openGraph: {
    title: "Our Services | Jerrys Roofing — Katy, Texas & Surrounding Areas",
    description:
      "Roof replacement, Roof Rejoov, gutters, siding, painting & driveway repaints. 7 years experience. Dedicated service since 2024. Honest pricing.",
    url: 'https://roofingbyjerry.com/services',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.domain,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: `${siteConfig.domain}/services`,
    },
  ],
};

const serviceFaqs = [
  {
    q: 'How much does a roof replacement cost in Katy, Texas?',
    a: "Roof replacement costs vary based on the size of your home, the roofing material, and the complexity of the job. The average residential roof replacement in the Katy, Texas area ranges from $8,500 to $12,000. We provide free inspections and clear written estimates — no hidden fees, no surprises.",
  },
  {
    q: 'How do I know if I need a roof replacement or just repairs?',
    a: "Signs you may need a replacement include shingles that are curling, cracking, or missing granules, multiple leaks, a roof that's 20+ years old, or visible sagging. Jerry personally inspects every roof and gives you an honest assessment — if repairs will do the job, we'll tell you.",
  },
  {
    q: 'Do you help with insurance claims for storm damage?',
    a: `Absolutely. We work with your insurance company through the entire claims process. From the initial inspection to documenting damage and filing paperwork, we make sure you get the coverage you're entitled to. In Texas, you have up to two years after a natural disaster to file a claim. Call us at ${siteConfig.phone} to get started.`,
  },
  {
    q: 'What is Roof Rejoov and how does it work?',
    a: "Roof Rejoov uses a bio-based treatment that penetrates asphalt shingles and restores the essential oils that dry out over time from Texas sun and heat. It reverses brittleness, stops granule loss, and can extend your roof's lifespan by 5 to 10 years — at a fraction of the cost of a full replacement.",
  },
  {
    q: 'How long does a roof replacement take?',
    a: "Most residential roof replacements are completed in 1-2 days, depending on the size and complexity. We'll give you a clear timeline before work begins so you can plan accordingly.",
  },
  {
    q: 'What roofing materials do you use?',
    a: "We use premium shingles from IKO, CertainTeed, GAF, and F-Wave — the top manufacturers in the industry, including F-Wave's next-generation synthetic shingles. We'll help you choose the right material for your home's style, budget, and the Texas climate.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: serviceFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

export default function ServicesPage() {
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
      <ServicesPageClient services={serviceData} faqs={serviceFaqs} />
    </>
  );
}
