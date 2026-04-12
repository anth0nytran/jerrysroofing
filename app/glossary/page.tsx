import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, BookOpen } from 'lucide-react';
import { glossaryEntries, type GlossaryEntry } from '../glossaryData';
import { SubHero } from '../components/SubHero';
import { siteConfig } from '../config';

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

export const metadata: Metadata = {
  title: 'Roofing Glossary: 20 Terms Every Texas Homeowner Should Know | Jerrys Roofing',
  description:
    'Plain-English roofing glossary written for Katy, TX homeowners. Definitions for square, underlayment, drip edge, hail bruising, Roof Rejoov, and more. By Jerry Pilley.',
  alternates: { canonical: '/glossary' },
  openGraph: {
    title: 'Roofing Glossary | Jerrys Roofing',
    description: 'Real definitions for the roofing terms Katy homeowners actually run into.',
    url: 'https://roofingbyjerry.com/glossary',
    type: 'article',
  },
};

const categoryLabels: Record<GlossaryEntry['category'], string> = {
  parts: 'Roof Parts',
  materials: 'Materials',
  measurement: 'Measurement',
  damage: 'Damage Types',
  process: 'Process & Install',
};

export default function GlossaryPage() {
  // Group by category
  const grouped = glossaryEntries.reduce((acc, entry) => {
    if (!acc[entry.category]) acc[entry.category] = [];
    acc[entry.category].push(entry);
    return acc;
  }, {} as Record<string, GlossaryEntry[]>);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Roofing Glossary', item: `${siteConfig.domain}/glossary` },
    ],
  };

  // DefinedTermSet schema with all glossary entries — AI Overview citation bait
  const definedTermSetJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${siteConfig.domain}/glossary#termset`,
    name: 'Jerrys Roofing Glossary',
    description: 'Plain-English roofing terms defined for Texas homeowners.',
    url: `${siteConfig.domain}/glossary`,
    hasDefinedTerm: glossaryEntries.map((e) => ({
      '@type': 'DefinedTerm',
      '@id': `${siteConfig.domain}/glossary#${e.slug}`,
      name: e.term,
      description: e.shortDef,
      inDefinedTermSet: `${siteConfig.domain}/glossary#termset`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetJsonLd) }} />

      <SubHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Roofing Glossary' }]}
        pill={{
          icon: <BookOpen className="h-3 w-3" />,
          text: `${glossaryEntries.length} Terms · Plain English`,
        }}
        title="Roofing glossary."
        accent="glossary"
        subtitle="Real definitions for the roofing terms Katy homeowners actually run into. Written by Jerry Pilley after 7 years of explaining the same things on driveways across Cinco Ranch, Cypress, and Fulshear."
      />

      {/* ═══ Category quick nav (non-sticky — sticky conflicts with main header) ═══ */}
      <section className="bg-white py-6 sm:py-8 border-b border-slate-100">
        <div className={shell}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center gap-2">
            <p className="text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-[0.18em] text-slate-400 mr-2 w-full sm:w-auto mb-1 sm:mb-0">
              Jump to:
            </p>
            {Object.entries(grouped).map(([cat, entries]) => (
              <a
                key={cat}
                href={`#${cat}`}
                className="inline-flex items-center gap-1.5 bg-[var(--jerry-cream)] hover:bg-[var(--jerry-navy-deep)] hover:text-[var(--jerry-lime)] text-[var(--jerry-navy-deep)] px-3 py-1.5 text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider transition-colors"
              >
                {categoryLabels[cat as GlossaryEntry['category']]}
                <span className="text-slate-400">({entries.length})</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Glossary content ═══ */}
      <section className="bg-white py-12 sm:py-16">
        <div className={shell}>
          <div className="max-w-3xl mx-auto">
            {Object.entries(grouped).map(([cat, entries]) => (
              <div key={cat} id={cat} className="mb-14 sm:mb-16 scroll-mt-24">
                <div className="mb-8 pb-3 border-b-2 border-[var(--jerry-lime)] flex items-baseline justify-between gap-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--jerry-navy-deep)] tracking-[-0.02em]">
                    {categoryLabels[cat as GlossaryEntry['category']]}
                  </h2>
                  <span className="text-[0.6rem] sm:text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0">
                    {entries.length} {entries.length === 1 ? 'term' : 'terms'}
                  </span>
                </div>
                <div className="space-y-7 sm:space-y-9">
                  {entries.map((entry) => (
                    <div
                      key={entry.slug}
                      id={entry.slug}
                      className="scroll-mt-28"
                      itemScope
                      itemType="https://schema.org/DefinedTerm"
                    >
                      <h3
                        className="text-lg sm:text-xl font-extrabold text-[var(--jerry-navy-deep)] mb-2 leading-snug"
                        itemProp="name"
                      >
                        {entry.term}
                      </h3>
                      <p
                        className="text-[0.95rem] sm:text-base font-semibold text-slate-800 leading-relaxed mb-2"
                        itemProp="description"
                      >
                        {entry.shortDef}
                      </p>
                      <div
                        className="text-sm sm:text-[0.9rem] text-slate-600 leading-relaxed [&_a]:text-[var(--jerry-navy)] [&_a]:font-semibold [&_a]:underline"
                        dangerouslySetInnerHTML={{ __html: entry.fullDef }}
                      />
                      {entry.related && entry.related.length > 0 && (
                        <p className="mt-3 text-[0.7rem] sm:text-xs text-slate-400">
                          <span className="font-bold uppercase tracking-wider text-slate-500 mr-1">See also:</span>
                          {entry.related.map((slug, i) => {
                            const rel = glossaryEntries.find((e) => e.slug === slug);
                            return rel ? (
                              <span key={slug}>
                                <a
                                  href={`#${slug}`}
                                  className="text-[var(--jerry-navy)] hover:text-[var(--jerry-lime)] hover:underline font-semibold"
                                >
                                  {rel.term}
                                </a>
                                {i < entry.related!.length - 1 ? ', ' : ''}
                              </span>
                            ) : null;
                          })}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-[var(--jerry-navy-deep)] py-16 sm:py-20">
        <div className={`${shell} text-center`}>
          <p className="eyebrow text-[var(--jerry-lime)]">Still Have Questions?</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1]">
            Jerry will walk<br className="hidden sm:block" /> your roof for free.
          </h2>
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Free inspection, written estimate, no salespeople. Jerry answers his own phone and gives you the honest answer.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-7 py-3.5 text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors"
            >
              Free Inspection <ArrowRight className="h-3.5 w-3.5" />
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
