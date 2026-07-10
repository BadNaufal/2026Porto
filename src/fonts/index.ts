import { Archivo, Inter } from "next/font/google";

// Archivo at max weight for a poster-scale, high-impact display face — the
// backbone of the "stand out" direction. Inter carries body copy so the
// heavy display weight stays the loud voice on the page, not the only one.
// Both self-host at build time via next/font, so they work fully offline
// under `output: "export"`.

export const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  display: "swap",
});

export const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
