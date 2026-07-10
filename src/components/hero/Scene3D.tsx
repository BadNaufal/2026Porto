"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Real Figma brand palette (5 official colors), confirmed via Figma's
// published brand assets.
const FIGMA_COLORS = {
  red: "#F24E1E",
  orange: "#FF7262",
  purple: "#A259FF",
  blue: "#1ABCFE",
  green: "#0ACF83",
};

function roundedRectPath(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** Draws a rounded, colored badge with centered bold monogram text onto an
 * offscreen canvas and returns it as a texture — avoids any network font
 * fetch (unlike drei's <Text>), so it stays fully self-contained under
 * `output: "export"`. */
function createMonogramTexture(text: string, textColor: string, bgColor: string) {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  roundedRectPath(ctx, 0, 0, size, size, 56);
  ctx.fillStyle = bgColor;
  ctx.fill();

  ctx.fillStyle = textColor;
  ctx.font = "700 118px system-ui, -apple-system, Segoe UI, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, size / 2, size / 2 + 8);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

/** Draws a stylized Figma mark — five shapes in Figma's real 5-color
 * palette, arranged as a compact cluster evoking the icon rather than
 * tracing the trademarked vector exactly (the recognizable part is the
 * color combination, not a pixel-for-pixel copy). */
function createFigmaTexture() {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  roundedRectPath(ctx, 0, 0, size, size, 56);
  ctx.fillStyle = "#FCFAF7";
  ctx.fill();

  const cx = size / 2;
  const top = 62;
  const u = 34;

  ctx.fillStyle = FIGMA_COLORS.purple;
  roundedRectPath(ctx, cx - u, top, u, u, 17);
  ctx.fill();

  ctx.fillStyle = FIGMA_COLORS.orange;
  ctx.beginPath();
  ctx.arc(cx + u / 2, top + u / 2, u / 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = FIGMA_COLORS.red;
  roundedRectPath(ctx, cx - u, top + u, u, u, 4);
  ctx.fill();

  ctx.fillStyle = FIGMA_COLORS.blue;
  ctx.beginPath();
  ctx.arc(cx + u / 2, top + u + u / 2, u / 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = FIGMA_COLORS.green;
  ctx.beginPath();
  ctx.arc(cx - u / 2, top + u * 2 + u / 2, u / 2, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

type AppBadgeProps = {
  texture: THREE.CanvasTexture;
  bgColor: string;
  orbitRadius: number;
  orbitSpeed: number;
  orbitAngle: number;
  yOffset: number;
};

function AppBadge({ texture, bgColor, orbitRadius, orbitSpeed, orbitAngle, yOffset }: AppBadgeProps) {
  const group = useRef<THREE.Group>(null);
  const t = useRef(orbitAngle);

  useFrame((_, delta) => {
    t.current += delta * orbitSpeed;
    const g = group.current;
    if (!g) return;
    g.position.x = Math.cos(t.current) * orbitRadius;
    g.position.z = Math.sin(t.current) * orbitRadius;
    g.position.y = yOffset + Math.sin(t.current * 1.4) * 0.2;
    g.rotation.y += delta * 0.55;
    g.rotation.x = Math.sin(t.current * 0.7) * 0.2;
  });

  const faceMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ map: texture, roughness: 0.5 }),
    [texture]
  );
  const sideMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: bgColor, roughness: 0.5 }),
    [bgColor]
  );
  const materials = useMemo(
    () => [sideMaterial, sideMaterial, sideMaterial, sideMaterial, faceMaterial, faceMaterial],
    [sideMaterial, faceMaterial]
  );

  return (
    <group ref={group}>
      <mesh material={materials}>
        <boxGeometry args={[1, 1, 0.1]} />
      </mesh>
    </group>
  );
}

function DesignToolCluster() {
  const outer = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const figmaTexture = useMemo(() => createFigmaTexture(), []);
  const aiTexture = useMemo(() => createMonogramTexture("Ai", "#1A0A00", "#FF9A00"), []);
  const psTexture = useMemo(() => createMonogramTexture("Ps", "#001E36", "#31A8FF"), []);
  const aeTexture = useMemo(() => createMonogramTexture("Ae", "#E4DCFF", "#00005B"), []);

  useFrame((state, delta) => {
    const g = outer.current;
    if (!g) return;
    pointer.current.x = THREE.MathUtils.lerp(pointer.current.x, state.pointer.x, 0.02);
    pointer.current.y = THREE.MathUtils.lerp(pointer.current.y, state.pointer.y, 0.02);
    g.rotation.y += delta * 0.06;
    g.rotation.x = pointer.current.y * 0.12;
    g.rotation.z = -pointer.current.x * 0.06;
  });

  // Orbit radii are kept well inside the camera's visible frustum at z=0
  // (roughly ±3.1 units with fov 50 / distance 7) after accounting for
  // badge size + bob amplitude, so nothing clips against the canvas edge
  // as it orbits.
  return (
    <group ref={outer}>
      <AppBadge texture={figmaTexture} bgColor="#FCFAF7" orbitRadius={1.35} orbitSpeed={0.16} orbitAngle={0} yOffset={0.5} />
      <AppBadge texture={aiTexture} bgColor="#FF9A00" orbitRadius={1.55} orbitSpeed={0.13} orbitAngle={1.6} yOffset={-0.45} />
      <AppBadge texture={psTexture} bgColor="#31A8FF" orbitRadius={1.45} orbitSpeed={0.15} orbitAngle={3.2} yOffset={0.35} />
      <AppBadge texture={aeTexture} bgColor="#00005B" orbitRadius={1.6} orbitSpeed={0.11} orbitAngle={4.8} yOffset={-0.5} />
    </group>
  );
}

export function Scene3D() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={80} color="#ffffff" />
      <pointLight position={[-5, -3, -5]} intensity={40} color="#ff4610" />
      <DesignToolCluster />
    </Canvas>
  );
}
