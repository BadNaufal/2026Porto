"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const roles = siteConfig.roles;

export function RoleRotator() {
  const [index, setIndex] = useState(0);
  const [animOut, setAnimOut] = useState(false);

  useEffect(() => {
    let outTimeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setAnimOut(true);
      outTimeout = setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setAnimOut(false);
      }, 450);
    }, 2400);
    return () => {
      clearInterval(interval);
      clearTimeout(outTimeout);
    };
  }, []);

  return (
    <span className="role-rotator inline-block align-top" data-anim={animOut ? "out" : "in"}>
      <span>{roles[index]}</span>
    </span>
  );
}
