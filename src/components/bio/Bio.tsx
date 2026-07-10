import Image from "next/image";
import { Section } from "@/components/section/Section";
import { caseStudies } from "@/lib/case-studies";
import { ScrollRevealText } from "@/components/ui/ScrollRevealText";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { value: "5+", label: "Years experience" },
  { value: "30+", label: "Products launched" },
  { value: String(caseStudies.length), label: "Case studies" },
];

export function Bio() {
  return (
    <Section id="about" variant="paper" transition="clip">
      <div
        className="py-24 sm:py-32 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20"
        style={{ paddingLeft: "var(--frame-inset)", paddingRight: "var(--frame-inset)" }}
      >
        <div className="flex flex-col gap-6">
          <p className="font-body text-[12px] uppercase tracking-[0.15em] text-ink/60 font-bold">
            About
          </p>

          <div data-reveal-scale className="relative w-full max-w-md">
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-accent"
              aria-hidden="true"
            />
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-ink/10">
              <Image
                src="/images/naufal-portrait.jpeg"
                alt="Naufal Abidin"
                fill
                sizes="(min-width: 1024px) 480px, 85vw"
                className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
            <span
              className="sunburst absolute -top-4 -right-4 w-11 h-11 border-2 border-paper"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <ScrollRevealText
            text="Brand & Creative Lead building consumer brands across e-commerce, FMCG, and logistics."
            accentWords={["e-commerce"]}
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] uppercase"
          />

          <p
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
            className="max-w-2xl text-ink/70 text-lg leading-relaxed"
          >
            Launched brands from zero, developed 30+ physical products, and
            built high-converting visual ecosystems for Shopee and TikTok
            Shop. An Information Systems background (Telkom University, 2020)
            bridges creative execution, product development, and commercial
            strategy.
          </p>

          <dl
            data-reveal
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            className="flex flex-wrap gap-x-12 gap-y-6 border-t-2 border-ink/10 pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display font-black text-4xl sm:text-5xl text-accent">
                  <CountUp value={stat.value} />
                </dd>
                <p className="text-[12px] uppercase tracking-[0.08em] text-ink/60 mt-1 font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
