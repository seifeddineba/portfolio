import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
  firstScreen?: any;
}

export const Projects: ProjectInterface[] = [
  {
    id: "clin-t",
    companyName: "Clin-T",
    type: "Professional",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Clinical trial digitalization platform streamlining every step of clinical trials including user management, studies, drug management, feasibility forms, eCRFs, and real-time collaboration.",
    techStack: [
      "React",
      "Typescript",
      "Node.js",
      "express.js",
      "PostgreSQL",
      "Socket.io",
      "React Query",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2026-05-01"),
    companyLogoImg: "/projects/clin-t/clin-t-logo.png",
    firstScreen: "/projects/clin-t/clin-t1.png",
    pagesInfoArr: [
      {
        title: "Study Management / Chat",
        description:
          "User and center management with study and protocol workflow tools and real-time chat.",
        imgArr: [
          "/projects/clin-t/clin-t1.png",
          "/projects/clin-t/clin-t2.png",
          "/projects/clin-t/clin-t3.png",
          "/projects/clin-t/clin-t4.png",
          "/projects/clin-t/clin-t5.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Clin-T is a comprehensive clinical trial digitalization platform that streamlines every step of clinical trials. The platform handles user management, studies, drug management, feasibility forms, and electronic Case Report Forms (eCRFs).",
        "Built with React, TypeScript, and Node.js, the platform provides a robust, scalable solution for managing complex clinical trial workflows with real-time collaboration features.",
      ],
      bullets: [
        "Implemented user and center management with comprehensive study workflow tools.",
        "Built protocol workflow management and drug storage with drug library features.",
        "Developed feasibility forms and eCRF management for clinical data capture.",
        "Integrated real-time chat and push notifications for team collaboration.",
        "Created document management system for clinical trial documentation.",
        "Built admin dashboard for platform oversight and user management.",
      ],
    },
  },
  {
    id: "playball",
    companyName: "PlayBall",
    type: "Professional",
    category: ["Frontend", "Web Dev"],
    shortDescription:
      "Community-driven football platform letting users join organized games, meet new players, and enjoy competitive but friendly matches with secure payments and live score tracking.",
    techStack: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Redux",
      "React RTK Query",
    ],
    startDate: new Date("2025-12-25"),
    endDate: new Date("2026-03-01"),
    companyLogoImg: "/projects/playball/logo-playBall.png",
    firstScreen: "/projects/playball/playBall1.png",
    pagesInfoArr: [
      {
        title: "User Experience",
        description: "User onboarding, game suggestion.",
        imgArr: [
          "/projects/playball/playBall1.png",
          "/projects/playball/playBall2.png",
          "/projects/playball/playBall3.png",
        ],
      },
      {
        title: "Game Management",
        description:
          "Live score tracking, venue management, and payment integration.",
        imgArr: [
          "/projects/playball/playBall4.png",
          "/projects/playball/playBall5.png",
          "/projects/playball/playBall6.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "PlayBall is a community-driven football platform that lets users join organized games, meet new players, and enjoy competitive but friendly matches. The platform handles everything from game creation to payment processing and live score tracking.",
        "Built with React and TypeScript, PlayBall provides a seamless user experience with secure payment integration, venue management, and real-time match updates.",
      ],
      bullets: [
        "Developed user onboarding and profile management system.",
        "Implemented game creation and hosting functionality.",
        "Integrated secure payment processing for game participation.",
        "Built live score tracking and real-time match updates.",
        "Created field and venue management system for organizers.",
        "Added notifications and reminders for upcoming games.",
        "Built admin dashboard for platform oversight.",
      ],
    },
  },
  {
    id: "e-impliquance",
    companyName: "E-Impliquance",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "AI"],
    shortDescription:
      "AI-powered recruitment platform that connects recruiters and candidates using smart CV–job matching. Candidates upload CVs and create profiles, while recruiters post job requests and receive the best matches instantly.",
    techStack: [
      "React",
      "Typescript",
      "Node.js",
      "express.js",
      "PostgreSQL",
      "Python",
      "Socket.io",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "/projects/e-impliquance/e-impliquence-logo.png",
    firstScreen: "/projects/e-impliquance/e-impliquence1.png",
    pagesInfoArr: [
      {
        title: "Candidate / Recruiter Portal",
        description: "CV upload, profile creation, and job matching interface.",
        imgArr: [
          "/projects/e-impliquance/e-impliquence1.png",
          "/projects/e-impliquance/e-impliquence2.png",
          "/projects/e-impliquance/e-impliquence3.png",
          "/projects/e-impliquance/e-impliquence4.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "E-Impliquance is an AI-powered recruitment platform designed to streamline the hiring process by connecting recruiters and candidates through intelligent CV–job matching.",
        "Candidates can upload their CVs and create detailed profiles, while recruiters post job requests and instantly receive the best-matched candidates based on AI analysis.",
        "The platform features push notifications, admin dashboard management, and comprehensive profile and request management tools.",
      ],
      bullets: [
        "Built an AI-based CV matching system that automatically ranks candidates against job requirements.",
        "Implemented candidate account management with CV upload and profile creation features.",
        "Developed recruiter tools for job request creation and candidate matching.",
        "Integrated push notifications for real-time updates on applications and matches.",
        "Created a comprehensive admin dashboard for platform management.",
      ],
    },
  },
  {
    id: "block-t",
    companyName: "Block-T",
    type: "Professional",
    category: ["Frontend", "Web Dev"],
    shortDescription:
      "Clean, modern landing page showcasing the Deep-T and Clin-T blockchain-based healthcare and research platforms.",
    techStack: ["Next.js"],
    startDate: new Date("2025-12-01"),
    endDate: new Date("2026-03-01"),
    companyLogoImg: "/projects/block-t/block-t-logo.png",
    firstScreen: "/projects/block-t/blockt1.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern landing page showcasing Deep-T and Clin-T project features.",
        imgArr: [
          "/projects/block-t/blockt1.png",
          "/projects/block-t/blockt2.png",
          "/projects/block-t/blockt3.png",
          "/projects/block-t/blockt4.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Block-T is a clean, modern landing page designed to showcase the Deep-T and Clin-T projects. The website provides an engaging introduction to both platforms, highlighting their blockchain-based solutions for healthcare and research.",
        "Built with Next.js, the landing page features responsive design, smooth animations, and optimized performance for a seamless user experience.",
      ],
      bullets: [
        "Designed and developed a modern landing page for Deep-T and Clin-T platforms.",
        "Implemented responsive design with smooth animations and transitions.",
        "Optimized performance and SEO using Next.js features.",
      ],
    },
  },
  {
    id: "vaistat",
    companyName: "Vaistat",
    type: "Professional",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Healthcare and medication delivery ecosystem connecting clinics, pharmacies, patients, and couriers through real-time prescription and medication delivery management.",
    techStack: [
      "React",
      "Typescript",
      "Node.js",
      "express.js",
      "MongoDB",
      "Socket.io",
    ],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2025-02-01"),
    companyLogoImg: "/projects/vaistat/vaistat-logo.png",
    firstScreen: "/projects/vaistat/vaistat1.jpg",
    pagesInfoArr: [
      {
        title: "Clinic Portal",
        description:
          "Delivery tracking, purchase essentials, pharmacist chat, and delivery routing.",
        imgArr: [
          "/projects/vaistat/vaistat1.jpg",
          "/projects/vaistat/vaistat2.png",
          "/projects/vaistat/vaistat3.jpg",
          "/projects/vaistat/vaistat4.jpg",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Vaistat is a multi-platform healthcare ecosystem connecting clinics, pharmacies, patients, and couriers. It enables real-time prescription management, medication delivery tracking, and seamless communication between all stakeholders.",
        "The platform features a clinic portal for prescription management, a pharmacy interface for managing requests and medication history, a patient app for delivery tracking and pharmacist chat, and a courier app for delivery routing and payment processing.",
      ],
      bullets: [
        "Built clinic portal with real-time prescription management capabilities.",
        "Developed pharmacy interface for managing prescription requests and medication history.",
        "Created patient app with delivery tracking, purchase essentials, and pharmacist chat.",
        "Built courier app with delivery routing, confirmations, and payment processing.",
        "Integrated real-time chat and push notifications across all platforms.",
      ],
    },
  },

  {
    id: "make-my-work",
    companyName: "MakeMyWork",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "Cryptocurrency", "Blockchain"],
    shortDescription:
      "Service marketplace and freelance platform where users post service requests and professionals offer their services, with messaging, notifications, payments, and analytics.",
    techStack: [
      "React",
      "Node.js",
      "express.js",
      "MySQL",
      "Socket.io",
      "OneSignal",
      "Stripe",
      "Ethers.js",
      "Solidity",
    ],
    startDate: new Date("2021-09-01"),
    endDate: new Date("2022-12-01"),
    companyLogoImg: "/projects/make-my-work/mmw-logo.png",
    firstScreen: "/projects/make-my-work/mmw-1.png",
    pagesInfoArr: [
      {
        title: "Home & Service Listings",
        description:
          "Service request posting, professional profiles, and service offer management with real-time chat and payment integration.",
        imgArr: [
          "/projects/make-my-work/mmw-1.png",
          "/projects/make-my-work/mmw-2.png",
          "/projects/make-my-work/mmw-3.png",
          "/projects/make-my-work/mmw-4.png",
          "/projects/make-my-work/mmw-5.png",
        ],
      },
      {
        title: "Messaging & Notifications & profile",
        description:
          "Real-time messaging, push notifications, and user profile management.",
        imgArr: [
          "/projects/make-my-work/mmw-6.png",
          "/projects/make-my-work/mmw-7.png",
          "/projects/make-my-work/mmw-8.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "MakeMyWork is a service marketplace and freelance platform where users can post service requests and professionals can offer their services. The platform includes real-time messaging, push notifications, and a comprehensive payment system.",
        "The payment system supports Stripe, cryptocurrency, and a platform-native token system, providing flexible payment options for users and professionals.",
      ],
      bullets: [
        "Built profiles and offer management system for service professionals.",
        "Implemented service request posting and matching functionality.",
        "Integrated real-time chat for user-professional communication.",
        "Added push notifications for updates and alerts.",
        "Developed payment system supporting Stripe, crypto, and platform token.",
        "Created admin dashboard for platform management and analytics.",
      ],
    },
  },

  {
    id: "deep-t",
    companyName: "Deep-T",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "Blockchain"],
    shortDescription:
      "Blockchain-based preclinical research platform ensuring traceability and integrity in preclinical studies through blockchain technology, making research reproducible, secure, and fully auditable.",
    techStack: [
      "React",
      "Node.js",
      "express.js",
      "MySQL",
      "Solidity",
      "Material UI",
      "Redux",
      "Web3.js",
    ],
    startDate: new Date("2021-09-01"),
    endDate: new Date("2023-03-01"),
    companyLogoImg: "/projects/deep-t/deep-t-logo.png",
    firstScreen: "/projects/deep-t/Deep-t.png",
    pagesInfoArr: [
      {
        title: "Research Platform",
        description:
          "End-to-end preclinical workflow with study design, data validation, and blockchain traceability.",
        imgArr: ["/projects/deep-t/Deep-t.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Deep-T is a blockchain-based platform designed to ensure traceability and integrity in preclinical studies. By leveraging blockchain technology, the platform makes research reproducible, secure, and fully auditable.",
        "The system provides end-to-end preclinical workflow management, study design and data validation, and scientific traceability via blockchain integration.",
      ],
      bullets: [
        "Built an end-to-end preclinical research workflow management system.",
        "Implemented study design and data validation tools for research integrity.",
        "Integrated blockchain-based scientific traceability for audit-ready data tracking.",
        "Developed comprehensive admin dashboard management for platform oversight.",
      ],
    },
  },

  {
    id: "usina",
    companyName: "USINA",
    type: "Professional",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Factory management and ERP companion platform to control orders, inventory, production, and users. Integrates with ERP systems or works standalone.",
    techStack: ["React", "Node.js", "express.js", "MySQL"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "/projects/usina/usina-logo.png",
    firstScreen: "/projects/usina/usina1.png",
    pagesInfoArr: [
      {
        title: "Order Management / Inventory & Production",
        description:
          "Invoices, sales orders, and purchase order management and stock tracking with production planning and monitoring.",
        imgArr: [
          "/projects/usina/usina1.png",
          "/projects/usina/usina2.png",
          "/projects/usina/usina3.png",
          "/projects/usina/usina4.png",
          "/projects/usina/usina5.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "USINA is a factory management platform designed to control orders, inventory, production, and users. It can integrate with existing ERP systems or operate as a standalone solution.",
        "The platform provides comprehensive tools for managing invoices, sales orders, purchase orders, inventory tracking, and production planning with real-time monitoring capabilities.",
      ],
      bullets: [
        "Built invoice, sales order, and purchase order management system.",
        "Implemented inventory and stock tracking with real-time updates.",
        "Developed production planning and monitoring dashboard.",
        "Created user and role management for access control.",
        "Designed platform to work standalone or integrate with ERP systems.",
      ],
    },
  },
  {
    id: "inssuria",
    companyName: "Inssuria",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack", "Web Dev", "Blockchain"],
    shortDescription:
      "Decentralized mobile application for vehicle management, digital wallets, and blockchain-based accident reports with immutable records.",
    techStack: [
      "React Native",
      "React",
      "Node.js",
      "express.js",
      "MySQL",
      "Solidity",
      "Web3.js",
    ],
    startDate: new Date("2021-02-01"),
    endDate: new Date("2021-06-01"),
    companyLogoImg: "/projects/inssuria/inssuria-logo.png",
    firstScreen: "/projects/inssuria/inssuria1.png",
    pagesInfoArr: [
      {
        title: "Mobile Application",
        description:
          "User onboarding, vehicle management, and digital wallet interface.",
        imgArr: [
          "/projects/inssuria/inssuria1.png",
          "/projects/inssuria/inssuria2.png",
          "/projects/inssuria/inssuria3.png",
        ],
      },
      {
        title: "Admin Dashboard",
        description:
          "Vehicle records, accident reports, and blockchain verification.",
        imgArr: [
          "/projects/inssuria/inssuria4.png",
          "/projects/inssuria/inssuria5.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Inssuria is a decentralized mobile application for vehicle management, digital wallets, and blockchain-based accident reports. Built with React Native and Expo, the app provides users with secure vehicle management and immutable accident record keeping.",
        "The platform integrates Solidity smart contracts to store accident reports on-chain, providing insurance companies with secure, transparent access to verified data.",
      ],
      bullets: [
        "Developed cross-platform mobile app using React Native and Expo.",
        "Implemented user onboarding and vehicle management features.",
        "Built digital wallet functionality for in-app transactions.",
        "Integrated blockchain-based immutable accident report storage.",
        "Created admin dashboard for managing vehicles and reports.",
      ],
    },
  },
  {
    id: "taxi-parisien",
    companyName: "Taxi Parisien",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Ride-booking web application allowing users to book rides, choose car types, and receive real-time distance and price estimates with receipt generation.",
    techStack: ["HTML 5", "CSS 3", "Javascript", "Node.js", "MongoDB"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-03-01"),
    companyLogoImg: "/projects/taxi-parisien/taxi-parisien-logo.png",
    firstScreen: "/projects/taxi-parisien/taxi-parisien1.png",
    pagesInfoArr: [
      {
        title: "Ride Booking Interface",
        description:
          "User-friendly ride booking with car type selection, price and distance estimation.",
        imgArr: [
          "/projects/taxi-parisien/taxi-parisien1.png",
          "/projects/taxi-parisien/taxi-parisien2.png",
          "/projects/taxi-parisien/taxi-parisien3.png",
          "/projects/taxi-parisien/taxi-parisien4.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Taxi Parisien is a ride-booking web application that enables users to book rides, select their preferred car type, and receive real-time distance and price estimates.",
        "The platform features receipt generation for completed rides and an admin dashboard for managing bookings and operations.",
      ],
      bullets: [
        "Developed a complete ride booking and reservation system with real-time price and distance estimation.",
        "Implemented car type selection and receipt generation features.",
        "Built an admin dashboard for managing bookings, drivers, and platform operations.",
      ],
    },
  },

  {
    id: "plutus",
    companyName: "Plutus",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Banking anti-fraud and AML platform focused on tracking suspicious transactions, preventing fraud, and managing clients, accounts, and branches.",
    techStack: ["Next.js", "Typescript", "Node.js", "express.js", "PostgreSQL"],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/plutus/plutus-logo.png",
    firstScreen: "/projects/plutus/plutus-1.png",
    pagesInfoArr: [
      {
        title: "Banking Dashboard",
        description: "Client and account management with transaction tracking.",
        imgArr: [
          "/projects/plutus/plutus-1.png",
          "/projects/plutus/plutus-2.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Plutus is a banking anti-fraud and Anti-Money Laundering (AML) platform designed to track suspicious transactions, prevent fraud, and manage banking operations including clients, accounts, and branches.",
        "The platform provides a comprehensive fraud monitoring dashboard and tools for managing bank branches, accounts, and transactions in a secure environment.",
      ],
      bullets: [
        "Built users and clients management system for banking operations.",
        "Developed bank and branch management tools for organizational oversight.",
        "Implemented accounts and transaction tracking with real-time monitoring.",
        "Created fraud monitoring dashboard with suspicious activity alerts.",
      ],
    },
  },

  {
    id: "orty",
    companyName: "Orty",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "Backend"],
    shortDescription:
      "E-commerce warehouse and operations dashboard helping businesses manage products, storage, orders, vendors, ads, and KPIs with delivery partner integrations.",
    techStack: ["React", "Node.js", "express.js", "MySQL"],
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-08-01"),
    companyLogoImg: "/projects/orty/orty-logo.png",
    firstScreen: "/projects/orty/orty1.png",
    pagesInfoArr: [
      {
        title: "Warehouse Dashboard",
        description:
          "User and vendor management with order and product handling.",
        imgArr: ["/projects/orty/orty1.png", "/projects/orty/orty2.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Orty is an e-commerce warehouse and operations dashboard designed to help businesses manage products, storage, orders, vendors, advertisements, and key performance indicators.",
        "The platform includes delivery partner integrations, storage and store tracking, and a comprehensive admin dashboard for overseeing all operations.",
      ],
      bullets: [
        "Built user and vendor management system for e-commerce operations.",
        "Implemented order and product handling with inventory tracking.",
        "Developed storage and store tracking tools for warehouse management.",
        "Created ads management system for promotional campaigns.",
        "Built KPI dashboard for performance monitoring and analytics.",
        "Integrated delivery partner APIs for seamless logistics.",
      ],
    },
  },

  {
    id: "iris",
    companyName: "Iris Printing Company",
    type: "Professional",
    category: ["UI/UX"],
    shortDescription:
      "Modern landing page design for a printing company, created in Figma with a clean, professional aesthetic.",
    techStack: ["Figma"],
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-12-23"),
    companyLogoImg: "/projects/iris/iris-logo.png",
    firstScreen: "/projects/iris/iris1.jpg",
    pagesInfoArr: [
      {
        title: "Landing Page Design",
        description:
          "Modern, professional landing page design for Iris printing company.",
        imgArr: [
          "/projects/iris/iris1.jpg",
          "/projects/iris/iris2.jpg",
          "/projects/iris/iris3.jpg",
          "/projects/iris/iris4.jpg",
          "/projects/iris/iris5.jpg",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Iris is a modern landing page design created in Figma for a printing company. The design features a clean, professional aesthetic tailored to showcase the company's printing services and attract potential clients.",
        "The design emphasizes visual appeal, clear navigation, and effective presentation of services to drive user engagement and conversions.",
      ],
      bullets: [
        "Designed a modern, professional landing page for a printing company.",
        "Created a clean, visually appealing UI tailored to the printing industry.",
        "Focused on user experience and effective service presentation.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 6);
