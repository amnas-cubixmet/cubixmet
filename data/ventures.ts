export type Venture = {
  name: string;
  tagline: string;
  copy: string;
  services: string[];
  href: string;
  icon: "tech" | "digital" | "academy";
};

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
