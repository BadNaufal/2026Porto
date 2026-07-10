"use client";

import { useEffect, useRef } from "react";

export function ScrollCue() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const opacity = Math.max(0, 1 - window.scrollY / 150);
      ref.current.style.opacity = String(opacity);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 pointer-events-none transition-opacity duration-200"
    >
      <span className="text-[11px] uppercase tracking-[0.15em] text-fg-faint">Scroll</span>
      <span className="scroll-cue-chevron block w-3 h-3 border-b-2 border-r-2 border-fg-faint" />
    </div>
  );
}
