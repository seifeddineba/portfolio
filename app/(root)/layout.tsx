import { BackgroundFx } from "@/components/common/background-fx";
import {
  CommandPalette,
  CommandPaletteTrigger,
} from "@/components/common/command-palette";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <BackgroundFx />
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-3">
          <MainNav items={routesConfig.mainNav} />
          <div className="flex items-center gap-2">
            <CommandPaletteTrigger className="hidden md:inline-flex" />
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
      <CommandPalette />
    </div>
  );
}
