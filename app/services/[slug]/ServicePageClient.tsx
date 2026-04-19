'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
 ArrowRight,
 CheckCircle2,
 Clock,
 Phone,
 Shield,
 Award,
 ThumbsUp,
 Home,
 RefreshCw,
 Droplets,
 Layers,
 Paintbrush,
 SquareStack,
 ChevronDown,
} from 'lucide-react';
import { siteConfig } from '../../config';
import { photosByCategory, type GalleryCategory } from '../../galleryData';

/** Maps a service slug to the matching gallery category for the photo strip. */
const SLUG_TO_GALLERY: Record<string, GalleryCategory> = {
 'roof-replacement': 'roof-replacement',
 'roof-rejoov': 'roof-rejoov',
 'gutters': 'gutters',
 'siding': 'siding',
 'painting': 'painting',
 'driveway-repaints': 'driveway',
 'roof-inspection': 'roof-inspection',
 'roof-repair': 'roof-repair',
 'storm-damage': 'storm-damage',
};

interface ServiceItem {
 slug: string;
 title: string;
 image: string;
 summary: string;
 details: string[];
 turnaround: string;
 longDescription: string;
 keywords: string[];
 faqs?: { q: string; a: string }[];
 process?: { title: string; desc: string }[];
}

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

const fadeUp = {
 hidden: { opacity: 0, y: 24 },
 visible: { opacity: 1, y: 0 },
};

const serviceIconMap: Record<string, typeof Home> = {
 'roof-replacement': Home,
 'roof-rejoov': RefreshCw,
 'gutters': Droplets,
 'siding': Layers,
 'painting': Paintbrush,
 'driveway-repaints': SquareStack,
};

export default function ServicePageClient({
 service,
 otherServices,
}: {
 service: ServiceItem;
 otherServices: ServiceItem[];
}) {
 const HeroIcon = serviceIconMap[service.slug] || Home;
 const galleryCategory = SLUG_TO_GALLERY[service.slug];
 const relatedPhotos = galleryCategory ? photosByCategory(galleryCategory).slice(0, 8) : [];

 return (
 <>
 {/* Sub-hero */}
 <section className="relative overflow-hidden bg-[var(--jerry-navy-deep)]">
 <div className="absolute inset-0">
 <NextImage
 src={service.image}
 alt=""
 fill
 priority
 sizes="100vw"
 className="object-cover opacity-25"
 />
 </div>
 <div className="absolute inset-0 bg-gradient-to-r from-[var(--jerry-navy-deep)] via-[var(--jerry-navy-deep)]/85 to-[var(--jerry-navy-deep)]/50" />
 <div className={`${shell} relative z-10 py-10 sm:py-14 lg:py-20`}>
 <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
 <ol className="flex items-center gap-2 text-[0.7rem] sm:text-sm text-white/40">
 <li><Link href="/" className="hover:text-[var(--jerry-lime)] transition-colors cursor-pointer">Home</Link></li>
 <li aria-hidden="true">/</li>
 <li><Link href="/services" className="hover:text-[var(--jerry-lime)] transition-colors cursor-pointer">Services</Link></li>
 <li aria-hidden="true">/</li>
 <li className="font-semibold text-white/70 line-clamp-1">{service.title}</li>
 </ol>
 </nav>

 <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }} className="max-w-2xl">
 <div className="inline-flex items-center gap-1.5 bg-white/[0.06] border border-white/[0.08] px-3 py-1.5 text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-wider text-white/60 mb-4 sm:mb-5">
 <Clock className="h-3 w-3 text-[var(--jerry-lime)]" /> {service.turnaround}
 </div>
 <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.1]">
 {service.title}
 </h1>
 <p className="mt-3 sm:mt-4 text-[0.85rem] sm:text-base lg:text-lg leading-relaxed text-white/55 max-w-xl">
 {service.summary}
 </p>
 <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
 <Link href="/contact" className="inline-flex justify-center items-center gap-2 bg-[var(--jerry-lime)] px-6 py-3 sm:px-7 sm:py-3.5 text-[0.7rem] sm:text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer w-full sm:w-auto">
 Request a Quote <ArrowRight className="h-4 w-4" />
 </Link>
 <a href={`tel:${siteConfig.cleanPhone}`} className="inline-flex justify-center items-center gap-2 border border-white/15 px-6 py-3 sm:px-7 sm:py-3.5 text-[0.7rem] sm:text-[0.78rem] font-bold text-white hover:bg-white/5 transition-colors cursor-pointer w-full sm:w-auto">
 <Phone className="h-4 w-4" /> {siteConfig.phone}
 </a>
 </div>
 </motion.div>
 </div>
 <div className="h-px bg-gradient-to-r from-transparent via-[var(--jerry-lime)]/15 to-transparent" />
 </section>

 {/* Main Content */}
 <section className="bg-white py-12 sm:py-16 lg:py-24">
 <div className={shell}>
 <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16 items-start">

 {/* Left — content */}
 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45 }}>
 <p className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[var(--jerry-navy-light)] mb-2.5">About This Service</p>
 <h2 className="text-xl font-extrabold text-[var(--jerry-navy)] sm:text-2xl lg:text-3xl mb-4 sm:mb-6 leading-tight">
 {service.title} for Katy Area Homeowners
 </h2>
 <div className="text-[0.85rem] sm:text-[0.95rem] leading-[1.8] sm:leading-[1.9] text-slate-500">
 <p>{service.longDescription}</p>
 </div>

 {/* Jerry's take — owner expert quote (GEO/E-E-A-T signal) */}
 <figure className="mt-8 sm:mt-10 bg-[var(--jerry-cream)] border-l-4 border-[var(--jerry-lime)] p-5 sm:p-6">
 <div className="flex items-start gap-4">
 <div className="relative shrink-0 h-14 w-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
 <NextImage
 src="/pictures/selfie.jpg"
 alt="Jerry W. Pilley — Owner & Lead Roofer, Jerry's Roofing Katy TX"
 width={56}
 height={56}
 className="object-cover h-full w-full"
 sizes="56px"
 />
 </div>
 <div className="flex-1 min-w-0">
 <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--jerry-navy-light)] mb-1.5">Jerry&apos;s take</p>
 <blockquote className="text-[0.9rem] sm:text-[0.95rem] italic text-slate-700 leading-relaxed">
 &quot;On {service.title.toLowerCase()} I give every Katy-area homeowner the same thing I&apos;d want on my own house: an honest on-roof inspection, a flat written price before we start, and the truth about whether the job even needs to happen. That&apos;s how we&apos;ve kept 5 stars across {siteConfig.reviewCount}+ Google reviews.&quot;
 </blockquote>
 <figcaption className="mt-2.5 text-xs font-bold text-[var(--jerry-navy-deep)]">
 — Jerry W. Pilley <span className="font-normal text-slate-500">· Owner & Lead Roofer, {siteConfig.yearsExperience} years experience</span>
 </figcaption>
 </div>
 </div>
 </figure>

 <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-100">
 <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--jerry-navy)] mb-4 sm:mb-5">What&apos;s Included</h3>
 <ul className="space-y-3 sm:space-y-4">
 {service.details.map((detail) => (
 <li key={detail} className="flex items-start gap-3">
 <div className="mt-1 shrink-0 h-4 w-4 bg-[var(--jerry-lime)]/15 flex items-center justify-center">
 <CheckCircle2 className="h-3 w-3 text-[var(--jerry-navy)]" />
 </div>
 <span className="text-[0.85rem] sm:text-[0.92rem] text-slate-600 leading-relaxed">{detail}</span>
 </li>
 ))}
 </ul>
 </div>

 {/* AEO / GEO Process Section */}
 {service.process && (
 <div className="mt-12 pt-10 border-t border-slate-100">
 <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--jerry-navy-light)] mb-2">Clear &amp; Transparent</h3>
 <h3 className="text-xl font-extrabold text-[var(--jerry-navy)] sm:text-2xl mb-6 leading-tight">How It Works</h3>
 <div className="grid gap-4 sm:grid-cols-3">
 {service.process.map((step, idx) => (
 <div key={idx} className="bg-slate-50 border border-slate-100 p-5 hover:border-slate-300 transition-colors">
 <span className="text-[2.25rem] font-black text-[var(--jerry-lime)] leading-none block mb-3">0{idx + 1}</span>
 <h4 className="text-[0.85rem] font-extrabold text-[var(--jerry-navy)] mb-2 uppercase tracking-wide">{step.title}</h4>
 <p className="text-[0.8rem] text-slate-500 leading-relaxed">{step.desc}</p>
 </div>
 ))}
 </div>
 </div>
 )}

 {/* AEO / Chatbot Optimized FAQ Accordion */}
 {service.faqs && (
 <div className="mt-12 pt-10 border-t border-slate-100">
 <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--jerry-navy-light)] mb-2">Service Knowledge</h3>
 <h3 className="text-xl font-extrabold text-[var(--jerry-navy)] sm:text-2xl mb-6 leading-tight">Frequently Asked Questions</h3>
 <div className="space-y-3">
 {service.faqs.map((faq, idx) => (
 <details key={idx} className="group bg-white border border-slate-200 open:border-[var(--jerry-navy)]/30 transition-colors duration-200">
 <summary className="flex items-center justify-between cursor-pointer p-4 font-bold text-[0.85rem] text-[var(--jerry-navy)] select-none list-none [&::-webkit-details-marker]:hidden">
 <span>{faq.q}</span>
 <ChevronDown className="h-4 w-4 text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-4" />
 </summary>
 <div className="px-4 pb-4 pt-1 text-[0.9rem] text-slate-600 leading-relaxed border-t border-slate-50 mt-1">
 {faq.a}
 </div>
 </details>
 ))}
 </div>
 </div>
 )}

 {/* Trust row */}
 <div className="mt-10 flex flex-wrap gap-3">
 {[
 { icon: Shield, label: 'Fully Insured' },
 { icon: ThumbsUp, label: 'Honest Pricing' },
 { icon: Award, label: 'Premium Materials' },
 ].map((item) => (
 <div key={item.label} className="flex items-center gap-2 bg-[var(--jerry-cream)] border border-slate-100 px-4 py-2">
 <item.icon className="h-3.5 w-3.5 text-[var(--jerry-navy)]" />
 <span className="text-[0.72rem] font-semibold text-[var(--jerry-navy)]">{item.label}</span>
 </div>
 ))}
 </div>
 </motion.div>

 {/* Right — sidebar */}
 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45, delay: 0.1 }} className="lg:sticky lg:top-28">
 {/* Service photo */}
 <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 mb-5">
 <NextImage
 src={service.image}
 alt={`${service.title} in Katy, Texas by Jerrys Roofing`}
 fill
 sizes="(min-width:1024px) 40vw, 100vw"
 className="object-cover"
 />
 <div className="absolute top-3 left-3 inline-flex items-center bg-[var(--jerry-lime)] px-3 py-1.5">
 <span className="text-[0.55rem] font-extrabold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)]">
 Real Jerrys Roofing project
 </span>
 </div>
 </div>

 {/* Quick details */}
 <div className=" border border-slate-200 overflow-hidden">
 <div className="px-5 py-3.5 bg-[var(--jerry-navy)]">
 <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/80">Quick Details</h3>
 </div>
 <div className="divide-y divide-slate-100 text-sm">
 {[
 ['Timeline', service.turnaround],
 ['Estimate', 'Free — No Obligation'],
 ['Service Area', 'Katy & Surrounding'],
 ['Insurance', 'Fully Covered'],
 ].map(([label, value]) => (
 <div key={label} className="px-5 py-3 flex justify-between items-center">
 <span className="text-slate-400 font-medium">{label}</span>
 <span className="font-semibold text-[var(--jerry-navy)]">{value}</span>
 </div>
 ))}
 </div>
 <div className="p-4 bg-slate-50/80 border-t border-slate-100">
 <Link href="/contact" className="block w-full text-center bg-[var(--jerry-lime)] py-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer">
 Request a Quote
 </Link>
 </div>
 </div>

 {/* Phone */}
 <div className="mt-4 bg-[var(--jerry-navy)] p-5 text-center">
 <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/40 mb-1.5">Call or Text Anytime</p>
 <a href={`tel:${siteConfig.cleanPhone}`} className="text-xl font-extrabold text-[var(--jerry-lime)] hover:text-white transition-colors cursor-pointer">
 {siteConfig.phone}
 </a>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

 {/* Real project photos for this service */}
 {relatedPhotos.length > 0 && (
 <section className="bg-slate-50 py-12 sm:py-16 border-t border-slate-100">
 <div className={shell}>
 <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
 <div>
 <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--jerry-navy-light)] mb-2">Recent Jobs</p>
 <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] sm:text-3xl tracking-[-0.02em] leading-tight">
 Real {service.title.toLowerCase()} work from Katy homes.
 </h2>
 </div>
 <Link
 href="/gallery"
 className="inline-flex items-center gap-2 text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy)] hover:text-[var(--jerry-navy-light)] transition-colors cursor-pointer self-start sm:self-auto shrink-0"
 >
 Full Gallery <ArrowRight className="h-3.5 w-3.5" />
 </Link>
 </div>

 <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
 {relatedPhotos.map((photo) => (
 <Link
 key={photo.src}
 href="/gallery"
 className="group relative block overflow-hidden aspect-square bg-slate-100"
 aria-label={`View ${photo.caption} in full gallery`}
 >
 <NextImage
 src={photo.src}
 alt={photo.alt}
 fill
 sizes="(min-width:640px) 25vw, 50vw"
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
 <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[var(--jerry-lime)] leading-tight">
 {photo.caption}
 </p>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>
 )}

 {/* Other Services */}
 <section className="bg-[var(--jerry-cream)] py-14 sm:py-20 border-t border-slate-100">
 <div className={shell}>
 <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--jerry-navy-light)] mb-3">Explore More</p>
 <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] sm:text-3xl mb-8">Other Services We Offer</h2>
 <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
 {otherServices.slice(0, 3).map((s) => {
 const Icon = serviceIconMap[s.slug] || Home;
 return (
 <Link
 key={s.slug}
 href={`/services/${s.slug}`}
 className="group flex items-start gap-4 border border-slate-200 bg-white p-5 hover:shadow-md hover:border-[var(--jerry-navy)]/15 transition-all cursor-pointer"
 >
 <div className="shrink-0 h-10 w-10 bg-[var(--jerry-navy)]/[0.06] flex items-center justify-center group-hover:bg-[var(--jerry-navy)]/[0.1] transition-colors">
 <Icon className="h-4.5 w-4.5 text-[var(--jerry-navy)]" />
 </div>
 <div className="min-w-0">
 <h3 className="text-sm font-bold text-[var(--jerry-navy)] group-hover:text-[var(--jerry-navy-light)] transition-colors">{s.title}</h3>
 <p className="mt-1 text-[0.78rem] text-slate-500 line-clamp-2 leading-relaxed">{s.summary}</p>
 </div>
 </Link>
 );
 })}
 </div>
 <div className="mt-8 text-center">
 <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--jerry-navy)] hover:text-[var(--jerry-navy-light)] transition-colors cursor-pointer">
 View All Services <ArrowRight className="h-4 w-4" />
 </Link>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="bg-[var(--jerry-navy)] py-16 sm:py-20">
 <div className={`${shell} text-center max-w-2xl mx-auto`}>
 <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">Ready to get started?</h2>
 <p className="mt-4 text-base text-white/50 leading-relaxed">
 Honesty &mdash; we do what we say. Request a quote and Jerry will get back to you with a clear, written estimate. No pressure, no hidden fees.
 </p>
 <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
 <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-8 py-4 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer">
 Request a Quote <ArrowRight className="h-4 w-4" />
 </Link>
 <a href={`tel:${siteConfig.cleanPhone}`} className="inline-flex items-center gap-2 border border-white/15 px-8 py-4 text-[0.78rem] font-bold text-white hover:bg-white/5 transition-colors cursor-pointer">
 <Phone className="h-4 w-4" /> {siteConfig.phone}
 </a>
 </div>
 </div>
 </section>
 </>
 );
}
