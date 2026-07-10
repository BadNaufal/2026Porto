"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Physics-based smooth scroll (the "liquid" scroll feel) — Lenis smooths
 * wheel/touch input while keeping native window.scrollY updated each frame,
 * so the existing IntersectionObserver-driven reveal/theme logic elsewhere
 * keeps working unchanged.
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
