export type ExperienceRole = {
  slug: string;
  title: string;
  company: string;
  start: string;
  end: string;
  description: string;
  /** Set when this role has no dedicated case study image and should render
   * as a text/brand-name treatment instead (see the Triuslive brand pills in
   * `case-studies.ts`). */
  hasImage: boolean;
};

export const experience: ExperienceRole[] = [
  {
    slug: "triuslive",
    title: "Lead Designer",
    company: "PT. Triuslive Inovasi Indonesia",
    start: "Jun 2025",
    end: "Present",
    description:
      "Founding team member (#004) of a live-streaming e-commerce startup. Built brand identities for Acento (tumblers/lunchboxes), Stoval (cookware), and Bozbach (phone accessories/ringlights) from scratch. Led 30+ products from concept through manufacturer coordination to launch.",
    hasImage: false,
  },
  {
    slug: "supermamalab",
    title: "Creative Team Lead",
    company: "SupermamaLab Indonesia",
    start: "Dec 2024",
    end: "Mar 2025",
    description:
      "Led creative direction for a brand built around supermoms — visuals that built trust, from live-sale campaigns to influencer collaborations.",
    hasImage: true,
  },
  {
    slug: "alatan",
    title: "Senior Graphic Designer",
    company: "PT Alatan Asasta Indonesia",
    start: "May 2024",
    end: "Oct 2024",
    description:
      "Rebranded Alatan Asasta and extended the visual system into the CEO's personal thought leadership, plus a full website build.",
    hasImage: true,
  },
  {
    slug: "mamafirst",
    title: "Senior Graphic Designer",
    company: "Mamafirst.co",
    start: "Feb 2024",
    end: "May 2024",
    description:
      "Designed educational content and visual systems positioning Mamafirst as a trusted source for motherhood.",
    hasImage: true,
  },
  {
    slug: "dachin",
    title: "Graphic Designer",
    company: "PT Dachin Etech Global",
    start: "Dec 2022",
    end: "Oct 2023",
    description:
      "Built high-frequency e-commerce campaign creative for Freemir and Cooger, two of Shopee's leading cookware and appliance brands.",
    hasImage: true,
  },
  {
    slug: "jnt",
    title: "Graphic Designer",
    company: "J&T Express Sumatera Barat",
    start: "Aug 2021",
    end: "Nov 2022",
    description:
      "Produced regional campaigns and social content for J&T Express, later extending the visual system to J&T Cargo's digital presence.",
    hasImage: true,
  },
];
