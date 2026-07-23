/**
 * Neighborhood Roof Insurance Claim Pages — Jerry's Roofing
 *
 * Built from Google Search Console data (3-month), which showed dozens of
 * subdivision-level "[neighborhood] roof claim / roof insurance" searches all
 * landing on the single generic /insurance-claims pillar (4,625 impressions,
 * position ~13). Each entry powers a differentiated /insurance-claims/[slug]
 * landing page targeting that neighborhood's claim intent — real local storm
 * history, build-era detail, and HOA context so these are not doorway pages.
 *
 * Owner: Jerry W. Pilley — (409) 351-1529.
 */

export interface NeighborhoodClaimFAQ {
  q: string;
  a: string;
}

export interface NeighborhoodClaimIssue {
  issue: string;
  detail: string;
}

export interface NeighborhoodClaim {
  slug: string;
  name: string;
  /** Parent city for breadcrumb + copy, e.g. "Katy, TX" */
  city: string;
  zips: string[];
  geo: { latitude: number; longitude: number };

  metaTitle: string;
  metaDescription: string;

  h1: string;
  heroTagline: string;

  /** AI-Overview / quick-answer block */
  tldr: string;

  /** Long-form local context paragraph */
  intro: string;

  /** Claim-specific issues seen in this neighborhood */
  claimIssues: NeighborhoodClaimIssue[];

  faqs: NeighborhoodClaimFAQ[];

  /** Other neighborhood slugs for internal linking */
  nearby: string[];
  /** Optional related service-area city slug (existing /service-area/[slug]) */
  serviceAreaSlug?: string;
}

export const neighborhoodClaims: NeighborhoodClaim[] = [
  // ============================================================
  // CINCO RANCH
  // ============================================================
  {
    slug: 'cinco-ranch',
    name: 'Cinco Ranch',
    city: 'Katy, TX',
    zips: ['77494', '77450'],
    geo: { latitude: 29.7569, longitude: -95.78 },
    metaTitle: 'Cinco Ranch Roof Insurance Claim Help | Jerry\'s Roofing',
    metaDescription:
      'Roof insurance claim in Cinco Ranch? Jerry meets your adjuster on the roof, documents every hail hit, and never touches your deductible. Free inspection: (409) 351-1529.',
    h1: 'Roof Insurance Claims in Cinco Ranch, Katy TX',
    heroTagline:
      'Hail and wind damage claims across every Cinco Ranch village — from Greenway to Pine Mill Ranch. Jerry walks the roof with your adjuster.',
    tldr:
      "Jerry's Roofing helps Cinco Ranch homeowners file and win roof insurance claims after hail and windstorms. We do a free pre-claim inspection, document impact damage with adjuster-grade photos, meet your insurance adjuster on the roof, and supplement the scope for anything they miss — at no cost and without ever touching your deductible. Most Cinco Ranch homes were built 1991–2015, which puts many roofs squarely in the age window where carriers scrutinize claims hardest. Call (409) 351-1529 for a straight answer on whether your Cinco Ranch roof has a claim worth filing.",
    intro:
      "Cinco Ranch sits right in the middle of the Texas hail belt, which is why roof insurance claims are a constant here. The community spans roughly 8,000 acres on both sides of the Grand Parkway, with most homes built between 1991 and 2015 — a lot of those roofs are now in the 15-to-25-year window where adjusters start denying claims for wear instead of storm damage. That makes documentation everything. When a claim is filed on a Cinco Ranch roof, the difference between an approval and a denial is usually whether someone photographed the hail bruising correctly against a test square before the adjuster ever climbed up. Jerry has met adjusters on roofs across Greenway Village, Equestrian Village, Pine Mill Ranch, and the Estates, and he knows the pattern: adjusters inspect dozens of roofs a week and miss hits a trained roofer catches. Cinco Ranch also has strict HOAs — Cinco Residential Property Association and the village sub-associations all require architectural review for shingle color, which matters once a claim is approved and it's time to replace. We handle the claim documentation and the HOA packet both.",
    claimIssues: [
      {
        issue: 'Denials on 20-year-old builder shingles',
        detail:
          "Cinco Ranch homes from the late 90s and early 2000s came with builder-grade 3-tab shingles that are now brittle. Carriers try to write off real hail bruising as age-related wear. We document impact density with test squares so the damage reads as storm, not age.",
      },
      {
        issue: 'Ridge-cap wind loss missed on the first scope',
        detail:
          "Two-story homes in Greenway and Equestrian Village catch wind from every direction, and ridge caps are the first thing to blow off. Adjusters often scope the field shingles and miss the ridge — a supplement we add constantly.",
      },
      {
        issue: 'Hidden mat fractures on architectural shingles',
        detail:
          "On the laminated architectural shingles common in newer Cinco Ranch sections, hail can crack the fiberglass mat without obvious surface damage. It takes a roofer who knows where to look to document it for the adjuster.",
      },
    ],
    faqs: [
      {
        q: 'Should I file a roof insurance claim after a Cinco Ranch hailstorm?',
        a: "Only if there's real, documented damage. We do a free inspection first, show you the hail hits on camera, and tell you honestly whether a claim is worth filing. Filing on cosmetic wear burns your deductible and risks a non-renewal from your carrier. If the damage is real, we meet the adjuster on the roof and make sure nothing gets missed on the scope.",
      },
      {
        q: 'Will filing a claim raise my rates or get me dropped in Cinco Ranch?',
        a: "A single weather-related claim on a legitimately damaged roof does not typically raise your individual rate the way an at-fault auto claim does — Texas roof claims are catastrophe-driven. The bigger risk is filing a weak claim that gets denied, which still shows on your CLUE report. That's exactly why we tell you the truth before you file.",
      },
      {
        q: 'Do you handle the Cinco Ranch HOA approval after the claim is approved?',
        a: "Yes. Once your claim is approved and it's time to replace, Cinco Residential Property Association and your village sub-HOA require architectural review of the shingle color. We submit the manufacturer spec sheet and a physical sample with your application — most approvals come back within two weeks.",
      },
      {
        q: 'How long do I have to file a roof claim in Cinco Ranch?',
        a: "Texas law has historically allowed up to two years from the date of loss, but recent legislative sessions have tightened that window in some cases. The safe move is to document and file quickly. Verify your specific deadline at tdi.texas.gov, and get an inspection in writing before the window closes.",
      },
    ],
    nearby: ['grand-lakes', 'firethorne', 'cross-creek-ranch'],
    serviceAreaSlug: 'cinco-ranch',
  },

  // ============================================================
  // CANE ISLAND
  // ============================================================
  {
    slug: 'cane-island',
    name: 'Cane Island',
    city: 'Katy, TX',
    zips: ['77493'],
    geo: { latitude: 29.8, longitude: -95.83 },
    metaTitle: 'Cane Island Roof Insurance Claim Help | Jerry\'s Roofing',
    metaDescription:
      'Cane Island roof insurance claim after hail or the 2024 Derecho? Jerry documents the damage, meets your adjuster on the roof, and protects your deductible. Call (409) 351-1529.',
    h1: 'Roof Insurance Claims in Cane Island, Katy TX',
    heroTagline:
      'Storm and hail claim help for Cane Island homeowners off I-10 and the Grand Parkway — free inspection, adjuster meeting, honest documentation.',
    tldr:
      "Jerry's Roofing helps Cane Island homeowners in 77493 file roof insurance claims after hail and wind events, including the May 2024 Houston Derecho that pushed 100+ mph winds through old Katy. We inspect for free, document wind-lifted shingles and hail bruising the way adjusters need to see it, meet your adjuster on the roof, and supplement the scope for missed items — never touching your deductible. Cane Island is newer construction, so many claims turn on adjusters trying to call young-roof damage 'cosmetic.' We know how to push back. Call (409) 351-1529.",
    intro:
      "Cane Island is one of Katy's newer master-planned communities, built out off I-10 and the Grand Parkway largely from the mid-2010s on. That newness changes the claim conversation completely. Where Cinco Ranch fights about old roofs, Cane Island fights about young ones — adjusters routinely deny hail and wind claims on roofs under ten years old by classifying the damage as 'cosmetic.' The May 16, 2024 Houston Derecho put 100+ mph straight-line winds right across this part of Katy, and a lot of Cane Island roofs took wind-lifted shingles and ridge-cap loss that never got documented because the homes looked fine from the street. Two-story homes here catch wind from every direction with little tree cover to break it. The key on a Cane Island claim is documenting that the damage is storm-caused, not a builder or age defect — test squares, dated photos, and a roofer who meets the adjuster on the roof rather than letting them sign off from the driveway.",
    claimIssues: [
      {
        issue: "'Cosmetic' denials on roofs under 10 years old",
        detail:
          "Cane Island roofs are young, and carriers lean hard on the cosmetic-damage exclusion to deny them. We document impact density and wind-lift patterns that separate real storm damage from manufacturing variation, which is what gets those denials reversed.",
      },
      {
        issue: 'Undocumented 2024 Derecho wind damage',
        detail:
          "The May 2024 Derecho lifted shingles and tore ridge caps across Cane Island. From the ground the roofs look intact, so many homeowners never filed. If your loss date was that storm, the window may still be open — get it documented.",
      },
      {
        issue: 'Under-nailed builder shingles pulling at the ridge',
        detail:
          "Production builders often under-nail to save time, and the first serious squall peels tabs near the ridge. That reads as an install defect unless a roofer documents the accompanying storm damage correctly.",
      },
    ],
    faqs: [
      {
        q: 'My Cane Island roof is only a few years old — can I still file a hail claim?',
        a: "Yes, but documentation is everything. Adjusters deny young-roof claims aggressively by calling damage cosmetic. We do a free inspection, photograph every impact, run test squares to show hit density, and meet the adjuster on site. When the evidence is real, we get claims approved on roofs as young as five years old.",
      },
      {
        q: 'Is it too late to claim damage from the 2024 Houston Derecho?',
        a: "Possibly not. Texas allows up to two years from the date of loss to file a first-party property claim, though recent legislation has tightened that in some situations. The Derecho was May 16, 2024, so the clock is running but may still be open. Verify at tdi.texas.gov and get an inspection in writing now.",
      },
      {
        q: 'Do you charge to meet my adjuster on the roof in Cane Island?',
        a: "No. We are not a public adjuster and we do not charge for claim work. Jerry meets your insurance adjuster on the roof, walks them through every hit and wind-lifted shingle, and documents anything they miss for a supplement. It's just how we run storm jobs.",
      },
    ],
    nearby: ['elyson', 'grand-lakes', 'cinco-ranch'],
    serviceAreaSlug: 'katy',
  },

  // ============================================================
  // GRAND LAKES
  // ============================================================
  {
    slug: 'grand-lakes',
    name: 'Grand Lakes',
    city: 'Katy, TX',
    zips: ['77494'],
    geo: { latitude: 29.735, longitude: -95.77 },
    metaTitle: 'Grand Lakes Roof Insurance Claim Help | Jerry\'s Roofing',
    metaDescription:
      'Grand Lakes roof insurance claim for hail or wind damage? Jerry inspects free, documents the damage, and meets your adjuster on the roof. Call (409) 351-1529.',
    h1: 'Roof Insurance Claims in Grand Lakes, Katy TX',
    heroTagline:
      'Hail and storm claim help for Grand Lakes homeowners in 77494 — documented right, filed straight, deductible protected.',
    tldr:
      "Jerry's Roofing helps Grand Lakes homeowners file roof insurance claims after hail and wind damage. Most Grand Lakes homes were built in the late 1990s and 2000s, putting many roofs right in the classic insurance-claim window. We do a free pre-claim inspection, document damage to the standard adjusters accept, meet your adjuster on the roof, and supplement the scope for missed decking, ridge vent, and code-upgrade items — never touching your deductible. Call (409) 351-1529 for an honest answer on your Grand Lakes roof.",
    intro:
      "Grand Lakes is an established Katy community off the Grand Parkway and Fry Road, built out largely between the late 1990s and the 2000s. That build era puts a huge share of Grand Lakes roofs in the classic insurance-claim window: old enough to have taken real storm damage, but not so old that carriers can automatically write everything off as wear. The 2024 spring hail season and the May 2024 Derecho both hit this stretch of Katy, and many Grand Lakes roofs still carry undocumented damage. The builder-grade 25-to-30-year shingles common here rarely make it past year 16 without losing granules and curling, which means adjusters look for any excuse to attribute damage to age. A well-documented claim — test squares, dated photos, an adjuster meeting on the roof — is what separates a full approval from a partial scope or a denial. Grand Lakes also has active HOA architectural review, so we handle the color-approval packet once a claim clears.",
    claimIssues: [
      {
        issue: 'Age-vs-storm disputes on 20-year builder roofs',
        detail:
          "The late-90s and 2000s builder shingles across Grand Lakes are aging out right as storms hit them. Carriers try to attribute hail bruising to age. Proper test-square documentation is what keeps the claim classified as storm damage.",
      },
      {
        issue: 'Missed decking and code-upgrade line items',
        detail:
          "First-pass scopes on Grand Lakes claims frequently omit rotten decking near the eaves and code-required ice-and-water shield in valleys. We supplement for these so you're not paying out of pocket for a covered replacement.",
      },
      {
        issue: 'Pipe-boot and flashing leaks read as maintenance',
        detail:
          "Cracked pipe boots and tired flashing get labeled 'wear and tear' and excluded. When they accompany documented storm damage, we make sure they're addressed in the full restoration scope.",
      },
    ],
    faqs: [
      {
        q: 'How do I know if my Grand Lakes roof has a claim worth filing?',
        a: "Get a free inspection first. We walk the roof, chalk and photograph any hail hits against a test square, and give you an honest read on whether the damage is real and documentable. If it is, we help you file and meet the adjuster. If it isn't, we tell you — filing a weak claim just burns your deductible.",
      },
      {
        q: 'The adjuster approved less than my roofer quoted — what now?',
        a: "That gap is almost always missed line items: decking, ridge vent, drip edge, ice-and-water shield, or code upgrades the first scope skipped. We file a supplement with documentation for each, which is standard practice and usually closes the gap. You should not be covering the difference on a covered claim.",
      },
      {
        q: 'Do you protect my deductible on a Grand Lakes claim?',
        a: "We never touch your deductible — that's yours to pay under Texas law, and any roofer offering to 'eat' or 'waive' it is describing insurance fraud. What we do is make sure the approved scope reflects the full, real damage so your out-of-pocket is only the deductible you legitimately owe.",
      },
    ],
    nearby: ['cinco-ranch', 'firethorne', 'cane-island'],
    serviceAreaSlug: 'katy',
  },

  // ============================================================
  // CROSS CREEK RANCH
  // ============================================================
  {
    slug: 'cross-creek-ranch',
    name: 'Cross Creek Ranch',
    city: 'Fulshear, TX',
    zips: ['77441'],
    geo: { latitude: 29.703, longitude: -95.88 },
    metaTitle: 'Cross Creek Ranch Roof Insurance Claim Help | Jerry\'s Roofing',
    metaDescription:
      'Cross Creek Ranch roof insurance claim? Jerry pushes back on cosmetic denials for young Fulshear roofs, documents the damage, and meets your adjuster. Call (409) 351-1529.',
    h1: 'Roof Insurance Claims in Cross Creek Ranch, Fulshear TX',
    heroTagline:
      'Storm and hail claim help for Cross Creek Ranch homeowners — we document young-roof damage the way adjusters need to see it.',
    tldr:
      "Jerry's Roofing helps Cross Creek Ranch homeowners in Fulshear file roof insurance claims after hail and wind damage. Because most Cross Creek Ranch homes are less than 15 years old, the fight here is usually a carrier trying to deny a young roof as 'cosmetic' — and we specialize in reversing exactly those denials with proper test-square documentation and an on-roof adjuster meeting. We never touch your deductible. Cross Creek Ranch's open-field exposure means direct wind and hail hits from every spring line. Call (409) 351-1529 for a free inspection.",
    intro:
      "Cross Creek Ranch sits on the western edge of the Katy hail belt in fast-growing Fulshear, and almost everything about its claim profile comes down to one fact: the roofs are young. Most homes here were built in the last 15 years by production builders, often with builder-grade shingles that look fine from the street and fail fast in real weather. Cross Creek Ranch also has open-field exposure — it's still surrounded by pasture, so there's little to break straight-line winds that drop south out of the Brazos Valley. When hail or wind hits, adjusters lean hard on the cosmetic-damage exclusion to deny claims on roofs under ten years old. Reversing that takes documentation most homeowners can't produce on their own: test squares showing impact density, infrared and dated photos, and a roofer standing on the roof with the adjuster pointing out hits they'd otherwise miss. Jerry has walked dozens of Cross Creek Ranch roofs with adjusters and knows exactly what gets covered and what gets written off. The community's HOA architectural review also governs the replacement once a claim clears.",
    claimIssues: [
      {
        issue: "Cosmetic denials on sub-10-year roofs",
        detail:
          "This is the defining Cross Creek Ranch claim problem. Carriers deny young-roof hail claims as cosmetic. We document impact with test squares and proper photography, file a rebuttal, and get those denials reversed.",
      },
      {
        issue: 'Open-field wind damage on second-story slopes',
        detail:
          "With no wind break, straight-line winds peel shingles on north and west-facing second-story slopes across Cross Creek Ranch. That damage needs to be documented as a discrete storm event, not lumped in as install error.",
      },
      {
        issue: 'Flashing failures at stone and stucco accents',
        detail:
          "Cross Creek Ranch homes are heavy on decorative stone and stucco, where builder flashing was caulked rather than step-flashed. Storm-driven water gets behind it — we document the water intrusion path for the claim.",
      },
    ],
    faqs: [
      {
        q: 'My Cross Creek Ranch home is only 8 years old — is a hail claim even possible?',
        a: "Yes. Adjusters deny young-roof claims aggressively by calling damage cosmetic, but a roof under ten years old can absolutely have compensable hail damage. We do a free inspection, photograph every impact, run test squares to document hit density, and meet the adjuster on site. Real evidence gets young roofs approved.",
      },
      {
        q: 'My Cross Creek Ranch claim was denied as cosmetic — can it be reversed?',
        a: "Often, yes. A cosmetic denial is not the end of the road. We re-inspect, document impact density properly, and file a supplement or request a re-inspection with the evidence laid out the way the carrier needs to see it. This is exactly the scenario we handle most in Fulshear.",
      },
      {
        q: 'Does Cross Creek Ranch HOA approval slow down my roof replacement?',
        a: "Not if it's handled right. Cross Creek Ranch requires architectural review of shingle color, but we submit the manufacturer spec sheet and a physical sample as soon as the claim clears. Most approvals come back within one to two weeks — we run it in parallel with material ordering so it doesn't hold up the job.",
      },
    ],
    nearby: ['firethorne', 'jordan-ranch', 'cinco-ranch'],
    serviceAreaSlug: 'fulshear',
  },

  // ============================================================
  // FIRETHORNE
  // ============================================================
  {
    slug: 'firethorne',
    name: 'Firethorne',
    city: 'Katy, TX',
    zips: ['77494'],
    geo: { latitude: 29.74, longitude: -95.83 },
    metaTitle: 'Firethorne Roof Insurance Claim Help | Jerry\'s Roofing',
    metaDescription:
      'Firethorne roof insurance claim for hail or wind? Free inspection, adjuster-grade documentation, on-roof adjuster meeting, deductible protected. Call (409) 351-1529.',
    h1: 'Roof Insurance Claims in Firethorne, Katy TX',
    heroTagline:
      'Hail and storm claim help for Firethorne homeowners on the Katy–Fulshear line — documented right and filed straight.',
    tldr:
      "Jerry's Roofing helps Firethorne homeowners file roof insurance claims after hail and wind damage. Firethorne straddles the Katy–Fulshear line in the heart of the hail belt, with homes built largely in the 2000s and 2010s. We inspect for free, document damage the way adjusters accept it, meet your adjuster on the roof, and supplement the scope for anything missed — never touching your deductible. Call (409) 351-1529 for an honest read on your Firethorne roof.",
    intro:
      "Firethorne is a master-planned community straddling the Katy–Fulshear line along the Grand Parkway and FM 1463, built out mostly through the 2000s and 2010s. It sits directly in the path of the spring supercells that feed on gulf moisture and drop hail across west Katy, and it shares Fulshear's open-field wind exposure on its western edge. That combination — a mix of 10-to-20-year roofs plus direct storm exposure — makes Firethorne a steady source of legitimate roof claims. The claim outcome usually turns on documentation quality. Adjusters here move fast and miss hits, and the builder-grade architectural shingles common in Firethorne can take mat-fracturing hail damage that isn't obvious from the surface. Jerry meets the adjuster on the roof, points out the hits they'd sign past, and supplements for the decking, ridge vent, and code items first-pass scopes routinely skip. Firethorne's HOA requires architectural review, which we handle once the claim is approved.",
    claimIssues: [
      {
        issue: 'Fast adjuster inspections that miss hits',
        detail:
          "Firethorne adjusters inspect dozens of roofs a week and sign past real hail damage. Having Jerry on the roof with them, pointing out documented hits, is the single biggest factor in getting the full scope approved.",
      },
      {
        issue: 'Mat fractures hidden on architectural shingles',
        detail:
          "The laminated shingles across Firethorne can crack the fiberglass mat under hail without obvious surface damage. We know where to find and document it so it's not written off as cosmetic.",
      },
      {
        issue: 'Western-edge wind exposure',
        detail:
          "Firethorne's Fulshear-facing edge has open-field wind exposure that lifts shingles on exposed slopes. That wind damage is compensable but has to be documented as storm-caused.",
      },
    ],
    faqs: [
      {
        q: 'Should I file a roof claim after a Firethorne hailstorm?',
        a: "Only after a free inspection tells you the damage is real and documentable. We walk the roof, photograph the hits against a test square, and give you the honest answer. If there's a legitimate claim we help you file and meet the adjuster; if it's cosmetic wear, we tell you so you don't waste your deductible.",
      },
      {
        q: 'How does an on-roof adjuster meeting help my Firethorne claim?',
        a: "Adjusters miss hits — not out of bad faith, but because they inspect so many roofs. When Jerry meets your adjuster on the Firethorne roof and walks them through every documented impact and wind-lifted shingle, far less gets left off the scope. It's the highest-leverage thing we do on a claim.",
      },
      {
        q: 'What if my Firethorne roof damage spans hail and wind?',
        a: "That's common here and it's fine — a single claim can cover both perils from the same storm event. We document the hail impacts and the wind-lifted shingles separately so the adjuster's scope reflects the full extent of the damage.",
      },
    ],
    nearby: ['cross-creek-ranch', 'cinco-ranch', 'grand-lakes'],
    serviceAreaSlug: 'fulshear',
  },

  // ============================================================
  // ELYSON
  // ============================================================
  {
    slug: 'elyson',
    name: 'Elyson',
    city: 'Katy, TX',
    zips: ['77493'],
    geo: { latitude: 29.85, longitude: -95.82 },
    metaTitle: 'Elyson Roof Insurance Claim Help | Jerry\'s Roofing',
    metaDescription:
      'Elyson roof insurance claim after hail or the 2024 Derecho? Jerry documents young-roof damage, meets your adjuster, and protects your deductible. Call (409) 351-1529.',
    h1: 'Roof Insurance Claims in Elyson, Katy TX',
    heroTagline:
      'Storm and hail claim help for Elyson homeowners in northwest Katy — free inspection, adjuster meeting, honest documentation.',
    tldr:
      "Jerry's Roofing helps Elyson homeowners in 77493 file roof insurance claims after hail and wind damage. Elyson is newer construction in northwest Katy, so most claims here turn on adjusters trying to deny young-roof damage as 'cosmetic' — which we reverse with proper documentation and an on-roof adjuster meeting. We never touch your deductible. The May 2024 Derecho and recent hail seasons both hit this part of Katy hard. Call (409) 351-1529 for a free Elyson roof inspection.",
    intro:
      "Elyson is a newer master-planned community in northwest Katy (77493), built out largely from the mid-2010s onward with wide-open exposure and little mature tree cover. Like Cane Island, its claim profile is defined by young roofs. When hail or the May 2024 Derecho's 100+ mph winds hit Elyson, adjusters lean on the cosmetic-damage exclusion to deny claims on roofs under ten years old. Two-story Elyson homes catch wind from every direction with nothing to break it, so wind-lifted shingles and ridge-cap loss are common — and easy to miss from the ground. The way to win an Elyson claim is to prove the damage is storm-caused rather than a builder or age issue: test squares, dated photos, and a roofer on the roof with the adjuster. Jerry does exactly that, and supplements for the decking and code-upgrade items first scopes skip. Elyson's HOA architectural review governs color selection on the replacement.",
    claimIssues: [
      {
        issue: "Cosmetic denials on young Elyson roofs",
        detail:
          "Elyson roofs are new, and carriers deny hail claims as cosmetic. We document impact density and wind-lift patterns that distinguish real storm damage from manufacturing variation to get those denials reversed.",
      },
      {
        issue: 'Undocumented 2024 Derecho wind loss',
        detail:
          "The May 2024 Derecho lifted shingles and tore ridge caps across Elyson. The roofs look intact from the street, so many homeowners never filed. If that was your loss date, the window may still be open.",
      },
      {
        issue: 'Open-exposure wind lift on two-story slopes',
        detail:
          "With little tree cover, Elyson's two-story homes take direct wind. Ridge caps and upper-slope field shingles lift first, and that damage needs discrete documentation to be covered.",
      },
    ],
    faqs: [
      {
        q: 'My Elyson roof is only a few years old — can I file a hail claim?',
        a: "Yes, with the right documentation. Adjusters deny young-roof claims by calling damage cosmetic, but we photograph every impact, run test squares to show hit density, and meet the adjuster on site. Real evidence gets Elyson roofs approved even at five to eight years old.",
      },
      {
        q: 'Is it too late to claim 2024 Derecho damage on my Elyson roof?',
        a: "Maybe not. Texas allows up to two years from the date of loss to file, though recent legislation has tightened that in some cases. The Derecho was May 16, 2024. Verify your deadline at tdi.texas.gov and get a written inspection now, before the window closes.",
      },
      {
        q: 'Do you meet the adjuster on the roof in Elyson at no charge?',
        a: "Yes. We're not a public adjuster and we don't charge for claim work. Jerry meets your adjuster on the Elyson roof, walks them through every hit and wind-lifted shingle, and documents anything they miss for a supplement.",
      },
    ],
    nearby: ['cane-island', 'grand-lakes', 'cinco-ranch'],
    serviceAreaSlug: 'katy',
  },

  // ============================================================
  // JORDAN RANCH
  // ============================================================
  {
    slug: 'jordan-ranch',
    name: 'Jordan Ranch',
    city: 'Fulshear, TX',
    zips: ['77423', '77494'],
    geo: { latitude: 29.76, longitude: -95.92 },
    metaTitle: 'Jordan Ranch Roof Insurance Claim Help | Jerry\'s Roofing',
    metaDescription:
      'Jordan Ranch roof insurance claim? Jerry documents young-roof hail and wind damage, reverses cosmetic denials, and meets your adjuster on the roof. Call (409) 351-1529.',
    h1: 'Roof Insurance Claims in Jordan Ranch, Fulshear TX',
    heroTagline:
      'Storm and hail claim help for Jordan Ranch homeowners on the Fulshear–Brookshire edge — young-roof damage documented the right way.',
    tldr:
      "Jerry's Roofing helps Jordan Ranch homeowners file roof insurance claims after hail and wind damage. Jordan Ranch is newer construction on the far-west edge of the Katy hail belt with heavy open-field exposure, so claims here mostly involve young roofs and carriers trying to deny wind and hail damage as 'cosmetic.' We reverse those with proper test-square documentation and an on-roof adjuster meeting, and we never touch your deductible. Call (409) 351-1529 for a free Jordan Ranch inspection.",
    intro:
      "Jordan Ranch sits on the far-western edge of the Katy–Fulshear growth corridor near the Brookshire line, built out over the last decade with wide-open pasture on nearly every side. That open exposure is the defining feature of its claim profile: straight-line winds from spring storm lines hit Jordan Ranch roofs with nothing to slow them down, and the community sits right in the hail corridor that runs off the Brazos Valley. Because the roofs are young — mostly builder-grade shingles under 12 years old — adjusters deny a lot of legitimate wind and hail damage as cosmetic. Reversing that is the core of a Jordan Ranch claim: test squares proving impact density, documentation of wind-lift patterns on exposed slopes, and Jerry on the roof with the adjuster pointing out what they'd otherwise sign past. We also supplement for the decking and code-upgrade items first-pass scopes routinely leave off, and handle the HOA color approval once the claim clears.",
    claimIssues: [
      {
        issue: 'Cosmetic denials on young builder roofs',
        detail:
          "Jordan Ranch roofs are new, and carriers deny hail and wind claims as cosmetic. Proper test-square documentation and a rebuttal are what get those denials reversed.",
      },
      {
        issue: 'Heavy open-field wind exposure',
        detail:
          "Surrounded by pasture, Jordan Ranch takes direct straight-line wind. Upper-slope shingles and ridge caps lift first, and that damage has to be documented as a discrete storm event to be covered.",
      },
      {
        issue: 'Missed decking and code upgrades on approval',
        detail:
          "Even when the claim is approved, first scopes skip rotten decking and code-required ice-and-water shield. We supplement for these so your out-of-pocket stays limited to your deductible.",
      },
    ],
    faqs: [
      {
        q: 'Can I file a hail claim on a Jordan Ranch roof that is only a few years old?',
        a: "Yes. Young roofs get denied as cosmetic, but they can absolutely sustain compensable hail and wind damage. We do a free inspection, document impact with test squares and dated photos, and meet the adjuster on site. Real evidence gets young Jordan Ranch roofs approved.",
      },
      {
        q: 'My Jordan Ranch wind claim was denied — is that final?',
        a: "Not necessarily. A denial can be challenged with better documentation. We re-inspect, document the wind-lift pattern and any accompanying hail, and file a supplement or request a re-inspection. Open-field wind damage is real and compensable when it's documented properly.",
      },
      {
        q: 'Do you serve Jordan Ranch out of Katy?',
        a: "Yes. Jordan Ranch is a short drive from our Katy office and we cover it as part of our regular Fulshear-area service. Free inspections, on-roof adjuster meetings, and no travel surcharge on full-job estimates.",
      },
    ],
    nearby: ['cross-creek-ranch', 'firethorne', 'cinco-ranch'],
    serviceAreaSlug: 'fulshear',
  },

  // ============================================================
  // NOTTINGHAM COUNTRY
  // ============================================================
  {
    slug: 'nottingham-country',
    name: 'Nottingham Country',
    city: 'Katy, TX',
    zips: ['77450'],
    geo: { latitude: 29.785, longitude: -95.75 },
    metaTitle: 'Nottingham Country Roof Insurance Claim Help | Jerry\'s Roofing',
    metaDescription:
      'Nottingham Country roof insurance claim? Older Katy roofs need careful documentation — Jerry proves storm damage over age and meets your adjuster. Call (409) 351-1529.',
    h1: 'Roof Insurance Claims in Nottingham Country, Katy TX',
    heroTagline:
      'Hail and storm claim help for Nottingham Country homeowners along Highway 6 — where older roofs need airtight documentation.',
    tldr:
      "Jerry's Roofing helps Nottingham Country homeowners in 77450 file roof insurance claims after hail and wind damage. Nottingham Country is one of Katy's older master-planned neighborhoods, so the claim fight here is the opposite of the new subdivisions: carriers try to write off real storm damage as age and wear. We document impact density carefully to keep the claim classified as storm-caused, meet your adjuster on the roof, and never touch your deductible. Call (409) 351-1529 for an honest read on your Nottingham Country roof.",
    intro:
      "Nottingham Country is one of the original master-planned communities in Katy, built largely in the late 1970s and 1980s along Highway 6. That age defines its claim profile completely. Where Cane Island and Elyson fight cosmetic denials on young roofs, Nottingham Country fights the age exclusion: many roofs here are on their second or third replacement, and carriers look for any reason to attribute hail bruising or wind damage to normal wear rather than a storm. That makes documentation more important here than almost anywhere in Katy. An adjuster who climbs an older Nottingham Country roof is primed to call damage age-related — the counter is a roofer who has already documented impact density against test squares, dated the photos to the storm event, and can stand on the roof and walk the adjuster through why the damage is storm-caused. Nottingham Country also has mature tree cover that drops debris into valleys, which carriers try to lump in as maintenance. Jerry knows how to separate the storm damage from the wear so the claim holds.",
    claimIssues: [
      {
        issue: 'Age-and-wear denials on older roofs',
        detail:
          "Nottingham Country roofs are old enough that carriers reflexively attribute storm damage to age. Careful test-square documentation dated to the storm event is what keeps the claim classified as a covered peril.",
      },
      {
        issue: 'Tree-debris damage labeled maintenance',
        detail:
          "Mature trees drop limbs and debris on Nottingham Country roofs. Carriers try to exclude the resulting damage as a maintenance issue — we document storm-driven impact separately so it stays covered.",
      },
      {
        issue: 'Multiple existing shingle layers',
        detail:
          "Older Nottingham Country roofs sometimes have layered-over shingles. Texas code and insurance replacements require a full tear-off to the deck, which the scope needs to reflect — we make sure it does.",
      },
    ],
    faqs: [
      {
        q: 'My Nottingham Country roof is old — will insurance still cover storm damage?',
        a: "Yes, age alone doesn't disqualify a claim — the damage just has to be documented as storm-caused rather than wear. That's exactly what we do: test squares, dated photos tied to the storm event, and an on-roof adjuster meeting. Older roofs win claims all the time when the documentation is airtight.",
      },
      {
        q: 'My carrier is threatening non-renewal on my aging Nottingham Country roof — what do I do?',
        a: "Move quickly. Carriers are dropping Katy homeowners whose roofs are past 20 years old. We do a free inspection, tell you whether there's a storm claim to file, and if replacement is needed we can usually schedule fast so your policy stays active. Don't wait for the non-renewal to become final.",
      },
      {
        q: 'Do you handle the full claim from inspection to replacement in Nottingham Country?',
        a: "Yes. Free pre-claim inspection, honest advice on whether to file, an on-roof meeting with your adjuster, supplements for anything missed, and the full tear-off and replacement once the claim clears — one crew, one contact, deductible protected.",
      },
    ],
    nearby: ['cinco-ranch', 'grand-lakes', 'cane-island'],
    serviceAreaSlug: 'katy',
  },
];

export function getNeighborhoodClaim(slug: string) {
  return neighborhoodClaims.find((n) => n.slug === slug);
}

export function getNeighborhoodClaimSlugs() {
  return neighborhoodClaims.map((n) => n.slug);
}
