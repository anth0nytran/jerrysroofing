import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Star, MapPin } from 'lucide-react';
import { siteConfig } from '../config';

export const metadata: Metadata = {
  title: "Jerry's Roofing Reviews — Katy, TX 5-Star Roofer",
  description: `Real customer reviews for Jerry's Roofing in Katy, Texas. ${siteConfig.reviewCount}+ verified 5-star reviews from homeowners across Katy, Cypress, Cinco Ranch, Fulshear, and Richmond. Call (409) 351-1529.`,
  alternates: { canonical: '/reviews' },
  openGraph: {
    title: "Jerry's Roofing Reviews — Verified 5-Star Roofer in Katy, TX",
    description: `${siteConfig.reviewCount}+ verified 5-star reviews. Real customers, real jobs, no fake testimonials.`,
    url: `${siteConfig.domain}/reviews`,
  },
};

const shell = 'mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10';

export default function ReviewsPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${siteConfig.domain}/reviews` },
    ],
  };

  const collectionPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: "Jerry's Roofing Reviews",
    url: `${siteConfig.domain}/reviews`,
    description: `Verified customer reviews for Jerry's Roofing in Katy, TX. ${siteConfig.reviewCount}+ 5-star reviews from homeowners across the greater Katy area.`,
    about: {
      '@type': 'LocalBusiness',
      name: "Jerrys Roofing",
      url: siteConfig.domain,
      telephone: siteConfig.cleanPhone,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: String(siteConfig.rating.toFixed(1)),
        reviewCount: String(siteConfig.reviewCount),
        bestRating: '5',
        worstRating: '1',
      },
    },
    mainEntity: siteConfig.testimonials.map((t) => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.quote,
      itemReviewed: {
        '@type': 'RoofingContractor',
        name: "Jerrys Roofing",
        url: siteConfig.domain,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />

      <section className="bg-[var(--jerry-navy-deep)] py-14 sm:py-20">
        <div className={shell}>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-[var(--jerry-lime)]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white/70">Reviews</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--jerry-lime)]">
                Verified customer reviews
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.02em] leading-[1.1]">
                {siteConfig.rating.toFixed(1)} stars · {siteConfig.reviewCount}+ verified reviews.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed">
                Real customers, real jobs, real reviews. Every review below is a verified Google
                review from a homeowner across Katy, Cypress, Cinco Ranch, Fulshear, Richmond, Sugar
                Land, or the greater Katy area.
              </p>
            </div>

            <aside className="lg:col-span-4">
              <div className="bg-white/[0.04] border border-white/10 p-6">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[var(--jerry-lime)] text-[var(--jerry-lime)]" />
                  ))}
                </div>
                <p className="text-4xl font-extrabold text-white">{siteConfig.rating.toFixed(1)}<span className="text-lg text-white/50"> / 5</span></p>
                <p className="mt-1 text-sm text-white/60">
                  Based on {siteConfig.reviewCount}+ verified Google reviews
                </p>
                <a
                  href={siteConfig.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-lime)] hover:underline"
                >
                  Read all reviews on Google <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-18">
        <div className={shell}>
          <div className="grid sm:grid-cols-2 gap-5">
            {siteConfig.testimonials.map((t, idx) => (
              <article
                key={idx}
                className="bg-[var(--jerry-cream)] border-l-4 border-[var(--jerry-lime)] p-6 sm:p-7"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--jerry-lime)] text-[var(--jerry-lime)]" />
                  ))}
                </div>
                <p className="text-[0.95rem] sm:text-base text-slate-700 leading-relaxed">
                  {t.quote}
                </p>
                <div className="mt-5 pt-5 border-t border-slate-200">
                  <p className="text-sm font-extrabold text-[var(--jerry-navy-deep)]">{t.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" />
                    {t.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--jerry-cream)] py-14 sm:py-18 border-y border-slate-200">
        <div className={`${shell} text-center`}>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--jerry-navy-light)]">
            Had work done by Jerry?
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em]">
            Leave a review on Google — it means everything to a small crew.
          </h2>
          <a
            href={siteConfig.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[var(--jerry-navy-deep)] px-7 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white hover:bg-[var(--jerry-navy)] transition-colors"
          >
            Write a Google Review <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      <section className="bg-[var(--jerry-navy-deep)] py-14 sm:py-18">
        <div className={`${shell} text-center`}>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--jerry-lime)]">Free Inspection</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.02em]">
            Want to see why homeowners keep calling Jerry back?
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-7 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors"
            >
              Request Free Inspection <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={`tel:${siteConfig.cleanPhone}`}
              className="inline-flex items-center gap-2 border border-white/15 px-7 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white/85 hover:bg-white/5 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" /> Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
