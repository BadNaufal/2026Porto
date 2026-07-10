"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  value: string;
  duration?: number;
  className?: string;
};

/** Parses a leading integer off values like "5+" or "30+" and animates it
 * counting up once it scrolls into view, keeping any trailing suffix.
 * Writes directly to the DOM node instead of React state so the ~60fps
 * tick loop doesn't trigger a re-render on every frame. */
export function CountUp({ value, duration = 1200, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const el = ref.current;
    if (!el || target === null) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${target}${suffix}`;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;
          const start = performance.now();

          function tick(now: number) {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            el!.textContent = `${Math.round(eased * target!)}${suffix}`;
            if (t < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          observer.disconnect();
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, suffix]);

  return (
    <span ref={ref} className={className}>
      {target === null ? value : `0${suffix}`}
    </span>
  );
}
