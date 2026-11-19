import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateFromObj(input: Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** "2024 — 2026" / "2024 — Present" */
export function formatYearRange(start: Date, end: Date | "Present"): string {
  const s = new Date(start).getFullYear();
  if (end === "Present") return `${s} — Present`;
  const e = new Date(end).getFullYear();
  return s === e ? `${s}` : `${s} — ${e}`;
}

/** "Feb 2024" */
export function formatMonthYear(input: Date): string {
  return new Date(input).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

/** Deterministic short git-style hash for an id, e.g. "a3f9c21". */
export function shortHash(input: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, "0").slice(0, 7);
}
