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
 <section className="relative overflow-hidden bg-[var(--jerry-navy-deep)]">
 <div className="absolute inset-0">
 <NextImage src="/roofing/real/05-truck-yardsign.jpg" alt="" fill sizes="100vw" className="object-cover opacity-15" />
 </div>
 <div className={`${shell} relative z-10 py-10 sm:py-14`}>
 <nav aria-label="Breadcrumb" className="mb-5">
 <ol className="flex items-center gap-2 text-sm text-white/40">
 <li><Link href="/" className="hover:text-[var(--jerry-lime)] transition-colors cursor-pointer">Home</Link></li>
 <li aria-hidden="true">/</li>
 <li className="font-semibold text-white/70">Contact</li>
 </ol>
 </nav>

 <motion.div initial="hidden" animate="visible" variants={fadeUp}>
 <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--jerry-lime)] mb-3">
 No Obligation &bull; No Cost
 </p>
 <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.1] tracking-tight max-w-md">
 Get your free estimate.
 </h1>
 <p className="mt-3 text-base text-white/50 leading-relaxed max-w-md">
 Tell us what you need — we&apos;ll get back to you fast with an honest, clear quote.
 </p>
 <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/40">
 <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[var(--jerry-lime)]" /> Free inspections &amp; estimates</span>
 <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[var(--jerry-lime)]" /> Available anytime</span>
 <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[var(--jerry-lime)]" /> 7 years experience</span>
 </div>
 </motion.div>
 </div>
 <div className="h-px bg-gradient-to-r from-transparent via-[var(--jerry-lime)]/20 to-transparent" />
 </section>

 {/* FORM + SIDEBAR */}
 <section className="bg-[var(--jerry-cream)] py-14 sm:py-16">
 <div className={shell}>
 <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

 {/* Form */}
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: '-40px' }}
 variants={fadeUp}
 className="lg:col-span-3"
 >
 <div className="rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 p-6 sm:p-8">
 <div className="mb-6">
 <h2 className="text-xl font-extrabold text-[var(--jerry-navy)] sm:text-2xl">Request a Quote</h2>
 <p className="text-sm text-slate-400 mt-1">No cost, no pressure — just an honest quote.</p>
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

 {/* Phone */}
 <div className="rounded-xl bg-[var(--jerry-navy)] p-6 sm:p-7 text-white">
 <div className="flex items-center gap-3 mb-4">
 <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--jerry-lime)]/15 border border-[var(--jerry-lime)]/25">
 <Phone className="h-5 w-5 text-[var(--jerry-lime)]" />
 </div>
 <div>
 <div className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/40">Call or Text Anytime</div>
 <a
 href={`tel:${siteConfig.cleanPhone}`}
 className="block text-2xl font-extrabold text-[var(--jerry-lime)] hover:text-white transition-colors tracking-tight cursor-pointer"
 >
 {siteConfig.phone}
 </a>
 </div>
 </div>
 <p className="text-sm text-white/50">We pick up or call right back. Available anytime.</p>
 </div>

 {/* Trust details */}
 <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm space-y-3">
 <div className="flex items-center gap-3">
 <Clock className="h-4 w-4 text-[var(--jerry-lime)] shrink-0" />
 <span className="text-sm font-semibold text-[var(--jerry-navy)]">Available Anytime</span>
 </div>
 <div className="h-px bg-slate-100" />
 <div className="flex items-center gap-3">
 <Shield className="h-4 w-4 text-[var(--jerry-lime)] shrink-0" />
 <span className="text-sm font-semibold text-[var(--jerry-navy)]">Fully Insured — Every Job</span>
 </div>
 </div>

 {/* Service areas */}
 <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
 <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">We Serve</div>
 <p className="text-sm font-semibold text-[var(--jerry-navy)] leading-relaxed">
 {siteConfig.serviceAreas.join(' \u00B7 ')} <span className="text-slate-400 font-normal">&amp; more</span>
 </p>
 </div>

 {/* Reviews */}
 <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
 <div className="flex items-center gap-3 mb-3">
 <Stars count={5} size="h-4 w-4" />
 <span className="text-sm font-bold text-[var(--jerry-navy)]">{siteConfig.rating} on Google</span>
 </div>
 <p className="text-sm text-slate-500 leading-relaxed italic">
 &ldquo;{siteConfig.testimonials[0].quote.slice(0, 100)}...&rdquo;
 </p>
 <p className="text-xs font-semibold text-slate-400 mt-2">— {siteConfig.testimonials[0].name}</p>
 </div>

 {/* Email */}
 <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
 <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Email</div>
 <a href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-[var(--jerry-navy)] hover:underline cursor-pointer">
 {siteConfig.email}
 </a>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 sm:py-20 bg-white">
 <div className={shell}>
 <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: '-80px' }}
 variants={fadeUp}
 className="lg:sticky lg:top-32"
 >
 <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--jerry-navy-light)] mb-3">
 Common Questions
 </p>
 <h2 className="text-3xl font-extrabold text-[var(--jerry-navy)] leading-tight">
 Quick answers before you book.
 </h2>
 <p className="mt-3 text-base text-slate-500 leading-relaxed">
 Still have questions? Call us at{' '}
 <a href={`tel:${siteConfig.cleanPhone}`} className="font-semibold text-[var(--jerry-navy)] hover:underline cursor-pointer">
 {siteConfig.phone}
 </a>{' '}
 — we&apos;re happy to help.
 </p>
 <div className="mt-6 h-px w-16 bg-gradient-to-r from-[var(--jerry-lime)]/50 to-transparent" />
 </motion.div>

 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: '-80px' }}
 variants={fadeUp}
 >
 <div className="space-y-3">
 {faqs.map((faq, i) => (
 <details key={i} className="group border border-slate-200 bg-[var(--jerry-cream)] overflow-hidden hover:border-[var(--jerry-navy)]/20 transition-colors">
 <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer">
 <h3 className="text-[0.95rem] font-bold text-[var(--jerry-navy)] group-open:text-[var(--jerry-navy-light)]">{faq.q}</h3>
 <span className="shrink-0 text-[var(--jerry-navy)] group-open:rotate-45 transition-transform duration-200 text-xl leading-none font-light">+</span>
 </summary>
 <div className="px-6 pb-5">
 <p className="text-[0.88rem] leading-relaxed text-slate-600">{faq.a}</p>
 </div>
 </details>
 ))}
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 </>
 );
}
