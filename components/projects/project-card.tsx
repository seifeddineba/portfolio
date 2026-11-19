import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { ProjectInterface } from "@/config/projects";
import { formatYearRange } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectInterface;
  index?: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="bracket group flex h-full flex-col overflow-hidden rounded-xl border border-border/70 bg-card/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/60 bg-muted">
        <Image
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          src={project.firstScreen}
          alt={`${project.companyName} screenshot`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-80" />
        <span className="glass absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[10px] uppercase tracking-wider">
          {project.type === "Personal" ? (
            <Icons.userFill className="h-3 w-3" />
          ) : (
            <Icons.work className="h-3 w-3" />
          )}
          {project.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground">
          <span>
            {typeof index === "number" && (
              <span className="text-primary">
                [{String(index + 1).padStart(2, "0")}]{" "}
              </span>
            )}
            {project.category.join(" · ")}
          </span>
          <span>{formatYearRange(project.startDate, project.endDate)}</span>
        </div>

        <h3 className="mt-3 flex items-center justify-between font-heading text-2xl tracking-tight">
          {project.companyName}
          <Icons.arrowUpRight className="h-5 w-5 -translate-x-1 translate-y-1 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-primary group-hover:opacity-100" />
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded border border-border/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="rounded px-2 py-0.5 font-mono text-[10px] text-primary">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
