"use client";

import { useLayoutEffect, useRef, useState } from "react";

const STORAGE_KEY = "naufal-preloaded";

/**
 * First-visit-only loading intro: counts 0-100 with a spinning mark, then
 * wipes away into the hero. Gated by sessionStorage so it plays once per
 * browser tab session, not on every internal navigation back to "/".
 *
 * Uses useLayoutEffect (not useEffect) so repeat visits hide the overlay
 * before the browser ever paints it — no flash. The JSX itself is always
 * identical between server and client render to avoid a hydration mismatch;
 * the fade/hide is driven entirely through the ref's own style, not React
 * state, since it's a one-way handoff to an external (DOM) concern.
 */
export function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (alreadyShown || reduceMotion) {
      el.style.display = "none";
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "1");
    document.body.style.overflow = "hidden";

    let raf: number;
    const start = performance.now();
    const duration = 1600;

    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      setProgress(Math.round(t * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        document.body.style.overflow = "";
        el!.style.transition = "opacity 0.5s ease";
        el!.style.opacity = "0";
        el!.style.pointerEvents = "none";
        setTimeout(() => {
          el!.style.display = "none";
        }, 500);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center gap-6"
    >
      <span className="sunburst preloader-mark block w-12 h-12" />
      <p className="font-display font-black text-6xl text-fg tabular-nums">{progress}%</p>
    </div>
  );
}
