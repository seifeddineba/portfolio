interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="pb-10 pt-12 md:pt-16">
      <p className="mb-4 font-mono text-xs text-muted-foreground">
        <span className="text-primary">seif@dev</span>:
        <span className="text-secondary">~/{title.toLowerCase()}</span>$ ls -la
      </p>
      <h1 className="font-heading text-4xl tracking-tight md:text-6xl">
        <span className="text-gradient">{title}</span>
        <span className="ml-1 inline-block h-[0.8em] w-[0.08em] animate-caret-blink bg-primary align-baseline" />
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        {description}
      </p>
      <div className="hairline mt-8" />
    </div>
  );
}
