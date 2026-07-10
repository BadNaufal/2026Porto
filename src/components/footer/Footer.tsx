import { Mark } from "@/components/nav/Mark";
import { siteConfig } from "@/lib/site-config";
import { Section } from "@/components/section/Section";

const contactLinks = [
  { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: siteConfig.phone, href: `tel:${siteConfig.phoneHref}` },
  { label: siteConfig.linkedinLabel, href: siteConfig.linkedin },
  { label: siteConfig.behanceLabel, href: siteConfig.behance },
];

export function Footer() {
  return (
    <Section id="contact" variant="ink">
      <footer>
        <div
          className="py-16 flex flex-col gap-12"
          style={{ paddingLeft: "var(--frame-inset)", paddingRight: "var(--frame-inset)" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 border-t-2 border-line pt-10">
            <div className="flex flex-col gap-3">
              <Mark />
              <p className="text-fg-soft max-w-sm">
                {siteConfig.location} — available for freelance &amp; full-time
                brand and creative roles.
              </p>
            </div>

            <ul className="flex flex-col gap-2 sm:items-end">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] font-bold hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[12px] text-fg-faint border-t border-line pt-6">
            Designed &amp; built with Claude Code.
          </p>
        </div>
      </footer>
    </Section>
  );
}
