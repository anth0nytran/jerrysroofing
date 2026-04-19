import type { Metadata } from "next";
import { Poppins, Open_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { siteConfig } from "./config";
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
    default: "Roof Replacement & Roofing Contractor in Katy, Texas — Cypress, Cinco Ranch TX | Jerrys Roofing",
    template: "%s | Jerrys Roofing",
  },
  description: "Trusted roofing contractor in Katy, Texas. 7 years of roofing experience. Roof replacement, Roof Rejoov, gutters, siding & painting. Dedicated service since 2024. Free inspections & estimates. Honest pricing. Call (409) 351-1529.",
  keywords: [
    'roofing contractor Katy TX',
    'roofing contractor Katy Texas',
    'roof replacement Katy TX',
    'roof replacement Katy Texas',
    'roofer Katy TX',
    'roofer Katy Texas',
    'roof repair Katy TX',
    'roofing company Katy TX',
    'roofing company Katy Texas',
    'roof replacement Cypress TX',
    'roofer Cypress TX',
    'roof replacement Cinco Ranch TX',
    'roof rejoov Katy TX',
    'roof rejuvenation Katy TX',
    'gutter installation Katy TX',
    'siding installation Katy TX',
    'exterior painting Katy TX',
    'storm damage roof repair Katy TX',
    'roof insurance claim Katy TX',
    'free roof inspection Katy TX',
    'free roof inspection Katy Texas',
    'roofing contractor Cypress TX',
    'roofing company Richmond TX',
    'roof replacement Fulshear TX',
    'roofer near me Katy',
    'roofer near me Katy Texas',
    'affordable roofing Katy TX',
    'residential roofing Katy TX',
    'residential roofing Katy Texas',
    'roof inspection Katy TX',
    'roofing contractor Cinco Ranch',
    'gutter repair Cypress TX',
    'roofing College Station TX',
    'roof replacement College Station TX',
    'best roofer Katy Texas',
    'Katy Texas roofing company',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Trusted Roofing Contractor in Katy, Texas — Cypress, Cinco Ranch TX | Jerrys Roofing",
    description: "Serving homeowners in Katy, Texas, Cypress, Cinco Ranch, Richmond & Fulshear. 7 years experience. Roof replacement, Roof Rejoov, gutters, siding & painting. Free inspections. Honest pricing. Call (409) 351-1529.",
    url: 'https://roofingbyjerry.com',
    siteName: "Jerrys Roofing",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/roofing/og-roofing.jpg',
        width: 1200,
        height: 630,
        alt: "Jerrys Roofing — Roof Replacement, Repair & Exterior Services in Katy, Texas, Cypress & Cinco Ranch TX",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Trusted Roofing Contractor in Katy, Texas | Jerrys Roofing",
    description: "7 years roofing experience. Since 2024. Roof replacement, Roof Rejoov, gutters, siding & painting for Katy, Texas, Cypress, Cinco Ranch, Richmond & Fulshear. Free inspections. Honest pricing.",
    images: ['/roofing/og-roofing.jpg'],
  },
  icons: {
    icon: '/pictures/logo-transparent.svg',
    shortcut: '/pictures/logo-transparent.svg',
    apple: '/pictures/logo-transparent.png',
  },
  manifest: '/manifest.json',
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
              "name": "Jerrys Roofing",
              "image": "https://roofingbyjerry.com/roofing/og-roofing.jpg",
              "@id": "https://roofingbyjerry.com",
              "url": "https://roofingbyjerry.com",
              "telephone": "+14093511529",
              "email": "jerrysroofinginfo@gmail.com",
              "description": "Trusted roofing contractor in Katy, Texas. 7 years roofing experience. Roof replacement, Roof Rejoov, gutters, siding & painting. Dedicated service since 2024. Free inspections & estimates. Honest pricing. We do what we say.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5713 2nd St B",
                "addressLocality": "Katy",
                "addressRegion": "TX",
                "postalCode": "77493",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.7925,
                "longitude": -95.8226
              },
              "hasMap": "https://www.google.com/maps/place/5713+2nd+St+B,+Katy,+TX+77493",
              "sameAs": [
                "https://g.page/jerrysroofing",
                "https://www.facebook.com/jerrysroofing",
                "https://www.instagram.com/jerrysroofing"
                // TODO: add confirmed URLs for the following once Jerry provides them:
                // "https://www.yelp.com/biz/jerrys-roofing-katy"
                // "https://www.bbb.org/us/tx/katy/profile/roofing-contractors/jerrys-roofing"
                // "https://www.angi.com/companylist/us/tx/katy/jerrys-roofing"
                // "https://www.homeadvisor.com/rated.JerrysRoofing.0000000.html"
                // "https://nextdoor.com/pages/jerrys-roofing-katy-tx"
                // "https://www.thumbtack.com/tx/katy/roofing/jerrys-roofing"
                // "https://www.linkedin.com/company/jerrys-roofing"
                // "https://www.youtube.com/@jerrysroofing"
              ],
              "founder": {
                "@type": "Person",
                "name": "Jerry W. Pilley",
                "jobTitle": "Owner & Lead Roofer",
                "worksFor": { "@type": "Organization", "name": "Jerrys Roofing" },
                "knowsAbout": [
                  "Roof Replacement",
                  "Roof Rejuvenation",
                  "Asphalt Shingle Roofing",
                  "Storm Damage Restoration",
                  "Texas Insurance Claims",
                  "Hail Damage Repair",
                  "Gutter Installation",
                  "Siding Installation",
                  "Exterior Painting"
                ],
                "knowsLanguage": "en"
              },
              "employee": {
                "@type": "Person",
                "name": "Jerry W. Pilley",
                "jobTitle": "Owner & Lead Roofer"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 29.7858,
                  "longitude": -95.8245
                },
                "geoRadius": "60000"
              },
              "areaServed": [
                { "@type": "City", "name": "Katy", "sameAs": "https://en.wikipedia.org/wiki/Katy,_Texas" },
                { "@type": "City", "name": "Cypress" },
                { "@type": "City", "name": "Cinco Ranch" },
                { "@type": "City", "name": "Richmond" },
                { "@type": "City", "name": "Fulshear" },
                { "@type": "City", "name": "Brookshire" },
                { "@type": "City", "name": "Sugar Land" },
                { "@type": "City", "name": "Sealy" },
                { "@type": "City", "name": "College Station" }
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
                "ratingValue": siteConfig.rating.toFixed(1),
                "reviewCount": String(siteConfig.reviewCount),
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                  "author": { "@type": "Person", "name": "Jerry P." },
                  "reviewBody": "We did the Roof Rejoov on both of my houses in Groves, Texas. Both roofs were nearly gone, and just by looking at them now I can guarantee we'll get 7 to 10 more years out of each one. Totally satisfied with the whole process.",
                  "datePublished": "2026-04-08"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                  "author": { "@type": "Person", "name": "Robert K." },
                  "reviewBody": "Jerry did a great job on our roof and aluminum siding, and helped us work with our insurance and really made things work for us. We recommend Jerrys Roofing to anyone.",
                  "datePublished": "2024-09-23"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                  "author": { "@type": "Person", "name": "Christopher H." },
                  "reviewBody": "Overall amazing. From the assessment to the repair it was easy, and definitely the best price in town. I would use them again for any and all roofing repairs.",
                  "datePublished": "2026-04-08"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                  "author": { "@type": "Person", "name": "John R." },
                  "reviewBody": "Jerry did an excellent job fixing a leak in my roof. He came out the same day, worked quickly, and the leak was completely fixed. Great service — highly recommended.",
                  "datePublished": "2024-10-21"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                  "author": { "@type": "Person", "name": "Nehemiah C." },
                  "reviewBody": "Jerry came by and gave us an estimate right away. He took his time and did a thorough inspection, and the next day it was fixed.",
                  "datePublished": "2024-11-14"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                  "author": { "@type": "Person", "name": "Jasbir D." },
                  "reviewBody": "Jerry did a brilliant job repairing my roof. Arrived on time, worked hard, and completed the job very well. I highly recommend them.",
                  "datePublished": "2024-09-17"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                  "author": { "@type": "Person", "name": "Huina C." },
                  "reviewBody": "Very professional and responsive. Highly recommend.",
                  "datePublished": "2026-04-08"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                  "author": { "@type": "Person", "name": "Baylee L." },
                  "reviewBody": "Best roofing company in the greater Houston area.",
                  "datePublished": "2024-09-15"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Roofing & Exterior Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement", "description": "Complete roof tear-off and replacement with premium IKO, CertainTeed, GAF, or F-Wave synthetic shingles in Katy, Texas, Cypress, Cinco Ranch & surrounding areas" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Rejoov", "description": "Bio-based shingle restoration that extends roof lifespan 5-10 years without full replacement" } },
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
              "name": "Jerrys Roofing",
              "alternateName": ["Jerrys Roofing", "Jerrys Roofing Katy", "Jerrys Roofing Katy Texas", "Roofing By Jerry", "RoofingByJerry.com"],
              "url": "https://roofingbyjerry.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://roofingbyjerry.com/blog?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
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
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--jerry-navy-deep)] focus:text-[var(--jerry-lime)] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:outline-none focus:ring-2 focus:ring-[var(--jerry-lime)]"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
