'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Shield,
  Heart,
  CheckCircle2,
  Clock,
  Star,
  Sparkles,
  Users,
  MapPin,
  ArrowRight,
  Phone,
  TreePine,
  Truck,
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
      {/* ═══ HERO — full-width image with overlay, matches homepage energy ═══ */}
      <section className="relative isolate overflow-hidden bg-[var(--hernandez-ink)]">
        <div className="absolute inset-0">
          <NextImage
            src="/tree_pro/trust_us_v2.png"
            alt="José Hernández Tree Service crew on the job in Humble TX"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,12,8,0.92)] via-[rgba(5,12,8,0.82)] to-[rgba(5,12,8,0.5)]" />

        <div className={`${shell} relative z-10 py-20 sm:py-28 lg:py-36`}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}

            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-5">
              <Stars count={5} size="h-4 w-4 text-[#FBBC05]" />
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-white/90">
                {siteConfig.rating} Stars &bull; {siteConfig.reviewCount}+ Google Reviews
              </span>
            </div>

            <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)] mb-4">
              Family-Owned &bull; Humble, Texas
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.06] text-white sm:text-5xl lg:text-[3.75rem] tracking-tight">
              Built on trust. <br />
              <span className="text-[var(--hernandez-gold)]">Driven by fair pricing.</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
              For {siteConfig.yearsInBusiness}+ years, José Hernández has served homeowners across
              Humble, Dayton, Baytown, Spring, The Woodlands, and Conroe with
              the same simple promise: quality work at prices that make sense.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm font-bold text-white">
                <Shield className="h-4 w-4 text-[var(--hernandez-gold)]" /> Fully Insured
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-[var(--hernandez-gold)]" /> {siteConfig.yearsInBusiness}+ Years
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm font-bold text-white">
                <Clock className="h-4 w-4 text-[var(--hernandez-gold)]" /> 24/7 Emergency
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ STORY — rich two-column ═══ */}
      <section className="bg-white py-20 sm:py-28">
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

            {/* Right — stats strip */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}

              className="space-y-5"
            >
              <div className="rounded-2xl bg-[var(--hernandez-forest-deep)] p-8 text-white">
                <div className="text-5xl font-extrabold tracking-tight">{siteConfig.yearsInBusiness}+</div>
                <div className="mt-1 text-sm font-medium text-white/50">Years in business</div>
                <div className="mt-4 h-px bg-white/10" />
                <p className="mt-4 text-[0.85rem] leading-relaxed text-white/60">
                  Licensed, fully insured, bilingual crew. We&apos;ve seen every kind of tree
                  job and every kind of Texas storm.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-[var(--hernandez-cream)] p-6">
                  <div className="text-3xl font-extrabold text-[var(--hernandez-forest-deep)]">{siteConfig.reviewCount}+</div>
                  <div className="mt-1 text-xs font-semibold text-slate-400">5-Star Reviews</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-[var(--hernandez-cream)] p-6">
                  <div className="text-3xl font-extrabold text-[var(--hernandez-forest-deep)]">24/7</div>
                  <div className="mt-1 text-xs font-semibold text-slate-400">Emergency Ready</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-[var(--hernandez-cream)] border border-[var(--hernandez-line)] px-5 py-4">
                <Shield className="h-5 w-5 text-[var(--hernandez-gold)] shrink-0" />
                <span className="text-sm font-semibold text-[var(--hernandez-forest-deep)]">Full liability insurance on every job — no exceptions</span>
              </div>

              {/* Mobile image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-xl lg:hidden">
                <NextImage
                  src="/tree_pro/trust_us_v2.png"
                  alt="José Hernández Tree Service crew on the job"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS — social proof strip ═══ */}
      <section className="bg-[var(--hernandez-cream)] py-16 sm:py-20 border-y border-[var(--hernandez-line)]">
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
              {siteConfig.reviewCount}+ five-star reviews and counting.
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
      <section className="bg-[var(--hernandez-forest-deep)] py-20 sm:py-28">
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

            {/* Right — values in varied layout */}
            <div className="space-y-4">
              {/* Featured value */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
    
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 hover:bg-white/[0.07] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--hernandez-gold)]/15">
                    <Shield className="h-5 w-5 text-[var(--hernandez-gold)]" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Integrity</h3>
                </div>
                <p className="text-[0.9rem] leading-relaxed text-white/55">
                  We give fair, affordable pricing, never upsell work you don&apos;t need, and stand behind every job we do. If something isn&apos;t right, we come back and fix it — no charge, no argument.
                </p>
              </motion.div>

              {/* 2-col row */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Heart, title: 'Safety', desc: 'Every crew member is trained in safe rigging, proper cuts, and equipment handling. Your property and our people come first.' },
                  { icon: Star, title: 'Quality', desc: 'We don\'t cut corners. From the first cut to the final cleanup, every detail gets the attention it deserves.' },
                ].map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={fadeUp}
    
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors"
                  >
                    <v.icon className="h-5 w-5 text-[var(--hernandez-gold)] mb-3" />
                    <h3 className="text-base font-bold text-white mb-1.5">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-white/50">{v.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* 3-col compact row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Clock, title: 'Reliability', desc: 'When we say we\'ll be there, we\'re there.' },
                  { icon: Users, title: 'Community', desc: 'This community raised us. We take pride in serving our neighbors.' },
                  { icon: Sparkles, title: 'Clean Worksite', desc: 'Every branch, every leaf — hauled away.' },
                ].map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={fadeUp}
    
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-colors text-center sm:text-left"
                  >
                    <v.icon className="h-5 w-5 text-[var(--hernandez-gold)] mb-2 mx-auto sm:mx-0" />
                    <h3 className="text-sm font-bold text-white mb-1">{v.title}</h3>
                    <p className="text-xs leading-relaxed text-white/45">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICE AREAS ═══ */}
      <section className="bg-white py-20 sm:py-28">
        <div className={shell}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}

            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)] mb-3">
              Where We Work
            </p>
            <h2 className="text-3xl font-extrabold text-[var(--hernandez-forest-deep)] sm:text-4xl leading-tight">
              Serving Humble to Conroe and everywhere in between.
            </h2>
            <p className="mt-4 text-base text-slate-500 leading-relaxed">
              Our crews cover the greater Lake Houston area and beyond. If you&apos;re not
              sure whether we serve your neighborhood, just call — we probably do.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {siteConfig.allServiceAreas.map((area, i) => {
              const isPrimary = i < 6;
              return (
                <span
                  key={area}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                    isPrimary
                      ? 'bg-[var(--hernandez-forest-deep)] text-white'
                      : 'bg-[var(--hernandez-cream)] text-[var(--hernandez-forest-deep)] border border-[var(--hernandez-line)]'
                  }`}
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {area}
                </span>
              );
            })}
          </motion.div>

          <div className="mt-8">
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-500">Plus neighborhoods:</span>{' '}
              {siteConfig.neighborhoods}
            </p>
          </div>

          <div className="mt-6">
            <a
              href={`tel:${siteConfig.cleanPhone}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--hernandez-forest)] hover:text-[var(--hernandez-gold)] transition-colors"
            >
              <Phone className="h-4 w-4" /> {siteConfig.phone} — Call to check your area
            </a>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative isolate overflow-hidden bg-[var(--hernandez-forest-deep)] py-16 sm:py-20">
        <div className="absolute inset-0">
          <NextImage src="/tree_pro/hernandez_hero_v2.png" alt="Professional tree service results" fill className="object-cover opacity-15" />
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
