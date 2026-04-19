import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from './config';

const shell = 'mx-auto w-full max-w-4xl px-5 sm:px-8 lg:px-10';

export default function NotFound() {
  return (
    <section className="bg-[var(--jerry-navy-deep)] py-20 sm:py-28 min-h-[70vh] flex items-center">
      <div className={`${shell} text-center`}>
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--jerry-lime)]">
          404 — Page not found
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.02em] leading-[1.05]">
          This page blew off in the storm.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
          The page you tried to reach is not here. Try one of these — or call Jerry directly
          at <a href={`tel:${siteConfig.cleanPhone}`} className="text-[var(--jerry-lime)] underline">{siteConfig.phone}</a>.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left">
          <Link href="/" className="group bg-white/[0.04] border border-white/10 hover:border-[var(--jerry-lime)]/60 p-5 transition-colors">
            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--jerry-lime)]">Home</p>
            <p className="mt-1 text-sm text-white/85">Jerry&apos;s Roofing — Katy, TX</p>
          </Link>
          <Link href="/services" className="group bg-white/[0.04] border border-white/10 hover:border-[var(--jerry-lime)]/60 p-5 transition-colors">
            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--jerry-lime)]">Services</p>
            <p className="mt-1 text-sm text-white/85">Replacement, repair, Rejoov, gutters, siding</p>
          </Link>
          <Link href="/service-area" className="group bg-white/[0.04] border border-white/10 hover:border-[var(--jerry-lime)]/60 p-5 transition-colors">
            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--jerry-lime)]">Service Areas</p>
            <p className="mt-1 text-sm text-white/85">Katy, Cypress, Cinco Ranch, Fulshear, Richmond…</p>
          </Link>
          <Link href="/contact" className="group bg-white/[0.04] border border-white/10 hover:border-[var(--jerry-lime)]/60 p-5 transition-colors">
            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--jerry-lime)]">Free Inspection</p>
            <p className="mt-1 text-sm text-white/85">Request a same-day written report</p>
          </Link>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[var(--jerry-lime)] px-7 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors"
          >
            Back to Home <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={`tel:${siteConfig.cleanPhone}`}
            className="inline-flex items-center gap-2 border border-white/15 px-7 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white/85 hover:bg-white/5 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" /> Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
