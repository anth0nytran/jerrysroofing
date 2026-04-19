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
 'roof-rejoov': RefreshCw,
 'gutters': Droplets,
 'siding': Layers,
 'painting': Paintbrush,
 'driveway-repaints': SquareStack,
};

function TexasFlag({ className = '' }: { className?: string }) {
 // Texas state flag — 2:3 ratio. Hoist (left 1/3) is Texas blue with a centered
 // white five-pointed star. Fly half is white (top) over red (bottom).
 const star = (cx: number, cy: number, r: number) => {
 const pts: string[] = [];
 for (let i = 0; i < 5; i += 1) {
 const outer = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
 const inner = outer + Math.PI / 5;
 pts.push(`${cx + r * Math.cos(outer)},${cy + r * Math.sin(outer)}`);
 pts.push(`${cx + r * 0.382 * Math.cos(inner)},${cy + r * 0.382 * Math.sin(inner)}`);
 }
 return pts.join(' ');
 };
 return (
 <svg
 viewBox="0 0 900 600"
 xmlns="http://www.w3.org/2000/svg"
 className={className}
 aria-label="Texas state flag"
 role="img"
 preserveAspectRatio="xMidYMid meet"
 >
 <rect width="900" height="600" fill="#BF0A30" />
 <rect width="900" height="300" fill="#ffffff" />
 <rect width="300" height="600" fill="#002868" />
 <polygon points={star(150, 300, 110)} fill="#ffffff" />
 </svg>
 );
}

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
 <div className="flex items-center justify-between h-[4.75rem] sm:h-[5.5rem]">
 <Link href="/" className="flex items-center gap-0 shrink-0 min-w-0">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img src="/pictures/logo-transparent.svg" alt="Jerrys Roofing" className="h-[5rem] sm:h-24 w-auto object-contain shrink-0 translate-y-2 sm:translate-y-2.5" />
 <TexasFlag className="h-[1.1rem] sm:h-5 w-auto shrink-0 rounded-[2px] ring-1 ring-slate-200/70 shadow-sm -ml-2.5 sm:-ml-3" />
 </Link>
 <div className="flex items-center gap-2">
 <a href={`tel:${siteConfig.cleanPhone}`} className="flex items-center justify-center h-10 w-10 bg-[var(--jerry-navy)]/5 rounded-lg">
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
 <div className="flex items-center justify-between h-24 xl:h-28">

 {/* Logo + Texas flag — left */}
 <Link href="/" className="flex items-center gap-0 shrink-0">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img src="/pictures/logo-transparent.svg" alt="Jerrys Roofing" className="h-[7rem] xl:h-[8rem] w-auto object-contain shrink-0 translate-y-3 xl:translate-y-3.5" />
 <TexasFlag className="h-6 xl:h-7 w-auto shrink-0 rounded-[3px] ring-1 ring-slate-200 shadow-sm -ml-4 xl:-ml-5" />
 </Link>

 {/* Nav + CTA — right-aligned */}
 <div className="flex items-center gap-5 xl:gap-6">
 <nav className="flex items-center gap-1" aria-label="Main navigation">
 {navLinks.map((l) => {
 const isServices = l.label === 'Services';
 const isRoofRejoov = l.label === 'Roof Rejoov';
 const isActive = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href.replace('/#', '/'));

 if (isServices) {
 return (
 <div key={l.href} className="relative" onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
 <Link href={l.href} className={`relative px-3.5 py-2 text-[0.82rem] font-semibold tracking-tight transition-colors duration-200 group inline-flex items-center gap-1 ${isActive || servicesOpen ? 'text-[var(--jerry-navy)]' : 'text-slate-500 hover:text-[var(--jerry-navy)]'}`}>
 {l.label}
 <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
 <span className={`pointer-events-none absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ${isActive ? 'w-6 bg-[var(--jerry-lime)]' : 'w-0 bg-[var(--jerry-lime)] group-hover:w-6'}`} />
 </Link>
 <AnimatePresence>
 {servicesOpen && (
 <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }} className="absolute top-full left-0 pt-2.5 z-50">
 <div className="w-[320px] bg-white border border-slate-100 shadow-2xl shadow-slate-900/8 rounded-xl overflow-hidden">
 <div className="px-5 pt-4 pb-1"><span className="text-[0.5rem] font-bold uppercase tracking-[0.3em] text-slate-300">Roofing</span></div>
 <div className="px-2 pb-1.5">
 {serviceData.filter(s => ['roof-replacement', 'roof-rejoov'].includes(s.slug)).map((s) => (
 <Link key={s.slug} href={s.slug === 'roof-rejoov' ? '/roof-rejoov' : `/services/${s.slug}`} className="group/item flex items-center justify-between px-3 py-2.5 hover:bg-[var(--jerry-cream)] transition-colors duration-150 cursor-pointer rounded-lg">
 <span className="text-[0.82rem] font-bold text-[var(--jerry-navy)] group-hover/item:text-[var(--jerry-navy-light)] transition-colors">{s.title}</span>
 <ArrowRight className="h-3 w-3 text-slate-200 group-hover/item:text-[var(--jerry-navy)] transition-all opacity-0 group-hover/item:opacity-100 duration-200" />
 </Link>
 ))}
 </div>
 <div className="px-5 pt-2.5 pb-1 border-t border-slate-100"><span className="text-[0.5rem] font-bold uppercase tracking-[0.3em] text-slate-300">Exterior</span></div>
 <div className="px-2 pb-1.5">
 {serviceData.filter(s => !['roof-replacement', 'roof-rejoov'].includes(s.slug)).map((s) => (
 <Link key={s.slug} href={`/services/${s.slug}`} className="group/item flex items-center justify-between px-3 py-2.5 hover:bg-[var(--jerry-cream)] transition-colors duration-150 cursor-pointer rounded-lg">
 <span className="text-[0.82rem] font-bold text-[var(--jerry-navy)] group-hover/item:text-[var(--jerry-navy-light)] transition-colors">{s.title}</span>
 <ArrowRight className="h-3 w-3 text-slate-200 group-hover/item:text-[var(--jerry-navy)] transition-all opacity-0 group-hover/item:opacity-100 duration-200" />
 </Link>
 ))}
 </div>
 <div className="px-5 py-2.5 border-t border-slate-100 bg-slate-50/60 rounded-b-xl">
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
 <Link key={l.href} href={l.href} className={`relative px-3.5 py-2 text-[0.82rem] font-semibold tracking-tight group ${isRoofRejoov ? 'purple-text-pulse' : `transition-colors duration-200 ${isActive ? 'text-[var(--jerry-navy)]' : 'text-slate-500 hover:text-[var(--jerry-navy)]'}`}`}>
 {l.label}
 <span className={`pointer-events-none absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ${isActive ? (isRoofRejoov ? 'w-6 bg-[var(--jerry-purple)]' : 'w-6 bg-[var(--jerry-lime)]') : (isRoofRejoov ? 'w-0 bg-[var(--jerry-purple)] group-hover:w-6' : 'w-0 bg-[var(--jerry-lime)] group-hover:w-6')}`} />
 </Link>
 );
 })}
 </nav>
 <Link href="/contact" className="inline-flex items-center bg-[var(--jerry-lime)] px-5 xl:px-6 h-10 xl:h-11 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer rounded-lg">
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
 {navLinks.map((l) => {
 const isRoofRejoov = l.label === 'Roof Rejoov';

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
 <Link key={s.slug} href={s.slug === 'roof-rejoov' ? '/roof-rejoov' : `/services/${s.slug}`} className="block py-2.5 pl-4 text-[0.82rem] font-semibold text-slate-600 hover:text-[var(--jerry-navy)] transition-colors cursor-pointer">
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
 <Link key={l.href} href={l.href} className={`block py-3.5 text-[0.9rem] font-bold border-b border-slate-100 transition-colors ${isRoofRejoov ? 'purple-text-pulse' : 'text-[var(--jerry-navy)] hover:text-[var(--jerry-navy-light)]'}`}>
 {l.label}
 </Link>
 );
 })}
 </nav>

 {/* CTA */}
 <div className="mt-5 flex flex-col gap-3">
 <a href={`tel:${siteConfig.cleanPhone}`} className="flex items-center justify-center gap-2.5 py-3 border border-[var(--jerry-navy)]/10 text-[0.8rem] font-bold text-[var(--jerry-navy)] rounded-lg">
 <Phone className="h-4 w-4" /> {siteConfig.phone}
 </a>
 <Link href="/contact" className="block text-center bg-[var(--jerry-lime)] py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--jerry-navy-deep)] hover:bg-[var(--jerry-lime-hover)] transition-colors cursor-pointer rounded-lg">
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
