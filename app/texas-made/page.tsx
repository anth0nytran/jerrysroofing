import type { Metadata } from 'next';
import TexasMadeClient from './TexasMadeClient';

export const metadata: Metadata = {
  title: "Texas Made Products — Premium Roofing Materials | Jerrys Roofing — Katy, Texas",
  description:
    "Jerrys Roofing uses only premium, Texas-tough roofing materials from IKO, CertainTeed, GAF, and F-Wave synthetic. Products built to withstand the brutal Texas heat, Gulf Coast storms, and Katy weather. Call (409) 351-1529.",
  alternates: { canonical: '/texas-made' },
  openGraph: {
    title: "Texas Made Products | Jerrys Roofing — Katy, Texas",
    description:
      "Premium roofing materials built for Texas weather. IKO, CertainTeed, GAF, and F-Wave synthetic — the best manufacturers for Katy, Texas homes.",
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
