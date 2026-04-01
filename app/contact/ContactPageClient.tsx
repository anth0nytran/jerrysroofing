'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { siteConfig } from '../config';
import { EstimateForm } from '../components/EstimateForm';
import { Stars } from '../components/Stars';

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPageClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      {/* Sub-hero */}
      <section className="relative overflow-hidden bg-[var(--hernandez-forest-deep)]">
        <div className="absolute inset-0">
          <NextImage src="/tree_pro/hernandez_service_removal.png" alt="" fill sizes="100vw" className="object-cover opacity-15" />
        </div>
        <div className={`${shell} relative z-10 py-12 sm:py-16`}>
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-[var(--hernandez-gold)] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white/70">Contact</li>
            </ol>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)] mb-3">
              No Obligation &bull; No Cost
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.1] tracking-tight max-w-md">
              Book your free consultation.
            </h1>
            <p className="mt-3 text-base text-white/50 leading-relaxed max-w-md">
              Tell us what you need — we&apos;ll get back to you fast with an honest, affordable quote.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/40">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[var(--hernandez-gold)]" /> Free estimates</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[var(--hernandez-gold)]" /> Same-day availability</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[var(--hernandez-gold)]" /> {siteConfig.yearsInBusiness}+ years experience</span>
            </div>
          </motion.div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--hernandez-gold)]/20 to-transparent" />
      </section>

      {/* ═══ FORM + SIDEBAR ═══ */}
      <section className="bg-[var(--hernandez-cream)] py-16 sm:py-20">
        <div className={shell}>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* Form — main focus */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
  
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/5 p-6 sm:p-8">
                <div className="mb-6">
                  <h2 className="text-xl font-extrabold text-[var(--hernandez-forest-deep)] sm:text-2xl">Request Your Free Estimate</h2>
                  <p className="text-sm text-slate-400 mt-1">No cost, no pressure — just an honest, affordable quote.</p>
                </div>
                <EstimateForm />
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}

              className="lg:col-span-2 flex flex-col gap-4"
            >

              {/* Phone — prominent */}
              <div className="rounded-2xl bg-[var(--hernandez-forest-deep)] p-6 sm:p-7 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--hernandez-gold)]/15 border border-[var(--hernandez-gold)]/25">
                    <Phone className="h-5 w-5 text-[var(--hernandez-gold)]" />
                  </div>
                  <div>
                    <div className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/40">Call or Text Anytime</div>
                    <a
                      href={`tel:${siteConfig.cleanPhone}`}
                      className="block text-2xl font-extrabold text-[var(--hernandez-gold)] hover:text-white transition-colors tracking-tight"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <p className="text-sm text-white/50">We pick up or call right back. Available 24/7 for emergencies.</p>
              </div>

              {/* Trust details */}
              <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-[var(--hernandez-gold)] shrink-0" />
                  <span className="text-sm font-semibold text-[var(--hernandez-forest-deep)]">24/7 Emergency Ready</span>
                </div>
                <div className="h-px bg-slate-100" />
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-[var(--hernandez-gold)] shrink-0" />
                  <span className="text-sm font-semibold text-[var(--hernandez-forest-deep)]">Fully Insured — Every Job</span>
                </div>
              </div>

              {/* Service areas */}
              <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">We Serve</div>
                <p className="text-sm font-semibold text-[var(--hernandez-forest-deep)] leading-relaxed">
                  {siteConfig.serviceAreas.join(' · ')} <span className="text-slate-400 font-normal">& more</span>
                </p>
              </div>

              {/* Reviews */}
              <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Stars count={5} size="h-4 w-4" />
                  <span className="text-sm font-bold text-[var(--hernandez-forest-deep)]">{siteConfig.rating} on Google</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed italic">
                  &ldquo;{siteConfig.testimonials[0].quote.slice(0, 100)}...&rdquo;
                </p>
                <p className="text-xs font-semibold text-slate-400 mt-2">— {siteConfig.testimonials[0].name}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ — two-column layout with visual interest ═══ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className={shell}>
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
  
              className="lg:sticky lg:top-32"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)] mb-3">
                Common Questions
              </p>
              <h2 className="text-3xl font-extrabold text-[var(--hernandez-forest-deep)] leading-tight">
                Quick answers before you book.
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Still have questions? Call us at{' '}
                <a href={`tel:${siteConfig.cleanPhone}`} className="font-semibold text-[var(--hernandez-gold)] hover:underline">
                  {siteConfig.phone}
                </a>{' '}
                — we&apos;re happy to help.
              </p>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-[var(--hernandez-gold)]/50 to-transparent" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}

            >
              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {faqs.map(({ q, a }) => (
                  <details key={q} className="group">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 sm:py-6 text-[0.95rem] font-semibold text-[var(--hernandez-forest-deep)]">
                      {q}
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center text-lg text-[var(--hernandez-gold)] transition-transform duration-200 group-open:rotate-45">+</span>
                    </summary>
                    <div className="pb-5 sm:pb-6 text-sm leading-relaxed text-slate-500">{a}</div>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CTA — with background image ═══ */}
      <section className="relative isolate overflow-hidden bg-[var(--hernandez-forest-deep)] py-16 sm:py-20">
        <div className="absolute inset-0">
          <NextImage src="/tree_pro/emergency_service.png" alt="Tree service work" fill className="object-cover opacity-15" />
        </div>
        <div className={`${shell} relative z-10`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}

            className="flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Prefer to call?</h2>
              <p className="mt-2 text-base text-white/50">We&apos;re available 24/7 for emergencies. Same-day estimates available.</p>
            </div>
            <a
              href={`tel:${siteConfig.cleanPhone}`}
              className="inline-flex items-center gap-2.5 rounded-lg bg-[var(--hernandez-gold)] px-8 py-4 text-base font-bold text-white hover:brightness-110 transition-all shrink-0 shadow-lg shadow-[var(--hernandez-gold)]/15"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.phone}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
