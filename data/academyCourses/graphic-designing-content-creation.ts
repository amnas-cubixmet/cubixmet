export const enrollUrl =
  "https://wa.me/918921592742?text=" +
  encodeURIComponent(
    "Hi Cubixmet Academy, I'm interested in the Graphic Designing & Content Creation Program (AI Integrated). Please share fees, batch timings and enrollment details."
  );

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

