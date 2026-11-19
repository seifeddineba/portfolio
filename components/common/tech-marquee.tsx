import { skills } from "@/config/skills";

export function TechMarquee() {
  const row = [...skills, ...skills];
  return (
    <div className="group relative overflow-hidden border-y border-border/60 py-5 mask-fade-x">
      <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
        {row.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
            aria-hidden={i >= skills.length}
          >
            <skill.icon className="h-5 w-5" />
            <span className="whitespace-nowrap font-mono text-sm">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
