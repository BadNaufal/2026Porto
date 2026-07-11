export type CaseStudyCategory =
  | "Founding Work"
  | "Brand Systems"
  | "E-Commerce Campaigns"
  | "Freelance"
  | "Website Design";

export type CaseStudyImage = {
  file: string;
  alt: string;
};

export type CaseStudyStory = {
  /** The problem / starting situation. */
  brief: string;
  /** What Naufal actually did. */
  approach: string;
  /** The result. Only sourced facts — figures come from the CV / v1
   * portfolio deck (20% visibility, 1.4M/425K followers, the award), never
   * invented. Qualitative where no number exists. */
  outcome: string;
};

export type CaseStudy = {
  slug: string;
  order: number;
  project: string;
  category: CaseStudyCategory;
  /** Single hex for image-based case studies, or multiple hexes for the
   * text-only Triuslive founding-work entry (one per brand pill). */
  accent: string | string[];
  blurb: string;
  /** Real, sourced context — which role/employer this work was produced
   * under, where known. Left undefined for independent freelance work with
   * no dated employer relationship in the source content. */
  context?: string;
  /** Brief → Approach → Outcome narrative, drawn from the CV and the
   * reviewed v1 portfolio copy. */
  story: CaseStudyStory;
  /** What was actually shipped/owned on this engagement. */
  deliverables: string[];
  images: CaseStudyImage[];
  /** Only set for the Triuslive entry: brand name + its own accent color. */
  brandPills?: { name: string; color: string }[];
  /** Marks the lead showcase project rendered large at the top of the work
   * section — chosen for visual strength, not chronology. */
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "triuslive",
    order: 1,
    project: "Triuslive — Acento, Stoval, Bozbach",
    category: "Founding Work",
    accent: ["#1f2a44", "#2f6b4f", "#8a3b2b"],
    blurb:
      "Founding brand systems for a live-streaming e-commerce startup, built across three distinct product categories from the ground up.",
    context: "Lead Designer, PT. Triuslive Inovasi Indonesia · Jun 2025–Present",
    story: {
      brief:
        "A live-streaming e-commerce startup needed three consumer brands at once — tumblers & lunchboxes, cookware, and phone accessories/ringlights — each with its own identity, all sold live on Shopee and TikTok.",
      approach:
        "As founding team member #004, built each identity from zero: naming, logo, visual guidelines, and market positioning — then led 30+ products from concept through manufacturer coordination to launch.",
      outcome:
        "Three distinct brands — Acento, Stoval, and Bozbach — shipped and selling live, with product lines that went from blank brief to manufactured goods under one coherent creative system.",
    },
    deliverables: [
      "Naming",
      "Logo & identity",
      "Visual guidelines",
      "Market positioning",
      "Product development",
      "Manufacturer coordination",
    ],
    images: [],
    brandPills: [
      { name: "Acento", color: "#1f2a44" },
      { name: "Stoval", color: "#2f6b4f" },
      { name: "Bozbach", color: "#8a3b2b" },
    ],
  },
  {
    slug: "supermamalab",
    order: 2,
    project: "Supermamalab",
    category: "Brand Systems",
    accent: "#3E7CB1",
    blurb:
      "Crafting a brand for supermoms — visuals that built trust, from live-sale campaigns to influencer collabs.",
    context: "Creative Team Lead, SupermamaLab Indonesia · Dec 2024–Mar 2025",
    story: {
      brief:
        "A brand built around Indonesian supermoms needed visuals that could earn trust — not just push product — across live-sale campaigns and influencer collaborations.",
      approach:
        "Led the creative team behind campaigns and KOL collaborations, keeping one consistent visual language across every digital touchpoint, from live-sale assets to influencer content.",
      outcome: "Grew brand visibility 20% across digital platforms during the engagement.",
    },
    deliverables: [
      "Creative direction",
      "Campaign visuals",
      "KOL / influencer collabs",
      "Live-sale assets",
      "Team leadership",
    ],
    images: [
      { file: "supermamalab-1.jpg", alt: "Supermamalab brand visuals and packaging" },
      { file: "supermamalab-2.jpg", alt: "Supermamalab campaign and social creative" },
    ],
    featured: true,
  },
  {
    slug: "mamafirst",
    order: 3,
    project: "Mamafirst.id",
    category: "Brand Systems",
    accent: "#C75B7A",
    blurb:
      "Designing for motherhood — educational content positioning Mamafirst as a trusted source.",
    context: "Senior Graphic Designer, Mamafirst.co · Feb 2024–May 2024",
    story: {
      brief:
        "Mamafirst wanted to be seen as a trusted source for Indonesian mothers — a positioning that demanded education-first content rather than hard selling.",
      approach:
        "Designed educational content and brand storytelling across formats — from short-form video to social storytelling — while mentoring a small creative team.",
      outcome:
        "A consistent, education-led visual voice that positioned Mamafirst as a trusted source for its audience.",
    },
    deliverables: [
      "Educational content",
      "Short-form video",
      "Social storytelling",
      "Brand visuals",
      "Mentoring",
    ],
    images: [{ file: "mamafirst.jpg", alt: "Mamafirst.id brand and content visuals" }],
  },
  {
    slug: "alatan-brand",
    order: 4,
    project: "Alatan Asasta",
    category: "Brand Systems",
    accent: "#1F3B73",
    blurb:
      "Building trust with branding — rebrand extended into the CEO's personal thought leadership.",
    context: "Senior Graphic Designer, PT Alatan Asasta Indonesia · May 2024–Oct 2024",
    story: {
      brief:
        "Alatan Asasta needed a rebrand that could carry trust — and extend beyond the company itself into its CEO's personal thought-leadership presence.",
      approach:
        "Led the rebrand and multi-channel campaigns, then extended the refreshed system into the CEO's personal brand across digital channels.",
      outcome:
        "One coherent visual system serving both the company and its CEO's public presence — later carried into a full website build.",
    },
    deliverables: ["Rebrand", "Multi-channel campaigns", "CEO personal branding", "Visual system"],
    images: [{ file: "alatan-brand.jpg", alt: "Alatan Asasta brand identity" }],
  },
  {
    slug: "freemir",
    order: 5,
    project: "Freemir",
    category: "E-Commerce Campaigns",
    accent: "#5C4632",
    blurb:
      "One of Shopee's biggest cookware brands — sold lifestyle aspirations, won Top Brand \"Double Date\" award.",
    context: "Graphic Designer, PT Dachin Etech Global · Dec 2022–Oct 2023",
    story: {
      brief:
        "Freemir — one of Shopee's biggest cookware brands — needed campaign creative that sold lifestyle aspirations, not just pans.",
      approach:
        "Led visual branding for the brand's 1.4M-follower presence: high-volume campaign creative that kept aspiration and brand consistency intact through Shopee's relentless sale calendar.",
      outcome: "Contributed to Freemir winning Shopee's Top Brand \"Double Date\" award.",
    },
    deliverables: ["Campaign creative", "Visual branding", "Social content", "Marketplace assets"],
    images: [{ file: "freemir.jpg", alt: "Freemir e-commerce campaign creative" }],
  },
  {
    slug: "cooger",
    order: 6,
    project: "Cooger",
    category: "E-Commerce Campaigns",
    accent: "#E8622C",
    blurb: "High-frequency flash-sale creative for Shopee payday/holiday campaigns.",
    context: "Graphic Designer, PT Dachin Etech Global · Dec 2022–Oct 2023",
    story: {
      brief:
        "Shopee's payday and holiday sale cycles demand fresh creative constantly — Cooger needed flash-sale assets at high frequency without the brand falling apart.",
      approach:
        "Built high-frequency flash-sale creative for the 425K-follower brand — designed for speed without losing brand consistency.",
      outcome:
        "A repeatable creative system that kept Cooger present and consistent through every payday and holiday campaign window.",
    },
    deliverables: ["Flash-sale creative", "Campaign assets", "Marketplace visuals"],
    images: [{ file: "cooger.jpg", alt: "Cooger flash-sale campaign creative" }],
  },
  {
    slug: "jnt-express",
    order: 7,
    project: "J&T Express",
    category: "E-Commerce Campaigns",
    accent: "#D6272C",
    blurb: "Regional campaigns and social content for a brand that moves fast.",
    context: "Graphic Designer, J&T Express Sumatera Barat · Aug 2021–Nov 2022",
    story: {
      brief:
        "J&T Express moves fast, and its regional campaigns had to keep pace — high visual output under a strict national brand system.",
      approach:
        "Produced regional campaigns and social content for J&T Express Sumatera Barat, maintaining brand consistency at regional speed.",
      outcome:
        "A regional presence consistent enough that the scope was extended to J&T Cargo's own digital presence.",
    },
    deliverables: ["Regional campaigns", "Social content", "Brand consistency"],
    images: [{ file: "jnt-express.jpg", alt: "J&T Express regional campaign creative" }],
  },
  {
    slug: "jnt-cargo",
    order: 8,
    project: "J&T Cargo",
    category: "E-Commerce Campaigns",
    accent: "#1E8A4C",
    blurb: "Extended the J&T system to Cargo's own digital presence.",
    context: "Graphic Designer, J&T Express Sumatera Barat · Aug 2021–Nov 2022",
    story: {
      brief:
        "J&T's cargo arm needed its own digital presence — clearly related to the express brand, but standing on its own for a freight audience.",
      approach:
        "Extended the J&T visual system to Cargo's full digital presence, adapting the parent brand for the logistics-freight market.",
      outcome: "A digital presence that kept the brand ahead in an industry that never slows down.",
    },
    deliverables: ["Digital presence", "Brand extension", "Social content"],
    images: [{ file: "jnt-cargo.jpg", alt: "J&T Cargo digital presence design" }],
  },
  {
    slug: "rikliv",
    order: 9,
    project: "Rikliv Studio",
    category: "Freelance",
    accent: "#5B6B73",
    blurb: "Architecture & interior contractor branding — clean, structured, technical.",
    story: {
      brief:
        "An architecture & interior contractor needed branding that balanced creativity with technical precision — clean and structured, like the work itself.",
      approach:
        "Designed a clean, structured identity system that mirrors the discipline of architectural drawing.",
      outcome:
        "A technical-but-approachable brand the studio can carry across proposals, site, and social.",
    },
    deliverables: ["Brand identity", "Visual system"],
    images: [{ file: "rikliv.jpg", alt: "Rikliv Studio brand identity" }],
  },
  {
    slug: "infico",
    order: 10,
    project: "Infico",
    category: "Freelance",
    accent: "#2E86AB",
    blurb: "Smart living, seamless design — tech-forward electronics e-commerce identity.",
    story: {
      brief:
        "A tech-forward electronics e-commerce brand was entering a crowded market and needed an identity that stands out.",
      approach: "Built a modern, tech-forward identity around \"smart living, seamless design.\"",
      outcome: "A distinct identity built to stand out in a crowded electronics market.",
    },
    deliverables: ["Brand identity", "E-commerce visuals"],
    images: [{ file: "infico.jpg", alt: "Infico e-commerce brand identity" }],
  },
  {
    slug: "hamode",
    order: 11,
    project: "HaMode Singapore",
    category: "Freelance",
    accent: "#A31545",
    blurb: "Bridging tradition with fashion — batik motifs, contemporary aesthetic, global audience.",
    story: {
      brief:
        "HaMode wanted batik heritage to read as contemporary fashion — modern elegance for a global audience, not a museum piece.",
      approach:
        "Blended batik motifs with a contemporary aesthetic, building a visual language that treats tradition as a living material.",
      outcome: "An identity that bridges tradition and fashion, positioned for an international audience.",
    },
    deliverables: ["Fashion brand identity", "Batik-inspired visual language"],
    images: [{ file: "hamode.jpg", alt: "HaMode Singapore fashion brand identity" }],
  },
  {
    slug: "alatan-web",
    order: 12,
    project: "Alatan Asasta — Website",
    category: "Website Design",
    accent: "#1F3B73",
    blurb: "Full website build, brand consistency across every digital touchpoint.",
    context: "Senior Graphic Designer, PT Alatan Asasta Indonesia · May 2024–Oct 2024",
    story: {
      brief:
        "After the rebrand, Alatan Asasta needed a website that carried the new identity across every digital touchpoint.",
      approach:
        "Led development of the company website end-to-end — design through delivery — with brand consistency as the core requirement.",
      outcome:
        "A full website aligned with the refreshed brand, extending the rebrand from campaigns into the company's primary digital home.",
    },
    deliverables: ["Website design", "End-to-end build lead", "Brand consistency"],
    images: [{ file: "alatan-web.jpg", alt: "Alatan Asasta website design" }],
  },
  {
    slug: "eden-kitchen",
    order: 13,
    project: "Eden Kitchen",
    category: "Website Design",
    accent: "#20264A",
    blurb: "Website for a Jakarta cloud kitchen — intuitive ordering platform.",
    story: {
      brief:
        "A premier Jakarta cloud kitchen needed a website where exploring the menu and ordering felt effortless.",
      approach: "Designed an intuitive, engaging platform for customers to explore and order seamlessly.",
      outcome: "A website that makes discovering the menu and placing an order feel like one motion.",
    },
    deliverables: ["Website design", "Ordering flow / UX"],
    images: [{ file: "eden-kitchen.jpg", alt: "Eden Kitchen website design" }],
  },
  {
    slug: "kelapa-media",
    order: 14,
    project: "Kelapa Media",
    category: "Website Design",
    accent: "#3FA65B",
    blurb: "Website for a leading Indonesian live-streaming service provider.",
    story: {
      brief:
        "A leading Indonesian live-streaming service provider needed a site that reflected the polish of its streaming solutions.",
      approach:
        "Designed a website encapsulating the company's state-of-the-art streaming services in a clean, modern presentation.",
      outcome: "A digital home that matches the polish of the streaming product itself.",
    },
    deliverables: ["Website design", "Product presentation"],
    images: [{ file: "kelapa-media.jpg", alt: "Kelapa Media website design" }],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
