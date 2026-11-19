import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { CountUp } from "@/components/common/count-up";
import { Icons } from "@/components/common/icons";
import { SectionHeading } from "@/components/common/section-heading";
import { TechMarquee } from "@/components/common/tech-marquee";
import { TerminalWindow } from "@/components/common/terminal-window";
import { Typewriter } from "@/components/common/typewriter";
import Timeline from "@/components/experience/timeline";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects, Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.png";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description:
    "Seif Eddine BEN AICHA - Full-Stack Developer with 5 years of experience in React.js, Node.js, TypeScript, and Next.js. Explore my projects, experience, and skills.",
  alternates: {
    canonical: siteConfig.url,
  },
};

// --- Stats derived from config so they stay in sync with the content ---
const firstStart = Math.min(
  ...experiences.map((e) => new Date(e.startDate).getTime())
);
const yearsOfExperience = Math.floor(
  (Date.now() - firstStart) / (365.25 * 24 * 3600 * 1000)
);
const allAchievements = experiences.flatMap((e) => e.achievements);
const percentFor = (keyword: RegExp, fallback: number) => {
  const line = allAchievements.find((a) => keyword.test(a));
  const match = line?.match(/(\d+)%/);
  return match ? Number(match[1]) : fallback;
};

const stats = [
  { value: yearsOfExperience, suffix: "+", label: "years shipping" },
  { value: Projects.length, suffix: "", label: "projects delivered" },
  { value: percentFor(/load time/i, 30), suffix: "%", label: "faster load times" },
  { value: percentFor(/deployment/i, 40), suffix: "%", label: "faster deployments" },
];

const orbitBadges = [
  { Icon: Icons.react, className: "left-[-6%] top-[14%]", delay: "0s" },
  { Icon: Icons.nextjs, className: "right-[-4%] top-[8%]", delay: "1.2s" },
  { Icon: Icons.solidity, className: "right-[-10%] top-[52%]", delay: "0.6s" },
  { Icon: Icons.nodejs, className: "left-[-12%] bottom-[18%]", delay: "1.8s" },
  { Icon: Icons.typescript, className: "right-[10%] bottom-[-4%]", delay: "2.4s" },
];

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Full-Stack Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* ---------- HERO ---------- */}
      <section className="grid min-h-[calc(100vh-4rem)] items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div className="order-2 lg:order-1">
          <AnimatedText>
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-success" />
              Open to new opportunities
            </span>
          </AnimatedText>

          <p className="mt-8 font-mono text-sm text-muted-foreground">
            <span className="text-primary">seif@dev</span>
            <span>:~$ </span>
            <Typewriter text="whoami" delay={500} speed={90} />
          </p>

          <AnimatedText
            as="h1"
            delay={0.9}
            className="mt-3 font-heading text-5xl leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl"
          >
            Seif Eddine
            <br />
            <span className="text-gradient">Ben Aicha</span>
          </AnimatedText>

          <AnimatedText
            delay={1.1}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm"
          >
            <span className="text-foreground">Full-Stack Developer</span>
            <span className="text-primary">/</span>
            <span className="text-muted-foreground">Web3</span>
            <span className="text-primary">/</span>
            <span className="text-muted-foreground">DevOps-minded</span>
          </AnimatedText>

          <AnimatedText
            as="p"
            delay={1.25}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I design and ship scalable, high-performance products end to end —
            from React &amp; Next.js interfaces to Node.js APIs, Solidity smart
            contracts and the CI/CD pipelines that deliver them.
          </AnimatedText>

          <AnimatedText delay={1.4} className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className={cn(buttonVariants({ size: "lg" }), "group")}
            >
              Explore my work
              <Icons.arrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resume"
              target="_blank"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              aria-label="View resume"
            >
              <Icons.post className="mr-2 h-4 w-4" /> Resume
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
              aria-label="Contact Seif Eddine BEN AICHA"
            >
              <Icons.contact className="mr-2 h-4 w-4" /> Contact
            </Link>
          </AnimatedText>
        </div>

        {/* Portrait with rotating ring + orbiting tech */}
        <AnimatedSection
          delay={0.3}
          className="order-1 mx-auto w-[72%] max-w-[380px] lg:order-2 lg:w-full"
        >
          <div className="relative aspect-square">
            <div className="absolute inset-[-10%] rounded-full bg-primary/20 blur-3xl" />
            <div className="conic-ring absolute inset-0 rounded-full p-[2px] opacity-90" />
            <div className="absolute inset-[3px] overflow-hidden rounded-full bg-background">
              <Image
                src={profileImg}
                alt="Seif Eddine BEN AICHA - Full-Stack Developer"
                fill
                sizes="(max-width: 1024px) 72vw, 380px"
                className="object-cover"
                priority
              />
            </div>
            {orbitBadges.map(({ Icon, className, delay }, i) => (
              <div
                key={i}
                className={cn(
                  "glass absolute grid h-12 w-12 animate-float place-items-center rounded-xl text-foreground shadow-glow-sm sm:h-14 sm:w-14",
                  className
                )}
                style={{ animationDelay: delay }}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ---------- STATS ---------- */}
      <AnimatedSection className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-background/80 p-6 backdrop-blur">
            <CountUp
              value={s.value}
              suffix={s.suffix}
              className="font-heading text-4xl text-foreground md:text-5xl"
            />
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </AnimatedSection>

      {/* ---------- STACK MARQUEE ---------- */}
      <div className="-mx-8 mt-16">
        <TechMarquee />
      </div>

      {/* ---------- ABOUT / PROFILE.JSON ---------- */}
      <AnimatedSection className="mt-28 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs text-primary">{"// about_me"}</p>
          <h2 className="mt-3 font-heading text-3xl tracking-tight md:text-5xl">
            Engineering products,
            <br />
            <span className="text-gradient">not just features.</span>
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            {yearsOfExperience}+ years building platforms for healthcare, fintech, sports and
            blockchain. I care about performance budgets, secure APIs and
            clean, typed codebases that teams can grow with.
          </p>
        </div>
        <TerminalWindow title="~/profile.json">
          <pre className="overflow-x-auto text-[13px] leading-relaxed">
            <code>
              <span className="text-muted-foreground">{"{"}</span>
              {"\n  "}
              <span className="text-primary">&quot;name&quot;</span>:{" "}
              <span className="text-success">&quot;Seif Eddine Ben Aicha&quot;</span>,
              {"\n  "}
              <span className="text-primary">&quot;role&quot;</span>:{" "}
              <span className="text-success">&quot;Full-Stack Developer&quot;</span>,
              {"\n  "}
              <span className="text-primary">&quot;location&quot;</span>:{" "}
              <span className="text-success">&quot;Herzogenaurach, Germany&quot;</span>,
              {"\n  "}
              <span className="text-primary">&quot;experience&quot;</span>:{" "}
              <span className="text-secondary">{yearsOfExperience}</span>,
              {"\n  "}
              <span className="text-primary">&quot;stack&quot;</span>: [
              <span className="text-success">&quot;React&quot;</span>,{" "}
              <span className="text-success">&quot;Next.js&quot;</span>,{" "}
              <span className="text-success">&quot;Node.js&quot;</span>,{" "}
              <span className="text-success">&quot;TypeScript&quot;</span>,{" "}
              <span className="text-success">&quot;Solidity&quot;</span>],
              {"\n  "}
              <span className="text-primary">&quot;focus&quot;</span>: [
              <span className="text-success">&quot;performance&quot;</span>,{" "}
              <span className="text-success">&quot;security&quot;</span>,{" "}
              <span className="text-success">&quot;DX&quot;</span>],
              {"\n  "}
              <span className="text-primary">&quot;available&quot;</span>:{" "}
              <span className="text-secondary">true</span>
              {"\n"}
              <span className="text-muted-foreground">{"}"}</span>
            </code>
          </pre>
        </TerminalWindow>
      </AnimatedSection>

      {/* ---------- PROJECTS ---------- */}
      <section id="projects" className="mt-32">
        <SectionHeading
          label="featured_projects"
          title={pagesConfig.projects.title}
          description={pagesConfig.projects.description}
          href="/projects"
        />
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={0.08 * index}
              className="h-full min-w-0"
            >
              <ProjectCard project={project} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ---------- EXPERIENCE ---------- */}
      <section id="experience" className="mt-32">
        <SectionHeading
          label="git log --career"
          title={pagesConfig.experience.title}
          description={pagesConfig.experience.description}
          href="/experience"
        />
        <Timeline experiences={experiences.slice(0, 3)} />
      </section>

      {/* ---------- SKILLS ---------- */}
      <section id="skills" className="mt-32">
        <SectionHeading
          label="tech_stack"
          title={pagesConfig.skills.title}
          description={pagesConfig.skills.description}
          href="/skills"
        />
        <SkillsCard skills={featuredSkills} />
      </section>

      {/* ---------- CTA ---------- */}
      <AnimatedSection className="mt-32">
        <div className="glass relative overflow-hidden rounded-2xl px-6 py-14 text-center md:py-20">
          <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
          <div className="absolute left-1/2 top-0 h-40 w-2/3 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <p className="font-mono text-xs text-primary">
              $ ./start-collaboration.sh
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl tracking-tight md:text-5xl">
              Have a product to build?
              <br />
              <span className="text-gradient">Let&apos;s ship it.</span>
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
                Get in touch <Icons.arrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                <Icons.github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
