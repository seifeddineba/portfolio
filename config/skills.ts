import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;

  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  // ---------- Languages ----------
  {
    name: "JavaScript",
    description:
      "Build interactive web applications and Node.js services with modern JavaScript.",
    icon: Icons.javascript,
  },
  {
    name: "TypeScript",
    description:
      "Write typed, maintainable frontend and backend code across React and Node.js projects.",
    icon: Icons.typescript,
  },
  {
    name: "Solidity",
    description:
      "Write Ethereum smart contracts for traceability, tamper-proof records and token payments.",
    icon: Icons.solidity,
  },
  {
    name: "HTML 5",
    description: "Structure accessible, semantic web pages.",
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description: "Style responsive layouts and user interfaces.",
    icon: Icons.css3,
  },

  // ---------- Frontend ----------
  {
    name: "React.js",
    description:
      "Build component-based web applications and admin dashboards for business clients.",
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Build fast, SEO-friendly websites such as corporate sites and this portfolio.",
    icon: Icons.nextjs,
  },
  {
    name: "Redux",
    description:
      "Manage application state predictably in large React applications.",
    icon: Icons.redux,
  },
  {
    name: "RTK Query",
    description:
      "Fetch and cache server data in React apps with Redux Toolkit Query.",
    icon: Icons.reactRTK,
  },
  {
    name: "React Query",
    description:
      "Manage server state, data fetching and caching in React applications.",
    icon: Icons.reactQuery,
  },
  {
    name: "React Native",
    description:
      "Build cross-platform mobile apps for iOS and Android with React.",
    icon: Icons.react,
  },
  {
    name: "Expo",
    description:
      "Develop, build and ship React Native mobile apps quickly.",
    icon: Icons.expo,
  },

  // ---------- Backend ----------
  {
    name: "Node.js",
    description:
      "Build backend services and APIs that power web and mobile applications.",
    icon: Icons.nodejs,
  },
  {
    name: "Express.js",
    description:
      "Build REST and GraphQL APIs on Node.js with a fast, minimal framework.",
    icon: Icons.express,
  },
  {
    name: "REST API Design",
    description:
      "Design clear, secure REST APIs with Node.js and Express.js.",
    icon: Icons.restApi,
  },
  {
    name: "GraphQL",
    description:
      "Design GraphQL schemas and resolvers for precise, efficient data fetching.",
    icon: Icons.graphql,
  },
  {
    name: "Socket.IO",
    description:
      "Build real-time features such as chat over WebSockets.",
    icon: Icons.socketio,
  },
  {
    name: "JWT & RBAC",
    description:
      "Secure APIs with JWT authentication and role-based access control.",
    icon: Icons.jwt,
  },
  {
    name: "Stripe",
    description: "Integrate online payments with the Stripe API.",
    icon: Icons.stripe,
  },

  // ---------- Databases / ORM ----------
  {
    name: "PostgreSQL",
    description:
      "Model and query relational data for data-heavy business applications.",
    icon: Icons.postgresql,
  },
  {
    name: "MySQL",
    description:
      "Design and manage relational databases for web applications.",
    icon: Icons.mysql,
  },
  {
    name: "MongoDB",
    description:
      "Store and query flexible document data with a NoSQL database.",
    icon: Icons.mongodb,
  },
  {
    name: "Sequelize",
    description: "Work with SQL databases from Node.js through an ORM.",
    icon: Icons.sequelize,
  },
  {
    name: "TypeORM",
    description: "Map typed entities to SQL databases in TypeScript projects.",
    icon: Icons.typeorm,
  },
  {
    name: "Mongoose",
    description: "Model MongoDB data with schemas and validation in Node.js.",
    icon: Icons.mongoose,
  },

  // ---------- Blockchain ----------
  {
    name: "Ethereum",
    description:
      "Build decentralized features on the Ethereum blockchain.",
    icon: Icons.ethereum,
  },
  {
    name: "Truffle",
    description: "Compile, test and deploy Solidity smart contracts.",
    icon: Icons.truffle,
  },
  {
    name: "ethers.js",
    description:
      "Connect JavaScript applications to Ethereum and smart contracts.",
    icon: Icons.ethereum,
  },
  {
    name: "web3.js",
    description:
      "Interact with the Ethereum blockchain and smart contracts from JavaScript.",
    icon: Icons.web3,
  },

  // ---------- DevOps / Cloud ----------
  {
    name: "Docker",
    description:
      "Containerize applications for consistent deployment across environments.",
    icon: Icons.docker,
  },
  {
    name: "AWS",
    description: "Host and deploy applications on AWS EC2 and S3.",
    icon: Icons.amazonaws,
  },
  {
    name: "Jenkins CI/CD",
    description:
      "Automate build and deployment pipelines with Jenkins.",
    icon: Icons.jenkins,
  },

  // ---------- Testing ----------
  {
    name: "Jest",
    description: "Write unit tests to keep code reliable.",
    icon: Icons.jest,
  },
  {
    name: "Cypress / Playwright",
    description: "Write end-to-end tests for web applications.",
    icon: Icons.cypress,
  },
  {
    name: "Postman",
    description: "Test and document APIs.",
    icon: Icons.postman,
  },

  // ---------- Design ----------
  {
    name: "Figma",
    description: "Design user interfaces and landing pages.",
    icon: Icons.figma,
  },

  // ---------- AI ----------
  {
    name: "AI Tools",
    description:
      "Use AI coding assistants (Claude Code, GitHub Copilot) to develop and refactor faster, reviewing and testing every change; integrate AI APIs into applications.",
    icon: Icons.ai,
  },

  // ---------- Ways of working ----------
  {
    name: "Git",
    description:
      "Version control and collaboration with GitHub and GitLab, including code reviews.",
    icon: Icons.git,
  },
  {
    name: "Agile / Scrum",
    description:
      "Work in Agile/Scrum teams, tracking tickets and projects in Tuleap.",
    icon: Icons.agile,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name));

const featuredNames = [
  "React.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Next.js",
];

export const featuredSkills = featuredNames
  .map((name) => skills.find((s) => s.name === name))
  .filter((s): s is skillsInterface => Boolean(s));
