import { ExperienceRole } from "@/lib/experience";

type ExperienceItemProps = {
  role: ExperienceRole;
  index: number;
};

export function ExperienceItem({ role, index }: ExperienceItemProps) {
  return (
    <div
      data-timeline-item
      data-index={index}
      data-reveal
      style={{ "--reveal-delay": `${Math.min(index, 4) * 80}ms` } as React.CSSProperties}
      className="timeline-item grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-8 py-8 border-t-2 border-white/10 transition-colors duration-300"
    >
      <p className="timeline-dates font-body font-bold text-[13px] uppercase tracking-[0.08em] text-fg-faint transition-colors duration-300">
        {role.start} — {role.end}
      </p>

      <div className="flex flex-col gap-3">
        <h3 className="timeline-title font-display font-black text-2xl sm:text-3xl text-fg-faint transition-colors duration-300">
          {role.title}
        </h3>
        <p className="timeline-company text-[13px] uppercase tracking-[0.06em] text-fg-faint font-bold transition-colors duration-300">
          {role.company}
        </p>
        <p className="max-w-xl text-fg-soft leading-relaxed">{role.description}</p>
      </div>
    </div>
  );
}
