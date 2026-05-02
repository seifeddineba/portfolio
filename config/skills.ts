import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "React.js",
    description:
      "Build interactive user interfaces using components, state, props, and virtual DOM for dynamic web applications.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "TypeScript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "React Native",
    description:
      "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "PostgreSQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.postgresql,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "JavaScript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Solidity",
    description:
      "Develop smart contracts for Ethereum blockchain to enable secure decentralized applications.",
    rating: 4,
    icon: Icons.solidity,
  },
  {
    name: "Web3.js",
    description:
      "Interact with Ethereum blockchain and smart contracts from JavaScript applications.",
    rating: 4,
    icon: Icons.web3,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 4,
    icon: Icons.tailwindcss,
  },
  {
    name: "Docker",
    description:
      "Create containerized applications for consistent deployment across different environments.",
    rating: 4,
    icon: Icons.docker,
  },
  {
    name: "Git",
    description:
      "Track changes and collaborate on code with the most widely used version control system.",
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "Jenkins",
    description:
      "Automate deployment pipelines and CI/CD processes for efficient software delivery.",
    rating: 4,
    icon: Icons.jenkins,
  },
  {
    name: "Figma",
    description:
      "Create user interface designs and prototypes for web and mobile applications.",
    rating: 4,
    icon: Icons.figma,
  },
  {
    name: "Jest",
    description:
      "Write and run unit tests to ensure code quality and prevent regressions.",
    rating: 4,
    icon: Icons.jest,
  },
  {
    name: "Redux",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    rating: 5,
    icon: Icons.redux,
  },
  {
    name: "Socket.io",
    description:
      "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    rating: 4,
    icon: Icons.socketio,
  },
  {
    name: "Material UI",
    description:
      "Create stunning and responsive UIs with a popular React UI framework.",
    rating: 5,
    icon: Icons.mui,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
   {
    name: "React Query",
    description:
      "Manage server state and data fetching in React applications efficiently.",
    rating: 4,
    icon: Icons.reactQuery,
  },
   {
    name: "React RTK Query",
    description:
      "Simplify data fetching and caching in React applications with Redux Toolkit Query.",
    rating: 4,
    icon: Icons.reactRTK,
  },
    {
    name: "Stripe",
    description:
      "Accept payments and manage subscriptions easily with Stripe.",
    rating: 4,
    icon: Icons.stripe,
  },
  {
    name: "Nginx",
    description:
      "Deploy and manage high-performance web servers and reverse proxies.",
    rating: 3,
    icon: Icons.nginx,
  },
  {
    name: "CI/CD",
    description:
      "Implement continuous integration and deployment pipelines for automated software delivery.",
    rating: 4,
    icon: Icons.cicd,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "AI Tools",
    description:
      "Leverage AI-assisted development tools like Claude AI, Cursor, and OpenCode for faster development.",
    rating: 4,
    icon: Icons.ai,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
