# Jerry's Roofing — SEO Action Plan (from 3-month GSC data)

**Date:** 2026-07-22
**Data source:** `3months_gsc_data/` (Google Search Console, last 3 months)
**Site:** roofingbyjerry.com (Next.js 16 app in this repo)
**Prepared for:** Anthony / QuickLaunchWeb

---

## Execution status (updated 2026-07-23 · branch `seo/gsc-optimization-2026-07`)

| # | Initiative | Status |
|---|-----------|--------|
| P1 | Title & meta CTR rewrites | ✅ **Done** — homepage, 10 city pages, 6 service pages, insurance pillar |
| P2 | Quick-win tuning + internal links | ✅ **Done** — FAQ schema already present; service pages already linked site-wide via footer; titles sharpened in P1 |
| P3 | Neighborhood insurance pages | ✅ **Done** — 8 pages built (Cinco Ranch, Cane Island, Grand Lakes, Cross Creek Ranch, Firethorne, Elyson, Jordan Ranch, Nottingham Country) |
| P4 | Canonical / redirect cleanup | ✅ **Done** — standardized all in-app URLs on **www** (Vercel's primary, which already 308s apex→www). No conflicting redirect. |
| P5 | Shingle content cluster | ⏳ **Deferred** — content task: hero post already ranks (pos 7.7); add 2–3 satellite posts + refresh later |
| P6 | Tighten geo focus | ℹ️ **No code action** — no far-flung *pages* exist; distant gutter impressions are low-value query noise, not dedicated pages to prune |

**Canonical host = `https://www.roofingbyjerry.com`.** Confirmed: Vercel's primary domain is www and already 308-redirects the apex → www at the edge. All in-app URLs (metadataBase, config domain, sitemap, OG, JSON-LD) were flipped to www to match, so canonical, sitemap, and the live redirect all agree. No Next-level redirect needed (an earlier www→apex rule was removed to avoid a loop).

**Post-deploy:** In GSC, use URL Inspection → Request Indexing on the rewritten pages (homepage, `/insurance-claims`, `/service-area/*`, `/services/gutters|roof-inspection|roof-repair`) and submit the new `/insurance-claims/*` neighborhood URLs so the new titles + pages get recrawled fast.

---

## Executive summary

Over the last 3 months the site earned **~29,500 impressions but only 142 clicks — a 0.48% CTR.**
Average position is **~16.8**, with a large number of page-1 and page-2 rankings.

**Translation:** Google already trusts the site enough to show it constantly. The problem is almost
entirely **downstream of ranking** — weak titles/metas that don't earn the click, and missing pages
for demand the site is already being shown for. Very little of the upside here requires "new SEO."
Most of it is capturing traffic that is *already being offered to us.*

**The three biggest facts in the data:**

1. **CTR is the bottleneck, not ranking.** 0.48% vs. a 2–4% local-service norm. Fixing titles/metas
   on pages that already rank is the single highest-ROI move on this list.
2. **Roof-insurance-claim demand is enormous and barely captured.** `/insurance-claims` pulled
   **4,625 impressions at position 13** (page 2) with 4 clicks — and beneath it sit **40+
   subdivision-level queries** ("cinco ranch roof claim", "grand lakes roof claim", etc.) that all
   funnel into one generic page. There are **zero neighborhood pages.**
3. **One blog post carries the whole site.** `/blog/best-shingles-for-texas-heat` =
   **65 of 142 total clicks.** The rest of the site barely converts impressions to clicks.

**Device note:** Mobile CTR (1.21%) is 4x desktop CTR (0.29%) despite desktop having 5x the
impressions. Desktop titles/snippets are being ignored — reinforces the CTR-rewrite priority.

**Geography note:** Traffic is 96% US and correctly Katy/West-Houston centered, BUT the site also
ranks for gutters in far-flung towns (Marshall, Abernathy, Dickinson, Godley, Slaton — 100+ mi away).
That sprawl dilutes local topical authority.

---

## Priority order (highest ROI-per-hour first)

| # | Initiative | Effort | Impact | Why this rank |
|---|-----------|--------|--------|---------------|
| **P1** | Title & meta CTR rewrite | ~1 session | 🔥🔥🔥 | Unlocks clicks on 29k existing impressions. No new ranking needed. |
| **P2** | Quick-win Katy page tuning + internal links | ~1 session | 🔥🔥🔥 | 6+ pages sitting pos 5–15 with 0 clicks. Small nudges → page 1. |
| **P3** | Neighborhood insurance-claim pages | 2–3 sessions | 🔥🔥🔥 | Biggest ceiling. 4,625+ imp of demand, near-zero competition, templated build. |
| **P4** | Technical cleanup (legacy URLs / canonical / dedup) | ~1 session | 🔥🔥 | Foundational. Stops authority leaking across URL variants. Can slot early. |
| **P5** | Shingle content cluster expansion | 1–2 sessions | 🔥🔥 | Compounds the one page already carrying the site. |
| **P6** | Tighten geographic focus | ~0.5 session | 🔥 | Prune far-flung sprawl, concentrate authority on Katy metro. |

> Do **P1 + P2 together first** — they're both "capture what already ranks" and share the same working
> session. P3 is the big growth bet. P4 can be pulled forward anytime (it's independent).

---

## P1 — Title & meta CTR rewrite  🔥 START HERE

**The problem:** Site ranks well but 0.48% CTR. Titles are generic ("Katy TX Roofing Contractor |
Jerry's Roofing") and give searchers no reason to click over competitors.

**The fix:** Rewrite `metaTitle` + meta description for the highest-impression pages using a
click-earning formula.

### CTR formula
`[Primary keyword + city] + [specific hook: free/fast/24-7/insurance] + [brand]`
- Lead with the exact search term (Google bolds it).
- Add ONE concrete hook: **Free Roof Inspection**, **We Handle Your Insurance Claim**, **24/7**,
  **Same-Week**, **(409) 351-1529**.
- Keep titles ≤ 60 chars; descriptions 140–155 chars with a call to action.

### Highest-priority pages to rewrite (by impressions)

| Page | Impr | Pos | Target title (example) |
|------|------|-----|------------------------|
| `/insurance-claims` | 4,625 | 13 | `Katy Roof Insurance Claim Help — We Handle It All \| Jerry's` |
| `/services/gutters` | 2,421 | 29 | `Seamless Gutter Installation in Katy, TX \| Jerry's Roofing` |
| `/blog/best-shingles-for-texas-heat` | 3,294 | 7.7 | `Best Roof Shingles for Texas Heat (2026 Guide) \| Jerry's` |
| Homepage `/` | 3,122 | 22 | `Katy Roofing Contractor \| Free Roof Inspection \| Jerry's Roofing` |
| `/service-area/katy` | 1,102 | 7.8 | `Katy, TX Roofer \| Free Inspection, Insurance Claims \| Jerry's` |
| `/roof-replacement-cost-katy-tx` | 630 | 7.2 | `Roof Replacement Cost in Katy, TX — 2026 Prices \| Jerry's` |
| `/services/roof-inspection` | 683 | 33 | `Free Roof Inspection in Katy, TX \| Same-Week \| Jerry's` |
| `/service-area/richmond` | 801 | 22 | `Richmond, TX Roofing Contractor \| Free Inspection \| Jerry's` |
| `/services/roof-repair` | 365 | 24 | `Roof Repair in Katy, TX \| Fast, Insurance-Approved \| Jerry's` |
| `/blog/gutter-installation-cost-katy` | 576 | 13 | `Gutter Installation Cost in Katy, TX (2026) \| Jerry's Roofing` |

**How to execute:**
- City page titles live in `app/serviceAreaData.ts` (`metaTitle` field).
- Service page titles in `app/services/[slug]` data / `ServicePageClient.tsx`.
- Blog titles in `app/blog/posts.ts` / `batch-1.ts` / `batch-2.ts`.
- Static pages (`/insurance-claims`, homepage, cost page) via their `page.tsx` `metadata` export.
- After edits: `npm run build` to confirm no type errors, deploy, then **request re-indexing** in GSC
  for each edited URL (URL Inspection → Request Indexing) to speed up title refresh.

**Expected result:** CTR from ~0.5% → 1.5–2.5% = **roughly 3–5x clicks on the same rankings.**

---

## P2 — Quick-win Katy page tuning + internal links

**The problem:** Several pages rank pos 5–15 (page 1–2 border) with **real local intent** but earn
**0 clicks** — they just need a nudge onto page 1 and a better snippet.

### Striking-distance targets (position 5–15, high impressions, 0 clicks)

| Query | Impr | Pos | Owning page |
|-------|------|-----|-------------|
| roof repair katy | 177 | 11.0 | `/services/roof-repair` |
| siding repair katy | 146 | 7.4 | `/services/siding` |
| siding installation katy | 153 | 10.5 | `/services/siding` |
| roof inspections katy | 91 | 5.3 | `/services/roof-inspection` |
| storm roof damage katy | 100 | 7.7 | `/services/storm-damage` |
| roof repair near me | 116 | 10.2 | `/services/roof-repair` |
| gutter repair near me | 129 | 18.7 | `/services/gutters` |
| elyson tx roofers | 187 | 13.6 | (needs Elyson coverage) |
| cinco ranch tx roofers | 182 | 16.1 | `/service-area/cinco-ranch` |

**How to execute (per page):**
1. Put the exact query in the H1 and first 100 words (e.g. "Roof Repair in Katy, TX").
2. Add a short FAQ block (3–5 Q&As) using the actual long-tail queries as questions, with
   `FAQPage` JSON-LD schema — this wins featured snippets AND AI-answer citations (AEO).
3. Add 2–3 internal links **into** each target page from high-authority pages (homepage, the
   best-shingles blog post, `/insurance-claims`) using keyword-rich anchor text.
4. Ensure each has `LocalBusiness` / `Service` schema with `areaServed: Katy`.

**Expected result:** Pages at pos 5–11 → top 3; pos 12–19 → page 1. These are near-term wins.

---

## P3 — Neighborhood insurance-claim pages  (biggest growth bet)

**The problem/opportunity:** `/insurance-claims` gets 4,625 impressions (pos 13) and Google is
force-fitting it against **40+ subdivision searches** it doesn't specifically answer. Each subdivision
is a low-competition, high-intent page waiting to exist.

### Subdivisions showing demand in the data (build a page for each)
Cinco Ranch · Cane Island · Grand Lakes · Cross Creek Ranch · Joran/Jordan Ranch · Katy Station ·
Trails of Katy · Elyson · Kelliwood · Kelliwood Oaks · Nottingham Country · North Katy Terrace ·
Woodcreek Reserve · Top Pine Mill Ranch · Katy Estates · Katy Heights · Katyland · Katy Townsite ·
Firethorne · Seven Meadows · Pine Mill Ranch · Cane Island · Bridgeland · Aliana · Grand Lakes

**Structure:** New dynamic route `app/insurance-claims/[neighborhood]/page.tsx` driven by a data file
(mirror the existing `serviceAreaData.ts` pattern). Each page targets:
- `[Neighborhood] Roof Insurance Claim Help | Jerry's Roofing`
- H1: "Roof Insurance Claims in [Neighborhood], Katy TX"
- Content: local storm/hail context, "we deal with your adjuster," process steps, the Free Roof Life
  Assessment offer, subdivision-specific trust copy, FAQ schema, and a CTA form.
- Add all URLs to `sitemap.ts`; interlink from the main `/insurance-claims` pillar.

**Guardrail:** Keep pages genuinely differentiated (real neighborhood detail, not spun duplicates) or
Google treats them as doorway pages. Start with the **top 8 by impression volume**, measure, expand.

**Expected result:** This is the highest-ceiling initiative — capturing the insurance-claim vertical
across Katy's subdivisions is a defensible moat no competitor is working.

---

## P4 — Technical cleanup (foundational; can pull forward)

**Problems visible in the data:**
1. **Legacy WordPress/Divi URLs still indexed:** `/wp-content/themes/Divi/…`, `/hello-world/`,
   `/wp-includes/…`. These are ghosts from the old WP site.
2. **URL duplication splitting authority:** the homepage appears indexed as `http://roofingbyjerry.com/`,
   `https://roofingbyjerry.com/`, AND `https://www.roofingbyjerry.com/` — three variants competing.
   Same for many service/area pages (www vs non-www).

**Fixes:**
- Enforce a single canonical host (pick `https://www.` **or** root — recommend `www`) via a permanent
  308 redirect at the Vercel domain / `next.config.ts` level. All other variants 301/308 to it.
- Confirm every page emits a self-referential `<link rel="canonical">` on the canonical host.
- For dead WP URLs: return 410 (Gone) or 301 to the closest live page; make sure they're **not** in
  `sitemap.ts`. Optionally disallow `/wp-*` in `robots.ts`.
- Verify `sitemap.ts` lists only canonical-host, live URLs.

**Expected result:** Consolidates ranking signals onto one URL per page — often a quiet position bump
across the board, plus cleaner CTR reporting.

---

## P5 — Shingle content cluster expansion

`/blog/best-shingles-for-texas-heat` earns 65/142 clicks at pos 7.7. The data shows a whole shingle
topic universe with impressions and no dedicated pages:
best shingles for texas · best roof shingles 2026 · best shingles for houston texas · best class 3
shingles · shingle warranty comparison · iko vs gaf vs certainteed · metal vs shingle roof texas.

**Plan:**
- Push the hero post to top-3: refresh with 2026 data, add FAQ schema, add a comparison table, and
  add internal links from service/area pages.
- Add 2–3 satellite posts (warranty comparison, metal-vs-shingle for Texas, class-3/impact shingles),
  each linking back to the hero post (topic-cluster model).

**Expected result:** Turns one workhorse page into a content hub that ranks the whole shingle vertical
and feeds internal-link authority to money pages.

---

## P6 — Tighten geographic focus

The site ranks for gutters/roofing in towns 60–120 mi from Katy (Marshall, Abernathy, Dickinson,
Godley, Slaton, Tatum, Winn Ridge). These thin, far-flung targets dilute local relevance.

**Plan:** Decide the true service radius (Katy + West Houston metro: Katy, Cypress, Fulshear,
Richmond, Sugar Land, Cinco Ranch, Brookshire, Sealy, West Houston). De-emphasize or noindex thin
programmatic pages outside it; redirect their authority inward. Don't chase gutter terms in East/
North/Central Texas.

---

## Suggested execution sequence

1. **Session 1:** P1 (title/meta rewrites, top ~12 pages) + kick off P4 canonical/redirect fix.
   Build, deploy, request re-indexing in GSC.
2. **Session 2:** P2 (Katy quick-win pages: H1/intro/FAQ schema + internal links).
3. **Sessions 3–4:** P3 (neighborhood insurance pages — top 8 first, then expand).
4. **Session 5:** P5 (shingle cluster) + P6 (geo pruning).
5. **Ongoing:** Re-pull GSC every 2–4 weeks; watch CTR (target >1.5%), insurance-claim position
   (target <10), and clicks trend. Iterate titles on anything still under 1% CTR.

## Measurement targets (re-check in 30 / 60 / 90 days)
- **Overall CTR:** 0.48% → **>1.5%** (30d) → **>2.5%** (90d)
- **Total clicks:** 142/3mo → **400+** (next 3mo)
- **`/insurance-claims` position:** 13 → **<8**
- **`best-shingles-for-texas-heat` position:** 7.7 → **top 3**
- **Neighborhood pages:** 8 live and indexed (60d)

---

## Appendix — key data references
- Full query list: `3months_gsc_data/Queries.csv` (1,000+ queries)
- Page performance: `3months_gsc_data/Pages.csv`
- Devices: Desktop 25,599 imp / 0.29% CTR · Mobile 5,442 imp / 1.21% CTR · Tablet 84 / 2.38%
- Countries: US 136 clicks / 29,453 imp / pos 16.8 (96%+ of relevant traffic)
- Current city pages: cinco-ranch, cypress, fulshear, richmond, sugar-land, college-station, katy,
  brookshire, sealy, west-houston
