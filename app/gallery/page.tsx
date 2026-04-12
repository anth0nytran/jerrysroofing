import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Hammer } from 'lucide-react';
import { siteConfig } from '../config';

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

 {/* Sub-hero */}
 <section className="relative overflow-hidden bg-[var(--jerry-navy-deep)]">
 <div className="absolute inset-0">
 <Image src="/roofing/jerry_service_replacement.png" alt="" fill sizes="100vw" className="object-cover opacity-15" />
 </div>
 <div className={`${shell} relative z-10 py-10 sm:py-14`}>
 <nav aria-label="Breadcrumb" className="mb-5">
 <ol className="flex items-center gap-2 text-sm text-white/40">
 <li><Link href="/" className="hover:text-[var(--jerry-lime)] transition-colors cursor-pointer">Home</Link></li>
 <li aria-hidden="true">/</li>
 <li className="font-semibold text-white/70">Gallery</li>
 </ol>
 </nav>
 <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--jerry-lime)] mb-3">
 Project Gallery
 </p>
 <h1 className="text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl max-w-lg">
 Our work speaks for itself.
 </h1>
 <p className="mt-3 text-base text-white/50 leading-relaxed max-w-lg">
 Real projects from Katy, Cypress, Cinco Ranch, Richmond and surrounding areas.
 </p>
 </div>
 <div className="h-px bg-gradient-to-r from-transparent via-[var(--jerry-lime)]/20 to-transparent" />
 </section>

 {/* Gallery — Coming Soon */}
 <section className="bg-white py-12 sm:py-16">
 <div className={shell}>
 <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 bg-[var(--jerry-cream)] py-16 sm:py-24 px-6 text-center">
 <Hammer className="h-14 w-14 text-[var(--jerry-navy)] opacity-20 mb-5" />
 <span className="inline-block bg-[var(--jerry-lime)]/15 px-5 py-2 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[var(--jerry-navy)] mb-4">Coming Soon</span>
 <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--jerry-navy)]">Project photos on the way!</h2>
 <p className="mt-3 text-base text-slate-500 max-w-lg leading-relaxed">
 We&apos;re collecting before &amp; after photos from our roof replacements, rejuvenations, gutter installs, siding, and painting projects across Katy, Cypress, Cinco Ranch &amp; Richmond. Check back soon to see our work in action.
 </p>
 <Link
 href="/contact"
 className="mt-8 inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-all cursor-pointer"
 >
 Request a Quote <ArrowRight className="h-4 w-4" />
 </Link>
 </div>
 </div>
 </section>

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
