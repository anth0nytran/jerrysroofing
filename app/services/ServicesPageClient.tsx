'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Phone,
  ChevronDown,
} from 'lucide-react';
import { siteConfig } from '../config';
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
}

interface FaqItem {
  q: string;
  a: string;
}

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function FaqAccordion({ faq, index }: { faq: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[var(--hernandez-gold)]"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-base font-bold sm:text-lg">{faq.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--hernandez-gold)] transition-transform duration-300 ${
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
          <p className="text-sm leading-relaxed text-white/55 sm:text-base">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPageClient({
  services,
  faqs,
}: {
  services: ServiceItem[];
  faqs: FaqItem[];
}) {
  return (
    <>
      {/* Sub-hero */}
      <section className="relative overflow-hidden bg-[var(--hernandez-forest-deep)]">
        <div className="absolute inset-0">
          <NextImage src="/tree_pro/hernandez_service_trimming.png" alt="" fill sizes="100vw" className="object-cover opacity-15" />
        </div>
        <div className={`${shell} relative z-10 py-12 sm:py-16`}>
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-[var(--hernandez-gold)] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white/70">Services</li>
            </ol>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-[1.1] max-w-xl">
              Tree Trimming, Removal &amp; Landscaping in Humble, TX
            </h1>
            <p className="mt-3 text-base leading-relaxed text-white/50 max-w-lg">
              {siteConfig.yearsInBusiness}+ years serving Humble, Dayton, Baytown, Spring,
              The Woodlands, and Conroe. Affordable pricing on every job.
            </p>
          </motion.div>

          {/* Quick-nav */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/40"
          >
            {services.map((s, i) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="font-semibold hover:text-[var(--hernandez-gold)] transition-colors py-1"
              >
                {s.title}{i < services.length - 1 && <span className="ml-4 text-white/15">·</span>}
              </a>
            ))}
          </motion.div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--hernandez-gold)]/20 to-transparent" />
      </section>

      {/* ═══ SERVICE SECTIONS — varied layouts ═══ */}
      {services.map((service, idx) => {
        const isEven = idx % 2 === 0;

        // Alternate between cream and white for even/odd, with one dark accent
        const isDark = idx === 2; // Make one service dark for visual break
        const bgClass = isDark
          ? 'bg-[var(--hernandez-ink)]'
          : isEven
            ? 'bg-[var(--hernandez-cream)]'
            : 'bg-white';
        const headingColor = isDark ? 'text-white' : 'text-[var(--hernandez-forest-deep)]';
        const bodyColor = isDark ? 'text-white/60' : 'text-slate-600';
        const detailColor = isDark ? 'text-white/55' : 'text-slate-500';
        const checkColor = isDark ? 'text-[var(--hernandez-gold)]' : 'text-[var(--hernandez-forest)]';
        const btnClass = isDark
          ? 'bg-[var(--hernandez-gold)] text-white hover:brightness-110'
          : 'bg-[var(--hernandez-forest-deep)] text-white hover:bg-[var(--hernandez-forest)]';
        const badgeBg = isDark
          ? 'bg-[var(--hernandez-gold)]/10 text-[var(--hernandez-gold)]'
          : 'bg-[var(--hernandez-forest-deep)]/8 text-[var(--hernandez-forest-deep)]';

        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`${bgClass} scroll-mt-20 py-16 sm:py-20 lg:py-24`}
          >
            <div className={shell}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  idx % 2 !== 0 ? 'lg:[direction:rtl]' : ''
                }`}
              >
                {/* Image */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp}
                  transition={{ duration: 0.45 }}
                  className="lg:[direction:ltr]"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <NextImage
                      src={service.image}
                      alt={`${service.title} in Humble TX — José Hernández Tree Service`}
                      width={720}
                      height={480}
                      className="h-auto w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Turnaround badge overlaid on image */}
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                      <Clock className="h-3 w-3 text-[var(--hernandez-gold)]" />
                      {service.turnaround}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="lg:[direction:ltr]"
                >
                  <h2 className={`text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl ${headingColor}`}>
                    {service.title}
                  </h2>

                  <p className={`mt-4 text-base leading-relaxed sm:text-[1.05rem] ${bodyColor}`}>
                    {service.longDescription}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className={`flex items-start gap-3 text-sm sm:text-base ${detailColor}`}>
                        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${checkColor}`} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wider shadow-lg transition-all active:scale-[0.98] ${btnClass}`}
                    >
                      Book Consultation <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={`tel:${siteConfig.cleanPhone}`}
                      className={`inline-flex items-center gap-2 text-sm font-bold ${checkColor} hover:underline transition-colors`}
                    >
                      <Phone className="h-4 w-4" /> {siteConfig.phone}
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ═══ FAQ — side-by-side, not stacked center block ═══ */}
      <section className="bg-[var(--hernandez-forest-deep)] py-16 sm:py-20 lg:py-24">
        <div className={shell}>
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Common questions
              </h2>
              <p className="mt-4 text-base text-white/45 max-w-sm">
                If you don&apos;t see your question here, just call — we&apos;re happy to talk it through.
              </p>
              <a href={`tel:${siteConfig.cleanPhone}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--hernandez-gold)]">
                <Phone className="h-4 w-4" /> {siteConfig.phone}
              </a>
            </div>

            <div className="text-white">
              {faqs.map((faq, i) => (
                <FaqAccordion key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA — horizontal, not centered stack ═══ */}
      <section className="bg-[var(--hernandez-ink)] py-14 sm:py-16">
        <div className={shell}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Ready to get started?</h2>
              <p className="mt-2 text-base text-white/50 max-w-md">
                Affordable pricing. Serving Humble, Dayton, Baytown, Spring, The Woodlands &amp; Conroe.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--hernandez-gold)] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:brightness-110 transition-all"
              >
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${siteConfig.cleanPhone}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/5 transition-all"
              >
                <Phone className="h-4 w-4" /> {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
