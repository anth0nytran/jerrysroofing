import type { Metadata } from "next";
import { Poppins, Open_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./globals.css";

const bodyFont = Open_Sans({
  variable: "--font-app-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const displayFont = Poppins({
  variable: "--font-app-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-app-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://roofingbyjerry.com'),
  title: {
    default: "Roof Replacement & Roofing Contractor — Katy, Cypress, Cinco Ranch TX | Jerry's Roofing",
    template: "%s | Jerry's Roofing",
  },
  description: "Trusted roofing contractor in Katy, TX. Roof replacement, rejuvenation, gutters, siding & painting. dedicated service since 2024. Free inspections & estimates. Honest pricing. Call (409) 351-1529.",
  keywords: [
    'roofing contractor Katy TX',
    'roof replacement Katy TX',
    'roofer Katy TX',
    'roof repair Katy TX',
    'roofing company Katy TX',
    'roof replacement Cypress TX',
    'roofer Cypress TX',
    'roof replacement Cinco Ranch TX',
    'roof rejuvenation Katy TX',
    'gutter installation Katy TX',
    'siding installation Katy TX',
    'exterior painting Katy TX',
    'storm damage roof repair Katy TX',
    'roof insurance claim Katy TX',
    'free roof inspection Katy TX',
    'roofing contractor Cypress TX',
    'roofing company Richmond TX',
    'roof replacement Fulshear TX',
    'roofer near me Katy',
    'affordable roofing Katy TX',
    'residential roofing Katy TX',
    'roof inspection Katy TX',
    'roofing contractor Cinco Ranch',
    'gutter repair Cypress TX',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Trusted Roofing Contractor — Katy, Cypress, Cinco Ranch TX | Jerry's Roofing",
    description: "Serving homeowners in Katy, Cypress, Cinco Ranch, Richmond & Fulshear. Roof replacement, rejuvenation, gutters, siding & painting. Free inspections. Honest pricing. Call (409) 351-1529.",
    url: 'https://roofingbyjerry.com',
    siteName: "Jerry's Roofing",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/roofing/og-roofing.jpg',
        width: 1200,
        height: 630,
        alt: "Jerry's Roofing — Roof Replacement, Repair & Exterior Services in Katy, Cypress & Cinco Ranch TX",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Trusted Roofing Contractor — Katy TX | Jerry's Roofing",
    description: "Since 2024. Roof replacement, rejuvenation, gutters, siding & painting for Katy, Cypress, Cinco Ranch, Richmond & Fulshear. Free inspections. Honest pricing.",
    images: ['/roofing/og-roofing.jpg'],
  },
  icons: {
    icon: '/pictures/logo-transparent.svg',
    shortcut: '/pictures/logo-transparent.svg',
    apple: '/pictures/logo-transparent.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const gscVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "RoofingContractor"],
              "name": "Jerry's Roofing",
              "image": "https://roofingbyjerry.com/roofing/og-roofing.jpg",
              "@id": "https://roofingbyjerry.com",
              "url": "https://roofingbyjerry.com",
              "telephone": "+14093511529",
              "email": "jerrysroofinginfo@gmail.com",
              "description": "Trusted roofing contractor in Katy, TX. Roof replacement, rejuvenation, gutters, siding & painting. dedicated service since 2024. Free inspections & estimates. Honest pricing. We do what we say.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Katy",
                "addressRegion": "TX",
                "postalCode": "77493",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.7858,
                "longitude": -95.8245
              },
              "areaServed": [
                { "@type": "City", "name": "Katy", "sameAs": "https://en.wikipedia.org/wiki/Katy,_Texas" },
                { "@type": "City", "name": "Cypress" },
                { "@type": "City", "name": "Cinco Ranch" },
                { "@type": "City", "name": "Richmond" },
                { "@type": "City", "name": "Fulshear" },
                { "@type": "City", "name": "Brookshire" },
                { "@type": "City", "name": "Sugar Land" },
                { "@type": "City", "name": "Sealy" }
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "07:00",
                "closes": "20:00"
              },
              "priceRange": "$$",
              "foundingDate": "2024",
              "knowsLanguage": ["en"],
              "paymentAccepted": "Cash, Credit Card, Check, Financing",
              "currenciesAccepted": "USD",
              "slogan": "Straight forward roofing with quality as the focus",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "16",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Mike & Sarah T." },
                  "reviewBody": "Jerry and his team replaced our entire roof after the hailstorm. They handled the insurance claim and made the whole process stress-free. Quality work at a fair price.",
                  "datePublished": "2025-08-15"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "David R." },
                  "reviewBody": "Honest and straightforward — exactly what Jerry promises. No pressure, just a fair quote and quality craftsmanship. Our roof looks amazing.",
                  "datePublished": "2025-07-22"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Linda K." },
                  "reviewBody": "We called Jerry for a free inspection and he found damage we didn't even know about. He walked us through the entire insurance process. Highly recommend.",
                  "datePublished": "2025-09-10"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Roofing & Exterior Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement", "description": "Complete roof tear-off and replacement with premium IKO, CertainTeed, or GAF shingles in Katy, Cypress, Cinco Ranch & surrounding areas" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Rejuvenation", "description": "Bio-based shingle restoration that extends roof lifespan 5-10 years without full replacement" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutter Installation & Repair", "description": "Seamless aluminum gutters custom-fitted to your roofline with gutter guard options" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding Installation & Repair", "description": "Vinyl, fiber cement, and engineered wood siding installation and repair" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Painting", "description": "Professional exterior painting with premium paints rated for Texas climate" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Driveway Repaints & Coatings", "description": "Driveway cleaning, repair, and recoating with durable epoxy or acrylic coatings" } }
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jerry's Roofing",
              "alternateName": ["Jerrys Roofing", "Jerry's Roofing Katy", "Roofing By Jerry", "RoofingByJerry.com"],
              "url": "https://roofingbyjerry.com"
            })
          }}
        />
        {gaId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        ) : null}
        {gscVerification ? (
          <meta name="google-site-verification" content={gscVerification} />
        ) : null}
      </head>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} antialiased`}
      >
        <div className="jerry-site min-h-screen bg-white text-slate-900 selection:bg-[var(--jerry-navy)] selection:text-[var(--jerry-lime)]">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
