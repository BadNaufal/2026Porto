"use client";

import dynamic from "next/dynamic";

// Three.js touches the canvas/WebGL context immediately on mount, so it's
// loaded client-only — ssr:false keeps it out of the static export's
// prerendered HTML entirely rather than risking a build-time crash.
const Scene3D = dynamic(() => import("./Scene3D").then((m) => m.Scene3D), {
  ssr: false,
});

export function Scene3DClient() {
  return <Scene3D />;
}
