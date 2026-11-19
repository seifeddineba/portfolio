import { AnimatedSection } from "@/components/common/animated-section";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, i) => (
        <AnimatedSection
          key={skill.name}
          delay={Math.min(i, 8) * 0.04}
          className="h-full"
        >
          <div className="bracket group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/70 bg-card/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-lg border border-border/70 bg-background/60 transition-colors group-hover:border-primary/40 group-hover:text-primary">
                <skill.icon className="h-6 w-6" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-6 font-heading text-lg tracking-tight">
              {skill.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {skill.description}
            </p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
