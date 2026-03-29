import type { Metadata } from 'next';
import { siteConfig } from '../config';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About José Hernández Tree Service — Affordable Tree Care in Humble, TX & Surrounding Areas',
  description:
    'Family-owned tree service & landscape company serving Humble, Dayton, Baytown, Spring, The Woodlands & Conroe for 25+ years. Licensed, fully insured, 5-star rated. Affordable tree trimming, removal & landscaping. Call (713) 291-6992.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | José Hernández Tree Service — Humble, TX',
    description:
      'Family-owned, locally rooted. 25+ years of affordable, trusted tree care & landscaping for homeowners in Humble, Dayton, Baytown, Spring, The Woodlands & Conroe.',
    url: 'https://hernandeztreeservice.com/about',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hernandeztreeservice.com/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://hernandeztreeservice.com/about' },
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
