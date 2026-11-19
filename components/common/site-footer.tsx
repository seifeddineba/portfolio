import Link from "next/link";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn(
        "mt-24 border-t border-border/60 bg-background/40 backdrop-blur",
        className
      )}
    >
      <div className="container flex flex-col items-center justify-between gap-4 py-6 font-mono text-xs text-muted-foreground md:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span className="flex items-center gap-2 text-foreground">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-success" />
            available for work
          </span>
          <span className="hidden text-border md:inline">│</span>
          <span className="flex items-center gap-1.5">
            <Icons.mapPin className="h-3.5 w-3.5" /> Herzogenaurach, GE
          </span>
          <span className="hidden text-border md:inline">│</span>
          <span>
            © {new Date().getFullYear()} {siteConfig.authorName}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {SocialLinks.map((item) => (
            <CustomTooltip icon={item.icon} text={item.username} key={item.name}>
              <Link
                href={item.link}
                target="_blank"
                aria-label={item.name}
                className="grid h-9 w-9 place-items-center rounded-lg transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <item.icon className="h-4 w-4" />
              </Link>
            </CustomTooltip>
          ))}
        </div>
      </div>
    </footer>
  );
}
