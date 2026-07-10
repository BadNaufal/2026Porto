import { caseStudies } from "@/lib/case-studies";

// Every real accent color across all case studies, flattened into one loud
// bar — literal, graphic proof of range rendered at a scale that can't be
// missed, not a decorative footnote.
const colors = caseStudies.flatMap((c) =>
  typeof c.accent === "string" ? [c.accent] : c.accent
);

export function ColorStrip() {
  return (
    <div data-reveal className="w-full flex h-8 sm:h-12" aria-hidden="true">
      {colors.map((color, i) => (
        <span key={color + i} className="flex-1" style={{ background: color }} />
      ))}
    </div>
  );
}
