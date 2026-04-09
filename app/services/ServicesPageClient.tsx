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
}: {
  services: ServiceItem[];
  faqs?: FaqItem[];
}) {
  return (
    <>
      {/* Sub-hero */}
      <section className="relative overflow-hidden bg-[var(--jerry-navy-deep)]">
        <div className="absolute inset-0">
          <NextImage src="/roofing/jerry_service_replacement.jpg" alt="" fill sizes="100vw" className="object-cover opacity-15" />
        </div>
        <div className={`${shell} relative z-10 py-16 sm:py-24 text-center max-w-3xl mx-auto`}>
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-[var(--jerry-lime)] transition-colors cursor-pointer">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white/70">Services</li>
            </ol>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl leading-[1.05]">
              Expert Roofing &amp; Exterior Services
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              With over {siteConfig.yearsInBusiness} years of dedicated experience across Katy, Cypress, and Cinco Ranch, Jerry's Roofing delivers premium installations, honest assessments, and no hidden fees.
            </p>
          </motion.div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--jerry-lime)]/20 to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="bg-[var(--jerry-cream)] py-14 sm:py-20 lg:py-24">
        <div className={shell}>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex flex-col bg-white border border-slate-200 hover:border-[var(--jerry-navy)]/30 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <NextImage
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-[var(--jerry-navy)] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                    {s.title}
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5 sm:p-6 lg:p-8">
                  <p className="text-[0.8rem] sm:text-[0.85rem] leading-relaxed text-slate-500 mb-5 sm:mb-6 flex-1 line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                    {s.summary}
                  </p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 border border-[var(--jerry-navy)]/10 bg-slate-50 px-5 py-3 text-[0.75rem] font-bold uppercase tracking-wide text-[var(--jerry-navy)] group-hover:bg-[var(--jerry-navy)] group-hover:text-white transition-all cursor-pointer"
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[var(--jerry-navy-deep)] py-16 sm:py-20 lg:py-24 border-t border-slate-800">
        <div className={`${shell} text-center`}>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Need an Honest Assessment?
          </h2>
          <p className="mt-4 text-base text-white/50 max-w-xl mx-auto">
            We don't do pressure tactics or arbitrary pricing. Request an entirely free, on-site written estimate for any of our services.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-8 py-4 text-[0.8rem] font-bold uppercase tracking-wide text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer">
              Request a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${siteConfig.cleanPhone}`} className="inline-flex items-center gap-2 text-[0.9rem] font-bold text-white hover:text-[var(--jerry-lime)] transition-colors cursor-pointer">
              <Phone className="h-4 w-4" /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
