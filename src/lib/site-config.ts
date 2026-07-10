export const siteConfig = {
  name: "Naufal Abidin",
  role: "Brand & Creative Lead",
  roleLong: "Brand & Creative Lead, E-Commerce & Product Development Specialist",
  roles: ["Brand & Creative Lead", "E-Commerce Specialist", "Product Developer"],
  location: "Jakarta, Indonesia",
  description:
    "Portfolio of Naufal Abidin — Brand & Creative Lead and E-Commerce & Product Development Specialist based in Jakarta, Indonesia. 5+ years building and scaling consumer brands across e-commerce, FMCG, and logistics.",
  email: "badnaufal@gmail.com",
  phone: "+62 857 1418 7352",
  phoneHref: "+6285714187352",
  // TODO(naufal): confirm exact LinkedIn URL before publishing.
  linkedin: "https://linkedin.com/in/NaufalAbidin",
  linkedinLabel: "linkedin.com/in/NaufalAbidin",
  // TODO(naufal): CV lists the shorturl below; the portfolio deck lists the
  // handle "/abidinnaufal" instead. Confirm which is current before publishing.
  behance: "https://shorturl.at/yJG15",
  behanceLabel: "Behance",
} as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
