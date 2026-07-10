import { siteConfig } from "@/lib/site-config";
import { Section } from "@/components/section/Section";
import { HeroName } from "./HeroName";
import { RoleRotator } from "./RoleRotator";
import { Scene3DClient } from "./Scene3DClient";
import { ScrollCue } from "./ScrollCue";
import { LiquidBlob } from "@/components/ui/LiquidBlob";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";

export function Hero() {
  return (
    <Section id="hero" variant="ink" grain className="overflow-hidden">
      <ParallaxLayer
        speed={0.12}
        className="absolute -top-24 -right-24 w-[60vw] max-w-2xl opacity-25 blur-2xl pointer-events-none"
      >
        <LiquidBlob duration="14s" />
      </ParallaxLayer>

      <ParallaxLayer
        speed={0.06}
        className="hidden sm:block absolute top-20 right-0 w-[55vw] max-w-[640px] aspect-square pointer-events-none"
      >
        <Scene3DClient />
      </ParallaxLayer>

      <div
        className="relative min-h-[92vh] flex flex-col justify-center gap-10 pt-32 pb-16"
        style={{ paddingLeft: "var(--frame-inset)", paddingRight: "var(--frame-inset)" }}
      >
        <div data-reveal className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="sunburst block w-3 h-3" aria-hidden="true" />
          <p className="font-body text-[13px] uppercase tracking-[0.15em] text-fg-soft">
            {siteConfig.location} — currently open to new opportunities
          </p>
        </div>

        <div data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
          <HeroName />
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 border-t border-line pt-6"
        >
          <p className="font-display font-bold text-2xl sm:text-3xl text-accent">
            <RoleRotator />
          </p>
          <MagneticLink
            href="#work"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-fg text-ink px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] hover:bg-accent hover:text-accent-ink transition-colors duration-300"
          >
            See the work ↓
          </MagneticLink>
        </div>

        <ScrollCue />
      </div>
    </Section>
  );
}
