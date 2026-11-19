"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

import { TerminalWindow } from "@/components/common/terminal-window";

export default function ResumePage() {
  useEffect(() => {
    redirect(process.env.NEXT_PUBLIC_RESUME_LINK || "/");
  }, []);
  return (
    <div className="grid min-h-[60vh] place-items-center py-16">
      <TerminalWindow title="~/resume" className="w-full max-w-md">
        <p className="text-muted-foreground">
          <span className="text-primary">$</span> open resume.pdf
        </p>
        <p className="mt-2">
          Redirecting to the resume
          <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-caret-blink bg-primary" />
        </p>
      </TerminalWindow>
    </div>
  );
}
