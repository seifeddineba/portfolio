"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

type Item = {
  group: string;
  label: string;
  hint?: string;
  href: string;
  external?: boolean;
  icon: React.ComponentType<{ className?: string }>;
};

const ITEMS: Item[] = [
  { group: "Navigate", label: "Home", hint: "~/", href: "/", icon: Icons.terminal },
  { group: "Navigate", label: "Projects", hint: "~/projects", href: "/projects", icon: Icons.gitRepoIcon },
  { group: "Navigate", label: "Experience", hint: "~/experience", href: "/experience", icon: Icons.work },
  { group: "Navigate", label: "Skills", hint: "~/skills", href: "/skills", icon: Icons.ai },
  { group: "Navigate", label: "Contact", hint: "~/contact", href: "/contact", icon: Icons.contact },
  { group: "Navigate", label: "Resume", hint: "resume.pdf", href: "/resume", icon: Icons.post, external: true },
  ...Projects.map((p) => ({
    group: "Projects",
    label: p.companyName,
    hint: p.category.join(" · "),
    href: `/projects/${p.id}`,
    icon: Icons.gitBranch,
  })),
  ...SocialLinks.map((s) => ({
    group: "Links",
    label: s.name,
    hint: s.username,
    href: s.link,
    external: true,
    icon: s.icon,
  })),
  {
    group: "Links",
    label: "Source code of this site",
    hint: "github",
    href: siteConfig.links.templateRepo,
    external: true,
    icon: Icons.github,
  },
];

const OPEN_EVENT = "open-command-palette";

export function openCommandPalette() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function CommandPaletteTrigger({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openCommandPalette}
      className={cn(
        "group inline-flex h-9 items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-3 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground",
        className
      )}
      aria-label="Open command palette"
    >
      <Icons.search className="h-3.5 w-3.5" />
      <span className="hidden lg:inline">Search</span>
      <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] leading-none">
        ⌘K
      </kbd>
    </button>
  );
}

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const listRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  const onOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setQuery("");
      setActive(0);
    }
  };

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ITEMS;
    return ITEMS.filter((i) =>
      `${i.label} ${i.hint ?? ""} ${i.group}`.toLowerCase().includes(q)
    );
  }, [query]);

  React.useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const run = (item: Item) => {
    onOpenChange(false);
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.href);
    }
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      run(results[active]);
    }
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="glass fixed left-1/2 top-[14vh] z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 overflow-hidden rounded-xl shadow-glow data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
          aria-describedby={undefined}
        >
          <DialogPrimitive.Title className="sr-only">
            Command palette
          </DialogPrimitive.Title>
          <div className="flex items-center gap-3 border-b border-border/60 px-4">
            <span className="font-mono text-sm text-primary">❯</span>
            <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0);
              }}
              onKeyDown={onInputKey}
              placeholder="Type a command or search…"
              className="h-14 flex-1 bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              ESC
            </kbd>
          </div>
          <div ref={listRef} className="max-h-[50vh] overflow-y-auto p-2">
            {results.length === 0 && (
              <p className="px-3 py-8 text-center font-mono text-sm text-muted-foreground">
                command not found: {query}
              </p>
            )}
            {results.map((item, i) => {
              const showHeader = i === 0 || results[i - 1].group !== item.group;
              return (
                <React.Fragment key={`${item.group}-${item.label}`}>
                  {showHeader && (
                    <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {item.group}
                    </p>
                  )}
                  <button
                    type="button"
                    data-index={i}
                    onMouseMove={() => setActive(i)}
                    onClick={() => run(item)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                      i === active
                        ? "bg-primary/10 text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "h-4 w-4 shrink-0",
                        i === active && "text-primary"
                      )}
                    />
                    <span className="flex-1 truncate">{item.label}</span>
                    {item.hint && (
                      <span className="hidden max-w-[45%] truncate font-mono text-[11px] text-muted-foreground sm:inline">
                        {item.hint}
                      </span>
                    )}
                    {i === active &&
                      (item.external ? (
                        <Icons.arrowUpRight className="h-3.5 w-3.5 text-primary" />
                      ) : (
                        <Icons.enter className="h-3.5 w-3.5 text-primary" />
                      ))}
                  </button>
                </React.Fragment>
              );
            })}
          </div>
          <div className="flex items-center justify-between border-t border-border/60 px-4 py-2 font-mono text-[10px] text-muted-foreground">
            <span>↑↓ navigate · ↵ open</span>
            <span>seif.dev</span>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
