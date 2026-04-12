import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: "About Jerrys Roofing — Trusted Roofing Contractor in Katy, Texas",
  description:
    "Locally owned roofing company in Katy, Texas. 7 years roofing experience. Serving Katy, Cypress, Cinco Ranch & Richmond since 2024. Licensed, fully insured, 5-star rated. Honest pricing on roof replacement, Roof Rejoov, gutters, siding & painting. Call (409) 351-1529.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: "About Us | Jerrys Roofing — Katy, Texas",
    description:
      "Locally owned in Katy, Texas. Community rooted. 7 years experience. Trusted roofing & exterior services for homeowners in Katy, Cypress, Cinco Ranch, Richmond & Fulshear.",
    url: 'https://roofingbyjerry.com/about',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://roofingbyjerry.com/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://roofingbyjerry.com/about' },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutPageClient />
    </>
  );
}
