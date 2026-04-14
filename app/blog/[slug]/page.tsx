import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { allBlogPosts, getPostBySlug, getAllSlugs } from '../posts';
import { siteConfig } from '../../config';

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

/**
 * ISR: regenerate post pages hourly so staged posts go live on schedule
 * and any stale `related posts` strips refresh as new posts appear.
 */
export const revalidate = 3600;

/**
 * Allow dynamic rendering for slugs not in generateStaticParams at build time —
 * this is what lets a staged post (once its publish date arrives) be served
 * even if the blog index hasn't regenerated yet.
 */
export const dynamicParams = true;

/* ── Static params for all slugs ── */
export function generateStaticParams() {
 return getAllSlugs().map((slug) => ({ slug }));
}

/* ── Dynamic metadata per post ── */
export async function generateMetadata({
 params,
}: {
 params: Promise<{ slug: string }>;
}): Promise<Metadata> {
 const { slug } = await params;
 const post = getPostBySlug(slug);

 if (!post) {
 return { title: 'Post Not Found' };
 }

 return {
 title: post.title,
 description: post.description,
 keywords: post.keywords,
 alternates: { canonical: `/blog/${post.slug}` },
 openGraph: {
 title: post.title,
 description: post.description,
 url: `https://roofingbyjerry.com/blog/${post.slug}`,
 type: 'article',
 publishedTime: post.date,
 authors: ["Jerrys Roofing"],
 siteName: "Jerrys Roofing",
 },
 twitter: {
 card: 'summary_large_image',
 title: post.title,
 description: post.description,
 },
 };
}

/* ── Page component ── */
export default async function BlogPostPage({
 params,
}: {
 params: Promise<{ slug: string }>;
}) {
 const { slug } = await params;
 const post = getPostBySlug(slug);

 if (!post) {
 return (
 <section className="py-20 sm:py-24 text-center">
 <div className={shell}>
 <h1 className="text-3xl font-bold text-slate-900 mb-4">Post Not Found</h1>
 <p className="text-slate-500 mb-8">The blog post you are looking for does not exist.</p>
 <Link
 href="/blog"
 className="inline-flex items-center gap-2 text-[var(--jerry-lime)] font-semibold hover:underline"
 >
 <ArrowLeft className="h-4 w-4" /> Back to Blog
 </Link>
 </div>
 </section>
 );
 }

 const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
 year: 'numeric',
 month: 'long',
 day: 'numeric',
 });

 const formattedUpdated = post.dateModified
 ? new Date(post.dateModified).toLocaleDateString('en-US', {
 year: 'numeric',
 month: 'long',
 day: 'numeric',
 })
 : null;

 const authorName = post.author?.name || 'Jerry W. Pilley';
 const authorRole = post.author?.role || 'Owner & Lead Roofer';

 // Wrap any inline <table> in the post content with a scroll-friendly wrapper
 // so wide cost/comparison tables become horizontally scrollable on mobile.
 const processedContent = post.content
 .replace(/<table([^>]*)>/g, '<div class="table-wrap"><table$1>')
 .replace(/<\/table>/g, '</table></div>');

 /* Related posts: same category first, then most recent, excluding current */
 const relatedPosts = allBlogPosts
 .filter((p) => p.slug !== post.slug)
 .sort((a, b) => {
 if (a.category === post.category && b.category !== post.category) return -1;
 if (b.category === post.category && a.category !== post.category) return 1;
 return new Date(b.date).getTime() - new Date(a.date).getTime();
 })
 .slice(0, 3);

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
 item: 'https://roofingbyjerry.com',
 },
 {
 '@type': 'ListItem',
 position: 2,
 name: 'Blog',
 item: 'https://roofingbyjerry.com/blog',
 },
 {
 '@type': 'ListItem',
 position: 3,
 name: post.title,
 item: `https://roofingbyjerry.com/blog/${post.slug}`,
 },
 ],
 }),
 }}
 />

 {/* ── JSON-LD: Article ── */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 '@context': 'https://schema.org',
 '@type': 'Article',
 headline: post.title,
 description: post.description,
 datePublished: post.date,
 dateModified: post.dateModified || post.date,
 author: {
 '@type': 'Person',
 name: post.author?.name || 'Jerry W. Pilley',
 jobTitle: post.author?.role || 'Owner & Lead Roofer, Jerrys Roofing',
 url: 'https://roofingbyjerry.com/about',
 worksFor: {
 '@type': 'Organization',
 name: 'Jerrys Roofing',
 url: 'https://roofingbyjerry.com',
 },
 },
 publisher: {
 '@type': 'Organization',
 name: "Jerrys Roofing",
 url: 'https://roofingbyjerry.com',
 logo: {
 '@type': 'ImageObject',
 url: 'https://roofingbyjerry.com/roofing/jerry_logo.svg',
 },
 },
 mainEntityOfPage: {
 '@type': 'WebPage',
 '@id': `https://roofingbyjerry.com/blog/${post.slug}`,
 },
 keywords: post.keywords.join(', '),
 }),
 }}
 />

 {/* Sub-hero */}
 <section className="relative overflow-hidden bg-[var(--jerry-navy-deep)]">
 <div className="absolute inset-0">
 <Image src="/roofing/real/02-hero-brick-twostory-pool.jpg" alt="" fill sizes="100vw" className="object-cover opacity-15" />
 </div>
 <div className={`${shell} relative z-10 py-10 sm:py-14`}>
 <nav aria-label="Breadcrumb" className="mb-5">
 <ol className="flex flex-wrap items-center gap-2 text-sm text-white/40">
 <li><Link href="/" className="hover:text-[var(--jerry-lime)] transition-colors">Home</Link></li>
 <li aria-hidden="true">/</li>
 <li><Link href="/blog" className="hover:text-[var(--jerry-lime)] transition-colors">Blog</Link></li>
 <li aria-hidden="true">/</li>
 <li className="font-semibold text-white/70 line-clamp-1">{post.title}</li>
 </ol>
 </nav>

 <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 text-xs font-semibold text-[var(--jerry-lime)] mb-4">
 <Tag className="h-3 w-3" />
 {post.category}
 </span>

 <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.1] max-w-3xl">
 {post.title}
 </h1>

 <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-white/40">
 <span className="flex items-center gap-1.5">
 <Calendar className="h-4 w-4" />
 {formattedUpdated ? `Updated ${formattedUpdated}` : formattedDate}
 </span>
 <span className="flex items-center gap-1.5">
 <Clock className="h-4 w-4" />
 {post.readTime}
 </span>
 <span>By {authorName}, {authorRole}</span>
 </div>
 </div>
 <div className="h-px bg-gradient-to-r from-transparent via-[var(--jerry-lime)]/20 to-transparent" />
 </section>

 {/* ── Article Content ── */}
 <section className="py-14 sm:py-18 bg-white">
 <div className={shell}>
 <div className="max-w-3xl">
 {/* TL;DR / Quick Answer Box — only render if content does not already contain an inline tldr block */}
 {post.tldr && !post.content.includes('class="tldr"') && (
 <div className="mb-10 border-l-4 border-[var(--jerry-lime)] bg-slate-50 p-5 sm:p-6 rounded-r-lg">
 <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-navy-deep)] mb-2">
 Quick Answer
 </p>
 <p className="text-[0.95rem] sm:text-base leading-relaxed text-slate-800">
 {post.tldr}
 </p>
 </div>
 )}

 <article
 className="blog-prose"
 dangerouslySetInnerHTML={{ __html: processedContent }}
 />

 {/* Author Bio — E-E-A-T signal */}
 <div className="mt-14 pt-8 border-t border-slate-200 flex items-start gap-4">
 <div className="h-14 w-14 rounded-full bg-[var(--jerry-navy-deep)] text-[var(--jerry-lime)] flex items-center justify-center text-lg font-extrabold shrink-0">
 JP
 </div>
 <div>
 <p className="text-sm font-bold text-[var(--jerry-navy-deep)]">
 {authorName}
 </p>
 <p className="text-xs text-slate-500 mb-2">
 {authorRole} &middot; 7 years roofing experience in the Katy area
 </p>
 <p className="text-sm text-slate-600 leading-relaxed">
 Jerry personally inspects every roof Jerrys Roofing works on across Katy, Cypress, Cinco Ranch, Richmond, Fulshear, and Sugar Land. He installs IKO, CertainTeed, GAF, and F-Wave synthetic shingles and offers Roof Rejoov bio-based shingle restoration.
 {formattedUpdated && (
 <> Last updated <strong>{formattedUpdated}</strong>.</>
 )}
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ── Related Posts ── */}
 <section className="bg-slate-50 py-14 sm:py-18 border-t border-slate-200">
 <div className={shell}>
 <h2 className="font-[family-name:var(--font-app-display)] text-2xl sm:text-3xl font-bold text-[var(--jerry-navy-deep)] mb-8">
 More from Our Blog
 </h2>
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {relatedPosts.map((related) => {
 const relDate = new Date(related.date).toLocaleDateString('en-US', {
 year: 'numeric',
 month: 'short',
 day: 'numeric',
 });
 return (
 <Link
 key={related.slug}
 href={`/blog/${related.slug}`}
 className="group flex flex-col border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
 >
 <span className="inline-flex w-fit items-center gap-1.5 bg-[var(--jerry-cream)] px-2.5 py-0.5 text-xs font-semibold text-[var(--jerry-navy-deep)] mb-3">
 <Tag className="h-3 w-3" />
 {related.category}
 </span>
 <h3 className="font-[family-name:var(--font-app-display)] text-lg font-bold text-[var(--jerry-navy-deep)] group-hover:text-[var(--jerry-lime)] transition-colors leading-snug mb-2">
 {related.title}
 </h3>
 <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">
 {related.description}
 </p>
 <span className="text-xs text-slate-400">{relDate} &middot; {related.readTime}</span>
 </Link>
 );
 })}
 </div>

 <div className="mt-10 text-center">
 <Link
 href="/blog"
 className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--jerry-lime)] hover:underline"
 >
 <ArrowLeft className="h-4 w-4" /> View All Posts
 </Link>
 </div>
 </div>
 </section>

 {/* ── CTA ── */}
 <section className="bg-[var(--jerry-navy-deep)] py-14 sm:py-16">
 <div className={`${shell} text-center`}>
 <h2 className="font-[family-name:var(--font-app-display)] text-3xl sm:text-4xl font-bold text-white mb-4">
 Ready for a Free Estimate?
 </h2>
 <p className="text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
 {siteConfig.businessName} serves Katy, Cypress, Cinco Ranch, Richmond,
 Fulshear, and surrounding areas. Honest pricing — call us or request your free estimate online.
 </p>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <Link
 href="/contact"
 className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-7 py-3.5 font-semibold text-white shadow-lg hover:brightness-110 transition"
 >
 Request a Quote <ArrowRight className="h-4 w-4" />
 </Link>
 <a
 href={`tel:${siteConfig.cleanPhone}`}
 className="inline-flex items-center gap-2 border-2 border-white/20 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition"
 >
 Call {siteConfig.phone}
 </a>
 </div>
 </div>
 </section>
 </>
 );
}
