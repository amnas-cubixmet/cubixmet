import type { AcademyCoursePageContent } from "./common";

export const enrollUrl =
  "https://wa.me/918921592742?text=" +
  encodeURIComponent(
    "Hi Cubixmet Academy, I'm interested in the Advanced Digital Marketing & Automation Program. Please share course fees, batch timings and enrollment details."
  );

export const brochureUrl = "/brochures/cubixmet-academy.pdf";
export const allProgramsUrl = "/ventures/academy#programs";

export const highlights = [
  "WordPress Websites & Sales Funnels",
  "SEO & Organic Lead Generation",
  "Meta, Google & YouTube Ads",
  "CRM, Automation & Analytics",
  "Real Campaign & Project Experience",
  "Professional Communication Skills"
];

export const curriculum = [
  {
    "id": "wordpress-funnels",
    "title": "WordPress Web Designing & Sales Funnels",
    "icon": "website",
    "description": "Create websites, landing pages, lead-capture systems and conversion-focused funnels.",
    "topics": [
      "WordPress Website Development",
      "Landing Page Design",
      "Sales Funnel Creation",
      "Lead Capture Systems",
      "Conversion Optimization"
    ]
  },
  {
    "id": "content-creative",
    "title": "Content Creation & Creative Design",
    "icon": "content",
    "description": "Plan engaging content and develop brand-focused creative assets.",
    "topics": [
      "Social Media Content Creation",
      "Graphic Design Fundamentals",
      "AI-Powered Content Creation",
      "Reels & Video Marketing",
      "Creative Branding Strategies"
    ]
  },
  {
    "id": "organic-seo",
    "title": "Content Marketing & Organic SEO",
    "icon": "seo",
    "description": "Develop search visibility and organic content strategies.",
    "topics": [
      "Search Engine Optimization (SEO)",
      "Keyword Research",
      "Blog Content Strategy",
      "Local SEO",
      "Website Ranking Techniques",
      "Organic Lead Generation"
    ]
  },
  {
    "id": "performance-marketing",
    "title": "Performance Marketing",
    "icon": "ads",
    "description": "Set up, test and optimize paid campaigns for business objectives.",
    "topics": [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads",
      "YouTube Advertising",
      "Lead Generation Campaigns",
      "Remarketing Strategies",
      "Campaign Optimization & Scaling"
    ]
  },
  {
    "id": "automation-analytics",
    "title": "Marketing Automation & Analytics",
    "icon": "automation",
    "description": "Connect CRM, automated customer journeys and measurement workflows.",
    "topics": [
      "CRM Management",
      "Email Marketing Automation",
      "WhatsApp Automation",
      "Lead Nurturing Funnels",
      "Google Analytics",
      "Conversion Tracking",
      "Marketing Reports & Data Analysis"
    ]
  },
  {
    "id": "communication",
    "title": "Professional Communication & Spoken English",
    "icon": "communication",
    "description": "Practice client-facing communication and workplace presentation skills.",
    "topics": [
      "Business Communication",
      "Client Interaction Skills",
      "Presentation Techniques",
      "Spoken English for Professionals",
      "Interview & Workplace Communication"
    ]
  },
  {
    "id": "industry-exposure",
    "title": "Practical Training & Industry Exposure",
    "icon": "training",
    "description": "Build experience through real-world projects and hands-on campaign practice.",
    "topics": [
      "Real Campaign Setup",
      "Live Project Experience",
      "Portfolio Development",
      "Client-Based Assignments",
      "Industry Best Practices",
      "Career & Freelancing Guidance"
    ]
  }
] as const;

export const eligibleLearners = [
  "Students",
  "Working Professionals",
  "Business Owners",
  "Entrepreneurs",
  "Freelancers",
  "Marketing Aspirants"
];

export type CurriculumIconName = (typeof curriculum)[number]["icon"];


/** Course-specific presentation text and media. */
export const coursePage = {
  "metadata": {
    "title": "Advanced Digital Marketing & Automation | Cubixmet Academy",
    "description": "Learn WordPress, lead generation, sales funnels, SEO, Meta Ads, Google Ads, video marketing, CRM, analytics and real campaigns in Cubixmet Academy's 6-month digital marketing course."
  },
  "breadcrumb": "Advanced Digital Marketing & Automation",
  "headlineBefore": "Advanced",
  "headlineEmphasis": "Digital Marketing",
  "headlineAfter": "& Automation Program",
  "tagline": "Learn. Automate. Optimize. Scale.",
  "intro": "Learn how to attract the right audience, generate quality leads, run profitable ad campaigns, and build automated marketing systems that work 24/7.",
  "heroImage": "/images/ventures/digital-hero.png",
  "heroImageAlt": "Digital marketing professionals collaborating on campaigns, content and creative strategy",
  "heroBadge": "Marketing in Practice",
  "heroCaption": "Learn. Automate. Scale.",
  "highlightsDescription": "Advertising, SEO, automation, analytics and campaign training in one intensive program.",
  "curriculumDescription": "Explore WordPress, content creation, SEO, paid advertising, analytics, automation, communication, and live campaigns.",
  "learnerHeading": "Your marketing journey starts here.",
  "learnerDescription": "Whether you are starting a career or growing a business, learn practical digital marketing strategies and workflows used by modern teams.",
  "ctaHeading": "Ready to build marketing skills that drive growth?",
  "ctaDescription": "Get course fees, batch timings, and enrollment guidance directly from the Cubixmet Academy team."
} satisfies AcademyCoursePageContent;
