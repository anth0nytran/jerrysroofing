import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: "Roof Replacement & Roofing Contractor in Katy, Texas — Cypress, Cinco Ranch TX | Jerrys Roofing",
  description: "Trusted roofing contractor in Katy, Texas. 7 years roofing experience. Roof replacement, Roof Rejoov, gutters, siding & painting. Dedicated service since 2024. Free inspections & estimates. Honest pricing. Call (409) 351-1529.",
  alternates: { canonical: '/' },
  openGraph: {
    title: "Trusted Roofing Contractor in Katy, Texas | Jerrys Roofing",
    description: "Serving homeowners in Katy, Texas, Cypress, Cinco Ranch, Richmond & Fulshear. 7 years experience. Roof replacement, Roof Rejoov, gutters, siding & painting. Free inspections. Honest pricing.",
    url: 'https://roofingbyjerry.com',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
