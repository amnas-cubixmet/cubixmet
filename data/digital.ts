import { whatsappLink } from "./site";

export const whatsappUrl = whatsappLink("Hi Cubixmet Digital, I'd like to grow my brand. Please share the next steps.");

export const digitalServices = [
  {
    icon: "social",
    title: "Social Media Management",
    description: "End-to-end social presence across Instagram, LinkedIn, Facebook, X, and emerging platforms with content strategy and community management.",
  },
  {
    icon: "ads",
    title: "Paid Advertising",
    description: "ROI-driven ad campaigns across Google Ads, Meta Ads, LinkedIn Ads, and programmatic platforms with continuous optimization.",
  },
  {
    icon: "strategy",
    title: "Brand Growth Strategy",
    description: "Data-backed brand positioning, market research, competitive analysis, and go-to-market strategies for sustained growth.",
  },
  {
    icon: "performance",
    title: "Performance Marketing",
    description: "Conversion-optimized funnels, A/B testing, attribution modeling, and campaigns designed for measurable business outcomes.",
  },
  {
    icon: "content",
    title: "Content Marketing",
    description: "Blog strategy, copywriting, video scripts, and thought leadership content that builds authority and drives organic traffic.",
  },
  {
    icon: "search",
    title: "SEO & SEM",
    description: "Technical SEO audits, keyword strategy, on-page optimization, and search engine marketing for maximum visibility.",
  },
  {
    icon: "email",
    title: "Email Marketing",
    description: "Automated email sequences, newsletter design, segmentation, and lifecycle marketing campaigns.",
  },
  {
    icon: "creative",
    title: "Video & Creative",
    description: "Motion graphics, social video content, ad creatives, and visual storytelling that captures attention.",
  },
] as const;

export const team = [
  {
    initials: "FA",
    name: "Fadhil",
    role: "Founder & Chief Executive Officer (CEO)",
    description: "Visionary leader driving company growth and strategic IT initiatives excellently.",
  },
  {
    initials: "SH",
    name: "Shahid",
    role: "Founder & Managing Director",
    description: "Strategic powerhouse strengthening long-term growth and business development masterfully.",
  },
  {
    initials: "NA",
    name: "Najid",
    role: "Head of Digital Marketing",
    description: "Brilliant digital marketing lead driving unparalleled brand growth consistently.",
  },
];


/** Page content for the Digital venture. */
export const digitalCopy = {
  "metadata": {
    "title": "Cubixmet Digital | Strategize. Market. Convert.",
    "description": "Data-driven digital marketing, paid advertising, content, SEO, brand strategy and growth solutions from Cubixmet Digital."
  },
  "verticalLabel": "Digital Marketing Vertical",
  "brandPrefix": "Cubixmet",
  "brandSuffix": "Digital",
  "tagline": "Strategize. Market. Convert.",
  "intro": "Data-driven digital marketing and brand growth strategies that deliver measurable results and lasting impact.",
  "heroImage": "/images/ventures/digital-hero.png",
  "heroImageAlt": "Cubixmet Digital creative marketing team collaborating in a professional studio",
  "servicesLabel": "How We Grow Brands",
  "servicesTitle": "Marketing that makes an impact.",
  "servicesDescription": "Full-spectrum digital marketing services designed to amplify your reach and convert audiences.",
  "approachLabel": "Digital Marketing",
  "approachTitle": "Data-Driven Growth.",
  "approachDescription": "Every campaign is backed by analytics, A/B testing, and continuous optimization for maximum ROI.",
  "approachItems": [
    "Analytics & insights",
    "A/B testing",
    "Campaign optimization",
    "Performance reporting"
  ],
  "teamLabel": "The Digital Team",
  "teamTitle": "People behind the growth.",
  "teamDescription": "Strategists, creatives, and data analysts who turn brands into market leaders.",
  "ctaLabel": "Ready to Grow?",
  "ctaTitle": "Let's craft a marketing strategy that drives real business results.",
  "growLabel": "Grow Your Brand",
  "brochureHref": "/brochures/cubixmet-digital.pdf",
  "brochureName": "cubixmet-digital.pdf",
  "brochureLabel": "Download Digital Brochure (PDF)"
} as const;
