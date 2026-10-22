export const academyPhone = "918921592742";

export const whatsappLink = (message: string) =>
  `https://wa.me/${academyPhone}?text=${encodeURIComponent(message)}`;

export const generalEnrollUrl = whatsappLink(
  "Hi Cubixmet Academy, I'm interested in enrolling in your next batch. Please share the program details and admission process."
);

export const programs = [
  {
    id: "graphic-design",
    href: "/ventures/academy/graphic-designing-content-creation",
    type: "design" as const,
    duration: "6 Months",
    title: "Graphic Designing & Content Creation Program (AI Integrated)",
    description:
      "Turn your creativity into a career. Master the most in-demand design, video editing, branding, and content creation skills with real-world project experience.",
    topics: [
      "Adobe Photoshop, Illustrator & CorelDRAW",
      "Premiere Pro, After Effects & Reels",
      "AI Image Generation & Design Workflows",
      "Live Projects & Portfolio Development",
    ],
    detail:
      "Develop visual identities, graphic assets, content, and motion-based creative work while building a practical portfolio with AI-assisted design workflows.",
  },
  {
    id: "digital-marketing",
    href: "/ventures/academy/advanced-digital-marketing-automation",
    type: "marketing" as const,
    duration: "6 Months",
    title: "Advanced Digital Marketing & Automation Program",
    description:
      "Learn how to attract the right audience, generate quality leads, run profitable ad campaigns, and build automated marketing systems that work 24/7.",
    topics: [
      "WordPress & Sales Funnel Design",
      "SEO & Organic Content Marketing",
      "Meta, Google & YouTube Ads",
      "Marketing Automation & CRM",
    ],
    detail:
      "Plan and optimize marketing campaigns, build lead-generation funnels, study search and advertising channels, and practice automated customer journeys.",
  },
  {
    id: "python-full-stack",
    href: "/ventures/academy/python-full-stack-development-ai-vibe-coding",
    type: "code" as const,
    duration: "6 Months",
    title: "Python Full Stack Development & AI Vibe Coding",
    description:
      "Master full-stack development using Python and modern frontend technologies while leveraging AI tools, agentic workflows, and cloud deployment practices used by today's software teams.",
    topics: [
      "Python, Django & REST API Development",
      "React.js & Responsive UI Development",
      "AI-Assisted & Agentic Workflows",
      "Docker, CI/CD & Cloud Deployment",
    ],
    detail:
      "Build and deploy end-to-end applications, connect frontend and backend systems, and use AI-assisted development approaches in practical projects.",
  },
];

export const benefits = [
  {
    icon: "curriculum" as const,
    title: "Industry-Ready Curriculum",
    copy: "Programs designed with input from hiring managers and industry experts.",
  },
  {
    icon: "certificate" as const,
    title: "Certification",
    copy: "Recognized certificates upon course completion to boost your career profile.",
  },
  {
    icon: "projects" as const,
    title: "Hands-On Projects",
    copy: "Build real-world portfolio projects throughout every program.",
  },
  {
    icon: "flexible" as const,
    title: "Flexible Learning",
    copy: "Weekend and evening batches available for working professionals.",
  },
];

export type BenefitIcon = typeof benefits[number]["icon"];
export type ProgramIcon = typeof programs[number]["type"];


export const team = [
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
    initials: "VA",
    name: "Vafa",
    role: "Founder & Chief Product Officer (CPO)",
    description: "Mastermind of impactful product strategy and academy development operations.",
  },
];

