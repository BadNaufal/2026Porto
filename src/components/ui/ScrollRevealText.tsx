"use client";

import { useEffect, useRef } from "react";

type ScrollRevealTextProps = {
  text: string;
  accentWords?: string[];
  /** Class applied to accentWords. Defaults to a solid accent-color fill —
   * override this wherever the section's own background is already the
   * accent color (e.g. the orange ClosingCTA), since accent-on-accent text
   * disappears. */
  accentClassName?: string;
  className?: string;
  as?: "p" | "h2";
};

/**
 * Words dim by default and light up individually as they cross a band in
 * the viewport while scrolling — a scroll-scrubbed reveal rather than a
 * one-shot fade-in, so the identity statement feels alive while reading it.
 */
export function ScrollRevealText({
  text,
  accentWords = [],
  accentClassName = "text-accent",
  className = "",
  as = "p",
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLHeadingElement | HTMLParagraphElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wordRefs.current.forEach((w) => w && (w.style.opacity = "1"));
      return;
    }

    function update() {
      frame.current = null;
      const vh = window.innerHeight;
      const start = vh * 0.88;
      const end = vh * 0.42;

      wordRefs.current.forEach((word) => {
        if (!word) return;
        const rect = word.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const t = (start - center) / (start - end);
        const clamped = Math.max(0, Math.min(1, t));
        word.style.opacity = String(0.22 + clamped * 0.78);
      });
    }

    function onScroll() {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  const words = text.split(" ");
  const accentSet = new Set(accentWords.map((w) => w.toLowerCase().replace(/[.,]/g, "")));
  const content = words.map((word, i) => {
    const clean = word.toLowerCase().replace(/[.,]/g, "");
    const isAccent = accentSet.has(clean);
    return (
      <span
        key={i}
        ref={(el) => {
          wordRefs.current[i] = el;
        }}
        className={isAccent ? accentClassName : ""}
        style={{ opacity: 0.22 }}
      >
        {word}{" "}
      </span>
    );
  });

  if (as === "h2") {
    return (
      <h2 ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className}>
        {content}
      </h2>
    );
  }

  return (
    <p ref={containerRef as React.RefObject<HTMLParagraphElement>} className={className}>
      {content}
    </p>
  );
}
