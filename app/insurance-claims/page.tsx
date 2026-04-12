import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Phone,
  ShieldAlert,
  AlertTriangle,
} from 'lucide-react';
import { insuranceClaimsData } from '../insuranceClaimsData';
import { siteConfig } from '../config';
import { SubHero } from '../components/SubHero';

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

export const metadata: Metadata = {
  title: insuranceClaimsData.metaTitle,
  description: insuranceClaimsData.metaDescription,
  keywords: [
    'Texas roof insurance claim',
    'roof insurance claim Katy TX',
    'hail damage claim Texas',
    'storm damage insurance Katy',
    'TDI roof claim',
    'how to file roof claim Texas',
    'roof claim deadline Texas',
    'insurance adjuster meeting roofer',
  ],
  alternates: { canonical: '/insurance-claims' },
  openGraph: {
    title: insuranceClaimsData.metaTitle,
    description: insuranceClaimsData.metaDescription,
    url: 'https://roofingbyjerry.com/insurance-claims',
    type: 'article',
  },
};

export default function InsuranceClaimsPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Texas Roof Insurance Claim Guide', item: `${siteConfig.domain}/insurance-claims` },
    ],
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to File a Roof Insurance Claim in Texas',
    description: insuranceClaimsData.metaDescription,
    totalTime: 'P21D',
    step: insuranceClaimsData.steps.map((s) => ({
      '@type': 'HowToStep',
      position: s.position,
      name: s.name,
      text: s.body,
    })),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: insuranceClaimsData.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insuranceClaimsData.h1,
    description: insuranceClaimsData.metaDescription,
    datePublished: '2026-04-11',
    dateModified: '2026-04-11',
    author: {
      '@type': 'Person',
      name: 'Jerry W. Pilley',
      jobTitle: 'Owner & Lead Roofer, Jerrys Roofing',
      url: 'https://roofingbyjerry.com/about',
    },
    publisher: { '@type': 'Organization', name: 'Jerrys Roofing', url: 'https://roofingbyjerry.com' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <SubHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Insurance Claims Guide' }]}
        pill={{
          icon: <ShieldAlert className="h-3 w-3" />,
          text: 'Texas TDI Resource · Updated April 2026',
        }}
        title="Texas roof insurance claims, explained straight."
        accent="explained straight"
        subtitle="How to file a claim, what is covered, what to avoid, and how Jerry walks the roof with your adjuster. By Jerry Pilley — 7 years on Katy storm jobs."
      />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TL;DR + INTRO                                                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--jerry-navy-light)]">The Honest Version</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
                What every Katy homeowner needs to know about a Texas roof claim.
              </h2>
              <p className="mt-6 text-base sm:text-[1.0625rem] text-slate-600 leading-[1.75]">
                Texas insurance law has shifted in recent legislative sessions. The old &ldquo;you have two years to file&rdquo; advice no longer fits every situation. The single most important thing you can do after a hailstorm or windstorm is move quickly: document the damage, get a real inspection from a local roofer, and open the claim before the deadline closes on your loss date. We do not play insurance games. We walk your roof, tell you the truth about what we see, meet your adjuster on-site, and never touch your deductible.
              </p>
            </div>

            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24 space-y-5">
                <div className="border-l-4 border-[var(--jerry-lime)] bg-[var(--jerry-cream)] p-5 sm:p-6 rounded-r-lg">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-navy-deep)] mb-3">
                    Quick Answer
                  </p>
                  <p className="text-sm sm:text-[0.95rem] leading-relaxed text-slate-700">
                    {insuranceClaimsData.tldr}
                  </p>
                </div>
                <div className="bg-[var(--jerry-navy-deep)] p-5 sm:p-6">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-lime)] mb-3">
                    Storm Damage?
                  </p>
                  <a
                    href={`tel:${siteConfig.cleanPhone}`}
                    className="block text-2xl sm:text-3xl font-extrabold text-white hover:text-[var(--jerry-lime)] transition-colors mb-2"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-xs text-white/50 mb-4">
                    Free inspection. Written damage report. We walk the roof with your adjuster.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] w-full justify-center px-5 py-3 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition"
                  >
                    Free Storm Inspection <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 8 STEPS                                                           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-cream)] py-14 sm:py-20">
        <div className={shell}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="eyebrow text-[var(--jerry-navy-light)]">Step by Step</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              How to file a Texas roof claim<br className="hidden sm:block" /> in 8 steps.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500">
              From &ldquo;I have storm damage&rdquo; to &ldquo;the depreciation check cleared.&rdquo;
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 sm:gap-5">
            {insuranceClaimsData.steps.map((step) => (
              <div key={step.position} className="bg-white border border-slate-200 p-5 sm:p-6 hover:border-[var(--jerry-lime)] transition-colors flex gap-4">
                <div className="shrink-0 h-9 w-9 rounded-full bg-[var(--jerry-navy-deep)] text-[var(--jerry-lime)] flex items-center justify-center font-extrabold text-sm">
                  {step.position}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-[var(--jerry-navy-deep)] mb-2 text-[0.95rem] leading-snug">
                    {step.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TEXAS LAW FACTS — 2-col split                                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow text-[var(--jerry-navy-light)]">The Legal Side</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
                Texas insurance law for roof claims.
              </h2>
              <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed">
                The Texas Insurance Code gives homeowners real protections, but they only help if you know them.
              </p>
              <a
                href="https://www.tdi.texas.gov"
                target="_blank"
                rel="nofollow noopener"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--jerry-navy)] hover:text-[var(--jerry-lime)] transition-colors"
              >
                Visit tdi.texas.gov <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            <div className="lg:col-span-8">
              <div
                className="blog-prose"
                dangerouslySetInnerHTML={{ __html: insuranceClaimsData.texasLawFacts }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* COVERAGE TABLE                                                    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-cream)] py-14 sm:py-20">
        <div className={shell}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow text-[var(--jerry-navy-light)]">Coverage Reference</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              What&rsquo;s covered vs not covered.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500">
              Standard HO-3 / HO-5 policy coverage in Texas.
            </p>
          </div>

          <div className="max-w-5xl mx-auto blog-prose">
            <div className="table-wrap" dangerouslySetInnerHTML={{ __html: insuranceClaimsData.coverageTable }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* RED FLAGS — alert section                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-red-50 border-y border-red-100 py-14 sm:py-20">
        <div className={shell}>
          <div className="max-w-3xl mb-12">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-red-700">Storm-Chaser Scams</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy-deep)] tracking-[-0.02em] leading-[1.15]">
              Red flags — walk away if you see these.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              These are the patterns out-of-state storm chasers and shady operators use to scam Texas homeowners. None of them are worth the risk.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {insuranceClaimsData.redFlags.map((rf, idx) => (
              <div key={idx} className="bg-white border border-red-200 p-5 sm:p-6 flex gap-4">
                <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-[var(--jerry-navy-deep)] mb-2 text-[0.95rem] leading-snug">
                    {rf.flag}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{rf.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* RECENT STORMS                                                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="max-w-3xl mb-12">
            <p className="eyebrow text-[var(--jerry-navy-light)]">Recent Texas Events</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              Storms that hit Katy homeowners.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500">
              If your roof was damaged in any of these events, the filing window may still be open. Confirm your specific deadline with TDI.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {insuranceClaimsData.recentStorms.map((storm, idx) => (
              <div key={idx} className="border border-slate-200 bg-[var(--jerry-cream)] p-5 sm:p-6 hover:border-[var(--jerry-lime)] transition-colors">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-light)] mb-1">
                  {storm.date}
                </p>
                <h3 className="font-extrabold text-[var(--jerry-navy-deep)] text-[0.95rem] leading-snug mb-3">
                  {storm.name}
                </h3>
                <p className="text-xs sm:text-[0.85rem] text-slate-600 leading-relaxed mb-3">
                  {storm.wasCovered}
                </p>
                <p className="text-[0.7rem] font-bold text-[var(--jerry-navy)] pt-3 border-t border-slate-200">
                  Filing: {storm.deadline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* WHAT JERRY DOES — dark section                                    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-navy-deep)] py-14 sm:py-20">
        <div className={shell}>
          <div className="max-w-3xl mx-auto blog-prose blog-prose-dark" dangerouslySetInnerHTML={{ __html: insuranceClaimsData.whatJerryDoes }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FAQ — accordion grid                                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="eyebrow text-[var(--jerry-navy-light)]">Insurance FAQ</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              Texas insurance claim questions.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-3 items-start">
            {insuranceClaimsData.faqs.map((f, idx) => (
              <details key={idx} className="group bg-[var(--jerry-cream)] border border-slate-200 px-5 py-4 hover:border-slate-300 transition-colors">
                <summary className="flex items-start justify-between cursor-pointer list-none gap-3">
                  <span className="text-sm sm:text-[0.95rem] font-bold text-[var(--jerry-navy-deep)] leading-snug pr-1">
                    {f.q}
                  </span>
                  <span className="text-[var(--jerry-lime)] text-xl font-bold group-open:rotate-45 transition-transform shrink-0 leading-none mt-0.5">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CTA                                                               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-navy-deep)] py-16 sm:py-20">
        <div className={`${shell} text-center`}>
          <p className="eyebrow text-[var(--jerry-lime)]">Free Storm Inspection</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1]">
            Think you have storm<br className="hidden sm:block" /> damage in Katy?
          </h2>
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">{insuranceClaimsData.cta}</p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-7 py-3.5 text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors"
            >
              Free Storm Inspection <ArrowRight className="h-3.5 w-3.5" />
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
