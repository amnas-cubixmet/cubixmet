import type { AcademyCoursePageContent } from "./common";
import { whatsappLink } from "../site";

export const enrollUrl = whatsappLink("Hi Cubixmet Academy, I'm interested in the Python Full Stack Development & AI Vibe Coding program. Please share course fees, batch timings and enrollment details.");

export const brochureUrl = "/brochures/cubixmet-academy.pdf";
export const allProgramsUrl = "/ventures/academy#programs";

export const highlights = [
  "Python & Django Backend Engineering",
  "Modern React Frontend Development",
  "AI Vibe Coding & Agentic Workflows",
  "Docker, CI/CD & Cloud Deployment",
  "Live Projects & Code Reviews",
  "Professional Skills & Career Guidance"
];
export const curriculum = [
  {
    "id": "backend-engineering",
    "title": "Backend Engineering",
    "icon": "backend",
    "description": "Develop secure Python backends, REST APIs and database-driven applications.",
    "topics": [
      "Python Programming Fundamentals",
      "Django Framework",
      "REST API Development",
      "Database Design & Management",
      "PostgreSQL & SQL",
      "Authentication & Authorization",
      "Backend Architecture",
      "API Integration",
      "Real-World Project Development"
    ]
  },
  {
    "id": "frontend-development",
    "title": "Frontend & UI Development",
    "icon": "frontend",
    "description": "Build responsive user interfaces, dashboards and integrated web experiences.",
    "topics": [
      "HTML5, CSS3 & JavaScript",
      "Responsive Web Design",
      "Modern UI/UX Principles",
      "React.js Fundamentals",
      "Component-Based Development",
      "API Integration with Frontend",
      "Dashboard Development",
      "Progressive Web Applications (PWA)"
    ]
  },
  {
    "id": "ai-vibe-coding",
    "title": "AI Vibe Coding & Agentic Workflows",
    "icon": "ai",
    "description": "Apply AI coding tools, prompt engineering and agentic approaches to software creation.",
    "topics": [
      "AI-Assisted Development",
      "Prompt Engineering for Developers",
      "AI Coding Tools & Productivity",
      "Agentic Workflows",
      "Building AI-Powered Applications",
      "AI API Integration",
      "Automation with AI Agents",
      "Rapid Application Development",
      "AI-Based Debugging & Optimization"
    ]
  },
  {
    "id": "devops-cloud",
    "title": "DevOps & Cloud Deployment",
    "icon": "cloud",
    "description": "Learn development operations, cloud deployment, production security and monitoring.",
    "topics": [
      "Git & GitHub",
      "Linux Server Fundamentals",
      "Docker & Containerization",
      "CI/CD Concepts",
      "Cloud Deployment",
      "Domain & Hosting Setup",
      "Application Monitoring",
      "Security Best Practices",
      "Production Deployment"
    ]
  },
  {
    "id": "real-work",
    "title": "Real Work Training Exposure",
    "icon": "projects",
    "description": "Build portfolio-ready software through collaborative team and real-project workflows.",
    "topics": [
      "Live Project Development",
      "Industry-Oriented Coding Practices",
      "Team Collaboration Workflows",
      "Portfolio Building",
      "Code Reviews & Best Practices",
      "Real Client Project Exposure",
      "Internship-Style Learning Environment"
    ]
  },
  {
    "id": "professional",
    "title": "Professional Development",
    "icon": "career",
    "description": "Grow professional communication, interview and career-building skills.",
    "topics": [
      "Technical Communication",
      "Spoken English for IT Professionals",
      "Resume & Portfolio Building",
      "Interview Preparation",
      "Freelancing & Remote Work Guidance"
    ]
  }
] as const;
export const eligibleLearners = [
  "Students",
  "Fresh Graduates",
  "Career Switchers",
  "Freelancers",
  "Entrepreneurs",
  "Aspiring Software Developers"
];

export type CurriculumIconName = (typeof curriculum)[number]["icon"];


/** Course-specific presentation text and media. */
export const coursePage = {
  "metadata": {
    "title": "Python Full Stack Development & AI Vibe Coding | Cubixmet Academy",
    "description": "Learn Python, Django, PostgreSQL, React, AI development, agentic workflows, Docker, CI/CD and cloud deployment in Cubixmet Academy's six-month intensive program."
  },
  "breadcrumb": "Python Full Stack Development & AI Vibe Coding",
  "headlineBefore": "",
  "headlineEmphasis": "Python Full Stack",
  "headlineAfter": "Development & AI Vibe Coding",
  "tagline": "Learn. Build. Deploy. Scale.",
  "intro": "Master full-stack development using Python and modern frontend technologies while leveraging AI tools, agentic workflows, and cloud deployment practices used by today's software teams.",
  "heroImage": "/images/ventures/tech-hero.png",
  "heroImageAlt": "Software developers collaborating on coding and full-stack technology projects",
  "heroBadge": "Software in Practice",
  "heroCaption": "Learn. Build. Deploy.",
  "highlightsDescription": "Software engineering, AI coding workflows, deployment and practical training in one intensive program.",
  "curriculumDescription": "Explore Python backend development, React frontend, AI coding workflows, DevOps, hands-on projects, and professional skills.",
  "learnerHeading": "Your software career starts here.",
  "learnerDescription": "Whether you are starting to code or switching careers, practice the technologies and workflows used in modern software teams.",
  "ctaHeading": "Ready to build and deploy real applications?",
  "ctaDescription": "Get course fees, batch timings, and enrollment guidance directly from the Cubixmet Academy team."
} satisfies AcademyCoursePageContent;
