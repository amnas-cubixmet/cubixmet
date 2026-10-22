import type { AcademyCoursePageContent } from "./common";
import { whatsappLink } from "../site";

export const enrollUrl = whatsappLink("Hi Cubixmet Academy, I'm interested in the Graphic Designing & Content Creation Program (AI Integrated). Please share fees, batch timings and enrollment details.");

export const brochureUrl = "/brochures/cubixmet-academy.pdf";
export const allProgramsUrl = "/ventures/academy#programs";

export const highlights = [
  "AI-Powered Design & Content Creation",
  "Real Client Project Exposure",
  "Industry-Oriented Practical Training",
  "Portfolio Development",
  "Marketing & Personal Branding Skills",
  "Spoken English for Professionals",
];

export const curriculum = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: "design",
    description: "Build visual design skills, brand identities, and digital creative assets.",
    topics: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "CorelDRAW",
      "Logo Designing",
      "Brand Identity Design",
      "Social Media Creatives",
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing & Motion Graphics",
    icon: "video",
    description: "Learn professional editing workflows for digital video and motion.",
    topics: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "DaVinci Resolve",
      "CapCut",
      "Reel & Short Video Creation",
    ],
  },
  {
    id: "ai-tools",
    title: "AI Tools for Creators",
    icon: "ai",
    description: "Apply modern AI tools to visual creation and day-to-day workflows.",
    topics: [
      "AI Image Generation",
      "AI Content Creation",
      "AI Design Workflows",
      "Productivity & Automation Tools",
    ],
  },
  {
    id: "photography",
    title: "Photography & Content Creation",
    icon: "camera",
    description: "Plan, shoot, and tell stories through compelling visuals.",
    topics: [
      "Basic Photography",
      "Mobile Photography Techniques",
      "Content Planning",
      "Visual Storytelling",
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Business Skills",
    icon: "growth",
    description: "Understand how to market creative work and engage real clients.",
    topics: [
      "Digital Marketing Basics",
      "Social Media Marketing Techniques",
      "Personal Branding",
      "Client Handling",
      "Freelancing Fundamentals",
    ],
  },
  {
    id: "communication",
    title: "Communication Skills",
    icon: "communication",
    description: "Build confidence in professional conversations and presentations.",
    topics: [
      "Spoken English",
      "Professional Communication",
      "Presentation Skills",
    ],
  },
  {
    id: "real-work",
    title: "Real Work Training Exposure",
    icon: "projects",
    description: "Practice industry workflows and assemble portfolio-ready work.",
    topics: [
      "Work on Live Projects",
      "Agency-Style Training",
      "Portfolio Building",
      "Internship-Like Experience",
      "Industry Workflows & Client Briefs",
    ],
  },
] as const;

export const eligibleLearners = [
  "Students",
  "Working Professionals",
  "Freelancers",
  "Business Owners",
  "Content Creators",
  "Aspiring Graphic Designers",
];

export type CurriculumIconName = (typeof curriculum)[number]["icon"];


/** Course-specific presentation text and media. */
export const coursePage = {
  "metadata": {
    "title": "Graphic Designing & Content Creation | Cubixmet Academy",
    "description": "Explore Cubixmet Academy's 6-month Graphic Designing & Content Creation Program (AI Integrated): design, video editing, AI tools, photography, branding, marketing, communication and live projects."
  },
  "breadcrumb": "Graphic Designing & Content Creation",
  "headlineBefore": "Graphic Designing",
  "headlineEmphasis": "&",
  "headlineAfter": "Content Creation",
  "headlineSubtitle": "Program (AI Integrated)",
  "tagline": "Create. Design. Edit. Market. Earn.",
  "intro": "Turn your creativity into a career. Master the most in-demand design, video editing, branding, and content creation skills with real-world project experience.",
  "heroImage": "/images/ventures/academy-hero.png",
  "heroImageAlt": "Students collaborating on a laptop during a Cubixmet Academy training session",
  "heroBadge": "Learn by Building",
  "heroCaption": "Create something extraordinary.",
  "highlightsDescription": "Creative skills, business understanding, and practical training in one intensive program.",
  "curriculumDescription": "Explore design, editing, AI tools, photography, marketing, communication, and real-world practice.",
  "learnerHeading": "Your next creative chapter starts here.",
  "learnerDescription": "Whether you are starting your career or expanding your skills, explore the techniques and workflows behind professional creative projects.",
  "ctaHeading": "Ready to turn your creativity into a career?",
  "ctaDescription": "Get course fees, batch timings, and enrollment guidance directly from the Cubixmet Academy team."
} satisfies AcademyCoursePageContent;
