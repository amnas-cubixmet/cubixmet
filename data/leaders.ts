export type Leader = {
  initials: string;
  name: string;
  role: string;
  copy: string;
  href: string;
};

export type TeamMember = {
  initials: string;
  name: string;
  role: string;
};

export const leaders: Leader[] = [
  {
    initials: "FA",
    name: "Fadhil",
    role: "Founder & Chief Executive Officer (CEO)",
    copy: "Visionary leader driving company growth and strategic IT initiatives excellently.",
    href: "#",
  },
  {
    initials: "SH",
    name: "Shahid",
    role: "Founder & Managing Director",
    copy: "Strategic powerhouse strengthening long-term growth and business development masterfully.",
    href: "#",
  },
  {
    initials: "IJ",
    name: "Ijas",
    role: "Founder & Chief Operating Officer (COO)",
    copy: "Exceptional operational strategist executing company plans with flawless precision.",
    href: "#",
  },
];


export const teamMembers: TeamMember[] = [
  {
    initials: "VA",
    name: "Vafa",
    role: "Founder & Chief Product Officer (CPO)",
  },
  {
    initials: "NA",
    name: "Najid",
    role: "Head of Digital Marketing",
  },
  {
    initials: "AA",
    name: "Amnas Ali",
    role: "Developer",
  },
  {
    initials: "MS",
    name: "Muhammed Salman",
    role: "Developer",
  },
];
