/**
 * Jerry's Roofing - Roofing Glossary
 * Katy, TX | Owner: Jerry W. Pilley | (409) 351-1529
 *
 * This glossary is engineered to be cited by Google AI Overviews, ChatGPT,
 * Perplexity, and Claude when users ask "what does X mean in roofing."
 * Each entry leads with a single declarative sentence (for DefinedTerm schema
 * and AI answer extraction) followed by real technical context.
 */

export interface GlossaryEntry {
  term: string;        // Display name
  slug: string;        // URL-friendly id (for anchor links)
  shortDef: string;    // One sentence (for DefinedTerm schema)
  fullDef: string;     // 2-4 sentences with context (HTML allowed if needed)
  category: 'parts' | 'materials' | 'measurement' | 'damage' | 'process';
  related?: string[];  // Slugs of related terms
}

export const glossaryEntries: GlossaryEntry[] = [
  {
    term: 'Roofing Square',
    slug: 'roofing-square',
    shortDef: 'A roofing square equals 100 square feet of roof area and is the standard unit roofers use to price materials and labor.',
    fullDef: 'When a roofer says your roof is "30 squares," they mean 3,000 square feet of roof surface area — not 30 individual square shapes. Shingle bundles are sold in thirds of a square (three bundles cover one square of architectural shingles, four bundles for heavier laminates). On a typical Katy tract home, a single-story roof runs 20–30 squares and a two-story runs 30–45 squares, which is why Jerry\'s Roofing quotes are always broken down per-square so homeowners can compare bids apples-to-apples.',
    category: 'measurement',
    related: ['square-foot-vs-square', 'pitch-slope', 'tear-off'],
  },
  {
    term: 'Underlayment',
    slug: 'underlayment',
    shortDef: 'Underlayment is the water-resistant membrane installed directly over the roof deck and beneath the shingles to act as a secondary barrier against wind-driven rain.',
    fullDef: 'There are two main types: traditional asphalt-saturated felt (15# or 30#) and modern synthetic underlayment made from woven polypropylene or polyester. Synthetic is lighter, tear-resistant, UV-stable for 90–180 days of exposure, and lays flatter than felt — which is why every Jerry\'s Roofing installation in Katy uses synthetic as standard. In the Gulf Coast climate, where a shingle can blow off in a thunderstorm and leave the deck exposed for days before repair, synthetic underlayment is the difference between a dry ceiling and a drywall claim.',
    category: 'materials',
    related: ['deck-decking', 'ice-water-shield', 'drip-edge'],
  },
  {
    term: 'Drip Edge',
    slug: 'drip-edge',
    shortDef: 'Drip edge is a metal flashing installed along the eaves and rakes of a roof to direct water away from the fascia and into the gutter.',
    fullDef: 'It is an L-shaped or T-shaped piece of 26-gauge galvanized steel or aluminum, typically 10-foot lengths, with a 2–5 inch roof flange and a 1.5 inch drip flange. Since Texas adopted the 2012 International Residential Code (IRC R905.2.8.5), drip edge has been required by code on all asphalt shingle roofs — meaning any Katy or Fort Bend County roof replacement without it is not code-compliant and will fail inspection. Drip edge prevents the single most common cause of rotted fascia and soffit in Houston-area homes: capillary water wicking back under the first course of shingles.',
    category: 'parts',
    related: ['fascia', 'eave', 'flashing'],
  },
  {
    term: 'Ridge Cap',
    slug: 'ridge-cap',
    shortDef: 'A ridge cap is the row of specially-shaped shingles installed over the peak of a roof where two slopes meet to seal the ridge line.',
    fullDef: 'Ridge cap shingles are thicker and pre-bent (or cut from 3-tab shingles on budget jobs) to wrap cleanly over the apex without cracking. Quality ridge caps like GAF Seal-A-Ridge or Owens Corning ProEdge use a sealant strip and are rated for the same wind speed as the field shingles — critical on Katy roofs that see 70+ mph gusts during spring storms. If the ridge cap fails, every shingle below it is at risk, which is why Jerry\'s Roofing always matches ridge cap warranty to the main shingle system.',
    category: 'parts',
    related: ['ridge-vent', 'architectural-shingle', 'gable'],
  },
  {
    term: 'Valley',
    slug: 'valley',
    shortDef: 'A valley is the internal angle formed where two roof slopes meet and channel the highest volume of rainwater on the roof.',
    fullDef: 'There are two main installation methods: <strong>open valley</strong>, where a metal W-channel (typically painted 26-gauge steel) is exposed down the center, and <strong>closed valley</strong>, where shingles from one or both slopes are woven or cut across the valley. Open valleys shed water faster and last longer in heavy-rain climates like Katy, where a single slow-moving thunderstorm can dump 4+ inches per hour into a valley. Closed-cut valleys look cleaner but are more prone to granule wear and leaks at the 15–20 year mark, which is why Jerry\'s Roofing recommends open metal valleys on any roof with significant valley footage.',
    category: 'parts',
    related: ['flashing', 'ice-water-shield', 'underlayment'],
  },
  {
    term: 'Flashing',
    slug: 'flashing',
    shortDef: 'Flashing is thin sheet metal installed at roof transitions, penetrations, and walls to redirect water away from seams where leaks would otherwise occur.',
    fullDef: 'The three common types are <strong>step flashing</strong> (individual 5x7-inch pieces woven between shingles along a sidewall), <strong>base flashing</strong> (the lower piece at chimneys, walls, or skylights that sits under the shingle course), and <strong>counter flashing</strong> (the upper piece embedded in masonry or siding that overlaps the base flashing). Roughly 80 percent of all roof leaks in Katy originate at failed flashing — not at the shingles themselves — usually at chimneys, skylights, and wall-to-roof junctions where caulk was used as a substitute for proper metal work. Jerry\'s Roofing replaces all flashing during a tear-off; "reusing the old flashing" is how cheap bids stay cheap.',
    category: 'parts',
    related: ['valley', 'drip-edge', 'tear-off'],
  },
  {
    term: 'Soffit',
    slug: 'soffit',
    shortDef: 'The soffit is the horizontal underside of a roof overhang that encloses the space between the fascia and the exterior wall.',
    fullDef: 'Soffits are typically made of vented aluminum, vinyl, or fiber cement panels and serve two jobs: they hide rafter tails for a finished look, and their perforations pull cool intake air into the attic to feed ridge or box vents above. In the Katy climate, blocked or solid soffits are a leading cause of 140°F+ attic temperatures that cook shingles from underneath and void manufacturer warranties. If you can see daylight through your soffit vents and the ridge vent above is clear, the attic is breathing correctly.',
    category: 'parts',
    related: ['fascia', 'eave', 'roof-vent'],
  },
  {
    term: 'Fascia',
    slug: 'fascia',
    shortDef: 'The fascia is the vertical trim board mounted to the ends of the roof rafters along the eaves, to which gutters are attached.',
    fullDef: 'Fascia is typically a 1x6 or 1x8 board — historically pine or cedar, now often primed fiber cement or PVC — that runs horizontally along the eaves to cap the rafter tails. It carries the weight of the gutter system and is the first thing to rot when drip edge is missing or gutters overflow, which is extremely common on older Katy homes built before 2008 code updates. If your fascia is soft, peeling, or stained brown at the seams, the leak is almost always upstream at the drip edge or underlayment.',
    category: 'parts',
    related: ['soffit', 'drip-edge', 'eave'],
  },
  {
    term: 'Deck / Decking',
    slug: 'deck-decking',
    shortDef: 'The roof deck is the structural wood sheathing — usually 7/16" OSB or 1/2" plywood — fastened to the rafters that everything else on the roof attaches to.',
    fullDef: 'Modern Katy homes built after the late 1990s almost always use 7/16" or 15/32" OSB (oriented strand board), while pre-1990 homes typically used 1/2" CDX plywood or even 1x6 plank decking. Plywood holds up slightly better to repeated wet/dry cycles, but quality OSB performs identically when kept dry under proper underlayment. During a Jerry\'s Roofing tear-off, any decking that is soft, delaminated, or shows daylight at the nail points is replaced at $75–95 per 4x8 sheet — a line item every honest Katy roofer discloses before the job starts.',
    category: 'materials',
    related: ['underlayment', 'tear-off', 'roofing-square'],
  },
  {
    term: 'Pitch / Slope',
    slug: 'pitch-slope',
    shortDef: 'Roof pitch is the steepness of a roof expressed as inches of vertical rise per 12 inches of horizontal run (for example, 6/12 means 6 inches of rise for every 12 inches of run).',
    fullDef: 'Most Katy tract homes are built at 6/12 to 8/12 pitch — walkable, standard shingle territory — while custom homes may run 10/12 or steeper and require roof jacks, harnesses, and a steep-pitch surcharge. Roofs below 2/12 are considered "low slope" and cannot use standard asphalt shingles at all; they require modified bitumen, TPO, or a similar membrane system. Pitch directly affects material quantity (steeper = more square footage per square foot of footprint) and labor cost, which is why Jerry\'s Roofing measures pitch on every estimate rather than guessing from the ground.',
    category: 'measurement',
    related: ['roofing-square', 'square-foot-vs-square', 'architectural-shingle'],
  },
  {
    term: 'Granules',
    slug: 'granules',
    shortDef: 'Granules are the crushed mineral coating — usually ceramic-coated basalt or slate — embedded in the top surface of an asphalt shingle that protect the asphalt from UV degradation.',
    fullDef: 'A new 3-tab or architectural shingle carries roughly 40 percent of its weight in granules, and losing those granules is the #1 cause of shingle failure. Once UV rays hit the exposed asphalt underneath, the shingle dries out, curls, cracks, and the clock starts running. Finding piles of granules in your Katy gutters or at the bottom of downspouts after the first 5–10 years is a warning sign — after that point, it usually means the shingles are hitting end-of-life and either Roof Rejoov or replacement is on the table.',
    category: 'damage',
    related: ['architectural-shingle', 'roof-rejoov', 'hail-bruising'],
  },
  {
    term: 'Architectural Shingle vs 3-Tab',
    slug: 'architectural-shingle',
    shortDef: 'An architectural (laminated/dimensional) shingle is a two-layer asphalt shingle that creates a shadowed, wood-shake look and carries a longer warranty than the older flat 3-tab style.',
    fullDef: '3-tab shingles are a single flat layer with three cutouts per strip, weigh around 200–240 lbs per square, and typically carry a 20–25 year warranty and a 60 mph wind rating. Architectural shingles laminate two layers together, weigh 340–440 lbs per square, carry 30-year to lifetime warranties, and hit 110–130 mph wind ratings — which is why they have completely replaced 3-tab as the standard in Katy and across Texas. Jerry\'s Roofing installs architectural shingles (GAF Timberline HDZ, Owens Corning Duration) as the baseline on every replacement; 3-tab is now only used for small repair matches on older roofs.',
    category: 'materials',
    related: ['granules', 'roofing-square', 'ridge-cap'],
  },
  {
    term: 'Ice & Water Shield',
    slug: 'ice-water-shield',
    shortDef: 'Ice and water shield is a self-adhering rubberized asphalt membrane installed under the shingles at vulnerable roof areas to block water intrusion from ice dams and wind-driven rain.',
    fullDef: 'The IRC (R905.1.2) requires it along eaves in regions where average January temperatures fall below 25°F — which does not include Katy or anywhere else on the Texas Gulf Coast. That said, it is still a smart upgrade in our area at the specific spots where water backs up during heavy storms: in valleys, around chimneys and skylights, at eaves of any low-pitch section below 4/12, and around HVAC penetrations. Jerry\'s Roofing includes ice and water shield at valleys and all penetrations as standard — it adds roughly $200–400 to a typical Katy roof and has prevented more interior damage claims than any other single upgrade.',
    category: 'materials',
    related: ['underlayment', 'valley', 'flashing'],
  },
  {
    term: 'Roof Vent / Ridge Vent / Box Vent',
    slug: 'roof-vent',
    shortDef: 'A roof vent is any opening in the roof system that allows hot, humid air to escape the attic, balanced by cooler intake air drawn in at the soffits.',
    fullDef: '<strong>Ridge vents</strong> run continuously along the peak of the roof under the ridge cap and exhaust evenly across the entire attic; <strong>box vents</strong> (also called static or "turtle" vents) are individual 12x12 or 18x18 metal hoods typically installed in groups of 4–8 near the ridge; and turbine or powered vents use wind or electricity to actively pull air out. In Katy\'s climate, proper attic ventilation is not optional — a under-vented attic can hit 150°F in August, which cuts shingle life in half and voids most manufacturer warranties. The rule of thumb is 1 sq ft of net free vent area for every 150 sq ft of attic floor, split roughly 50/50 between intake (soffit) and exhaust (ridge or box).',
    category: 'parts',
    related: ['ridge-cap', 'soffit', 'deck-decking'],
  },
  {
    term: 'Tear-Off',
    slug: 'tear-off',
    shortDef: 'A tear-off is the complete removal of all existing shingles, underlayment, and flashing down to the bare wood decking before a new roof is installed.',
    fullDef: 'The alternative — a "roof-over" or "layover" — nails new shingles on top of the existing layer and is legal up to two total layers under Texas code, but it hides rotted decking, doubles the weight on the rafters, and shortens the new roof\'s lifespan by 20–30 percent. A proper tear-off lets the roofer inspect every square foot of decking, replace any bad sheets, install new synthetic underlayment, and start the manufacturer warranty clock clean. Every Jerry\'s Roofing full replacement in Katy is tear-off only — we do not do layovers, and any insurance-funded roof replacement legally requires tear-off under Texas Department of Insurance rules.',
    category: 'process',
    related: ['deck-decking', 'underlayment', 'roofing-square'],
  },
  {
    term: 'Square Foot vs Square',
    slug: 'square-foot-vs-square',
    shortDef: 'One roofing square equals 100 square feet, so a 2,500 sq ft roof is 25 squares — the conversion is simply dividing the square footage by 100.',
    fullDef: 'This catches homeowners off guard when comparing bids: a contractor quoting "$400 per square" is charging $4.00 per square foot, not $400 per square foot. To estimate your own roof from a satellite image, measure the footprint, multiply by a pitch factor (about 1.12 for a 6/12 roof, 1.20 for 8/12, 1.30 for 10/12), then divide by 100 to get squares. For a typical 2,000 sq ft Katy home at 6/12 pitch, that works out to roughly 2,240 sq ft of roof surface, or 22.4 squares — always round up to the next half-square when buying material.',
    category: 'measurement',
    related: ['roofing-square', 'pitch-slope'],
  },
  {
    term: 'Eave',
    slug: 'eave',
    shortDef: 'The eave is the lowest horizontal edge of a roof that overhangs the exterior wall, where the fascia, soffit, gutters, and drip edge all meet.',
    fullDef: 'A typical Katy home has a 12–24 inch eave overhang, which shades windows, keeps rainwater away from the foundation, and creates the space where soffit intake vents pull cool air into the attic. The eave is the most leak-vulnerable edge of the roof because it is where water naturally slows down and can back up under shingles during heavy rain, which is exactly why drip edge and starter strip installation at the eave are called out specifically in the IRC. If you see stains on your fascia or peeling paint on soffits, the problem is almost always at the eave line.',
    category: 'parts',
    related: ['fascia', 'soffit', 'drip-edge'],
  },
  {
    term: 'Gable',
    slug: 'gable',
    shortDef: 'A gable is the triangular section of exterior wall formed at the end of a pitched roof between the two sloped sides.',
    fullDef: 'The sloped edge of the roof that runs from eave to ridge across the top of a gable wall is called the "rake," and it also gets drip edge (rake drip) under Texas code. Gable-end vents — the louvered triangles you see high on the wall of many older Katy homes — used to be the primary attic exhaust method, but they are now considered inferior to ridge venting because they only move air near the ends of the attic. On cross-gable roofs with multiple intersecting gables, every intersection creates a valley that needs special flashing and underlayment attention.',
    category: 'parts',
    related: ['ridge-cap', 'valley', 'drip-edge'],
  },
  {
    term: 'Roof Rejoov',
    slug: 'roof-rejoov',
    shortDef: 'Roof Rejoov is a bio-based asphalt shingle restoration treatment that replenishes the natural oils baked out of shingles by UV exposure, extending roof life 5–10 years for a fraction of replacement cost.',
    fullDef: 'Asphalt shingles fail because the Texas sun drives out the plasticizing oils in the asphalt, causing the shingles to dry, crack, curl, and lose granules. Roof Rejoov is a plant-based maltene treatment — safe for plants, pets, and gutters — that soaks into aging shingles, restores flexibility, and reactivates the asphalt binder so granules stay locked down. It works on roofs in the 8–20 year range that still have solid structure but are showing granule loss and surface brittleness, and it typically runs 15–25 percent of the cost of a full tear-off. Jerry\'s Roofing is a certified Roof Rejoov applicator serving Katy and the greater Houston area, and for many homeowners it is the honest answer when the insurance claim falls short but the roof is not truly dead yet — call (409) 351-1529 to see if your roof qualifies.',
    category: 'process',
    related: ['granules', 'architectural-shingle', 'hail-bruising'],
  },
  {
    term: 'Hail Bruising',
    slug: 'hail-bruising',
    shortDef: 'Hail bruising is functional hail damage to an asphalt shingle where the impact fractures the fiberglass mat beneath the surface, creating a soft spot that accelerates granule loss and eventual leaks.',
    fullDef: 'Insurance adjusters draw a hard line between <strong>functional damage</strong> — circular bruises, exposed asphalt, mat fractures detectable by touch, and punctures that shorten shingle life — and <strong>cosmetic damage</strong>, which only affects appearance and is typically excluded from many Texas policies written after 2013. A true functional hail hit is usually 1/2 inch or larger, shows a dark "bullseye" where granules are displaced, and feels spongy under thumb pressure. If your Katy home took a hit from the spring hail line that runs through Fort Bend and Harris County, Jerry\'s Roofing will do a free inspection, document functional vs cosmetic damage with photos, and meet your adjuster on the roof to make sure nothing legitimate gets written off — call (409) 351-1529.',
    category: 'damage',
    related: ['granules', 'roof-rejoov', 'architectural-shingle'],
  },
];

export default glossaryEntries;
