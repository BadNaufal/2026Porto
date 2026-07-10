"use client";

import { useEffect, useRef } from "react";

/**
 * Magnetic hover: the element leans toward the cursor while the pointer is
 * over it, then springs back to rest on leave. Applied to CTAs/pills to
 * make direct interaction feel tactile rather than flat.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function handleMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el!.style.transition = "transform 0.1s ease-out";
      el!.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    }

    function handleLeave() {
      el!.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
      el!.style.transform = "translate(0, 0)";
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}
