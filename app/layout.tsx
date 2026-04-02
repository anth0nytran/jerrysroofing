import type { Metadata } from "next";
import { JetBrains_Mono, League_Spartan, Manrope } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-app-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const displayFont = League_Spartan({
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
  metadataBase: new URL('https://jhernandeztreeservice.com'),
  title: {
    default: "Tree Service & Landscaping — Humble, Spring, Baytown TX | José Hernández Tree Service",
    template: "%s | José Hernández Tree Service",
  },
  description: "Affordable tree trimming, tree removal, and landscaping in Humble, Spring, Baytown, The Woodlands, Dayton & Conroe TX. 25+ years. Fully insured. 24/7 emergency service. Free estimates. Call (713) 291-6992.",
  keywords: [
    'tree service Humble TX',
    'tree trimming Humble TX',
    'tree removal Humble TX',
    'tree service Spring TX',
    'tree trimming Spring TX',
    'tree removal Baytown TX',
    'tree service The Woodlands TX',
    'tree service Conroe TX',
    'tree service Dayton TX',
    'landscaping Humble TX',
    'landscaping Spring TX',
    'stump grinding Humble TX',
    'storm damage cleanup Baytown TX',
    'emergency tree removal Spring TX',
    'affordable tree service near me',
    'tree trimming Conroe TX',
    'tree cutting service Baytown TX',
    'tree pruning The Woodlands TX',
    'lot clearing Humble TX',
    'debris hauling Spring TX',
    'landscaping service Baytown TX',
    'flower bed installation Humble TX',
    'mulching service Spring TX',
    'insured tree company Humble TX',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Affordable Tree Service & Landscaping — Humble, Spring, Baytown TX | José Hernández Tree Service",
    description: "25+ years serving homeowners in Humble, Spring, Baytown, The Woodlands, Dayton & Conroe. Tree trimming, removal, landscaping, stump grinding & storm cleanup. Fully insured. Free estimates. Call (713) 291-6992.",
    url: 'https://jhernandeztreeservice.com',
    siteName: 'José Hernández Tree Service',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/tree_pro/og-tree.jpg',
        width: 1200,
        height: 630,
        alt: 'José Hernández Tree Service — Tree Trimming, Removal & Landscaping in Humble, Spring & Baytown TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Affordable Tree Service & Landscaping | José Hernández Tree Service",
    description: "24/7 emergency tree service. Tree trimming, removal, landscaping, stump grinding & storm cleanup for Humble, Spring, Baytown, The Woodlands, Dayton & Conroe. Free estimates.",
    images: ['/tree_pro/og-tree.jpg'],
  },
  icons: {
    icon: '/tree_pro/tree_logo.svg',
    shortcut: '/tree_pro/tree_logo.svg',
    apple: '/tree_pro/tree_logo.svg',
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
              "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
              "name": "José Hernández Tree Service",
              "image": "https://jhernandeztreeservice.com/tree_pro/og-tree.jpg",
              "@id": "https://jhernandeztreeservice.com",
              "url": "https://jhernandeztreeservice.com",
              "telephone": "+17132916992",
              "email": "josehernandeztree@gmail.com",
              "description": "Affordable tree trimming, tree removal, and landscaping serving Humble, Dayton, Baytown, Spring, The Woodlands, and Conroe TX. 25+ years in business. Fully insured. 24/7 emergency service. Free estimates. Fair pricing guaranteed.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Humble",
                "addressRegion": "TX",
                "postalCode": "77338",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.9988,
                "longitude": -95.2622
              },
              "areaServed": [
                { "@type": "City", "name": "Humble", "sameAs": "https://en.wikipedia.org/wiki/Humble,_Texas" },
                { "@type": "City", "name": "Dayton" },
                { "@type": "City", "name": "Baytown" },
                { "@type": "City", "name": "Spring" },
                { "@type": "City", "name": "The Woodlands" },
                { "@type": "City", "name": "Conroe" },
                { "@type": "City", "name": "Atascocita" },
                { "@type": "City", "name": "Kingwood" },
                { "@type": "City", "name": "Crosby" },
                { "@type": "City", "name": "Huffman" },
                { "@type": "City", "name": "Porter" },
                { "@type": "City", "name": "New Caney" }
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "priceRange": "$",
              "foundingDate": "2001",
              "knowsLanguage": ["en", "es"],
              "paymentAccepted": "Cash, Credit Card, Check, Zelle",
              "currenciesAccepted": "USD",
              "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 5, "maxValue": 15 },
              "slogan": "Affordable Tree Care & Landscaping You Can Trust",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "50",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Violetta Negrete" },
                  "reviewBody": "José Hernández Tree Service did an amazing job trimming my tree. I highly recommend them for their detail and care.",
                  "datePublished": "2025-08-15"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Joycelyn Rodriguez Sanes" },
                  "reviewBody": "José Hernández Tree Service is very professional. I was quoted a great price, they were on time, and they did an awesome job. I would definitely hire them again in the future.",
                  "datePublished": "2025-07-22"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Isury Watson" },
                  "reviewBody": "They did an amazing job with my tree removal and stump grinding. The crew was on time, professional, and left everything super clean. Highly recommend.",
                  "datePublished": "2025-09-10"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Patricia Rodriguez" },
                  "reviewBody": "José Hernández Tree Service really did an extraordinary job for me. I can sincerely recommend them for their excellent work and professionalism.",
                  "datePublished": "2025-06-18"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Christopher Celona" },
                  "reviewBody": "José Hernández Tree Service takes care of all our properties. Highly recommend their consistent quality.",
                  "datePublished": "2025-10-05"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Maria Gonzalez" },
                  "reviewBody": "So impressed with José Hernández Tree Service. I highly recommend them to anyone needing reliable tree work.",
                  "datePublished": "2025-11-12"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tree & Landscape Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Trimming & Pruning", "description": "Professional tree trimming, crown thinning, structural pruning, and canopy shaping in Humble, Spring, Baytown & surrounding areas" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Removal", "description": "Safe removal of dangerous, dead, or overgrown trees including emergency tree removal serving Humble, Dayton, Baytown, Spring, The Woodlands & Conroe TX" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landscaping Services", "description": "Full-service landscaping, yard design, planting, sod installation, and maintenance for residential and commercial properties" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storm Damage Cleanup", "description": "Emergency storm damage cleanup and debris hauling for homeowners in Humble, Baytown, Spring & surrounding areas" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stump Grinding", "description": "Stump grinding and stump removal below grade level in Humble, Spring, Baytown and surrounding areas" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mulching", "description": "Professional mulching services for flower beds, gardens, and landscape areas" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lot Clearing", "description": "Residential and commercial lot clearing and land clearing services" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Debris Hauling", "description": "Full debris removal and hauling for tree jobs and landscape projects" } }
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
              "name": "José Hernández Tree Service",
              "alternateName": ["Jose Hernandez Tree Service", "Hernandez Tree Service Humble", "JHernandezTreeService.com"],
              "url": "https://jhernandeztreeservice.com"
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
        <div className="hernandez-site min-h-screen bg-white text-slate-900 selection:bg-[var(--hernandez-forest)] selection:text-white">
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
