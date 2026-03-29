import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Star,
  Truck,
} from 'lucide-react';
import { siteConfig } from '../config';

export function Footer() {
  const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

  return (
    <footer className="bg-[var(--hernandez-ink)] text-white">

      {/* MAIN GRID */}
      <div className={`${shell} py-16 sm:py-20`}>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* 0. Brand & Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-extrabold text-2xl sm:text-3xl tracking-tight inline-block">
              JOSÉ HERNÁNDEZ <span className="text-[var(--hernandez-gold)]">TREE SERVICE</span>
            </Link>
            <p className="mt-4 text-[0.8rem] text-white/50 max-w-md leading-relaxed font-medium">
              Affordable tree trimming, removal, landscaping, and stump grinding across Humble, Spring, Baytown, The Woodlands, Dayton &amp; Conroe TX. {siteConfig.yearsInBusiness}+ years of trusted service. Fully insured. Fair pricing.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <div className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--hernandez-gold)] mb-1">24/7 Emergency Service</div>
                <a href={`tel:${siteConfig.cleanPhone}`} className="text-xl font-extrabold text-white hover:text-[var(--hernandez-gold)] transition-colors">{siteConfig.phone}</a>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--hernandez-gold)] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white hover:brightness-110 transition-all rounded-lg">
                Book Consultation
              </Link>
            </div>
          </div>

          {/* 1. Services */}
          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--hernandez-gold)] mb-6">Our Services</h4>
            <ul className="space-y-4 text-[0.85rem] text-white/50 font-medium">
              <li><Link href="/services#tree-trimming" className="hover:text-[var(--hernandez-gold)] transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3 text-[var(--hernandez-gold)]" /> Tree Trimming &amp; Pruning</Link></li>
              <li><Link href="/services#tree-removal" className="hover:text-[var(--hernandez-gold)] transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3 text-[var(--hernandez-gold)]" /> Tree Removal</Link></li>
              <li><Link href="/services#landscaping" className="hover:text-[var(--hernandez-gold)] transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3 text-[var(--hernandez-gold)]" /> Landscaping Services</Link></li>
              <li><Link href="/services#stump-grinding" className="hover:text-[var(--hernandez-gold)] transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3 text-[var(--hernandez-gold)]" /> Stump Grinding</Link></li>
              <li><Link href="/services#storm-cleanup" className="hover:text-[var(--hernandez-gold)] transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3 text-[var(--hernandez-gold)]" /> Storm Damage Cleanup</Link></li>
              <li><Link href="/services#mulching" className="hover:text-[var(--hernandez-gold)] transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3 text-[var(--hernandez-gold)]" /> Mulching Services</Link></li>
              <li><Link href="/services#tree-removal" className="hover:text-[var(--hernandez-gold)] transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3 text-[var(--hernandez-gold)]" /> Emergency Tree Removal</Link></li>
            </ul>
          </div>

          {/* 2. Service Areas */}
          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--hernandez-gold)] mb-6">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4 text-[0.85rem] text-white/50 font-medium">
              {siteConfig.allServiceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-[0.75rem] text-white/40 leading-relaxed font-medium">
                <span className="text-[var(--hernandez-gold)] block mb-2 font-bold uppercase tracking-wider text-[0.6rem]">Communities We Serve</span>
                {siteConfig.neighborhoods}
              </p>
            </div>
          </div>

          {/* 3. Company */}
          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--hernandez-gold)] mb-6">Company</h4>
            <ul className="space-y-4 text-[0.85rem] text-white/50 font-medium">
              <li><Link href="/about" className="hover:text-[var(--hernandez-gold)] transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3 text-white/20" /> About José Hernández Tree Service</Link></li>
              <li><Link href="/#reviews" className="hover:text-[var(--hernandez-gold)] transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3 text-white/20" /> Customer Reviews &amp; Ratings</Link></li>
              <li><Link href="/gallery" className="hover:text-[var(--hernandez-gold)] transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3 text-white/20" /> Our Recent Work / Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-[var(--hernandez-gold)] transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3 text-white/20" /> Tree Care Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--hernandez-gold)] transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3 text-white/20" /> Contact &amp; Book Consultation</Link></li>
            </ul>

            <div className="mt-8 pt-8 border-t border-white/10 space-y-4 text-[0.8rem] text-white/60 font-semibold">
              <div className="flex items-center gap-3"><Shield className="h-4 w-4 text-[var(--hernandez-gold)]" /> Fully Licensed &amp; Insured</div>
              <div className="flex items-center gap-3"><Star className="h-4 w-4 fill-[var(--hernandez-gold)] text-[var(--hernandez-gold)]" /> {siteConfig.rating} Stars on Google</div>
              <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-[var(--hernandez-gold)]" /> {siteConfig.yearsInBusiness}+ Years Experience</div>
              <div className="flex items-center gap-3"><Truck className="h-4 w-4 text-[var(--hernandez-gold)]" /> Full Cleanup on Every Job</div>
            </div>
          </div>


        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 bg-black/20">
        <div className={`${shell} py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[0.7rem] text-white/30 font-medium tracking-wide`}>
          <p>&copy; {new Date().getFullYear()} José Hernández Tree Service &mdash; Humble, TX. All rights reserved.</p>
          <p>Affordable Tree Service &amp; Landscaping since {new Date().getFullYear() - siteConfig.yearsInBusiness}.</p>
        </div>
      </div>

    </footer>
  );
}
