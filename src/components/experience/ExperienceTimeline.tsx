import { Section } from "@/components/section/Section";
import { experience } from "@/lib/experience";
import { ExperienceItem } from "./ExperienceItem";
import { TimelineActivator } from "./TimelineActivator";
import { TimelineProgressLine } from "./TimelineProgressLine";

export function ExperienceTimeline() {
  return (
    <Section id="experience" variant="ink" grain transition="slide-left">
      <TimelineActivator />
      <div
        className="relative py-24 sm:py-32"
        style={{ paddingLeft: "var(--frame-inset)", paddingRight: "var(--frame-inset)" }}
      >
        <TimelineProgressLine />
        <p
          data-reveal
          className="font-body text-[12px] uppercase tracking-[0.15em] text-fg-faint mb-10 font-bold"
        >
          Experience
        </p>

        <div>
          {experience.map((role, index) => (
            <ExperienceItem key={role.slug} role={role} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
