type RoofMotifProps = {
  /**
   * `shingle-field` — tiled offset rectangles resembling asphalt shingle tabs
   *   viewed face-on. Use as a full-section background texture.
   * `rafters` — parallel diagonals that fan toward a peak, like exposed rafters
   *   or truss webbing. Use behind a heading block or as a half-bleed accent.
   * `blueprint` — a thin-stroked architectural cross-section (gable roof with
   *   rafters, ridge, decking and soffit). Use as a quiet backdrop under a
   *   content block — reads like blueprint paper bleeding through.
   */
  variant: 'shingle-field' | 'rafters' | 'blueprint';
  /**
   * Context the motif sits on. Picks stroke/fill color + opacity so the motif is
   * visible without fighting the content.
   */
  tone?: 'light' | 'dark' | 'cream';
  className?: string;
};

/**
 * Roofing-specific SVG background accent. Non-interactive, always behind content.
 * Renders as a full-size absolutely-positioned layer (the parent supplies the
 * bounding container). Never place inline between sections — these are meant
 * to sit under content as a textured backdrop.
 */
export function RoofMotif({ variant, tone = 'light', className = '' }: RoofMotifProps) {
  const stroke =
    tone === 'dark' ? 'var(--jerry-lime)' : 'var(--jerry-navy)';
  const fill =
    tone === 'dark' ? 'var(--jerry-lime)' : 'var(--jerry-navy)';

  // Opacity scales — tuned so motifs are *felt* more than *seen*.
  const strokeOpacity = tone === 'dark' ? 0.18 : 0.08;
  const fillOpacity = tone === 'dark' ? 0.05 : 0.03;

  const shared =
    'absolute inset-0 w-full h-full pointer-events-none select-none';

  if (variant === 'shingle-field') {
    // Offset rows of rectangles — the "tab" profile of architectural shingles.
    // Tiles via SVG <pattern> so it's crisp at any viewport size.
    const id = `shingle-field-${tone}`;
    return (
      <svg
        aria-hidden="true"
        className={`${shared} ${className}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id={id}
            x="0"
            y="0"
            width="120"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            {/* Top row */}
            <rect x="0" y="0" width="58" height="32" rx="1.5" fill={fill} fillOpacity={fillOpacity} />
            <rect x="60" y="0" width="58" height="32" rx="1.5" fill={fill} fillOpacity={fillOpacity} />
            <line x1="58" y1="0" x2="58" y2="32" stroke={stroke} strokeOpacity={strokeOpacity * 0.6} strokeWidth="0.5" />
            <line x1="0" y1="32" x2="120" y2="32" stroke={stroke} strokeOpacity={strokeOpacity} strokeWidth="0.6" />
            {/* Offset bottom row */}
            <rect x="-30" y="36" width="58" height="32" rx="1.5" fill={fill} fillOpacity={fillOpacity} />
            <rect x="30" y="36" width="58" height="32" rx="1.5" fill={fill} fillOpacity={fillOpacity} />
            <rect x="90" y="36" width="58" height="32" rx="1.5" fill={fill} fillOpacity={fillOpacity} />
            <line x1="28" y1="36" x2="28" y2="68" stroke={stroke} strokeOpacity={strokeOpacity * 0.6} strokeWidth="0.5" />
            <line x1="88" y1="36" x2="88" y2="68" stroke={stroke} strokeOpacity={strokeOpacity * 0.6} strokeWidth="0.5" />
            <line x1="0" y1="68" x2="120" y2="68" stroke={stroke} strokeOpacity={strokeOpacity} strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    );
  }

  if (variant === 'rafters') {
    // Parallel diagonals converging at an off-screen apex — reads as exposed
    // rafters or truss webbing viewed from a low angle.
    return (
      <svg
        aria-hidden="true"
        className={`${shared} ${className}`}
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 600 400"
      >
        {/* Left-side rafters */}
        {Array.from({ length: 9 }).map((_, i) => {
          const x = -80 + i * 75;
          return (
            <line
              key={`l-${i}`}
              x1={x}
              y1="420"
              x2={x + 260}
              y2="-20"
              stroke={stroke}
              strokeOpacity={strokeOpacity * (1 - i * 0.06)}
              strokeWidth="1"
              strokeLinecap="round"
            />
          );
        })}
        {/* Ridge + top chord */}
        <line x1="0" y1="80" x2="600" y2="80" stroke={stroke} strokeOpacity={strokeOpacity * 0.8} strokeWidth="0.75" />
        {/* Right-side rafters (mirrored, thinner — suggests the far slope) */}
        {Array.from({ length: 6 }).map((_, i) => {
          const x = 320 + i * 75;
          return (
            <line
              key={`r-${i}`}
              x1={x}
              y1="-20"
              x2={x + 260}
              y2="420"
              stroke={stroke}
              strokeOpacity={strokeOpacity * 0.5}
              strokeWidth="0.75"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    );
  }

  // blueprint — architectural cross-section of a simple gable roof:
  // rafters, ridge board, roof deck, drip edge, and a suggestion of siding.
  // Lines only, no fills — reads like a technical detail drawing bleeding through.
  return (
    <svg
      aria-hidden="true"
      className={`${shared} ${className}`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 800 420"
    >
      <g stroke={stroke} strokeOpacity={strokeOpacity * 1.4} strokeWidth="1" fill="none" strokeLinejoin="round">
        {/* Outer roof outline — gable peak */}
        <path d="M40 340 L400 80 L760 340" />
        {/* Roof deck (parallel offset inside) */}
        <path d="M78 340 L400 108 L722 340" strokeOpacity={strokeOpacity} />
        {/* Ridge board */}
        <line x1="385" y1="95" x2="415" y2="95" strokeOpacity={strokeOpacity * 1.4} />
        {/* Rafters — left slope */}
        {[120, 190, 260, 330].map((x) => {
          const y1 = 340;
          // project up the slope: slope vector (400-40, 80-340) normalized
          const t = (x - 40) / 360;
          const x2 = 40 + t * 360;
          const y2 = 340 + t * -260;
          return <line key={`blp-l-${x}`} x1={x} y1={y1} x2={x2} y2={y2} strokeOpacity={strokeOpacity} />;
        })}
        {/* Rafters — right slope */}
        {[470, 540, 610, 680].map((x) => {
          const y1 = 340;
          const t = (760 - x) / 360;
          const x2 = 760 - t * 360;
          const y2 = 340 + t * -260;
          return <line key={`blp-r-${x}`} x1={x} y1={y1} x2={x2} y2={y2} strokeOpacity={strokeOpacity} />;
        })}
        {/* Top/bottom plate lines (horizontal ties at eave) */}
        <line x1="40" y1="340" x2="760" y2="340" strokeOpacity={strokeOpacity * 1.2} />
        <line x1="50" y1="352" x2="750" y2="352" strokeOpacity={strokeOpacity * 0.7} />
        {/* Drip-edge tick marks along eave */}
        {Array.from({ length: 24 }).map((_, i) => {
          const x = 60 + i * 28;
          return <line key={`dt-${i}`} x1={x} y1="352" x2={x} y2="360" strokeOpacity={strokeOpacity * 0.6} strokeWidth="0.6" />;
        })}
      </g>
      <g fill={fill} fillOpacity={fillOpacity}>
        {/* Subtle shingle course hint along the left slope */}
        <path d="M70 330 L400 92 L400 98 L78 336 Z" />
      </g>
    </svg>
  );
}
