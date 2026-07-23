import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: "Katy Roofing Contractor | Free Roof Inspection | Jerry's Roofing",
  description: "Katy's honest roofing contractor — roof replacement, repair, storm & insurance claim help, gutters & siding. Free inspections, same-day for active leaks. Call (409) 351-1529.",
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
