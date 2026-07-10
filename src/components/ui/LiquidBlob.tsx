type LiquidBlobProps = {
  className?: string;
  color?: string;
  duration?: string;
};

const frames = [
  "M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20 Z",
  "M100,30 C150,25 175,70 170,110 C165,150 130,185 90,178 C50,171 15,140 25,95 C35,50 60,35 100,30 Z",
  "M105,15 C160,30 185,75 165,120 C150,160 100,190 60,170 C25,152 10,105 30,65 C48,28 70,8 105,15 Z",
  "M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20 Z",
];

/** Soft, slowly morphing organic shape — the "liquid" motion layer used as
 * an ambient background accent behind hero/section content. */
export function LiquidBlob({
  className = "",
  color = "var(--accent)",
  duration = "12s",
}: LiquidBlobProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path fill={color}>
        <animate
          attributeName="d"
          dur={duration}
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1"
          keyTimes="0; 0.33; 0.66; 1"
          values={frames.join(";\n")}
        />
      </path>
    </svg>
  );
}
