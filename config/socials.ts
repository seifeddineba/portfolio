import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@seifeddineba",
    icon: Icons.gitHub,
    link: "https://github.com/seifeddineba",
  },
  {
    name: "LinkedIn",
    username: "Seif Eddine BEN AICHA",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/seifeddineba",
  },
  {
    name: "Gmail",
    username: "seifeddinebenaicha3",
    icon: Icons.gmail,
    link: "mailto:seifeddinebenaicha3@gmail.com",
  },
];
