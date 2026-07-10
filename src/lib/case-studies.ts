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
    images: [{ file: "jnt-cargo.jpg", alt: "J&T Cargo digital presence design" }],
  },
  {
    slug: "rikliv",
    order: 9,
    project: "Rikliv Studio",
    category: "Freelance",
    accent: "#5B6B73",
    blurb: "Architecture & interior contractor branding — clean, structured, technical.",
    images: [{ file: "rikliv.jpg", alt: "Rikliv Studio brand identity" }],
  },
  {
    slug: "infico",
    order: 10,
    project: "Infico",
    category: "Freelance",
    accent: "#2E86AB",
    blurb: "Smart living, seamless design — tech-forward electronics e-commerce identity.",
    images: [{ file: "infico.jpg", alt: "Infico e-commerce brand identity" }],
  },
  {
    slug: "hamode",
    order: 11,
    project: "HaMode Singapore",
    category: "Freelance",
    accent: "#A31545",
    blurb: "Bridging tradition with fashion — batik motifs, contemporary aesthetic, global audience.",
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
    images: [{ file: "alatan-web.jpg", alt: "Alatan Asasta website design" }],
  },
  {
    slug: "eden-kitchen",
    order: 13,
    project: "Eden Kitchen",
    category: "Website Design",
    accent: "#20264A",
    blurb: "Website for a Jakarta cloud kitchen — intuitive ordering platform.",
    images: [{ file: "eden-kitchen.jpg", alt: "Eden Kitchen website design" }],
  },
  {
    slug: "kelapa-media",
    order: 14,
    project: "Kelapa Media",
    category: "Website Design",
    accent: "#3FA65B",
    blurb: "Website for a leading Indonesian live-streaming service provider.",
    images: [{ file: "kelapa-media.jpg", alt: "Kelapa Media website design" }],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
