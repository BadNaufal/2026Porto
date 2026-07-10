"use client";

import { useActiveInView } from "@/hooks/useActiveInView";

export function TimelineActivator() {
  useActiveInView({
    selector: "[data-timeline-item]",
    activeClass: "is-active",
  });
  return null;
}
