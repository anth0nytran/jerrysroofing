import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from './posts';
import { siteConfig } from '../config';

export const metadata: Metadata = {
  title: 'Tree Care Blog — Tips & Guides for Humble, Spring & Baytown Homeowners',
  description:
    'Expert tree care tips, cost guides, and seasonal advice for homeowners in Humble, Dayton, Baytown, Spring, The Woodlands & Conroe. From José Hernández Tree Service — 25+ years of experience.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Tree Care Blog | José Hernández Tree Service — Humble TX',
    description: 'Expert tree care tips and guides for Humble, Spring, Baytown & area homeowners.',
    url: 'https://jhernandeztreeservice.com/blog',
  },
};

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

export default function BlogPage() {
  return (
    <>
      {/* ── JSON-LD: BreadcrumbList ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://jhernandeztreeservice.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://jhernandeztreeservice.com/blog',
              },
            ],
          }),
        }}
      />

      {/* ── JSON-LD: ItemList (blog posts) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Tree Care Blog — Humble, Spring, Baytown & Beyond',
            'description': 'Expert tree care tips, cost guides, and seasonal advice for homeowners in Humble, Spring, Baytown & surrounding areas.',
            'url': 'https://jhernandeztreeservice.com/blog',
            'mainEntity': {
              '@type': 'ItemList',
              'itemListElement': blogPosts.map((post, i) => ({
                '@type': 'ListItem',
                'position': i + 1,
                'url': `https://jhernandeztreeservice.com/blog/${post.slug}`,
                'name': post.title,
              })),
            },
          }),
        }}
      />

      {/* Sub-hero */}
      <section className="relative overflow-hidden bg-[var(--hernandez-forest-deep)]">
        <div className="absolute inset-0">
          <Image src="/tree_pro/home_3.png" alt="" fill sizes="100vw" className="object-cover opacity-15" />
        </div>
        <div className={`${shell} relative z-10 py-12 sm:py-16`}>
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-[var(--hernandez-gold)] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white/70">Blog</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.1]">
            Tree Care Blog
          </h1>
          <p className="mt-3 text-base text-white/50 leading-relaxed max-w-lg">
            Tips, cost guides, and seasonal advice from the crew at {siteConfig.businessName}.
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--hernandez-gold)]/20 to-transparent" />
      </section>

      {/* ── Post Grid ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className={shell}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });

              return (
                <article
                  key={post.slug}
                  className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  {/* Card body */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    {/* Category badge */}
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--hernandez-cream)] px-3 py-1 text-xs font-semibold text-[var(--hernandez-forest-deep)] mb-4">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="font-[family-name:var(--font-app-display)] text-xl font-bold text-[var(--hernandez-forest-deep)] mb-3 group-hover:text-[var(--hernandez-gold)] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 relative">
                        {post.title}
                      </Link>
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                      {post.description}
                    </p>

                    {/* Meta row */}
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-5">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formattedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Read more */}
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--hernandez-gold)] group-hover:gap-2.5 transition-all">
                      Read More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[var(--hernandez-forest-deep)] py-12 sm:py-14">
        <div className={shell}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">Need tree service?</h2>
              <p className="mt-1 text-sm text-white/50">Affordable options for Humble, Spring, Baytown &amp; beyond.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--hernandez-gold)] px-6 py-3 text-sm font-bold text-white hover:brightness-110 transition"
              >
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${siteConfig.cleanPhone}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-bold text-white hover:bg-white/5 transition"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
