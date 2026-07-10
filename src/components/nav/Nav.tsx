import Link from "next/link";
import { Mark } from "./Mark";
import { navLinks, siteConfig } from "@/lib/site-config";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { ScrambleText } from "@/components/ui/ScrambleText";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className="flex items-center justify-between bg-ink/80 backdrop-blur-md border-b border-line"
        style={{ paddingLeft: "var(--frame-inset)", paddingRight: "var(--frame-inset)" }}
      >
        <div className="py-4">
          <Link href="/" aria-label={`${siteConfig.name} — home`}>
            <Mark />
          </Link>
        </div>

        <nav className="hidden sm:flex items-center gap-8 py-4" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-body text-[13px] uppercase tracking-[0.1em] text-fg-soft hover:text-fg transition-colors duration-300"
            >
              <ScrambleText text={link.label} />
            </a>
          ))}
        </nav>

        <MagneticLink
          href={`mailto:${siteConfig.email}`}
          className="bg-accent text-accent-ink py-2.5 px-5 rounded-full text-[13px] font-bold uppercase tracking-[0.05em] hover:brightness-110 transition-all duration-300"
        >
          Get in touch
        </MagneticLink>
      </div>
    </header>
  );
}
