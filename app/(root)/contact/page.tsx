import { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import { TerminalWindow } from "@/components/common/terminal-window";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";
import { SocialLinks } from "@/config/socials";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <TerminalWindow
          title="seif@dev: ~/contact — send-message"
          bodyClassName="font-sans"
        >
          <p className="mb-6 font-mono text-xs text-muted-foreground">
            <span className="text-primary">$</span> send-message --to seif
            --reply-within 24h
          </p>
          <ContactForm />
        </TerminalWindow>

        <div className="space-y-4">
          <div className="glass rounded-xl p-6">
            <p className="font-mono text-xs text-primary">{"// status"}</p>
            <p className="mt-3 flex items-center gap-2 font-heading text-xl">
              <span className="h-2.5 w-2.5 animate-pulse-dot rounded-full bg-success" />
              Available for work
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Open to full-time roles, freelance missions and interesting
              collaborations — remote or on-site.
            </p>
            <p className="mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Icons.mapPin className="h-3.5 w-3.5" /> Herzogenaurach, Germany
            </p>
          </div>

          <div className="glass rounded-xl p-2">
            <p className="px-4 pb-1 pt-4 font-mono text-xs text-primary">
              {"// channels"}
            </p>
            {SocialLinks.map((s) => (
              <Link
                key={s.name}
                href={s.link}
                target="_blank"
                className="group flex items-center gap-4 rounded-lg px-4 py-3 transition-colors hover:bg-primary/10"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-border/70 bg-background/60 group-hover:border-primary/40 group-hover:text-primary">
                  <s.icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium">{s.name}</span>
                  <span className="block truncate font-mono text-xs text-muted-foreground">
                    {s.username}
                  </span>
                </span>
                <Icons.arrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
