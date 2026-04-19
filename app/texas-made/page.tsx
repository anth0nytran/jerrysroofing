import type { Metadata } from 'next';
import TexasMadeClient from './TexasMadeClient';

export const metadata: Metadata = {
  title: "Built in Texas — IKO Hillsboro & F-Wave Burleson | Jerrys Roofing — Katy, Texas",
  description:
    "Why Jerrys Roofing spotlights IKO and F-Wave — the two shingle manufacturers that build their product right here in Texas. IKO's 250,000 sq ft Hillsboro plant and F-Wave's Burleson HQ. Sourced, cited, and installed across Katy.",
  alternates: { canonical: '/texas-made' },
  openGraph: {
    title: "Built in Texas — IKO & F-Wave | Jerrys Roofing",
    description:
      "IKO (Hillsboro, TX) and F-Wave (Burleson, TX) — the two shingle brands actually manufactured in Texas. Here's why we install them on Katy roofs.",
    url: 'https://roofingbyjerry.com/texas-made',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://roofingbyjerry.com/' },
    { '@type': 'ListItem', position: 2, name: 'Texas Made Products', item: 'https://roofingbyjerry.com/texas-made' },
  ],
};

export default function TexasMadePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <TexasMadeClient />
    </>
  );
}
