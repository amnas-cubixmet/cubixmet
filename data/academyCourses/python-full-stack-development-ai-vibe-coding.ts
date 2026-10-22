export const enrollUrl =
  "https://wa.me/918921592742?text=" +
  encodeURIComponent(
    "Hi Cubixmet Academy, I'm interested in the Python Full Stack Development & AI Vibe Coding program. Please share course fees, batch timings and enrollment details."
  );

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

