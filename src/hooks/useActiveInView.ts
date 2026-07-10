"use client";

import { useEffect } from "react";

type UseActiveInViewOptions = {
  selector: string;
  activeClass: string;
  band?: string;
};

/**
 * Toggles `activeClass` on whichever element(s) matching `selector` cross a
 * thin horizontal band at the vertical center of the viewport.
 */
export function useActiveInView({
  selector,
  activeClass,
  band = "-45% 0px -45% 0px",
}: UseActiveInViewOptions) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(activeClass, entry.isIntersecting);
        });
      },
      { rootMargin: band, threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, activeClass, band]);
}
