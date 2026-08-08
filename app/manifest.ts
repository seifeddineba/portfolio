import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Seif Eddine BEN AICHA | Full-Stack Developer",
    short_name: "Seif Eddine BEN AICHA",
    description:
      "Seif Eddine BEN AICHA - Full-StackDeveloper with 5 years of experience in React.js, Node.js, TypeScript, and Next.js.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "software engineering",
      "developer",
      "web development",
      "full-stack development",
      "frontend development",
      "backend development",
      "blockchain development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
