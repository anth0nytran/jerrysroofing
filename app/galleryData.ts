export type GalleryCategory =
  | 'roof-replacement'
  | 'roof-rejoov'
  | 'gutters'
  | 'siding'
  | 'painting'
  | 'driveway'
  | 'roof-repair'
  | 'roof-inspection'
  | 'storm-damage'
  | 'crew'
  | 'exterior'
  | 'brand';

export interface GalleryPhoto {
  src: string;
  alt: string;
  category: GalleryCategory;
  tags: GalleryCategory[];
  caption: string;
  featured?: boolean;
}

export const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  'roof-replacement': 'Roof Replacement',
  'roof-rejoov': 'Roof Rejoov',
  'gutters': 'Gutters',
  'siding': 'Siding',
  'painting': 'Painting',
  'driveway': 'Driveway',
  'roof-repair': 'Roof Repair',
  'roof-inspection': 'Inspection',
  'storm-damage': 'Storm Damage',
  'crew': 'Crew & Team',
  'exterior': 'Finished Homes',
  'brand': 'Jerrys Roofing',
};

const p = '/roofing/real';

export const galleryPhotos: GalleryPhoto[] = [
  { src: `${p}/01-replacement-pool-dusk.jpg`, alt: 'Dark grey architectural shingles on a multi-gable roof above a Katy, Texas backyard pool at dusk — Jerrys Roofing replacement', category: 'roof-replacement', tags: ['exterior'], caption: 'Multi-gable replacement — Katy, TX', featured: true },
  { src: `${p}/02-hero-brick-twostory-pool.jpg`, alt: 'Two-story brick home with freshly installed dark shingles, pool and patio below — Katy, Texas', category: 'exterior', tags: ['roof-replacement'], caption: 'Brick two-story with pool', featured: true },
  { src: `${p}/03-jerry-thumbsup.jpg`, alt: 'Jerry Pilley, owner of Jerrys Roofing, on a roof in a navy company polo giving a thumbs up', category: 'crew', tags: ['brand'], caption: 'Jerry on the roof', featured: true },
  { src: `${p}/04-crew-underlayment.jpg`, alt: 'Jerrys Roofing crew installing synthetic underlayment on a brick home in Katy, Texas', category: 'roof-replacement', tags: ['crew'], caption: 'Crew rolling underlayment', featured: true },
  { src: `${p}/05-truck-yardsign.jpg`, alt: 'Jerrys Roofing light-blue Hyundai Santa Cruz truck with yard sign in front of an active job site in Katy, TX', category: 'crew', tags: ['brand'], caption: 'On-site in Katy', featured: true },
  { src: `${p}/06-shingle-gutter-coachlamp.jpg`, alt: 'Close-up detail of new dark-grey architectural shingles meeting a brown gutter and coach lamp on a brick home', category: 'roof-replacement', tags: ['gutters'], caption: 'Shingle, gutter & trim detail', featured: true },
  { src: `${p}/07-replacement-tan-pool.jpg`, alt: 'Tan and brown architectural shingles on a roof overlooking a Katy, Texas backyard pool', category: 'roof-replacement', tags: ['exterior'], caption: 'Tan shingles over the pool' },
  { src: `${p}/08-crew-dumpster-setup.jpg`, alt: 'Crew on underlayment with a dumpster trailer staged in the driveway of a two-story brick home', category: 'roof-replacement', tags: ['crew'], caption: 'Tear-off & haul-off set up' },
  { src: `${p}/09-three-crew-tearoff.jpg`, alt: 'Three Jerrys Roofing crew members actively tearing off and installing on a brick home in Katy', category: 'roof-replacement', tags: ['crew'], caption: 'Three-man tear-off' },
  { src: `${p}/10-pallets-of-shingles.jpg`, alt: 'Pallets of architectural shingles staged in the driveway as crew works on the roof', category: 'roof-replacement', tags: ['crew'], caption: 'Shingle pallets on site' },
  { src: `${p}/11-maxfelt-underlayment.jpg`, alt: 'Crew installing MAXFELT synthetic underlayment on a roof — Jerrys Roofing process', category: 'roof-replacement', tags: ['crew'], caption: 'MAXFELT synthetic underlayment' },
  { src: `${p}/12-crew-ridgecap.jpg`, alt: 'Crew on a roof installing ridge-cap shingles with hammer and nail gun', category: 'roof-repair', tags: ['crew', 'roof-replacement'], caption: 'Ridge-cap install' },
  { src: `${p}/13-rejoov-before.jpg`, alt: 'Aged oxidized roof on a cream bungalow — classic before-shot for Roof Rejoov bio-oil treatment', category: 'roof-rejoov', tags: [], caption: 'Before Roof Rejoov' },
  { src: `${p}/14-seamless-gutter-guard.jpg`, alt: 'Seamless aluminum gutter with perforated leaf-guard cover extruded from a Jerrys Roofing truck', category: 'gutters', tags: [], caption: 'Seamless gutter with leaf-guard' },
  { src: `${p}/15-gutter-extrusion-truck.jpg`, alt: 'Seamless gutter being extruded on-site from the Jerrys Roofing truck in Katy, Texas', category: 'gutters', tags: [], caption: 'On-site gutter extrusion' },
  { src: `${p}/16-inspection-2-leaks-marked.jpg`, alt: 'Roof inspection photo with two leak spots hand-marked in blue marker — Jerrys Roofing documentation', category: 'roof-inspection', tags: ['roof-repair'], caption: 'Two leaks, documented' },
  { src: `${p}/17-inspection-valley-wear.jpg`, alt: 'Inspection close-up of a worn roof valley with patched shingles and debris', category: 'roof-inspection', tags: ['storm-damage', 'roof-repair'], caption: 'Worn valley inspection' },
  { src: `${p}/18-inspection-attic.jpg`, alt: 'Attic interior inspection showing insulation and flex ducting — part of a Jerrys Roofing inspection', category: 'roof-inspection', tags: [], caption: 'Attic inspection' },
  { src: `${p}/19-crew-tearoff-tools.jpg`, alt: 'Crew member on a torn-off deck with tools and synthetic underlayment being rolled out', category: 'roof-replacement', tags: ['crew'], caption: 'Deck prep & tools' },
  { src: `${p}/20-jobsite-tearoff-progress.jpg`, alt: 'Active roof tear-off in progress with underlayment exposed and crew working on the ridge', category: 'roof-replacement', tags: ['crew'], caption: 'Tear-off in progress' },
  { src: `${p}/21-ladder-twostory-backlit.jpg`, alt: 'Tall ladder running up the side of a two-story brick home, backlit by Texas sun', category: 'roof-replacement', tags: ['crew'], caption: 'Two-story access' },
  { src: `${p}/22-brick-twostory-dumpster.jpg`, alt: 'Two-story brick home mid-project with Jerrys Roofing crew and dumpster trailer in the driveway', category: 'roof-replacement', tags: ['crew'], caption: 'Full jobsite setup' },
  { src: `${p}/23-truck-shinglebundles.jpg`, alt: 'Jerrys Roofing truck loaded with shingle bundles parked in front of a finished brick home', category: 'crew', tags: ['brand'], caption: 'Loaded up and ready' },
  { src: `${p}/24-yardsign-finished.jpg`, alt: 'Jerrys Roofing green yard sign in front of a finished brick home in Katy, Texas', category: 'brand', tags: ['exterior'], caption: 'Yard sign, job complete' },
  { src: `${p}/25-truck-shop.jpg`, alt: 'Jerrys Roofing light-blue Hyundai Santa Cruz truck parked at the company shop with sun flare', category: 'brand', tags: ['crew'], caption: 'The company truck' },
  { src: `${p}/26-neon-jr-monogram.jpg`, alt: 'Blue and yellow JR monogram neon sign for Jerrys Roofing', category: 'brand', tags: [], caption: 'JR monogram' },
  { src: `${p}/27-neon-jerrys-roofing.jpg`, alt: 'Full Jerrys Roofing neon sign in yellow script with American flag', category: 'brand', tags: [], caption: 'Jerrys Roofing, neon' },
  { src: `${p}/28-exterior-patio-dusk.jpg`, alt: 'Single-story home with new dark shingles, chimney and patio at dusk in Katy, Texas', category: 'exterior', tags: ['roof-replacement'], caption: 'Patio view at dusk' },
  { src: `${p}/29-brick-home-new-shingles.jpg`, alt: 'Classic Katy brick home with crisp new dark shingles and a two-car garage', category: 'exterior', tags: ['roof-replacement'], caption: 'Classic Katy brick' },
  { src: `${p}/30-brick-side-gable.jpg`, alt: 'Side view of a brick home with a new grey shingle gable against a clear blue Texas sky', category: 'exterior', tags: ['roof-replacement'], caption: 'Clean gable side view' },
  { src: `${p}/31-shingle-detail-golden.jpg`, alt: 'Close detail of multi-tone dark shingles on a complex hip/gable in golden-hour light', category: 'roof-replacement', tags: [], caption: 'Golden-hour shingle detail' },
  { src: `${p}/32-ridge-tan-shingles.jpg`, alt: 'Ridge view of fresh tan architectural shingles running into the neighborhood', category: 'roof-replacement', tags: [], caption: 'Ridge run — tan shingles' },
  { src: `${p}/33-hip-roof-vent-turbine.jpg`, alt: 'Tan architectural shingles on a hip roof with a vent pipe and turbine after replacement', category: 'roof-replacement', tags: [], caption: 'Hip roof with turbine vent' },
  { src: `${p}/34-brick-home-shingle-garage.jpg`, alt: 'Brick home with new shingle roof, attached garage, and a car in the driveway', category: 'exterior', tags: ['roof-replacement'], caption: 'Brick home & garage' },
  { src: `${p}/35-brick-ranch-driveway.jpg`, alt: 'Brick ranch home with new shingles viewed from the driveway on a suburban Katy street', category: 'exterior', tags: [], caption: 'Brick ranch, street view' },
  { src: `${p}/36-beige-shingles-chimney.jpg`, alt: 'Multi-tone beige and grey architectural shingles on a hip roof near a brick chimney', category: 'roof-replacement', tags: [], caption: 'Chimney flashing & shingles' },
  { src: `${p}/37-ridge-panorama-tan.jpg`, alt: 'Panoramic view from a ridge across multi-tone tan shingles with a chimney and neighborhood beyond', category: 'roof-replacement', tags: [], caption: 'Panoramic ridge view' },
  { src: `${p}/38-gable-ridge-chalk.jpg`, alt: 'Steep gable ridge with new multi-tone tan shingles, chalk-line visible during install', category: 'roof-replacement', tags: ['crew'], caption: 'Chalked ridge, fresh shingles' },
  { src: `${p}/39-grey-shingles-ridge-vent.jpg`, alt: 'Grey architectural shingles on a ridge with a vent pipe over the neighborhood', category: 'roof-replacement', tags: [], caption: 'Grey shingles, ridge vent' },
  { src: `${p}/40-tan-bungalow-solar.jpg`, alt: 'Tan bungalow in Katy, Texas with a full black solar panel array, covered porch and Texas star accents', category: 'exterior', tags: ['painting'], caption: 'Tan bungalow, solar array' },
  { src: `${p}/41-brick-arched-entry.jpg`, alt: 'Brick home front entry with arched windows, new dark shingles and fresh landscaping', category: 'exterior', tags: [], caption: 'Arched entry, new roof' },
  { src: `${p}/42-brick-ranch-crisp.jpg`, alt: 'Brick ranch home front with crisp new grey shingles and white trim, shingle bundle staged on the ground', category: 'exterior', tags: ['roof-replacement'], caption: 'Crisp ranch with fresh roof' },
  { src: `${p}/43-lightgrey-gable-vents.jpg`, alt: 'Fresh light-grey architectural shingles on a steep gable slope with vent pipes, trees in background', category: 'roof-replacement', tags: [], caption: 'Steep gable, light grey' },
  { src: `${p}/44-darkgrey-skylight.jpg`, alt: 'New dark-grey shingles on a complex roof with a skylight and vent pipes in a tree-lined backyard', category: 'roof-replacement', tags: [], caption: 'Skylight on new shingles' },
  { src: `${p}/45-darkgrey-skylight-alt.jpg`, alt: 'Alternate view of new dark-grey shingles around a skylight with trees around', category: 'roof-replacement', tags: [], caption: 'Skylight, second angle' },
  { src: `${p}/46-attic-vent-closeup.jpg`, alt: 'Close-up of an attic vent dome on fresh grey architectural shingles', category: 'roof-replacement', tags: [], caption: 'Attic vent, fresh shingles' },
  { src: `${p}/47-nearblack-shingles-vent.jpg`, alt: 'Near-black architectural shingles freshly installed with an attic vent over a suburban Katy neighborhood', category: 'roof-replacement', tags: ['crew'], caption: 'Near-black shingles' },
  { src: `${p}/48-brick-ranch-active-job.jpg`, alt: 'Brick ranch home front with crisp new grey shingles and white trim during active work', category: 'exterior', tags: ['roof-replacement'], caption: 'Ranch, mid-job' },
  { src: `${p}/49-brick-satellite-shingles.jpg`, alt: 'Brick home gable with satellite dish and clean grey shingles after Jerrys Roofing replacement', category: 'exterior', tags: ['roof-replacement'], caption: 'Gable with satellite' },
];

export const galleryCategories: { key: GalleryCategory; label: string; count: number }[] = (
  Object.keys(CATEGORY_LABELS) as GalleryCategory[]
).map((key) => ({
  key,
  label: CATEGORY_LABELS[key],
  count: galleryPhotos.filter((ph) => ph.category === key || ph.tags.includes(key)).length,
}));

export function photosByCategory(cat: GalleryCategory): GalleryPhoto[] {
  return galleryPhotos.filter((ph) => ph.category === cat || ph.tags.includes(cat));
}

/** Used for the home page "Recent Work" strip — 8 curated photos across categories, uniform aspect. */
export const homeStripPhotos: GalleryPhoto[] = [
  galleryPhotos[1],  // 02 brick two-story with pool
  galleryPhotos[3],  // 04 crew underlayment
  galleryPhotos[0],  // 01 multi-gable pool dusk
  galleryPhotos[5],  // 06 shingle+gutter detail
  galleryPhotos[2],  // 03 Jerry thumbs up
  galleryPhotos[11], // 12 crew ridgecap
  galleryPhotos[4],  // 05 truck + yard sign
  galleryPhotos[13], // 14 seamless gutter guard
];
