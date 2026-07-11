import { Section } from "@/components/section/Section";
import { caseStudies } from "@/lib/case-studies";
import { WorkFolders } from "./WorkFolders";
import { ScrollRevealText } from "@/components/ui/ScrollRevealText";

export function WorkList() {
  const sorted = caseStudies.slice().sort((a, b) => a.order - b.order);

  return (
    <Section id="work" variant="ink" grain transition="slide-right">
      <div
        className="pt-28 pb-24 sm:pt-36 sm:pb-32"
        style={{ paddingLeft: "var(--frame-inset)", paddingRight: "var(--frame-inset)" }}
      >
        <div className="flex items-end justify-between mb-2 sm:mb-4">
          <ScrollRevealText
            as="h2"
            text="Selected Work"
            accentWords={["work"]}
            className="font-display font-black uppercase text-[9vw] sm:text-[5vw] lg:text-[3.5vw] leading-none"
          />
          <p className="text-[13px] text-fg-soft mb-2">{sorted.length} files on record</p>
        </div>
        <p data-reveal className="text-fg-faint text-sm mb-10 hidden sm:block">
          Hover a folder to pull the work out of the file.
        </p>

        <WorkFolders items={sorted} />
      </div>
    </Section>
  );
}
