import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Affordable Tree Service & Landscaping — Humble, Spring, Baytown TX | José Hernández Tree Service',
  description: 'Affordable tree trimming, tree removal, and landscaping in Humble, Spring, Baytown, The Woodlands, Dayton & Conroe TX. 25+ years. Fully insured. 24/7 emergency. Free estimates. Call (713) 291-6992.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Affordable Tree Service & Landscaping | José Hernández Tree Service',
    description: '25+ years serving homeowners in Humble, Spring, Baytown, The Woodlands & Conroe. Tree trimming, removal, landscaping & more. Fully insured. Free estimates.',
    url: 'https://jhernandeztreeservice.com',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
