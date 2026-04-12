import Link from 'next/link';
import NextImage from 'next/image';
import type { ReactNode } from 'react';

const shell = 'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10';

export interface SubHeroCrumb {
  label: string;
  href?: string;
}

export interface SubHeroProps {
  /** Breadcrumb trail. Last item should typically have no href (current page). */
  crumbs: SubHeroCrumb[];
  /** Optional small pill/badge shown above the title (e.g., "9 Services · Katy, TX"). */
  pill?: {
    icon?: ReactNode;
    text: string;
  };
  /** Main heading text. */
  title: string;
  /**
   * Optional substring within `title` to highlight in lime.
   * If provided and found, the title is split and the accent is wrapped in a lime span.
   */
  accent?: string;
  /** Optional secondary line below the title. */
  subtitle?: string;
  /** Background image — defaults to the shared sub-hero background. Rendered at opacity-15. */
  bgImage?: string;
  /** Optional slot for extra content below the subtitle (e.g., CTA buttons, meta row). */
  children?: ReactNode;
}

/**
 * Shared sub-page hero component.
 *
 * Used on all interior pages to establish a clean, consistent header treatment:
 * subtle background image at 15% opacity, breadcrumb, pill badge, h1, optional
 * subtitle, and a lime gradient divider at the bottom. Matches the blog detail
 * page pattern. Deliberately smaller than the homepage hero.
 */
export function SubHero({
  crumbs,
  pill,
  title,
  accent,
  subtitle,
  bgImage = '/roofing/subhero-bg.jpg',
  children,
}: SubHeroProps) {
  // Split title on the accent substring to render it in lime, keeping the
  // rest of the title white.
  let titleContent: ReactNode = title;
  if (accent) {
    const idx = title.indexOf(accent);
    if (idx !== -1) {
      titleContent = (
        <>
          {title.slice(0, idx)}
          <span className="text-[var(--jerry-lime)]">{accent}</span>
          {title.slice(idx + accent.length)}
        </>
      );
    }
  }

  return (
    <section className="relative overflow-hidden bg-[var(--jerry-navy-deep)]">
      <div className="absolute inset-0">
        <NextImage
          src={bgImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
          priority
        />
      </div>
      <div className={`${shell} relative z-10 py-10 sm:py-14`}>
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/40">
            {crumbs.map((crumb, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <li
                  key={`${crumb.label}-${i}`}
                  className={`flex items-center gap-2 ${isLast ? 'font-semibold text-white/70' : ''}`}
                >
                  {crumb.href && !isLast ? (
                    <Link href={crumb.href} className="hover:text-[var(--jerry-lime)] transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? 'line-clamp-1' : ''}>{crumb.label}</span>
                  )}
                  {!isLast && <span aria-hidden="true">/</span>}
                </li>
              );
            })}
          </ol>
        </nav>

        {pill && (
          <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 text-xs font-semibold text-[var(--jerry-lime)] mb-4">
            {pill.icon}
            {pill.text}
          </span>
        )}

        <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
          {titleContent}
        </h1>

        {subtitle && (
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/55">
            {subtitle}
          </p>
        )}

        {children}
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--jerry-lime)]/20 to-transparent" />
    </section>
  );
}
