import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Phone, ShieldAlert, AlertTriangle, MapPin } from 'lucide-react';
import {
  neighborhoodClaims,
  getNeighborhoodClaim,
  getNeighborhoodClaimSlugs,
} from '../../neighborhoodClaimsData';
import { siteConfig } from '../../config';
import { SubHero } from '../../components/SubHero';

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

export function generateStaticParams() {
  return getNeighborhoodClaimSlugs().map((neighborhood) => ({ neighborhood }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ neighborhood: string }>;
}): Promise<Metadata> {
  const { neighborhood } = await params;
  const data = getNeighborhoodClaim(neighborhood);
  if (!data) return { title: 'Neighborhood Not Found' };

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: [
      `${data.name} roof insurance claim`,
      `${data.name} roof claim`,
      `${data.name} hail damage roof`,
      `${data.name} storm damage roof`,
      `roof insurance claim ${data.city}`,
      `${data.name} roofer insurance claim`,
    ],
    alternates: { canonical: `/insurance-claims/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://roofingbyjerry.com/insurance-claims/${data.slug}`,
      type: 'article',
    },
  };
}

export default async function NeighborhoodClaimPage({
  params,
}: {
  params: Promise<{ neighborhood: string }>;
}) {
  const { neighborhood } = await params;
  const data = getNeighborhoodClaim(neighborhood);
  if (!data) notFound();

  const url = `${siteConfig.domain}/insurance-claims/${data.slug}`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Insurance Claims', item: `${siteConfig.domain}/insurance-claims` },
      { '@type': 'ListItem', position: 3, name: `${data.name} Roof Insurance Claims`, item: url },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Roof Insurance Claim Help in ${data.name}`,
    serviceType: 'Roof insurance claim assistance',
    description: data.metaDescription,
    areaServed: {
      '@type': 'Place',
      name: `${data.name}, ${data.city}`,
      geo: { '@type': 'GeoCoordinates', latitude: data.geo.latitude, longitude: data.geo.longitude },
    },
    provider: {
      '@type': 'RoofingContractor',
      name: siteConfig.businessName,
      telephone: siteConfig.phone,
      url: siteConfig.domain,
      areaServed: `${data.name}, ${data.city}`,
    },
    url,
  };

  const nearby = data.nearby
    .map((slug) => neighborhoodClaims.find((n) => n.slug === slug))
    .filter((n): n is (typeof neighborhoodClaims)[number] => Boolean(n));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <SubHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insurance Claims', href: '/insurance-claims' },
          { label: `${data.name} Roof Claims` },
        ]}
        pill={{
          icon: <ShieldAlert className="h-3 w-3" />,
          text: `Roof Insurance Claims · ${data.name}`,
        }}
        title={data.h1}
        subtitle={data.heroTagline}
      />

      {/* TL;DR + phone CTA */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--jerry-navy-light)]">The Honest Version</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
                Filing a roof insurance claim in {data.name}.
              </h2>
              <p className="mt-6 text-base sm:text-[1.0625rem] text-slate-600 leading-[1.75]">{data.intro}</p>
              <p className="mt-5 text-sm text-slate-500">
                Looking for the full step-by-step process?{' '}
                <Link href="/insurance-claims" className="font-bold text-[var(--jerry-navy)] underline hover:text-[var(--jerry-lime)]">
                  Read our complete Texas roof insurance claim guide
                </Link>
                {data.serviceAreaSlug ? (
                  <>
                    {' '}or see everything we do as a{' '}
                    <Link
                      href={`/service-area/${data.serviceAreaSlug}`}
                      className="font-bold text-[var(--jerry-navy)] underline hover:text-[var(--jerry-lime)]"
                    >
                      roofer in {data.city.replace(', TX', '')}
                    </Link>
                    .
                  </>
                ) : (
                  '.'
                )}
              </p>
            </div>

            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24 space-y-5">
                <div className="border-l-4 border-[var(--jerry-lime)] bg-[var(--jerry-cream)] p-5 sm:p-6 rounded-r-lg">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-navy-deep)] mb-3">
                    Quick Answer
                  </p>
                  <p className="text-sm sm:text-[0.95rem] leading-relaxed text-slate-700">{data.tldr}</p>
                </div>
                <div className="bg-[var(--jerry-navy-deep)] p-5 sm:p-6">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-lime)] mb-3">
                    Storm Damage in {data.name}?
                  </p>
                  <a
                    href={`tel:${siteConfig.cleanPhone}`}
                    className="block text-2xl sm:text-3xl font-extrabold text-white hover:text-[var(--jerry-lime)] transition-colors mb-2"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-xs text-white/50 mb-4">
                    Free inspection. Written damage report. We walk the roof with your adjuster — deductible protected.
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

      {/* Claim issues specific to this neighborhood */}
      <section className="bg-[var(--jerry-cream)] py-14 sm:py-20">
        <div className={shell}>
          <div className="max-w-3xl mb-12">
            <p className="eyebrow text-[var(--jerry-navy-light)]">What We See in {data.name}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              The claim problems specific to {data.name}.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
              Every neighborhood has its own claim pattern based on build era, exposure, and how carriers treat it. Here is what we run into on {data.name} roofs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {data.claimIssues.map((ci, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-5 sm:p-6 flex gap-4">
                <AlertTriangle className="h-5 w-5 text-[var(--jerry-navy-light)] shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-[var(--jerry-navy-deep)] mb-2 text-[0.95rem] leading-snug">
                    {ci.issue}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{ci.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="eyebrow text-[var(--jerry-navy-light)]">{data.name} Claim FAQ</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              {data.name} roof claim questions.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-3 items-start">
            {data.faqs.map((f, idx) => (
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

      {/* Nearby neighborhoods — internal linking */}
      {nearby.length > 0 && (
        <section className="bg-[var(--jerry-cream)] py-14 sm:py-20">
          <div className={shell}>
            <div className="max-w-2xl mb-10">
              <p className="eyebrow text-[var(--jerry-navy-light)]">Nearby Neighborhoods</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
                Roof insurance claim help near {data.name}.
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/insurance-claims/${n.slug}`}
                  className="group border border-slate-200 bg-white p-5 sm:p-6 hover:border-[var(--jerry-lime)] transition-colors"
                >
                  <MapPin className="h-5 w-5 text-[var(--jerry-navy-light)] mb-3" />
                  <h3 className="font-extrabold text-[var(--jerry-navy-deep)] text-[0.95rem] leading-snug mb-1">
                    {n.name} Roof Claims
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">{n.city}</p>
                  <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--jerry-navy)] group-hover:text-[var(--jerry-lime)] transition-colors">
                    View <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[var(--jerry-navy-deep)] py-16 sm:py-20">
        <div className={`${shell} text-center`}>
          <p className="eyebrow text-[var(--jerry-lime)]">Free Storm Inspection</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1]">
            Think you have storm<br className="hidden sm:block" /> damage in {data.name}?
          </h2>
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Jerry inspects your {data.name} roof for free, tells you honestly whether you have a claim worth filing, and meets your adjuster on the roof so nothing gets missed. We never touch your deductible.
          </p>
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
