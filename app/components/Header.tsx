'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { siteConfig, navLinks } from '../config';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ═══ ANNOUNCEMENT BAR ═══ */}
      <motion.div
        initial={{ y: -36, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[var(--hernandez-forest)] text-white"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 flex items-center justify-center gap-2 py-2 text-center">
          <span className="text-[0.65rem] sm:text-xs font-bold tracking-wide">
            Serving Humble, Dayton, Baytown, Spring, The Woodlands &amp; Conroe
          </span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <a href={`tel:${siteConfig.cleanPhone}`} className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-[var(--hernandez-gold)] hover:text-white transition-colors duration-200">
            <Phone className="h-3 w-3" /> Call Now: {siteConfig.phone}
          </a>
        </div>
      </motion.div>

      {/* ═══ HEADER ═══ */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50"
      >
        <div className={`bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-[0_1px_0_rgba(0,0,0,0.06)]'}`}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 flex items-center justify-between h-16 sm:h-[4.5rem]">

            {/* Brand */}
            <Link href="/" className="group leading-none relative">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <div className="font-extrabold tracking-[-0.03em] text-[0.95rem] sm:text-xl text-[var(--hernandez-forest-deep)]">
                  JOSÉ HERNÁNDEZ <span className="text-[var(--hernandez-gold)]">TREE SERVICE</span>
                </div>
                <div className="text-[0.45rem] sm:text-[0.5rem] font-bold uppercase tracking-[0.35em] text-slate-400 mt-0.5">Tree &amp; Landscape Co. &mdash; Humble, TX</div>
              </motion.div>
            </Link>

            {/* Nav links */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
              {navLinks.map((l, i) => {
                const isActive = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href.replace('/#', '/'));
                return (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.3 + i * 0.06 }}
                  >
                    <Link
                      href={l.href}
                      className={`relative px-3.5 py-2 text-[0.78rem] font-semibold rounded-lg transition-all duration-200 group ${isActive ? 'text-[var(--hernandez-forest-deep)] bg-[var(--hernandez-forest)]/5' : 'text-slate-500 hover:text-[var(--hernandez-forest-deep)] hover:bg-[var(--hernandez-forest)]/5'}`}
                    >
                      {l.label}
                      <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${isActive ? 'w-5 bg-[var(--hernandez-gold)]' : 'w-0 bg-[var(--hernandez-gold)] group-hover:w-5'}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Right side — phone + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="hidden sm:flex items-center gap-4"
            >
              <a href={`tel:${siteConfig.cleanPhone}`} className="flex items-center gap-1.5 text-[0.82rem] font-bold text-[var(--hernandez-forest-deep)] hover:text-[var(--hernandez-gold)] transition-colors duration-200">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[var(--hernandez-forest)]/8">
                  <Phone className="h-3.5 w-3.5 text-[var(--hernandez-forest)]" />
                </div>
                {siteConfig.phone}
              </a>
              <Link href="/contact" className="relative bg-[var(--hernandez-forest-deep)] px-6 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--hernandez-forest-deep)]/15 hover:-translate-y-px active:translate-y-0 group">
                <span className="relative z-10">Book Consultation</span>
                <span className="absolute inset-0 bg-[var(--hernandez-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            {/* Mobile menu toggle */}
            <button className="inline-flex h-11 w-11 items-center justify-center lg:hidden text-[var(--hernandez-forest-deep)]" onClick={() => setMobileMenuOpen((o) => !o)} aria-label="Menu">
              <motion.div animate={{ rotate: mobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden bg-white border-b border-slate-100 lg:hidden"
            >
              <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 flex flex-col gap-1 py-4">
                <nav className="flex flex-col">
                  {navLinks.map((l, i) => (
                    <motion.div
                      key={l.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.05 }}
                    >
                      <Link
                        href={l.href}
                        className="block py-3 text-[0.9rem] font-semibold text-[var(--hernandez-forest-deep)] border-b border-slate-50 last:border-0 transition-colors hover:text-[var(--hernandez-gold)]"
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="mt-3 flex flex-col gap-3">
                  <a href={`tel:${siteConfig.cleanPhone}`} className="flex items-center justify-center gap-2 text-sm font-bold text-[var(--hernandez-forest-deep)]">
                    <Phone className="h-4 w-4" /> {siteConfig.phone}
                  </a>
                  <Link href="/contact" className="block text-center bg-[var(--hernandez-forest-deep)] py-3.5 rounded-lg text-[0.75rem] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[var(--hernandez-gold)]">
                    Book Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
