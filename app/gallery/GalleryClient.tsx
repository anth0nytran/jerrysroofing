'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  galleryPhotos,
  galleryCategories,
  type GalleryCategory,
  type GalleryPhoto,
} from '../galleryData';

type FilterKey = 'all' | GalleryCategory;

export default function GalleryClient() {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const visible = useMemo(() => {
    if (filter === 'all') return galleryPhotos;
    return galleryPhotos.filter((p) => p.category === filter || p.tags.includes(filter));
  }, [filter]);

  // Filters with non-zero counts
  const filters: { key: FilterKey; label: string; count: number }[] = useMemo(() => {
    return [
      { key: 'all', label: 'All Projects', count: galleryPhotos.length },
      ...galleryCategories.filter((c) => c.count > 0),
    ];
  }, []);

  const close = useCallback(() => setLightboxIdx(null), []);
  const next = useCallback(
    () => setLightboxIdx((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length],
  );
  const prev = useCallback(
    () =>
      setLightboxIdx((i) =>
        i === null ? null : (i - 1 + visible.length) % visible.length,
      ),
    [visible.length],
  );

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIdx, close, next, prev]);

  const active: GalleryPhoto | null =
    lightboxIdx === null ? null : visible[lightboxIdx] ?? null;

  return (
    <>
      {/* ═══ FILTER BAR ═══ */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 py-4 sm:py-5">
          <div className="flex items-center gap-5 sm:gap-6">
            <span className="hidden sm:inline-flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-slate-400 shrink-0">
              <span className="h-px w-5 bg-slate-300" /> Filter
            </span>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-1">
              {filters.map((f) => {
                const isActive = filter === f.key;
                return (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] rounded-full border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[var(--jerry-navy-deep)] text-white border-[var(--jerry-navy-deep)] shadow-sm'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-[var(--jerry-navy-deep)]'
                    }`}
                  >
                    {f.label}
                    <span className={`text-[0.58rem] font-extrabold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-[var(--jerry-lime)]/20 text-[var(--jerry-lime)]' : 'bg-slate-100 text-slate-400'}`}>
                      {f.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ GALLERY GRID ═══ */}
      <section className="bg-[var(--jerry-cream)]/40 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Result count */}
          <div className="mb-6 sm:mb-8 flex items-baseline justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Showing <span className="text-[var(--jerry-navy-deep)]">{visible.length}</span> {visible.length === 1 ? 'project' : 'projects'}
            </p>
            <p className="hidden sm:block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Tap any photo to expand
            </p>
          </div>

          {/* Uniform grid — every tile same aspect-square */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {visible.map((photo, idx) => (
              <motion.button
                key={photo.src}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.015, 0.25) }}
                onClick={() => setLightboxIdx(idx)}
                className="group relative block overflow-hidden bg-slate-200 aspect-square rounded-lg cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--jerry-lime)]/60"
                aria-label={`Open ${photo.caption}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white leading-tight line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
                {/* subtle top-right category pill on hover */}
                <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 backdrop-blur text-[0.55rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] px-2 py-0.5 rounded-sm">
                    View
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {visible.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-sm font-semibold text-slate-500">No photos in this category yet.</p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--jerry-navy-deep)] hover:text-[var(--jerry-navy-light)] transition-colors cursor-pointer"
              >
                Show all projects <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═══ LIGHTBOX ═══ */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col"
          onClick={close}
        >
          {/* Top bar — counter + close */}
          <div
            className="relative z-10 flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-baseline gap-3">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--jerry-lime)]">Jerrys Roofing</span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/40">
                {lightboxIdx !== null && `${String(lightboxIdx + 1).padStart(2, '0')} / ${String(visible.length).padStart(2, '0')}`}
              </span>
            </div>
            <button
              type="button"
              onClick={close}
              className="rounded-full bg-white/5 hover:bg-white/15 border border-white/10 p-2 text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Image area */}
          <div className="relative flex-1 flex items-center justify-center px-4 sm:px-16 py-6">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 sm:left-6 z-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 p-3 text-white transition-colors cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 sm:right-6 z-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 p-3 text-white transition-colors cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-[3/2]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Bottom caption bar */}
          <div
            className="relative z-10 px-5 sm:px-8 py-5 border-t border-white/10 bg-black/40 backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm sm:text-base font-bold text-white tracking-tight">{active.caption}</p>
              <p className="mt-1.5 text-[0.68rem] leading-relaxed text-white/50 max-w-xl mx-auto line-clamp-2">{active.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
