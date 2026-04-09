'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
 Menu, Phone, X, ChevronDown, ArrowRight, Shield,
 Home, RefreshCw, Droplets, Layers, Paintbrush, SquareStack,
} from 'lucide-react';
import { siteConfig, serviceData, navLinks } from '../config';
import { BrandLogo } from './BrandLogo';

const serviceIconMap: Record<string, typeof Home> = {
 'roof-replacement': Home,
 'roof-rejuvenation': RefreshCw,
 'gutters': Droplets,
 'siding': Layers,
 'painting': Paintbrush,
 'driveway-repaints': SquareStack,
};

export function Header() {
 const pathname = usePathname();
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const [servicesOpen, setServicesOpen] = useState(false);
 const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
 const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 40);
 onScroll();
 window.addEventListener('scroll', onScroll);
 return () => window.removeEventListener('scroll', onScroll);
 }, []);

 useEffect(() => {
 setMobileMenuOpen(false);
 setServicesOpen(false);
 setMobileServicesOpen(false);
 }, [pathname]);

 const handleServicesEnter = () => {
 if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
 setServicesOpen(true);
 };

 const handleServicesLeave = () => {
 servicesTimeout.current = setTimeout(() => setServicesOpen(false), 200);
 };

 return (
 <>
 {/* ANNOUNCEMENT BAR */}
 <motion.div
 initial={{ y: -36, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
 className="bg-[var(--jerry-navy)] text-white"
 >
 <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 flex items-center justify-center gap-2 py-2 text-center">
 <span className="text-[0.65rem] sm:text-xs font-bold tracking-wide">
 24/7 Free Estimates &mdash; <span className="text-[var(--jerry-lime)] uppercase tracking-widest font-black">Insurance Claims Assistance</span>
 </span>
 <span className="text-white/30 hidden sm:inline">|</span>
 <a href={`tel:${siteConfig.cleanPhone}`} className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-[var(--jerry-lime)] hover:text-white transition-colors duration-200">
 <Phone className="h-3 w-3" /> {siteConfig.phone}
 </a>
 </div>
 </motion.div>

 {/* HEADER */}
 <motion.header
 initial={{ y: -20, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
 className="sticky top-0 z-50"
 >
 <div className={`bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-[0_1px_0_rgba(0,0,0,0.06)]'}`}>

 {/* ── MOBILE HEADER ── */}
 <div className="lg:hidden mx-auto w-full max-w-7xl px-5 sm:px-8">
 <div className="flex items-center justify-between h-[4.5rem] sm:h-20">
 <Link href="/" className="shrink-0 overflow-hidden h-[3.25rem] sm:h-[4rem]">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img src="/pictures/logo-transparent.svg" alt="Jerry's Roofing" className="h-[5rem] sm:h-[6rem] w-auto object-contain object-left-top" />
 </Link>
 <div className="flex items-center gap-2">
 <a href={`tel:${siteConfig.cleanPhone}`} className="flex items-center justify-center h-10 w-10 bg-[var(--jerry-navy)]/5">
 <Phone className="h-4 w-4 text-[var(--jerry-navy)]" />
 </a>
 <button className="flex items-center justify-center h-10 w-10 text-[var(--jerry-navy)] cursor-pointer" onClick={() => setMobileMenuOpen((o) => !o)} aria-label="Menu">
 {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
 </button>
 </div>
 </div>
 </div>

 {/* ── DESKTOP HEADER ── */}
 <div className="hidden lg:block mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
 <div className="flex items-center justify-between h-[5.5rem] xl:h-[6.5rem]">

 {/* Logo — left, large. SVG has ~40% bottom whitespace so we render big & clip */}
 <Link href="/" className="shrink-0 overflow-hidden h-[5rem] xl:h-[6rem]">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img src="/pictures/logo-transparent.svg" alt="Jerry's Roofing" className="h-[7.5rem] xl:h-[9rem] w-auto object-contain object-left-top" />
 </Link>

 {/* Nav + CTA — right-aligned, sitting at the bottom */}
 <div className="flex items-center gap-0">
 <nav className="flex items-center" aria-label="Main navigation">
 {navLinks.map((l, i) => {
 const isServices = l.label === 'Services';
 const isActive = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href.replace('/#', '/'));

 if (isServices) {
 return (
 <div key={l.href} className="relative" onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
 <Link href={l.href} className={`relative px-5 py-2.5 text-[0.95rem] font-semibold transition-colors duration-200 group inline-flex items-center gap-1.5 ${isActive || servicesOpen ? 'text-[var(--jerry-navy)]' : 'text-slate-500 hover:text-[var(--jerry-navy)]'}`}>
 {l.label}
 <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
 <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ${isActive ? 'w-6 bg-[var(--jerry-lime)]' : 'w-0 bg-[var(--jerry-lime)] group-hover:w-6'}`} />
 </Link>
 <AnimatePresence>
 {servicesOpen && (
 <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }} className="absolute top-full left-0 pt-2.5 z-50">
 <div className="w-[320px] bg-white border border-slate-100 shadow-2xl shadow-slate-900/8">
 <div className="px-5 pt-4 pb-1"><span className="text-[0.5rem] font-bold uppercase tracking-[0.3em] text-slate-300">Roofing</span></div>
 <div className="px-2 pb-1.5">
 {serviceData.filter(s => ['roof-replacement', 'roof-rejuvenation'].includes(s.slug)).map((s) => (
 <Link key={s.slug} href={`/services/${s.slug}`} className="group/item flex items-center justify-between px-3 py-2.5 hover:bg-[var(--jerry-cream)] transition-colors duration-150 cursor-pointer">
 <span className="text-[0.82rem] font-bold text-[var(--jerry-navy)] group-hover/item:text-[var(--jerry-navy-light)] transition-colors">{s.title}</span>
 <ArrowRight className="h-3 w-3 text-slate-200 group-hover/item:text-[var(--jerry-navy)] transition-all opacity-0 group-hover/item:opacity-100 duration-200" />
 </Link>
 ))}
 </div>
 <div className="px-5 pt-2.5 pb-1 border-t border-slate-100"><span className="text-[0.5rem] font-bold uppercase tracking-[0.3em] text-slate-300">Exterior</span></div>
 <div className="px-2 pb-1.5">
 {serviceData.filter(s => !['roof-replacement', 'roof-rejuvenation'].includes(s.slug)).map((s) => (
 <Link key={s.slug} href={`/services/${s.slug}`} className="group/item flex items-center justify-between px-3 py-2.5 hover:bg-[var(--jerry-cream)] transition-colors duration-150 cursor-pointer">
 <span className="text-[0.82rem] font-bold text-[var(--jerry-navy)] group-hover/item:text-[var(--jerry-navy-light)] transition-colors">{s.title}</span>
 <ArrowRight className="h-3 w-3 text-slate-200 group-hover/item:text-[var(--jerry-navy)] transition-all opacity-0 group-hover/item:opacity-100 duration-200" />
 </Link>
 ))}
 </div>
 <div className="px-5 py-2.5 border-t border-slate-100 bg-slate-50/60">
 <Link href="/services" className="inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy)] hover:text-[var(--jerry-navy-light)] transition-colors cursor-pointer">All Services <ArrowRight className="h-3 w-3" /></Link>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
 }

 return (
 <Link key={l.href} href={l.href} className={`relative px-5 py-2.5 text-[0.95rem] font-semibold transition-colors duration-200 group ${isActive ? 'text-[var(--jerry-navy)]' : 'text-slate-500 hover:text-[var(--jerry-navy)]'}`}>
 {l.label}
 <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ${isActive ? 'w-6 bg-[var(--jerry-lime)]' : 'w-0 bg-[var(--jerry-lime)] group-hover:w-6'}`} />
 </Link>
 );
 })}
 </nav>
 <Link href="/contact" className="ml-5 bg-[var(--jerry-lime)] px-7 py-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer">
 Get a Quote
 </Link>
 </div>
 </div>
 </div>
 </div>

 {/* ── MOBILE MENU ── */}
 <AnimatePresence>
 {mobileMenuOpen && (
 <motion.div
 initial={{ opacity: 0, height: 0 }}
 animate={{ opacity: 1, height: 'auto' }}
 exit={{ opacity: 0, height: 0 }}
 transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
 className="overflow-hidden bg-white border-b border-slate-100 lg:hidden"
 >
 <div className="px-5 sm:px-8 pb-6 pt-2">
 {/* Nav links */}
 <nav className="flex flex-col">
 {navLinks.map((l, i) => {
 if (l.label === 'Services') {
 return (
 <div key={l.href}>
 <button
 onClick={() => setMobileServicesOpen((o) => !o)}
 className="flex w-full items-center justify-between py-3.5 text-[0.9rem] font-bold text-[var(--jerry-navy)] border-b border-slate-100 cursor-pointer"
 >
 Services
 <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
 </button>
 <AnimatePresence>
 {mobileServicesOpen && (
 <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
 <div className="py-1 border-b border-slate-100">
 {serviceData.map((s) => (
 <Link key={s.slug} href={`/services/${s.slug}`} className="block py-2.5 pl-4 text-[0.82rem] font-semibold text-slate-600 hover:text-[var(--jerry-navy)] transition-colors cursor-pointer">
 {s.title}
 </Link>
 ))}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
 }
 return (
 <Link key={l.href} href={l.href} className="block py-3.5 text-[0.9rem] font-bold text-[var(--jerry-navy)] border-b border-slate-100 transition-colors hover:text-[var(--jerry-navy-light)]">
 {l.label}
 </Link>
 );
 })}
 </nav>

 {/* CTA */}
 <div className="mt-5 flex flex-col gap-3">
 <a href={`tel:${siteConfig.cleanPhone}`} className="flex items-center justify-center gap-2.5 py-3 border border-[var(--jerry-navy)]/10 text-[0.8rem] font-bold text-[var(--jerry-navy)]">
 <Phone className="h-4 w-4" /> {siteConfig.phone}
 </a>
 <Link href="/contact" className="block text-center bg-[var(--jerry-lime)] py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer">
 Request a Quote
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
