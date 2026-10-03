export type Service = {
  no: string;
  title: string;
  copy: string;
  meta: string[];
  image: string;
};

export const services: Service[] = [
  {
    no: "01",
    title: "Web & App Development",
    copy: "Full-stack web apps, SPAs, progressive web applications and digital platforms built with modern frameworks for performance and scale.",
    meta: ["Full-stack Web Apps", "SPAs & PWAs", "Frontend Development", "Backend & API", "Cloud Deployment"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=82",
  },
  {
    no: "02",
    title: "Product Engineering",
    copy: "End-to-end product development from early ideation and UX through engineering, deployment and long-term scaling.",
    meta: ["Product Strategy", "UI / UX Design", "MVP Development", "System Architecture", "Scale & Optimization"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=82",
  },
  {
    no: "03",
    title: "Digital Marketing",
    copy: "Integrated digital campaigns designed to attract the right audience, build visibility and convert attention into measurable growth.",
    meta: ["Social Media Management", "Paid Advertising", "Campaign Strategy", "Lead Generation", "Marketing Automation"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=82",
  },
  {
    no: "04",
    title: "Brand Growth",
    copy: "Data-backed positioning, performance marketing and conversion strategy built to strengthen brands and accelerate market growth.",
    meta: ["Brand Growth Strategy", "Performance Marketing", "Conversion Funnels", "Google & Meta Ads", "Market Penetration"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=82",
  },
  {
    no: "05",
    title: "Creative & Content",
    copy: "Graphic design, content systems and campaign-ready visual communication created for modern brands across digital channels.",
    meta: ["Graphic Design", "Content Creation", "Branding", "Video Editing", "AI-assisted Creative"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=82",
  },
  {
    no: "06",
    title: "Tech & AI Training",
    copy: "Practical career-focused learning in digital marketing, Python full stack development, AI tools and modern automation workflows.",
    meta: ["Python Full Stack", "AI Vibe Coding", "Digital Marketing", "Automation", "Project-based Learning"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=82",
  },
];
