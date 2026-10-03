export type Project = {
  id: string;
  name: string;
  category: "Dynamic Website" | "Digital Marketing";
  description: string;
  tags: string[];
  image: string;
};

export const projects: Project[] = [
  {
    id: "zcards-web",
    name: "Zcards",
    category: "Dynamic Website",
    description:
      "Sleek, conversion-optimized marketing website deployed on Vercel with modern frontend architecture.",
    tags: ["Marketing", "Vercel", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=84",
  },
  {
    id: "alawamer-web",
    name: "Alawamer",
    category: "Dynamic Website",
    description:
      "Advanced LMS and marketing portal featuring a fully customizable admin dashboard for public content control.",
    tags: ["Marketing", "LMS", "Custom Admin"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=84",
  },
  {
    id: "infozerv-web",
    name: "Infozerv",
    category: "Dynamic Website",
    description:
      "Comprehensive corporate platform integrating marketing strategies, robust ERP management, and mobile app ecosystems.",
    tags: ["Marketing", "ERP", "Mobile App"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=84",
  },
  {
    id: "almohanna-web",
    name: "Almohanna SA",
    category: "Dynamic Website",
    description:
      "High-performance E-commerce platform engineered for seamless digital retail and secure transactions.",
    tags: ["E-commerce", "Retail", "Web Development"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=84",
  },
  {
    id: "krispfruit-web",
    name: "Krispfruit",
    category: "Dynamic Website",
    description:
      "Premium E-commerce storefront built with installable web application features for mobile users.",
    tags: ["E-commerce", "PWA", "Installable App"],
    image:
      "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1200&q=84",
  },
  {
    id: "krispfruit-digital",
    name: "Krispfruit",
    category: "Digital Marketing",
    description:
      "End-to-end digital marketing for a premium fruit brand — social media campaigns, paid ads, and conversion-focused content.",
    tags: ["Social Media", "Paid Ads", "Brand Growth"],
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=84",
  },
  {
    id: "nest-rehab-web",
    name: "Nest Rehab Care",
    category: "Dynamic Website",
    description:
      "Healthcare-focused marketing application seamlessly unified with a custom ERP management system.",
    tags: ["Marketing", "ERP", "Healthcare"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=84",
  },
  {
    id: "nest-rehab-digital",
    name: "Nest Rehab Care",
    category: "Digital Marketing",
    description:
      "Healthcare digital marketing strategy driving patient awareness, lead generation, and community engagement online.",
    tags: ["Healthcare Marketing", "Lead Generation", "SEO"],
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=84",
  },
  {
    id: "toicafe-digital",
    name: "ToiCafe",
    category: "Digital Marketing",
    description:
      "Cafe brand digital marketing with social media storytelling, local reach campaigns, and engagement-driven content.",
    tags: ["Social Media", "Local Marketing", "Brand Awareness"],
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=84",
  },
  {
    id: "finecrafts-web",
    name: "Finecrafts Garage",
    category: "Dynamic Website",
    description:
      "Automotive service marketing portal combined with a powerful backend ERP system for workshop operations.",
    tags: ["Marketing", "ERP", "Automotive"],
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=84",
  },
  {
    id: "traventurous-web",
    name: "Traventurous",
    category: "Dynamic Website",
    description:
      "Visually stunning marketing platform tailored for experiential travel adventures and user engagement.",
    tags: ["Marketing", "Adventure", "Web Design"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=84",
  },
];
