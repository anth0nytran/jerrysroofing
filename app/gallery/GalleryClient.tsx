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
      {/* Filter row */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 py-3 sm:py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {filters.map((f) => {
              const isActive = filter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`shrink-0 px-4 py-2 text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.12em] border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[var(--jerry-navy-deep)] text-[var(--jerry-lime)] border-[var(--jerry-navy-deep)]'
                      : 'bg-white text-[var(--jerry-navy-deep)] border-slate-200 hover:border-[var(--jerry-navy-deep)]'
                  }`}
                >
                  {f.label}
                  <span className={`ml-1.5 text-[0.6rem] ${isActive ? 'text-[var(--jerry-lime)]/70' : 'text-slate-400'}`}>
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Masonry-ish grid */}
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {visible.map((photo, idx) => (
              <motion.button
                key={photo.src}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.02, 0.3) }}
                onClick={() => setLightboxIdx(idx)}
                className="group relative block overflow-hidden bg-slate-100 aspect-square cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--jerry-lime)]/60"
                aria-label={`Open ${photo.caption}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--jerry-lime)]">
                    {photo.caption}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {visible.length === 0 && (
            <div className="py-16 text-center text-slate-500">
              No photos in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur p-2 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 sm:left-6 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur p-2.5 text-white transition-colors cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 sm:right-6 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur p-2.5 text-white transition-colors cursor-pointer"
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

          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm font-bold text-white">{active.caption}</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/50">
              {lightboxIdx !== null && `${lightboxIdx + 1} of ${visible.length}`}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
