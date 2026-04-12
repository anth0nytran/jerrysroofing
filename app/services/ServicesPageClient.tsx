'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  ChevronDown,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { siteConfig } from '../config';
import { SubHero } from '../components/SubHero';
import { useState } from 'react';

interface ServiceItem {
  slug: string;
  title: string;
  image: string;
  summary: string;
  details: string[];
  turnaround: string;
  longDescription: string;
  keywords: string[];
  featured?: boolean;
}

interface FaqItem {
  q: string;
  a: string;
}

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

/** Maps each service slug to a high-level category for the card eyebrow. */
const CATEGORY_MAP: Record<string, string> = {
  'roof-replacement': 'Roofing',
  'roof-rejoov': 'Roofing',
  'roof-repair': 'Roofing',
  'roof-inspection': 'Roofing',
  'storm-damage': 'Roofing',
  'gutters': 'Exterior',
  'siding': 'Exterior',
  'painting': 'Exterior',
  'driveway-repaints': 'Exterior',
};

/**
 * Short, consistent turnaround labels for the card meta row.
 * Keeps cards visually uniform — the data file's longer turnaround strings
 * still show up on the individual service detail pages.
 */
const TURNAROUND_SHORT: Record<string, string> = {
  'roof-replacement': '1–2 days',
  'roof-rejoov': 'Single visit',
  'roof-repair': '1 day',
  'roof-inspection': 'Same week',
  'storm-damage': '1–2 days',
  'gutters': 'Same day',
  'siding': '2–5 days',
  'painting': '3–5 days',
  'driveway-repaints': '1–2 days',
};

function FaqAccordion({ faq, index }: { faq: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[var(--jerry-lime)] cursor-pointer"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-base font-bold sm:text-lg">{faq.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--jerry-lime)] transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-white/55 sm:text-base">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPageClient({
  services,
}: {
  services: ServiceItem[];
  faqs?: FaqItem[];
}) {
  return (
    <>
      <SubHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        pill={{ text: `${services.length} Services · Katy, TX` }}
        title="Expert Roofing & Exterior Services"
        subtitle={`${siteConfig.yearsExperience} years of roofing across Katy, Cypress, Cinco Ranch, Fulshear, Richmond, and Sugar Land. Premium installs, honest assessments, flat-price quotes.`}
      />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SERVICES GRID — uniform editorial cards                           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[var(--jerry-cream)] py-14 sm:py-20 lg:py-24">
        <div className={shell}>
          <div className="max-w-3xl mb-10 sm:mb-14">
            <p className="eyebrow text-[var(--jerry-navy-light)]">Full Catalog</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              Every service we offer.
            </h2>
            <p className="mt-4 text-base text-slate-500 max-w-2xl">
              Click any service for pricing, process, and the honest breakdown. Free inspections and flat-price quotes on every job.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => {
              const category = CATEGORY_MAP[s.slug] || 'Service';
              const number = String(idx + 1).padStart(2, '0');
              const shortTurnaround = TURNAROUND_SHORT[s.slug] || s.turnaround;
              const href = s.slug === 'roof-rejoov' ? '/roof-rejoov' : `/services/${s.slug}`;
              return (
                /* Entire card is a link — click anywhere to navigate. Better UX for older users. */
                <Link
                  key={s.slug}
                  href={href}
                  aria-label={`Learn more about ${s.title} in Katy, TX`}
                  className="group block h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--jerry-lime)]/60 focus-visible:ring-offset-2"
                >
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.3) }}
                    className="flex flex-col bg-white border border-slate-200 group-hover:border-[var(--jerry-navy-deep)] group-hover:shadow-xl group-hover:-translate-y-0.5 transition-all duration-300 overflow-hidden h-full"
                  >
                    {/* Image — fixed aspect ratio */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 shrink-0">
                      <NextImage
                        src={s.image}
                        alt={`${s.title} in Katy, Texas by Jerrys Roofing`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                      {/* Category pill — top left */}
                      <div className="absolute top-4 left-4 inline-flex items-center bg-[var(--jerry-lime)] px-3 py-1.5">
                        <span className="text-[0.55rem] sm:text-[0.6rem] font-extrabold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)]">
                          {category}
                        </span>
                      </div>
                    </div>

                    {/* Body — uniform structure */}
                    <div className="flex flex-col flex-1 p-5 sm:p-6">
                      {/* Number eyebrow */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[0.7rem] font-extrabold text-[var(--jerry-lime)]/70">
                          {number}
                        </span>
                        <div className="h-px flex-1 bg-slate-200" />
                        <span className="inline-flex items-center gap-1 text-[0.6rem] font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">
                          <Clock className="h-2.5 w-2.5" />
                          {shortTurnaround}
                        </span>
                      </div>

                      {/* TITLE — prominent display font, fixed 2-line clamp for uniformity */}
                      <h3 className="font-[family-name:var(--font-app-display)] text-xl sm:text-2xl font-extrabold text-[var(--jerry-navy-deep)] leading-[1.2] tracking-[-0.02em] mb-3 group-hover:text-[var(--jerry-navy)] transition-colors min-h-[3rem] sm:min-h-[3.6rem] line-clamp-2">
                        {s.title}
                      </h3>

                      {/* Summary — fixed 3-line clamp */}
                      <p className="text-sm leading-relaxed text-slate-600 mb-5 line-clamp-3 min-h-[3.75rem]">
                        {s.summary}
                      </p>

                      {/* Details — fixed 3 items, each single-line clamp */}
                      {s.details && s.details.length > 0 && (
                        <ul className="mb-6 space-y-2">
                          {s.details.slice(0, 3).map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-[0.8rem] leading-snug text-slate-600"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--jerry-lime)] shrink-0 mt-0.5" />
                              <span className="line-clamp-1 flex-1">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Spacer to push CTA to bottom when content is short */}
                      <div className="flex-1" />

                      {/* CTA — visual button. Actual click handled by parent Link. */}
                      <span
                        className="inline-flex items-center justify-between w-full border border-slate-200 bg-slate-50 group-hover:bg-[var(--jerry-navy-deep)] group-hover:border-[var(--jerry-navy-deep)] px-4 sm:px-5 py-3 sm:py-3.5 text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--jerry-navy-deep)] group-hover:text-[var(--jerry-lime)] transition-all"
                      >
                        <span className="truncate">See {s.title}</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              );
            })}
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
            Need an honest<br className="hidden sm:block" /> assessment?
          </h2>
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            No pressure tactics, no arbitrary pricing. Request a free on-site written estimate for any service.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-7 py-3.5 text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors"
            >
              Request Free Quote <ArrowRight className="h-3.5 w-3.5" />
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
