import type { Metadata } from 'next';
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
    url: 'https://hernandeztreeservice.com/gallery',
  },
};

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

const projects = [
  { service: 'Tree Trimming', location: 'Humble' },
  { service: 'Storm Cleanup', location: 'Dayton' },
  { service: 'Tree Removal', location: 'Baytown' },
  { service: 'Stump Grinding', location: 'Spring' },
  { service: 'Landscaping', location: 'The Woodlands' },
  { service: 'Mulching', location: 'Conroe' },
  { service: 'Tree Removal', location: 'Humble' },
  { service: 'Storm Cleanup', location: 'Baytown' },
  { service: 'Tree Trimming', location: 'Spring' },
  { service: 'Stump Grinding', location: 'The Woodlands' },
  { service: 'Landscaping', location: 'Dayton' },
  { service: 'Mulching', location: 'Conroe' },
];

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

      {/* ═══ HERO — compact, left-aligned ═══ */}
      <section className="bg-[var(--hernandez-cream)] py-16 sm:py-20">
        <div className={shell}>
          <div className="max-w-2xl">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--hernandez-gold)] mb-3">
              Project Gallery
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-[var(--hernandez-forest-deep)] sm:text-5xl">
              Our work speaks for itself.
            </h1>
            <p className="mt-4 text-base text-slate-500 leading-relaxed">
              Real projects from Humble, Dayton, Baytown, Spring, The Woodlands, Conroe
              and surrounding areas. Every photo here is a job we completed.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY — mixed grid sizes for visual interest ═══ */}
      <section className="bg-white py-16 sm:py-20">
        <div className={shell}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => {
              // Make first and every 5th card taller for visual variety
              const isFeatured = i === 0 || i === 4 || i === 8;

              return (
                <div
                  key={`${project.service}-${project.location}-${i}`}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-[var(--hernandez-cream)] ${
                    isFeatured ? 'sm:row-span-2' : ''
                  }`}
                >
                  {/* Placeholder */}
                  <div className={`relative flex flex-col items-center justify-center gap-3 ${
                    isFeatured ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}>
                    <TreePine className="h-10 w-10 text-[var(--hernandez-forest-deep)] opacity-15" />
                    <span className="text-4xl font-extrabold leading-none text-[var(--hernandez-gold)] opacity-60">?</span>
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-slate-400">Client Photo</span>
                  </div>

                  {/* Info strip */}
                  <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-sm border-t border-slate-100 px-4 py-3 flex items-center justify-between">
                    <div>
                      <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[var(--hernandez-gold)]">{project.service}</span>
                      <p className="text-sm font-semibold text-[var(--hernandez-forest-deep)]">{project.location}, TX</p>
                    </div>
                  </div>
                </div>
              );
            })}
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
