import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '../config';
import GalleryClient from './GalleryClient';
import { galleryPhotos } from '../galleryData';

export const metadata: Metadata = {
 title: "Our Work — Roof Replacement, Gutters & Exterior Photos | Katy, Texas | Jerrys Roofing",
 description:
 "See real roof replacement, Roof Rejoov, gutter installation, siding, and painting projects completed by Jerrys Roofing across Katy, Texas, Cypress, Cinco Ranch & Richmond. Before & after gallery.",
 alternates: { canonical: '/gallery' },
 openGraph: {
 title: "Project Gallery | Jerrys Roofing — Katy, Texas",
 description: "Real roofing and exterior projects from Katy, Cypress, Cinco Ranch & surrounding areas.",
 url: 'https://roofingbyjerry.com/gallery',
 },
};

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

export default function GalleryPage() {
 const firstSix = galleryPhotos.slice(0, 6);

 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 '@context': 'https://schema.org',
 '@type': 'BreadcrumbList',
 itemListElement: [
 { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
 { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${siteConfig.domain}/gallery` },
 ],
 }),
 }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 '@context': 'https://schema.org',
 '@type': 'ImageGallery',
 name: 'Jerrys Roofing Project Gallery',
 description: 'Real roofing, gutter, siding, and exterior projects by Jerrys Roofing in Katy, Texas.',
 image: firstSix.map((ph) => `${siteConfig.domain}${ph.src}`),
 }),
 }}
 />

 {/* ═══ SUB-HERO ═══ */}
 <section className="relative overflow-hidden bg-[var(--jerry-navy-deep)]">
 <div className="absolute inset-0">
 <Image
 src={galleryPhotos[0].src}
 alt=""
 fill
 sizes="100vw"
 priority
 className="object-cover opacity-[0.18]"
 />
 </div>
 <div className="absolute inset-0 bg-gradient-to-r from-[var(--jerry-navy-deep)] via-[var(--jerry-navy-deep)]/90 to-[var(--jerry-navy-deep)]/50" />
 <div className={`${shell} relative z-10 py-14 sm:py-20`}>
 <nav aria-label="Breadcrumb" className="mb-6">
 <ol className="flex items-center gap-2 text-xs sm:text-sm text-white/40">
 <li><Link href="/" className="hover:text-[var(--jerry-lime)] transition-colors cursor-pointer">Home</Link></li>
 <li aria-hidden="true" className="text-white/25">/</li>
 <li className="font-semibold text-white/70">Gallery</li>
 </ol>
 </nav>
 <span className="inline-flex items-center gap-2 text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[var(--jerry-lime)]">
 <span className="h-px w-6 bg-[var(--jerry-lime)]/50" />
 Project Gallery · {galleryPhotos.length} Photos
 </span>
 <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[0.98] tracking-[-0.035em] text-white max-w-2xl">
 Our work speaks for itself.
 </h1>
 <p className="mt-5 max-w-xl text-base sm:text-lg text-white/60 leading-relaxed">
 Real Jerrys Roofing projects — roof replacements, Roof Rejoov, gutters and more — across Katy, Cypress, Cinco Ranch, Richmond and Fulshear.
 </p>
 </div>
 <div className="h-px bg-gradient-to-r from-transparent via-[var(--jerry-lime)]/30 to-transparent" />
 </section>

 {/* Gallery (filters + grid + lightbox) */}
 <GalleryClient />

 {/* ═══ CTA ═══ */}
 <section className="relative isolate bg-[var(--jerry-navy)] py-16 sm:py-20 overflow-hidden">
 <div className="absolute inset-0 pointer-events-none">
 <div className="absolute -top-24 -right-24 w-80 h-80 bg-[var(--jerry-lime)]/10 blur-[100px] rounded-full" />
 </div>
 <div className={`${shell} relative z-10`}>
 <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
 <div className="max-w-lg">
 <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[var(--jerry-lime)] mb-3">Next Project?</p>
 <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.02em] leading-[1.05]">
 Have a project? Let&apos;s talk.
 </h2>
 <p className="mt-4 text-base text-white/55 leading-relaxed">
 Trusted roofing &amp; exterior services for homeowners across Katy, Cypress &amp; beyond. Free inspection, honest quote.
 </p>
 </div>
 <div className="flex flex-col sm:flex-row gap-3 shrink-0">
 <Link
 href="/contact"
 className="inline-flex items-center justify-center gap-2 bg-[var(--jerry-lime)] px-7 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer rounded-md"
 >
 Request a Quote <ArrowRight className="h-4 w-4" />
 </Link>
 <a
 href={`tel:${siteConfig.cleanPhone}`}
 className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.15em] text-white hover:bg-white/5 transition-colors cursor-pointer rounded-md"
 >
 <Phone className="h-4 w-4" /> {siteConfig.phone}
 </a>
 </div>
 </div>
 </div>
 </section>
 </>
 );
}
