"use client";

import { ReactNode } from "react";
import { useParallax } from "@/hooks/useParallax";

type ParallaxLayerProps = {
  speed?: number;
  className?: string;
  children: ReactNode;
};

export function ParallaxLayer({ speed = 0.15, className = "", children }: ParallaxLayerProps) {
  const ref = useParallax<HTMLDivElement>(speed);
  return (
    <div ref={ref} className={className} aria-hidden="true">
      {children}
    </div>
  );
}
