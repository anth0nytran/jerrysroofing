import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Phone,
  MapPin,
  Star,
  Home as HomeIcon,
  Wrench,
} from 'lucide-react';
import { serviceAreaData } from '../../serviceAreaData';
import { siteConfig, serviceData } from '../../config';
import { SubHero } from '../../components/SubHero';

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

export function generateStaticParams() {
  return serviceAreaData.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const area = serviceAreaData.find((a) => a.slug === city);
  if (!area) return { title: 'Service Area Not Found' };

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: [
      `roofing contractor ${area.city} TX`,
      `roofer ${area.city}`,
      `roof replacement ${area.city} TX`,
      `roof repair ${area.city}`,
      `storm damage ${area.city} TX`,
      `hail damage roof ${area.city}`,
      `gutter installation ${area.city} TX`,
    ],
    alternates: { canonical: `/service-area/${area.slug}` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `https://roofingbyjerry.com/service-area/${area.slug}`,
      type: 'website',
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const area = serviceAreaData.find((a) => a.slug === city);
  if (!area) notFound();

  const otherCities = serviceAreaData.filter((a) => a.slug !== city);

  // Split city intro into paragraphs at sentence boundaries for cleaner reading
  const introParas = area.cityIntro
    .split(/(?<=\.)\s+(?=[A-Z])/)
    .reduce<string[]>((acc, sentence) => {
      // group sentences into paragraphs of 2-3 sentences each
      if (acc.length === 0 || acc[acc.length - 1].split('. ').length >= 3) {
        acc.push(sentence);
      } else {
        acc[acc.length - 1] += ' ' + sentence;
      }
      return acc;
    }, []);

  /* ── JSON-LD ── */
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: `${siteConfig.domain}/service-area` },
      { '@type': 'ListItem', position: 3, name: `${area.city}, TX`, item: `${siteConfig.domain}/service-area/${area.slug}` },
    ],
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RoofingContractor'],
    '@id': `${siteConfig.domain}/service-area/${area.slug}#business`,
    name: `Jerrys Roofing — ${area.city}, TX`,
    image: `${siteConfig.domain}/roofing/og-roofing.jpg`,
    url: `${siteConfig.domain}/service-area/${area.slug}`,
    telephone: siteConfig.cleanPhone,
    email: siteConfig.email,
    description: area.metaDescription,
    address: {
      '@type': 'PostalAddress',
      addressLocality: area.city,
      addressRegion: 'TX',
      postalCode: area.zips[0],
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: area.geo.latitude,
      longitude: area.geo.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: area.city,
      containedInPlace: { '@type': 'State', name: 'Texas' },
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '20:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '20',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: area.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <SubHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Areas We Serve', href: '/service-area' },
          { label: area.city },
        ]}
        pill={{
          icon: <MapPin className="h-3 w-3" />,
          text: `${area.city} · ${area.zips.join(' · ')} · ${area.county} County`,
        }}
        title={area.h1}
        accent={area.city}
        subtitle={area.heroTagline}
      />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* INTRO — 2-col with TL;DR sidebar                                 */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left: lead text */}
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--jerry-navy-light)]">Why {area.city} Is Different</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
                Roofing in {area.city} is its own animal.
              </h2>

              <div className="mt-7 space-y-5 text-[0.95rem] sm:text-base text-slate-600 leading-[1.75]">
                {introParas.map((para, i) => (
                  <p key={i} className={i === 0 ? 'text-[1.05rem] sm:text-[1.0625rem] text-slate-700 font-medium' : ''}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: TL;DR + quick links sidebar */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24 space-y-5">
                {/* TL;DR card */}
                <div className="border-l-4 border-[var(--jerry-lime)] bg-[var(--jerry-cream)] p-5 sm:p-6 rounded-r-lg">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-navy-deep)] mb-3">
                    Quick Answer
                  </p>
                  <p className="text-sm sm:text-[0.95rem] leading-relaxed text-slate-700">
                    {area.tldr}
                  </p>
                </div>

                {/* Mini contact card */}
                <div className="bg-[var(--jerry-navy-deep)] p-5 sm:p-6">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-lime)] mb-3">
                    Talk to Jerry
                  </p>
                  <a
                    href={`tel:${siteConfig.cleanPhone}`}
                    className="block text-2xl sm:text-3xl font-extrabold text-white hover:text-[var(--jerry-lime)] transition-colors mb-2"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-xs text-white/50 mb-4">
                    Jerry answers his own phone. No call centers, no salespeople.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] w-full justify-center px-5 py-3 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition"
                  >
                    Free Inspection <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* COMMON ISSUES — 2-col card grid                                  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-cream)] py-14 sm:py-20">
        <div className={shell}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
            <div className="max-w-2xl">
              <p className="eyebrow text-[var(--jerry-navy-light)]">What We See In {area.city}</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
                Roofing problems unique<br className="hidden sm:block" /> to {area.city} homes.
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              Based on actual jobs across {area.city}.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {area.commonIssues.map((issue, idx) => (
              <div
                key={issue.issue}
                className="bg-white border border-slate-200 p-5 sm:p-6 hover:border-[var(--jerry-lime)] hover:shadow-md transition-all flex items-start gap-4"
              >
                <span className="shrink-0 text-[0.7rem] font-extrabold text-[var(--jerry-lime)]/60 pt-1 w-7">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[0.95rem] sm:text-base font-extrabold text-[var(--jerry-navy-deep)] mb-1.5 leading-snug">
                    {issue.issue}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{issue.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* NEIGHBORHOODS — chip cloud, framed                                */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-18">
        <div className={shell}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="eyebrow text-[var(--jerry-navy-light)]">Where We Work</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
                {area.neighborhoods.length}+ {area.city} neighborhoods.
              </h2>
              <p className="mt-4 text-sm sm:text-[0.95rem] text-slate-500 leading-relaxed">
                We have done jobs in just about every section of {area.city}, TX {area.zips.join(', ')}. If yours is not listed, give us a call.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-2">
                {area.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="inline-flex items-center gap-1.5 bg-[var(--jerry-cream)] border border-slate-200 px-3.5 py-2 text-xs sm:text-[0.8rem] font-semibold text-[var(--jerry-navy-deep)] hover:border-[var(--jerry-lime)] transition-colors"
                  >
                    <HomeIcon className="h-3 w-3 text-[var(--jerry-lime)]" />
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* WHY JERRY — dark navy, 2-col with numbered cards                  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-navy-deep)] py-14 sm:py-20">
        <div className={shell}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[var(--jerry-lime)]">Why {area.city} Picks Jerry</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-[-0.02em] leading-[1.1]">
                Honest roofing for<br /> {area.city}, Texas.
              </h2>
              <p className="mt-5 text-sm sm:text-base text-white/55 leading-relaxed max-w-md">
                No high-pressure sales, no salespeople taking 12% commission, no door-knockers after a storm. Just Jerry on the roof, telling you the truth.
              </p>

              <a
                href={`tel:${siteConfig.cleanPhone}`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--jerry-lime)] hover:underline"
              >
                <Phone className="h-4 w-4" /> Talk to Jerry: {siteConfig.phone}
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {area.whyJerry.map((reason, idx) => (
                  <div
                    key={idx}
                    className="bg-white/[0.04] border border-white/10 p-5 hover:border-[var(--jerry-lime)]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[0.65rem] font-extrabold text-[var(--jerry-lime)]/60">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <p className="text-sm text-white/85 leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* RECENT PROJECT + SERVICES — combined 2-col block                  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-cream)] py-14 sm:py-20">
        <div className={shell}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Recent project — left */}
            <div className="lg:col-span-5">
              <p className="eyebrow text-[var(--jerry-navy-light)]">Recent Job</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
                Just finished in {area.city}.
              </h2>

              <div className="mt-8 bg-white border-l-4 border-[var(--jerry-lime)] p-5 sm:p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--jerry-lime)] text-[var(--jerry-lime)]" />
                  ))}
                </div>
                <p className="text-base sm:text-lg font-extrabold text-[var(--jerry-navy-deep)] mb-1">
                  {area.recentProject.customerName}
                </p>
                <p className="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" />
                  {area.recentProject.neighborhood}
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-700">
                    <strong className="text-[var(--jerry-navy-deep)] block text-[0.65rem] font-bold uppercase tracking-wider mb-1">
                      Scope
                    </strong>
                    {area.recentProject.scope}
                  </p>
                  <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {area.recentProject.detail}
                  </p>
                </div>
              </div>
            </div>

            {/* Services — right */}
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--jerry-navy-light)]">Available Here</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
                Every service we offer.
              </h2>
              <p className="mt-4 text-sm text-slate-500 mb-8">
                Available across {area.city}, TX {area.zips.join(', ')}.
              </p>

              <div className="grid sm:grid-cols-2 gap-2.5">
                {serviceData.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.slug === 'roof-rejoov' ? '/roof-rejoov' : `/services/${s.slug}`}
                    className="group flex items-center justify-between bg-white border border-slate-200 hover:border-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-navy-deep)] px-4 py-3.5 transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Wrench className="h-3.5 w-3.5 text-[var(--jerry-lime)] shrink-0" />
                      <span className="text-xs sm:text-[0.8rem] font-bold text-[var(--jerry-navy-deep)] group-hover:text-[var(--jerry-lime)] transition-colors truncate">
                        {s.title}
                      </span>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[var(--jerry-lime)] group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FAQ — 2-col on desktop                                            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="eyebrow text-[var(--jerry-navy-light)]">{area.city} FAQ</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              Questions {area.city} homeowners ask.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-3 items-start">
            {area.faqs.map((f, idx) => (
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
      {/* NEARBY CITIES — small inline strip                                */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-cream)] py-12 sm:py-14 border-y border-slate-200">
        <div className={shell}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-navy-light)] mb-1">
                Also Serving
              </p>
              <p className="text-base sm:text-lg font-extrabold text-[var(--jerry-navy)]">
                Other areas near {area.city}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {otherCities.map((other) => (
                <Link
                  key={other.slug}
                  href={`/service-area/${other.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:border-[var(--jerry-navy-deep)] px-3.5 py-2 text-xs sm:text-[0.8rem] font-bold text-[var(--jerry-navy-deep)] hover:text-[var(--jerry-navy)] transition-all"
                >
                  {other.city}
                  <ArrowRight className="h-3 w-3 text-[var(--jerry-lime)]" />
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
          <p className="eyebrow text-[var(--jerry-lime)]">Free Inspection</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1]">
            Free roof inspection<br className="hidden sm:block" /> in {area.city}, TX.
          </h2>
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            No pressure, no upselling, no door-knocker tactics. Jerry comes out, walks the roof, shows you photos, and gives you the truth.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-7 py-3.5 text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer"
            >
              Request Free Inspection <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={`tel:${siteConfig.cleanPhone}`}
              className="inline-flex items-center gap-2 border border-white/15 px-7 py-3.5 text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.15em] text-white/85 hover:bg-white/5 hover:text-white transition-all cursor-pointer"
            >
              <Phone className="h-3.5 w-3.5" /> Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
