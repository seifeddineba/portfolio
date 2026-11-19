import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  title?: string;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}

export function TerminalWindow({
  title = "seif@dev: ~",
  className,
  bodyClassName,
  children,
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "glass overflow-hidden rounded-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border/60 bg-background/30 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate font-mono text-[11px] text-muted-foreground">
          {title}
        </span>
      </div>
      <div className={cn("p-5 font-mono text-sm sm:p-6", bodyClassName)}>
        {children}
      </div>
    </div>
  );
}
