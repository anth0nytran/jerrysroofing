'use client';

import { useEffect, useState, type FormEvent } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Shield,
  Star,
  TreePine,
  Zap,
  Clock,
  Truck,
  HardHat,
  Lock,
  User,
  MapPin,
  ClipboardList,
} from 'lucide-react';
import { siteConfig, serviceData } from './config';
import { Stars } from './components/Stars';

/* ─── INLINE HERO FORM (underline style for dark hero) ─── */
function HeroEstimateForm() {
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
    <div>
      <form className="grid gap-4 sm:gap-4.5" action="/api/lead" method="POST" onSubmit={handleSubmit}>
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input type="hidden" name="_ts" value={formTimestamp} />
        <input type="hidden" name="page" value={pageUrl} />

        <div className="grid gap-4 sm:gap-4.5 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Full Name <span className="text-red-500">*</span></label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              <input required name="name" type="text" placeholder="John Doe" autoComplete="name" pattern="[A-Za-z\s\-']{2,50}" className="w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--hernandez-forest)] focus:ring-2 focus:ring-[var(--hernandez-forest)]/20 shadow-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Phone Number <span className="text-red-500">*</span></label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              <input required name="phone" type="tel" placeholder="(713) 555-0123" autoComplete="tel" value={phoneValue} onChange={(e) => setPhoneValue(formatPhone(e.target.value))} pattern="\(\d{3}\) \d{3}-\d{4}" className="w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--hernandez-forest)] focus:ring-2 focus:ring-[var(--hernandez-forest)]/20 shadow-sm" />
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-4.5 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Property Address <span className="text-red-500">*</span></label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              <input required name="address" type="text" placeholder="123 Main St" autoComplete="street-address" className="w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--hernandez-forest)] focus:ring-2 focus:ring-[var(--hernandez-forest)]/20 shadow-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">ZIP Code <span className="text-red-500">*</span></label>
            <input required name="zipCode" type="text" inputMode="numeric" placeholder="77002" autoComplete="postal-code" pattern="\d{5}" className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--hernandez-forest)] focus:ring-2 focus:ring-[var(--hernandez-forest)]/20 shadow-sm" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Service Needed <span className="text-red-500">*</span></label>
          <div className="relative">
            <ClipboardList className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            <select required name="service" defaultValue="" className="w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none transition-all focus:bg-white focus:border-[var(--hernandez-forest)] focus:ring-2 focus:ring-[var(--hernandez-forest)]/20 shadow-sm appearance-none">
              <option value="" disabled>Select a service...</option>
              {[siteConfig.primaryService, ...siteConfig.services].map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Project Details <span className="text-slate-400 font-normal normal-case tracking-normal">(Optional)</span></label>
          <textarea name="message" rows={3} maxLength={5000} placeholder="Describe the tree, access to the yard, or any specific concerns..." className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--hernandez-forest)] focus:ring-2 focus:ring-[var(--hernandez-forest)]/20 shadow-sm min-h-[80px] resize-y" />
        </div>

        <div className="pt-2">
          <button type="submit" disabled={formStatus === 'sending'} className="relative w-full overflow-hidden rounded-lg bg-[var(--hernandez-forest-deep)] py-4 text-[0.85rem] font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all hover:bg-[var(--hernandez-forest)] active:scale-[0.98] disabled:opacity-60 disabled:active:scale-100 group">
            <span className="relative z-10 flex items-center justify-center gap-2">
              {formStatus === 'sending' ? 'Processing...' : 'Book Consultation'}
              {formStatus !== 'sending' && <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
            </span>
          </button>
          <p className="mt-3 text-center text-[0.65rem] leading-relaxed text-slate-400 font-medium px-2">
            By clicking request, you agree to receive SMS or emails containing details for this estimate and related tree care services. Message &amp; data rates may apply. You can reply STOP to opt-out.
          </p>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-emerald-700/80">
            <Lock className="h-3 w-3" />
            <span>100% Secure &amp; Confidential</span>
          </div>
        </div>

        {formStatus === 'success' && <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 font-medium">Got it — we&apos;ll be in touch shortly.</div>}
        {formStatus === 'error' && <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800 font-medium">{formError}</div>}
      </form>
      <div className="mt-5 flex items-center justify-center gap-3 text-xs text-slate-400">
        <Stars count={5} size="h-3 w-3" />
        <span className="font-bold text-slate-600">{siteConfig.rating.toFixed(1)}</span>
        <span>|</span>
        <span>{siteConfig.reviewCount}+ happy customers</span>
      </div>
    </div>
  );
}

/* ─── PAGE ─── */
export default function HomePageClient() {
  const cleanPhone = siteConfig.cleanPhone;
  const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

  const scrollToForm = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      {/* FAQPage Schema for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": siteConfig.faqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          })
        }}
      />

      {/* HowTo Schema for 3-step process */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Get Professional Tree Service in Humble, Spring & Baytown TX",
            "description": "Get expert tree care from José Hernández Tree Service in 3 simple steps. Free estimates, fully insured, same-day availability.",
            "totalTime": "PT1H",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Call or Text for a Free Consultation",
                "text": "Contact José Hernández Tree Service at (713) 291-6992. Describe your tree or landscaping issue, send a few photos if possible, and our expert team will respond quickly.",
                "url": "https://hernandeztreeservice.com/contact"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Site Evaluation and Firm Quote",
                "text": "Our arborists walk your property, determine the safest approach for tree removal or trimming, and provide a firm, straightforward price right there — no hidden fees."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Professional Service and Full Cleanup",
                "text": "Our fully insured tree care crew handles the job flawlessly. We haul away all logs, debris, and branches, leaving your yard pristine and ready to enjoy."
              }
            ]
          })
        }}
      />

      {/* ═══ HERO ═══ */}
      <section className="relative isolate overflow-hidden bg-[var(--hernandez-ink)]">
        <div className="absolute inset-0">
          <NextImage src="/tree_pro/hernandez_hero_v2.png" alt="José Hernández Tree Service crew performing professional tree trimming in Humble TX" fill priority sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,12,8,0.92)] via-[rgba(5,12,8,0.8)] to-[rgba(5,12,8,0.45)]" />

        <div className={`${shell} relative z-10 py-14 sm:py-20 lg:py-24`}>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:items-center">

            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-white pb-6 lg:pb-0">
              <div className="flex items-center gap-2 mb-5">
                <Stars count={5} size="h-4 w-4 text-[#FBBC05]" />
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-white/90">{siteConfig.rating} Stars &bull; {siteConfig.reviewCount}+ Google Reviews</span>
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[4rem] tracking-tight text-white mb-6">
                José Hernández Tree Service. <br className="hidden lg:block" />
                <span className="text-[var(--hernandez-gold)] lg:text-[3.5rem] tracking-tight block mt-1">Affordable Tree Care <br className="lg:hidden" />You Can Trust.</span>
              </h1>

              <h2 className="text-base sm:text-lg leading-relaxed text-white/90 max-w-[550px] mb-10">
                <strong className="text-white font-bold">Fair pricing. Quality work.</strong> We specialize in tree trimming, tree removal, landscaping, stump grinding, and emergency storm cleanup across Humble, Spring, Baytown, The Woodlands, Dayton &amp; Conroe. Fully insured, 24/7 available, and we clean up every last leaf.
              </h2>

              {/* Trust Info Pills */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm font-bold">
                  <Shield className="h-4 w-4 text-[var(--hernandez-gold)]" /> Fully Insured
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm font-bold">
                  <Clock className="h-4 w-4 text-[var(--hernandez-gold)]" /> 24/7 Emergency
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm font-bold">
                  <CheckCircle2 className="h-4 w-4 text-[var(--hernandez-gold)]" /> {siteConfig.yearsInBusiness}+ Years Exp.
                </div>
              </div>

              {/* Assurance Line */}
              <div className="flex flex-wrap gap-4 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-white/60">
                <div className="flex items-center gap-1.5"><Truck className="h-3.5 w-3.5 text-white/50" /> We Haul Everything</div>
                <div className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-[var(--hernandez-gold)]" /> Same-Day Availability</div>
              </div>
            </motion.div>

            {/* Right — form card */}
            <motion.div id="hero-form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="scroll-mt-28">
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-2xl">
                <h2 className="text-xl font-extrabold text-[var(--hernandez-forest-deep)] sm:text-2xl">Book Your Free Consultation</h2>
                <p className="text-sm text-slate-400 mb-6">No cost, no pressure — just an honest, affordable quote.</p>
                <HeroEstimateForm />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Review snippets marquee */}
        <div className="relative z-10 bg-[var(--hernandez-forest-deep)]/90 border-t border-white/5">
          <div className="review-ticker">
            <div className="review-ticker-track">
              {[...siteConfig.testimonials, ...siteConfig.testimonials].map((t, i) => (
                <div key={`${t.name}-${i}`} className="mx-4 inline-flex shrink-0 items-center gap-4 py-3.5 sm:py-4">
                  <Stars count={5} size="h-3 w-3" />
                  <span className="text-sm text-white/60 whitespace-nowrap">&ldquo;{t.quote.length > 35 ? t.quote.slice(0, 35) + '...' : t.quote}&rdquo;</span>
                  <span className="text-xs font-semibold text-white/30">— {t.name.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ (white) */}
      <section id="services" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <div className={shell}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)]">Tree Service &amp; Landscaping — Humble, Spring, Baytown &amp; Beyond</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hernandez-forest-deep)] sm:text-4xl">Tree trimming, removal, landscaping, and everything in between.</h2>
            <p className="mt-3 text-base text-slate-500">From expert tree trimming to full landscaping — every job comes with a free estimate, affordable pricing, full cleanup, and the same crew from start to finish.</p>
          </div>

          {/* Primary services — 2-col feature cards */}
          <div className="grid gap-5 lg:grid-cols-2 mb-5">
            {serviceData.slice(0, 2).map((s) => (
              <div key={s.title} className="group relative overflow-hidden rounded-2xl bg-[var(--hernandez-forest-deep)]">
                <div className="relative aspect-[4/5] sm:aspect-[2/1]">
                  <NextImage src={s.image} alt={`${s.title} in Humble TX by José Hernández Tree Service`} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--hernandez-forest-deep)] via-[var(--hernandez-forest-deep)]/60 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7">
                  <div className="inline-flex self-start items-center gap-1 rounded-full bg-[var(--hernandez-gold)]/15 border border-[var(--hernandez-gold)]/25 px-2.5 py-1 text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-wider text-[var(--hernandez-gold)] mb-2 relative z-10 transition-transform">
                    <Clock className="h-2.5 w-2.5 shrink-0" /> {s.turnaround}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-extrabold text-white sm:text-2xl">{s.title}</h3>
                    <p className="mt-1.5 text-[0.8rem] sm:text-[0.85rem] leading-snug text-white/70 max-w-[90%]">{s.summary}</p>
                    <ul className="mt-3 mb-4 flex flex-col gap-1.5">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-start gap-1.5 text-[0.75rem] sm:text-[0.8rem] text-white/60">
                          <CheckCircle2 className="h-[14px] w-[14px] mt-[1px] shrink-0 text-[var(--hernandez-gold)]" />
                          <span className="leading-tight">{d}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/services#${s.slug}`} className="mt-auto self-start inline-flex items-center gap-1.5 bg-[var(--hernandez-gold)] px-5 py-2 text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white hover:bg-[#b8904f] transition-colors">
                      Learn More <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary services — 4-col compact cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceData.slice(2).map((s) => (
              <div key={s.title} className="flex flex-col h-full group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-[var(--hernandez-gold)]/30 hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[3/2] shrink-0 overflow-hidden">
                  <NextImage src={s.image} alt={`${s.title} in Humble TX by José Hernández Tree Service`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-wider text-[var(--hernandez-forest-deep)]">
                    <Clock className="h-2.5 w-2.5" /> {s.turnaround}
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-base font-extrabold text-[var(--hernandez-forest-deep)]">{s.title}</h3>
                  <div className="min-h-[3.6rem]">
                    <p className="mt-2 text-[0.8rem] leading-relaxed text-slate-500 line-clamp-3">{s.summary}</p>
                  </div>
                  <ul className="mt-4 mb-6 space-y-2.5 flex-1">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-[0.75rem] text-slate-600">
                        <CheckCircle2 className="h-[14px] w-[14px] mt-[2px] shrink-0 text-[var(--hernandez-gold)]" />
                        <span className="leading-snug">{d}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services#${s.slug}`} className="mt-auto w-full flex items-center justify-center gap-1.5 border border-[var(--hernandez-gold)] py-2.5 text-[0.7rem] font-bold uppercase tracking-wider text-[var(--hernandez-gold)] hover:bg-[var(--hernandez-gold)] hover:text-white transition-colors">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--hernandez-forest)] hover:text-[var(--hernandez-gold)] transition-colors">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT / WHY US ═══ */}
      <section id="about" className="scroll-mt-20 bg-[var(--hernandez-cream)] py-20 sm:py-24">
        <div className={shell}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-center">
            {/* Left — image + stats overlay */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <NextImage src="/tree_pro/trust_us_v2.png" alt="José Hernández Tree Service crew at work in Humble TX" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--hernandez-forest-deep)]/80 to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-6 grid grid-cols-3 gap-3">
                {[
                  { value: `${siteConfig.yearsInBusiness}+`, label: 'Years' },
                  { value: `${siteConfig.reviewCount}+`, label: 'Reviews' },
                  { value: '24/7', label: 'Available' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-white p-3 sm:p-4 text-center shadow-lg">
                    <div className="text-xl sm:text-2xl font-extrabold text-[var(--hernandez-forest-deep)]">{stat.value}</div>
                    <div className="text-[0.55rem] font-semibold uppercase tracking-wider text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — copy + trust points */}
            <div className="pt-4 lg:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)]">About José Hernández Tree Service</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[var(--hernandez-forest-deep)] sm:text-4xl">Family-run. Locally trusted. Affordable pricing.</h2>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-slate-600">
                José Hernández started this tree service and landscaping company {siteConfig.yearsInBusiness} years ago with a truck, a chainsaw, and a simple rule: leave every yard better than we found it — at a price that&apos;s fair. That hasn&apos;t changed. Whether it&apos;s trimming your trees, removing a dangerous one, landscaping your yard, or grinding a stump — we show up on time, give you an honest price, do the work right, and clean up everything before we go.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: 'Fully Insured', desc: 'Your property is always protected.' },
                  { icon: Clock, title: 'On Time, Every Time', desc: 'No guessing, no runaround.' },
                  { icon: Truck, title: 'Full Cleanup', desc: 'We haul everything off.' },
                  { icon: HardHat, title: `${siteConfig.yearsInBusiness} Years Experience`, desc: 'Every kind of tree job.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--hernandez-forest-deep)]/10">
                      <item.icon className="h-4 w-4 text-[var(--hernandez-forest)]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--hernandez-forest-deep)]">{item.title}</div>
                      <div className="text-xs text-slate-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-[var(--hernandez-gold)] px-6 py-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-white hover:bg-[#b8904f] transition-colors">Learn More About Us <ArrowRight className="h-3.5 w-3.5" /></Link>
                <a href={`tel:${cleanPhone}`} className="inline-flex items-center justify-center gap-2 border border-[var(--hernandez-forest-deep)]/15 bg-white px-6 py-3 text-[0.75rem] font-bold text-[var(--hernandez-forest-deep)] hover:bg-white/80 transition-colors"><Phone className="h-3.5 w-3.5" /> {siteConfig.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="relative isolate bg-[var(--hernandez-ink)] py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <NextImage src="/tree_pro/hernandez_service_trimming_v2.png" alt="Tree trimming and pruning process by José Hernández Tree Service" fill sizes="100vw" className="object-cover opacity-20 sm:opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--hernandez-ink)]/95 via-[var(--hernandez-ink)]/80 to-[var(--hernandez-ink)]/40" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--hernandez-cream)] to-transparent opacity-10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--hernandez-ink)] to-transparent" />
        </div>

        <div className={`${shell} relative z-10`}>
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-14 items-start">

            {/* Left — sticky heading */}
            <div className="lg:sticky lg:top-32 relative">
              <div className="absolute -left-10 top-0 w-32 h-32 bg-[var(--hernandez-gold)]/10 blur-[80px] rounded-full pointer-events-none" />
              <p className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)]/90 drop-shadow-sm">Our Tree Service Process</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-[3rem] tracking-tight text-white leading-[1.05]">
                Expert Tree Care in 3 Simple Steps.
              </h2>
              <p className="mt-5 text-[0.9rem] leading-relaxed text-white/50 max-w-sm">
                Whether you need emergency tree removal, expert tree trimming, landscaping, or total land clearing, our trusted arborists make the entire process safe, stress-free, and affordable.
              </p>
              <div className="mt-6 h-px w-20 bg-gradient-to-r from-[var(--hernandez-gold)]/60 to-transparent" />
            </div>

            {/* Right — Glass cards */}
            <div className="space-y-4 sm:space-y-6">
              {[
                { n: '01', title: 'Call or Text for a Free Consultation', desc: 'Contact José Hernández Tree Service. Describe your tree or landscaping issue, send a few photos if possible, and our expert team will respond quickly.', icon: Phone },
                { n: '02', title: 'Site Evaluation & Firm Quote', desc: 'Our arborists walk your property, determine the safest approach for tree removal or trimming, and provide a firm, straightforward price right there — no hidden fees.', icon: TreePine },
                { n: '03', title: 'Professional Service & Full Cleanup', desc: 'Our fully insured tree care crew handles the job flawlessly. We haul away all logs, debris, and branches, leaving your yard pristine and ready to enjoy.', icon: CheckCircle2 },
              ].map((step) => (
                <div key={step.n} className="group relative flex flex-col sm:flex-row gap-5 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] shadow-2xl backdrop-blur-sm overflow-hidden hover:bg-white/[0.04] hover:border-[var(--hernandez-gold)]/30 hover:-translate-y-1 transition-all duration-500">
                  <div className="absolute -right-4 -bottom-6 text-[7rem] sm:text-[8rem] font-black text-white/[0.03] leading-none select-none z-0 tracking-tighter pointer-events-none group-hover:text-white/[0.05] transition-colors duration-500">
                    {step.n}
                  </div>
                  <div className="relative z-10 shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[0.9rem] bg-gradient-to-br from-[var(--hernandez-gold)]/20 to-transparent border border-[var(--hernandez-gold)]/30 shadow-inner group-hover:border-[var(--hernandez-gold)]/60 transition-colors duration-500">
                      <step.icon className="h-5 w-5 text-[var(--hernandez-gold)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                    </div>
                  </div>
                  <div className="relative z-10 flex-1 pt-1 sm:pt-0">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-[0.85rem] leading-relaxed text-white/50 max-w-[95%] group-hover:text-white/70 transition-colors duration-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR WORK / PORTFOLIO (white) ═══ */}
      <section id="work" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <div className={shell}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)]">Our Work</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hernandez-forest-deep)] sm:text-4xl">Recent jobs around Humble, Spring &amp; Baytown</h2>
            <p className="mt-3 text-base text-slate-500">Every job gets the same care — from a single stump to a full lot clearing.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Tree Trimming — Humble' },
              { label: 'Tree Removal — Spring' },
              { label: 'Landscaping — Baytown' },
              { label: 'Storm Cleanup — The Woodlands' },
              { label: 'Stump Grinding — Dayton' },
              { label: 'Emergency Service — Conroe' },
            ].map((item) => (
              <div key={item.label} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-[var(--hernandez-cream)]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_top,#ffffff,transparent_55%)]">
                  <span className="text-7xl font-extrabold leading-none text-[var(--hernandez-gold)]/85">?</span>
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-slate-400">Client Photo Here</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 border-t border-slate-200 bg-white/92 px-4 py-4">
                  <p className="text-sm font-semibold text-[var(--hernandez-forest-deep)]">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/gallery" className="inline-flex items-center gap-2 bg-[var(--hernandez-gold)] px-6 py-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-white hover:bg-[#b8904f] transition-colors">
              View Full Gallery <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS (dark) ═══ */}
      <section id="reviews" className="relative isolate scroll-mt-20 bg-[var(--hernandez-ink)] py-20 text-white sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <NextImage src="/tree_pro/hernandez_hero_v2.png" alt="" fill sizes="100vw" className="object-cover opacity-15 mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--hernandez-ink)]/95 via-[var(--hernandez-ink)]/90 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--hernandez-ink)] to-transparent" />
        </div>

        <div className={`${shell} relative z-10 max-w-7xl`}>
          <div className="grid gap-12 lg:grid-cols-[1fr_2.2fr] lg:gap-16 lg:items-start">

            {/* Left — rating headline */}
            <div className="lg:sticky lg:top-36 relative">
              <div className="flex items-end gap-4 mb-8">
                <span className="text-6xl sm:text-7xl lg:text-[6rem] font-black tracking-tighter text-white drop-shadow-2xl leading-none py-2">
                  {siteConfig.rating.toFixed(1)}
                </span>
                <div className="flex flex-col justify-end gap-1.5 pb-3">
                  <Stars count={5} size="h-6 w-6 text-[#FBBC05] drop-shadow-md" />
                  <div className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[#4285F4] flex items-center gap-1.5 mt-1">
                    <CheckCircle2 className="h-3.5 w-3.5 fill-[#4285F4] text-white" /> Verified Average
                  </div>
                </div>
              </div>

              <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight mb-6">
                What local homeowners are saying.
              </h2>

              <p className="text-[0.95rem] leading-relaxed text-white/50 max-w-sm font-medium">
                {siteConfig.reviewCount}+ five-star reviews from real homeowners across Humble, Spring, Baytown &amp; beyond. No paid reviews, no fake accounts.
              </p>

              {/* Official Badges Row */}
              <div className="mt-8 flex items-center gap-5 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <div className="flex flex-col justify-center leading-none">
                    <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#4285F4] opacity-90">Guaranteed</span>
                    <span className="text-xl font-black tracking-tighter text-white">Google</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/15" />
                <div className="flex items-center gap-1.5 font-bold text-xl tracking-tight text-white font-serif italic">
                  <Star className="h-6 w-6 fill-[#FF1A1A] text-[#FF1A1A] -mt-1 drop-shadow-sm" /> yelp
                </div>
              </div>

              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--hernandez-gold)] px-8 py-4.5 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-[#b8904f] transition-all rounded-lg shadow-[0_0_30px_rgba(250,187,5,0.15)] hover:shadow-[0_0_40px_rgba(250,187,5,0.3)]">
                  Get Your Estimate <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right — Review Cards */}
            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
              {siteConfig.testimonials.map((t, i) => (
                <div key={t.name} className={`group relative rounded-3xl p-6 sm:p-7 backdrop-blur-md ${i === 0 ? 'bg-[#181E16] border border-[#2B3528]' : 'bg-[#111510] border border-white/[0.04]'} shadow-[0_8px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-transform duration-300`}>
                  <div className="absolute top-6 right-6 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>

                  <div className="flex items-center mb-5">
                    <Stars count={5} size="h-4 w-4 text-[#FBBC05] drop-shadow-sm" />
                  </div>

                  <p className="mb-8 text-[0.85rem] sm:text-[0.9rem] leading-relaxed text-white/75 font-medium tracking-wide">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[var(--hernandez-forest)] to-[#2B3A24] border border-white/10 shadow-inner text-sm font-bold text-white">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <div className="text-[0.85rem] font-bold text-white/90 tracking-tight">{t.name}</div>
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#4285F4] shrink-0" />
                      </div>
                      <div className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-white/30 mt-0.5 group-hover:text-[#4285F4]/80 transition-colors">
                        Local Guide &bull; {t.reviews} Reviews
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ (white) ═══ */}
      <section id="faq" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <div className={`${shell} grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16`}>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)]">Questions</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hernandez-forest-deep)] sm:text-4xl">Got questions? We&apos;ve got answers.</h2>
            <p className="mt-3 text-sm text-slate-500">If you don&apos;t see yours here, just call — we&apos;re happy to talk it through.</p>
            <a href={`tel:${cleanPhone}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--hernandez-forest)]"><Phone className="h-4 w-4" /> {siteConfig.phone}</a>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {siteConfig.faqs.map((faq, i) => (
              <details key={faq.q} className="group" open={i === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 sm:py-6 text-[0.95rem] font-semibold text-[var(--hernandez-forest-deep)]">
                  {faq.q}
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center text-lg text-[var(--hernandez-forest)] transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <div className="pb-5 sm:pb-6 text-sm leading-relaxed text-slate-500">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
