import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Seif Eddine BEN AICHA | Full-Stack Developer",
    short_name: "Seif Eddine BEN AICHA",
    description:
      "Seif Eddine BEN AICHA - Full-StackDeveloper with 5 years of experience in React.js, Node.js, TypeScript, and Next.js.",
    start_url: "/",
    display: "standalone",
    background_color: "#07090f",
    theme_color: "#07090f",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-512.png",
        sizes: "512x512",
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
