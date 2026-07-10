"use client";

import { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

type MagneticLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function MagneticLink({ href, className = "", children }: MagneticLinkProps) {
  const ref = useMagnetic<HTMLAnchorElement>(0.3);
  return (
    <a ref={ref} href={href} className={className}>
      {children}
    </a>
  );
}
