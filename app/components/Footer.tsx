import Link from 'next/link';
import {
 ArrowRight,
 CheckCircle2,
 Shield,
 Star,
 Award,
 Phone,
} from 'lucide-react';
import { siteConfig, serviceData } from '../config';
import { serviceAreaData } from '../serviceAreaData';
import { BrandLogo } from './BrandLogo';

export function Footer() {
 const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

 return (
 <footer className="bg-[var(--jerry-ink)] text-white">

 {/* MAIN GRID */}
 <div className={`${shell} py-12 sm:py-16`}>
 <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

 {/* 0. Brand & Contact */}
 <div className="sm:col-span-2 lg:col-span-1">
 <Link href="/" className="inline-block">
 <BrandLogo
 className="h-10 w-auto sm:h-12"
 sizes="(min-width: 640px) 220px, 180px"
 />
 </Link>
 <p className="mt-4 text-[0.8rem] text-white/50 max-w-md leading-relaxed font-medium">
 Trusted roofing contractor in Katy, Texas. 7 years roofing experience. Roof replacement, Roof Rejoov, gutters, siding &amp; painting across Katy, Cypress, Cinco Ranch, Richmond &amp; Fulshear. Since 2024. Honest pricing.
 </p>
 <div className="mt-6 space-y-4">
 <div>
 <div className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--jerry-lime)] mb-1">Call or Text Anytime</div>
 <a href={`tel:${siteConfig.cleanPhone}`} className="text-xl font-extrabold text-white hover:text-[var(--jerry-lime)] transition-colors">{siteConfig.phone}</a>
 </div>
 <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--jerry-lime)] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-all cursor-pointer rounded-lg">
 Request a Quote
 </Link>
 </div>
 </div>

 {/* 1. Services */}
 <div>
 <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--jerry-lime)] mb-6">Our Services</h4>
 <ul className="space-y-4 text-[0.85rem] text-white/50 font-medium">
 {serviceData.map((s) => (
 <li key={s.slug}>
 <Link href={s.slug === 'roof-rejoov' ? '/roof-rejoov' : `/services/${s.slug}`} className="hover:text-[var(--jerry-lime)] transition-colors flex items-center gap-2 cursor-pointer">
 <ArrowRight className="h-3 w-3 text-[var(--jerry-lime)]" /> {s.title}
 </Link>
 </li>
 ))}
 <li>
 <Link href="/services" className="hover:text-[var(--jerry-lime)] transition-colors flex items-center gap-2 cursor-pointer">
 <ArrowRight className="h-3 w-3 text-[var(--jerry-lime)]" /> Storm Damage &amp; Insurance Claims
 </Link>
 </li>
 </ul>
 </div>

 {/* 2. Service Areas */}
 <div>
 <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--jerry-lime)] mb-6">Cities We Serve</h4>
 <ul className="space-y-3 text-[0.85rem] text-white/50 font-medium">
 <li>
 <Link href="/service-area" className="hover:text-[var(--jerry-lime)] transition-colors flex items-center gap-2 cursor-pointer font-bold text-white/70">
 <ArrowRight className="h-3 w-3 text-[var(--jerry-lime)]" /> All Service Areas
 </Link>
 </li>
 {serviceAreaData.map((area) => (
 <li key={area.slug}>
 <Link
 href={`/service-area/${area.slug}`}
 className="hover:text-[var(--jerry-lime)] transition-colors flex items-center gap-2 cursor-pointer"
 >
 <ArrowRight className="h-3 w-3 text-[var(--jerry-lime)]" /> Roofing in {area.city}, TX
 </Link>
 </li>
 ))}
 <li>
 <Link href="/service-area" className="hover:text-[var(--jerry-lime)] transition-colors flex items-center gap-2 cursor-pointer text-white/40 italic">
 + Brookshire, Sealy, Sugar Land &amp; more
 </Link>
 </li>
 </ul>
 <div className="mt-8 pt-8 border-t border-white/10">
 <p className="text-[0.75rem] text-white/40 leading-relaxed font-medium">
 <span className="text-[var(--jerry-lime)] block mb-2 font-bold uppercase tracking-wider text-[0.6rem]">Communities We Serve</span>
 {siteConfig.neighborhoods}
 </p>
 </div>
 </div>

 {/* 3. Company */}
 <div>
 <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--jerry-lime)] mb-6">Resources</h4>
 <ul className="space-y-4 text-[0.85rem] text-white/50 font-medium">
 <li><Link href="/about" className="hover:text-[var(--jerry-lime)] transition-colors flex items-center gap-2 cursor-pointer"><ArrowRight className="h-3 w-3 text-white/20" /> About Jerrys Roofing</Link></li>
 <li><Link href="/roof-replacement-cost-katy-tx" className="hover:text-[var(--jerry-lime)] transition-colors flex items-center gap-2 cursor-pointer"><ArrowRight className="h-3 w-3 text-white/20" /> Roof Cost Guide (Katy)</Link></li>
 <li><Link href="/insurance-claims" className="hover:text-[var(--jerry-lime)] transition-colors flex items-center gap-2 cursor-pointer"><ArrowRight className="h-3 w-3 text-white/20" /> Texas Insurance Claim Guide</Link></li>
 <li><Link href="/glossary" className="hover:text-[var(--jerry-lime)] transition-colors flex items-center gap-2 cursor-pointer"><ArrowRight className="h-3 w-3 text-white/20" /> Roofing Glossary</Link></li>
 <li><Link href="/reviews" className="hover:text-[var(--jerry-lime)] transition-colors flex items-center gap-2 cursor-pointer"><ArrowRight className="h-3 w-3 text-white/20" /> Customer Reviews</Link></li>
 <li><Link href="/roof-rejoov" className="hover:text-[var(--jerry-lime)] transition-colors flex items-center gap-2 cursor-pointer"><ArrowRight className="h-3 w-3 text-white/20" /> Roof Rejoov</Link></li>
 <li><Link href="/texas-made" className="hover:text-[var(--jerry-lime)] transition-colors flex items-center gap-2 cursor-pointer"><ArrowRight className="h-3 w-3 text-white/20" /> Texas Made Products</Link></li>
 <li><Link href="/blog" className="hover:text-[var(--jerry-lime)] transition-colors flex items-center gap-2 cursor-pointer"><ArrowRight className="h-3 w-3 text-white/20" /> Roofing Blog</Link></li>
 <li><Link href="/contact" className="hover:text-[var(--jerry-lime)] transition-colors flex items-center gap-2 cursor-pointer"><ArrowRight className="h-3 w-3 text-white/20" /> Contact &amp; Free Estimate</Link></li>
 </ul>

 <div className="mt-8 pt-8 border-t border-white/10 space-y-4 text-[0.8rem] text-white/60 font-semibold">
 <div className="flex items-center gap-3"><Shield className="h-4 w-4 text-[var(--jerry-lime)]" /> Fully Licensed &amp; Insured</div>
 <div className="flex items-center gap-3"><Star className="h-4 w-4 fill-[var(--jerry-lime)] text-[var(--jerry-lime)]" /> {siteConfig.rating} Stars on Google</div>
 <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-[var(--jerry-lime)]" /> 7 Years Roofing Experience</div>
 <div className="flex items-center gap-3"><Award className="h-4 w-4 text-[var(--jerry-lime)]" /> IKO &middot; CertainTeed &middot; GAF &middot; F-Wave</div>
 </div>
 </div>

 </div>
 </div>

 {/* BOTTOM BAR */}
 <div className="border-t border-white/10 bg-black/20">
 <div className={`${shell} py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[0.7rem] text-white/30 font-medium tracking-wide`}>
 <p>&copy; {new Date().getFullYear()} Jerrys Roofing &mdash; Katy, Texas. All rights reserved.</p>
 <div className="flex items-center gap-5">
 <Link href="/privacy" className="hover:text-[var(--jerry-lime)] transition-colors cursor-pointer">Privacy</Link>
 <Link href="/terms" className="hover:text-[var(--jerry-lime)] transition-colors cursor-pointer">Terms</Link>
 <span className="text-white/20">Straight forward roofing with quality as the focus.</span>
 </div>
 </div>
 </div>

 </footer>
 );
}
