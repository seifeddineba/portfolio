"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed decorative layer: engineering grid, ambient gradient blobs,
 * and a soft spotlight that follows the cursor.
 */
export function BackgroundFx() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ ["--mx" as string]: "50vw", ["--my" as string]: "20vh" }}
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute top-[40%] -right-40 h-[420px] w-[420px] rounded-full bg-secondary/10 blur-[120px]" />
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), hsl(var(--glow)), transparent 60%)",
        }}
      />
    </div>
  );
}
