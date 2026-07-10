import { ReactNode } from "react";
import { GlowLayer } from "@/components/system/GlowLayer";

type SectionTransition = "none" | "clip" | "scale" | "slide-left" | "slide-right";

type SectionProps = {
  id?: string;
  children: ReactNode;
  variant?: "ink" | "paper" | "accent";
  grain?: boolean;
  glow?: boolean;
  /** Signature whole-section entrance move, distinct from the finer
   * child-level [data-reveal] stagger — triggers once as the section
   * crosses into view while scrolling. */
  transition?: SectionTransition;
  className?: string;
  style?: React.CSSProperties;
};

const variantClasses: Record<NonNullable<SectionProps["variant"]>, string> = {
  ink: "bg-ink text-fg",
  paper: "bg-paper text-ink",
  accent: "bg-accent text-accent-ink",
};

export function Section({
  id,
  children,
  variant = "ink",
  grain = false,
  glow,
  transition = "none",
  className = "",
  style,
}: SectionProps) {
  const showGlow = glow ?? variant === "ink";

  return (
    <section
      id={id}
      data-section
      data-glow={showGlow ? "" : undefined}
      data-section-transition={transition !== "none" ? transition : undefined}
      className={`relative isolate w-full ${variantClasses[variant]} ${grain ? "grain" : ""} ${className}`}
      style={style}
    >
      {showGlow && <GlowLayer />}
      <div className="relative z-10" data-transition-target={transition !== "none" ? "" : undefined}>
        {children}
      </div>
    </section>
  );
}
