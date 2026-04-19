'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Shield,
  MapPin,
  Factory,
  Award,
  FileText,
  PlayCircle,
  ExternalLink,
} from 'lucide-react';
import { siteConfig } from '../config';

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ─────────────────────────────────────────────────────────
   SPOTLIGHT DATA — only IKO and F-Wave (the two Texas-built
   shingle manufacturers). Every factual claim is cited in the
   `sources` array so homeowners can verify anything.
   ───────────────────────────────────────────────────────── */

type Spotlight = {
  name: string;
  logo: string;
  logoFrame: string;
  tagline: string;
  plant: {
    city: string;
    state: string;
    opened: string;
    size: string;
    detail: string;
  };
  overview: string;
  whyTexas: string;
  specs: { label: string; value: string }[];
  products: { name: string; note: string }[];
  sources: { label: string; href: string }[];
  video?: { label: string; href: string };
  externalSite: string;
};

const spotlights: Spotlight[] = [
  {
    name: 'IKO',
    logo: '/pictures/IKO-transparent.png',
    logoFrame: 'h-16 w-full max-w-[240px] sm:h-20 sm:max-w-[280px]',
    tagline: 'Built Tough for Texas Weather',
    plant: {
      city: 'Hillsboro',
      state: 'Texas',
      opened: 'March 2018',
      size: '250,000 sq ft',
      detail:
        "IKO's Hillsboro, Texas facility supplies shingles to customers across Texas and the southwestern United States. The plant added a second shift and now runs 24 hours a day, 7 days a week. Named Regional Business of the Year by the Hillsboro Area Chamber of Commerce.",
    },
    overview:
      "IKO is a fourth-generation family-owned roofing manufacturer founded in 1951. Their 250,000 sq ft Hillsboro plant — the newest in IKO's North American footprint — produces premium architectural shingle lines, including Dynasty and Cambridge, engineered specifically for the Gulf Coast and Southwest climates. Every bundle on your Katy roof could have come off a line in Hillsboro, less than 200 miles north.",
    whyTexas:
      "Shingles made in Texas are engineered and tested against Texas conditions first — brutal UV, 100°+ surface temperatures, rapid thermal cycling, and the hail and hurricane winds the Gulf Coast throws every year. A shingle engineered for Ontario winters and re-specced for Texas is not the same product as one designed for Hillsboro, Texas and shipped to Katy.",
    specs: [
      { label: 'Wind warranty', value: 'Up to 130 mph (Dynasty, high-wind nailing)' },
      { label: 'Impact rating', value: 'UL 2218 Class 4 options (Nordic, Armourshake)' },
      { label: 'Algae resistance', value: '15-year ArmourZone + algae-block granules' },
      { label: 'Warranty', value: 'IKO Limited Lifetime + Iron Clad options' },
    ],
    products: [
      { name: 'Dynasty', note: 'Architectural shingle with ArmourZone wind band — the workhorse IKO for Katy.' },
      { name: 'Cambridge', note: 'Dimensional shingle with the widest color palette for HOA-sensitive neighborhoods.' },
      { name: 'Nordic', note: 'Class 4 impact-rated upgrade — pairs well with hail-insurance discounts.' },
    ],
    sources: [
      {
        label: 'IKO Hillsboro, TX Grand Opening — PR Newswire (Mar 2018)',
        href: 'https://www.prnewswire.com/news-releases/iko-shingle-plant-opens-its-doors-in-hillsboro-676153623.html',
      },
      {
        label: 'IKO Opens Hillsboro, Texas Manufacturing Facility — Area Development',
        href: 'https://www.areadevelopment.com/newsitems/3-9-2018/iko-production-facility-hillsboro-texas.shtml',
      },
      {
        label: 'IKO Southwest Named Regional Business of the Year — Roofing Contractor (2021)',
        href: 'https://www.roofingcontractor.com/articles/95732-iko-southwest-named-regional-business-of-the-year',
      },
      {
        label: 'Official IKO North America locations',
        href: 'https://www.iko.com/na/iko-locations/',
      },
    ],
    video: {
      label: 'IKO Dynasty product page (specs + install videos)',
      href: 'https://www.iko.com/na/residential-roofing/shingles/performance/dynasty/',
    },
    externalSite: 'https://www.iko.com/na/',
  },
  {
    name: 'F-Wave',
    logo: '/pictures/fwave-no-bg.svg',
    logoFrame: 'h-20 w-full max-w-[240px] sm:h-24 sm:max-w-[280px]',
    tagline: 'Reinventing Residential Roofing — From Burleson, Texas',
    plant: {
      city: 'Burleson',
      state: 'Texas',
      opened: 'Founded 2015',
      size: 'Texas-headquartered',
      detail:
        "F-Wave is headquartered at 921 S Burleson Blvd, Burleson, TX 76028 — about 20 minutes south of Fort Worth. The company was founded in 2015 specifically to solve the problems asphalt shingles have on hot, hail-prone climates like Texas.",
    },
    overview:
      "F-Wave doesn't make asphalt shingles at all — they make REVIA™, a single-piece synthetic shingle molded from a proprietary TPO/PVC blend. No asphalt oils to bake out, no ceramic granules to wash down the gutter, no layered construction to delaminate. A Texas company solving Texas roofing problems from the ground up.",
    whyTexas:
      "Traditional asphalt shingles in Katy lose their flexibility as UV cooks the petrochemical oils out of them — that's the whole reason Roof Rejoov exists. REVIA skips that failure mode entirely because there are no oils to lose. For homeowners planning to stay 20+ years in Cinco Ranch, Cross Creek Ranch, or Cane Island, F-Wave's longevity math is hard to beat.",
    specs: [
      { label: 'Wind warranty', value: '130 mph (190 mph with enhanced fastening)' },
      { label: 'Impact rating', value: 'UL 2218 Class 4 — may qualify for insurance discounts in TX' },
      { label: 'Warranty', value: '50-Year WeatherForce™ Advantage — wind, hail, algae, fade' },
      { label: 'Construction', value: 'Single-piece composite — no granules, no asphalt, no delamination' },
    ],
    products: [
      { name: 'REVIA Designer Slate', note: 'Slate look at a fraction of real-slate weight and cost.' },
      { name: 'REVIA Hand Split Shake', note: 'Cedar-shake aesthetic with Class 4 hail rating — no splitting, no rot.' },
      { name: 'REVIA Classic Slate', note: 'Traditional architectural profile — the most common F-Wave choice in Katy.' },
    ],
    sources: [
      {
        label: 'F-Wave official contact & HQ address (Burleson, TX)',
        href: 'https://fwaveroofing.com/contact/',
      },
      {
        label: 'F-Wave REVIA product line — official',
        href: 'https://fwaveroofing.com/revia-shingles/',
      },
      {
        label: 'F-Wave 50-Year WeatherForce Warranty details',
        href: 'https://fwaveroofing.com/',
      },
    ],
    video: {
      label: 'F-Wave product videos (REVIA install, impact testing, walkthroughs)',
      href: 'https://fwaveroofing.com/videos/',
    },
    externalSite: 'https://fwaveroofing.com/',
  },
];

export default function TexasMadeClient() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative isolate overflow-hidden bg-[var(--jerry-navy-deep)]">
        <div className="absolute inset-0">
          <NextImage src="/roofing/real/08-crew-dumpster-setup.jpg" alt="Premium roofing materials delivered to a Katy, Texas jobsite" fill sizes="100vw" className="object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--jerry-navy-deep)] via-[var(--jerry-navy-deep)]/70 to-transparent" />

        <div className={`${shell} relative z-10 py-10 sm:py-14`}>
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-[var(--jerry-lime)] transition-colors cursor-pointer">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white/70">Built in Texas</li>
            </ol>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-[var(--jerry-lime)]/10 border border-[var(--jerry-lime)]/30 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--jerry-lime)] mb-4">
              <MapPin className="h-3 w-3" /> Manufactured in Texas
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              Two shingles. <span className="text-[var(--jerry-lime)]">Both built in Texas.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl">
              There are a lot of shingle brands. <strong className="text-white">There are only two we spotlight</strong> — <strong className="text-[var(--jerry-lime)]">IKO</strong> (manufactured 200 miles north of Katy in Hillsboro, Texas) and <strong className="text-[var(--jerry-lime)]">F-Wave</strong> (headquartered in Burleson, Texas). We install other brands too, but these are the ones actually engineered and made here, for here.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-2xl">
              Everything on this page is cited. If you want to verify a claim, scroll to the sources under each manufacturer.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/50">
              <span className="flex items-center gap-1.5"><Factory className="h-3 w-3 text-[var(--jerry-lime)]" /> IKO Hillsboro, TX · 250,000 sq ft</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-[var(--jerry-lime)]" /> F-Wave HQ · Burleson, TX</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-[var(--jerry-lime)]" /> Cited sources below</span>
            </div>
          </motion.div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--jerry-lime)]/20 to-transparent" />
      </section>

      {/* ═══ WHY TEXAS-MADE MATTERS ═══ */}
      <section className="bg-white py-12 sm:py-16">
        <div className={shell}>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45 }}>
              <p className="eyebrow text-[var(--jerry-navy-light)]">Why This Matters</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl tracking-[-0.03em]">A shingle built for Texas beats a shingle built for somewhere else.</h2>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-slate-600">
                The problems a Katy roof has to survive are specific. A roof in Minneapolis worries about ice dams. A roof in Phoenix worries about UV. A roof in Katy has to handle <strong>both UV and thermal cycling and Gulf humidity and hail and 100+ mph straight-line winds</strong> — often in the same calendar year.
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600">
                Manufacturers that engineer and extrude their product in Texas build to the Texas failure profile first. That's the whole argument, and it's why we put IKO and F-Wave on this page.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45, delay: 0.1 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: '230+ sunny days / year', text: 'Katy averages over 230 days of sunshine annually. UV is the primary asphalt-shingle failure mode.', source: 'NOAA climate data' },
                  { title: '160°F+ roof surface temps', text: 'Dark asphalt shingles commonly hit 150–170°F in Katy summers — nearly double the ambient air temp.', source: 'Department of Energy' },
                  { title: '100+ mph derecho winds', text: 'The May 16, 2024 Houston Derecho delivered 100+ mph straight-line winds over Harris and Fort Bend counties.', source: 'NWS Houston' },
                  { title: 'Texas hail belt', text: 'Harris and Fort Bend counties sit inside the broader Texas hail belt running from DFW through the I-10 corridor.', source: 'NOAA SPC' },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 sm:p-5">
                    <h3 className="text-sm font-extrabold text-[var(--jerry-navy)] leading-tight">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{item.text}</p>
                    <p className="mt-2 text-[0.55rem] font-bold uppercase tracking-wider text-slate-400">Source: {item.source}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ IKO + F-WAVE SPOTLIGHTS ═══ */}
      <section className="bg-[var(--jerry-cream)] py-12 sm:py-16 texas-stripes">
        <div className={shell}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <p className="eyebrow text-[var(--jerry-navy-light)]">The Two We Spotlight</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl">IKO &amp; F-Wave.</h2>
              <p className="mt-2 text-sm text-slate-500 max-w-xl">Manufactured and headquartered in Texas. Cited sources below each spotlight.</p>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {spotlights.map((v, idx) => (
              <motion.article
                key={v.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
              >
                {/* Header band */}
                <div className="grid lg:grid-cols-[320px_1fr]">
                  {/* Logo + plant card */}
                  <div className="bg-[var(--jerry-navy-deep)] text-white p-6 sm:p-8 flex flex-col">
                    <div className="flex-1 flex flex-col items-center justify-center text-center py-3">
                      <div className={`relative mx-auto ${v.logoFrame} bg-white rounded-lg p-3`}>
                        <NextImage src={v.logo} alt={`${v.name} shingle manufacturer`} fill sizes="280px" className="object-contain" />
                      </div>
                      <p className="mt-4 text-xs font-semibold text-[var(--jerry-lime)]/90 italic">&ldquo;{v.tagline}&rdquo;</p>
                    </div>
                    <div className="mt-5 pt-5 border-t border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-3.5 w-3.5 text-[var(--jerry-lime)]" />
                        <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--jerry-lime)]">Texas Location</span>
                      </div>
                      <p className="text-sm font-extrabold text-white">{v.plant.city}, {v.plant.state}</p>
                      <p className="mt-0.5 text-xs text-white/60">{v.plant.opened} · {v.plant.size}</p>
                      <p className="mt-3 text-[0.72rem] leading-relaxed text-white/50">{v.plant.detail}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[0.55rem] font-bold uppercase tracking-[0.25em] text-[var(--jerry-navy-light)]">Spotlight #{idx + 1}</span>
                      <span className="h-px flex-1 bg-slate-200" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--jerry-navy)] tracking-tight">{v.name}</h3>
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-slate-600">{v.overview}</p>

                    <div className="mt-5 rounded-lg bg-[var(--jerry-cream)] border border-slate-200 p-4">
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--jerry-navy-light)] mb-1.5 flex items-center gap-1.5">
                        <Shield className="h-3 w-3" /> Why Built-in-Texas Matters Here
                      </p>
                      <p className="text-[0.85rem] leading-relaxed text-slate-700">{v.whyTexas}</p>
                    </div>

                    {/* Specs */}
                    <div className="mt-5 grid sm:grid-cols-2 gap-x-5 gap-y-3">
                      {v.specs.map((s) => (
                        <div key={s.label} className="flex gap-3">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--jerry-lime)] mt-0.5" />
                          <div>
                            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">{s.label}</p>
                            <p className="text-[0.8rem] font-semibold text-[var(--jerry-navy)] leading-snug">{s.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Products */}
                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--jerry-navy-light)] mb-2.5">Product Lines We Install</p>
                      <div className="space-y-2">
                        {v.products.map((p) => (
                          <div key={p.name} className="flex gap-3 text-[0.82rem]">
                            <span className="font-extrabold text-[var(--jerry-navy)] shrink-0 w-[150px] sm:w-[180px]">{p.name}</span>
                            <span className="text-slate-500 leading-relaxed">{p.note}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Video + external site CTAs */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {v.video && (
                        <a
                          href={v.video.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[var(--jerry-navy)] px-4 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white hover:bg-[var(--jerry-navy-light)] transition-colors cursor-pointer rounded-md"
                        >
                          <PlayCircle className="h-3.5 w-3.5 text-[var(--jerry-lime)]" /> {v.video.label}
                          <ExternalLink className="h-3 w-3 opacity-50" />
                        </a>
                      )}
                      <a
                        href={v.externalSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-slate-300 px-4 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--jerry-navy)] hover:bg-slate-50 transition-colors cursor-pointer rounded-md"
                      >
                        Official {v.name} site <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    {/* Sources */}
                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 flex items-center gap-1.5">
                        <FileText className="h-3 w-3" /> Sources for the claims above
                      </p>
                      <ul className="space-y-1.5">
                        {v.sources.map((src) => (
                          <li key={src.href}>
                            <a
                              href={src.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[0.72rem] text-slate-500 hover:text-[var(--jerry-navy)] hover:underline transition-colors"
                            >
                              <ArrowRight className="h-3 w-3 text-[var(--jerry-lime)]/70 shrink-0" />
                              <span>{src.label}</span>
                              <ExternalLink className="h-2.5 w-2.5 opacity-50 shrink-0" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OTHER BRANDS WE STILL INSTALL ═══ */}
      <section className="bg-white py-12 sm:py-14">
        <div className={shell}>
          <div className="max-w-3xl">
            <p className="eyebrow text-[var(--jerry-navy-light)]">Brands We Still Install</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[var(--jerry-navy)]">CertainTeed &amp; GAF — great shingles, just not made here.</h2>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-slate-600">
              We install CertainTeed (Landmark series) and GAF (Timberline HDZ) all the time — they're industry-leading products and they hold up fine on Katy roofs. GAF is headquartered in Parsippany, New Jersey; CertainTeed is headquartered in Malvern, Pennsylvania, with manufacturing across the U.S. They're on our approved list, they just aren't the story on this page. This page is about the two that are literally built in Texas.
            </p>
            <p className="mt-3 text-[0.85rem] leading-relaxed text-slate-500">
              If your insurance is specifying a GAF or CertainTeed replacement, or you prefer one of their color palettes, we install it the same way: manufacturer-spec, nail-for-nail, no builder-grade shortcuts.
            </p>
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
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Manufacturer-spec install. No substitutions.</h2>
              <p className="mt-5 text-[0.9rem] leading-relaxed text-white/50 max-w-md">
                What we quote is what goes on your roof. If you pick IKO Dynasty, you get IKO Dynasty — nailed exactly to IKO's published pattern so your warranty actually holds. Same for F-Wave REVIA.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Full manufacturer warranty', text: 'Installed to spec so the IKO or F-Wave warranty on your roof is the real warranty — not a voided one.', icon: Award },
                { title: 'No builder-grade substitutes', text: 'Premium line or no line. We don\u2019t swap in a cheaper shingle to pad margin.', icon: Shield },
                { title: 'Every claim cited on this page', text: 'Plant locations, warranty numbers, wind ratings — every one links to the source. Verify anything.', icon: FileText },
                { title: 'Texas-installed for Texas homes', text: 'Jerry has 7 years of local install experience in Katy, Cinco Ranch, Cypress, Richmond, Fulshear, and Sugar Land.', icon: MapPin },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="mt-0.5 h-8 w-8 rounded-lg bg-[var(--jerry-lime)]/15 border border-[var(--jerry-lime)]/30 flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-[var(--jerry-lime)]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <p className="mt-0.5 text-[0.8rem] leading-relaxed text-white/50">{item.text}</p>
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
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl tracking-tight">Texas-built shingles for your Katy home.</h2>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
            Free inspection, honest recommendation. If IKO or F-Wave is the right call, we'll say so. If a repair makes more sense, we'll say that too.
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
