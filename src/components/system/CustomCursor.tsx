"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR = "a, button, [data-cursor-hover]";

/**
 * Two-part cursor (tight dot + lagging ring) that scales up over anything
 * clickable, so hovering itself becomes an invitation to keep exploring.
 * Only activates on fine-pointer (mouse) devices — touch is untouched.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.documentElement.classList.add("custom-cursor-active");

    function onMove(e: MouseEvent) {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    }

    function onOver(e: MouseEvent) {
      const target = (e.target as HTMLElement | null)?.closest?.(HOVER_SELECTOR);
      if (target && ringRef.current) {
        ringRef.current.classList.add("is-hovering");
      }
    }

    function onOut(e: MouseEvent) {
      const target = (e.target as HTMLElement | null)?.closest?.(HOVER_SELECTOR);
      if (target && ringRef.current) {
        ringRef.current.classList.remove("is-hovering");
      }
    }

    function tick() {
      ringPos.current.x += (targetPos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (targetPos.current.y - ringPos.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      frame.current = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    frame.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
