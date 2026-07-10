"use client";

import { ReactNode, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/lib/case-studies";
import { ScrambleText } from "@/components/ui/ScrambleText";

type WorkListInteractiveProps = {
  items: CaseStudy[];
};

/** Bolds/accents quoted phrases already present in the real copy (e.g. an
 * award name) instead of inventing new stats — a small, honest way to give
 * each row a moment of "impact" within its one real sentence of story. */
function highlightQuotes(text: string): ReactNode[] {
  const parts = text.split(/("[^"]+")/g);
  return parts.map((part, i) =>
    part.startsWith('"') && part.endsWith('"') ? (
      <strong key={i} className="text-accent font-bold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function WorkListInteractive({ items }: WorkListInteractiveProps) {
  const [hovered, setHovered] = useState<CaseStudy | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const container = containerRef.current;
    const preview = previewRef.current;
    if (!container || !preview) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    preview.style.transform = `translate(${x + 32}px, ${y - 120}px)`;
  }

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
      {items.map((item, i) => {
        const accentColor = typeof item.accent === "string" ? item.accent : item.accent[0];
        return (
          <Link
            key={item.slug}
            href={`/works/${item.slug}/`}
            data-reveal
            style={{ "--accent": accentColor, "--reveal-delay": `${Math.min(i, 6) * 60}ms` } as React.CSSProperties}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered((h) => (h === item ? null : h))}
            className="group relative flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-7 sm:py-8 border-t-2 border-line"
          >
            <span className="text-[13px] font-bold text-fg-faint w-12 shrink-0 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex-1 flex flex-col gap-2 min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display font-black text-3xl sm:text-5xl uppercase leading-none transition-colors duration-300 group-hover:text-accent">
                  <ScrambleText text={item.project} />
                </h3>
                <span className="text-[11px] uppercase tracking-[0.08em] text-fg-faint font-bold">
                  {item.category}
                </span>
              </div>
              <p className="max-w-2xl text-fg-soft text-base sm:text-lg leading-relaxed">
                {highlightQuotes(item.blurb)}
              </p>
            </div>

            <span className="hidden sm:flex items-center text-2xl text-fg-faint opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent transition-all duration-300 shrink-0">
              →
            </span>
          </Link>
        );
      })}

      <div
        ref={previewRef}
        aria-hidden="true"
        className="hidden sm:block absolute top-0 left-0 w-[300px] h-[210px] rounded-xl overflow-hidden pointer-events-none shadow-2xl"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease, border-color 0.3s ease",
          border: `2px solid ${
            hovered ? (typeof hovered.accent === "string" ? hovered.accent : hovered.accent[0]) : "transparent"
          }`,
          willChange: "transform",
        }}
      >
        {hovered && hovered.images.length > 0 ? (
          <Image
            src={`/images/case-studies/${hovered.images[0].file}`}
            alt=""
            fill
            sizes="300px"
            className="object-cover"
          />
        ) : hovered ? (
          <div className="w-full h-full flex flex-wrap content-center items-center justify-center gap-2 p-4 bg-ink-raised">
            {hovered.brandPills?.map((pill) => (
              <span
                key={pill.name}
                className="rounded-full px-3 py-1.5 text-xs font-bold text-white"
                style={{ background: pill.color }}
              >
                {pill.name}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
