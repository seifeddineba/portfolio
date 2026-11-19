import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { ExperienceInterface } from "@/config/experience";
import { formatYearRange, shortHash } from "@/lib/utils";

interface TimelineProps {
  experiences: ExperienceInterface[];
}

const endTime = (e: ExperienceInterface) =>
  e.endDate === "Present" ? Date.now() : new Date(e.endDate).getTime();

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const sorted = [...experiences].sort((a, b) => endTime(b) - endTime(a));

  return (
    <ol className="relative">
      {/* rail */}
      <span
        aria-hidden
        className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-primary via-secondary/60 to-transparent"
      />
      {sorted.map((exp, i) => (
        <AnimatedSection
          key={exp.id}
          delay={0.06 * i}
          className="relative pb-10 pl-10 last:pb-0"
        >
          <li className="list-none">
            {/* node */}
            <span
              aria-hidden
              className="absolute left-0 top-6 grid h-6 w-6 place-items-center rounded-full border border-primary/50 bg-background shadow-glow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>

            <Link
              href={`/experience/${exp.id}`}
              className="bracket group block rounded-xl border border-border/70 bg-card/60 p-5 backdrop-blur transition-all hover:border-primary/40 hover:shadow-glow sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-muted-foreground">
                <span className="text-secondary">commit {shortHash(exp.id)}</span>
                <span>·</span>
                <span>{formatYearRange(exp.startDate, exp.endDate)}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Icons.mapPin className="h-3 w-3" />
                  {exp.location}
                </span>
              </div>

              <div className="mt-4 flex items-start gap-4">
                {exp.logo && (
                  <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-lg border border-border/70 bg-white p-1.5">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="flex items-center gap-2 font-heading text-xl tracking-tight sm:text-2xl">
                    {exp.position}
                    <Icons.arrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:text-primary group-hover:opacity-100" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    @ <span className="text-foreground">{exp.company}</span>
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-1.5 font-mono text-[12.5px] leading-relaxed">
                {exp.achievements.slice(0, 2).map((a, idx) => (
                  <li key={idx} className="flex gap-2 text-muted-foreground">
                    <span className="select-none text-success">+</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.skills.slice(0, 6).map((s, idx) => (
                  <span
                    key={`${s}-${idx}`}
                    className="rounded border border-border/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
                {exp.skills.length > 6 && (
                  <span className="px-1 py-0.5 font-mono text-[10px] text-primary">
                    +{exp.skills.length - 6} more
                  </span>
                )}
              </div>
            </Link>
          </li>
        </AnimatedSection>
      ))}
    </ol>
  );
};

export default Timeline;
