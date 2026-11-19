"use client";

import { animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function CountUp({ value, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const unsub = mv.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
    });
    const controls = animate(mv, value, {
      duration: reduced ? 0 : 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, mv, value, suffix]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
