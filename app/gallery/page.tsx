import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, TreePine } from 'lucide-react';
import { siteConfig } from '../config';

export const metadata: Metadata = {
  title: 'Our Work — Tree Trimming, Removal & Landscaping Photos | Humble TX',
  description:
    'See real tree trimming, removal, stump grinding, and landscaping projects completed by José Hernández Tree Service across Humble, Dayton, Baytown, Spring, The Woodlands & Conroe. Before & after gallery.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Project Gallery | José Hernández Tree Service — Humble TX',
    description: 'Real tree service and landscaping projects from Humble, Spring, Baytown & surrounding areas.',
    url: 'https://jhernandeztreeservice.com/gallery',
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
      <section className="relative overflow-hidden bg-[var(--hernandez-forest-deep)]">
        <div className="absolute inset-0">
          <Image src="/tree_pro/storm_cleanup.png" alt="" fill sizes="100vw" className="object-cover opacity-15" />
        </div>
        <div className={`${shell} relative z-10 py-12 sm:py-16`}>
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-[var(--hernandez-gold)] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white/70">Gallery</li>
            </ol>
          </nav>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)] mb-3">
            Project Gallery
          </p>
          <h1 className="text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl max-w-lg">
            Our work speaks for itself.
          </h1>
          <p className="mt-3 text-base text-white/50 leading-relaxed max-w-lg">
            Real projects from Humble, Dayton, Baytown, Spring, The Woodlands, Conroe
            and surrounding areas.
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--hernandez-gold)]/20 to-transparent" />
      </section>

      {/* ═══ GALLERY — Coming Soon ═══ */}
      <section className="bg-white py-16 sm:py-20">
        <div className={shell}>
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-[var(--hernandez-cream)] py-24 sm:py-32 px-6 text-center">
            <TreePine className="h-14 w-14 text-[var(--hernandez-forest-deep)] opacity-20 mb-5" />
            <span className="inline-block rounded-full bg-[var(--hernandez-gold)]/15 px-5 py-2 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[var(--hernandez-gold)] mb-4">Coming Soon</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--hernandez-forest-deep)]">Project photos on the way!</h2>
            <p className="mt-3 text-base text-slate-500 max-w-lg leading-relaxed">
              We&apos;re collecting photos from our tree trimming, removal, stump grinding, landscaping, and storm cleanup jobs across Humble, Dayton, Baytown, Spring, The Woodlands &amp; Conroe. Check back soon to see our work in action.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--hernandez-gold)] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:brightness-110 transition-all"
            >
              Get a Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA — horizontal ═══ */}
      <section className="bg-[var(--hernandez-forest-deep)] py-14 sm:py-16">
        <div className={shell}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Have a project? Let&apos;s talk.</h2>
              <p className="mt-2 text-base text-white/50">
                Affordable tree service &amp; landscaping for homeowners across Humble, Spring, Baytown &amp; beyond.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--hernandez-gold)] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:brightness-110 transition-all"
              >
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${siteConfig.cleanPhone}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/5 transition-all"
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
