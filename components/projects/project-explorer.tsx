"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import ProjectCard from "@/components/projects/project-card";
import { Projects } from "@/config/projects";
import { cn } from "@/lib/utils";

const TYPES = ["All", "Professional", "Personal"] as const;

export function ProjectExplorer() {
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(Projects.flatMap((p) => p.category)))],
    []
  );

  const filtered = Projects.filter(
    (p) =>
      (type === "All" || p.type === type) &&
      (category === "All" || p.category.some((c) => c === category))
  );

  return (
    <div>
      <div className="glass mb-8 flex flex-col gap-4 rounded-xl p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-xs text-muted-foreground">
            --type
          </span>
          {TYPES.map((t) => (
            <FilterPill key={t} active={type === t} onClick={() => setType(t)}>
              {t}
            </FilterPill>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-xs text-muted-foreground">
            --tag
          </span>
          {categories.map((c) => (
            <FilterPill
              key={c}
              active={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </FilterPill>
          ))}
        </div>
      </div>

      <p className="mb-4 font-mono text-xs text-muted-foreground">
        <span className="text-primary">❯</span> {filtered.length} result
        {filtered.length === 1 ? "" : "s"}
      </p>

      <motion.div
        layout
        className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="h-full min-w-0"
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-md border px-2.5 py-1 font-mono text-xs transition-colors",
        active
          ? "border-primary/50 bg-primary/10 text-primary"
          : "border-border/70 text-muted-foreground hover:border-primary/30 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}
