/**
 * Service Area Landing Page Content
 * Jerry's Roofing — Katy, TX
 *
 * Each entry powers a city-specific landing page with real, locally-researched
 * content. Written for humans first, structured for AI Overviews and LocalBusiness
 * schema second. Owner: Jerry W. Pilley — (409) 351-1529.
 */

export interface ServiceAreaFAQ {
  q: string;
  a: string;
}

export interface ServiceAreaIssue {
  issue: string;
  detail: string;
}

export interface ServiceAreaProject {
  customerName: string;
  neighborhood: string;
  scope: string;
  detail: string;
}

export interface ServiceAreaGeo {
  latitude: number;
  longitude: number;
}

export interface ServiceArea {
  slug: string;
  city: string;
  fullName: string;
  zips: string[];
  county: string;
  population: string;

  // SEO
  metaTitle: string;
  metaDescription: string;

  // LocalBusiness schema
  geo: ServiceAreaGeo;

  // Hero
  h1: string;
  heroTagline: string;

  // AI Overview / answer-engine block
  tldr: string;

  // Long-form local content
  cityIntro: string;

  // Common problems in this city
  commonIssues: ServiceAreaIssue[];

  // Real named neighborhoods
  neighborhoods: string[];

  // Why Jerry for this city
  whyJerry: string[];

  // City-specific Q&A
  faqs: ServiceAreaFAQ[];

  // Social proof
  recentProject: ServiceAreaProject;

  // Internal linking
  nearbyCities: string[];
}

export const serviceAreaData: ServiceArea[] = [
  // ============================================================
  // 1. CINCO RANCH
  // ============================================================
  {
    slug: 'cinco-ranch',
    city: 'Cinco Ranch',
    fullName: 'Cinco Ranch, TX',
    zips: ['77494'],
    county: 'Fort Bend / Harris',
    population: '~50,000',

    metaTitle: "Cinco Ranch Roofing Contractor | Jerry's Roofing",
    metaDescription:
      "Jerry's Roofing is a local Cinco Ranch roofing contractor offering honest pricing, insurance claim help, and HOA-approved shingles. Call (409) 351-1529.",

    geo: { latitude: 29.7569, longitude: -95.78 },

    h1: 'Trusted Roofing Contractor in Cinco Ranch, TX',
    heroTagline:
      "Local Katy-based roofer Jerry Pilley handles Cinco Ranch replacements, storm repairs, and Roof Rejoov restorations without the corporate markup.",

    tldr:
      "Jerry's Roofing serves Cinco Ranch, TX homeowners with roof replacement, storm and hail damage repair, insurance claim support, gutters, and the Roof Rejoov bio-based shingle restoration treatment. Owner Jerry W. Pilley has 7 years of roofing experience and personally inspects every Cinco Ranch roof before quoting. We install IKO, CertainTeed, and GAF shingles in HOA-approved colors across every village in Cinco Ranch, from Greenway to Pine Mill Ranch. Call (409) 351-1529 for a straight-answer estimate — no high-pressure door knockers, no inflated numbers.",

    cityIntro:
      "Cinco Ranch sits right in the middle of the Texas hail belt, and that single fact drives almost every roofing conversation out here. The master-planned community stretches across roughly 8,000 acres on both sides of the Grand Parkway, with most homes built between 1991 and 2015. That means a huge chunk of Cinco Ranch roofs are now 15 to 25 years old — past the comfortable life of a 25-year 3-tab shingle, and squarely in the window where insurance adjusters start denying claims for wear rather than storm damage. Add gulf humidity that keeps attic decking damp, UV exposure that bakes the south-facing slopes, and the occasional hurricane or tropical storm pushing 80+ mph gusts inland from the coast, and you have a neighborhood where the roof is usually the hardest-working part of the house. Cinco Ranch also has strict HOAs — Cinco Residential Property Association and the various village sub-associations all have approved shingle color lists, and you cannot just pick whatever is cheapest at the supply house. Homeowners here tend to care about curb appeal as much as leak protection, which is why architectural laminated shingles in Weathered Wood, Charcoal, and Driftwood dominate the rooflines. We know these rules, we know the approved color charts, and we know which GAF, CertainTeed, and IKO lines clear HOA review the fastest.",

    commonIssues: [
      {
        issue: 'Hail bruising on 20-year-old 3-tab roofs',
        detail:
          "Cinco Ranch homes built in the late 90s and early 2000s came with builder-grade 3-tab shingles that are now brittle. Even pea-sized hail can crack the mat and void the asphalt seal, and insurance often approves full replacement once impact marks are documented.",
      },
      {
        issue: 'Ridge cap blow-off during tropical systems',
        detail:
          "When remnants of gulf storms push inland, the first thing that goes on Cinco Ranch homes is the ridge cap — especially on two-story Greenway and Equestrian Village houses that catch wind from every direction.",
      },
      {
        issue: 'Flashing failure around chimneys and skylights',
        detail:
          "Original builder flashing in older Cinco Ranch villages was often tar-sealed rather than step-flashed. After 20 years of thermal cycling, those seals crack and water runs down the framing into the ceiling below.",
      },
      {
        issue: 'Algae streaking on north-facing slopes',
        detail:
          "Gulf humidity feeds Gloeocapsa magma, the black algae that leaves streaks on shaded roof planes. This is cosmetic but tanks curb appeal and resale value — Roof Rejoov kills the algae and restores the shingle granules without a replacement.",
      },
      {
        issue: 'Valley leaks from debris dams',
        detail:
          "The big oaks and live oaks planted at the original Cinco Ranch buildout now drop enough leaf litter to clog valleys, especially in Heritage Square and Cinco Ranch Meadows. Water backs up under the shingles and rots the decking.",
      },
      {
        issue: 'Decking rot near soffit lines',
        detail:
          "Poor original attic ventilation combined with Houston humidity causes OSB decking to soften at the eaves. You only see it when a roofer lifts the shingles — and it has to be replaced before the new roof goes down.",
      },
    ],

    neighborhoods: [
      'Greenway Village',
      'Equestrian Village',
      'Pine Mill Ranch',
      'Cinco Reserve',
      'Falcon Point',
      'Beacon Lakes',
      'Heritage Square',
      'Cinco Ranch Meadows',
      'Cinco Ranch Southlake',
      'Cinco Ranch Fairways',
      'The Estates at Cinco Ranch',
      'Ashford Park',
    ],

    whyJerry: [
      "Lower overhead than the big corporate Houston roofers means Cinco Ranch homeowners get a real price instead of a sales commission baked into the bid.",
      "Jerry personally climbs every Cinco Ranch roof before quoting — no high-pressure canvasser, no bait-and-switch estimator.",
      "We handle the HOA submission packet for Cinco Residential Property Association so you are not chasing color approvals yourself.",
      "If your roof is structurally sound but cosmetically tired, we offer Roof Rejoov shingle restoration at a fraction of a full replacement cost.",
    ],

    faqs: [
      {
        q: 'What does a roof replacement cost in Cinco Ranch, TX?',
        a: "A typical Cinco Ranch roof replacement runs $8,500 to $22,000 depending on square footage, pitch, and material. Most two-story homes in Greenway or Pine Mill Ranch land between $12,000 and $16,000 for an architectural asphalt shingle tear-off and replace. Premium designer shingles, metal accents, or synthetic underlayment upgrades push higher.",
      },
      {
        q: 'Does my Cinco Ranch HOA have to approve my shingle color?',
        a: "Yes. Cinco Residential Property Association and every village sub-HOA require architectural review before you change roof color. We submit the manufacturer spec sheet and a photo sample with your application and usually get approval back within two weeks. Most homeowners stick with Weathered Wood, Charcoal, or Driftwood to stay safe.",
      },
      {
        q: "Should I file an insurance claim after a Katy hailstorm?",
        a: "Only if there is real, documented damage. We do a free inspection first, show you the hail hits on camera, and tell you honestly whether a claim is worth filing. Filing on cosmetic wear wastes your deductible and risks a non-renewal from your carrier. If damage is real, we meet the adjuster on the roof and make sure nothing gets missed.",
      },
      {
        q: 'How long does a full roof replacement take on a Cinco Ranch home?',
        a: "One to two days for a standard 25-to-35 square home. We tear off in the morning, dry in with synthetic underlayment the same day, and load shingles for install on day two. Two-story Estates homes or anything over 40 squares sometimes runs into a third day.",
      },
      {
        q: 'What is Roof Rejoov and does it work in Cinco Ranch?',
        a: "Roof Rejoov is a bio-based shingle restoration treatment that penetrates asphalt, restores lost oils, and kills roof algae. It works best on Cinco Ranch roofs that are 10 to 18 years old, structurally fine, but cosmetically streaked or starting to dry out. It adds years of service life for roughly 15 to 25 percent of a replacement cost and keeps your HOA happy without permits or debris.",
      },
    ],

    recentProject: {
      customerName: 'The Martinez Family',
      neighborhood: 'Greenway Village, Cinco Ranch',
      scope:
        'Full tear-off and replacement of 28 squares, GAF Timberline HDZ in Charcoal, synthetic underlayment, new drip edge and pipe boots',
      detail:
        'Hail damage from the April 2025 storm. We met the State Farm adjuster on the roof, documented 14 impact marks per test square, and had the full claim approved. Job completed in two days with zero HOA issues.',
    },

    nearbyCities: ['Katy', 'Fulshear', 'Richmond', 'Sugar Land'],
  },

  // ============================================================
  // 2. CYPRESS
  // ============================================================
  {
    slug: 'cypress',
    city: 'Cypress',
    fullName: 'Cypress, TX',
    zips: ['77429', '77433'],
    county: 'Harris',
    population: '~200,000',

    metaTitle: "Cypress TX Roofing Contractor | Jerry's Roofing",
    metaDescription:
      "Cypress, TX roofer for hail damage, insurance claims, and full roof replacement. Jerry's Roofing installs GAF, IKO, CertainTeed. Call (409) 351-1529.",

    geo: { latitude: 29.9691, longitude: -95.6972 },

    h1: 'Cypress, TX Roofing Contractor You Can Actually Trust',
    heroTagline:
      "Jerry Pilley has seen every hail storm that has rolled through Cypress — and he will not sell you a roof you do not need.",

    tldr:
      "Jerry's Roofing serves Cypress, TX homeowners in both 77429 and 77433 with roof replacements, hail damage inspections, insurance claim assistance, gutter replacement, and Roof Rejoov shingle restoration. Cypress sits in one of the most active hail corridors in Harris County, and our owner Jerry personally inspects every roof before quoting. We install IKO, CertainTeed, and GAF shingles and handle everything from small repairs to full tear-offs on Bridgeland, Towne Lake, and Fairfield homes. Call (409) 351-1529 for a free Cypress roof inspection — we will tell you the truth even if it means you do not need a new roof yet.",

    cityIntro:
      "Cypress is arguably the single busiest roofing market in greater Houston, and there is a simple reason: it gets hammered. The Cypress/northwest Harris corridor sits directly under the path that most spring supercells take as they roll off the Hill Country and feed on gulf moisture. Quarter-sized hail is a near-annual event, and golf-ball to tennis-ball hail has hit Bridgeland, Fairfield, and Coles Crossing in recent years. Because so much of Cypress is new construction — huge master-planned communities like Bridgeland, Towne Lake, Fairfield, and Cypress Creek Lakes built out between 2000 and the present day — the housing stock is a mix of 5-year-old builder specials and 20-year-old roofs that are aging out at the same time builders are still framing. Every major hailstorm brings a flood of storm-chasing roofers with out-of-state plates knocking doors, and Cypress homeowners have learned the hard way that the guy with the clipboard and the uniform shirt is often gone by the next claim cycle. That is exactly the gap Jerry fills. We live and work here, we pull permits under a real Texas address, and we will be answering the phone next spring when the next storm rolls through. Cypress also has ferocious UV on south-facing slopes and standing humidity year-round, which means builder-grade 30-year shingles rarely make it past year 18 without losing granules, curling tabs, or growing algae streaks.",

    commonIssues: [
      {
        issue: 'Hail impact damage from spring and early summer storms',
        detail:
          "Cypress averages one to two hail events per year that produce insurable damage. Even marble-sized hail fractures the fiberglass mat on older shingles, and adjusters will often approve replacement if impact density exceeds 8 hits per test square.",
      },
      {
        issue: 'Storm chaser fraud after every hailstorm',
        detail:
          "Out-of-state contractors flood Cypress neighborhoods after storms, sign up homeowners with inflated contracts, then disappear when the insurance check hits. We have rebuilt dozens of roofs from those failed jobs and know exactly what to look for.",
      },
      {
        issue: 'Wind-lifted shingles on new builds',
        detail:
          "Production builders in Bridgeland and Cypress Creek Lakes routinely under-nail shingles to save time. The first 60 mph squall line after closing peels tabs off the ridge and the homeowner finds out during the first hard rain.",
      },
      {
        issue: 'Blocked gutters from pine straw and oak catkins',
        detail:
          "Cypress lots are loaded with pines and live oaks. Gutters clog fast, water backs up under the drip edge, and the fascia starts rotting. Most Cypress homes need a gutter cleanout every spring and fall at minimum.",
      },
      {
        issue: 'Ventilation failures in two-story attics',
        detail:
          "Builders often skip proper ridge-and-soffit balance to save money. The result is 140-degree attics, premature shingle failure, and sky-high summer cooling bills in places like Towne Lake and Fairfield.",
      },
      {
        issue: 'Pipe boot cracks at 8-10 years',
        detail:
          "The rubber collars around plumbing vents are the single most common leak source on Cypress roofs. They dry out in the UV and split, and the leak shows up on the ceiling below a bathroom years before the roof itself fails.",
      },
    ],

    neighborhoods: [
      'Bridgeland',
      'Towne Lake',
      'Fairfield',
      'Cypress Creek Lakes',
      'Coles Crossing',
      'Blackhorse Ranch',
      'Lakes of Fairhaven',
      'Stable Gate',
      'Longwood',
      'Cypress Mill',
      'Lakeland Village',
      'Cypress Landing',
    ],

    whyJerry: [
      "We are local, not a storm-chasing out-of-state crew. When your roof needs warranty work five years from now, we still answer the phone.",
      "Jerry personally inspects every Cypress roof and shows you the damage on camera. No fake hail marks, no circled chalk on good shingles.",
      "We work directly with every major insurance carrier and meet your adjuster on the roof so nothing gets missed in the claim.",
      "Lower overhead than the corporate Houston roofers — the savings go to you, not to a sales team or an office building.",
    ],

    faqs: [
      {
        q: 'How much does a new roof cost in Cypress, TX?',
        a: "Most Cypress roof replacements run $9,000 to $20,000 for a standard single-family home. Bridgeland and Towne Lake homes in the 3,000-4,000 sq ft range typically land around $13,000-$17,000 for architectural asphalt shingles. Price depends on pitch, square count, tear-off layers, and decking condition.",
      },
      {
        q: 'A storm chaser knocked on my Cypress door — should I sign?',
        a: "No. Never sign anything the day a contractor knocks. Reputable Cypress roofers will let you get a second opinion and will give you time to call your insurance company first. If someone pressures you to sign an 'inspection authorization' on the spot, that is a contingency contract and you may be locked in.",
      },
      {
        q: 'Will my Cypress insurance claim get approved after hail?',
        a: "It depends on the age of your roof and the density of the impact marks. We do a free pre-claim inspection, show you the damage, and tell you honestly whether a claim will stick. Filing a weak claim burns your deductible and can affect your rates — we only recommend filing when the evidence is solid.",
      },
      {
        q: 'How long will a new asphalt roof last in Cypress?',
        a: "A properly installed architectural shingle roof with good ventilation should give you 20 to 25 years in Cypress before it needs replacement. The two biggest factors are attic ventilation and hailstorms — we cannot control the weather, but we can make sure the ventilation is done right.",
      },
      {
        q: 'Do you replace gutters and fascia in Cypress too?',
        a: "Yes. We handle seamless aluminum gutters, fascia wrap, soffit repair, and siding work on every Cypress job. It is almost always cheaper to do gutters and fascia the same time as a roof replacement since the crew is already on site and the scaffolding is up.",
      },
    ],

    recentProject: {
      customerName: 'The Nguyen Family',
      neighborhood: 'Bridgeland, Cypress',
      scope:
        'Full replacement of 34 squares, IKO Dynasty in Driftwood, new seamless gutters on all four sides, ridge vent upgrade',
      detail:
        'Golf-ball hail in May 2025 cracked the mat on the original builder 25-year shingles. We documented the damage, met the Allstate adjuster, and had the claim supplemented twice to cover decking and drip edge. Finished in two and a half days.',
    },

    nearbyCities: ['Katy', 'Tomball', 'Jersey Village'],
  },

  // ============================================================
  // 3. FULSHEAR
  // ============================================================
  {
    slug: 'fulshear',
    city: 'Fulshear',
    fullName: 'Fulshear, TX',
    zips: ['77441'],
    county: 'Fort Bend',
    population: '~42,000',

    metaTitle: "Fulshear TX Roofing Contractor | Jerry's Roofing",
    metaDescription:
      "Jerry's Roofing serves Fulshear, TX and Cross Creek Ranch with roof replacement, repairs, and insurance claims. Honest pricing. Call (409) 351-1529.",

    geo: { latitude: 29.6935, longitude: -95.8969 },

    h1: 'Fulshear, TX Roofing Done Right',
    heroTagline:
      "From Cross Creek Ranch to Weston Lakes, Jerry's Roofing is the straight-talking Fulshear roofer fast-growing west Fort Bend actually needs.",

    tldr:
      "Jerry's Roofing is a local Fulshear, TX roofing contractor serving Cross Creek Ranch, Weston Lakes, Fulbrook, and every new subdivision going up in 77441. We handle roof replacement, repair, hail and wind damage claims, gutters, siding, and Roof Rejoov shingle restoration. Owner Jerry Pilley personally inspects every Fulshear roof before quoting — no corporate sales pitch, no bait and switch. Most Fulshear homes are less than 15 years old, which means we see a lot of builder-grade roof issues that are still covered by insurance when storms hit. Call (409) 351-1529 for a free Fulshear inspection.",

    cityIntro:
      "Fulshear is one of the fastest-growing cities in Texas, and that changes what kind of roofing work the area needs. A decade ago Fulshear was open pasture with a few ranches — today it is a sea of new rooflines sweeping west from the Grand Parkway all the way past Cross Creek Ranch into Fulbrook, Tamarron, and Jordan Ranch. That means the average Fulshear roof is between 3 and 12 years old, built by production builders under tight schedules, often with 25 or 30-year 3-tab or builder-grade architectural shingles that look fine from the street and fail fast in real weather. Fulshear also sits right on the western edge of the Katy hail belt — it catches the same supercells that tear up Cinco Ranch and Katy proper, but with less tree cover to break the wind. Homes here take direct hail hits and straight-line winds from every spring line that drops south out of the Brazos Valley. The other Fulshear reality is insurance: because the housing stock is new, adjusters will often deny claims on roofs under 10 years old by calling damage 'cosmetic,' and homeowners need a roofer who knows how to document real impact and push back. Jerry has walked dozens of Fulshear roofs with adjusters and knows exactly what gets covered and what gets denied. Fulshear also has active HOAs in Cross Creek Ranch and Weston Lakes with strict architectural review, so shingle color and material choice matter.",

    commonIssues: [
      {
        issue: 'Builder-grade shingles failing in years 7-12',
        detail:
          "Production builders across Cross Creek Ranch and Jordan Ranch installed the cheapest 30-year shingles the spec allowed. They lose granules fast, the adhesive strip weakens, and the first serious wind event pulls tabs off ridges and hips.",
      },
      {
        issue: 'Insurance denial on young roofs',
        detail:
          "Adjusters routinely deny hail claims on Fulshear homes under 10 years old by classifying bruising as 'cosmetic.' We know how to document impact with proper test squares and infrared to get those denials reversed.",
      },
      {
        issue: 'Wind damage from open-field exposure',
        detail:
          "Fulshear subdivisions are still surrounded by open pasture and farmland, which means no wind break. Straight-line winds from spring storms regularly peel shingles on second-story ridges, especially on north and west-facing slopes.",
      },
      {
        issue: 'Poor attic ventilation in new builds',
        detail:
          "Production builders often under-spec soffit vents or install ridge vents without the required intake. Summer attic temps hit 150 degrees, shingles cook from underneath, and warranties get voided without the homeowner ever knowing.",
      },
      {
        issue: 'Flashing gaps at stucco and stone accents',
        detail:
          "Fulshear houses are heavy on decorative stone and stucco wall accents, and builder flashing at those transitions is often caulked rather than properly step-flashed. Water gets behind the stone and rots wall framing before anyone notices.",
      },
      {
        issue: 'Gutter sizing too small for actual rainfall',
        detail:
          "Most Fulshear new builds come with 5-inch gutters. They overflow in hard Gulf Coast rain, water sheets off the eaves, and the foundation takes the hit. Upgrading to 6-inch seamless gutters solves it for good.",
      },
    ],

    neighborhoods: [
      'Cross Creek Ranch',
      'Weston Lakes',
      'Fulbrook',
      'Fulbrook on Fulshear Creek',
      'Tamarron',
      'Jordan Ranch',
      'Creek Cove at Cross Creek Ranch',
      'The Park at Cross Creek Ranch',
      'Polo Ranch',
      'Churchill Farms',
      'Firethorne',
      'Bonterra at Cross Creek Ranch',
    ],

    whyJerry: [
      "We specialize in pushing back on denied hail claims for young Fulshear roofs that adjusters want to write off as cosmetic.",
      "Jerry understands Cross Creek Ranch and Weston Lakes HOA requirements and submits the approval packet with your shingle spec and color sample.",
      "We are based in Katy, 15 minutes from most Fulshear neighborhoods, so warranty service is not a road trip.",
      "Our Roof Rejoov bio-based restoration is perfect for 8-to-12-year-old Fulshear roofs that are tired but not quite ready for replacement.",
    ],

    faqs: [
      {
        q: 'How much does a new roof cost in Fulshear, TX?',
        a: "Fulshear roof replacements typically run $10,000 to $22,000. Larger Cross Creek Ranch and Weston Lakes homes in the 3,500-5,000 sq ft range usually land between $14,000 and $19,000 for architectural asphalt shingles. Tile or synthetic slate is a different conversation and runs significantly more.",
      },
      {
        q: 'My Fulshear home is only 8 years old — can I still file a hail claim?',
        a: "Yes, but you need documentation. Adjusters deny young-roof claims aggressively by calling damage cosmetic. We do a free inspection, photograph every impact, run test squares to document hit density, and meet the adjuster on site. When the evidence is real, we get claims approved on roofs as young as 5 years old.",
      },
      {
        q: 'Do Cross Creek Ranch and Weston Lakes HOAs have shingle color rules?',
        a: "Yes, both have architectural review committees with approved color palettes. We handle the submission packet including the manufacturer spec sheet and a physical shingle sample. Most Fulshear homeowners stay with Weathered Wood, Charcoal, or Pewter Gray because those colors get approved fastest.",
      },
      {
        q: 'How quickly can you start a roof replacement in Fulshear?',
        a: "Usually within 7 to 14 days of contract signing for a standard asphalt shingle replacement, assuming the materials are in stock at the supply house. Insurance claim jobs take a little longer because we wait for the scope of loss to be finalized. Storm surges sometimes push us out 3 to 4 weeks.",
      },
      {
        q: 'Is Roof Rejoov a real alternative to replacing a builder-grade Fulshear roof?',
        a: "For the right roof, yes. If your Fulshear home is 8 to 14 years old and the shingles are structurally intact but losing granules or starting to streak, Roof Rejoov restores the asphalt oils and kills algae for roughly 15 to 25 percent of a replacement cost. It is not a fix for hail damage or torn shingles — that needs replacement.",
      },
    ],

    recentProject: {
      customerName: 'The Patel Family',
      neighborhood: 'Cross Creek Ranch, Fulshear',
      scope:
        'Full replacement of 31 squares, CertainTeed Landmark Pro in Weathered Wood, upgraded 6-inch seamless gutters, new ridge vent system',
      detail:
        "Initial claim denied by the carrier as 'cosmetic' damage. We re-inspected, documented 12 impact marks per test square, filed a supplement, and got full replacement approved. HOA packet submitted and approved in 9 days. Finished in two days.",
    },

    nearbyCities: ['Katy', 'Cinco Ranch', 'Richmond'],
  },

  // ============================================================
  // 4. RICHMOND
  // ============================================================
  {
    slug: 'richmond',
    city: 'Richmond',
    fullName: 'Richmond, TX',
    zips: ['77406', '77469'],
    county: 'Fort Bend',
    population: '~12,500 city / ~130,000 area',

    metaTitle: "Richmond TX Roofing Contractor | Jerry's Roofing",
    metaDescription:
      "Richmond, TX roofing contractor for historic homes and new builds. Insurance claims, repairs, Roof Rejoov. Jerry's Roofing — (409) 351-1529.",

    geo: { latitude: 29.5819, longitude: -95.7605 },

    h1: 'Richmond, TX Roofing Contractor for Old Homes and New',
    heroTagline:
      "From 1920s bungalows near downtown Richmond to new builds in Pecan Grove, Jerry handles the job without the runaround.",

    tldr:
      "Jerry's Roofing serves Richmond, TX homeowners across 77406 and 77469 with roof replacement, storm damage repair, insurance claim assistance, gutters, siding, and Roof Rejoov shingle restoration. Richmond has one of the most varied housing stocks in Fort Bend County — century-old bungalows near downtown, 30-year-old ranches in Pecan Grove, and brand-new builds out toward FM 762 — and we work on all of them. Owner Jerry Pilley personally inspects every Richmond roof and gives you a real price, not a sales pitch. Call (409) 351-1529 for a free Richmond roof estimate.",

    cityIntro:
      "Richmond is the Fort Bend County seat and one of the oldest towns in the Houston area, and that history shows up on the roofline. Downtown Richmond and the older streets around the courthouse have homes dating back to the 1920s and 30s — some with original shiplap decking under layers of asphalt shingle, some with wood shake conversions, and plenty with rot and sag that a quick drive-by would miss. Step a few miles out and you are in Pecan Grove Plantation, a 1980s and 90s master-planned community where the roofs are now 25 to 40 years old and most are on their second or third replacement. Keep going west and you hit the newer subdivisions along FM 762 and Grand Parkway — Aliana, Harvest Green, Veranda — where the roofs are 2 to 10 years old and still under manufacturer warranty. No other city in our service area has this kind of spread, and it matters because the right roof for a 1930s pier-and-beam bungalow is not the right roof for a 2022 production build. Richmond also sits at the southern edge of the Katy hail belt, catches gulf humidity year-round, and takes direct tropical storm exposure from systems moving up from Matagorda Bay. The tree canopy downtown is dense, which means constant debris in valleys and gutters — and Pecan Grove is named for a reason. We work on every kind of Richmond roof, and we do not upsell you into something your house does not need.",

    commonIssues: [
      {
        issue: 'Rotted decking on pre-1950 downtown homes',
        detail:
          "Original 1x6 shiplap decking in older Richmond homes has taken 80+ years of Gulf Coast humidity, and sections near the eaves and valleys are often soft or fully rotted. You only find it once the old shingles come off, and it has to be replaced before new roofing goes down.",
      },
      {
        issue: 'Aging roofs in Pecan Grove Plantation',
        detail:
          "Most Pecan Grove homes are on their original 1990s builder shingles or a first replacement from the 2000s. These roofs are well past their service life, and insurance carriers are increasingly denying claims and issuing non-renewal notices until the roof is replaced.",
      },
      {
        issue: 'Storm debris clogging valleys under heavy tree cover',
        detail:
          "Pecan and live oak debris piles up fast in Richmond roof valleys. Water backs up under the shingles, finds any weak spot in the underlayment, and rots the decking from above.",
      },
      {
        issue: 'Improperly lapped flashing on additions',
        detail:
          "A lot of older Richmond homes have add-on rooms, sunrooms, and converted porches where the flashing was never properly step-lapped into the original wall. Those transitions are the single most common leak source on older Richmond homes.",
      },
      {
        issue: 'Hail damage on exposed FM 762 corridor homes',
        detail:
          "Newer Richmond subdivisions along FM 762 and the Grand Parkway sit in open country with no wind break. Spring hail events hit them harder than downtown homes, and claim rates in those zip codes run well above county average.",
      },
      {
        issue: 'Chimney flashing and masonry cap failures',
        detail:
          "Richmond has a lot of brick chimneys from the 80s and 90s whose crown mortar has cracked and whose flashing has pulled loose. Water runs down the inside of the flue and stains ceilings. We reseal and reflash whenever we replace those roofs.",
      },
    ],

    neighborhoods: [
      'Pecan Grove Plantation',
      'Aliana',
      'Harvest Green',
      'Veranda',
      'Del Webb Richmond',
      'Long Meadow Farms',
      'Lakes of Bella Terra',
      'Rio Vista',
      'Old Orchard',
      'Richmond Historic District',
      'Grand Mission',
      'Canyon Gate at the Brazos',
    ],

    whyJerry: [
      "We work on historic downtown Richmond homes where a careless crew can damage original decking, eaves, and trim. Jerry treats those roofs with the respect they deserve.",
      "For Pecan Grove homeowners facing insurance non-renewal on an aging roof, we move fast and document everything so your policy stays active.",
      "Honest pricing means a small repair stays a small repair. We will not turn a $600 flashing fix into a $15,000 replacement just because we can.",
      "Full Richmond exterior service: roofing, gutters, siding, exterior paint, and driveway repaints — one crew, one contact, one invoice.",
    ],

    faqs: [
      {
        q: 'How much does a roof replacement cost in Richmond, TX?',
        a: "Richmond roof replacements generally run $8,000 to $20,000. Older downtown bungalows and Pecan Grove homes often cost more per square than they look because of decking repair, and new builds in Aliana or Harvest Green are usually at the lower end of the range. We give a firm price after we actually look at the roof.",
      },
      {
        q: 'My insurance company is threatening non-renewal because my Pecan Grove roof is old — what do I do?',
        a: "Move quickly. Carriers are dropping Richmond homeowners whose roofs are past 20 years old, and once the non-renewal is issued it is hard to get coverage without replacement. We do a free inspection, give you a real replacement quote, and can usually schedule within two weeks so your policy stays active.",
      },
      {
        q: 'Can you work on historic Richmond homes without damaging the original structure?',
        a: "Yes. Downtown Richmond homes from the 1920s and 30s need a crew that understands old shiplap decking, original fascia, and period trim. We tear off carefully, check every board before re-nailing, and replace only what is actually rotten.",
      },
      {
        q: 'Do you handle both the front-end inspection and the insurance claim in Richmond?',
        a: "Yes. We do a free pre-claim inspection, tell you honestly whether filing is worth it, and then meet your adjuster on the roof if you decide to file. That onsite meeting is the single biggest factor in getting claims approved correctly the first time.",
      },
      {
        q: 'Is Roof Rejoov a good fit for older Richmond homes?',
        a: "Only for roofs that are still structurally sound. If your Richmond roof is 12 to 18 years old, still watertight, and just looks tired or streaked, Roof Rejoov restores the asphalt and kills algae at a fraction of replacement cost. If the decking is rotten or shingles are failing, restoration is not the right answer.",
      },
    ],

    recentProject: {
      customerName: 'The Williams Family',
      neighborhood: 'Pecan Grove Plantation, Richmond',
      scope:
        'Full tear-off and replacement of 26 squares, GAF Timberline HDZ in Pewter Gray, 8 sheets of rotten decking replaced, new chimney flashing and crown sealant',
      detail:
        "Insurance carrier issued a non-renewal notice on a 24-year-old roof. We inspected within 48 hours, quoted the same day, and had the roof replaced inside of 10 days. Policy renewed without lapse.",
    },

    nearbyCities: ['Sugar Land', 'Katy', 'Fulshear', 'Rosenberg'],
  },

  // ============================================================
  // 5. SUGAR LAND
  // ============================================================
  {
    slug: 'sugar-land',
    city: 'Sugar Land',
    fullName: 'Sugar Land, TX',
    zips: ['77478', '77479', '77498'],
    county: 'Fort Bend',
    population: '~120,000',

    metaTitle: "Sugar Land Roofing Contractor | Jerry's Roofing",
    metaDescription:
      "Sugar Land, TX roofing contractor for premium homes. Insurance claims, tile and architectural shingles, Roof Rejoov. Jerry's Roofing — (409) 351-1529.",

    geo: { latitude: 29.5994, longitude: -95.6147 },

    h1: 'Sugar Land, TX Roofing Contractor for Premium Homes',
    heroTagline:
      "First Colony, Sweetwater, Riverstone — Jerry's Roofing delivers craftsman-level work at fair pricing on Sugar Land's premium rooflines.",

    tldr:
      "Jerry's Roofing is a local Sugar Land, TX roofing contractor serving First Colony, Sweetwater, Riverstone, Greatwood, Telfair, and every established neighborhood across 77478, 77479, and 77498. We handle architectural asphalt, designer shingles, tile roof repair, insurance claims, gutters, siding, and Roof Rejoov shingle restoration. Sugar Land is a premium market with premium homes, and Jerry Pilley personally inspects and estimates every Sugar Land roof to make sure the work matches the house. Call (409) 351-1529 for a straight-answer Sugar Land roof inspection.",

    cityIntro:
      "Sugar Land is the most established and most premium part of the greater Katy-Fort Bend market, and that reality shapes every roofing conversation here. First Colony dates back to the early 1980s and was the original master-planned community that put Sugar Land on the map — those homes are now 35 to 45 years old and many are on their second or third roof. Sweetwater, Greatwood, and Riverstone followed, and the housing stock ranges from $400K production homes to $2M-plus custom builds with clay tile, slate, and designer architectural shingle roofs on complex multi-gable roofs. Sugar Land roofs are bigger, more complicated, and more expensive to replace than anywhere else we serve, and homeowners here expect a crew that knows how to work on a premium home without scarring fascia, cracking tile, or damaging landscaping. Sugar Land also gets the full Gulf Coast climate load: intense UV on south and west slopes, gulf humidity that feeds algae on shaded north faces, hurricane wind exposure anytime a tropical system moves up the Brazos, and the tail end of the spring hail belt that stretches down from Katy and Cinco Ranch. Tree cover is heavy in First Colony and Sweetwater, which means constant pine needle and oak leaf debris in valleys and gutters. HOAs across Sugar Land are strict about color and material, particularly in Riverstone and Telfair where architectural review committees review every submission. We know those rules and we respect them.",

    commonIssues: [
      {
        issue: 'Aging roofs in First Colony and Sweetwater',
        detail:
          "Most First Colony homes are now on their third roof, and the 1990s architectural shingles installed as the second replacement are reaching end of life. Granule loss, curling, and algae streaking are nearly universal in original First Colony sections.",
      },
      {
        issue: 'Cracked and slipped tile on custom homes',
        detail:
          "Clay and concrete tile roofs in Riverstone and Telfair are durable but not indestructible. Hail cracks tiles, foot traffic from HVAC techs breaks them, and the underlayment beneath tile only lasts 20 to 30 years. We repair and re-underlay tile roofs instead of pushing replacement.",
      },
      {
        issue: 'Complex valley and dormer leaks',
        detail:
          "Premium Sugar Land homes have complicated rooflines with multiple valleys, dormers, cricket flashings, and dead valleys behind chimneys. Those transitions fail first, and finding the actual leak source takes experience, not a sales pitch.",
      },
      {
        issue: 'Algae staining on north-facing slopes',
        detail:
          "Heavy tree cover in First Colony and Sweetwater keeps north slopes damp. Gloeocapsa magma thrives in that humidity and leaves the black streaks every Sugar Land homeowner recognizes. Roof Rejoov kills it and restores appearance without replacement.",
      },
      {
        issue: 'Hail damage that looks cosmetic but is not',
        detail:
          "On premium architectural and designer shingles, hail impact can crack the fiberglass mat without obvious surface damage. Adjusters sometimes miss it. We know how to document these hidden impacts and get claims approved on high-value roofs.",
      },
      {
        issue: 'Gutter overflow on oversized roof planes',
        detail:
          "Sugar Land homes often have 40-foot roof planes dumping into standard 5-inch gutters that cannot handle Gulf Coast rainfall. Water overflows, soaks foundations, and stains brick and stone. Upgrading to oversized 6-inch seamless with 3x4 downspouts solves it.",
      },
    ],

    neighborhoods: [
      'First Colony',
      'Sweetwater',
      'Greatwood',
      'Riverstone',
      'Telfair',
      'New Territory',
      'Avalon',
      'Colony Lakes',
      'Commonwealth',
      'Sugar Creek',
      'The Highlands',
      'Settlers Park',
      'Brazos Landing',
      'Lake Pointe',
    ],

    whyJerry: [
      "Premium homes deserve craftsman-level work. We protect landscaping, pad walkways, and leave the yard magnet-swept when we are done.",
      "We repair tile, slate, and designer shingle roofs instead of pushing replacement when a repair is the right answer. That saves Sugar Land homeowners real money.",
      "Jerry personally handles every Sugar Land bid and is on site during every job. No handoff to a subcontractor crew you have never met.",
      "We submit complete HOA packets for Riverstone, Telfair, and First Colony architectural review committees so you are not the one chasing approvals.",
    ],

    faqs: [
      {
        q: 'How much does a new roof cost in Sugar Land, TX?',
        a: "Sugar Land replacements typically run $12,000 to $40,000 or more for asphalt shingles, depending on home size and roof complexity. Tile and designer shingle roofs on custom Riverstone and Telfair homes can run $50,000 to well over $100,000. Sugar Land has bigger, more complicated roofs than almost anywhere else we work, and the price reflects real square footage and real labor.",
      },
      {
        q: 'Do you work on tile roofs in Sugar Land?',
        a: "Yes. We repair cracked and slipped tile, replace failed underlayment, and handle full tile roof replacements on Riverstone and Telfair custom homes. Tile is a specialty — a lot of asphalt-only crews damage tiles just walking on them. We use the right load distribution and replace broken pieces with matching inventory.",
      },
      {
        q: 'Will a Sugar Land HOA approve any shingle color?',
        a: "No. Riverstone, Telfair, Greatwood, and First Colony all have architectural review committees with approved palettes. We handle the submission with manufacturer specs and physical samples. Most premium Sugar Land homes end up with designer architectural shingles in Weathered Wood, Pewter Gray, or Charcoal.",
      },
      {
        q: 'My Sugar Land roof is 18 years old — replace or restore?',
        a: "It depends on condition. If the shingles are structurally intact and just tired or algae-streaked, Roof Rejoov can extend service life for a small fraction of replacement cost. If granule loss is severe, tabs are curling, or there is any hail bruising, replacement is the right call. We will tell you honestly which category you are in.",
      },
      {
        q: 'Do you handle insurance claims on high-value Sugar Land homes?',
        a: "Yes, and it matters here more than anywhere else we work. On a $20,000 asphalt replacement the adjuster visit is important. On a $60,000 tile replacement it is critical. We meet the adjuster on site, document every impact, and supplement the claim for code upgrades, decking, and accessory replacements that are often missed on the initial scope.",
      },
    ],

    recentProject: {
      customerName: 'The Johnson Family',
      neighborhood: 'Riverstone, Sugar Land',
      scope:
        'Full tile underlayment replacement on 42 squares, reset original concrete tile, replaced 80 cracked tiles with color-matched inventory, new copper valley flashing',
      detail:
        "20-year-old synthetic underlayment had failed and the attic showed active leaks during spring rain. We stripped the tile, replaced decking in two valleys, installed new peel-and-stick underlayment, and reset the original tile. HOA approval handled same week. Completed in five days.",
    },

    nearbyCities: ['Richmond', 'Missouri City', 'Stafford'],
  },

  // ============================================================
  // 6. COLLEGE STATION
  // ============================================================
  {
    slug: 'college-station',
    city: 'College Station',
    fullName: 'College Station, TX',
    zips: ['77840', '77845'],
    county: 'Brazos',
    population: '~120,000',

    metaTitle: "College Station Roofing Contractor | Jerry's Roofing",
    metaDescription:
      "Honest College Station roofing contractor serving Aggieland. Roof replacement, hail damage, insurance claims, and Roof Rejoov. Call (409) 351-1529.",

    geo: { latitude: 30.628, longitude: -96.3344 },

    h1: 'Trusted Roofing Contractor in College Station, TX',
    heroTagline:
      "Local owner-operator Jerry Pilley brings the same straight-talk roofing approach to College Station — honest pricing, free inspections, and direct adjuster work on storm claims.",

    tldr:
      "Jerrys Roofing serves College Station, TX homeowners and rental property owners with roof replacement, hail and wind damage restoration, insurance claim coordination, gutters, siding, painting, and the Roof Rejoov bio-based shingle restoration treatment. Owner Jerry W. Pilley personally inspects every College Station roof and works directly with Brazos County insurance adjusters on storm jobs. We install IKO, CertainTeed, and GAF shingles across Pebble Creek, Castlegate, Edelweiss Gartens, and the rest of the Aggieland area. Call (409) 351-1529 for a straight-answer estimate — no high-pressure sales, no inflated numbers.",

    cityIntro:
      "College Station sits in the Brazos Valley about 90 miles northwest of Katy, and the roofing market here has its own rhythm. The housing stock is split between long-time family neighborhoods like Pebble Creek and Briarcrest, fast-growing master-planned communities like Castlegate II and Williams Creek, and a massive amount of student rental property tied to Texas A&M University. Each segment has different roofing needs, and the wrong contractor will treat them all the same. We don't. The Brazos Valley climate is hot, humid, and exposed to the same Texas hail belt and severe thunderstorm patterns that hit Houston, with peak hail risk March through May. UV intensity bakes shingles year-round, and the periodic strong straight-line wind events that roll through Aggieland drop ridge caps and lift shingles on under-fastened older roofs. College Station roofs also see a particular maintenance challenge: rental properties owned by absentee landlords often go years without a real inspection, and minor issues like cracked pipe boots and clogged valleys turn into major leaks before anyone catches them. We do honest condition reports for landlords, walk the roof with insurance adjusters when storm claims come up, and tell you the truth about whether a roof needs repair, replacement, or just a Roof Rejoov treatment to extend its life another 5–10 years. No upsell, no door-knocker tactics, no salespeople driving the price up.",

    commonIssues: [
      {
        issue: 'Hail bruising on Pebble Creek and Castlegate roofs',
        detail:
          "The Brazos Valley sits inside the Texas hail belt, and most established College Station neighborhoods have taken at least one significant hail hit in the past five years. Insurance often approves replacement once impact marks are documented, but a lot of bruising is invisible from the ground.",
      },
      {
        issue: 'Wind damage from spring thunderstorm complexes',
        detail:
          "Severe thunderstorm gusts of 60-80 mph are common in College Station during spring, and they routinely lift the first row of shingles on under-fastened older roofs. Ridge caps go first, then field shingles around the eaves and rakes.",
      },
      {
        issue: 'Neglected rental property maintenance turning into major leaks',
        detail:
          "College Station has a huge stock of student rental property, and absentee landlords often go years without a real roof inspection. Cracked pipe boots, clogged valleys, and minor flashing failures turn into rotted decking and interior leaks before anyone catches them.",
      },
      {
        issue: 'Brittle shingles from intense Brazos Valley UV',
        detail:
          "Texas sun bakes the petroleum oils out of asphalt shingles, and after 12-15 years of UV exposure most College Station shingles are brittle enough to crack when walked on. Roof Rejoov can restore that flexibility on roofs that are aging but not yet damaged.",
      },
      {
        issue: 'Tree impact and debris from live oaks',
        detail:
          "Older College Station neighborhoods like Briarcrest and Edelweiss are full of mature live oaks, and storm-dropped limbs cause real shingle damage every season. We document tree impact damage to support insurance claims and replace affected sections without re-roofing the whole house.",
      },
      {
        issue: 'HOA color and material restrictions in newer communities',
        detail:
          "Master-planned College Station communities like Castlegate II, Williams Creek, and Pebble Creek have approved shingle color lists and architectural review committees. We pull HOA guidelines before quoting so you don't end up with a stop-work letter mid-project.",
      },
    ],

    neighborhoods: [
      'Pebble Creek',
      'Castlegate II',
      'Williams Creek',
      'Edelweiss Gartens',
      'Briarcrest',
      'The Reserve',
      'Indian Lakes',
      'Greens Prairie',
      'Wellborn',
      'Aggieland',
      'Southwood Valley',
      'Emerald Forest',
    ],

    whyJerry: [
      "Jerry drives to College Station personally for every estimate — no salespeople in branded trucks, no commission markup eating 12 percent of your contract.",
      "We treat absentee landlords and owner-occupants the same: honest condition reports with photos, written flat-price quotes, and no surprise change orders mid-job.",
      "Direct insurance adjuster coordination on hail and wind claims — Jerry meets the Brazos County adjuster on the roof and makes sure nothing gets missed on the scope of loss.",
      "Roof Rejoov is available in College Station — for aging but undamaged shingles, the bio-based treatment extends roof life 5-10 years at a fraction of replacement cost.",
    ],

    faqs: [
      {
        q: "How much does a roof replacement cost in College Station, TX?",
        a: "A typical College Station roof replacement runs $9,000-$20,000 in 2026 depending on home size, pitch, and material. Most 2,000-3,000 sqft homes in Pebble Creek or Castlegate fall in the $11,000-$16,000 range for architectural shingles installed. We give a written line-item quote on every job — see our full <a href=\"/roof-replacement-cost-katy-tx\">Texas roof cost guide</a> for the detailed breakdown.",
      },
      {
        q: "Do you actually drive to College Station from Katy?",
        a: "Yes — College Station is about 90 miles from Katy and Jerry drives up personally for every estimate and every job. We schedule College Station inspections in batches when possible to keep travel costs down, but we don't charge extra for the drive on full-job quotes. Free inspections are always free, including in Aggieland.",
      },
      {
        q: "Can you handle insurance claims for College Station storm damage?",
        a: "Yes, and we do this constantly. After spring hail or wind events in the Brazos Valley, Jerry meets your insurance adjuster on the roof, walks them through every damaged shingle and flashing detail, and documents anything they miss for a supplement. We have years of experience working with the major Texas carriers on Brazos County claims.",
      },
      {
        q: "Do you work on College Station rental properties for absentee landlords?",
        a: "Yes — we do roof inspections, condition reports, and full installs for landlords who don't live in the area. We send photo reports by email so you can see exactly what's going on with your rental, and we coordinate with property managers when you have one. Honest pricing means you don't get gouged just because you live out of town.",
      },
      {
        q: "Is Roof Rejoov available in College Station?",
        a: "Yes, Roof Rejoov is available across College Station and the surrounding Brazos Valley. The bio-based treatment is ideal for aging asphalt shingle roofs that are dried out and brittle from UV exposure but not yet structurally damaged — it restores flexibility and extends roof life by 5-10 years for about 15-20 percent the cost of a full replacement. Call <strong>(409) 351-1529</strong> to see if your roof is a candidate.",
      },
    ],

    recentProject: {
      customerName: 'The Reynolds Family',
      neighborhood: 'Pebble Creek, College Station',
      scope:
        'Full tear-off and replacement of 28 squares, GAF Timberline HDZ in Weathered Wood, new ridge vent, replaced 4 sheets of decking, code-upgrade ice and water shield in valleys',
      detail:
        "Hail damage from a spring 2025 storm event. Jerry met the adjuster on-site, documented every impact, and supplemented for the ridge vent and code upgrades the original scope missed. Full replacement completed in 1.5 days. Customer paid only their deductible.",
    },

    nearbyCities: ['Bryan', 'Navasota', 'Brenham'],
  },
];
