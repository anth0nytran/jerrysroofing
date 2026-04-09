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
 Clock,
 Hammer,
 HardHat,
 User,
 MapPin,
 ClipboardList,
 Home,
 Award,
 ThumbsUp,
} from 'lucide-react';
import { siteConfig, serviceData } from './config';
import { Stars } from './components/Stars';
import { BrandLogo } from './components/BrandLogo';

/* ─── INLINE HERO FORM ─── */
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
 <form className="grid gap-4" action="/api/lead" method="POST" onSubmit={handleSubmit}>
 <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
 <input type="hidden" name="_ts" value={formTimestamp} />
 <input type="hidden" name="page" value={pageUrl} />

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
 <label className="block text-[0.65rem] font-bold text-slate-600 mb-1 uppercase tracking-wide">Service <span className="text-red-500">*</span></label>
 <div className="relative">
 <ClipboardList className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
 <select required name="service" defaultValue="" className="w-full border border-slate-200 bg-slate-50 pl-9 pr-3 py-2.5 text-sm text-slate-900 outline-none transition-all focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20 appearance-none cursor-pointer">
 <option value="" disabled>Select a service...</option>
 {[siteConfig.primaryService, ...siteConfig.services].map((s) => <option key={s} value={s}>{s}</option>)}
 </select>
 </div>
 </div>

 <div>
 <label className="block text-[0.65rem] font-bold text-slate-600 mb-1 uppercase tracking-wide">Details <span className="text-slate-400 font-normal normal-case tracking-normal">(Optional)</span></label>
 <textarea name="message" rows={2} maxLength={5000} placeholder="Describe the project or any concerns..." className="w-full border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20 min-h-[56px] resize-y" />
 </div>

 <div className="pt-1">
 <button type="submit" disabled={formStatus === 'sending'} className="relative w-full overflow-hidden bg-[var(--jerry-lime)] py-3 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] shadow-lg transition-all hover:bg-[var(--jerry-lime-hover)] active:scale-[0.98] disabled:opacity-60 disabled:active:scale-100 group cursor-pointer cta-pulse">
 <span className="relative z-10 flex items-center justify-center gap-2">
 {formStatus === 'sending' ? 'Processing...' : 'Request a Quote'}
 {formStatus !== 'sending' && <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />}
 </span>
 </button>
 <p className="mt-2 text-center text-[0.6rem] leading-relaxed text-slate-400 px-1">
 By submitting, you agree to receive SMS or emails for this estimate. Message &amp; data rates may apply. Reply STOP to opt-out.
 </p>
 </div>

 {formStatus === 'success' && <div className=" border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm text-emerald-800 font-medium">Got it — we&apos;ll be in touch shortly.</div>}
 {formStatus === 'error' && <div className=" border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-800 font-medium">{formError}</div>}
 </form>
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
 {/* FAQPage Schema */}
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

 {/* HowTo Schema */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "How to Get Professional Roofing Service in Katy, Cypress & Cinco Ranch TX",
 "description": "Get expert roofing from Jerry's Roofing in 3 simple steps. Free inspections, honest pricing, quality craftsmanship.",
 "totalTime": "PT2H",
 "step": [
 {
 "@type": "HowToStep",
 "position": 1,
 "name": "Request a Free Inspection",
 "text": "Contact Jerry's Roofing at (409) 351-1529 or fill out our online form. Describe your roofing concern and we'll schedule a free inspection at your convenience.",
 "url": "https://roofingbyjerry.com/contact"
 },
 {
 "@type": "HowToStep",
 "position": 2,
 "name": "Get a Clear Written Estimate",
 "text": "Jerry personally inspects your roof, assesses the condition, and provides a clear written estimate with no hidden fees. If insurance is involved, we help with the claims process."
 },
 {
 "@type": "HowToStep",
 "position": 3,
 "name": "Quality Work, Done Right",
 "text": "Our experienced crew completes the job using premium materials from IKO, CertainTeed, or GAF. Full cleanup included — we leave your property spotless."
 }
 ]
 })
 }}
 />

 {/* ═══ HERO ═══ */}
 <section className="relative isolate overflow-hidden bg-[var(--jerry-navy-deep)] flex flex-col min-h-[calc(100vh-104px)]">
 <div className="absolute inset-0">
 <NextImage src="/pictures/20260406_153929.jpg" alt="Jerry's Roofing crew performing professional roof replacement in Katy TX" fill priority sizes="100vw" className="object-cover object-center" />
 </div>
 <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,29,58,0.88)] via-[rgba(6,29,58,0.55)] to-[rgba(6,29,58,0.15)]" />

 <div className={`${shell} relative z-10 py-8 sm:py-12 lg:py-14 flex-1 flex flex-col justify-center`}>
 <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:items-center">

 {/* Left */}
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-white">
 <div className="flex items-center gap-2 mb-4">
 <Stars count={5} size="h-3.5 w-3.5 text-[#FBBC05]" />
 <span className="text-[0.6rem] font-bold uppercase tracking-widest text-white/80">5-Star Rated on Google</span>
 </div>

 <h1 className="mb-3 lg:mb-4">
 <span className="block text-[2.5rem] sm:text-5xl lg:text-[4.5rem] font-extrabold leading-[1.1] tracking-tight text-white my-1 sm:my-3"><span className="text-[var(--jerry-lime)]">Jerry&apos;s</span> <span className="text-[#3b82f6]">Roofing.</span></span>
 <span className="mt-3 block text-[1.2rem] font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:max-w-2xl">
 Straight Forward Roofing with Quality as the Focus.
 </span>
 </h1>

 <p className="text-[0.85rem] sm:text-base leading-relaxed text-white/75 max-w-[500px] mb-5 lg:mb-6">
 Roof replacement, rejuvenation, gutters, siding &amp; painting across Katy, Cypress, Cinco Ranch, Richmond &amp; Fulshear. Dedicated service since 2024. Honest pricing. We do what we say.
 </p>

 {/* Trust line */}
 <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/50">
 <span className="flex items-center gap-1.5"><Shield className="h-3 w-3 text-[var(--jerry-lime)]" /> Fully Insured</span>
 <span className="flex items-center gap-1.5"><Award className="h-3 w-3 text-[var(--jerry-lime)]" /> IKO &middot; CertainTeed &middot; GAF</span>
 <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-[var(--jerry-lime)]" /> Since 2024</span>
 </div>
 </motion.div>

 {/* Right — form card */}
 <motion.div id="hero-form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="scroll-mt-28">
 <div className=" bg-white p-5 sm:p-6 shadow-2xl">
 <h2 className="text-lg font-extrabold text-[var(--jerry-navy)] sm:text-xl">Request a Quote</h2>
 <p className="text-[0.8rem] text-slate-400 mb-4">No cost, no pressure — just an honest quote.</p>
 <HeroEstimateForm />
 </div>
 </motion.div>
 </div>
 </div>

 {/* Review snippets marquee */}
 <div className="relative z-10 bg-[var(--jerry-navy-deep)]/90 border-t border-white/5 mt-auto">
 <div className="review-ticker">
 <div className="review-ticker-track">
 {[...siteConfig.testimonials, ...siteConfig.testimonials].map((t, i) => (
 <div key={`${t.name}-${i}`} className="mx-4 inline-flex shrink-0 items-center gap-3 py-2.5 sm:py-3">
 <Stars count={5} size="h-2.5 w-2.5" />
 <span className="text-xs text-white/60 whitespace-nowrap">&ldquo;{t.quote.length > 40 ? t.quote.slice(0, 40) + '...' : t.quote}&rdquo;</span>
 <span className="text-[0.65rem] font-semibold text-white/30">— {t.name}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* ═══ MANUFACTURERS / TRUST ═══ */}
 <section className="bg-white py-10 sm:py-14">
 <div className={shell}>
 <div className="text-center max-w-2xl mx-auto mb-10">
 <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--jerry-navy-light)]">Premium Materials</p>
 <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl">Shingle Manufacturers We Trust</h2>
 <p className="mt-3 text-base text-slate-500">We only use industry-leading materials built to withstand the Texas climate.</p>
 </div>

 <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 max-w-4xl mx-auto items-center">
 {siteConfig.manufacturerLogos.map((logo) => (
 <div
 key={logo.name}
 className="flex h-[108px] items-center justify-center rounded-sm border border-slate-100 bg-slate-50/50 px-3 py-3 sm:h-[124px] sm:px-4 sm:py-4 hover:shadow-md transition-shadow duration-300"
 >
 <div className={`relative mx-auto ${logo.frameClassName}`}>
 <NextImage
 src={logo.src}
 alt={logo.alt}
 fill
 sizes="(min-width: 640px) 240px, 86vw"
 className="object-contain"
 />
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ═══ ROOF REJUVENATION SPOTLIGHT ═══ */}
 <section id="rejuvenation" className="scroll-mt-20 bg-[var(--jerry-navy-deep)] py-12 sm:py-16">
 <div className={shell}>
 <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
 {/* Left — copy */}
 <div>
 <p className="eyebrow text-[var(--jerry-lime)]">Roof Rejuvenation</p>
 <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl section-heading">Not every roof needs replacing.</h2>
 <p className="mt-2 text-lg font-bold text-[var(--jerry-lime)] sm:text-xl">But every roof needs this.</p>
 <p className="mt-5 text-[0.85rem] sm:text-[0.9rem] leading-relaxed text-white/60 max-w-lg">
 Texas sun bakes the essential oils out of your shingles year after year. Roof rejuvenation restores them — extending your roof&apos;s life at a fraction of the cost of replacement.
 </p>

 {/* Stats */}
 <div className="mt-8 grid grid-cols-3 gap-3">
 {[
 { val: '5–10', unit: 'yrs', label: 'Added to roof life' },
 { val: '80%', unit: '', label: 'Less than replacing' },
 { val: '1', unit: 'day', label: 'Single visit' },
 ].map((s) => (
 <div key={s.label} className="border border-white/8 bg-white/[0.03] p-3.5 sm:p-4">
 <div className="flex items-baseline gap-0.5">
 <span className="text-xl sm:text-2xl font-extrabold text-white">{s.val}</span>
 {s.unit && <span className="text-[0.6rem] font-bold text-[var(--jerry-lime)]/60 ml-0.5">{s.unit}</span>}
 </div>
 <p className="mt-1 text-[0.6rem] font-medium text-white/30 leading-snug">{s.label}</p>
 </div>
 ))}
 </div>

 {/* How it works — typographic, no icons */}
 <div className="mt-8 space-y-4">
 {[
 { n: '01', title: 'Free Inspection', text: 'We assess your roof honestly — if rejuvenation works, we\'ll tell you. If you need a replacement, we\'ll tell you that too.' },
 { n: '02', title: 'Bio-Based Treatment', text: 'A plant-based formula restores the essential oils Texas heat dried out of your shingles.' },
 { n: '03', title: 'Restored & Protected', text: 'Shingles regain flexibility. Granule loss stops. No tear-off, no mess.' },
 ].map((step) => (
 <div key={step.n} className="flex gap-3.5 items-start">
 <span className="shrink-0 text-[0.65rem] font-extrabold text-[var(--jerry-lime)]/40 pt-0.5 w-5">{step.n}</span>
 <div>
 <h4 className="text-[0.8rem] font-bold text-white">{step.title}</h4>
 <p className="mt-0.5 text-[0.72rem] leading-relaxed text-white/35">{step.text}</p>
 </div>
 </div>
 ))}
 </div>

 {/* CTAs */}
 <div className="mt-8 flex flex-wrap gap-3">
 <Link href="/services#roof-rejuvenation" className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-6 py-3 text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer">
 Learn More <ArrowRight className="h-3.5 w-3.5" />
 </Link>
 <a href={`tel:${siteConfig.cleanPhone}`} className="inline-flex items-center gap-2 border border-white/15 px-6 py-3 text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/70 hover:bg-white/5 hover:text-white transition-all cursor-pointer">
 {siteConfig.phone}
 </a>
 </div>
 </div>

 {/* Right — Before & After side-by-side */}
 <div>
 <div className="grid grid-cols-2 gap-[2px] sm:gap-1">
 {/* Before */}
 <div className="relative overflow-hidden">
 <div className="aspect-[3/4] sm:aspect-[4/5] bg-gradient-to-b from-stone-700/60 to-stone-900/80" />
 <div className="absolute top-0 left-0 right-0 bg-white/10 py-1.5 sm:py-2 text-center">
 <span className="text-[0.55rem] sm:text-[0.6rem] font-extrabold uppercase tracking-[0.25em] text-white/70">Before</span>
 </div>
 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
 <p className="text-[0.55rem] sm:text-[0.65rem] font-medium text-white/60 leading-snug">Dried, brittle shingles losing granules</p>
 </div>
 </div>
 {/* After */}
 <div className="relative overflow-hidden">
 <div className="aspect-[3/4] sm:aspect-[4/5] bg-gradient-to-b from-[var(--jerry-navy-light)]/40 to-[var(--jerry-navy)]/60" />
 <div className="absolute top-0 left-0 right-0 bg-[var(--jerry-lime)] py-1.5 sm:py-2 text-center">
 <span className="text-[0.55rem] sm:text-[0.6rem] font-extrabold uppercase tracking-[0.25em] text-[var(--jerry-navy-deep)]">After</span>
 </div>
 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
 <p className="text-[0.55rem] sm:text-[0.65rem] font-medium text-white/60 leading-snug">Restored, flexible, protected</p>
 </div>
 </div>
 </div>
 <p className="mt-2.5 text-[0.55rem] uppercase tracking-[0.2em] text-white/20 text-center">Real project photos coming soon</p>

 {/* Testimonial */}
 <div className="mt-6 border border-white/8 bg-white/[0.03] p-4 sm:p-5">
 <div className="flex gap-0.5 mb-2.5">
 {[...Array(5)].map((_, i) => (
 <Star key={i} className="h-2.5 w-2.5 fill-[var(--jerry-lime)] text-[var(--jerry-lime)]" />
 ))}
 </div>
 <p className="text-[0.78rem] leading-relaxed text-white/65 italic">&ldquo;Jerry told us we didn&apos;t need a new roof — just rejuvenation. Saved us thousands.&rdquo;</p>
 <p className="mt-2.5 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-white/25">— Homeowner, Cinco Ranch</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ═══ ALL SERVICES ═══ */}
 <section id="services" className="scroll-mt-20 bg-[var(--jerry-cream)] py-12 sm:py-20">
 <div className={shell}>
 {/* Header — editorial, left-aligned */}
 <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
 <div>
 <p className="eyebrow text-[var(--jerry-navy-light)]">Our Services</p>
 <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl tracking-[-0.03em]">Everything your home&apos;s<br className="hidden sm:block" /> exterior needs.</h2>
 </div>
 <Link href="/services" className="inline-flex items-center gap-2 text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy)] hover:text-[var(--jerry-navy-light)] transition-colors cursor-pointer self-start sm:self-auto shrink-0">
 View All Services <ArrowRight className="h-3.5 w-3.5" />
 </Link>
 </div>

 {/* Featured — Roof Replacement (wide cinematic card) */}
 <div className="mb-5">
 {serviceData.filter(s => s.slug === 'roof-replacement').map((s) => (
 <div key={s.title} className="group relative overflow-hidden bg-[var(--jerry-navy-deep)]">
 <div className="relative aspect-[2/1] sm:aspect-[21/8]">
 <NextImage src={s.image} alt={`${s.title} in Katy TX by Jerry's Roofing`} fill sizes="100vw" className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-700 group-hover:scale-[1.02]" />
 <div className="absolute inset-0 bg-gradient-to-r from-[var(--jerry-navy-deep)] via-[var(--jerry-navy-deep)]/60 to-transparent" />
 </div>
 <div className="absolute inset-0 flex items-center">
 <div className="p-5 sm:p-10 lg:p-14 max-w-2xl">
 <span className="inline-block bg-white/10 border border-white/10 px-3 py-1 text-[0.5rem] sm:text-[0.55rem] font-bold uppercase tracking-[0.2em] text-white/60 mb-3">{s.turnaround}</span>
 <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-[-0.02em]">{s.title}</h3>
 <p className="mt-2 text-[0.75rem] sm:text-[0.9rem] leading-relaxed text-white/50 max-w-lg">{s.summary}</p>
 <div className="mt-3 sm:mt-5 hidden sm:flex flex-wrap gap-x-5 gap-y-1.5">
 {s.details.map((d) => (
 <span key={d} className="text-[0.65rem] sm:text-[0.7rem] text-white/45 before:content-['—'] before:mr-2 before:text-[var(--jerry-lime)]/60">
 {d}
 </span>
 ))}
 </div>
 <Link href={`/services#${s.slug}`} className="mt-4 sm:mt-6 inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-5 sm:px-6 py-2.5 text-[0.6rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer">
 Learn More <ArrowRight className="h-3.5 w-3.5" />
 </Link>
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* Remaining services — typography-driven cards, no icons */}
 <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
 {serviceData.filter(s => s.slug !== 'roof-replacement' && s.slug !== 'roof-rejuvenation').map((s, i) => (
 <Link key={s.title} href={`/services#${s.slug}`} className="group flex flex-col h-full bg-white border border-slate-200/80 hover:border-[var(--jerry-navy)]/15 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
 <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
 <NextImage src={s.image} alt={`${s.title} in Katy TX by Jerry's Roofing`} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
 <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
 <span className="text-[0.5rem] sm:text-[0.55rem] font-bold uppercase tracking-[0.2em] text-white/50">{s.turnaround}</span>
 </div>
 </div>
 <div className="flex flex-col flex-1 p-3.5 sm:p-5">
 <span className="text-[0.5rem] font-bold uppercase tracking-[0.3em] text-slate-400 mb-1">0{i + 1}</span>
 <h3 className="text-[0.8rem] sm:text-[0.95rem] font-extrabold text-[var(--jerry-navy)] leading-tight group-hover:text-[var(--jerry-navy-light)] transition-colors">{s.title}</h3>
 <p className="mt-1.5 text-[0.65rem] sm:text-[0.73rem] leading-relaxed text-slate-500 line-clamp-2 flex-1">{s.summary}</p>
 <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100">
 <span className="text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--jerry-navy)] group-hover:tracking-[0.3em] transition-all">
 Learn More &rarr;
 </span>
 </div>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* ═══ ABOUT / WHY US ═══ */}
 <section id="about" className="scroll-mt-20 bg-[var(--jerry-cream)] py-12 sm:py-16 diagonal-stripes">
 <div className={shell}>
 <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-center">
 {/* Left — image + stats overlay */}
 <div className="relative pb-10 lg:pb-0 mb-4 lg:mb-0">
 <div className="relative aspect-[4/3] overflow-hidden ">
 <NextImage src="/pictures/selfie.jpg" alt="Jerry Pilley, owner of Jerry's Roofing in Katy TX" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
 <div className="absolute inset-0 bg-gradient-to-t from-[var(--jerry-navy-deep)]/80 to-transparent" />
 </div>
 <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-6 grid grid-cols-3 gap-3">
 {[
 { value: '2024', label: 'Est.' },
 { value: '5\u2605', label: 'Rated' },
 { value: 'Free', label: 'Estimates' },
 ].map((stat) => (
 <div key={stat.label} className=" bg-white p-3 sm:p-4 text-center shadow-lg">
 <div className="text-xl sm:text-2xl font-extrabold text-[var(--jerry-navy)]">{stat.value}</div>
 <div className="text-[0.55rem] font-semibold uppercase tracking-wider text-slate-400">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>

 {/* Right — copy + trust points */}
 <div className="pt-4 lg:pt-0">
 <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--jerry-navy-light)]">About Jerry&apos;s Roofing</p>
 <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[var(--jerry-navy)] sm:text-4xl">Locally owned. Straight talk. Quality you can trust.</h2>
 <p className="mt-4 text-[0.92rem] leading-relaxed text-slate-600">
 Born and raised in Texas, Jerry Pilley has been in the roofing industry since 2024. After working for larger companies, he started Jerry&apos;s Roofing in Katy with a simple philosophy: be honest, do quality work, and charge a fair price. With lower overhead than the big corporate outfits, Jerry passes those savings on to you. Much like a homeowner is invested in their house, Jerry is invested in the Katy community.
 </p>

 <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
 {[
 { icon: Shield, label: 'Fully Insured' },
 { icon: ThumbsUp, label: 'Honest Pricing' },
 { icon: Home, label: 'Full Exterior Services' },
 { icon: HardHat, label: 'Since 2024' },
 ].map((item) => (
 <div key={item.label} className="flex items-center gap-2">
 <item.icon className="h-4 w-4 shrink-0 text-[var(--jerry-lime)]" />
 <span className="text-sm font-semibold text-[var(--jerry-navy)]">{item.label}</span>
 </div>
 ))}
 </div>

 <div className="mt-8 flex flex-col sm:flex-row gap-3">
 <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-[var(--jerry-navy)] px-6 py-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-white hover:bg-[var(--jerry-navy-light)] transition-colors cursor-pointer">Learn More About Us <ArrowRight className="h-3.5 w-3.5" /></Link>
 <a href={`tel:${cleanPhone}`} className="inline-flex items-center justify-center gap-2 border border-[var(--jerry-navy)]/15 bg-white px-6 py-3 text-[0.75rem] font-bold text-[var(--jerry-navy)] hover:bg-white/80 transition-colors cursor-pointer"><Phone className="h-3.5 w-3.5" /> {siteConfig.phone}</a>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ═══ HOW IT WORKS ═══ */}
 <section className="relative isolate bg-[var(--jerry-ink)] py-10 sm:py-16 overflow-hidden">
 <div className="absolute inset-0 z-0 pointer-events-none">
 <NextImage src="/roofing/jerry_service_replacement.jpg" alt="Roof replacement process by Jerry's Roofing" fill sizes="100vw" className="object-cover opacity-20 sm:opacity-25" />
 <div className="absolute inset-0 bg-gradient-to-r from-[var(--jerry-ink)]/95 via-[var(--jerry-ink)]/80 to-[var(--jerry-ink)]/40" />
 <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--jerry-ink)] to-transparent" />
 </div>

 <div className={`${shell} relative z-10`}>
 <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-14 items-start">

 {/* Left — sticky heading */}
 <div className="lg:sticky lg:top-32 relative">
 <div className="absolute -left-10 top-0 w-32 h-32 bg-[var(--jerry-lime)]/10 blur-[80px] pointer-events-none" />
 <p className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.3em] text-[var(--jerry-lime)]/90 drop-shadow-sm">Our Roofing Process</p>
 <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-[3rem] tracking-tight text-white leading-[1.05]">
 Quality Roofing in 3 Simple Steps.
 </h2>
 <p className="mt-5 text-[0.9rem] leading-relaxed text-white/50 max-w-sm">
 Whether you need a full roof replacement, rejuvenation, or exterior work, we make the entire process simple, transparent, and stress-free.
 </p>
 <div className="mt-6 h-px w-20 bg-gradient-to-r from-[var(--jerry-lime)]/60 to-transparent" />
 </div>

 {/* Right — Glass cards */}
 <div className="space-y-4 sm:space-y-6">
 {[
 { n: '01', title: 'Request a Free Inspection', desc: "Call, text, or fill out our form. We'll schedule a free roof inspection at your convenience. No pressure, no obligation — just an honest assessment of your roof's condition.", icon: Phone },
 { n: '02', title: 'Get a Clear Written Estimate', desc: "Jerry personally inspects your roof, identifies any issues, and provides a straightforward written estimate. If insurance is involved, we walk you through the entire claims process.", icon: ClipboardList },
 { n: '03', title: 'Quality Work, Done Right', desc: "Our experienced crew completes the job with premium materials from IKO, CertainTeed, or GAF. Full cleanup included — we leave your property looking better than we found it.", icon: CheckCircle2 },
 ].map((step) => (
 <div key={step.n} className="group relative flex flex-col sm:flex-row gap-5 sm:gap-6 p-6 sm:p-8 bg-white/[0.02] border border-white/[0.05] shadow-2xl backdrop-blur-sm overflow-hidden hover:bg-white/[0.04] hover:border-[var(--jerry-lime)]/30 hover:-translate-y-1 transition-all duration-500">
 <div className="absolute -right-4 -bottom-6 text-[7rem] sm:text-[8rem] font-black text-white/[0.03] leading-none select-none z-0 tracking-tighter pointer-events-none group-hover:text-white/[0.05] transition-colors duration-500">
 {step.n}
 </div>
 <div className="relative z-10 shrink-0">
 <div className="flex h-12 w-12 items-center justify-center bg-gradient-to-br from-[var(--jerry-lime)]/20 to-transparent border border-[var(--jerry-lime)]/30 shadow-inner group-hover:border-[var(--jerry-lime)]/60 transition-colors duration-500">
 <step.icon className="h-5 w-5 text-[var(--jerry-lime)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
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

 {/* ═══ OUR WORK / PORTFOLIO ═══ */}
 <section id="work" className="scroll-mt-20 bg-[var(--jerry-cream)] py-12 sm:py-16">
 <div className={shell}>
 <div className="text-center max-w-2xl mx-auto mb-12">
 <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--jerry-navy-light)]">Our Work</p>
 <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl">Recent jobs around Katy, Cypress &amp; Cinco Ranch</h2>
 <p className="mt-3 text-base text-slate-500">Every job gets the same care — from a roof patch to a full replacement.</p>
 </div>

 <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 bg-white py-20 px-6 text-center">
 <Hammer className="h-12 w-12 text-[var(--jerry-navy)] opacity-20 mb-4" />
 <span className="inline-block bg-[var(--jerry-lime)]/15 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[var(--jerry-navy)] mb-3">Coming Soon</span>
 <p className="text-lg font-bold text-[var(--jerry-navy)]">Project photos on the way!</p>
 <p className="mt-2 text-sm text-slate-500 max-w-md">We&apos;re putting together before &amp; after photos of our roof replacements, rejuvenations, gutter installs, and exterior projects across the Katy area. Check back soon.</p>
 </div>

 <div className="mt-10 text-center">
 <button onClick={scrollToForm} className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-6 py-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer">
 Request a Quote <ArrowRight className="h-3.5 w-3.5" />
 </button>
 </div>
 </div>
 </section>

 {/* ═══ REVIEWS ═══ */}
 <section id="reviews" className="relative isolate scroll-mt-20 bg-[var(--jerry-ink)] py-12 text-white sm:py-20 overflow-hidden">
 <div className="absolute inset-0 z-0 pointer-events-none">
 <div className="absolute inset-0 bg-gradient-to-br from-[var(--jerry-ink)]/95 via-[var(--jerry-ink)]/90 to-transparent" />
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
 What Katy homeowners are saying.
 </h2>

 <p className="text-[0.95rem] leading-relaxed text-white/50 max-w-sm font-medium">
 Five-star rated by real homeowners across Katy, Cypress, Cinco Ranch &amp; beyond. No paid reviews, no fake accounts — just honest feedback.
 </p>

 <div className="mt-8 flex items-center gap-5 opacity-80 hover:opacity-100 transition-opacity duration-300">
 <div className="flex items-center gap-2 bg-white/5 px-4 py-2.5 border border-white/10">
 <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
 <div className="text-[0.65rem] font-bold text-white/60">Google Reviews</div>
 </div>
 </div>
 </div>

 {/* Right — review cards */}
 <div className="grid gap-4 sm:grid-cols-2">
 {siteConfig.testimonials.map((t) => (
 <div key={t.name} className="group relative p-5 sm:p-6 bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.05] hover:border-[var(--jerry-lime)]/20 transition-all duration-300">
 <Stars count={5} size="h-3.5 w-3.5 text-[#FBBC05]" />
 <p className="mt-3 text-[0.85rem] leading-relaxed text-white/70 group-hover:text-white/90 transition-colors duration-300">
 &ldquo;{t.quote}&rdquo;
 </p>
 <div className="mt-4 flex items-center gap-3">
 <div className="h-8 w-8 bg-[var(--jerry-lime)]/20 flex items-center justify-center text-xs font-bold text-[var(--jerry-lime)]">
 {t.name.charAt(0)}
 </div>
 <div>
 <div className="text-sm font-semibold text-white/90">{t.name}</div>
 <div className="text-[0.6rem] text-white/30">{t.reviews} review{t.reviews !== 1 ? 's' : ''} on Google</div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* ═══ SERVICE AREAS ═══ */}
 <section className="bg-white py-10 sm:py-14">
 <div className={shell}>
 <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16 items-center">
 <div>
 <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--jerry-navy-light)]">Service Areas</p>
 <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl">Katy Area Roofing Specialists</h2>
 <p className="mt-4 text-[0.92rem] leading-relaxed text-slate-600">
 Located in downtown Katy, Texas, Jerry&apos;s Roofing serves homeowners across the greater Katy area. Being a local business has its advantages — with low overhead costs, we can charge less than what a typical corporate roofing company charges.
 </p>

 <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
 {siteConfig.allServiceAreas.map((area) => (
 <div key={area} className="flex items-center gap-2 text-sm text-slate-700">
 <MapPin className="h-3.5 w-3.5 shrink-0 text-[var(--jerry-lime)]" />
 <span className="font-medium">{area}</span>
 </div>
 ))}
 </div>

 <div className="mt-6 p-4 bg-[var(--jerry-cream)] border border-slate-100">
 <p className="text-xs font-bold uppercase tracking-wider text-[var(--jerry-navy-light)] mb-1">Communities We Serve</p>
 <p className="text-[0.8rem] text-slate-500 leading-relaxed">{siteConfig.neighborhoods}</p>
 </div>
 </div>

 {/* Map placeholder */}
 <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 border border-slate-200">
 <div className="absolute inset-0 flex items-center justify-center">
 <div className="text-center">
 <MapPin className="h-10 w-10 text-[var(--jerry-navy)] mx-auto mb-2 opacity-30" />
 <p className="text-sm font-semibold text-slate-400">Katy, TX Service Area Map</p>
 <p className="text-xs text-slate-300 mt-1">Google Maps integration coming soon</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ═══ FAQ ═══ */}
 <section id="faq" className="scroll-mt-20 bg-[var(--jerry-cream)] py-12 sm:py-16 diagonal-stripes">
 <div className={`${shell} max-w-4xl`}>
 <div className="text-center mb-10 sm:mb-14">
 <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--jerry-navy-light)]">Common Questions</p>
 <h2 className="mt-3 text-3xl font-extrabold text-[var(--jerry-navy)] sm:text-4xl">Frequently Asked Questions</h2>
 </div>

 <div className="space-y-3">
 {siteConfig.faqs.map((faq, i) => (
 <details key={i} className="group border border-slate-200 bg-white overflow-hidden hover:border-[var(--jerry-navy)]/20 transition-colors">
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
 </section>

 {/* ═══ FINAL CTA ═══ */}
 <section className="relative isolate bg-[var(--jerry-navy)] py-12 sm:py-16 overflow-hidden">
 <div className="absolute inset-0 pointer-events-none">
 <div className="absolute -top-20 -right-20 w-80 h-80 bg-[var(--jerry-lime)]/10 blur-[100px] " />
 <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[var(--jerry-lime)]/5 blur-[80px] " />
 </div>

 <div className={`${shell} relative z-10 text-center max-w-3xl mx-auto`}>
 <h2 className="text-3xl font-extrabold text-white sm:text-5xl tracking-tight">Ready to protect your home?</h2>
 <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
 Get a free roof inspection and honest estimate from Jerry&apos;s Roofing. No pressure, no hidden fees — just straight talk and quality work.
 </p>
 <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
 <button onClick={scrollToForm} className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-8 py-4 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer cta-pulse">
 Request a Quote <ArrowRight className="h-4 w-4" />
 </button>
 <a href={`tel:${cleanPhone}`} className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-white hover:bg-white/5 transition-colors cursor-pointer">
 <Phone className="h-4 w-4" /> Call {siteConfig.phone}
 </a>
 </div>
 </div>
 </section>
 </>
 );
}
