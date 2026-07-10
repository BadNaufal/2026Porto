import { caseStudies } from "@/lib/case-studies";

/** Continuously scrolling strip of every brand name — ambient motion that
 * keeps moving even without interaction, sitting right before the work
 * section as a teaser of what's coming. Decorative: the real content is in
 * WorkList below, so this is hidden from assistive tech. */
export function Marquee() {
  const names = caseStudies.slice().sort((a, b) => a.order - b.order).map((c) => c.project);
  const loopItems = [...names, ...names];

  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden bg-ink border-y-2 border-line py-5 sm:py-7"
    >
      <div className="marquee-track flex items-center gap-10 w-max">
        {loopItems.map((name, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display font-black text-2xl sm:text-4xl uppercase text-fg-faint whitespace-nowrap"
          >
            {name}
            <span className="sunburst block w-2.5 h-2.5 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
