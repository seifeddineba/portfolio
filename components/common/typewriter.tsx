"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  caret?: boolean;
  onDone?: () => void;
}

/** Types `text` out character by character; shows it instantly with reduced motion. */
export function Typewriter({
  text,
  delay = 0,
  speed = 45,
  className,
  caret = true,
  onDone,
}: TypewriterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(
      () => {
        if (reduced) {
          setCount(text.length);
          onDone?.();
          return;
        }
        interval = setInterval(() => {
          i += 1;
          setCount(i);
          if (i >= text.length) {
            clearInterval(interval);
            onDone?.();
          }
        }, speed);
      },
      reduced ? 0 : delay
    );
    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delay, speed]);

  const done = count >= text.length;

  return (
    <span className={cn("whitespace-pre-wrap", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>{text.slice(0, count)}</span>
      {caret && !done && (
        <span
          aria-hidden
          className="ml-0.5 inline-block h-[1em] w-[0.5em] translate-y-[0.15em] bg-primary"
        />
      )}
    </span>
  );
}
