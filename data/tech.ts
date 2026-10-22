export const startProjectWhatsAppUrl = "https://wa.me/918921592742?text=Hi%20Cubixmet%20Tech%2C%20I%27d%20like%20to%20start%20a%20project.%20Please%20share%20the%20next%20steps.";

export const techServices = [
  {
    number: "01",
    title: "Web & Application Development",
    description:
      "Full-stack web apps, SPAs, and progressive web applications built with React, Next.js, and modern frameworks. We build scalable, performant applications.",
  },
  {
    number: "02",
    title: "Product Engineering",
    description:
      "End-to-end product lifecycle management from ideation and prototyping to deployment, monitoring, and iteration.",
  },
  {
    number: "03",
    title: "Custom Software Solutions",
    description:
      "Tailored enterprise-grade software engineered for your unique business processes, integrations, and workflows.",
  },
  {
    number: "04",
    title: "Technical Consulting",
    description:
      "Architecture reviews, technology stack assessments, cloud migration planning, and digital transformation advisory.",
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    description:
      "CI/CD pipelines, containerization, Kubernetes orchestration, and cloud infrastructure management on AWS, GCP, and Azure.",
  },
  {
    number: "06",
    title: "API & Backend Development",
    description:
      "RESTful and GraphQL API design, microservices architecture, and robust backend systems for high-traffic applications.",
  },
  {
    number: "07",
    title: "Security & Compliance",
    description:
      "Application security audits, penetration testing, GDPR compliance, and secure development lifecycle implementation.",
  },
  {
    number: "08",
    title: "AI & Automation",
    description:
      "Machine learning integrations, intelligent automation workflows, and AI-powered features for modern applications.",
  },
];

export type TechTeamMember = {
  initials: string;
  name: string;
  role: string;
  description: string;
  photoUrl?: string;
};

export const techTeam: TechTeamMember[] = [
  {
    initials: "FA",
    name: "Fadhil",
    role: "Founder & Chief Executive Officer (CEO)",
    description: "Visionary leader driving company growth and strategic IT initiatives excellently.",
  },
  {
    initials: "IJ",
    name: "Ijas",
    role: "Founder & Chief Operating Officer (COO)",
    description: "Exceptional operational strategist executing company plans with flawless precision.",
  },
  {
    initials: "AA",
    name: "Amnas Ali",
    role: "Developer",
    description: "Highly skilled developer engineering high-performance, flawless technical solutions.",
  },
  {
    initials: "MS",
    name: "Muhammed Salman",
    role: "Developer",
    description: "Expert full-stack developer building robust, innovative applications effortlessly.",
  },
];


/** Text and links used by the Cubixmet Tech venture page. */
export const techCopy = {
  "metadata": {
    "title": "Cubixmet Tech | Build. Deploy. Scale.",
    "description": "End-to-end technology solutions from Cubixmet Tech: software development, product engineering, cloud, APIs, security, AI and technical consulting."
  },
  "verticalLabel": "Technology Vertical",
  "brandPrefix": "Cubixmet",
  "brandSuffix": "Tech",
  "tagline": "Build. Deploy. Scale.",
  "intro": "End-to-end software solutions from product engineering to technical consulting. We build technology that scales with your ambition.",
  "servicesLabel": "What We Build",
  "servicesTitle": "Technology that moves businesses forward.",
  "servicesDescription": "Comprehensive technology services engineered for performance, scalability, and growth.",
  "approachLabel": "Web Development",
  "approachTitle": "Engineering Excellence.",
  "approachDescription": "Every project is built with clean architecture, automated testing, and production-ready deployment pipelines.",
  "approachItems": [
    "Clean architecture",
    "Automated testing",
    "Production-ready deployment",
    "Reliable, scalable delivery"
  ],
  "teamLabel": "The Tech Team",
  "teamTitle": "People behind the technology.",
  "teamDescription": "Engineers, architects, and problem-solvers dedicated to building your next big thing.",
  "heroCaption": "Software. Cloud. Innovation.",
  "ctaLabel": "Ready to Build?",
  "ctaTitle": "Let's turn your vision into a scalable, production-ready product.",
  "startProjectLabel": "Start a Project",
  "brochureHref": "/brochures/cubixmet-tech.pdf",
  "brochureName": "cubixmet-tech.pdf",
  "brochureLabel": "Download Tech Brochure (PDF)"
} as const;
