// New high-value posts written for AEO citation by AI search engines
import { blogBatch1 } from './batch-1';
import { blogBatch2 } from './batch-2';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** Optional last-updated date — used for AEO freshness signals + Article schema dateModified */
  dateModified?: string;
  readTime: string;
  category: string;
  keywords: string[];
  /** Optional TL;DR summary — rendered as a quick-answer box at the top of the post for AI Overviews extraction */
  tldr?: string;
  /** Optional author override — defaults to Jerry Pilley */
  author?: {
    name: string;
    role: string;
  };
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'signs-you-need-new-roof-katy-tx',
    title: '7 Signs You Need a New Roof in Katy, TX',
    description: "Learn the top warning signs that your Katy home needs a roof replacement. Expert guide from Jerrys Roofing covers shingle damage, leaks, and when to call a professional.",
    date: '2026-02-10',
    dateModified: '2026-04-11',
    readTime: '5 min read',
    category: 'Roofing Tips',
    keywords: ['roof replacement Katy TX', 'signs need new roof Katy', 'roof damage Katy TX', 'when to replace roof Cypress TX', 'roof inspection Cinco Ranch'],
    tldr: "If your Katy roof is 20+ years old, has curling or missing shingles, sheds heavy granules into your gutters, lets daylight into your attic, or has water stains on interior ceilings, it likely needs replacement. Cost typically runs $8,000-$18,000 for a full tear-off in Katy depending on home size and material. Jerrys Roofing offers free, honest inspections — call (409) 351-1529 and we'll tell you straight whether you need a repair, a Roof Rejoov treatment, or a full replacement.",
    content: `
<h2>How to Know When It's Time for a New Roof</h2>
<p>Your roof protects everything underneath it — your family, your belongings, and your investment. But roofs don't last forever, especially in the Katy, Texas area where intense heat, humidity, hailstorms, and high winds take a serious toll. At <a href="/about">Jerrys Roofing</a>, we've inspected thousands of roofs across Katy, Cypress, Cinco Ranch, and Richmond, and these are the most common warning signs that a replacement is coming.</p>

<h2>1. Your Roof Is 20+ Years Old</h2>
<p>Most asphalt shingle roofs have a lifespan of 20 to 25 years. If your roof is approaching or past that age, it's time for a professional inspection — even if it looks fine from the ground. The Texas climate accelerates aging, and issues that aren't visible from below can cause major problems during the next storm.</p>

<h2>2. Shingles Are Curling, Buckling, or Missing</h2>
<p>Walk out to your yard and look up at your roof. Do you see shingles that are curling at the edges, buckling in the middle, or missing entirely? These are clear signs that your shingles have reached the end of their useful life. In the Katy area, intense UV exposure and temperature swings cause shingles to dry out and lose flexibility over time.</p>

<h2>3. Granules in Your Gutters</h2>
<p>Check your gutters after a rainstorm. If you see a buildup of dark, sand-like granules, your shingles are shedding their protective coating. Granule loss exposes the asphalt underneath to UV rays, which accelerates deterioration. A small amount is normal on newer roofs, but heavy granule loss means trouble.</p>

<h2>4. Daylight Through the Roof Boards</h2>
<p>Go into your attic on a sunny day. If you can see daylight coming through the roof boards, water can get through too. This means your underlayment and shingles are compromised. While this sometimes indicates a localized repair, widespread daylight penetration usually means it's time for a full replacement.</p>

<h2>5. Water Stains on Ceilings or Walls</h2>
<p>Brown spots or water stains on your ceilings and interior walls are a red flag. While some leaks can be patched, recurring leaks or stains in multiple locations typically indicate systemic roof failure. The longer you wait, the more damage water does to your insulation, drywall, and framing.</p>

<h2>6. Sagging Roof Deck</h2>
<p>A sagging roofline is a serious structural issue. If any section of your roof appears to dip or sag, the underlying decking may be waterlogged and weakened. This requires immediate attention — <a href="/contact">contact Jerrys Roofing</a> right away for an emergency inspection.</p>

<h2>7. Rising Energy Bills</h2>
<p>If your heating and cooling costs have been climbing and your HVAC system checks out fine, your roof may be the problem. Poor roof ventilation and deteriorating insulation allow heat to pour into your attic during Texas summers, making your AC work overtime.</p>

<h3>What to Do Next</h3>
<p>If you're seeing any of these signs, the smart move is a <strong>free professional inspection</strong>. At Jerrys Roofing, we inspect your roof honestly and tell you exactly what we find — whether that's a simple repair, a Roof Rejoov treatment, or a full replacement. No pressure, no upselling. Just straight talk and quality work.</p>
<p><a href="/contact">Schedule your free roof inspection</a> or call us at <strong>(409) 351-1529</strong>. We serve Katy, Cypress, Cinco Ranch, Richmond, Fulshear, and all surrounding areas.</p>
`,
  },
  {
    slug: 'roof-replacement-vs-repair-katy',
    title: 'Roof Replacement vs. Repair: Which One Do You Need?',
    description: "Should you repair or replace your roof? Jerrys Roofing in Katy TX breaks down the factors that determine the right choice for your home and budget.",
    date: '2026-01-15',
    dateModified: '2026-04-11',
    readTime: '4 min read',
    category: 'Roofing Guide',
    keywords: ['roof repair vs replacement Katy TX', 'should I replace my roof', 'roof repair Katy TX', 'roof replacement cost Cypress TX', 'roofing contractor Cinco Ranch'],
    tldr: "Repair your Katy roof if the damage is localized (a few shingles, one leak point, isolated flashing), the roof is under 15 years old, and the rest of the system is sound. Replace it if the roof is 20+ years old, more than 30% of the surface is damaged, you're seeing systemic granule loss, or you're filing a storm-damage insurance claim. A third option — Roof Rejoov — extends a healthy aging roof by 5-10 years for a fraction of replacement cost. Call (409) 351-1529 for an honest assessment — we'll tell you the truth even if it means less work for us.",
    content: `
<h2>Repair or Replace? The Honest Answer</h2>
<p>One of the most common questions homeowners in Katy ask us is: "Do I need a whole new roof, or can you just fix it?" It's a fair question — and at <a href="/about">Jerrys Roofing</a>, we believe in giving you the honest answer, even when a repair means less business for us.</p>
<p>Here's how we help homeowners across Katy, Cypress, Cinco Ranch, and Richmond make the right decision.</p>

<h2>When a Repair Makes Sense</h2>
<p>Roof repairs are the right call when:</p>
<ul>
  <li><strong>The damage is localized.</strong> A few missing or damaged shingles from a storm can usually be replaced without touching the rest of the roof.</li>
  <li><strong>Your roof is relatively new.</strong> If your roof is under 15 years old and the issue is isolated, a repair extends its life without the cost of replacement.</li>
  <li><strong>There's a single leak point.</strong> A leak around a vent pipe, skylight, or chimney flashing can often be fixed with targeted repair work.</li>
  <li><strong>Budget is tight right now.</strong> A quality repair buys you time while you plan for a replacement down the road.</li>
</ul>

<h2>When Replacement Is the Smarter Move</h2>
<p>A full replacement becomes the better investment when:</p>
<ul>
  <li><strong>Your roof is 20+ years old.</strong> Patching an aging roof is like putting new tires on a car with a bad engine. The underlying materials are at the end of their lifespan.</li>
  <li><strong>Damage is widespread.</strong> If more than 30% of your roof is affected, replacement is typically more cost-effective than multiple repairs.</li>
  <li><strong>You're seeing systemic issues.</strong> Granule loss across the entire roof, widespread curling, or multiple leak points signal it's time.</li>
  <li><strong>You're filing an insurance claim.</strong> If storm damage is extensive enough for an insurance claim, replacement often costs you only your deductible.</li>
  <li><strong>You're planning to sell.</strong> A new roof significantly boosts home value and curb appeal.</li>
</ul>

<h2>The Third Option: Roof Rejoov</h2>
<p>There's a middle ground that many homeowners don't know about — <a href="/roof-rejoov">Roof Rejoov</a>. This bio-based treatment restores the oils in aging asphalt shingles, extending your roof's life by 5-10 years at a fraction of the cost of replacement. It's perfect for roofs that are aging but not yet damaged.</p>

<h3>Get an Honest Assessment</h3>
<p>At Jerrys Roofing, we never push a replacement when a repair will do the job. Jerry personally inspects every roof and gives you a clear, written assessment of your options. <a href="/contact">Request your free inspection</a> or call <strong>(409) 351-1529</strong>.</p>
`,
  },
  {
    slug: 'texas-storm-damage-insurance-claims-guide',
    title: 'Texas Storm Damage: Your Guide to Roof Insurance Claims',
    description: "How to file a roof insurance claim after storm damage in Katy, TX. Jerrys Roofing walks you through the process from inspection to installation.",
    date: '2025-12-20',
    dateModified: '2026-04-11',
    readTime: '6 min read',
    category: 'Insurance & Claims',
    keywords: ['roof insurance claim Katy TX', 'storm damage roof repair Katy', 'hail damage roof Cypress TX', 'roof insurance claim process Texas', 'storm damage roofer Cinco Ranch'],
    tldr: "After a Texas hailstorm or windstorm, document the damage with photos, call a trusted local roofer for a free inspection BEFORE filing with insurance, then file your claim. Texas Insurance Code §542A gives you up to 1 year from the date of loss to file (verify the deadline with TDI for your specific event). Insurance adjusters often miss damage a trained roofer catches — having Jerry meet the adjuster on-site protects you from being underpaid. Avoid door-to-door storm chasers and anyone offering to waive your deductible (illegal in Texas). Call (409) 351-1529 for a free post-storm inspection.",
    content: `
<h2>What to Do After Storm Damage Hits Your Roof</h2>
<p>Texas storms — hail, high winds, hurricanes, and tropical storms — can damage your roof in minutes. If you're a homeowner in Katy, Cypress, Cinco Ranch, Richmond, or anywhere in the greater Houston area, knowing what to do after a storm can save you thousands of dollars and months of headaches.</p>
<p>At <a href="/about">Jerrys Roofing</a>, we've helped hundreds of homeowners navigate the insurance claims process. Here's our step-by-step guide.</p>

<h2>Step 1: Document the Damage</h2>
<p>Before you do anything else, document everything. Take photos of your roof from the ground (don't climb up — it's not safe after storm damage), photograph any interior water damage, and save any weather alerts or news reports about the storm. This documentation supports your claim.</p>

<h2>Step 2: Call a Trusted Roofer FIRST</h2>
<p>Before calling your insurance company, call a trusted local roofer for a free inspection. At Jerrys Roofing, we inspect your roof and document the damage professionally — photos, measurements, and a detailed report. This gives you an accurate picture of what's wrong before the insurance adjuster arrives.</p>

<h3>Why this matters:</h3>
<ul>
  <li>Insurance adjusters are not roofers. They may miss hidden damage that a trained eye catches.</li>
  <li>Having your own professional assessment protects you from being underpaid on your claim.</li>
  <li>A good roofer will be there when the adjuster comes to make sure nothing is overlooked.</li>
</ul>

<h2>Step 3: File Your Claim</h2>
<p>Contact your insurance company to file a claim. Important details:</p>
<ul>
  <li><strong>In Texas, you have up to two years</strong> after a natural disaster to file a claim for storm damage.</li>
  <li>Your insurance company will send an adjuster to inspect the damage.</li>
  <li>Jerrys Roofing can meet the adjuster on-site to ensure all damage is properly documented.</li>
</ul>

<h2>Step 4: Review the Adjuster's Report</h2>
<p>Once the adjuster submits their report, your insurance company will issue an estimate. Compare this to the assessment from your roofer. If the numbers are significantly different, you have the right to request a re-inspection or file a supplement.</p>

<h2>Step 5: Get the Work Done Right</h2>
<p>Once your claim is approved, choose a roofer you trust — not a storm chaser who knocked on your door. At Jerrys Roofing, we're a locally-owned Katy company. We've been here since 2024 and we'll be here long after the job is done.</p>

<h3>Red Flags to Watch For</h3>
<ul>
  <li><strong>Door-to-door roofers</strong> who show up right after a storm. Many are out-of-state companies that do quick work and disappear.</li>
  <li><strong>Anyone who asks you to sign over your insurance claim.</strong> This removes your control over the process.</li>
  <li><strong>Unusually low estimates.</strong> If a price seems too good to be true, corners will be cut.</li>
</ul>

<h2>Recent Natural Disasters in the Katy Area</h2>
<p>Texas storms are becoming more common in the greater Houston area. Some major recent events include:</p>
<ul>
  <li>East Texas Flood &amp; Hail (04/30/2024) — 2-year deadline: 04/30/2026</li>
  <li>Houston Derecho (05/14/2024) — 2-year deadline: 05/14/2026</li>
</ul>
<p>If your home was affected by any of these events and you haven't filed a claim yet, you may still be within the deadline. <a href="/contact">Contact Jerrys Roofing</a> for a free storm damage inspection.</p>

<h3>We Handle the Paperwork</h3>
<p>At Jerrys Roofing, we work with your insurance company through the entire process — from the initial inspection to the final invoice. Our goal is to make sure you get the coverage you're entitled to, with zero stress. Call <strong>(409) 351-1529</strong> or <a href="/contact">request a free inspection online</a>.</p>
`,
  },
];

// Merge the original 3 hand-written posts with the 12 AEO-format batches.
// Staged posts (date in the future) are filtered out so they auto-publish
// on their date. Combined with ISR (`export const revalidate`) on blog pages,
// this gives us autopilot weekly drip without any manual work.
const originalPosts = blogPosts;
const mergedPosts: BlogPost[] = [
  ...originalPosts,
  ...blogBatch1,
  ...blogBatch2,
];

/** Returns true if the post's publish date is today or earlier. */
function isPublished(post: BlogPost): boolean {
  // Compare at day granularity in UTC so builds at odd hours behave predictably
  const postDay = new Date(post.date + 'T00:00:00Z').getTime();
  const today = new Date();
  const todayDay = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  return postDay <= todayDay;
}

/**
 * Live posts only — staged/future-dated posts are hidden until their date arrives.
 * Sorted newest-first.
 */
export const allBlogPosts: BlogPost[] = mergedPosts
  .filter(isPublished)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

/** Only returns slugs for posts whose publish date has arrived. */
export function getAllSlugs(): string[] {
  return allBlogPosts.map((post) => post.slug);
}

/** Returns the post if it exists AND its publish date has arrived. Otherwise undefined → 404. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.slug === slug);
}
