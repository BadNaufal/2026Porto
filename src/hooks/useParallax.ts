"use client";

import { useEffect, useRef } from "react";

/** Translates an element vertically at a fraction of scroll speed, so
 * decorative layers drift at a different rate than the content around them
 * — depth tied to scrolling itself, not just mouse position. */
export function useParallax<T extends HTMLElement>(speed = 0.15) {
  const ref = useRef<T>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function update() {
      frame.current = null;
      if (el) el.style.transform = `translateY(${window.scrollY * speed}px)`;
    }

    function onScroll() {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [speed]);

  return ref;
}
