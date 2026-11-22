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
    position: "Full-Stack Developer",
    company: "Trimakus",
    location: "Monastir, Tunisia",
    startDate: new Date("2021-08-01"),
    endDate: new Date("2026-07-31"),
    description: [
      "Worked on every stage of building web applications for business clients: design, development, testing and delivery.",
      "Worked directly with clients to understand their needs and turn them into working software.",
      "Built backends with Node.js and Express.js, databases with PostgreSQL, MySQL and MongoDB, and frontends with React.js and TypeScript.",
      "Handled hosting and deployment with Docker and AWS (EC2, S3), and CI/CD pipelines with Jenkins.",
      "Used AI coding assistants (Claude Code, GitHub Copilot) to develop and refactor faster, reviewing and testing every change before release.",
    ],
    achievements: [
      "Delivered 7 client projects, including E-Impliquance, Deep-T, Clin-T, Vaistat, MakeMyWork, USINA and Block-T.",
      "Introduced code reviews in the team.",
      "Mentored 4 colleagues and guided 3 interns through their projects.",
      "Sped up development and refactoring with AI coding assistants while keeping code clean and reliable through review and testing.",
    ],
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "React Query",
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "GraphQL",
      "Socket.io",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Solidity",
      "Ethereum",
      "Stripe",
      "Docker",
      "AWS",
      "Jenkins",
      "CI/CD",
      "Git",
      "AI Tools",
    ],
    companyUrl: "https://trimakus.com",
    logo: "/experience/trimakus-logo.png",
  },
  {
    id: "freelance",
    position: "Full-Stack Developer",
    company: "Freelance",
    location: "Remote",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2026-03-01"),
    description: [
      "Worked directly with 4 clients, from understanding their needs and proposing a solution to delivering the finished product.",
      "Built a ride-booking web app (Taxi Parisien) and an e-commerce warehouse and operations dashboard (Orty).",
      "Developed the frontend of a football community platform (PlayBall) and designed a landing page in Figma (Iris).",
    ],
    achievements: [
      "Delivered 4 client projects end to end, from requirements to finished product.",
      "Covered full-stack development, front-end development and UI design depending on each client's needs.",
    ],
    skills: [
      "HTML 5",
      "CSS 3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "React RTK Query",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "Figma",
    ],
    logo: "/logo.png",
  },
  {
    id: "trimakus-intern-2021",
    position: "Software Development Intern",
    company: "Trimakus",
    location: "Monastir, Tunisia",
    startDate: new Date("2021-02-01"),
    endDate: new Date("2021-06-01"),
    description: [
      "Built Inssuria, a mobile app for managing vehicles and reporting accidents (Bachelor's graduation project).",
      "Stored accident reports on the Ethereum blockchain with Solidity smart contracts, so records can't be tampered with.",
      "Built user onboarding, vehicle management, a digital wallet and an admin dashboard.",
    ],
    achievements: [
      "Delivered a working mobile app with tamper-proof accident records to support insurance claims.",
    ],
    skills: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "MySQL",
      "Solidity",
      "Ethereum",
    ],
    companyUrl: "https://trimakus.com",
    logo: "/experience/trimakus-logo.png",
  },
];
