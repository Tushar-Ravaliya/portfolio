// The single source of truth for editable personal and project content.
export const profile = {
  name: "Tushar Ravaliya",
  firstName: "Tushar",
  role: "Computer Engineering student & developer",
  email: "tushar.ravaliya18@gmail.com",
  location: "Rajkot, India",
  github: "https://github.com/tushar-ravaliya",
  linkedin: "https://linkedin.com/in/tushar-ravaliya",
  // Set NEXT_PUBLIC_SITE_URL to the final deployment origin for canonical URLs.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
};

export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  summary: string;
  technologies: string[];
  status: string;
  evidence: string;
  question: string;
  overview: string;
  details: { title: string; text: string }[];
  flow: string[];
  repository?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "trip-tracker",
    number: "01",
    name: "Trip Tracker",
    category: "Fleet systems / Full stack",
    summary:
      "Bringing trips, drivers, and the road ahead into one place. An exploration of the systems that keep a fleet moving.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Supabase", "MinIO"],
    status: "In exploration",
    evidence: "Project brief",
    question: "How do you make a moving system easier to understand?",
    overview:
      "A fleet and driver management platform focused on trip management, driver assignments, loads, and destinations. The next area of exploration is reliable GPS tracking and the infrastructure behind a connected fleet.",
    details: [
      {
        title: "Coordinating the journey",
        text: "Trips connect drivers, loads, and destinations. The project explores how those moving parts can be organized in one product.",
      },
      {
        title: "Understanding the infrastructure",
        text: "The supplied stack combines Next.js and Node.js with PostgreSQL, Supabase, and MinIO. Detailed implementation notes will be added after the source is available.",
      },
      {
        title: "The next question",
        text: "How should a fleet interface communicate stale or interrupted location updates? Reliable GPS tracking is an area being explored, not a completed capability.",
      },
    ],
    flow: [
      "Trip",
      "Driver assignment",
      "Load & destination",
      "GPS exploration",
    ],
    note: "Field notes in progress. Source code, product screenshots, and a demo link are still to be added. The route drawing is a conceptual illustration.",
  },
  {
    slug: "ghosttrade",
    number: "02",
    name: "GhostTrade",
    category: "Paper trading / MERN",
    summary:
      "A place to understand the market without putting real money on the line. Virtual trades, market charts, and a portfolio that tells the story.",
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Node.js",
      "Lightweight Charts",
    ],
    status: "Built project",
    evidence: "Source reviewed",
    question: "What can building a trading simulator teach you about state?",
    overview:
      "A collaborative MERN paper trading project with a virtual balance, stock search, market data, interactive charts, holdings, and a transaction history. The buy and sell controllers update virtual balances and portfolio positions and record transactions.",
    details: [
      {
        title: "A trade is a chain of changes",
        text: "The Express trade controllers check available virtual funds or holdings, update portfolio quantities and average purchase prices, and append a transaction with the resulting balance.",
      },
      {
        title: "Making market data readable",
        text: "The React client includes stock search, market views, individual stock pages, and time-series charts. The server integrates with TwelveData for market information.",
      },
      {
        title: "An end-to-end application",
        text: "JWT and cookie-based authentication connect the interface to protected portfolio and trading routes. MongoDB stores users, holdings, and transactions. Docker configuration supports running the client and server.",
      },
    ],
    flow: ["React interface", "Express API", "Trade controller", "MongoDB"],
    repository: "https://github.com/Tushar-Ravaliya/GhostTrade",
    note: "A collaborative project. Descriptions are grounded in the local client and server source; no live trading, adoption, or performance claims are implied.",
  },
  {
    slug: "realtime-chat",
    number: "03",
    name: "Real-Time Chat",
    category: "Communication / Real time",
    summary:
      "Exploring the small space between send and received. A chat application built with Laravel and WebSockets.",
    technologies: ["Laravel", "PHP", "WebSockets"],
    status: "Project notes",
    evidence: "Project brief",
    question: "What makes a conversation feel immediate?",
    overview:
      "A real-time communication application using Laravel and WebSockets. The project explores sending and receiving messages through a persistent connection.",
    details: [
      {
        title: "A persistent conversation",
        text: "WebSockets support a connection through which messages can be delivered as they happen. Laravel provides the application's server-side foundation.",
      },
      {
        title: "Details to document",
        text: "The source is not available in this workspace. Authentication, delivery guarantees, deployment architecture, and additional messaging features are intentionally left unclaimed.",
      },
    ],
    flow: ["Message", "Laravel", "WebSocket connection", "Recipient"],
    note: "Case study in progress. Repository, screenshots, and implementation details are still to be added. The message illustration is a conceptual diagram.",
  },
  {
    slug: "clausecraft",
    number: "04",
    name: "ClauseCraft",
    category: "Document tools / SaaS",
    summary:
      "From a few structured answers to a readable document. A considered workflow for NDAs and freelance agreements.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Zod"],
    status: "Built project",
    evidence: "Source reviewed",
    question: "Can a complex document begin with a simple conversation?",
    overview:
      "A document SaaS project that turns structured intake into NDA and freelance agreement drafts. The implementation includes template-based document generation, saved documents, PDF export, authentication, and optional AI clause explanations.",
    details: [
      {
        title: "Structured inputs, predictable drafts",
        text: "Zod validates intake fields on the server. A template engine chooses the relevant clauses and produces canonical Markdown from the validated input.",
      },
      {
        title: "A document has a lifecycle",
        text: "Authenticated users can create and retrieve their documents. PostgreSQL and Drizzle store form data and rendered drafts; a PDF route supports exporting them.",
      },
      {
        title: "Optional services with boundaries",
        text: "The source contains Stripe entitlement flows and an AI explanation endpoint with document ownership checks and a daily cap. These services require their respective configuration.",
      },
    ],
    flow: [
      "Structured intake",
      "Zod validation",
      "Clause templates",
      "Document / PDF",
    ],
    note: "Based on the local ClauseCraft source. Generated agreements are draft assistance; the product does not replace professional legal review. A public demo and repository link are still to be added.",
  },
];

export const interests = [
  {
    number: "01",
    name: "The interface",
    description:
      "Where systems meet people. I enjoy turning complex behavior into interfaces that feel clear and considered.",
    items: [
      "JavaScript / TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    number: "02",
    name: "Behind the scenes",
    description:
      "The requests, connections, and data models that make the visible parts work. I like following a problem all the way through.",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    number: "03",
    name: "Beyond the familiar",
    description:
      "Tools and ideas I am exploring. A place for experiments, unfinished questions, and the next thing to learn.",
    items: ["Docker", "Bun", "Prisma", "Redis", "AI / ML", "Cloud Engineering"],
  },
];
