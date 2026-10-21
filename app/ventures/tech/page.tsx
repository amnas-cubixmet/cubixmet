import type { Metadata } from "next";
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
    <main className="min-h-screen overflow-x-clip bg-[#050505] text-white">
      <header className="relative z-20 border-b border-white/10 bg-[#050505]">
        <div className="mx-auto flex h-[76px] w-[calc(100%-40px)] max-w-[1320px] items-center justify-between gap-4">
          <a href="/" aria-label="Cubixmet Home" className="text-[17px] font-extrabold tracking-[-0.06em] text-white md:text-xl">
            CUBIXMET<span className="text-[#1677FF]">.</span>
          </a>
          <a href="/#ventures" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-xs font-semibold text-white/80 transition-colors hover:border-[#1677FF] hover:text-white">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="m14 5-7 7 7 7M7 12h13" />
            </svg>
            Back to Home
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute -right-[15%] -top-36 h-[520px] w-[520px] rounded-full bg-[#1677FF]/10 blur-[115px] md:right-0 md:h-[680px] md:w-[680px]" />
        <div className="relative mx-auto grid w-[calc(100%-40px)] max-w-[1320px] gap-12 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.18fr_.82fr] lg:items-center lg:gap-16">
          <div>
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-[#1677FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF]" />
              Technology Vertical
            </p>
            <h1 className="max-w-[830px] text-[clamp(3.3rem,8.2vw,7.8rem)] font-semibold leading-[.92] tracking-[-.075em]">
              Cubixmet <span className="text-[#1677FF]">Tech.</span>
            </h1>
            <p className="mt-6 text-[clamp(1.3rem,2.9vw,2.45rem)] font-medium leading-tight tracking-[-.045em] text-white/90">
              Build. Deploy. Scale.
            </p>
            <p className="mt-6 max-w-[640px] text-[14px] leading-[1.85] text-white/60 md:text-[16px]">
              End-to-end software solutions from product engineering to technical consulting.
              We build technology that scales with your ambition.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#1677FF] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#348aff]">
                Our Services <Arrow />
              </a>
              <a href="/#contact" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-6 text-[13px] font-semibold text-white transition-colors hover:border-white/60">
                Start a Project <Arrow />
              </a>
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0c1019] p-8 md:min-h-[420px] md:p-12">
            <div aria-hidden="true" className="absolute inset-0 opacity-70" style={{ backgroundImage: "linear-gradient(rgba(22,119,255,.09) 1px, transparent 1px),linear-gradient(90deg,rgba(22,119,255,.09) 1px,transparent 1px)", backgroundSize: "32px 32px", maskImage: "linear-gradient(to bottom,black,transparent)" }} />
            <div className="relative flex h-full min-h-[240px] flex-col justify-between md:min-h-[324px]">
              <div className="flex items-start justify-between">
                <DiamondMark />
                <span className="font-mono text-[11px] tracking-[.16em] text-white/45">01 / TECH</span>
              </div>
              <div>
                <div className="mb-6 flex items-center gap-2">
                  {[0, 1, 2, 3].map((item) => (
                    <span key={item} className="h-1.5 flex-1 rounded-full bg-[#1677FF]" style={{ opacity: 1 - item * .2 }} />
                  ))}
                </div>
                <p className="font-mono text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-none tracking-[-.07em] text-white">
                  ENGINEERED<br />TO SCALE<span className="text-[#1677FF]">.</span>
                </p>
                <p className="mt-5 text-[11px] uppercase tracking-[.17em] text-white/45">
                  Software / Platforms / Infrastructure / AI
                </p>
              </div>
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
            <a href="/brochures/cubixmet-tech.pdf" download="cubixmet-tech.pdf" className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/65 px-5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10">
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
