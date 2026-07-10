import { Section } from "@/components/section/Section";

const technicalSkills = [
  "Adobe Illustrator",
  "Photoshop",
  "Premiere Pro",
  "After Effects",
  "Figma",
  "Canva",
  "CapCut",
  "AI Design Tools",
];

const coreExpertise = [
  "Brand Strategy & Visual Identity",
  "Creative Direction",
  "Team Leadership & Mentoring",
  "E-Commerce & Social Media Marketing",
  "Product Development",
  "Manufacturer & Vendor Coordination",
];

const certifications = [
  "EF Standard English Test C1 Advanced (2024)",
  "Fundamentals of Digital Marketing — Google Digital Garage (2022)",
  "SEO for Social Media — LinkedIn Learning (2022)",
];

export function SkillsSection() {
  return (
    <Section id="skills" variant="paper" transition="scale">
      <div
        className="py-24 sm:py-32 grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.2fr] gap-14"
        style={{ paddingLeft: "var(--frame-inset)", paddingRight: "var(--frame-inset)" }}
      >
        <div data-reveal>
          <p className="font-body text-[12px] uppercase tracking-[0.15em] text-ink/60 mb-6 font-bold">
            Core Expertise
          </p>
          <ul className="flex flex-col gap-3">
            {coreExpertise.map((item) => (
              <li key={item} className="font-display font-bold text-lg leading-snug">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
          <p className="font-body text-[12px] uppercase tracking-[0.15em] text-ink/60 mb-6 font-bold">
            Tools
          </p>
          <ul className="flex flex-wrap gap-2">
            {technicalSkills.map((tool) => (
              <li
                key={tool}
                className="text-[13px] font-bold border-2 border-ink/15 rounded-full px-3.5 py-1.5 hover:border-accent hover:text-accent transition-colors duration-300"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          className="flex flex-col gap-10"
        >
          <div>
            <p className="font-body text-[12px] uppercase tracking-[0.15em] text-ink/60 mb-4 font-bold">
              Education
            </p>
            <p className="font-bold">Bachelor&apos;s Degree in Information Systems</p>
            <p className="text-ink/60">Telkom University, 2020</p>
            <p className="text-ink/60 text-sm mt-2 leading-relaxed">
              Mini thesis: Utilization of the TOGAF Framework to Build
              Enterprise Architecture in the Logistics Division of PT. Pindad
              Enjiniring Indonesia.
            </p>
          </div>

          <div>
            <p className="font-body text-[12px] uppercase tracking-[0.15em] text-ink/60 mb-4 font-bold">
              Certifications
            </p>
            <ul className="flex flex-col gap-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-ink/60 text-sm leading-relaxed">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
