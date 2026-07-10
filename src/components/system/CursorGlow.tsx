"use client";

import { useEffect, useRef } from "react";

/**
 * Single global mousemove listener that finds the nearest ancestor marked
 * [data-glow] (ink-variant sections) and writes the cursor position as
 * section-local CSS vars, so each dark section's radial-gradient glow
 * tracks the cursor instead of the background staying flat.
 */
export function CursorGlow() {
  const frame = useRef<number | null>(null);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        const target = (e.target as HTMLElement | null)?.closest?.(
          "[data-glow]"
        ) as HTMLElement | null;
        if (!target) return;
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
        target.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
      });
    }

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return null;
}
