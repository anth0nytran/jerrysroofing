'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Shield,
  Star,
} from 'lucide-react';
import { siteConfig } from '../config';

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const vendors = [
  {
    name: 'IKO',
    logo: '/pictures/IKO-transparent.png',
    logoFrame: 'h-14 w-full max-w-[230px] sm:h-16 sm:max-w-[260px]',
    tagline: 'Built Tough for Texas Weather',
    description: 'IKO manufactures premium architectural shingles engineered to withstand extreme heat, high winds, and heavy rain. Their Cambridge and Dynasty lines are among the most popular choices for Texas roofs.',
    features: ['Class 4 impact resistance options', 'High wind rating up to 130 mph', 'Advanced UV color technology', 'Industry-leading warranties'],
    texasNote: 'IKO shingles are tested under conditions that mirror the brutal Texas climate \u2014 from 100\u00B0+ summers to Gulf Coast hurricane winds.',
  },
  {
    name: 'CertainTeed',
    logo: '/pictures/certainteed-transparent.png',
    logoFrame: 'h-14 w-full sm:h-16',
    tagline: 'Quality Made Certain, Satisfaction Guaranteed',
    description: 'CertainTeed has been manufacturing premium building products for over 120 years. Their Landmark series is specifically engineered for hot, humid climates like Southeast Texas.',
    features: ['SureStart Plus warranty protection', 'Algae-resistant StreakFighter tech', 'Max Def color palette', 'ENERGY STAR rated options'],
    texasNote: 'CertainTeed\u2019s StreakFighter technology is especially valuable in the humid Katy climate where algae growth can discolor and damage untreated shingles.',
  },
  {
    name: 'GAF',
    logo: '/pictures/gaf.png',
    logoFrame: 'h-20 w-20 sm:h-24 sm:w-24',
    tagline: 'America\'s #1 Shingle Manufacturer',
    description: 'GAF is the largest roofing manufacturer in North America. Their Timberline HDZ shingles are the #1 selling shingle in the entire country, engineered for demanding climates like Texas.',
    features: ['LayerLock wind resistance', 'StainGuard Plus algae protection', 'WindProven limited warranty', 'Golden Pledge contractor warranty'],
    texasNote: 'GAF\u2019s LayerLock technology mechanically fuses shingle layers together for superior wind uplift resistance during Gulf Coast storms.',
  },
  {
    name: 'F-Wave',
    logo: '/pictures/fwave-no-bg.svg',
    logoFrame: 'h-28 w-full max-w-[240px] sm:h-32 sm:max-w-[260px]',
    tagline: 'Reinventing Residential Roofing',
    description: 'F-Wave manufactures next-generation synthetic REVIA\u2122 shingles \u2014 a single-piece composite engineered to outperform traditional asphalt against hail, wind, and UV. A premium option for Katy homeowners who want the look of architectural shingles with the durability of a synthetic.',
    features: ['Class 4 impact rated (UL 2218)', '130 mph wind warranty', '50-year limited warranty', 'Zero granule loss \u2014 no asphalt oils to bake out'],
    texasNote: 'F-Wave REVIA synthetic shingles do not shed granules and resist the thermal cycling that cracks and curls standard asphalt in Katy\u2019s 100\u00B0+ summers \u2014 a strong fit for homeowners planning to stay in their home long term.',
  },
];

export default function TexasMadeClient() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative isolate overflow-hidden bg-[var(--jerry-navy-deep)]">
        <div className="absolute inset-0">
          <NextImage src="/roofing/real/08-crew-dumpster-setup.jpg" alt="Premium roofing materials for Katy, Texas homes" fill sizes="100vw" className="object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--jerry-navy-deep)] via-[var(--jerry-navy-deep)]/70 to-transparent" />

        <div className={`${shell} relative z-10 py-10 sm:py-14`}>
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-[var(--jerry-lime)] transition-colors cursor-pointer">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white/70">Texas Made Products</li>
            </ol>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }} className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              Texas Made. <span className="text-[var(--jerry-lime)]">Texas Tough.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/60 max-w-xl">
              We only use premium roofing materials from manufacturers that build products engineered to survive the Texas climate. Your Katy home deserves materials that can take the heat.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/50">
              <span className="flex items-center gap-1.5"><Shield className="h-3 w-3 text-[var(--jerry-lime)]" /> 100+ Heat Rated</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-[var(--jerry-lime)]" /> Hurricane Wind Tested</span>
              <span className="flex items-center gap-1.5"><Star className="h-3 w-3 text-[var(--jerry-lime)]" /> Gulf Coast Humidity Proof</span>
            </div>
          </motion.div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--jerry-lime)]/20 to-transparent" />
      </section>

      {/* ═══ WHY TEXAS MADE MATTERS ═══ */}
      <section className="bg-white py-12 sm:py-16">
        <div className={shell}>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45 }}>
              <p className="eyebrow text-[var(--jerry-navy-light)]">Why It Matters</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl tracking-[-0.03em]">Your Katy roof faces some of the toughest conditions in the country.</h2>
              <div className="mt-6 space-y-5">
                {[
                  { title: 'Extreme UV Exposure', text: 'Texas gets 230+ days of sunshine per year. Standard shingles fade and deteriorate fast without premium UV protection.' },
                  { title: '100\u00B0+ Summer Heat', text: 'Roof surface temperatures in Katy can exceed 160\u00B0F in summer. Materials must resist thermal expansion and oil evaporation.' },
                  { title: 'Hurricane-Force Winds', text: 'Gulf Coast storms bring winds exceeding 100 mph. Shingles need mechanical bonding and superior uplift resistance.' },
                  { title: 'Heavy Rain & Humidity', text: 'Katy averages 50+ inches of rain annually. Materials must be waterproof and resist algae growth.' },
                ].map((item, i) => (
                  <div key={item.title}>
                    <h3 className="text-sm font-extrabold text-[var(--jerry-navy)]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — manufacturer logos stacked */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45, delay: 0.1 }}>
              <div className="rounded-2xl bg-[var(--jerry-cream)] border border-slate-100 p-8 sm:p-10">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6 text-center">Our Trusted Manufacturers</p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 items-center">
                  {siteConfig.manufacturerLogos.map((logo) => (
                    <div key={logo.name} className="flex h-[110px] items-center justify-center px-2 sm:h-[140px]">
                      <div className={`relative mx-auto ${logo.frameClassName}`}>
                        <NextImage src={logo.src} alt={logo.alt} fill sizes="(min-width: 640px) 240px, 42vw" className="object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                  <p className="text-sm font-bold text-[var(--jerry-navy)]">Every shingle we install comes from these manufacturers.</p>
                  <p className="mt-1 text-xs text-slate-400">No builder-grade shortcuts. No cheap substitutes.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ VENDOR SPOTLIGHTS ═══ */}
      <section className="bg-[var(--jerry-cream)] py-12 sm:py-16 texas-stripes">
        <div className={shell}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <p className="eyebrow text-[var(--jerry-navy-light)]">Manufacturer Details</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl">Premium brands. Real warranties.</h2>
            </div>
          </div>

          <div className="space-y-6">
            {vendors.map((vendor, idx) => (
              <motion.div key={vendor.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45, delay: idx * 0.08 }} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="grid lg:grid-cols-[280px_1fr] gap-0">
                  {/* Left — logo */}
                  <div className="p-6 sm:p-8 bg-slate-50/80 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-slate-100">
                    <div className={`relative mx-auto ${vendor.logoFrame}`}>
                      <NextImage src={vendor.logo} alt={`${vendor.name} shingle manufacturer`} fill sizes="240px" className="object-contain" />
                    </div>
                    <p className="mt-3 text-xs font-bold text-[var(--jerry-navy)] italic">&ldquo;{vendor.tagline}&rdquo;</p>
                  </div>

                  {/* Right — details */}
                  <div className="p-5 sm:p-7">
                    <h3 className="text-lg font-extrabold text-[var(--jerry-navy)] mb-2">{vendor.name}</h3>
                    <p className="text-[0.85rem] leading-relaxed text-slate-600 mb-4">{vendor.description}</p>

                    <div className="grid sm:grid-cols-2 gap-2 mb-4">
                      {vendor.features.map((f) => (
                        <span key={f} className="text-[0.75rem] text-slate-500 before:content-['\2014'] before:mr-2 before:text-[var(--jerry-lime)]/60">{f}</span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--jerry-navy-light)] mb-1">Texas Climate Note</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{vendor.texasNote}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OUR PROMISE ═══ */}
      <section className="relative isolate bg-[var(--jerry-ink)] py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <NextImage src="/roofing/real/08-crew-dumpster-setup.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--jerry-ink)]/95 via-[var(--jerry-ink)]/85 to-[var(--jerry-ink)]/50" />
        </div>

        <div className={`${shell} relative z-10`}>
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="eyebrow text-[var(--jerry-lime)]/90">Our Promise</p>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">We never cut corners on materials.</h2>
              <p className="mt-5 text-[0.9rem] leading-relaxed text-white/50 max-w-md">
                Every project uses manufacturer-grade materials installed exactly to spec. We don&apos;t use builder-grade shortcuts, and we never substitute cheaper materials. What we quote is what goes on your roof.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Full Manufacturer Warranty', text: 'Every installation is backed by the manufacturer\u2019s warranty. You get real coverage, not empty promises.' },
                { title: 'Certified Installations', text: 'Materials installed to manufacturer specifications. Proper technique means proper protection.' },
                { title: 'No Cheap Substitutes', text: 'What we quote is what we install. We never swap in cheaper materials to pad margins.' },
                { title: '5-Star Rated on Google', text: 'Katy homeowners trust Jerrys Roofing for quality work and honest pricing. Our reputation is our business.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--jerry-lime)] shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <p className="mt-0.5 text-[0.8rem] leading-relaxed text-white/40">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative isolate bg-[var(--jerry-navy)] py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[var(--jerry-lime)]/10 blur-[100px] rounded-full" />
        </div>
        <div className={`${shell} relative z-10 text-center max-w-3xl mx-auto`}>
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl tracking-tight">Texas-tough roofing for your Katy home.</h2>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
            Get a free inspection and see why Katy homeowners trust Jerrys Roofing for premium installations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-8 py-4 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer cta-pulse">
              Get a Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${siteConfig.cleanPhone}`} className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-white hover:bg-white/5 transition-colors cursor-pointer">
              <Phone className="h-4 w-4" /> Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
