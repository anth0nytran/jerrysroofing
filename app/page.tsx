import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: "Roof Replacement & Roofing Contractor — Katy, Cypress, Cinco Ranch TX | Jerry's Roofing",
  description: "Trusted roofing contractor in Katy, TX. Roof replacement, rejuvenation, gutters, siding & painting. dedicated service since 2024. Free inspections & estimates. Honest pricing. Call (409) 351-1529.",
  alternates: { canonical: '/' },
  openGraph: {
    title: "Trusted Roofing Contractor — Katy TX | Jerry's Roofing",
    description: "Serving homeowners in Katy, Cypress, Cinco Ranch, Richmond & Fulshear. Roof replacement, rejuvenation, gutters, siding & painting. Free inspections. Honest pricing.",
    url: 'https://roofingbyjerry.com',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
