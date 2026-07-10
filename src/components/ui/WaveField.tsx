type WaveLayer = {
  path: string;
  viewBoxHeight: number;
  height: number;
  opacity: number;
  duration: string;
  reverse?: boolean;
};

// Each path is one seamless period at width 720 — two copies are placed
// side by side and looped via the existing marquee-scroll keyframe
// (translateX 0 -> -50%), so at -50% (= one tile width) the loop is
// invisible. Three layers at different heights/speeds/opacities give a
// real parallax "water" feel instead of one flat moving strip.
const LAYERS: WaveLayer[] = [
  {
    path: "M0,45 C120,10 240,80 360,45 C480,10 600,80 720,45 L720,90 L0,90 Z",
    viewBoxHeight: 90,
    height: 64,
    opacity: 0.12,
    duration: "11s",
  },
  {
    path: "M0,35 C150,60 210,10 360,35 C510,60 570,10 720,35 L720,70 L0,70 Z",
    viewBoxHeight: 70,
    height: 46,
    opacity: 0.18,
    duration: "7.5s",
    reverse: true,
  },
  {
    path: "M0,25 C100,45 260,5 360,25 C460,45 620,5 720,25 L720,50 L0,50 Z",
    viewBoxHeight: 50,
    height: 32,
    opacity: 0.26,
    duration: "5.5s",
  },
];

/** Layered, continuously drifting wave bands along the bottom edge of a
 * section — a literal "water" motion distinct from LiquidBlob's slow
 * single-shape morph elsewhere on the site. */
export function WaveField({ color = "var(--fg)" }: { color?: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 pointer-events-none" aria-hidden="true">
      {LAYERS.map((layer, i) => (
        <div key={i} className="absolute inset-x-0 bottom-0 overflow-hidden" style={{ height: layer.height }}>
          <div
            className="wave-track flex"
            style={{
              width: "max-content",
              animationDuration: layer.duration,
              animationDirection: layer.reverse ? "reverse" : "normal",
            }}
          >
            {[0, 1].map((j) => (
              <svg
                key={j}
                viewBox={`0 0 720 ${layer.viewBoxHeight}`}
                preserveAspectRatio="none"
                style={{ width: 720, height: layer.height, display: "block", flexShrink: 0 }}
              >
                <path d={layer.path} fill={color} opacity={layer.opacity} />
              </svg>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
