import Link from "next/link";

import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  href?: string;
  linkText?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  href,
  linkText = "view all",
}: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-3">
        <AnimatedText as="p" className="font-mono text-xs text-primary">
          {"// "}
          {label}
        </AnimatedText>
        <AnimatedText
          as="h2"
          delay={0.1}
          className="font-heading text-3xl tracking-tight md:text-5xl"
        >
          {title}
        </AnimatedText>
        {description && (
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-xl text-muted-foreground"
          >
            {description}
          </AnimatedText>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="group inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          {linkText}
          <Icons.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
