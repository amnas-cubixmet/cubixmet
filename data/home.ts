export type Project = {
  name: string;
  type: string;
  size: "wide" | "small";
  image: string;
};

export type ProcessStep = [string, string, string];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export type Leader = {
  name: string;
  role: string;
  copy: string;
  image: string;
};

export type Insight = [string, string];

export type Venture = {
  name: string;
  tagline: string;
  copy: string;
  services: string[];
  href: string;
  icon: "tech" | "digital" | "academy";
};


export const aboutContent = {
  label: "About us",
  title: "Where Strategy Meets Scale",
  description:
    "Based in Pandikkad, Malappuram, Cubixmet is more than a company — it's a structured growth platform and innovation ecosystem serving businesses and students across Manjeri, Perinthalmanna, and all of Kerala with technology, marketing, and education solutions.",
};

export const aboutPillars = [
  {
    title: "Venture Studio",
    copy: "Multi-vertical approach to innovation across tech, marketing & education.",
    icon: "layers",
  },
  {
    title: "Innovation Ecosystem",
    copy: "Cross-functional expertise powering interconnected growth.",
    icon: "orbit",
  },
  {
    title: "Structured Growth",
    copy: "Data-driven, ethical growth model built for long-term impact.",
    icon: "chart",
  },
  {
    title: "Long-term Vision",
    copy: "Partnership-first mindset with transparent and ethical practices.",
    icon: "vision",
  },
] as const;

export const aboutStats = [
  ["4x", "Faster design-to-build workflow"],
  ["2x", "Lean collaborative process"],
  ["100%", "Responsive by default"],
] as const;

export const aboutTags = [
  "Results driven solutions",
  "Strategic experiences",
  "Purposeful design",
] as const;

export const projects: Project[] = [
  {
    name: "Northframe",
    type: "Branding / Strategy",
    size: "wide",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=84",
  },
  {
    name: "Kleid.in",
    type: "Website",
    size: "small",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=84",
  },
  {
    name: "Skylora",
    type: "App Development",
    size: "small",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=84",
  },
  {
    name: "CubixGear",
    type: "Web Development",
    size: "wide",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=84",
  },
];

export const process: ProcessStep[] = [
  ["01", "Discovery", "We understand the business, users, goals and the problem worth solving."],
  ["02", "Ideas & Concepts", "We define the creative and technical direction before production starts."],
  ["03", "Design", "We shape clear, responsive interfaces with a strong visual system."],
  ["04", "Development", "We build, test and refine the experience for speed and reliability."],
];

export const marqueeItems = ["Digital Products", "Brand Systems", "Web Experiences"] as const;

export const testimonials: Testimonial[] = [
  {
    quote: "The team understood our direction quickly and turned it into a clean, focused digital experience that feels genuinely premium.",
    name: "Shane Watson",
    role: "Founder / Director",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote: "The process was clear from strategy through delivery. Communication stayed sharp and every design decision had a reason behind it.",
    name: "Valentina Syunko",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote: "We needed a stronger digital presence without losing the character of our brand. Cubixmet gave us exactly that balance.",
    name: "Shane Wilson",
    role: "CEO & Founder",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote: "Our new website feels faster, clearer and much more aligned with the way we want customers to experience the brand.",
    name: "Adam Miller",
    role: "Managing Partner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote: "Cubixmet helped us simplify a complicated product journey and turn it into an interface our users understand immediately.",
    name: "Maya Thomas",
    role: "Product Lead",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote: "The branding system gave our team a much stronger foundation. Everything now feels consistent across web, social and sales.",
    name: "Daniel Brooks",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote: "They moved quickly without cutting corners. The final product is polished, responsive and easy for our internal team to manage.",
    name: "Olivia Carter",
    role: "Operations Manager",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote: "From the first workshop to launch, the team kept the project focused and made every stage feel straightforward.",
    name: "Ethan Cooper",
    role: "Co-Founder",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote: "The design direction finally gave our product the confidence it was missing. Customers noticed the improvement immediately.",
    name: "Sophia Bennett",
    role: "Brand Manager",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote: "We appreciated the practical thinking behind the work. It looks strong, performs well and supports our business goals.",
    name: "Liam Anderson",
    role: "Business Director",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=120&q=80",
  },
];

export const leaders: Leader[] = [
  {
    name: "Alex Showrob",
    role: "Project Manager",
    copy: "Alex is a results-driven project lead focused on clarity, momentum and smooth delivery across creative and technical teams.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=84",
  },
  {
    name: "Alex Showrob",
    role: "Project Manager",
    copy: "Alex brings structure to every project, keeping strategy, design and development aligned from first discussion to final launch.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=84",
  },
  {
    name: "Alex Showrob",
    role: "Project Manager",
    copy: "Alex works closely with clients and the studio team to turn complex requirements into focused, practical digital outcomes.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=84",
  },
];

export const insights: Insight[] = [
  ["Design", "How sharper UX decisions improve conversion without adding more screens."],
  ["Technology", "Why modern websites should feel fast before they look impressive."],
  ["Growth", "Building a digital brand system that stays consistent while you scale."],
];


export const ventures: Venture[] = [
  {
    name: "Cubixmet Tech",
    tagline: "Build. Deploy. Scale.",
    copy: "End-to-end software solutions from product engineering to technical consulting.",
    services: [
      "Web & Application Development",
      "Product Engineering",
      "Custom Software Solutions",
      "Technical Consulting",
    ],
    href: "https://www.cubixmet.com/ventures/tech",
    icon: "tech",
  },
  {
    name: "Cubixmet Digital",
    tagline: "Strategize. Market. Convert.",
    copy: "Data-driven digital marketing and brand growth strategies that deliver results.",
    services: [
      "Social Media Management",
      "Paid Advertising",
      "Brand Growth Strategy",
      "Performance Marketing",
    ],
    href: "https://www.cubixmet.com/ventures/digital",
    icon: "digital",
  },
  {
    name: "Cubixmet Academy",
    tagline: "Learn. Build. Launch.",
    copy: "Career transformation programs designed to create industry-ready professionals.",
    services: [
      "Graphic Designing & Content Creation Program (AI Integrated)",
      "Advanced Digital Marketing & Automation Program",
      "Python Full Stack Development & AI Vibe Coding",
    ],
    href: "https://www.cubixmet.com/ventures/academy",
    icon: "academy",
  },
];
