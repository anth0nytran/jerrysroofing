import type { Metadata } from 'next';
import RoofRejoovClient from './RoofRejoovClient';

export const metadata: Metadata = {
  title: "Roof Rejoov — Extend Your Roof's Life 5-10 Years | Jerrys Roofing — Katy, Texas",
  description:
    "Roof Rejoov restores aging shingles with a bio-based treatment — extending your roof's life by 5-10 years at a fraction of the cost of replacement. Serving Katy, Texas, Cypress, Cinco Ranch & surrounding areas. Call (409) 351-1529 for a free inspection.",
  alternates: { canonical: '/roof-rejoov' },
  openGraph: {
    title: "Roof Rejoov | Jerrys Roofing — Katy, Texas",
    description:
      "Don't replace your roof — Rejoov it. Bio-based shingle restoration that extends roof life 5-10 years. Serving Katy, Texas homeowners.",
    url: 'https://roofingbyjerry.com/roof-rejoov',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://roofingbyjerry.com/' },
    { '@type': 'ListItem', position: 2, name: 'Roof Rejoov', item: 'https://roofingbyjerry.com/roof-rejoov' },
  ],
};

export default function RoofRejoovPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <RoofRejoovClient />
    </>
  );
}
