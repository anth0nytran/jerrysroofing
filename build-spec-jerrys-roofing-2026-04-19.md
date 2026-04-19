# Build Spec — Jerrys Roofing

**Client:** Jerrys Roofing (roofingbyjerry.com)
**Owner:** Jerry W. Pilley
**Tier:** Growth Engine
**Spec date:** 2026-04-19
**Downstream executor:** LLM coding agent or human implementer — this doc is complete; no "check with Anthony" gaps.

> **Important context:** The site already exists as a production-grade Next.js 16 / React 19 / Tailwind 4 build. This is **not a greenfield spec** — it's an optimization-to-guarantee spec. Every requirement below is either (a) verify-in-place, or (b) gap-fill against what's shipped. The repo already contains `app/config.ts` (single source of truth for business facts), `app/serviceAreaData.ts` (6 city pages), `app/blog/batch-1.ts` + `batch-2.ts` (12 posts), and full schema in `app/layout.tsx`. Do not rebuild what's already there. Audit first, then fill gaps.

---

## 1. Client Snapshot

| Field | Value |
|---|---|
| Legal name | Jerrys Roofing |
| Owner | Jerry W. Pilley (founder, lead roofer) |
| Phone | (409) 351-1529 |
| Email | jerrysroofinginfo@gmail.com |
| Address (HQ) | 5713 2nd St B, Katy, TX 77493 |
| Domain | https://roofingbyjerry.com |
| GBP | https://g.page/jerrysroofing |
| Founded | 2024 (business) / 2019 (Jerry's roofing experience — 7 years) |
| Hours | Mon–Sun 7:00 AM – 8:00 PM |
| Price range | $$ |
| Insurance | Full liability carried (number [VERIFY with Jerry]) |
| Licenses | Texas roofing contractor [VERIFY license # with Jerry] |
| GBP reviews | 20 reviews, 5.0 average (as of config.ts) |
| Primary service | Roof Replacement |
| All services | Roof Replacement, Roof Rejoov, Gutters, Siding, Painting, Driveway Repaints, Roof Repair, Storm Damage, Insurance Claims, Free Roof Inspections |
| Manufacturers | IKO, CertainTeed, GAF, F-Wave |
| Primary city | Katy, TX |
| Service areas | Katy, Cypress, Cinco Ranch, Richmond, Fulshear, Brookshire, Sugar Land, West Houston, Sealy, College Station |
| Existing city pages | cinco-ranch, cypress, fulshear, richmond, sugar-land, college-station (6 of 10) |
| Existing blog posts | 12 |
| Project photos on hand | 60+ in `/public/real_photos/` (classified in CLASSIFICATION.md) |

---

## 2. Qualification Verdict (Phase 1B)

**Verdict:** ⚠️ **Partial-downgrade approval.** Full stacked guarantee applies to three suburbs; Katy-metro Maps is downgraded from Top-3 → Top-5.

| Check | Status | Notes |
|---|---|---|
| Real address within 20mi of target city | ✅ PASS | 5713 2nd St B, Katy TX 77493 |
| Primary service maps to a real GBP category | ✅ PASS | "Roofing Contractor" |
| Domain owned | ✅ PASS | roofingbyjerry.com |
| Client commits to 15+ reviews in 90 days | 🟡 VERIFY at kickoff | Required for guarantee to stand |
| Top 3 Katy Maps competitors avg <150 reviews | ❌ FAIL | Spot-checked: avg ~200+ reviews. **Downgrade Katy to Top-5.** |
| Top 3 Fulshear/Brookshire/Sealy competitors avg <150 reviews | ✅ PASS | Suburban pools thin — full Top-3 guarantee holds |

**Applied downgrades** (must be reflected in client-onboarding.md AND this spec):
- Katy-metro Maps: **Top-5** (not Top-3).
- Suburb Maps (Fulshear, Brookshire, Sealy): Top-3 stands.
- AI citation guarantee ("best roofer Katy TX"): stands — AEO/GEO score targets must be hit to keep it safe.

---

## 3. Guarantee → Build Requirement Map

Every guarantee item must be **designed in**, not bolted on. Here's the mapping:

| Guarantee Item | Build Requirement (what the coder must satisfy) |
|---|---|
| 1. Live + indexed in 48h | Verify `sitemap.ts` submits to GSC + Bing Webmaster; ping IndexNow on every deploy; verify `robots.ts` is not blocking money pages |
| 2a. Top-3 Maps (Fulshear, Brookshire, Sealy) | Service-area pages for each with unique intros, 5+ FAQs each, LocalBusiness schema w/ `areaServed`, embedded Google Map, GBP category match, 15 citation sync |
| 2b. Top-5 Maps (Katy) | Home + /services/roof-replacement must score ≥90 on AEO + ≥80 on GEO checklists. GBP posts 2x/week. Review velocity ≥5/mo. |
| 3. 15+ reviews | Review request automation: SMS 2h after job completion, email fallback at 48h, Google review link tap-through. Review response templates ready for Jerry. |
| 4. AI citation ("best roofer Katy TX") | Every money page: 5+ PAA answers, answer-first ≤55-word block under H1, Organization schema with `sameAs` to GBP/FB/IG/YT/Yelp/BBB, owner bio w/ headshot + credentials, 1+ original data point per pillar article, 2 monthly pillar posts w/ inline citations |
| 5. Missed-call text-back | Twilio (or GHL) number forwarding + auto-SMS on voicemail trigger — 30s delay, templated message with booking link; form submissions SMS + email Jerry within 60s |
| 6. Monthly Value Receipt | `/reports/YYYY-MM-value-receipt.pdf` template committed to repo; monthly generation spec documented |

---

## 4. Information Architecture (target sitemap)

Already shipped (verify):
- `/` — Home
- `/about` — Owner bio (needs headshot + credentials added — see §7)
- `/services` — Services index
- `/services/[slug]` — 8 service pages: roof-replacement, roof-rejoov, gutters, siding, painting, driveway-repaints, roof-inspection, roof-repair, storm-damage
- `/service-area` — Service-area index
- `/service-area/[city]` — 6 city pages: cinco-ranch, cypress, fulshear, richmond, sugar-land, college-station
- `/blog` + `/blog/[slug]` — 12 posts
- `/contact` — contact form
- `/gallery` — project gallery
- `/texas-made` — brand story
- `/insurance-claims` — insurance hub pillar
- `/glossary` — terms glossary
- `/roof-replacement-cost-katy-tx` — cost pillar
- `/roof-rejoov` — Rejoov landing
- `/robots.ts`, `/sitemap.ts`

**Gap-fill required (this engagement):**
- `/service-area/katy` — the PRIMARY city currently has no dedicated landing page. **Highest priority add.**
- `/service-area/brookshire` — required for the suburb Top-3 guarantee.
- `/service-area/sealy` — required for the suburb Top-3 guarantee.
- `/service-area/west-houston` — ship if time allows.
- Service × City combos for top-revenue pairs: `/services/roof-replacement?city=fulshear` style or dedicated `/roof-replacement-fulshear-tx` slugs (2 combos: roof-replacement × fulshear, storm-damage × cinco-ranch) — decide based on search-volume check; default to dedicated slugs if volume warrants.
- `/reviews` — aggregated reviews page pulling from GBP JSON schema + testimonials in `config.ts`. Currently reviews only live on home (`#reviews` anchor).
- `/privacy`, `/terms` — [VERIFY if present]; create if missing.

---

## 5. Per-Page On-Page SEO Spec

For each money page, the coder must verify ALL of the following pass. Where a page already exists, audit + patch; don't rebuild.

### Template (repeat for every page in §4)

```
URL slug:               /service-area/brookshire
Title tag (≤60):        Roofing Contractor in Brookshire, TX | Jerrys Roofing
Meta description (≤155): Brookshire, TX roofer with 7 years local experience. Roof replacement, repairs, storm damage. Free inspection. Call (409) 351-1529.
H1:                     Roofing Contractor in Brookshire, TX
Answer-first paragraph: ≤55 words directly under H1, stating: who we are, where we serve, 3 services, phone, free-inspection offer
H2s (question form):    "How much does a roof replacement cost in Brookshire, TX?"
                        "What roofing materials hold up in the Brookshire climate?"
                        "Do you handle insurance claims for Brookshire hail damage?"
                        "How fast can you inspect my Brookshire roof?"
                        "What sets Jerrys Roofing apart in Brookshire?"
Required schema:        LocalBusiness (with areaServed=Brookshire, geo lat/lng),
                        Service (provider, areaServed, offers),
                        FAQPage (matching visible FAQ),
                        BreadcrumbList,
                        Organization (inherited from layout.tsx with sameAs)
Internal links (min 6): → /services/roof-replacement,
                        → /services/roof-repair,
                        → /services/storm-damage,
                        → /services/roof-rejoov,
                        → /insurance-claims,
                        → /roof-replacement-cost-katy-tx,
                        → /about
Unique proof required:  1 named project (customer first name + neighborhood),
                        3+ project photos with geo-hinted alt text,
                        1 local-specific stat or observation (hail history,
                        local codes, HOA context)
Alt text pattern:       "[service] [city] TX [specific detail]"
                        e.g. "roof replacement Brookshire TX architectural shingles"
```

Apply the same template structure to:
- Home (`/`)
- `/services/roof-replacement` (primary money page)
- `/services/roof-rejoov` (differentiator money page)
- `/services/storm-damage` (high-intent post-storm queries)
- `/services/roof-repair`, `/services/gutters`, `/services/siding`, `/services/painting`, `/services/driveway-repaints`, `/services/roof-inspection`
- Every `/service-area/[city]` page
- `/insurance-claims`, `/roof-replacement-cost-katy-tx`

For existing pages, **audit against this template and patch gaps in-place**. Do not rewrite whole files when a meta description or H2 rewrite will do.

---

## 6. AEO Requirements (inherited verbatim from seo-geo-aeo-audit.md Phase 2)

Every money page must pass 12/12:

- [ ] Direct answer in first 150 words for the page's primary query
- [ ] Question-style H2s that mirror real user queries
- [ ] Scannable answer blocks — each H2 followed by 40–60 word direct answer before elaboration
- [ ] FAQ section with 4+ Q&As written as natural questions (not keyword-stuffed)
- [ ] FAQPage schema matching visible FAQ
- [ ] HowTo / Article / Service / LocalBusiness schema matching page type + visible content
- [ ] Table or comparison block where topic warrants (pricing, materials, options)
- [ ] Bulleted lists for any "steps / pros / cons / what's included"
- [ ] Explicit units and numbers ($, sq ft, years, gauge, psi)
- [ ] Voice-search-friendly phrasing — at least one H2 as complete natural question
- [ ] "People Also Ask" coverage — page answers ≥3 PAA questions from live SERP
- [ ] Snippet-target paragraph ≤55 words positioned right under H1 or first H2

**AEO target per money page:** 11/12 minimum. **Site-average target:** 90+.

---

## 7. GEO Requirements (inherited verbatim from seo-geo-aeo-audit.md Phase 3)

Every money page must pass 13/13:

- [ ] Named entity clarity — brand + owner + city + service all in first paragraph
- [ ] sameAs links in Organization schema → GBP, Facebook, Instagram, YouTube, LinkedIn, Yelp, BBB
- [ ] Author / owner bio with credentials + headshot on About AND every service page
- [ ] Inline citations to authoritative sources (ICC codes, TDI, Texas Windstorm, manufacturer spec sheets)
- [ ] Original statistics — ≥1 unique data point, internal survey, or calculation per site
- [ ] Expert quote — direct pull-quote from Jerry on every money page
- [ ] Comparisons — named category comparisons ("IKO vs CertainTeed vs GAF for Gulf humidity")
- [ ] Unique angle / POV — Jerrys Roofing's ownable framework (e.g. "Rejoov vs. Replace decision tree")
- [ ] Citation magnet format — ≥1 of: data table, step list, glossary, decision tree per page
- [ ] No generic AI-filler prose — copy must read like Jerry, not ChatGPT
- [ ] Canonical + schema + visible copy all agree
- [ ] Breadcrumbs present + BreadcrumbList schema
- [ ] Knowledge-graph surface area — Wikidata, Crunchbase, BBB accredited, HomeAdvisor Pro, TAMKO partner directory, Angi Pro (site-level, target: 3+)

**Missing on current build (gap-fill):**
- Owner headshot on About + each service page — **BLOCKER until Jerry provides photo**
- sameAs links in Organization schema currently include GBP, Facebook, Instagram — **add YouTube, LinkedIn, Yelp, BBB, Angi once URLs exist**
- Wikidata entry — create in Week 6
- Named expert quote per service page — extract 6 Jerry-voice quotes from existing copy or record via phone

**GEO target per money page:** 12/13 minimum. **Site-average target:** 80+.

---

## 8. Local + Entity Requirements (inherited verbatim from Phase 4)

All 8 items must be in place before Day 30:

- [ ] GBP claimed, primary category = "Roofing Contractor", secondary = ["Roofing Supply Store" is WRONG — use "Gutter Cleaning Service", "Siding Contractor", "Painter"]
- [ ] NAP identical across site (`config.ts`), GBP, Facebook, Yelp, BBB, Apple Maps — **single source of truth: `app/config.ts`**
- [ ] Service-area pages for each city with unique intro + unique FAQs + embedded map + LocalBusiness schema w/ `areaServed` (6/10 done; add katy, brookshire, sealy, west-houston)
- [ ] Reviews ≥50 on GBP, avg ≥4.6, responded-to — **currently 20; review-request automation must close the 30-review gap in 90 days**
- [ ] ≥6 project photos per service page with geo-hinted alt text — audit current count; fill from `/public/real_photos/` (60+ available)
- [ ] License + insurance numbers published — **BLOCKER: [VERIFY with Jerry and add to footer + About page]**
- [ ] Service schema with `areaServed`, `provider`, `offers` — currently partial, verify on each /services/[slug]
- [ ] LocalBusiness schema with `geo`, `openingHours`, `priceRange`, `aggregateRating` — already present in `app/layout.tsx`; verify still accurate

**Citation targets (15 minimum):**
1. Google Business Profile ✅
2. Bing Places — **claim**
3. Apple Business Connect — **claim**
4. Yelp — **claim/verify**
5. BBB (accredited preferred) — **apply**
6. Angi (Angi Pro listing) — **claim**
7. HomeAdvisor Pro — **claim**
8. Nextdoor Business — **claim**
9. Thumbtack — **claim**
10. Facebook Business — **verify**
11. Chamber of Commerce (Katy Area Chamber) — **join**
12. Houston BBB — **verify**
13. TAMKO / IKO / CertainTeed / GAF contractor directories — **submit**
14. F-Wave contractor directory — **submit**
15. GuildQuality or similar industry directory — **submit**

**GBP NAP string (canonical):**
```
Jerrys Roofing
5713 2nd St B, Katy, TX 77493
(409) 351-1529
```
Every citation must match this string **byte-for-byte** (no "Jerry's" apostrophe, no "Suite B", no "+1 409...").

---

## 9. Technical Spec

| Item | Requirement | Current State |
|---|---|---|
| Hosting | Vercel (Next.js-native) | ✅ Assumed Vercel |
| Stack | Next.js 16 + React 19 + Tailwind 4 | ✅ |
| LCP | <2.0s on all money pages | Audit with Lighthouse weekly |
| INP | <200ms | Audit weekly |
| CLS | <0.1 | Audit weekly |
| Images | next/image, AVIF/WebP, geotagged alt text | Partial — verify every service + city page uses `next/image`, not `<img>` |
| `llms.txt` | At domain root, listing all money pages + their primary keyword | **Gap-fill — create `/public/llms.txt`** |
| `robots.txt` | Generated by `app/robots.ts` — verify no money pages blocked | ✅ |
| `sitemap.xml` | Generated by `app/sitemap.ts`, hourly revalidate | ✅ |
| IndexNow | Pinged on every deploy | **Gap-fill — add to `next.config.ts` or Vercel deploy hook** |
| Analytics | GA4 + Search Console + Bing Webmaster | `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var wired; **verify value set in prod; verify GSC + Bing connected** |
| Schema validation | Passes Rich Results Test | Run on all money pages pre-launch |

---

## 10. Automation Spec

**Missed-call text-back**
- Trigger: any call to (409) 351-1529 that goes to voicemail
- Delay: 30 seconds
- Template: `Hey {{FirstName}} — this is Jerry. I was on a roof and missed your call. What's going on with yours? I'll call back within the hour, or you can book a free inspection here: {{BookingLink}}`
- Implementation: Twilio Programmable Messaging + Twilio Voice fallback, OR GoHighLevel (GHL) if client prefers turnkey
- Booking link: `/contact?utm_source=missed-call`

**Review request**
- Trigger: Jerry marks job complete in [whatever he uses — phone note OK], 2h delay
- Channel 1 (SMS): `Hey {{FirstName}} — Jerry here. Thanks for trusting me with your roof. If we earned it, a quick Google review means everything to a small crew like ours: {{GoogleReviewLink}}`
- Channel 2 (Email @ 48h if no review): same message + a photo of the completed job
- Auto-reply to new Google reviews: Jerry drafts (AI polishes) within 24h using the template library in `/reports/review-responses.md` (to be created)

**Lead routing**
- `/contact` form submit → SMS to Jerry's cell + email to jerrysroofinginfo@gmail.com + CRM log (tbd)
- Under-60-second SLA on notification
- `app/api/` already has a Resend integration — verify it's wired to the correct inbox and SMS is added

**After-hours auto-responder**
- Applies 8pm–7am outside business hours
- SMS: `Thanks for reaching out — Jerry's crew is off the roofs right now. We'll call you back tomorrow before 9am. For emergencies (active leak) call (409) 351-1529 and leave URGENT in your voicemail.`

---

## 11. Content Production Plan

**Launch content (Weeks 1–4):**
- Home + 9 service pages — **already shipped**, audit + patch only
- 10 city pages — 6 shipped, **add Katy, Brookshire, Sealy, West Houston**
- About page — **add owner bio + headshot + credentials**
- Case study page — **gap-fill: create `/case-studies/` with 3 named projects (customer first name + neighborhood + scope + before/after photos). Pull from existing `serviceAreaData.ts` projects array.**

**Ongoing cadence (Weeks 5–12, Growth Engine tier):**
- 1 blog post / month (1,500+ words, 3+ authoritative inline citations, 1+ original data point, FAQPage schema)
- 2 new service-area pages / month (Brookshire, Sealy in month 1; if new suburbs surface in GSC data, add those in month 2–3)
- 2 GBP posts / week (weekly tip + weekly before/after photo)

**Every blog post must pass:**
- AEO checklist (12/12)
- GEO checklist 10/13 minimum (expert quote, original stat, inline citations)
- Article schema with `author` = Jerry W. Pilley
- Internal link to ≥2 service pages + ≥1 city page
- `/public/real_photos/CLASSIFICATION.md` referenced to pick relevant photos

---

## 12. Review + Reputation Plan

- **Target:** 15 new reviews in 90 days (from 20 → 35)
- **Sources:** 30–40 approved past customers
- **Cadence:** 3–5 review requests sent per week on staggered days
- **Tools:**
  - QR card printed for Jerry's truck + handed to customer on job completion
  - SMS template (see §10)
  - Post-job email with job photos + review link
  - Auto-reply to 5-star reviews (gratitude + next-service cross-sell)
  - Auto-reply to <5-star reviews (apology + private-resolution offer + corrective action note — Jerry drafts, AI polishes, reply within 4h)
- **Guardrails:** never incentivize reviews ($/discount) — Google ToS violation. Always ask for honest feedback.

---

## 13. Pre-Launch QA Checklist

Coder runs ALL of these before marking any patch complete:

- [ ] All SEO / AEO / GEO checklists pass per-page (score in a shared sheet)
- [ ] No broken internal links (`npx next-sitemap` or `linkinator` run clean)
- [ ] No orphan pages (every money page reachable from home in ≤3 clicks)
- [ ] Schema validates in [Rich Results Test](https://search.google.com/test/rich-results) — LocalBusiness, Service, FAQPage, BreadcrumbList, Article all green
- [ ] Mobile Lighthouse ≥90 on every money page (Performance, Accessibility, Best Practices, SEO)
- [ ] `/contact` form submits → email received at jerrysroofinginfo@gmail.com + SMS received at Jerry's cell
- [ ] GBP, Bing Places, Apple Business Connect all show matching NAP
- [ ] `llms.txt` live at domain root
- [ ] `robots.txt` live, does not block money pages
- [ ] `sitemap.xml` live, includes all money pages
- [ ] IndexNow ping fires on deploy (check Bing Webmaster IndexNow log)
- [ ] GA4 events firing (pageview, form submit, phone click, outbound link)
- [ ] Core Web Vitals: LCP <2.0s, INP <200ms, CLS <0.1 on every money page (field data, not lab)

---

## 14. Ongoing Monitoring Spec

| Metric | Week 4 | Week 8 | Week 12 |
|---|---|---|---|
| New reviews (cumulative) | 3+ | 8+ | 15+ |
| GBP impressions (vs. baseline) | +50% | +150% | +200% |
| Map rank — Fulshear | Top 10 | Top 5 | Top 3 |
| Map rank — Brookshire | Top 10 | Top 5 | Top 3 |
| Map rank — Sealy | Top 10 | Top 5 | Top 3 |
| Map rank — Katy (metro) | Top 10 | Top 7 | Top 5 |
| GBP posts | 4 | 8 | 12 |
| City pages live | 8 (add Katy in wk 1–2) | 9 (add Brookshire) | 10 (add Sealy, West Houston) |
| Citations built | 7 | 11 | 15 |
| AEO score (site avg) | 75 | 85 | 90 |
| GEO score (site avg) | 65 | 75 | 80 |
| Local score | 70 | 85 | 95 |
| AI citation check (ChatGPT, Perplexity, Gemini) for "best roofer Katy TX" | not expected | 1+ engine names us | 2+ engines name us |

Any metric **red at week 4** triggers course correction — extra review push, extra citation push, or content velocity increase.

---

## 15. Handoff to Audit Command

End of Week 1, Week 4, and Week 12:
- Run `/seo-geo-aeo-audit https://roofingbyjerry.com` against the deployed site
- Attach scores to Monthly Value Receipt
- File audit artifacts in `webaudit/` alongside the existing `jerrys-seo-aeo-geo-audit-2026.md`

**Week 12 pass criteria (build spec is complete only if all hit):**
- SEO Core score ≥ 85
- AEO score ≥ 80
- GEO score ≥ 75
- Local score ≥ 90
- Guarantee items 1–6 all satisfied OR explicitly waived with documented reason

---

## Open Questions / Blockers

Before Week 1 execution can start:

1. **License + insurance numbers.** Required for footer + About page. Jerry must share.
2. **Owner headshot.** Required for About + service pages (GEO blocker). Jerry must shoot or send existing.
3. **Social URLs.** Need confirmed URLs for YouTube, LinkedIn, Yelp, BBB, Angi, HomeAdvisor to populate `sameAs`. If not claimed, Week 2 task to claim them.
4. **Past-customer list for reviews.** Jerry approves 30–40 names + phone numbers before review-request automation goes live.
5. **Twilio vs GHL for missed-call text-back.** Decision needed — Twilio is cheaper (~$5/mo) and more flexible; GHL is turnkey but $97+/mo. Recommend Twilio.
6. **Case study photos/consent.** Need 3 named customers who consent to first-name-only case study write-ups.

---

**This spec is complete.** Hand to the coding agent; no additional Anthony-decisions required to begin Week 1 execution.
