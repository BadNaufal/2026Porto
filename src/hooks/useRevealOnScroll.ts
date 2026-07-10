"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One-time scroll entrance reveal: every [data-reveal] / [data-reveal-scale]
 * / [data-section-transition] element gets `.is-visible` the first time it
 * crosses into the viewport, then is unobserved.
 *
 * This is mounted once in the root layout, which Next.js keeps alive across
 * client-side navigations — only route content swaps. Without re-running on
 * pathname change, elements from a freshly (re)mounted page would never get
 * observed and would stay stuck at opacity:0 forever (e.g. navigating to a
 * case study and back to "/"). `pathname` as a dependency forces a rescan
 * every time the route actually changes.
 */
export function useRevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal], [data-reveal-scale], [data-section-transition]"
      )
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}
