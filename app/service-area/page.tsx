import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Phone,
  Home as HomeIcon,
} from 'lucide-react';
import { serviceAreaData } from '../serviceAreaData';
import { siteConfig } from '../config';
import { SubHero } from '../components/SubHero';

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

export const metadata: Metadata = {
  title: 'Areas We Serve | Jerrys Roofing — Katy, Cinco Ranch, Cypress, Fulshear',
  description:
    'Jerrys Roofing serves Katy, Cinco Ranch, Cypress, Fulshear, Richmond, Sugar Land, and College Station with honest roof replacement, repair, and storm damage restoration. Free inspections — call (409) 351-1529.',
  alternates: { canonical: '/service-area' },
  openGraph: {
    title: 'Areas We Serve | Jerrys Roofing',
    description:
      'Local roofing contractor serving Katy, TX and the surrounding communities of Cinco Ranch, Cypress, Fulshear, Richmond, Sugar Land, and College Station.',
    url: 'https://roofingbyjerry.com/service-area',
  },
};

export default function ServiceAreaHubPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: `${siteConfig.domain}/service-area` },
    ],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: serviceAreaData.map((area, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: `Roofing Contractor in ${area.city}, TX`,
      url: `${siteConfig.domain}/service-area/${area.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <SubHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Areas We Serve' }]}
        pill={{
          icon: <MapPin className="h-3 w-3" />,
          text: `${serviceAreaData.length} Cities · Katy TX & Surrounding`,
        }}
        title="Roofing across Katy and every city around it."
        accent="Katy"
        subtitle="Jerry personally inspects every roof we work on. Whether you are in Cinco Ranch, Cypress after a hailstorm, Sugar Land planning a tile replacement, or College Station with a rental property — same straight-talk approach."
      />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CITY GRID                                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-cream)] py-14 sm:py-20">
        <div className={shell}>
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <p className="eyebrow text-[var(--jerry-navy-light)]">Pick Your City</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              Cities we serve.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500">
              Click any city for local pricing, common roofing issues, named neighborhoods, and real projects we have finished there.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreaData.map((area) => (
              <Link
                key={area.slug}
                href={`/service-area/${area.slug}`}
                className="group flex flex-col bg-white border border-slate-200 p-6 sm:p-7 hover:border-[var(--jerry-lime)] hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="min-w-0 flex-1 pr-3">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[var(--jerry-navy-deep)] group-hover:text-[var(--jerry-navy)] transition-colors leading-tight">
                      {area.city}, TX
                    </h3>
                    <p className="text-[0.7rem] sm:text-xs text-slate-400 mt-1 font-medium">
                      {area.zips.join(' · ')} · {area.county}
                    </p>
                  </div>
                  <MapPin className="h-5 w-5 text-[var(--jerry-lime)] shrink-0" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                  {area.heroTagline}
                </p>

                <div className="mb-5">
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">
                    Neighborhoods
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {area.neighborhoods.slice(0, 4).map((n) => (
                      <span
                        key={n}
                        className="inline-flex items-center gap-1 bg-[var(--jerry-cream)] border border-slate-200 px-2 py-1 text-[0.65rem] font-semibold text-slate-600"
                      >
                        <HomeIcon className="h-2.5 w-2.5 text-[var(--jerry-lime)]" />
                        {n}
                      </span>
                    ))}
                    {area.neighborhoods.length > 4 && (
                      <span className="inline-flex items-center bg-slate-50 border border-slate-200 px-2 py-1 text-[0.65rem] font-semibold text-slate-400">
                        +{area.neighborhoods.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--jerry-navy)] group-hover:text-[var(--jerry-lime)] transition-colors pt-4 border-t border-slate-100">
                  See {area.city} details <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ALSO SERVING                                                      */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-14 border-t border-slate-100">
        <div className={shell}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-navy-light)] mb-3">
              Also Serving
            </p>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Brookshire · Sealy · Missouri City · Tomball · Jersey Village · Bellaire · Bunker Hill Village · West Houston · and every community in the greater Katy area. If your city isn&rsquo;t listed, call us anyway — {siteConfig.phone}.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CTA                                                               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-navy-deep)] py-16 sm:py-20">
        <div className={`${shell} text-center`}>
          <p className="eyebrow text-[var(--jerry-lime)]">Free Inspection</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1]">
            One call, one honest<br className="hidden sm:block" /> answer, no pressure.
          </h2>
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Jerry answers his own phone. No salespeople, no call centers, no door-knocker tactics — just a real roofer walking your roof and telling you the truth.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-7 py-3.5 text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors"
            >
              Request Free Inspection <ArrowRight className="h-3.5 w-3.5" />
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
