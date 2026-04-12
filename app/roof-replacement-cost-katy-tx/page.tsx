import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Phone,
  DollarSign,
  AlertTriangle,
} from 'lucide-react';
import { costPillarData } from '../costPillarData';
import { siteConfig } from '../config';
import { SubHero } from '../components/SubHero';

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

export const metadata: Metadata = {
  title: costPillarData.metaTitle,
  description: costPillarData.metaDescription,
  keywords: [
    'roof replacement cost Katy TX',
    'roof replacement cost Katy Texas',
    'how much does a new roof cost in Katy',
    'roofing prices Katy TX',
    'roof installation cost Cypress TX',
    'shingle roof cost Cinco Ranch',
    'metal roof cost Katy Texas',
    'roof replacement price 2026',
  ],
  alternates: { canonical: '/roof-replacement-cost-katy-tx' },
  openGraph: {
    title: costPillarData.metaTitle,
    description: costPillarData.metaDescription,
    url: 'https://roofingbyjerry.com/roof-replacement-cost-katy-tx',
    type: 'article',
  },
};

export default function CostPillarPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Roof Replacement Cost in Katy, TX', item: `${siteConfig.domain}/roof-replacement-cost-katy-tx` },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: costPillarData.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: costPillarData.h1,
    description: costPillarData.metaDescription,
    datePublished: '2026-04-11',
    dateModified: '2026-04-11',
    author: {
      '@type': 'Person',
      name: 'Jerry W. Pilley',
      jobTitle: 'Owner & Lead Roofer, Jerrys Roofing',
      url: 'https://roofingbyjerry.com/about',
    },
    publisher: { '@type': 'Organization', name: 'Jerrys Roofing', url: 'https://roofingbyjerry.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://roofingbyjerry.com/roof-replacement-cost-katy-tx' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <SubHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Roof Cost Guide' }]}
        pill={{
          icon: <DollarSign className="h-3 w-3" />,
          text: '2026 Pricing Guide · Updated April 2026',
        }}
        title="How much does a roof replacement cost in Katy, TX?"
        accent="Katy, TX"
        subtitle="Real 2026 numbers, broken down by home size and material. By Jerry W. Pilley, owner — 7 years roofing the Katy area."
      />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TL;DR + INTRO — 2-col split                                       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--jerry-navy-light)]">The Honest Numbers</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
                What a new roof actually costs in Katy.
              </h2>
              <div className="mt-6 blog-prose" dangerouslySetInnerHTML={{ __html: costPillarData.intro }} />
            </div>

            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24 space-y-5">
                <div className="border-l-4 border-[var(--jerry-lime)] bg-[var(--jerry-cream)] p-5 sm:p-6 rounded-r-lg">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-navy-deep)] mb-3">
                    Quick Answer
                  </p>
                  <p className="text-sm sm:text-[0.95rem] leading-relaxed text-slate-700">{costPillarData.tldr}</p>
                </div>
                <div className="bg-[var(--jerry-navy-deep)] p-5 sm:p-6">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-lime)] mb-3">
                    Get Your Number
                  </p>
                  <a
                    href={`tel:${siteConfig.cleanPhone}`}
                    className="block text-2xl sm:text-3xl font-extrabold text-white hover:text-[var(--jerry-lime)] transition-colors mb-2"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-xs text-white/50 mb-4">
                    Jerry quotes every roof himself. No salespeople.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] w-full justify-center px-5 py-3 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition"
                  >
                    Free Estimate <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* COST RANGES TABLE — featured                                      */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-cream)] py-14 sm:py-20">
        <div className={shell}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow text-[var(--jerry-navy-light)]">2026 Cost Ranges</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              Katy roof replacement cost<br className="hidden sm:block" /> by home size.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500">
              Installed prices for full tear-off and replacement. Includes permits, dump fees, synthetic underlayment, and starter strip.
            </p>
          </div>

          <div className="max-w-5xl mx-auto blog-prose">
            <div className="table-wrap" dangerouslySetInnerHTML={{ __html: costPillarData.costRangesTable }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* COST FACTORS — numbered cards in grid                             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="max-w-3xl mb-12">
            <p className="eyebrow text-[var(--jerry-navy-light)]">What Drives the Number</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              The 8 things that move the price up or down.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
            {costPillarData.costFactors.map((factor, idx) => (
              <div
                key={idx}
                className="border border-slate-200 bg-[var(--jerry-cream)] p-6 sm:p-7 hover:border-[var(--jerry-lime)] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[0.7rem] font-extrabold text-[var(--jerry-lime)]/70">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-[var(--jerry-navy-deep)] mb-3 leading-snug">
                  {factor.title}
                </h3>
                <div
                  className="blog-prose text-sm text-slate-600 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:mb-0"
                  dangerouslySetInnerHTML={{ __html: factor.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* MATERIAL COMPARISON TABLE                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-cream)] py-14 sm:py-20">
        <div className={shell}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow text-[var(--jerry-navy-light)]">Pick Your Material</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              Roofing material comparison<br className="hidden sm:block" /> for Katy homes.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500">
              Cost per square foot, lifespan, wind rating, and impact class.
            </p>
          </div>

          <div className="max-w-5xl mx-auto blog-prose">
            <div className="table-wrap" dangerouslySetInnerHTML={{ __html: costPillarData.materialComparisonTable }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* INSURANCE COVERAGE — dark navy section                            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-navy-deep)] py-14 sm:py-20">
        <div className={shell}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[var(--jerry-lime)]">Insurance & Storms</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.02em] leading-[1.15]">
                Will my insurance cover this?
              </h2>
              <p className="mt-5 text-sm sm:text-base text-white/60 leading-relaxed">
                In Katy, the honest answer is: probably, if there is real storm damage. Hail and wind are standard covered perils on every Texas HO-3 and HO-5 policy.
              </p>
              <Link
                href="/insurance-claims"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--jerry-lime)] hover:underline"
              >
                Read the full Texas insurance claim guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div
                className="blog-prose blog-prose-dark"
                dangerouslySetInnerHTML={{ __html: costPillarData.insuranceSection }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* HIDDEN COSTS — alert-style cards                                  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="max-w-3xl mb-12">
            <p className="eyebrow text-[var(--jerry-navy-light)]">Watch Out For</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              Hidden costs in a roof quote.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500">
              These are the line items that surprise homeowners mid-job. A good quote spells them out before you sign.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {costPillarData.hiddenCosts.map((item, idx) => (
              <div key={idx} className="bg-[var(--jerry-cream)] border border-slate-200 p-5 sm:p-6 hover:border-[var(--jerry-lime)] transition-colors">
                <AlertTriangle className="h-5 w-5 text-[var(--jerry-lime)] mb-3" />
                <h3 className="text-sm sm:text-[0.95rem] font-extrabold text-[var(--jerry-navy-deep)] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[0.85rem] text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* WHY JERRY                                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-cream)] py-14 sm:py-20">
        <div className={shell}>
          <div className="max-w-3xl mx-auto blog-prose">
            <div dangerouslySetInnerHTML={{ __html: costPillarData.whyJerry }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FAQ — accordion grid                                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="eyebrow text-[var(--jerry-navy-light)]">Cost FAQ</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              Questions homeowners ask.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-3 items-start">
            {costPillarData.faqs.map((f, idx) => (
              <details
                key={idx}
                className="group bg-[var(--jerry-cream)] border border-slate-200 px-5 py-4 hover:border-slate-300 transition-colors"
              >
                <summary className="flex items-start justify-between cursor-pointer list-none gap-3">
                  <span className="text-sm sm:text-[0.95rem] font-bold text-[var(--jerry-navy-deep)] leading-snug pr-1">
                    {f.q}
                  </span>
                  <span className="text-[var(--jerry-lime)] text-xl font-bold group-open:rotate-45 transition-transform shrink-0 leading-none mt-0.5">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* RELATED LINKS                                                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-cream)] py-12 border-y border-slate-200">
        <div className={shell}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-navy-light)]">See Also</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Insurance Claim Guide', href: '/insurance-claims' },
                { label: 'Roof Replacement Service', href: '/services/roof-replacement' },
                { label: 'Storm Damage Restoration', href: '/services/storm-damage' },
                { label: 'Roof Rejoov', href: '/roof-rejoov' },
                { label: 'Roofing Glossary', href: '/glossary' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:border-[var(--jerry-navy-deep)] px-3.5 py-2 text-xs sm:text-[0.8rem] font-bold text-[var(--jerry-navy-deep)] transition-all"
                >
                  {link.label} <ArrowRight className="h-3 w-3 text-[var(--jerry-lime)]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CTA                                                               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-navy-deep)] py-16 sm:py-20">
        <div className={`${shell} text-center`}>
          <p className="eyebrow text-[var(--jerry-lime)]">Free Estimate</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1]">
            Get your real Katy<br className="hidden sm:block" /> roof number.
          </h2>
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Jerry answers his own phone. No salespeople, no pressure, no gimmicks — just a straight number on your specific house.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-7 py-3.5 text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors"
            >
              Request Free Estimate <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={`tel:${siteConfig.cleanPhone}`}
              className="inline-flex items-center gap-2 border border-white/15 px-7 py-3.5 text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.15em] text-white/85 hover:bg-white/5 hover:text-white transition-all"
            >
              <Phone className="h-3.5 w-3.5" /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
