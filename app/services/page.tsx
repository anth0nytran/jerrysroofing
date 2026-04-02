import type { Metadata } from 'next';
import { siteConfig, serviceData } from '../config';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Tree Trimming, Tree Removal & Landscaping | José Hernández Tree Service',
  description:
    'Affordable tree trimming, tree removal, and landscaping services in Humble, Dayton, Baytown, Spring, The Woodlands & Conroe TX. Fair pricing. Fully insured. Call (713) 291-6992.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Services | José Hernández Tree Service — Humble & Surrounding Areas',
    description:
      'Tree trimming, tree removal, landscaping, stump grinding, storm cleanup, flower beds & mulching. 25+ years experience. Affordable rates.',
    url: 'https://jhernandeztreeservice.com/services',
  },
};

/* ─── Structured Data ─── */
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
    q: 'How much does tree removal cost in Humble, TX?',
    a: 'Tree removal costs vary based on the size, location, and complexity of the job. Small tree removals may start around $300, while large or hazardous removals can range higher. We offer affordable options with fair pricing — book a consultation and we\'ll give you an honest quote before any work begins.',
  },
  {
    q: 'When is the best time to trim trees in the Humble and Spring area?',
    a: 'Most trees in the Humble, Spring, and Baytown area can be trimmed year-round, but late winter (January–March) is ideal for major pruning because trees are dormant and recovery is fastest. Dead or hazardous limbs should be removed as soon as they are noticed, regardless of season.',
  },
  {
    q: 'Do I need a permit to remove a tree in Humble or Baytown?',
    a: 'In most cases, you do not need a permit to remove a tree on private residential property in unincorporated Harris County. However, some cities and HOAs in the Humble, Baytown, Spring, and Conroe areas have specific tree ordinances. We can help you determine if a permit is required for your situation.',
  },
  {
    q: 'How long does stump grinding take?',
    a: 'Most residential stumps are ground down in 30 minutes to 2 hours depending on the size. We grind 6–8 inches below grade so the area is ready for sod, landscaping, or whatever you have planned next. Multiple stumps can usually be completed in a single visit.',
  },
  {
    q: 'Do you offer emergency tree removal after storms?',
    a: `Yes — our crew is available 24/7 for emergency storm damage and tree removal. Call us immediately at ${siteConfig.phone} and we will mobilize as quickly and safely as possible to clear fallen trees and debris from your property.`,
  },
  {
    q: 'What is included in your flower bed installation service?',
    a: 'Our flower bed installation includes bed design, excavation, soil amendment, edging installation, planting, and a fresh layer of mulch to finish. We handle every step so your landscaping looks polished and professional from day one.',
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
