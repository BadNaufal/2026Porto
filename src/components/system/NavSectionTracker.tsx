"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Imperatively toggles `.is-active` on whichever nav link matches the
 * section currently centered in the viewport. Kept separate from Nav (a
 * server component) rather than making Nav client-only just for this.
 *
 * Mounted once in the root layout, so — same lesson as the reveal
 * controller — it must re-scan on pathname change or it'll observe stale
 * DOM nodes from whatever page was first loaded.
 */
export function NavSectionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section][id]")
    );
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-link"));
    if (sections.length === 0 || navLinks.length === 0) return;

    function setActive(id: string | null) {
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => {
      observer.disconnect();
      setActive(null);
    };
  }, [pathname]);

  return null;
}
