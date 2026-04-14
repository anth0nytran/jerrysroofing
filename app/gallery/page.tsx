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

 {/* Sub-hero */}
 <section className="relative overflow-hidden bg-[var(--jerry-navy-deep)]">
 <div className="absolute inset-0">
 <Image
 src={galleryPhotos[0].src}
 alt=""
 fill
 sizes="100vw"
 priority
 className="object-cover opacity-20"
 />
 </div>
 <div className="absolute inset-0 bg-gradient-to-r from-[var(--jerry-navy-deep)] via-[var(--jerry-navy-deep)]/80 to-[var(--jerry-navy-deep)]/40" />
 <div className={`${shell} relative z-10 py-10 sm:py-14`}>
 <nav aria-label="Breadcrumb" className="mb-5">
 <ol className="flex items-center gap-2 text-sm text-white/40">
 <li><Link href="/" className="hover:text-[var(--jerry-lime)] transition-colors cursor-pointer">Home</Link></li>
 <li aria-hidden="true">/</li>
 <li className="font-semibold text-white/70">Gallery</li>
 </ol>
 </nav>
 <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--jerry-lime)] mb-3">
 Project Gallery · {galleryPhotos.length} Photos
 </p>
 <h1 className="text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl max-w-xl">
 Our work speaks for itself.
 </h1>
 <p className="mt-3 text-base text-white/60 leading-relaxed max-w-lg">
 Real Jerrys Roofing projects — roof replacements, Roof Rejoov, gutters and more — across Katy, Cypress, Cinco Ranch, Richmond and Fulshear.
 </p>
 </div>
 <div className="h-px bg-gradient-to-r from-transparent via-[var(--jerry-lime)]/20 to-transparent" />
 </section>

 {/* Gallery (filters + grid + lightbox) */}
 <GalleryClient />

 {/* CTA */}
 <section className="bg-[var(--jerry-navy)] py-12 sm:py-14">
 <div className={shell}>
 <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
 <div>
 <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Have a project? Let&apos;s talk.</h2>
 <p className="mt-2 text-base text-white/50">
 Trusted roofing &amp; exterior services for homeowners across Katy, Cypress &amp; beyond.
 </p>
 </div>
 <div className="flex flex-col sm:flex-row gap-3">
 <Link
 href="/contact"
 className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-all cursor-pointer"
 >
 Request a Quote <ArrowRight className="h-4 w-4" />
 </Link>
 <a
 href={`tel:${siteConfig.cleanPhone}`}
 className="inline-flex items-center gap-2 border border-white/15 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/5 transition-all cursor-pointer"
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
