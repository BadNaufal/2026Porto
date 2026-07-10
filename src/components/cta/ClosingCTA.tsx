import { Section } from "@/components/section/Section";
import { siteConfig } from "@/lib/site-config";
import { LiquidBlob } from "@/components/ui/LiquidBlob";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { WaveField } from "@/components/ui/WaveField";

const marqueeItems = ["Available for work", "Let's talk", "Brand & Creative Lead", "Jakarta, Indonesia"];
const loopItems = [...marqueeItems, ...marqueeItems];

const POP_WORD = "SELLS.";

export function ClosingCTA() {
  return (
    <Section variant="accent" transition="clip" className="overflow-hidden">
      <LiquidBlob
        className="absolute -bottom-32 -left-24 w-[55vw] max-w-2xl opacity-15 blur-2xl pointer-events-none"
        color="var(--accent-ink)"
        duration="18s"
      />
      <WaveField />

      {/* Dark sunburst spinning slowly behind the content — the site's
          recurring mark, recolored via the --accent var the conic gradient
          reads from (accent-on-accent would vanish). */}
      <span
        className="sunburst slow-spin hidden sm:block absolute top-16 right-[8%] w-28 h-28 opacity-25 pointer-events-none"
        style={{ "--accent": "var(--accent-ink)" } as React.CSSProperties}
        aria-hidden="true"
      />

      <div aria-hidden="true" className="relative overflow-hidden py-5 border-b-2 border-accent-ink/10">
        <div className="marquee-track flex items-center gap-12 w-max">
          {loopItems.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display font-black uppercase text-3xl sm:text-5xl leading-none text-accent-ink opacity-[0.14] whitespace-nowrap"
            >
              {item}
              <span className="block w-3 h-3 rounded-full bg-accent-ink" />
            </span>
          ))}
        </div>
      </div>

      <div
        className="relative py-24 sm:py-36 flex flex-col gap-10"
        style={{ paddingLeft: "var(--frame-inset)", paddingRight: "var(--frame-inset)" }}
      >
        <p data-reveal className="text-[12px] uppercase tracking-[0.15em] font-bold">
          Currently open to new opportunities
        </p>

        <h2
          data-reveal
          style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          className="font-display font-black uppercase leading-[0.92] text-[11vw] sm:text-[7vw] lg:text-[5vw] max-w-5xl"
        >
          Let&apos;s build something
          <br />
          that{" "}
          <span className="whitespace-nowrap">
            {POP_WORD.split("").map((letter, i) => (
              <span
                key={i}
                className="text-pop-outline cta-wave-letter"
                style={{ "--letter-delay": `${i * 140}ms` } as React.CSSProperties}
              >
                {letter}
              </span>
            ))}
          </span>
        </h2>

        <MagneticLink
          href={`mailto:${siteConfig.email}`}
          className="cta-pulse inline-flex w-fit items-center rounded-full bg-accent-ink text-accent px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] hover:opacity-90 transition-opacity duration-300"
        >
          {siteConfig.email}
        </MagneticLink>
      </div>
    </Section>
  );
}
