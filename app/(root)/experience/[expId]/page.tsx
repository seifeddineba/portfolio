import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { TerminalWindow } from "@/components/common/terminal-window";
import { buttonVariants } from "@/components/ui/button";
import Chip from "@/components/ui/chip";
import { experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";
import { cn, formatMonthYear, shortHash } from "@/lib/utils";

interface ExperienceDetailPageProps {
  params: Promise<{
    expId: string;
  }>;
}

export function generateStaticParams() {
  return experiences.map((experience) => ({
    expId: experience.id,
  }));
}

export async function generateMetadata({
  params,
}: ExperienceDetailPageProps): Promise<Metadata> {
  const { expId } = await params;
  const experience = experiences.find((c) => c.id === expId);

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  return {
    title: `${experience.position} at ${experience.company} | Experience`,
    description: `Detailed information about my role as ${experience.position} at ${experience.company}.`,
    alternates: {
      canonical: `${siteConfig.url}/experience/${expId}`,
    },
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { expId } = await params;
  const experience = experiences.find((c) => c.id === expId);

  if (!experience) {
    redirect("/experience");
  }

  const end =
    experience.endDate === "Present"
      ? "Present"
      : formatMonthYear(experience.endDate);
  const skills = Array.from(new Set(experience.skills));

  return (
    <ClientPageWrapper>
      <article className="py-10 lg:py-14">
        <Link
          href="/experience"
          className="group inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary"
        >
          <Icons.chevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          cd ../experience
        </Link>

        <header className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <p className="font-mono text-xs text-secondary">
              commit {shortHash(experience.id)}
            </p>
            <div className="mt-4 flex items-center gap-4">
              {experience.logo && (
                <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-xl border border-border/70 bg-white p-2">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
              <div>
                <h1 className="font-heading text-3xl tracking-tight md:text-5xl">
                  <span className="text-gradient">{experience.position}</span>
                </h1>
                <p className="mt-1 flex items-center gap-2 text-muted-foreground">
                  @ <span className="text-foreground">{experience.company}</span>
                  {experience.companyUrl && (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                      aria-label={`${experience.company} website`}
                    >
                      <Icons.externalLink className="h-4 w-4" />
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>

          <TerminalWindow title="role.yml" bodyClassName="text-[13px]">
            <dl className="space-y-2.5">
              {[
                ["company", experience.company],
                ["location", experience.location],
                ["from", formatMonthYear(experience.startDate)],
                ["to", end],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3">
                  <dt className="w-20 shrink-0 text-primary">{k}:</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </TerminalWindow>
        </header>

        <section className="mt-20 grid gap-8 lg:grid-cols-[200px_1fr]">
          <p className="font-mono text-xs text-primary">{"// responsibilities"}</p>
          <AnimatedSection>
            <ul className="max-w-3xl space-y-4">
              {experience.description.map((desc, idx) => (
                <li key={idx} className="flex gap-4 leading-relaxed">
                  <span className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[200px_1fr]">
          <p className="font-mono text-xs text-primary">{"// impact.diff"}</p>
          <AnimatedSection>
            <TerminalWindow title={`git show ${shortHash(experience.id)} --stat`}>
              <ul className="space-y-2 text-[13px] leading-relaxed">
                {experience.achievements.map((a, idx) => (
                  <li
                    key={idx}
                    className="-mx-2 flex gap-3 rounded bg-success/5 px-2 py-1"
                  >
                    <span className="select-none text-success">+</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </TerminalWindow>
          </AnimatedSection>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[200px_1fr]">
          <p className="font-mono text-xs text-primary">{"// stack"}</p>
          <AnimatedSection className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Chip key={s} content={s} />
            ))}
          </AnimatedSection>
        </section>

        <div className="hairline mt-24" />
        <div className="py-10">
          <Link
            href="/experience"
            className={cn(buttonVariants({ variant: "ghost" }), "font-mono")}
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            full career log
          </Link>
        </div>
      </article>
    </ClientPageWrapper>
  );
}
