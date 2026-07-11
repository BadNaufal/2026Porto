import Image from "next/image";
import { CaseStudy, caseStudies } from "@/lib/case-studies";
import { LiquidBlob } from "@/components/ui/LiquidBlob";
import { MagneticLink } from "@/components/ui/MagneticLink";

type CaseStudyDetailProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const accentColor =
    typeof caseStudy.accent === "string" ? caseStudy.accent : caseStudy.accent[0];
  const accentStyle = { "--accent": accentColor } as React.CSSProperties;

  const sorted = caseStudies.slice().sort((a, b) => a.order - b.order);
  const currentIndex = sorted.findIndex((c) => c.slug === caseStudy.slug);
  const next = sorted[(currentIndex + 1) % sorted.length];

  return (
    <article
      style={{
        ...accentStyle,
        background: `radial-gradient(1200px 700px at 15% -10%, color-mix(in srgb, var(--accent) 30%, transparent), transparent), var(--ink)`,
      }}
      className="relative overflow-hidden"
    >
      <LiquidBlob
        className="absolute -top-32 right-0 w-[50vw] max-w-xl opacity-20 blur-2xl pointer-events-none"
        color="var(--accent)"
        duration="16s"
      />

      <div
        className="relative pt-32 pb-16 flex flex-col gap-8"
        style={{ paddingLeft: "var(--frame-inset)", paddingRight: "var(--frame-inset)" }}
      >
        <MagneticLink
          href="/#work"
          className="w-fit text-[13px] uppercase tracking-[0.08em] text-fg-soft hover:text-fg transition-colors inline-block"
        >
          ← Back to work
        </MagneticLink>

        <div className="flex items-center gap-3">
          <span
            className="block w-3 h-3 rounded-full sunburst"
            aria-hidden="true"
          />
          <p className="text-[12px] uppercase tracking-[0.1em] text-fg-soft">
            {caseStudy.category}
          </p>
        </div>

        <h1 className="font-display font-black uppercase text-[10vw] sm:text-[6vw] lg:text-5xl leading-[0.95] max-w-4xl">
          {caseStudy.project}
        </h1>

        <p className="font-body text-xl sm:text-2xl max-w-2xl text-fg-soft">
          {caseStudy.blurb}
        </p>

        {caseStudy.context && (
          <p className="text-[13px] uppercase tracking-[0.05em] text-accent border-t border-line pt-5 w-fit font-bold">
            {caseStudy.context}
          </p>
        )}
      </div>

      {/* Brief → Approach → Outcome: the "here's the problem, here's what I
          did, here's the result" a creative director actually evaluates. */}
      <div
        className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pb-14"
        style={{ paddingLeft: "var(--frame-inset)", paddingRight: "var(--frame-inset)" }}
      >
        {(
          [
            ["The brief", caseStudy.story.brief],
            ["The approach", caseStudy.story.approach],
            ["The outcome", caseStudy.story.outcome],
          ] as const
        ).map(([label, text], i) => (
          <div
            key={label}
            data-reveal
            style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            className="flex flex-col gap-3 border-t-2 border-line pt-5"
          >
            <span className="text-[11px] uppercase tracking-[0.12em] font-bold text-accent">
              0{i + 1} — {label}
            </span>
            <p className={`leading-relaxed ${i === 2 ? "text-fg font-medium" : "text-fg-soft"}`}>
              {text}
            </p>
          </div>
        ))}
      </div>

      <div
        className="relative flex flex-wrap items-center gap-2 pb-14"
        style={{ paddingLeft: "var(--frame-inset)", paddingRight: "var(--frame-inset)" }}
      >
        <span className="text-[11px] uppercase tracking-[0.12em] font-bold text-fg-faint mr-2">
          Delivered
        </span>
        {caseStudy.deliverables.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line px-3.5 py-1.5 text-[12px] font-bold text-fg-soft"
          >
            {item}
          </span>
        ))}
      </div>

      <div
        className="relative flex flex-col gap-6 pb-24"
        style={{ paddingLeft: "var(--frame-inset)", paddingRight: "var(--frame-inset)" }}
      >
        {caseStudy.images.length > 0 ? (
          caseStudy.images.map((image, i) => (
            <div
              key={image.file}
              data-reveal-scale
              style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
              className="relative w-full aspect-[16/10] bg-ink-raised overflow-hidden rounded-2xl"
            >
              <Image
                src={`/images/case-studies/${image.file}`}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))
        ) : (
          <div className="flex flex-wrap gap-3 py-12">
            {caseStudy.brandPills?.map((pill) => (
              <span
                key={pill.name}
                className="rounded-full px-6 py-3 text-lg font-bold text-white"
                style={{ background: pill.color }}
              >
                {pill.name}
              </span>
            ))}
          </div>
        )}
      </div>

      <div
        className="relative border-t border-line py-10 flex items-center justify-between"
        style={{ paddingLeft: "var(--frame-inset)", paddingRight: "var(--frame-inset)" }}
      >
        <span className="text-[12px] uppercase tracking-[0.08em] text-fg-soft">
          Next project
        </span>
        <MagneticLink
          href={`/works/${next.slug}/`}
          className="font-display font-bold text-xl hover:text-accent transition-colors inline-block"
        >
          {next.project} →
        </MagneticLink>
      </div>
    </article>
  );
}
