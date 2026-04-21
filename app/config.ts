export const siteConfig = {
  businessName: "Jerrys Roofing",
  ownerName: 'Jerry W. Pilley',
  phone: '(409) 351-1529',
  cleanPhone: '+14093511529',
  email: 'jerrysroofinginfo@gmail.com',
  domain: 'https://roofingbyjerry.com',
  googleBusinessUrl: 'https://g.page/jerrysroofing',
  primaryService: 'Roof Replacement',
  services: [
    'Roof Rejoov',
    'Gutters',
    'Siding',
    'Painting',
    'Driveway Repaints',
    'Roof Repair',
    'Storm Damage',
    'Insurance Claims',
    'Free Roof Inspections',
  ],
  rating: 5.0,
  reviewCount: 20,
  yearsInBusiness: 2,
  yearsExperience: 7,
  foundedYear: 2024,
  experienceSince: 2019,
  mainCity: 'Katy',
  serviceAreas: ['Katy', 'Cypress', 'Cinco Ranch', 'Richmond', 'College Station'],
  allServiceAreas: [
    'Katy, TX',
    'Cypress, TX',
    'Cinco Ranch, TX',
    'Richmond, TX',
    'Fulshear, TX',
    'Brookshire, TX',
    'Sugar Land, TX',
    'West Houston, TX',
    'Sealy, TX',
    'College Station, TX',
  ],
  neighborhoods:
    'Cinco Ranch, Grand Lakes, Firethorne, Cross Creek Ranch, Tamarron, Ventana Lakes, Cane Island, Elyson, Jordan Ranch, Pin Oak Village',
  manufacturers: ['IKO', 'CertainTeed', 'GAF', 'F-Wave'],
  manufacturerLogos: [
    {
      name: 'IKO',
      src: '/pictures/IKO-transparent.png',
      alt: 'IKO shingle manufacturer logo',
      frameClassName: 'h-14 w-full max-w-[230px] sm:h-16 sm:max-w-[260px]',
    },
    {
      name: 'F-Wave',
      src: '/pictures/fwave-no-bg.svg',
      alt: 'F-Wave synthetic shingle manufacturer logo',
      frameClassName: 'h-24 w-full max-w-[280px] sm:h-32 sm:max-w-[340px]',
    },
    {
      name: 'CertainTeed',
      src: '/pictures/certainteed-transparent.png',
      alt: 'CertainTeed shingle manufacturer logo',
      frameClassName: 'h-14 w-full sm:h-16',
    },
    {
      name: 'GAF',
      src: '/pictures/gaf.png',
      alt: 'GAF shingle manufacturer logo',
      frameClassName: 'h-20 w-20 sm:h-24 sm:w-24',
    },
  ],
  testimonials: [
    {
      quote:
        "We did the Roof Rejoov on both of my houses in Groves, Texas. Both roofs were nearly gone, and just by looking at them now I can guarantee we'll get 7 to 10 more years out of each one. Totally satisfied with the whole process.",
      name: 'Jerry P.',
      location: 'Groves, TX',
    },
    {
      quote:
        "Jerry did a great job on our roof and aluminum siding, and helped us work with our insurance and really made things work for us. We recommend Jerrys Roofing to anyone.",
      name: 'Robert K.',
      location: 'Verified Google Review',
    },
    {
      quote:
        "Overall amazing. From the assessment to the repair it was easy, and definitely the best price in town. I would use them again for any and all roofing repairs.",
      name: 'Christopher H.',
      location: 'Verified Google Review',
    },
    {
      quote:
        "Jerry did an excellent job fixing a leak in my roof. He came out the same day, worked quickly, and the leak was completely fixed. Great service — highly recommended.",
      name: 'John R.',
      location: 'Verified Google Review',
    },
    {
      quote:
        "Jerry came by and gave us an estimate right away. He took his time and did a thorough inspection, and the next day it was fixed.",
      name: 'Nehemiah C.',
      location: 'Local Guide · Google',
    },
    {
      quote:
        "Jerry did a brilliant job repairing my roof. Arrived on time, worked hard, and completed the job very well. I highly recommend them.",
      name: 'Jasbir D.',
      location: 'Verified Google Review',
    },
    {
      quote: 'Very professional and responsive. Highly recommend.',
      name: 'Huina C.',
      location: 'Verified Google Review',
    },
    {
      quote: 'Best roofing company in the greater Houston area.',
      name: 'Baylee L.',
      location: 'Verified Google Review',
    },
  ],
  faqs: [
    {
      q: 'How much does a roof inspection cost?',
      a: "Nothing — every roof inspection from Jerrys Roofing is completely free with zero obligation. We come out, assess your roof's condition, and give you an honest evaluation. If work is needed, you get a clear written estimate on the spot. No pressure, no games.",
    },
    {
      q: 'What areas do you serve?',
      a: "We proudly serve Katy, Cypress, Cinco Ranch, Richmond, Fulshear, Brookshire, Sugar Land, West Houston, Sealy, College Station, and all surrounding communities in the greater Katy area.",
    },
    {
      q: "Is Jerrys Roofing insured?",
      a: "Yes. We carry full liability insurance on every job. Your property, your home, and our crew are always protected. We're happy to provide proof of insurance upon request.",
    },
    {
      q: 'How long does a roof replacement take?',
      a: "Most residential roof replacements are completed in 1-2 days, depending on the size and complexity of the job. We'll walk you through the timeline before we start so there are no surprises.",
    },
    {
      q: 'Do you help with insurance claims?',
      a: "Absolutely. We work with your insurance company throughout the entire claims process. From the initial inspection to the final paperwork, we make sure you get the coverage you're entitled to. In Texas, you have up to two years after a natural disaster to file a claim.",
    },
    {
      q: 'What roofing materials do you use?',
      a: "We use premium shingles from IKO, CertainTeed, GAF, and F-Wave — the top manufacturers in the industry, including F-Wave's next-generation synthetic shingles. We'll help you choose the right material for your home's style, budget, and the Texas climate.",
    },
    {
      q: 'What other services do you offer besides roofing?',
      a: "Beyond roof replacement and repair, we offer Roof Rejoov, gutter installation, siding, exterior painting, and driveway repaints. We're a full-service exterior contractor — one crew to handle everything.",
    },
  ],
};

export const serviceData = [
  {
    slug: 'roof-replacement',
    featured: true,
    title: 'Roof Replacement',
    image: '/roofing/real/jerry-truck-finished-roof-v2.jpg',
    summary:
      'Complete tear-off and replacement with premium shingles from IKO, CertainTeed, GAF, or F-Wave synthetic. Built to last through Texas weather.',
    details: [
      'Full tear-off down to the bare deck — no layering over old damaged shingles',
      'Premium synthetic underlayment and ice/water shields at vulnerable leak points',
      'Manufacturer-grade shingles installed perfectly to spec for maximum warranty coverage',
      'Windstorm-compliant installations adhering strictly to local Katy, TX codes'
    ],
    faqs: [
      {
        q: "How much does a roof replacement cost in Katy, TX?",
        a: "The cost of a roof replacement in Katy heavily depends on the square footage of your home, the pitch of the roof, and the material selected (like architectural shingles). On average, an honest replacement falls between $8,000 and $16,000. Jerrys Roofing always provides a transparent, zero-obligation written estimate."
      },
      {
        q: "Do I need a completely new roof if I notice a sudden leak?",
        a: "Not necessarily! Many leaks are isolated to damaged flashing, pipe jacks, or a few blown-off shingles. However, if your roof is over 15 years old and has widespread hail damage, wind damage, or brittle decking, a full roof replacement is the safest and most cost-effective long-term decision."
      },
      {
        q: "What roofing shingles hold up the best against Texas heat and Gulf Coast storms?",
        a: "We highly recommend dimensional architectural shingles from IKO, CertainTeed, or GAF. These premium materials are heavily engineered to withstand extreme UV baking, torrential rain, and hurricane-force winds commonly experienced in Katy, Cypress, and the Greater Houston area. For homeowners who want something beyond asphalt, we also install F-Wave synthetic shingles — a single-piece composite that resists hail, wind, and UV far better than traditional shingles."
      }
    ],
    process: [
      { title: "Complete Inspection", desc: "We physically evaluate your roofing deck, flashing zones, and attic ventilation channels." },
      { title: "Tear-off & Prep", desc: "Our crew strips old materials entirely to the primary bare deck, replacing any rotten or compromised wood safely." },
      { title: "Installation & Cleanup", desc: "Premium shingles are meticulously installed, followed immediately by an intensive magnetic yard sweep to ensure zero stray nails are left behind." }
    ],
    turnaround: 'Most homes completed in 1–2 days',
    longDescription:
      "Your roof is your home's absolute first line of defense against severe Texas storms, relentless heat, and intense Gulf Coast humidity. When spot repairs no longer make financial sense, a full structural roof replacement guarantees the protection of your investment for decades to come. Jerrys Roofing expertly tears off your old roof directly down to the wooden decking, critically inspects and repairs the underlying substrate, installs a premium synthetic underlayment, and tops it heavily with industry-leading shingles exclusively from IKO, CertainTeed, GAF, or F-Wave synthetic. Every single job includes an exhaustive, professional cleanup — we firmly believe in leaving your Katy property spotless. With 7 years of dedicated roofing experience throughout the Katy area, we know exactly what architectural roofs need to aggressively survive in this demanding climate.",
    keywords: [
      'roof replacement Katy TX',
      'new roof Katy TX',
      'roof replacement Cypress TX',
      'shingle replacement Cinco Ranch',
      'residential roofing contractor Richmond TX'
    ],
  },
  {
    slug: 'roof-rejoov',
    featured: true,
    title: 'Roof Rejoov',
    image: '/roofing/real/rejoov-before-v2.jpg',
    summary:
      'Extend your roof\'s active lifespan by 5–10 years without a full replacement. A highly cost-effective, scientific solution for aging shingles.',
    details: [
      'Eco-friendly, bio-based treatment immediately restores lost flexibility to dried, brittle asphalt shingles',
      'Significantly prevents shingle granule loss and aggressive structural curling',
      'Completed at a mere fraction of the standard cost of a full residential roof replacement'
    ],
    faqs: [
      {
        q: "What exactly is Roof Rejoov?",
        a: "Roof Rejoov is a bio-based chemical treatment that is safely sprayed onto aging asphalt shingles. Over time, the intense Texas sun bakes the vital petrochemical oils out of your roof, causing brittleness and granule loss. Our Roof Rejoov process penetrates the shingle, actively restoring its flexibility and waterproofing."
      },
      {
        q: "Will Roof Rejoov actually save me money?",
        a: "Yes. By extending the functional life of your current roof by 5 to 10 years, you delay the massive capital expense of a full $10,000+ roof replacement. The treatment typically costs around 15-20% of what a brand new roof would cost."
      },
      {
        q: "Is Roof Rejoov safe for my pets and landscaping?",
        a: "Absolutely. The specialized bio-based solution we use is plant-based, non-toxic, and entirely safe for kids, pets, and your exterior landscaping around your Katy area home."
      }
    ],
    process: [
      { title: "Structural Evaluation", desc: "First, we ensure your roof is a viable candidate (no severe foundational rot or massive missing shingle zones)." },
      { title: "Pre-Treatment Cleaning", desc: "We gently clear away heavy debris, moss, and surface dirt to ensure maximum chemical penetration." },
      { title: "Application Magic", desc: "Our technicians evenly apply the scientifically calibrated bio-oil treatment, immediately restoring your shingles to their flexible, weatherproof state." }
    ],
    turnaround: 'Completed in a single visit',
    longDescription:
      "Not every aging roof requires a costly full replacement. Roof Rejoov successfully utilizes a deep-penetrating bio-based treatment that actively restores the essential petrochemical oils that evaporate over time from the intense Texas sun and ambient heat. This scientific process actively reverses dangerous brittleness, completely stops heavy granule loss, and can effortlessly extend your roof's active lifespan by 5 to 10 years — routinely at a tiny fraction of the cost of total replacement. Jerrys Roofing evaluates every single roof honestly: if Roof Rejoov will confidently do the job, we'll aggressively recommend it. If a structural replacement is genuinely the smarter, safer move, we'll tell you that directly too. No sales pressure, just honest straight talk.",
    keywords: [
      'roof rejoov Katy TX',
      'roof rejuvenation Katy TX',
      'roof restoration Katy TX',
      'extend asphalt roof life Cypress TX',
      'shingle rejuvenation Cinco Ranch'
    ],
  },
  {
    slug: 'gutters',
    featured: true,
    title: 'Gutter Installation & Repair',
    image: '/roofing/real/14-seamless-gutter-guard.jpg',
    summary:
      'Seamless aluminum gutters custom-fitted dynamically to your roofline. Protect your foundation, landscaping, and siding from devastating water damage.',
    details: [
      'Continuous seamless aluminum gutters cut precisely on-site for a flawless architectural fit',
      'Calculated downspout placement heavily optimized for your specific lot drainage flow',
      'Premium gutter guard options available to drastically reduce seasonal maintenance'
    ],
    faqs: [
      {
        q: "Why are seamless gutters better than regular gutters?",
        a: "Traditional sectional gutters have frequent seams connecting the pieces, which are mathematically the most common points of failure, sagging, and leaking. Seamless gutters are extruded from a single continuous piece of heavy aluminum right in your driveway, completely eliminating these structural weak points."
      },
      {
        q: "How do I know if I need new gutters?",
        a: "Look for overflowing water during heavy rainstorms, noticeable rust or paint peeling, pooling water near your home's foundation, or gutters that are physically pulling away from the fascia board."
      },
      {
        q: "Do you install gutter guards?",
        a: "Yes! We heavily recommend and install premium gutter guards that allow heavy rainwater to flow smoothly while blocking leaves, pine needles, and debris—meaning you'll rarely need to climb a dangerous ladder to clean them again."
      }
    ],
    process: [
      { title: "Flow Assessment", desc: "We evaluate your roof's square footage and pitch to determine the necessary 5-inch or 6-inch gutter capacity." },
      { title: "Custom Extrusion", desc: "Your new gutters are seamlessly manufactured directly on your property using our specialized forming machine." },
      { title: "Precision Mounting", desc: "Gutters are anchored firmly to the fascia using heavy-duty, hidden structural hangers for a perfectly clean look." }
    ],
    turnaround: 'Most installs done same day',
    longDescription:
      "Gutters aren't simply a minor architectural accessory — they are incredibly essential protection for your Katy home's foundation, expensive landscaping, and exterior siding walls. Heavy Texas downpours can dump hundreds of gallons of concentrated water near your foundation within minutes, causing massive erosion or shifting. Jerrys Roofing expertly installs heavy-gauge seamless aluminum gutters, custom-cut dynamically on-site to fit your exact roofline layout mathematically. Zero seams explicitly means exponentially fewer leaks and a much cleaner visual aesthetic. We position high-flow downspouts highly strategically based strictly on your property's grading to aggressively direct water far away from your foundation slab. Whether you desperately need a completely new gutter system on a fresh build or a quick replacement on an older home experiencing overflow, we handle it incredibly efficiently.",
    keywords: [
      'gutter installation Katy TX',
      'seamless gutters Katy TX',
      'aluminum gutter repair Cypress TX',
      'gutter company Cinco Ranch'
    ],
  },
  {
    slug: 'siding',
    featured: true,
    title: 'Siding Installation & Repair',
    image: '/pictures/siding-texas.jpg',
    summary:
      "Upgrade your home's exterior envelope with incredibly durable, highly attractive siding. Premium Vinyl, Fiber Cement, and engineered wood installed right.",
    details: [
      'Premium Vinyl, advanced Fiber Cement (HardiePlank), and durable engineered wood options',
      'Rigorous moisture barrier and crucial wall ventilation installed securely behind every panel',
      'Precision color finishing and architectural style matching to vastly complement your existing roof'
    ],
    faqs: [
      {
        q: "What is the best siding for homes in Katy, TX?",
        a: "Fiber cement siding (like HardiePlank) is generally considered the gold standard for Southeast Texas. It is highly resistant to rot, termites, fire, and the intense humidity of the Gulf Coast while providing a stunning wood-like appearance."
      },
      {
        q: "Can you replace just a few damaged siding boards?",
        a: "Yes! If you have localized rot, woodpecker damage, or a section that was hit by debris, we can seamlessly replace and color-match the damaged boards without requiring you to replace the siding on your entire house."
      },
      {
        q: "Does new siding increase home value?",
        a: "Absolutely. Full exterior siding replacement routinely yields one of the highest returns on investment (ROI) in home remodeling, drastically boosting your foundational curb appeal and heavily improving energy efficiency."
      }
    ],
    process: [
      { title: "Design Consultation", desc: "We help you select the optimal siding material, profile (lap, board-and-batten), and color." },
      { title: "Wall Prep & Wrap", desc: "We remove old siding, inspect the wall studs for rot, and install a brand-new breathable weather barrier." },
      { title: "Installation & Trim", desc: "Siding panels are nailed to exact manufacturer specs, accompanied by beautiful, watertight corner trims and caulking." }
    ],
    turnaround: 'Varies by scope — typically 2–5 days',
    longDescription:
      "New siding instantly transforms your home's total curb appeal while simultaneously providing hyper-critical structural protection against relentless moisture, destructive pests, and dramatic Texas weather extremes. Jerrys Roofing proudly installs premium vinyl, thick fiber cement (HardiePlank), and heavy engineered wood siding armed natively with proper architectural moisture barriers and internal ventilation systems. We meticulously match exact colors and historical styles to seamlessly complement your existing roof and window trim for a unified, cohesive look. Whether you're rapidly replacing storm-damaged panels or pulling the trigger on a massive, full-scale exterior makeover, our elite local crew handles it with the absolute identical rigorous attention to detail we famously bring to every local roofing job.",
    keywords: [
      'siding installation Katy TX',
      'siding repair Katy TX',
      'HardiePlank siding Cypress TX',
      'vinyl siding replacement Cinco Ranch'
    ],
  },
  {
    slug: 'painting',
    featured: true,
    title: 'Exterior Painting',
    image: '/pictures/painting-texas-v2.jpg',
    summary:
      'Professional exterior painting that aggressively protects and beautifully refreshes your home. Deep prep, premium paints, and perfectly clean lines.',
    details: [
      'Exhaustive surface prep — high-pressure washing, scraping, and deep priming bare wood',
      'Highest-tier premium exterior paints specifically formulated and rated for Texas heat',
      'Complex trim, fascia, hidden soffits, and fine architectural accent detail work completely included'
    ],
    faqs: [
      {
        q: "How often should I paint the exterior of my house in Texas?",
        a: "Due to the blistering sun, high UV indexes, and heavy humidity in the Katy area, most homes require a fresh coat of high-quality exterior paint every 5 to 7 years to properly protect the underlying wood and siding materials."
      },
      {
        q: "Why is surface preparation so important for painting?",
        a: "If paint is applied over dirt, chalky residue, or rotting wood, it will almost immediately peel, bubble, or fail. Properly pressure washing, aggressively scraping loose paint, and utilizing high-adhesion primers ensures the new paint bonds permanently to the house."
      },
      {
        q: "Do you fix rotten wood before painting?",
        a: "Yes. As a full-service exterior contractor, we never just paint over problems. We actively identify and physically replace rotten fascia boards, soffits, and siding panels before applying any primer or paint."
      }
    ],
    process: [
      { title: "Deep Cleaning", desc: "We thoroughly pressure wash the entire exterior to remove years of dirt, algae, and chalking paint." },
      { title: "Wood Repair & Caulk", desc: "Rotten boards are cut out and replaced. Every single joint and seam is heavily caulked to prevent water intrusion." },
      { title: "Premium Painting", desc: "We apply industry-leading exterior paints, ensuring lush coverage, sharp trim lines, and a completely transformed aesthetic." }
    ],
    turnaround: 'Most homes completed in 3–5 days',
    longDescription:
      "A high-quality exterior paint job does significantly more than just instantly look good — it aggressively protects your home's vulnerable wood from invasive moisture, destructive UV damage, and the highly relentless Texas climate cycles. Jerrys Roofing adamantly starts every single paint project with exhaustively thorough surface preparation: deep-cleaning pressure washing, aggressively scraping any loose paint, heavily caulking open structural gaps, and rigidly priming all bare or replaced wood surfaces. We exclusively use premium, top-tier exterior paints chemically formulated heavily for elite heat and humidity resistance. Our local crew expertly handles everything entirely — broad walls, delicate trim, fascia boards, under-soffits, window shutters, and tiny accent details. The breathtaking result is a deeply clean, professional, head-turning finish that reliably lasts for years visually while aggressively boosting your property's total curb appeal and resale value.",
    keywords: [
      'exterior painting Katy TX',
      'house painting Katy TX',
      'exterior painting contractor Cypress TX',
      'home painting Cinco Ranch'
    ],
  },
  {
    slug: 'driveway-repaints',
    featured: true,
    title: 'Driveway Repaints & Coatings',
    image: '/pictures/driveway-texas-v2.jpg',
    summary:
      "Restore and heavily protect your driveway with professional structural repainting and thick sealing. Instantly boost curb appeal and easily extend your driveway's life.",
    details: [
      'Deep surface chemical cleaning, wide crack repair, and rigorous structural prep before any coating',
      'Highly durable, vehicle-grade epoxy and solid acrylic coating formula options',
      'High-traction, slip-resistant safety finishes widely available'
    ],
    faqs: [
      {
        q: "Can a painted driveway actually withstand hot tires and vehicles?",
        a: "Yes! We utilize specialized commercial-grade acrylics and epoxies specifically designed for vehicular traffic. These coatings are chemically engineered to resist 'hot tire pickup', oil stains, and the intense baking heat of Texas summers."
      },
      {
        q: "Will painting my driveway make it dangerously slippery when wet?",
        a: "Not at all. We integrate a specialized micro-grit or anti-slip silica additive directly into the final topcoat to ensure the driveway remains fully texturized and exceptionally safe to walk on, even during a heavy Katy rainstorm."
      },
      {
        q: "How do you prepare the concrete before painting?",
        a: "Preparation is everything. We aggressively degrease the concrete, utilize a high-PSI pressure washer/surface cleaner, and occasionally acid-etch the surface to guarantee the microscopic pores of the concrete are open to receive the specialized coating permanently."
      }
    ],
    process: [
      { title: "Prep & Degrease", desc: "We deeply lift set-in oil stains and pressure wash the concrete meticulously to ensure a sterile bonding surface." },
      { title: "Crack Sealing", desc: "We manually fill and smooth large structural cracks or pitting so the concrete looks uniform." },
      { title: "Coating Application", desc: "A heavy-duty base coat is applied, followed by protective topcoats outfitted with high-traction slip-resistant additives." }
    ],
    turnaround: 'Most driveways completed in 1–2 days',
    longDescription:
      "Your driveway is definitively one of the absolute first physical things people see when they pull up or visit your Katy home. Excessively cracked, sun-faded, or heavily oil-stained concrete aggressively drags down your entire property's visual layout and neighborhood appearance. Jerrys Roofing deeply cleans, safely repairs, and thickly recoats local driveways with highly durable, incredibly resilient epoxy or acrylic heavy-duty coatings that fearlessly resist Texas heat, blistering UV radiation, and heavy vehicle use. We happily offer highly effective slip-resistant safety finishes and an expansive range of designer colors to perfectly match your home's existing exterior trim. It is routinely considered an incredibly affordable, lightning-fast way to dramatically improve your curb appeal overnight and fiercely protect your expensive concrete investment entirely for years to come.",
    keywords: [
      'driveway repaint Katy TX',
      'concrete driveway coating Katy TX',
      'driveway sealing Cypress TX',
      'concrete driveway repair Cinco Ranch'
    ],
  },
  {
    slug: 'roof-inspection',
    title: 'Roof Inspection',
    image: '/roofing/real/16-inspection-2-leaks-marked.jpg',
    summary: 'Free, no-pressure roof inspection in Katy with a written damage report and photos — whether you hire us or not.',
    details: [
      'Jerry walks the roof personally — no salesperson, no drone-only flyover charging you $300',
      'Written damage report with dated photos you can use for insurance, resale, or your own records',
      'Adjuster-grade hail and wind documentation when storm damage is involved',
      'Honest verdict: repair, Roof Rejoov, replacement, or "you are fine — do not waste your money"',
    ],
    faqs: [
      {
        q: 'How much does a roof inspection cost in Katy, TX?',
        a: 'A typical paid roof inspection in the Katy area runs $150 to $600 depending on scope — basic visual inspections cost $150–$300, comprehensive inspections with detailed reports and attic access run $300–$600, and drone-assisted inspections with thermal imaging can hit $700. At Jerrys Roofing our inspections are free with zero obligation. We do not charge because we would rather earn the job honestly than nickel-and-dime you on a $250 inspection fee.',
      },
      {
        q: 'What does Jerry actually check during a free roof inspection?',
        a: 'We physically walk the roof and check every slope for shingle damage, granule loss, lifted tabs, and hail bruising. We document flashing at every penetration (chimneys, skylights, pipe boots, vents), check valleys and ridge caps, inspect the gutter line, and when accessible we go into the attic to look for active leaks, daylight, and ventilation issues. You get the whole thing photographed — typically 30-60 photos by the time we leave.',
      },
      {
        q: 'Why would I pay for an inspection when yours is free?',
        a: 'Usually you would not, but there are two cases where a paid inspection makes sense. First: if you are buying a home and need an independent third-party inspection (your buyer or lender may require an unbiased inspector with no stake in selling you a roof). Second: forensic inspections for legal disputes or insurance denial appeals, where a certified roof inspector (like an IAQA or HAAG-certified) provides expert-witness documentation. For every other scenario — routine check-ups, post-storm evaluations, resale prep, insurance claims — a free inspection from a reputable local roofer gives you the same information.',
      },
      {
        q: 'How often should Katy homeowners get their roof inspected?',
        a: 'Schedule an inspection at least once a year in Katy, ideally after the spring hail season (March–May) and again before hurricane season (late May). Any roof over 10 years old should get a yearly walk-through. After any major storm — hail over nickel-size, wind gusts over 60 mph, or a tropical system — get an inspection even if the roof looks fine from the ground. Most damage that voids warranties or becomes a leak next year is invisible from the driveway.',
      },
      {
        q: 'Will you try to upsell me on a new roof during the inspection?',
        a: 'No, and you will hear us say "you do not need a new roof" more often than you would expect. If a repair will solve your problem, we quote the repair. If Roof Rejoov will buy you another 5–10 years, we recommend that. If the roof is genuinely at end-of-life, we will tell you straight — but only then. We do not run commissioned salespeople, and we do not have a quota to hit, which is why the inspection stays free and the recommendation stays honest.',
      },
      {
        q: 'Do I need to be home during the inspection?',
        a: 'Not necessarily for the roof itself, but it helps. If we can get into the attic we get a much more complete picture (ventilation, daylight through the decking, active leaks, insulation condition). If you cannot be home, we can still do the exterior inspection, photograph everything, and send you the report by text or email the same day.',
      },
    ],
    process: [
      { title: 'Schedule', desc: "Call or text Jerry at (409) 351-1529. Most inspections are scheduled within 2-3 business days — sooner if you have an active leak." },
      { title: 'On-site walk', desc: 'Jerry personally walks every slope, documents damage with photos, checks flashing and valleys, and (if accessible) goes into the attic. Usually 45 minutes to an hour.' },
      { title: 'Written report', desc: "You get a written report with dated photos by text or email. If we find damage, the report includes a line-item estimate. If we do not, we tell you the roof is fine and you owe us nothing. Period." },
    ],
    turnaround: 'Most inspections scheduled within 2-3 days · Free · No obligation',
    longDescription: "Roof inspections in Katy are priced all over the map — $150 on the low end for a five-minute drive-by, $600+ for a comprehensive walk with attic access and thermal imaging, and anywhere up to $900 for forensic reports used in insurance disputes. Jerry's Roofing skips that entirely: every inspection we do is free, with zero obligation and zero sales pressure. We walk the roof personally (no drone fly-overs charging you for a 10-minute video), document every slope with dated photos, check flashing at every chimney, skylight, pipe boot, and vent, and when accessible we go into the attic to catch active leaks and ventilation issues the naked eye misses from below. You get the full written report by text or email the same day — 30 to 60 photos, the condition of every section of your roof, and an honest verdict. If you need a repair, we quote the repair. If Roof Rejoov will extend the roof 5-10 more years, we recommend that. If you need a full replacement, we say so. If the roof is fine and you just wanted a second opinion, we say that too — and you owe us nothing. Across 7 years of inspections on homes in Cinco Ranch, Cypress, Fulshear, Richmond, Sugar Land, Cross Creek Ranch, Cane Island, Grand Lakes, and the rest of the greater Katy area, we have told plenty of homeowners that they did not need a new roof. That is the whole point of an honest inspection. Call (409) 351-1529 to schedule yours — no cost, no pressure, no catch.",
    keywords: [
      'roof inspection Katy TX',
      'free roof inspection Katy TX',
      'roof inspection cost Katy TX',
      'professional roof inspector Katy',
      'roof inspection Cypress TX',
      'storm damage inspection Cinco Ranch',
      'hail damage inspection Katy',
      'pre-purchase roof inspection Katy',
      'attic roof inspection Katy TX',
      'free roof inspection Fulshear',
    ],
  },
  {
    slug: 'roof-repair',
    title: 'Roof Repair',
    image: '/roofing/real/12-crew-ridgecap.jpg',
    summary: 'Targeted roof repairs in Katy — leaks, missing shingles, flashing, vent boots, and valleys. If a repair is the right call, we do it. If it is not, we tell you.',
    details: [
      'Leak tracing and patching — we find the actual entry point, not just the stain on your ceiling',
      'Missing or wind-lifted shingle replacement using matching IKO, CertainTeed, or GAF product',
      'Flashing, pipe boot, and ridge cap repair around chimneys, skylights, and roof penetrations',
      'Valley repair and slope-to-slope tie-ins where water concentrates and most leaks start',
    ],
    faqs: [
      {
        q: 'How do I know if I need a repair or a full replacement?',
        a: 'If your roof is under 15 years old and the damage is localized, repair is almost always the right call. We walk the roof, show you photos of what we find, and give you the honest answer. Sometimes you will hear us say "you do not need a new roof" — that happens a lot.',
      },
      {
        q: 'Can you match my existing shingles?',
        a: 'Yes, in most cases. Jerry carries IKO, CertainTeed, and GAF — the three most common shingles in the Katy area — and we match color and profile as closely as the manufacturer still produces. On older roofs where the exact color is discontinued, we pull from the least-visible slope so the repair blends in from the street.',
      },
      {
        q: 'How much does a roof repair cost in Katy?',
        a: 'Most small repairs in Katy run between $350 and $1,200. Price depends on how many shingles need to come off, whether flashing or decking is involved, and how steep the roof is. We give a flat written price before any work starts — no "we found more damage" surprises mid-job.',
      },
      {
        q: 'My ceiling is leaking right now. Can you come today?',
        a: "Usually yes — Jerry answers his own phone at (409) 351-1529. For active leaks we can typically get a tarp on the roof same-day and come back to do the permanent repair once the weather clears. Gulf humidity means you do not want a wet deck sitting for long.",
      },
      {
        q: 'Do small repairs affect my roof warranty?',
        a: 'Not if they are done right. We install replacement shingles to manufacturer spec using the same nail pattern and sealant the original installer should have used. If your roof is still under a CertainTeed, GAF, or IKO warranty, our repairs do not void it.',
      },
    ],
    process: [
      { title: 'Free Inspection', desc: 'Jerry comes out, walks the roof, takes photos of the actual damage, and shows you what he finds on his phone before he leaves.' },
      { title: 'Written Flat-Price Quote', desc: 'You get a written price for the specific repair — shingle count, flashing work, decking if needed. No hourly billing, no surprises.' },
      { title: 'Repair and Cleanup', desc: 'We do the work, magnet-sweep the yard for nails, and haul off every scrap. You get before-and-after photos by text when we leave.' },
    ],
    turnaround: 'Most repairs done in 1 day',
    longDescription: "Roof repair in Katy is its own animal. The combination of gulf humidity, brutal summer UV, and the occasional hurricane or hail event means roofs here fail in very specific ways — pipe boots crack at the rubber seal around year 8, ridge caps blow off in 60+ mph gusts, and valleys rust through where pine needles and live oak debris hold moisture against the metal. Jerry has spent 7 years fixing exactly these problems on homes in Cinco Ranch, Cross Creek Ranch, Cane Island, Grand Lakes, Fulshear, Richmond, and across Cypress. A real repair starts with finding the actual leak, not guessing. Water travels — a stain in your kitchen might come from a nail pop 12 feet away near the ridge. We trace it, fix it, and match your existing IKO, CertainTeed, or GAF shingles so the patch is not obvious from the driveway. The honest truth is that repair is not always the right answer. If your roof is 20 years old with granules in the gutters and three layers of patches already, you are throwing good money after bad, and we will tell you so. But if it is a localized problem on an otherwise sound roof, a $600 repair beats a $15,000 replacement every time. That is the call we help you make, not the one we sell you into.",
    keywords: [
      'roof repair Katy TX',
      'roof leak repair Katy',
      'shingle repair Cypress TX',
      'roof patching Cinco Ranch',
      'emergency roof repair Katy',
      'flashing repair Katy TX',
      'pipe boot replacement Fulshear',
      'ridge cap repair Richmond TX',
    ],
  },
  {
    slug: 'storm-damage',
    title: 'Storm Damage Restoration',
    image: '/roofing/real/17-inspection-valley-wear.jpg',
    summary: 'Hail and wind damage restoration in Katy with direct insurance adjuster coordination, emergency tarping, and full roof restoration when the claim is approved.',
    details: [
      'Free storm damage inspection with photo documentation adjusters actually accept',
      'Emergency tarping within hours to stop interior damage while your claim is processed',
      'Direct coordination with your insurance adjuster — Jerry meets them on the roof',
      'Full restoration using IKO, CertainTeed, GAF, or F-Wave impact-rated (Class 4) shingles where it makes sense',
    ],
    faqs: [
      {
        q: 'How long do I have to file a roof insurance claim in Texas?',
        a: 'Texas law gives you up to 2 years from the date of the storm to file a property insurance claim under the Texas Insurance Code, but the window has been tightened in recent legislative sessions. If you had hail in April 2024 or took damage from the May 2024 Houston Derecho, the clock is already ticking — verify your specific deadline with the Texas Department of Insurance at tdi.texas.gov before assuming.',
      },
      {
        q: 'Is Katy actually in the Texas hail belt?',
        a: 'Yes — Harris and Fort Bend counties sit inside the broader Texas hail belt that runs from the DFW metroplex down through the I-10 corridor. The April 2024 East Texas event dropped baseball-size hail less than 100 miles from Katy, and the May 16, 2024 Houston Derecho produced 100+ mph straight-line winds right over Cinco Ranch, Cypress, and Cross Creek Ranch. Most roofs in the area have taken at least one significant hit in the last five years.',
      },
      {
        q: 'How do I know if my roof has hail damage I cannot see from the ground?',
        a: 'You usually cannot — that is the point of a free inspection. Hail bruising shows up as round marks where the granules are knocked off the asphalt, and from the driveway a bruised roof looks identical to a healthy one. Jerry walks the roof, chalks the hits, photographs them against a ruler for scale, and gives you an honest answer on whether it is worth filing a claim.',
      },
      {
        q: 'Will you work directly with my insurance adjuster?',
        a: 'Yes, and we strongly recommend it. Jerry meets the adjuster on the roof the day of their inspection, points out hits they miss (this happens constantly), and makes sure the scope of the claim reflects the actual damage. We are not a public adjuster and we do not charge you for this — it is just how we run storm jobs.',
      },
      {
        q: 'What if my insurance claim gets denied?',
        a: 'You have options, and denial is not always the end of the road. We can request a re-inspection, bring in supplemental photos, or in clear-cut cases help you escalate to a second adjuster. If the damage genuinely does not meet your policy threshold, we will tell you that too — we do not push bogus claims, and an honest denial today keeps your premiums from jumping next year.',
      },
    ],
    process: [
      { title: 'Emergency Tarp and Inspection', desc: 'If water is coming in, we tarp the roof same-day. Then Jerry does a full hail and wind damage inspection with adjuster-grade photo documentation.' },
      { title: 'Adjuster Meeting', desc: 'Jerry meets your insurance adjuster on the roof, walks them through every hit and wind-lifted shingle, and makes sure nothing gets missed on the claim scope.' },
      { title: 'Full Restoration', desc: 'Once the claim is approved, we tear off, replace decking as needed, and install new IKO, CertainTeed, GAF, or F-Wave shingles — usually in 1 to 2 days.' },
    ],
    turnaround: 'Tarping same-day, full restoration in 1-2 days after claim approval',
    longDescription: "Storm damage restoration in Katy is a different job than a regular roof replacement. The Houston metro sits on the edge of the Texas hail belt, which is why homeowners insurance premiums here are what they are — the April 2024 East Texas hail event and the May 16, 2024 Houston Derecho (100+ mph straight-line winds across Harris and Fort Bend counties) leave thousands of roofs quietly damaged with problems the homeowner will not see until the next heavy rain. Texas has tightened the window on first-party property claims in recent legislative sessions, so check tdi.texas.gov for the current deadline that applies to your loss date. Jerry has 7 years of experience working directly with adjusters from the major Texas carriers, and he meets them on the roof personally. That matters because adjusters miss hits — not out of bad faith, but because they inspect dozens of roofs a week and a trained roofer sees things they do not. We document every impact, handle the emergency tarping so your ceiling does not get worse while the claim is processed, and then do the full restoration with IKO, CertainTeed, GAF, or F-Wave synthetic shingles once the carrier approves the scope. In homes across Cinco Ranch, Cypress, Cross Creek Ranch, Cane Island, Grand Lakes, Fulshear, and Richmond, we see the same pattern over and over: homeowners who think their roof is fine after a storm, and a year later they are dealing with a rotted deck because the hail bruising finally cracked open. Get it inspected. It is free, and the clock is already running.",
    keywords: [
      'storm damage roof repair Katy TX',
      'hail damage roof Katy',
      'insurance claim roofer Cypress TX',
      'wind damage repair Cinco Ranch',
      'emergency roof tarping Katy',
      'hail damage inspection Fulshear',
      'Houston Derecho roof repair',
      'Class 4 impact shingles Katy TX',
    ],
  },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Roof Rejoov', href: '/roof-rejoov', accent: 'purple' },
  { label: 'Texas Made', href: '/texas-made' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Blog', href: '/blog' },
];
