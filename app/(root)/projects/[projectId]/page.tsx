import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { TerminalWindow } from "@/components/common/terminal-window";
import ProjectDescription from "@/components/projects/project-description";
import { buttonVariants } from "@/components/ui/button";
import Chip from "@/components/ui/chip";
import { Projects } from "@/config/projects";
import { cn, formatMonthYear, shortHash } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export function generateStaticParams() {
  return Projects.map((project) => ({
    projectId: project.id,
  }));
}

export default async function Project({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const index = Projects.findIndex((val) => val.id === projectId);
  const project = Projects[index];
  if (!project) {
    redirect("/projects");
  }
  const next = Projects[(index + 1) % Projects.length];

  const spec: [string, React.ReactNode][] = [
    ["type", project.type],
    [
      "timeline",
      `${formatMonthYear(project.startDate)} → ${formatMonthYear(project.endDate)}`,
    ],
    ["category", project.category.join(", ")],
    ["commit", shortHash(project.id)],
  ];

  return (
    <ClientPageWrapper>
      <article className="py-10 lg:py-14">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary"
        >
          <Icons.chevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          cd ../projects
        </Link>

        {/* Header */}
        <header className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <p className="font-mono text-xs text-primary">
              {"// "}project/{project.id}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-xl border border-border/70 bg-white p-2">
                <Image
                  src={project.companyLogoImg}
                  alt={`${project.companyName} logo`}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
              <h1 className="font-heading text-4xl tracking-tight md:text-6xl">
                <span className="text-gradient">{project.companyName}</span>
              </h1>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.websiteLink && (
                <Link
                  href={project.websiteLink}
                  target="_blank"
                  className={cn(buttonVariants())}
                >
                  Live site <Icons.arrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              )}
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  <Icons.gitHub className="mr-2 h-4 w-4" /> Source
                </Link>
              )}
            </div>
          </div>

          <TerminalWindow title="spec.yml" bodyClassName="text-[13px]">
            <dl className="space-y-2.5">
              {spec.map(([k, v]) => (
                <div key={k} className="flex gap-3">
                  <dt className="w-20 shrink-0 text-primary">{k}:</dt>
                  <dd className="text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mb-2 mt-5 text-primary">stack:</p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((t) => (
                <Chip key={t} content={t} />
              ))}
            </div>
          </TerminalWindow>
        </header>

        {project.firstScreen && (
          <AnimatedSection className="mt-14">
            <div className="glass overflow-hidden rounded-xl p-2 shadow-glow">
              <Image
                src={project.firstScreen}
                alt={`${project.companyName} preview`}
                width={1600}
                height={900}
                className="w-full rounded-lg"
                priority
              />
            </div>
          </AnimatedSection>
        )}

        {/* Overview */}
        <section className="mt-20 grid gap-8 lg:grid-cols-[200px_1fr]">
          <p className="font-mono text-xs text-primary">{"// overview"}</p>
          <div className="max-w-3xl text-base leading-relaxed text-muted-foreground [&_li]:mb-2 [&_li]:marker:text-primary [&_p]:text-foreground/90">
            <ProjectDescription
              paragraphs={project.descriptionDetails.paragraphs}
              bullets={project.descriptionDetails.bullets}
            />
          </div>
        </section>

        {/* Screens */}
        <section className="mt-20 grid gap-8 lg:grid-cols-[200px_1fr]">
          <p className="font-mono text-xs text-primary">{"// screens"}</p>
          <div className="space-y-16">
            {project.pagesInfoArr.map((page, ind) => (
              <AnimatedSection key={ind}>
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(ind + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-2xl tracking-tight">
                    {page.title}
                  </h3>
                </div>
                {page.description && (
                  <p className="mb-6 max-w-2xl text-muted-foreground">
                    {page.description}
                  </p>
                )}
                <div className="space-y-6">
                  {page.imgArr.map((img, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-xl border border-border/70 bg-muted"
                    >
                      <Image
                        src={img}
                        alt={`${project.companyName} — ${page.title} ${i + 1}`}
                        width={1440}
                        height={810}
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Next project */}
        <div className="hairline mt-24" />
        <div className="flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
          <Link
            href="/projects"
            className={cn(buttonVariants({ variant: "ghost" }), "font-mono")}
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            all projects
          </Link>
          {next && next.id !== project.id && (
            <Link href={`/projects/${next.id}`} className="group text-right">
              <span className="block font-mono text-xs text-muted-foreground">
                next project →
              </span>
              <span className="font-heading text-2xl tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                {next.companyName}
              </span>
            </Link>
          )}
        </div>
      </article>
    </ClientPageWrapper>
  );
}
