# Naufal Abidin — Portfolio Site Build Brief

## Goal
Rebuild my portfolio (currently a PDF) as a real website. Tech stack: **Next.js**,
configured for **fully static export** (`output: 'export'` in `next.config.js`) — no
server, deployable to Vercel/Netlify/GitHub Pages as plain static files.

## IMPORTANT — do this first
I have a specific design reference: **https://www.nithinmwarrier.com/**
(an Awwwards Nominee, June 2026, itself built with Next.js + Claude Code).

Claude (chat) could not visually render this site — no browser access in that session.
What we know about it from page structure only (NOT verified visually):
- Single page: Home / Works / Contact
- Split hero name across two lines, rotating role labels underneath
  (e.g. "Brand Designer / Web Designer / Product Designer")
- Hand-drawn scribble SVG accent + a brush-stroke graphic near the hero
- "Curated Projects" grid — each project tagged by year + category, links to its own case page
- Big closing CTA line before the footer
- Footer credit: "Designed in Figma. Created with Claude Code."

**Before building the visual design, open https://www.nithinmwarrier.com/ yourself,
take screenshots of the hero, project grid, and footer, and confirm the actual colors,
typography, spacing, and animations with me before committing to a direction.**
Do not guess at the palette — verify it.

## Content — use as-is, all real and already finalized

### Bio
Naufal Abidin — Brand & Creative Lead, E-Commerce & Product Development Specialist.
Jakarta, Indonesia. 5+ years building and scaling consumer brands across e-commerce,
FMCG, and logistics. Launched brands from zero, developed 30+ physical products,
built high-converting visual ecosystems for Shopee and TikTok Shop. Information
Systems background (Telkom University, 2020) — bridges creative execution, product
development, and commercial strategy.

Contact: badnaufal@gmail.com · +62 857 1418 7352
LinkedIn: linkedin.com/in/NaufalAbidin (verify exact URL)
Behance: https://shorturl.at/yJG15 (CV says this; portfolio deck says handle
`/abidinnaufal` — confirm which is current before publishing)

### Experience (reverse chronological)
- **Lead Designer** — PT. Triuslive Inovasi Indonesia — Jun 2025–Present.
  Founding team member (#004) of a live-streaming e-commerce startup. Built brand
  identities for **Acento** (tumblers/lunchboxes), **Stoval** (cookware), and
  **Bozbach** (phone accessories/ringlights) from scratch. Led 30+ products from
  concept through manufacturer coordination to launch. No image asset for this one —
  render as text/brand-name treatment (see v1 static build for one approach).
- **Creative Team Lead** — SupermamaLab Indonesia — Dec 2024–Mar 2025
- **Senior Graphic Designer** — PT Alatan Asasta Indonesia — May 2024–Oct 2024
- **Senior Graphic Designer** — Mamafirst.co — Feb 2024–May 2024
- **Graphic Designer** — PT Dachin Etech Global (Freemir & Cooger brands) — Dec 2022–Oct 2023
- **Graphic Designer** — J&T Express Sumatera Barat — Aug 2021–Nov 2022

⚠️ Date discrepancy flagged earlier and unresolved: confirm with Naufal whether
J&T Express ended Nov 2022 (CV) or Nov 2021 (old portfolio deck), and whether Dachin
ended Oct 2023 (CV) or Dec 2023 (old portfolio deck).

### Case studies / selected work
14 real work samples, images already extracted and provided in `assets/case-studies/`
(cropped/compressed from the original portfolio PDF; the Alatan website image is
already cropped to remove placeholder Lorem ipsum text). Each has an accent color
pulled from the actual brand:

| Image file | Project | Category | Accent hex | One-line copy |
|---|---|---|---|---|
| supermamalab-1.jpg, supermamalab-2.jpg | Supermamalab | Brand Systems | #3E7CB1 | Crafting a brand for supermoms — visuals that built trust, from live-sale campaigns to influencer collabs |
| mamafirst.jpg | Mamafirst.id | Brand Systems | #C75B7A | Designing for motherhood — educational content positioning Mamafirst as a trusted source |
| alatan-brand.jpg | Alatan Asasta | Brand Systems | #1F3B73 | Building trust with branding — rebrand extended into the CEO's personal thought leadership |
| freemir.jpg | Freemir | E-Commerce Campaigns | #5C4632 | One of Shopee's biggest cookware brands — sold lifestyle aspirations, won Top Brand "Double Date" award |
| cooger.jpg | Cooger | E-Commerce Campaigns | #E8622C | High-frequency flash-sale creative for Shopee payday/holiday campaigns |
| jnt-express.jpg | J&T Express | E-Commerce Campaigns | #D6272C | Regional campaigns and social content for a brand that moves fast |
| jnt-cargo.jpg | J&T Cargo | E-Commerce Campaigns | #1E8A4C | Extended the J&T system to Cargo's own digital presence |
| rikliv.jpg | Rikliv Studio | Freelance | #5B6B73 | Architecture & interior contractor branding — clean, structured, technical |
| infico.jpg | Infico | Freelance | #2E86AB | Smart living, seamless design — tech-forward electronics e-commerce identity |
| hamode.jpg | HaMode Singapore | Freelance | #A31545 | Bridging tradition with fashion — batik motifs, contemporary aesthetic, global audience |
| alatan-web.jpg | Alatan Asasta — Website | Website Design | #1F3B73 | Full website build, brand consistency across every digital touchpoint |
| eden-kitchen.jpg | Eden Kitchen | Website Design | #20264A | Website for a Jakarta cloud kitchen — intuitive ordering platform |
| kelapa-media.jpg | Kelapa Media | Website Design | #3FA65B | Website for a leading Indonesian live-streaming service provider |

### Skills
Technical: Adobe Illustrator, Photoshop, Premiere Pro, After Effects, Figma, Canva, CapCut, AI Design Tools
Core expertise: Brand Strategy & Visual Identity, Creative Direction, Team Leadership & Mentoring, E-Commerce & Social Media Marketing, Product Development, Manufacturer & Vendor Coordination

### Education & certifications
Bachelor's Degree in Information Systems, Telkom University, 2020.
Mini thesis: Utilization of the TOGAF Framework to Build Enterprise Architecture in the
Logistics Division of PT. Pindad Enjiniring Indonesia.
Certs: EF Standard English Test C1 Advanced (2024), Fundamentals of Digital Marketing —
Google Digital Garage (2022), SEO for Social Media — LinkedIn Learning (2022).

## What's already in this folder
- `assets/case-studies/` — 14 web-optimized JPGs (1600px wide), ready to use as-is
- `archive/v1-static-portfolio.html` — a full static HTML/CSS/JS version already built
  and visually reviewed (self-contained, screenshots verified in a prior session). Not
  the target design — it uses its own "shipping manifest" concept, not the reference
  site's look — but useful for copy phrasing, section structure, and as a fallback if
  the reference-matched build stalls.
- `archive/Naufal_Abidin_CV_ATS.docx` — ATS-friendly resume, same person/content

## Context: why this matters
Naufal's current contract (Triuslive) ends in ~30 days with no renewal decision yet.
This site is part of an active job search — bias towards shipping something real and
deployable over perfecting details endlessly.
