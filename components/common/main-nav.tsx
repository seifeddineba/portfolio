"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: { title: string; href: string; disabled?: boolean }[];
  children?: React.ReactNode;
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight",
        className
      )}
      aria-label="Home"
    >
      <span className="relative grid h-8 w-8 place-items-center rounded-lg border border-primary/40 bg-primary/10 text-primary shadow-glow-sm transition-transform duration-500 group-hover:rotate-90">
        <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-primary" />
      </span>
      <span>
        seif<span className="text-primary">.dev</span>
      </span>
    </Link>
  );
}

export function MainNav({ items, children }: MainNavProps) {
  const pathname = usePathname();
  const [menu, setMenu] = React.useState({ open: false, path: pathname });

  // Close the mobile menu whenever the route changes.
  const showMobileMenu = menu.open && menu.path === pathname;

  return (
    <div className="flex flex-1 items-center gap-8">
      <Logo />
      {items?.length ? (
        <nav className="hidden items-center gap-1 md:flex">
          {items.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "relative rounded-md px-3 py-2 font-mono text-[13px] transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="text-primary/70">~/</span>
                {item.title.toLowerCase()}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-[13px] h-px bg-primary shadow-[0_0_12px_hsl(var(--primary))]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      ) : null}
      <button
        className="ml-auto flex items-center gap-2 rounded-lg border border-border/60 px-3 py-1.5 font-mono text-xs md:hidden"
        onClick={() =>
          setMenu({ open: !showMobileMenu, path: pathname })
        }
        aria-expanded={showMobileMenu}
        aria-label="Toggle menu"
      >
        {showMobileMenu ? (
          <Icons.close className="h-4 w-4" />
        ) : (
          <Icons.menu className="h-4 w-4" />
        )}
        menu
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
