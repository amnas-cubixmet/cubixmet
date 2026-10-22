/**
 * Shared Academy detail-page presentation labels.
 * Course-specific headings, media, modules and enrollment text live in each course file.
 */
export const academyCourseLabels = {
  parent: "Cubixmet Academy",
  programs: "Programs",
  kicker: "Academy Program",
  duration: "6 Months Intensive Training Program",
  enroll: "Enroll via WhatsApp",
  exploreCurriculum: "Explore Curriculum",
  highlightsLabel: "Why This Program",
  highlightsHeading: "Course Highlights.",
  curriculumLabel: "What You Will Learn",
  curriculumHeading: "Skills you can put to work.",
  audienceLabel: "Who Can Join",
  ctaLabel: "Start Your Journey",
  download: "Download All Programs (PDF)",
  viewAll: "View All Programs",
} as const;

export type AcademyCoursePageContent = {
  metadata: { title: string; description: string };
  breadcrumb: string;
  headlineBefore: string;
  headlineEmphasis: string;
  headlineAfter: string;
  headlineSubtitle?: string;
  tagline: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  heroBadge: string;
  heroCaption: string;
  highlightsDescription: string;
  curriculumDescription: string;
  learnerHeading: string;
  learnerDescription: string;
  ctaHeading: string;
  ctaDescription: string;
};

export type AcademyCurriculumModule = {
  id: string;
  title: string;
  icon: string;
  description: string;
  topics: readonly string[];
};
