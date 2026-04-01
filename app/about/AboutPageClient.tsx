'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Shield,
  Heart,
  Clock,
  Star,
  Sparkles,
  Users,
  ArrowRight,
  Phone,
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
      <section className="relative overflow-hidden bg-[var(--hernandez-forest-deep)]">
        <div className="absolute inset-0">
          <NextImage src="/tree_pro/done_right.jpg" alt="" fill sizes="100vw" className="object-cover opacity-15" />
        </div>
        <div className={`${shell} relative z-10 py-12 sm:py-16`}>
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-[var(--hernandez-gold)] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white/70">About</li>
            </ol>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)] mb-3">
              Family-Owned &bull; Humble, Texas
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl tracking-tight max-w-lg">
              Built on trust. Driven by fair pricing.
            </h1>
            <p className="mt-3 text-base text-white/50 leading-relaxed max-w-lg">
              For {siteConfig.yearsInBusiness}+ years, José Hernández has served homeowners across
              Humble, Dayton, Baytown, Spring, The Woodlands, and Conroe with
              the same simple promise: quality work at prices that make sense.
            </p>
          </motion.div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--hernandez-gold)]/20 to-transparent" />
      </section>

      {/* ═══ STORY — rich two-column ═══ */}
      <section className="bg-white py-14 sm:py-24">
        <div className={shell}>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
  
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)] mb-3">
                Our Story
              </p>
              <h2 className="text-3xl font-extrabold text-[var(--hernandez-forest-deep)] sm:text-4xl leading-tight mb-8">
                It started with a truck, a chainsaw, and a handshake.
              </h2>
              <div className="space-y-5 text-[0.95rem] leading-[1.8] text-slate-600">
                <p>
                  More than {siteConfig.yearsInBusiness} years ago, José Hernández started this company
                  out of Humble with one goal: do the work right, charge a fair price, and leave every yard
                  better than he found it. No fancy office, no sales pitch — just honest work.
                </p>
                <p>
                  Word spread. One neighbor told the next. That&apos;s still how most of our
                  work comes in today. We&apos;re a family-run crew — not a franchise, not a
                  call center. When you call, you&apos;re talking to someone who&apos;ll actually
                  be on your property.
                </p>
                <p>
                  Our top services — <strong className="text-[var(--hernandez-forest-deep)]">tree trimming, tree removal, and full landscaping</strong> — are
                  what most people know us for. But we also handle stump grinding, storm
                  cleanup, mulching, and lot clearing. Whatever the job, the standard is the same:
                  show up on time, communicate clearly, and don&apos;t leave until it&apos;s done right.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-5">
                <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--hernandez-gold)] hover:underline">
                  See our services <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-[var(--hernandez-gold)] transition-colors">
                  View our work <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Right — image + supporting details */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="space-y-6"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <NextImage
                  src="/tree_pro/trust_us.png"
                  alt="José Hernández Tree Service crew on the job"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--hernandez-forest-deep)]/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">{siteConfig.yearsInBusiness}+</div>
                    <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/60 mt-1">Years in business</div>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="text-center">
                      <div className="text-lg font-extrabold leading-none">5.0</div>
                      <Stars count={5} size="h-2.5 w-2.5 mt-1" />
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-lg font-extrabold leading-none">24/7</div>
                      <div className="text-[0.55rem] font-bold uppercase tracking-wider text-white/50 mt-1">Emergency</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                <Shield className="h-4 w-4 text-[var(--hernandez-gold)] shrink-0 mt-0.5" />
                <span>Licensed, fully insured, bilingual crew. Full liability coverage on every job — no exceptions.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS — social proof strip ═══ */}
      <section className="bg-[var(--hernandez-cream)] py-12 sm:py-16 border-y border-[var(--hernandez-line)]">
        <div className={shell}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}

            className="text-center mb-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)] mb-3">
              What Our Customers Say
            </p>
            <h2 className="text-3xl font-extrabold text-[var(--hernandez-forest-deep)] sm:text-4xl">
              5-star rated and counting.
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}

                className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm"
              >
                <Stars count={5} size="h-4 w-4" />
                <p className="mt-4 text-[0.9rem] leading-relaxed text-slate-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-5 border-t border-slate-100 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--hernandez-forest-deep)] text-white text-xs font-bold">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--hernandez-forest-deep)]">{t.name}</div>
                    <div className="text-xs text-slate-400">Google Review</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}

            className="text-center mt-8"
          >
            <Link href="/#reviews" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--hernandez-gold)] hover:underline">
              See all reviews <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ VALUES — dark section with mixed layout ═══ */}
      <section className="bg-[var(--hernandez-forest-deep)] py-14 sm:py-22">
        <div className={shell}>
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
            {/* Left — heading area */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
  
              className="lg:sticky lg:top-32"
            >
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)] mb-3">
                What We Stand For
              </p>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl leading-tight">
                Not just words on a page.
              </h2>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-white/50 max-w-sm">
                These are the standards every member of our crew lives by — on every job, for every customer.
              </p>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-[var(--hernandez-gold)]/50 to-transparent" />
            </motion.div>

            {/* Right — values as simple list */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              className="space-y-0"
            >
              {[
                { icon: Shield, title: 'Integrity', desc: 'Fair pricing, no upselling. If something isn\'t right, we come back and fix it — no charge, no argument.' },
                { icon: Heart, title: 'Safety', desc: 'Every crew member is trained in safe rigging, proper cuts, and equipment handling. Your property and our people come first.' },
                { icon: Star, title: 'Quality', desc: 'We don\'t cut corners. From the first cut to the final cleanup, every detail gets the attention it deserves.' },
                { icon: Clock, title: 'Reliability', desc: 'When we say we\'ll be there, we\'re there. On time, every time.' },
                { icon: Users, title: 'Community', desc: 'This community raised us. We take pride in serving our neighbors.' },
                { icon: Sparkles, title: 'Clean Worksite', desc: 'Every branch, every leaf — cleaned up. We leave your yard spotless.' },
              ].map((v, i) => (
                <div
                  key={v.title}
                  className={`flex items-start gap-4 py-5 sm:py-6 ${i > 0 ? 'border-t border-white/[0.06]' : ''}`}
                >
                  <v.icon className="h-5 w-5 text-[var(--hernandez-gold)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-[0.95rem] font-bold text-white mb-1">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-white/50">{v.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICE AREAS ═══ */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)] mb-3">
                Where We Work
              </p>
              <h2 className="text-2xl font-extrabold text-[var(--hernandez-forest-deep)] sm:text-3xl leading-tight">
                Serving Humble to Conroe and everywhere in between.
              </h2>
              <p className="mt-3 text-[0.92rem] text-slate-500 leading-relaxed">
                Our crews cover the greater Lake Houston area and beyond. If you&apos;re not
                sure whether we serve your neighborhood, just call — we probably do.
              </p>

              <div className="mt-6">
                <a
                  href={`tel:${siteConfig.cleanPhone}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--hernandez-forest)] hover:text-[var(--hernandez-gold)] transition-colors"
                >
                  <Phone className="h-4 w-4" /> {siteConfig.phone} — Call to check your area
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
            >
              <div className="space-y-4">
                <div>
                  <div className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-slate-400 mb-2">Primary Areas</div>
                  <p className="text-[0.95rem] font-semibold text-[var(--hernandez-forest-deep)] leading-relaxed">
                    {siteConfig.allServiceAreas.slice(0, 6).join(' · ')}
                  </p>
                </div>
                <div className="h-px bg-slate-150 bg-slate-200" />
                <div>
                  <div className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-slate-400 mb-2">Also Serving</div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {siteConfig.allServiceAreas.slice(6).join(', ')}
                  </p>
                </div>
                <div className="h-px bg-slate-200" />
                <div>
                  <div className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-slate-400 mb-2">Neighborhoods</div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {siteConfig.neighborhoods}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative isolate overflow-hidden bg-[var(--hernandez-forest-deep)] py-16 sm:py-20">
        <div className="absolute inset-0">
          <NextImage src="/tree_pro/trust_us.png" alt="Professional tree service results" fill className="object-cover opacity-15" />
        </div>
        <div className={`${shell} relative z-10`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}

            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          >
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl leading-tight">
                Ready to get started?
              </h2>
              <p className="mt-3 text-base text-white/55">
                Affordable options, fair pricing, and the same crew from start to finish.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--hernandez-gold)] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:brightness-110 transition-all"
              >
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${siteConfig.cleanPhone}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all"
              >
                <Phone className="h-4 w-4" /> {siteConfig.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
