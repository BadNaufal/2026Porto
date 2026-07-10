"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * A full-screen accent wipe that plays on every route change (home <->
 * case study, case study <-> case study via "next project"). Next.js swaps
 * the underlying content instantly; this overlay covers the screen the
 * moment the pathname changes, then wipes away to reveal it, so navigation
 * gets its own moment of motion instead of a flat instant cut.
 */
export function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const isFirstRun = useRef(true);
  const pathname = usePathname();

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const el = overlayRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.transition = "none";
    el.style.transform = "scaleY(1)";
    void el.offsetHeight;

    requestAnimationFrame(() => {
      el.style.transition = "transform 0.7s var(--ease-smooth)";
      el.style.transform = "scaleY(0)";
    });
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="fixed inset-0 z-[80] bg-accent pointer-events-none"
      style={{ transform: "scaleY(0)", transformOrigin: "bottom" }}
    />
  );
}
