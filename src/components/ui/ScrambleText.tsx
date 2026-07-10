"use client";

import { useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

type ScrambleTextProps = {
  text: string;
  className?: string;
};

/** Decode/scramble hover: text cycles through random characters and
 * resolves left-to-right into the real word, triggered by hovering the
 * nearest link/button ancestor. A distinct hover language from the color
 * and underline treatments used elsewhere. */
export function ScrambleText({ text, className = "" }: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const trigger = el.closest<HTMLElement>("a, button") ?? el;
    let interval: ReturnType<typeof setInterval> | null = null;

    function scramble() {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (interval) clearInterval(interval);
      let iteration = 0;
      interval = setInterval(() => {
        if (!el) return;
        el.textContent = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        iteration += 1 / 2;
        if (iteration >= text.length) {
          if (interval) clearInterval(interval);
          el.textContent = text;
        }
      }, 35);
    }

    trigger.addEventListener("mouseenter", scramble);
    return () => {
      trigger.removeEventListener("mouseenter", scramble);
      if (interval) clearInterval(interval);
    };
  }, [text]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
