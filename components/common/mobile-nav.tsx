import Link from "next/link";
import * as React from "react";
import { createPortal } from "react-dom";

import { openCommandPalette } from "@/components/common/command-palette";
import { Icons } from "@/components/common/icons";
import { useLockBody } from "@/hooks/use-lock-body";

interface MobileNavProps {
  items: { title: string; href: string; disabled?: boolean }[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();

  // Portal to <body>: the header's backdrop-filter would otherwise become
  // the containing block for this fixed overlay.
  return createPortal(
    <div className="fixed inset-x-0 bottom-0 top-16 z-[45] bg-background/95 p-4 backdrop-blur-xl animate-in fade-in-0 slide-in-from-top-4 md:hidden">
      <div className="glass rounded-xl p-4">
        <p className="mb-3 font-mono text-[11px] text-muted-foreground">
          $ ls ~/
        </p>
        <nav className="grid gap-1">
          {items.map((item, index) => (
            <Link
              key={item.href}
              href={item.disabled ? "#" : item.href}
              className="flex items-center justify-between rounded-lg px-3 py-3 font-mono text-base transition-colors hover:bg-primary/10"
            >
              <span>
                <span className="mr-3 text-xs text-muted-foreground">
                  0{index + 1}
                </span>
                <span className="text-primary">~/</span>
                {item.title.toLowerCase()}
              </span>
              <Icons.chevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
          <button
            type="button"
            onClick={openCommandPalette}
            className="mt-2 flex items-center gap-2 rounded-lg border border-border/60 px-3 py-3 font-mono text-sm text-muted-foreground"
          >
            <Icons.search className="h-4 w-4" /> search everything…
          </button>
        </nav>
        {children ? <div className="pt-2">{children}</div> : null}
      </div>
    </div>,
    document.body
  );
}
