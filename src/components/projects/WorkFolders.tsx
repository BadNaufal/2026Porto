import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/lib/case-studies";
import { ScrambleText } from "@/components/ui/ScrambleText";

type WorkFoldersProps = {
  items: CaseStudy[];
};

// Real manila folders come in 1/3-cut tabs — left, center, right — so the
// tab position cycles the same way across the grid.
const TAB_OFFSETS = ["left-[4%]", "left-[34%]", "left-[62%]"];

// Slightly darker than --paper so the folder back (and its tab) reads as a
// separate sheet behind the lighter front panel.
const FOLDER_BACK = "#e8e0cd";

export function WorkFolders({ items }: WorkFoldersProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
      {items.map((item, i) => {
        const accentColor = typeof item.accent === "string" ? item.accent : item.accent[0];
        return (
          <Link
            key={item.slug}
            href={`/works/${item.slug}/`}
            data-reveal
            style={{ "--accent": accentColor, "--reveal-delay": `${(i % 3) * 80}ms` } as React.CSSProperties}
            className="folder group block"
          >
            <div className="folder-body relative mt-8 aspect-[4/3]">
              {/* Tab — attached to the folder back, so it shares its color
                  and sits behind the paper and front panel. */}
              <span
                className={`absolute -top-8 ${TAB_OFFSETS[i % 3]} z-0 inline-flex items-center gap-2 rounded-t-lg px-4 pt-2 pb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-ink/70 whitespace-nowrap`}
                style={{ background: FOLDER_BACK }}
              >
                <span className="block w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
                {String(i + 1).padStart(2, "0")} · {item.category}
              </span>

              {/* Folder back */}
              <div className="absolute inset-0 z-0 rounded-xl" style={{ background: FOLDER_BACK }} />

              {/* The "document" inside — peeks out at rest, slides up out
                  of the folder on hover. */}
              <div className="folder-paper absolute inset-x-[8%] top-[6%] h-[64%] z-10 rounded-md overflow-hidden shadow-xl bg-ink-raised">
                {item.images.length > 0 ? (
                  <Image
                    src={`/images/case-studies/${item.images[0].file}`}
                    alt={item.images[0].alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex flex-wrap content-center items-center justify-center gap-2 p-4">
                    {item.brandPills?.map((pill) => (
                      <span
                        key={pill.name}
                        className="rounded-full px-3 py-1.5 text-xs font-bold text-white"
                        style={{ background: pill.color }}
                      >
                        {pill.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Folder front */}
              <div className="folder-front absolute inset-x-0 bottom-0 z-20 h-[54%] rounded-b-xl rounded-t-lg bg-paper text-ink p-5 flex flex-col justify-end gap-1.5 shadow-[0_-10px_16px_-12px_rgb(0_0_0/0.45)]">
                <h3 className="font-display font-black uppercase leading-none text-xl md:text-2xl transition-colors duration-300 group-hover:text-accent">
                  <ScrambleText text={item.project} />
                </h3>
                <p className="text-[13px] leading-snug text-ink/65 line-clamp-2">{item.blurb}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
