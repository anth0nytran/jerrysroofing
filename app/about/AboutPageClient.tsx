'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
 Shield,
 Heart,
 Clock,
 Star,
 Users,
 ArrowRight,
 Phone,
 ThumbsUp,
 Award,
 Home,
} from 'lucide-react';
import { siteConfig } from '../config';
import { Stars } from '../components/Stars';

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

const fadeUp = {
 hidden: { opacity: 0, y: 24 },
 visible: { opacity: 1, y: 0 },
};

export default function AboutPageClient() {
 return (
 <>
 {/* Sub-hero */}
 <section className="relative overflow-hidden bg-[var(--jerry-navy-deep)]">
 <div className="absolute inset-0">
 <NextImage src="/pictures/selfie.jpg" alt="" fill sizes="100vw" className="object-cover opacity-15" />
 </div>
 <div className={`${shell} relative z-10 py-10 sm:py-14`}>
 <nav aria-label="Breadcrumb" className="mb-5">
 <ol className="flex items-center gap-2 text-sm text-white/40">
 <li><Link href="/" className="hover:text-[var(--jerry-lime)] transition-colors cursor-pointer">Home</Link></li>
 <li aria-hidden="true">/</li>
 <li className="font-semibold text-white/70">About</li>
 </ol>
 </nav>
 <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }}>
 <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-[1.1] max-w-xl">
 About Jerrys Roofing
 </h1>
 <p className="mt-3 text-base leading-relaxed text-white/50 max-w-lg">
 Locally owned in Katy, Texas. Straight talk. Quality craftsmanship backed by 7 years of roofing experience.
 </p>
 </motion.div>
 </div>
 <div className="h-px bg-gradient-to-r from-transparent via-[var(--jerry-lime)]/20 to-transparent" />
 </section>

 {/* Meet the Owner */}
 <section className="bg-white py-12 sm:py-16">
 <div className={shell}>
 <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-center">
 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45 }}>
 <div className="relative overflow-hidden shadow-xl rounded-2xl">
 <NextImage
 src="/pictures/selfie.jpg"
 alt="Jerry W. Pilley — Founder of Jerrys Roofing in Katy, Texas"
 width={600}
 height={500}
 className="h-auto w-full object-cover"
 sizes="(max-width: 1024px) 100vw, 50vw"
 />
 </div>
 </motion.div>

 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45, delay: 0.08 }}>
 <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--jerry-navy-light)]">Meet the Founder</p>
 <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl">Jerry W. Pilley</h2>

 <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-slate-600">
 <p>
 Born and raised in Texas, Jerry Pilley grew up and lived in the Southeast Texas area for 20 years. He has lived in the Katy, Texas area for 8 years, where he began his roofing career in 2019.
 </p>
 <p>
 After years of working for a larger roofing company, Jerry decided to start his own roofing company based in Katy, Texas in 2024. With 7 years of hands-on roofing experience, the personnel at Jerrys Roofing focus on quality roofing installations in and around the Katy area.
 </p>
 <p>
 From new roofs, to spot repairs, to insurance quotes, and more, Jerrys Roofing is here to &ldquo;make sure you can put a roof over your head.&rdquo;
 </p>
 <p className="font-semibold text-[var(--jerry-navy)] italic">
 &ldquo;Honesty — we do what we say.&rdquo;
 </p>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

 {/* Why Jerrys Roofing */}
 <section className="bg-[var(--jerry-cream)] py-12 sm:py-16 diagonal-stripes">
 <div className={shell}>
 <div className="text-center max-w-2xl mx-auto mb-12">
 <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--jerry-navy-light)]">Why Choose Us</p>
 <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl">Why Katy, Texas homeowners trust Jerrys Roofing</h2>
 </div>

 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {[
 {
 icon: ThumbsUp,
 title: 'Honest & Straightforward',
 desc: "No pressure sales, no hidden fees. Jerry gives you a clear written estimate and tells you exactly what your roof needs — nothing more, nothing less.",
 },
 {
 icon: Award,
 title: 'Premium Materials',
 desc: "We use only industry-leading shingles from IKO, CertainTeed, GAF, and F-Wave — manufacturers that stand behind their products with real warranties.",
 },
 {
 icon: Shield,
 title: 'Fully Insured',
 desc: "Every job is fully covered. Your property, your home, and our crew are protected. We provide proof of insurance upon request.",
 },
 {
 icon: Clock,
 title: 'Fast & Reliable',
 desc: "Most roof replacements are completed in 1-2 days. We show up when we say we will and finish the job on schedule.",
 },
 {
 icon: Home,
 title: 'Local & Affordable',
 desc: "Being a local Katy, Texas business means lower overhead — and we pass those savings directly to you. Quality work at a fair price.",
 },
 {
 icon: Heart,
 title: 'Community Invested',
 desc: "Just like you're invested in your home, Jerry is invested in the Katy, Texas community. Your satisfaction drives our reputation.",
 },
 ].map((item) => (
 <motion.div
 key={item.title}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeUp}
 transition={{ duration: 0.4 }}
 className="bg-white p-6 sm:p-8 border border-slate-100 hover:shadow-lg hover:border-[var(--jerry-navy)]/10 transition-all duration-300 rounded-xl"
 >
 <div className="flex h-11 w-11 items-center justify-center bg-[var(--jerry-navy)]/8 mb-4 rounded-xl">
 <item.icon className="h-5 w-5 text-[var(--jerry-navy)]" />
 </div>
 <h3 className="text-lg font-extrabold text-[var(--jerry-navy)]">{item.title}</h3>
 <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Stats */}
 <section className="bg-[var(--jerry-navy)] py-10 sm:py-14">
 <div className={shell}>
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
 {[
 { value: '2019', label: 'Roofing Since' },
 { value: '5.0', label: 'Star Rating on Google' },
 { value: '7+', label: 'Years Experience' },
 { value: '3', label: 'Premium Manufacturers' },
 ].map((stat) => (
 <motion.div
 key={stat.label}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeUp}
 transition={{ duration: 0.4 }}
 >
 <div className="text-4xl sm:text-5xl font-black text-[var(--jerry-lime)] tracking-tight">{stat.value}</div>
 <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50">{stat.label}</div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="bg-white py-12 sm:py-16">
 <div className={`${shell} text-center max-w-2xl mx-auto`}>
 <h2 className="text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl">Ready to talk about your roof?</h2>
 <p className="mt-4 text-base text-slate-500">
 Get a free inspection and honest estimate. No pressure, no obligation — just straight talk about what your Katy, Texas roof needs.
 </p>
 <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
 <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer cta-pulse rounded-lg">
 Request a Quote <ArrowRight className="h-4 w-4" />
 </Link>
 <a href={`tel:${siteConfig.cleanPhone}`} className="inline-flex items-center gap-2 text-sm font-bold text-[var(--jerry-navy)] hover:underline cursor-pointer">
 <Phone className="h-4 w-4" /> {siteConfig.phone}
 </a>
 </div>
 </div>
 </section>
 </>
 );
}
