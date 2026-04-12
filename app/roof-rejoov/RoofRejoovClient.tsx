'use client';

import { useState, useEffect, type FormEvent } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Shield,
  Star,
  User,
  MapPin,
} from 'lucide-react';
import { siteConfig } from '../config';
import { Stars } from '../components/Stars';

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ─── INLINE FORM ─── */
function RejoovForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const [formTimestamp] = useState(() => Date.now().toString());
  const [phoneValue, setPhoneValue] = useState('');
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => { setPageUrl(window.location.href); }, []);

  const formatPhone = (v: string) => {
    const d = v.replace(/\D/g, '').slice(0, 10);
    if (!d.length) return '';
    if (d.length <= 3) return `(${d}`;
    if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');
    setFormStatus('sending');
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (String(fd.get('website') || '').trim()) { form.reset(); setPhoneValue(''); setFormStatus('success'); return; }
    try {
      const res = await fetch('/api/lead', { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) { setFormStatus('error'); setFormError(data?.error || 'Something went wrong.'); return; }
      form.reset(); setPhoneValue(''); setFormStatus('success');
    } catch { setFormStatus('error'); setFormError('Something went wrong. Please try again.'); }
  };

  return (
    <form className="grid gap-4" action="/api/lead" method="POST" onSubmit={handleSubmit}>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="_ts" value={formTimestamp} />
      <input type="hidden" name="page" value={pageUrl} />
      <input type="hidden" name="service" value="Roof Rejoov" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-[0.65rem] font-bold text-slate-600 mb-1 uppercase tracking-wide">Full Name <span className="text-red-500">*</span></label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
            <input required name="name" type="text" placeholder="John Doe" autoComplete="name" pattern="[A-Za-z\s\-']{2,50}" className="w-full border border-slate-200 bg-slate-50 pl-9 pr-3 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20" />
          </div>
        </div>
        <div>
          <label className="block text-[0.65rem] font-bold text-slate-600 mb-1 uppercase tracking-wide">Phone <span className="text-red-500">*</span></label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
            <input required name="phone" type="tel" placeholder="(409) 555-0123" autoComplete="tel" value={phoneValue} onChange={(e) => setPhoneValue(formatPhone(e.target.value))} pattern="\(\d{3}\) \d{3}-\d{4}" className="w-full border border-slate-200 bg-slate-50 pl-9 pr-3 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
        <div>
          <label className="block text-[0.65rem] font-bold text-slate-600 mb-1 uppercase tracking-wide">Address <span className="text-red-500">*</span></label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
            <input required name="address" type="text" placeholder="123 Main St, Katy" autoComplete="street-address" className="w-full border border-slate-200 bg-slate-50 pl-9 pr-3 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20" />
          </div>
        </div>
        <div>
          <label className="block text-[0.65rem] font-bold text-slate-600 mb-1 uppercase tracking-wide">ZIP <span className="text-red-500">*</span></label>
          <input required name="zipCode" type="text" inputMode="numeric" placeholder="77493" autoComplete="postal-code" pattern="\d{5}" className="w-full border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20 sm:w-24" />
        </div>
      </div>

      <div>
        <label className="block text-[0.65rem] font-bold text-slate-600 mb-1 uppercase tracking-wide">Details <span className="text-slate-400 font-normal normal-case tracking-normal">(Optional)</span></label>
        <textarea name="message" rows={2} maxLength={5000} placeholder="Tell us about your roof's age, condition, or any concerns..." className="w-full border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20 min-h-[56px] resize-y" />
      </div>

      <button type="submit" disabled={formStatus === 'sending'} className="relative w-full overflow-hidden bg-[var(--jerry-lime)] py-3 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] shadow-lg transition-all hover:bg-[var(--jerry-lime-hover)] active:scale-[0.98] disabled:opacity-60 group cursor-pointer cta-pulse">
        <span className="relative z-10 flex items-center justify-center gap-2">
          {formStatus === 'sending' ? 'Processing...' : 'Get Your Free Assessment'}
          {formStatus !== 'sending' && <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />}
        </span>
      </button>
      <p className="text-center text-[0.6rem] leading-relaxed text-slate-400 px-1">
        By submitting, you agree to receive SMS or emails. Message &amp; data rates may apply. Reply STOP to opt-out.
      </p>

      {formStatus === 'success' && <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm text-emerald-800 font-medium">Got it &mdash; we&apos;ll be in touch shortly.</div>}
      {formStatus === 'error' && <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-800 font-medium">{formError}</div>}
    </form>
  );
}

export default function RoofRejoovClient() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative isolate overflow-hidden bg-[var(--jerry-navy-deep)]">
        <div className="absolute inset-0">
          <NextImage src="/roofing/jerry_service_rejuvenation.jpg" alt="Roof Rejoov shingle restoration in Katy, Texas" fill sizes="100vw" className="object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--jerry-navy-deep)] via-[var(--jerry-navy-deep)]/70 to-transparent" />

        <div className={`${shell} relative z-10 py-10 sm:py-14`}>
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-[var(--jerry-lime)] transition-colors cursor-pointer">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white/70">Roof Rejoov</li>
            </ol>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }} className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              Your roof doesn&apos;t need replacing. <span className="text-[var(--jerry-lime)]">It needs Rejoov.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/60 max-w-xl">
              Most Katy homeowners are told they need a $10,000+ roof replacement when a single-day bio-based treatment would extend their roof&apos;s life by 5&ndash;10 years &mdash; for a fraction of the cost.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/50">
              <span className="flex items-center gap-1.5"><Shield className="h-3 w-3 text-[var(--jerry-lime)]" /> Eco-Friendly</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-[var(--jerry-lime)]" /> Done in 1 Day</span>
              <span className="flex items-center gap-1.5"><Star className="h-3 w-3 text-[var(--jerry-lime)]" /> 5-Star Rated</span>
            </div>
          </motion.div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--jerry-lime)]/20 to-transparent" />
      </section>

      {/* ═══ THE PROBLEM ═══ */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="eyebrow text-[var(--jerry-navy-light)]">The Problem</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl tracking-[-0.03em]">Texas heat is destroying your roof from the inside out.</h2>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-slate-600">
                Every year, the Katy sun bakes the vital petrochemical oils out of your asphalt shingles. Without these oils, shingles become brittle, crack, lose granules, and eventually fail.
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600">
                Most homeowners don&apos;t realize it until a roofer quotes them <strong className="text-[var(--jerry-navy)]">$8,000&ndash;$16,000 for a full tear-off</strong>. That&apos;s days of disruption, a dumpster in your driveway, and a massive bill.
              </p>
              <p className="mt-5 text-xl sm:text-2xl font-extrabold text-[var(--jerry-navy)] leading-tight max-w-md">
                If your roof isn&apos;t structurally damaged, you probably don&apos;t need to replace it.
              </p>
            </div>

            {/* Right — anchor stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '230+', label: 'Days of sun per year in Texas' },
                { val: '160\u00B0F', label: 'Roof surface temp in summer' },
                { val: '$16K', label: 'Avg. replacement cost (high end)' },
                { val: '80%', label: 'What you save with Rejoov' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-slate-100 bg-[var(--jerry-cream)] p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[var(--jerry-navy)] tracking-tighter leading-none">{s.val}</div>
                  <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-slate-400 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THE SOLUTION ═══ */}
      <section className="relative isolate bg-[var(--jerry-ink)] py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <NextImage src="/roofing/jerry_service_rejuvenation.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--jerry-ink)]/95 via-[var(--jerry-ink)]/80 to-[var(--jerry-ink)]/40" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--jerry-ink)] to-transparent" />
        </div>

        <div className={`${shell} relative z-10`}>
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-14 items-start">
            <div className="lg:sticky lg:top-32 relative">
              <div className="absolute -left-10 top-0 w-32 h-32 bg-[var(--jerry-lime)]/10 blur-[80px] pointer-events-none" />
              <p className="eyebrow text-[var(--jerry-lime)]/90">The Solution</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-[3rem] tracking-tight text-white leading-[1.05]">
                Roof Rejoov restores what Texas took.
              </h2>
              <p className="mt-5 text-[0.9rem] leading-relaxed text-white/50 max-w-sm">
                A plant-based, bio-oil treatment that penetrates deep into aging shingles, restoring flexibility and waterproofing. Non-toxic. Safe for kids, pets, and landscaping. Done in a single visit.
              </p>
              <div className="mt-6 h-px w-20 bg-gradient-to-r from-[var(--jerry-lime)]/60 to-transparent" />
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                { n: '01', title: 'Free Honest Inspection', desc: "Jerry personally inspects your roof and tells you the truth. If Roof Rejoov will work, we'll recommend it. If you actually need a replacement, we'll tell you that too. No upselling." },
                { n: '02', title: 'Surface Prep & Clean', desc: "We clear debris, moss, and surface dirt so the bio-oil treatment can penetrate deeply into every shingle for maximum restoration." },
                { n: '03', title: 'Rejoov Application', desc: "Our crew evenly applies the calibrated bio-oil treatment across your entire roof. Shingles are restored to a flexible, weatherproof state. One visit. No mess. Done." },
              ].map((step) => (
                <div key={step.n} className="group relative flex flex-col sm:flex-row gap-5 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] shadow-2xl backdrop-blur-sm overflow-hidden hover:bg-white/[0.04] hover:border-[var(--jerry-lime)]/30 hover:-translate-y-1 transition-all duration-500">
                  <div className="absolute -right-4 -bottom-6 text-[7rem] sm:text-[8rem] font-black text-white/[0.03] leading-none select-none z-0 tracking-tighter pointer-events-none group-hover:text-white/[0.05] transition-colors duration-500">
                    {step.n}
                  </div>
                  <div className="relative z-10 shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg text-[0.7rem] font-black text-[var(--jerry-lime)] bg-[var(--jerry-lime)]/10 border border-[var(--jerry-lime)]/20">
                      {step.n}
                    </div>
                  </div>
                  <div className="relative z-10 flex-1">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-[0.85rem] leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER PROOF ═══ */}
      <section className="bg-[var(--jerry-cream)] py-14 sm:py-20">
        <div className={shell}>
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <p className="eyebrow text-[var(--jerry-navy-light)] justify-center">The Proof</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--jerry-navy)] tracking-[-0.02em] leading-[1.15]">
              Real Roof Rejoov project in Katy.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500">
              Same roof, same day, right after the bio-oil treatment. No Photoshop, no stock photos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-5xl mx-auto">
            {/* Before */}
            <div className="relative overflow-hidden bg-slate-900">
              <div className="relative aspect-[4/3]">
                <NextImage
                  src="/roofing/rejoov-before.jpg"
                  alt="Aged asphalt shingle roof before Roof Rejoov treatment — brittle, granule loss, sun-baked in Katy, Texas"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5">
                <span className="text-[0.6rem] sm:text-[0.65rem] font-extrabold uppercase tracking-[0.25em] text-white">
                  Before
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-5 sm:p-6">
                <p className="text-[0.8rem] sm:text-[0.9rem] font-medium text-white leading-snug max-w-sm">
                  Dried, brittle shingles with heavy granule loss from 15+ years of Texas sun.
                </p>
              </div>
            </div>

            {/* After */}
            <div className="relative overflow-hidden bg-slate-900">
              <div className="relative aspect-[4/3]">
                <NextImage
                  src="/roofing/rejoov-after.jpg"
                  alt="Asphalt shingle roof after Roof Rejoov bio-based treatment — restored flexibility, richer color, waterproofing restored"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-[var(--jerry-lime)] px-3 py-1.5">
                <span className="text-[0.6rem] sm:text-[0.65rem] font-extrabold uppercase tracking-[0.25em] text-[var(--jerry-navy-deep)]">
                  After Rejoov
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-5 sm:p-6">
                <p className="text-[0.8rem] sm:text-[0.9rem] font-medium text-white leading-snug max-w-sm">
                  Flexibility restored, color deepened, waterproofing back — buying another 5–10 years.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
            Real Jerrys Roofing project · Katy, TX
          </p>
        </div>
      </section>

      {/* ═══ COST BREAKDOWN ═══ */}
      <section className="bg-white py-14 sm:py-20">
        <div className={shell}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow text-[var(--jerry-navy-light)] justify-center">The Numbers</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl">See exactly what you save.</h2>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
            {/* Two-column comparison */}
            <div className="grid md:grid-cols-2 gap-0 md:gap-0 rounded-2xl overflow-hidden border border-slate-200">

              {/* Left — Replacement */}
              <div className="bg-slate-50 p-8 sm:p-10 md:border-r border-b md:border-b-0 border-slate-200">
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-slate-400">Full Roof Replacement</span>
                <div className="mt-4 text-4xl sm:text-5xl font-black text-slate-300 tracking-tighter leading-none">$8K&ndash;$16K</div>
                <div className="mt-6 space-y-4">
                  {[
                    ['Time', '1\u20132 full days'],
                    ['Tear-off', 'Full removal required'],
                    ['Debris', 'Dumpster in your driveway'],
                    ['Disruption', 'High \u2014 noise, mess, crews'],
                    ['Waste', 'Shingles go to landfill'],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between items-baseline border-b border-slate-200/60 pb-2">
                      <span className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-wider">{label}</span>
                      <span className="text-sm text-slate-400">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Rejoov */}
              <div className="bg-[var(--jerry-navy-deep)] p-8 sm:p-10 text-white">
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--jerry-lime)]">Roof Rejoov</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-[var(--jerry-lime)] tracking-tighter leading-none">80%</span>
                  <span className="text-lg font-extrabold text-white/50">Less</span>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    ['Time', 'A few hours'],
                    ['Tear-off', 'None needed'],
                    ['Debris', 'Zero mess'],
                    ['Disruption', 'Minimal \u2014 you won\u2019t notice'],
                    ['Waste', '100% plant-based treatment'],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between items-baseline border-b border-white/10 pb-2">
                      <span className="text-[0.7rem] font-bold text-white/30 uppercase tracking-wider">{label}</span>
                      <span className="text-sm font-semibold text-white/80">{val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-[0.8rem] text-white/40">Extends your roof&apos;s life by</p>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-3xl font-black text-white">5&ndash;10</span>
                    <span className="text-sm font-bold text-white/50">additional years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom callout */}
            <div className="mt-6 rounded-xl bg-[var(--jerry-navy)] p-5 sm:p-6 text-center">
              <p className="text-lg sm:text-xl font-extrabold text-white">
                Average Katy homeowner saves <span className="text-[var(--jerry-lime)]">thousands of dollars</span> &mdash; and keeps their existing roof.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ WHO IS THIS FOR ═══ */}
      <section className="bg-[var(--jerry-cream)] py-14 sm:py-20 diagonal-stripes">
        <div className={shell}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <p className="eyebrow text-[var(--jerry-navy-light)]">Is It Right For You?</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl tracking-[-0.03em]">Roof Rejoov is perfect if&hellip;</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { n: '01', title: 'Your roof is aging but not failing', text: 'Shingles drying out, losing granules, looking worn \u2014 but no structural damage or active leaks.' },
              { n: '02', title: 'You want to skip the $10K+ bill', text: 'Roof Rejoov costs a fraction of replacement. Thousands of dollars stay in your pocket.' },
              { n: '03', title: 'You\u2019re selling your home', text: 'Inspector flagged the roof? Pass inspection without a full replacement. The smart move before listing.' },
              { n: '04', title: 'You want zero disruption', text: 'No tear-off, no debris, no dumpster. Single visit. Your property stays clean.' },
              { n: '05', title: 'You care about eco-friendly', text: 'Plant-based, non-toxic formula. Safe for kids, pets, landscaping. No shingles to the landfill.' },
              { n: '06', title: 'You want honesty, not a sales pitch', text: 'Jerry inspects every roof personally. If Rejoov won\u2019t work, he\u2019ll tell you and quote replacement instead.' },
            ].map((item) => (
              <div key={item.n} className="rounded-xl bg-white border border-slate-200 p-5 sm:p-6 hover:shadow-lg hover:border-[var(--jerry-navy)]/10 transition-all duration-300">
                <span className="text-[0.55rem] font-black text-slate-200 uppercase tracking-[0.3em]">{item.n}</span>
                <h3 className="mt-2 text-[0.9rem] font-extrabold text-[var(--jerry-navy)] leading-snug">{item.title}</h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF ═══ */}
      <section className="relative isolate bg-[var(--jerry-ink)] py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--jerry-ink)]/95 via-[var(--jerry-ink)]/90 to-transparent" />
        </div>

        <div className={`${shell} relative z-10`}>
          <div className="grid gap-12 lg:grid-cols-[1fr_2.2fr] lg:gap-16 lg:items-start">
            <div className="lg:sticky lg:top-36 relative">
              <div className="flex items-end gap-4 mb-6">
                <span className="text-6xl sm:text-7xl font-black tracking-tighter text-white leading-none">{siteConfig.rating.toFixed(1)}</span>
                <div className="flex flex-col justify-end gap-1.5 pb-2">
                  <Stars count={5} size="h-5 w-5 text-[#FBBC05]" />
                  <div className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/40 mt-1">Google Reviews</div>
                </div>
              </div>
              <h2 className="text-3xl font-extrabold sm:text-4xl leading-[1.05] tracking-tight text-white">
                What homeowners say.
              </h2>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-white/40 max-w-sm">
                Real feedback from Katy, Cypress &amp; Cinco Ranch homeowners. No paid reviews.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { quote: "Jerry told us we didn't need a new roof \u2014 just Roof Rejoov. Saved us thousands. Honest guy.", name: 'Homeowner, Cinco Ranch' },
                { quote: "We were about to list our house and the inspector flagged the roof. Roof Rejoov fixed it for a fraction of what replacement would've cost.", name: 'Homeowner, Katy' },
                { quote: siteConfig.testimonials[0].quote, name: siteConfig.testimonials[0].name },
                { quote: siteConfig.testimonials[1].quote, name: siteConfig.testimonials[1].name },
              ].map((t, i) => (
                <div key={i} className="group relative rounded-xl p-5 sm:p-6 bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.05] hover:border-[var(--jerry-lime)]/20 transition-all duration-300">
                  <Stars count={5} size="h-3 w-3 text-[#FBBC05]" />
                  <p className="mt-3 text-[0.85rem] leading-relaxed text-white/70 group-hover:text-white/90 transition-colors italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-7 w-7 rounded-lg bg-[var(--jerry-lime)]/20 flex items-center justify-center text-[0.6rem] font-bold text-[var(--jerry-lime)]">{t.name.charAt(0)}</div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/30">{t.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-white py-12 sm:py-16">
        <div className={shell}>
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:sticky lg:top-32">
              <p className="eyebrow text-[var(--jerry-navy-light)]">Common Questions</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] leading-tight">Roof Rejoov FAQ.</h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Still have questions? Call{' '}
                <a href={`tel:${siteConfig.cleanPhone}`} className="font-semibold text-[var(--jerry-navy)] hover:underline cursor-pointer">{siteConfig.phone}</a>.
              </p>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-[var(--jerry-lime)]/50 to-transparent" />
            </motion.div>

            <div className="space-y-3">
              {[
                { q: 'What exactly is Roof Rejoov?', a: 'A bio-based treatment that restores the essential petrochemical oils in aging asphalt shingles. The Texas sun bakes these oils out over time, causing brittleness and granule loss. The treatment penetrates the shingle, restoring flexibility and waterproofing.' },
                { q: 'How much does it cost?', a: 'Roof Rejoov typically costs around 15\u201320% of what a full roof replacement costs. For most Katy homes, that\u2019s a savings of thousands of dollars.' },
                { q: 'Is it safe?', a: 'Yes. The bio-based solution is plant-derived, non-toxic, and completely safe for children, pets, and your landscaping. No harsh chemicals.' },
                { q: 'How long does it last?', a: 'A single treatment extends your roof\u2019s functional lifespan by 5 to 10 years, depending on shingle condition and weather exposure.' },
                { q: 'Is my roof a good candidate?', a: 'Most asphalt shingle roofs showing signs of aging but without severe structural damage are excellent candidates. Jerry personally inspects every roof and gives an honest assessment.' },
                { q: 'How long does the treatment take?', a: 'Roof Rejoov is completed in a single visit \u2014 prep, application, and cleanup \u2014 typically within a few hours.' },
              ].map((faq, i) => (
                <details key={i} className="group border border-slate-200 bg-[var(--jerry-cream)] overflow-hidden hover:border-[var(--jerry-navy)]/20 transition-colors rounded-xl">
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
          </div>
        </div>
      </section>

      {/* ═══ CTA + FORM ═══ */}
      <section className="relative isolate bg-[var(--jerry-navy)] py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[var(--jerry-lime)]/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[var(--jerry-lime)]/5 blur-[80px] rounded-full" />
        </div>

        <div className={`${shell} relative z-10`}>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">Find out if your roof qualifies.</h2>
              <p className="mt-4 text-base text-white/60 max-w-md">
                Get a free, no-pressure inspection. We&apos;ll tell you honestly whether Roof Rejoov is the right move &mdash; or if you actually need a replacement.
              </p>
              <div className="mt-6 space-y-3 text-[0.8rem] text-white/50 font-medium">
                <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-[var(--jerry-lime)] shrink-0" /> Free on-site inspection</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-[var(--jerry-lime)] shrink-0" /> Honest assessment &mdash; no upselling</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-[var(--jerry-lime)] shrink-0" /> Same-week scheduling available</div>
              </div>
              <div className="mt-8">
                <a href={`tel:${siteConfig.cleanPhone}`} className="inline-flex items-center gap-2 text-lg font-extrabold text-[var(--jerry-lime)] hover:text-white transition-colors cursor-pointer">
                  <Phone className="h-5 w-5" /> {siteConfig.phone}
                </a>
                <p className="mt-1 text-[0.7rem] text-white/30">Call or text anytime</p>
              </div>
            </div>

            <div id="rejoov-form" className="scroll-mt-28">
              <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-2xl">
                <h3 className="text-lg font-extrabold text-[var(--jerry-navy)] sm:text-xl">Request a Roof Rejoov Assessment</h3>
                <p className="text-[0.8rem] text-slate-400 mb-4">Free inspection &mdash; we&apos;ll tell you honestly what your roof needs.</p>
                <RejoovForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
