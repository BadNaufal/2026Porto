export function GlowLayer() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%), color-mix(in srgb, var(--accent) 30%, transparent), transparent 65%)",
      }}
    />
  );
}
