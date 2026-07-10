type MarkProps = {
  className?: string;
};

export function Mark({ className = "" }: MarkProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="sunburst block w-4 h-4" aria-hidden="true" />
      <span className="font-display font-extrabold text-lg leading-none tracking-tight">
        NAUFAL<span className="text-accent">.</span>
      </span>
    </span>
  );
}
