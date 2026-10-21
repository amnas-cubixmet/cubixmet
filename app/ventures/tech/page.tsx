import type { Metadata } from "next";
import SiteHeader from "../../../components/home/SiteHeader";
import SiteFooter from "../../../components/home/SiteFooter";
import Arrow from "../../../components/home/Arrow";

export const metadata: Metadata = {
  title: "Cubixmet Tech | Build. Deploy. Scale.",
  description:
    "End-to-end technology solutions from Cubixmet Tech: software development, product engineering, cloud, APIs, security, AI and technical consulting.",
};

const techServices = [
  {
    number: "01",
    title: "Web & Application Development",
    description:
      "Full-stack web apps, SPAs, and progressive web applications built with React, Next.js, and modern frameworks. We build scalable, performant applications.",
  },
  {
    number: "02",
    title: "Product Engineering",
    description:
      "End-to-end product lifecycle management from ideation and prototyping to deployment, monitoring, and iteration.",
  },
  {
    number: "03",
    title: "Custom Software Solutions",
    description:
      "Tailored enterprise-grade software engineered for your unique business processes, integrations, and workflows.",
  },
  {
    number: "04",
    title: "Technical Consulting",
    description:
      "Architecture reviews, technology stack assessments, cloud migration planning, and digital transformation advisory.",
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    description:
      "CI/CD pipelines, containerization, Kubernetes orchestration, and cloud infrastructure management on AWS, GCP, and Azure.",
  },
  {
    number: "06",
    title: "API & Backend Development",
    description:
      "RESTful and GraphQL API design, microservices architecture, and robust backend systems for high-traffic applications.",
  },
  {
    number: "07",
    title: "Security & Compliance",
    description:
      "Application security audits, penetration testing, GDPR compliance, and secure development lifecycle implementation.",
  },
  {
    number: "08",
    title: "AI & Automation",
    description:
      "Machine learning integrations, intelligent automation workflows, and AI-powered features for modern applications.",
  },
];

const techTeam = [
  {
    initials: "FA",
    name: "Fadhil",
    role: "Founder & Chief Executive Officer (CEO)",
    description: "Visionary leader driving company growth and strategic IT initiatives excellently.",
  },
  {
    initials: "IJ",
    name: "Ijas",
    role: "Founder & Chief Operating Officer (COO)",
    description: "Exceptional operational strategist executing company plans with flawless precision.",
  },
  {
    initials: "AA",
    name: "Amnas Ali",
    role: "Developer",
    description: "Highly skilled developer engineering high-performance, flawless technical solutions.",
  },
  {
    initials: "MS",
    name: "Muhammed Salman",
    role: "Developer",
    description: "Expert full-stack developer building robust, innovative applications effortlessly.",
  },
];

function DiamondMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-10 w-10 text-[#1677FF] md:h-12 md:w-12">
      <path d="M24 3 45 24 24 45 3 24 24 3Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 3v42M3 24h42" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.2" />
      <path d="m12 24 12-12 12 12-12 12-12-12Z" fill="currentColor" fillOpacity=".24" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function CubixmetTechPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#050505] pt-[60px] text-white md:pt-[68px]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute -right-[15%] -top-36 h-[520px] w-[520px] rounded-full bg-[#1677FF]/10 blur-[115px] md:right-0 md:h-[680px] md:w-[680px]" />
        <div className="relative mx-auto grid w-[calc(100%-40px)] max-w-[1320px] gap-9 pb-16 pt-14 sm:gap-12 md:pb-24 md:pt-20 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,.94fr)] lg:items-center lg:gap-12 xl:gap-16">
          <div>
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-[#1677FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF]" />
              Technology Vertical
            </p>
<<<<<<< HEAD
            <h1 className="max-w-[830px] text-[clamp(3.3rem,8.2vw,7.8rem)] font-semibold leading-[.92] tracking-[-.075em]">
              Cubixmet <span className="text-[#1677FF]">Tech</span>
=======
            <h1 className="flex max-w-full flex-wrap items-baseline gap-x-[.2em] gap-y-1 text-[clamp(2.8rem,6.4vw,6.25rem)] font-semibold leading-[.99] tracking-[-.065em]">
              <span>Cubixmet</span><span className="text-[#1677FF]">Tech.</span>
>>>>>>> 7dc4cc0f31c8c82d7e2606c4dfecfc62c7575e1e
            </h1>
            <p className="mt-5 text-[clamp(1.35rem,2.75vw,2.2rem)] font-medium leading-tight tracking-[-.045em] text-white/90">
              Build. Deploy. Scale.
            </p>
            <p className="mt-5 max-w-[58ch] text-[14px] leading-[1.75] text-white/65 md:text-[16px] md:leading-[1.85]">
              End-to-end software solutions from product engineering to technical consulting.
              We build technology that scales with your ambition.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 md:mt-9">
              <a href="#services" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#1677FF] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#348aff]">
                Our Services <Arrow />
              </a>
              <a href="/#contact" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-6 text-[13px] font-semibold text-white transition-colors hover:border-white/60">
                Start a Project <Arrow />
              </a>
            </div>
          </div>


          <div className="tech-showcase relative isolate min-h-[315px] overflow-hidden rounded-[22px] border border-white/10 bg-[#0b111e] px-5 py-6 sm:min-h-[355px] sm:px-8 md:min-h-[400px] md:py-8">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(rgba(22,119,255,.12) 1px, transparent 1px),linear-gradient(90deg,rgba(22,119,255,.12) 1px,transparent 1px)", backgroundSize: "32px 32px", maskImage: "linear-gradient(to bottom,black,transparent 88%)" }} />
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/3 h-60 w-60 -translate-x-1/2 rounded-full bg-[#1677FF]/15 blur-[70px]" />
            <div className="relative z-10 flex items-center justify-between">
              <DiamondMark />
              <span className="font-mono text-[10px] tracking-[.15em] text-white/50">01 / TECH STACK</span>
            </div>

            <div className="tech-book-scene relative z-10 mx-auto h-[210px] w-full max-w-[450px] sm:h-[260px] md:h-[275px]" aria-label="Technology stack: React, Next.js, and TypeScript">
              <div className="tech-book tech-book-react">
                <div aria-hidden="true" className="tech-book-spine" />
                <span className="tech-book-topline">FRONTEND</span>
                <svg aria-hidden="true" viewBox="0 0 100 100" fill="none" className="tech-book-symbol h-14 w-14">
                  <ellipse cx="50" cy="50" rx="42" ry="16" stroke="currentColor" strokeWidth="4" />
                  <ellipse cx="50" cy="50" rx="42" ry="16" stroke="currentColor" strokeWidth="4" transform="rotate(60 50 50)" />
                  <ellipse cx="50" cy="50" rx="42" ry="16" stroke="currentColor" strokeWidth="4" transform="rotate(120 50 50)" />
                  <circle cx="50" cy="50" r="7" fill="currentColor" />
                </svg>
                <span className="tech-book-name">React</span>
                <span className="tech-book-footer">UI / COMPONENTS</span>
              </div>

              <div className="tech-book tech-book-next">
                <div aria-hidden="true" className="tech-book-spine" />
                <span className="tech-book-topline">FRAMEWORK</span>
                <span aria-hidden="true" className="tech-book-symbol flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/85 text-[32px] font-bold tracking-[-.11em]">N</span>
                <span className="tech-book-name">Next.js</span>
                <span className="tech-book-footer">FULL STACK WEB</span>
              </div>

              <div className="tech-book tech-book-ts">
                <div aria-hidden="true" className="tech-book-spine" />
                <span className="tech-book-topline">LANGUAGE</span>
                <span aria-hidden="true" className="tech-book-symbol flex h-14 w-14 items-center justify-center rounded-lg border border-white/30 bg-[#1677FF] text-[26px] font-bold tracking-[-.05em]">TS</span>
                <span className="tech-book-name">TypeScript</span>
                <span className="tech-book-footer">TYPE SAFE CODE</span>
              </div>
            </div>

            <div className="relative z-10 mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-mono text-[10px] font-medium uppercase tracking-[.13em] text-white/55">
              <span>React</span><span className="text-[#1677FF]">✦</span><span>Next.js</span><span className="text-[#1677FF]">✦</span><span>TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-10 py-20 md:py-28">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1320px]">
          <p className="section-label">What We Build</p>
          <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-[700px] text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[.97] tracking-[-.06em]">Technology that moves businesses forward.</h2>
            <p className="max-w-[420px] text-[14px] leading-[1.8] text-white/55">
              Comprehensive technology services engineered for performance, scalability, and growth.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {techServices.map((service) => (
              <article key={service.number} className="group flex min-h-[240px] flex-col rounded-[18px] border border-white/10 bg-[#0d0d0d] p-6 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#1677FF]/45 md:min-h-[300px]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[13px] font-semibold text-[#1677FF]">{service.number} / 08</span>
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#1677FF]/65 transition-transform group-hover:scale-150" />
                </div>
                <h3 className="mt-9 text-[22px] font-semibold leading-[1.15] tracking-[-.04em] md:text-[24px]">{service.title}</h3>
                <p className="mt-4 text-[13px] leading-[1.75] text-white/55">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a0c10] py-16 md:py-24">
        <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1320px] items-center gap-10 md:grid-cols-[1fr_.85fr] md:gap-20">
          <div>
            <p className="section-label">Web Development</p>
            <h2 className="text-[clamp(2.5rem,4.6vw,5rem)] font-semibold leading-[.97] tracking-[-.06em]">Engineering Excellence.</h2>
            <p className="mt-7 max-w-[590px] text-[14px] leading-[1.85] text-white/60 md:text-[16px]">
              Every project is built with clean architecture, automated testing, and production-ready deployment pipelines.
            </p>
          </div>
          <div className="grid gap-3">
            {["Clean architecture", "Automated testing", "Production-ready deployment", "Reliable, scalable delivery"].map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-[14px] border border-white/10 bg-white/[0.025] px-5 py-4">
                <span className="font-mono text-[12px] text-[#1677FF]">0{index + 1}</span>
                <span className="text-[14px] font-medium text-white/85">{item}</span>
                <span className="ml-auto text-[#1677FF]">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 md:py-28">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1320px]">
          <p className="section-label">The Tech Team</p>
          <h2 className="max-w-[800px] text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[.97] tracking-[-.06em]">
            People behind the technology.
          </h2>
          <p className="mt-6 max-w-[660px] text-[14px] leading-[1.85] text-white/55">
            Engineers, architects, and problem-solvers dedicated to building your next big thing.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techTeam.map((member) => (
              <article key={member.name} className="flex min-h-[260px] flex-col rounded-[18px] border border-white/10 bg-[#0d0d0d] p-6">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-[#1677FF]/30 bg-[#1677FF]/10 text-[17px] font-semibold text-[#1677FF]">{member.initials}</span>
                <h3 className="mt-8 text-[22px] font-semibold tracking-[-.04em]">{member.name}</h3>
                <p className="mt-2 text-[12px] font-semibold leading-[1.5] text-[#1677FF]">{member.role}</p>
                <p className="mt-4 text-[12px] leading-[1.8] text-white/50">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="relative mx-auto w-[calc(100%-40px)] max-w-[1320px] overflow-hidden rounded-[22px] bg-[#1677FF] px-6 py-12 sm:px-10 md:px-14 md:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-40 h-[400px] w-[400px] rounded-full border border-white/20" />
          <p className="relative text-[11px] font-semibold uppercase tracking-[.2em] text-white/75">Ready to Build?</p>
          <h2 className="relative mt-5 max-w-[780px] text-[clamp(2.5rem,5.8vw,5.5rem)] font-semibold leading-[.98] tracking-[-.06em]">Let's turn your vision into a scalable, production-ready product.</h2>
          <div className="relative mt-9 flex flex-wrap gap-3">
            <a href="/#contact" className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-white px-5 text-[13px] font-semibold text-black transition-colors hover:bg-white/85">Start a Project <Arrow /></a>
            <a href="/brochures/cubixmet-Techpdf" download="cubixmet-Techpdf" className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/65 px-5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3" /></svg>
              Download Tech Brochure (PDF)
            </a>
            <a href="https://wa.me/918921592742?text=Hi%20Cubixmet%20Tech%2C%20I%27d%20like%20to%20schedule%20a%20call." target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/65 px-5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10">Schedule a Call <Arrow /></a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
