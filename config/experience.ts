import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "trimakus-fullstack",
    position: "Full-Stack JavaScript Developer",
    company: "Trimakus",
    location: "Monastir, Tunisia",
    startDate: new Date("2021-08-01"),
    endDate: "Present",
    description: [
      "Developed and optimized responsive web applications with React.js, Next.js and TypeScript, improving load times by 30% and enhancing UX.",
      "Designed and implemented secure REST APIs with Node.js/Express.js for authentication, trading operations, and third-party integrations.",
      "Built and deployed Solidity smart contracts on Ethereum for transaction validation and Web3 connectivity.",
      "Established CI/CD pipelines using Docker, Nginx, and Jenkins, reducing deployment time by 40%.",
    ],
    achievements: [
      "Improved application load times by 30% through React.js, Next.js, and TypeScript optimization.",
      "Boosted system performance by 25% through lazy loading, caching, and query optimization.",
      "Enabled secure blockchain-based operations by deploying Solidity smart contracts on Ethereum.",
      "Reduced deployment time by 40% by establishing CI/CD pipelines with Docker, Nginx, and Jenkins.",
      "Enforced security best practices (OWASP, JWT, OAuth2) to safeguard financial transactions and user data.",
    ],
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Node.js",
      "express.js",
      "PostgreSQL",
      "Docker",
      "Git",
      "CI/CD",
      "Jenkins",
      "Solidity",
      "MongoDB",
      "MySQL",
      "Figma",
      "Redux",
      "Socket.io",
      "Material UI",
      "Tailwind CSS",
      "Jenkins",
      "Jest",
      "OneSignal",
      "Web3.js",
      "Ethers.js",
      "React Query",
      "React RTK Query",
      "Stripe",
      "AI Tools"
    ],
    companyUrl: "https://trimakus.com",
    logo: "/experience/trimakus-logo.png",
  },
  {
    id: "freelance",
    position: "Full-Stack JavaScript Developer",
    company: "Freelance",
    location: "Monastir, Tunisia",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2026-03-01"),
    description: [
      "Developed custom web applications using React.js and Node.js for various clients.",
      "Designed REST APIs and integrated third-party services.",
      "Delivered complete solutions from concept to deployment.",
      "Worked directly with clients to gather requirements and provide technical solutions.",
    ],
    achievements: [
      "Delivered multiple end-to-end web applications for diverse clients across different industries.",
      "Built and integrated custom REST APIs and third-party services to meet specific business needs.",
      "Managed full project lifecycles from requirements gathering to production deployment.",
    ],
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Node.js",
      "express.js",
      "PostgreSQL",
      "Docker",
      "Git",
      "CI/CD",
      "Jenkins",
      "Solidity",
      "MongoDB",
      "MySQL",
      "Figma",
      "Redux",
      "Socket.io",
      "Material UI",
      "Tailwind CSS",
      "Jenkins",
      "Jest",
      "OneSignal",
      "Web3.js",
      "Ethers.js",
      "React Query",
      "React RTK Query",
      "Stripe",
      "AI Tools"
    ],
    logo: "/logo.png",
  },
  {
    id: "trimakus-intern-2024",
    position: "Software Development Intern",
    company: "Trimakus",
    location: "Monastir, Tunisia",
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-06-01"),
    description: [
      "Built a factory management system (inventory, orders, production, invoicing) using React.js & Node.js.",
      "Automated core processes to improve operational efficiency and reduce costs.",
      "Streamlined operations reducing manual work by 35%.",
    ],
    achievements: [
      "Built a comprehensive factory management system covering inventory, orders, production, and invoicing.",
      "Automated core business processes reducing manual work by 35%.",
      "Improved operational efficiency and significantly reduced operational costs.",
    ],
    skills: [
      "React",
      "Typescript",
      "Node.js",
      "express.js",
      "MySQL",
      "Git",
      "Jest",
    ],
    companyUrl: "https://trimakus.com",
    logo: "/experience/trimakus-logo.png",
  },
  {
    id: "trimakus-intern-2021",
    position: "Software Development Intern",
    company: "Trimakus",
    location: "Monastir, Tunisia",
    startDate: new Date("2021-02-01"),
    endDate: new Date("2021-06-01"),
    description: [
      "Developed a cross-platform application (React.js, React Native, Node.js) for vehicle management and accident reporting.",
      "Integrated Solidity smart contracts to store accident reports on-chain.",
      "Provided insurance companies with secure, transparent access to accident data.",
    ],
    achievements: [
      "Developed a cross-platform application for vehicle management and accident reporting.",
      "Integrated Solidity smart contracts to store accident reports on-chain for transparency.",
      "Enabled insurance companies to access secure, immutable accident data.",
    ],
    skills: [
      "React",
      "React Native",
      "Node.js",
      "express.js",
      "MySQL",
      "Git",
      "Solidity",
      "Ethers.js",
      "Jest",
    ],
    companyUrl: "https://trimakus.com",
    logo: "/experience/trimakus-logo.png",
  },
];
