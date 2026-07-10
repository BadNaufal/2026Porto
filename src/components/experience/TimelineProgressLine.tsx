"use client";

import { useEffect, useRef } from "react";

/** A vertical line that fills in sync with how far the user has scrolled
 * through the Experience section specifically — a local, literal scroll
 * progress indicator rather than the page-wide one in the nav. */
export function TimelineProgressLine() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!track || !fill) return;
    const section = track.closest<HTMLElement>("[data-section]");
    if (!section) return;

    function update() {
      frame.current = null;
      const rect = section!.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const scrolled = window.innerHeight - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      if (fill) fill.style.transform = `scaleY(${progress})`;
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

  return (
    <div
      ref={trackRef}
      aria-hidden="true"
      className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10"
    >
      <div
        ref={fillRef}
        className="w-full h-full bg-accent origin-top"
        style={{ transform: "scaleY(0)" }}
      />
    </div>
  );
}
