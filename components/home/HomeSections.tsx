"use client";

import { useEffect } from "react";
import Arrow from "./Arrow";

const services = [
  {
    no: "01",
    title: "Branding",
    copy: "Distinctive brand systems built to create recognition, consistency and a clear visual identity across every touchpoint.",
    meta: ["Brand Strategy", "Logo & Identity", "Visual Branding", "Brand Guidelines", "Campaign Creative"],
  },
  {
    no: "02",
    title: "UI / UX Design",
    copy: "Clear, intuitive digital experiences designed around real user journeys, business goals and responsive interaction.",
    meta: ["UX Research", "UI Design", "Web & App Design", "Wireframes & Prototypes", "Design Systems"],
  },
  {
    no: "03",
    title: "Web Development",
    copy: "Fast, scalable websites and digital products developed with modern frameworks, clean architecture and reliable integrations.",
    meta: ["Next.js Development", "Frontend Development", "CMS & Ecommerce", "API Integration", "Performance & SEO"],
  },
];

const projects = [
  { name: "Northframe", type: "Brand + Digital", size: "lg" },
  { name: "Skylora", type: "Learning Platform", size: "sm" },
  { name: "Kleid.in", type: "Ecommerce", size: "sm" },
  { name: "CubixGear", type: "Operations Product", size: "lg" },
];

const process = [
  ["01", "Discovery", "We understand the business, users, goals and the problem worth solving."],
  ["02", "Ideas & Concepts", "We define the creative and technical direction before production starts."],
  ["03", "Design", "We shape clear, responsive interfaces with a strong visual system."],
  ["04", "Development", "We build, test and refine the experience for speed and reliability."],
];

function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function AboutSection() {
  return (
    <section id="about" className="section-space">
      <div data-reveal className="reveal about-wrapper">
        <div className="relative overflow-hidden rounded-[22px] border border-white/8 bg-[#0b0b0b]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(22,119,255,.08),transparent_20%),radial-gradient(circle_at_88%_82%,rgba(105,255,120,.16),transparent_22%),linear-gradient(180deg,rgba(255,255,255,.01),rgba(255,255,255,0))]" />
          <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.12),rgba(255,255,255,0)_70%)] blur-xl" />
          <img
            src="/about-ribbon.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-5 -top-7 z-[2] w-[110px] rotate-[14deg] opacity-75 [filter:grayscale(1)_brightness(.28)_contrast(1.45)] md:-right-2 md:-top-10 md:w-[150px] lg:w-[180px]"
          />
          <div className="relative z-10 grid gap-10 px-5 pb-8 pt-7 md:px-10 md:pb-10 md:pt-9 lg:grid-cols-[1.12fr_.88fr] lg:gap-16 xl:px-12 xl:pb-12 xl:pt-11">
            <div>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#1677FF]">About us</p>
              <h2 className="max-w-[720px] text-[clamp(2.7rem,4.8vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.055em]">
                Smart, fast, and creative
                <span className="mt-1 block text-white/38">— digital experiences with purpose.</span>
              </h2>
            </div>

            <div className="flex items-end lg:justify-end">
              <p className="max-w-[430px] text-[13px] leading-6 text-white/45 md:text-[15px] md:leading-7">
                Cubixmet combines strategy, interface design and modern development to create focused digital experiences for growing businesses.
              </p>
            </div>
          </div>

          <div className="relative z-10 grid gap-px border-y border-white/8 bg-white/8 sm:grid-cols-3">
            {[["4x","Faster design-to-build workflow"],["2x","Lean collaborative process"],["100%","Responsive by default"]].map(([value,label]) => (
              <div key={value} className="bg-[#0d0d0d] px-5 py-6 md:px-8 md:py-7">
                <p className="max-w-[180px] text-[11px] leading-5 text-white/38">{label}</p>
                <p className="mt-7 text-[clamp(2.4rem,3.8vw,4.4rem)] font-semibold leading-none tracking-[-0.055em]">{value}</p>
              </div>
            ))}
          </div>

          <div className="relative z-10 flex flex-wrap gap-x-8 gap-y-3 px-5 py-5 text-[10px] uppercase tracking-[0.14em] text-white/40 md:px-10 xl:px-12">
            <span>/ Results driven solutions</span>
            <span>/ Strategic experiences</span>
            <span>/ Purposeful design</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const serviceVisuals = [
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=82",
  ];

  return (
    <section id="services" className="pb-20 pt-6 md:pb-28 md:pt-10">
      <div className="about-wrapper">
        <div data-reveal className="reveal mb-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <p className="section-label">Services</p>
          <div className="lg:justify-self-end">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/55">We Deliver</p>
            <h2 className="mt-2 max-w-[560px] text-[clamp(2rem,3.8vw,4rem)] font-medium leading-[1.02] tracking-[-0.05em]">
              <span className="text-white">Comprehensive</span>
              <span className="text-white/38"> solutions to help businesses grow and thrive.</span>
            </h2>
          </div>
        </div>

        <div className="space-y-8 md:space-y-10">
          {services.map((service, index) => (
            <article
              key={service.no}
              data-reveal
              className="reveal grid items-center gap-5 md:grid-cols-[.9fr_1fr_1.1fr] md:gap-8 lg:grid-cols-[.82fr_1fr_1.08fr]"
            >
              <div className="flex items-start gap-4">
                <span className="mt-2 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#1677FF]/40 text-[9px] text-[#1677FF]">
                  {service.no}
                </span>
                <h3 className="text-[clamp(1.9rem,3vw,3.4rem)] font-semibold leading-[.95] tracking-[-0.05em]">
                  {service.title}
                </h3>
              </div>

              <div className="group relative overflow-hidden rounded-[14px] border border-white/8 bg-[#0d0d0d]">
                <div className="aspect-[1.55/1] overflow-hidden">
                  <img
                    src={serviceVisuals[index]}
                    alt={service.title}
                    className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-[#1677FF] text-[10px] font-bold text-white">
                  <Arrow />
                </span>
              </div>

              <div className="md:pl-2">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#1677FF]/60" />
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/70">
                    {service.title} Services
                  </p>
                </div>

                <p className="max-w-sm text-[12px] leading-5 text-white/42">{service.copy}</p>

                <div className="mt-5 space-y-2.5">
                  {service.meta.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[11px] text-white/55">
                      <span className="h-1 w-1 rounded-full bg-[#1677FF]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="section-space">
      <div data-reveal className="reveal site-wrapper grid gap-10 rounded-[24px] border border-white/8 bg-[#0b0b0b] p-5 md:p-9 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="section-label">Work process</p>
          <h2 className="section-title mt-5 max-w-xl">Our process, designed and delivered simply.</h2>
          <div className="mt-10">
            {process.map(([no,title,copy]) => (
              <div key={no} className="grid grid-cols-[38px_1fr] gap-3 border-t border-white/10 py-5">
                <span className="text-xs text-[#1677FF]">{no}</span>
                <div><h3 className="text-lg font-medium">{title}</h3><p className="mt-2 max-w-md text-xs leading-5 text-white/40">{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[20px] bg-[radial-gradient(circle_at_70%_25%,rgba(22,119,255,.18),transparent_25%),linear-gradient(145deg,#242524,#0b0b0b)] md:min-h-[600px]">
          <div className="absolute left-[12%] top-[12%] h-[68%] w-[65%] rotate-[-7deg] rounded-[22px] border border-white/10 bg-[#131313] shadow-2xl" />
          <div className="absolute bottom-[10%] right-[10%] w-[58%] rounded-[18px] border border-white/10 bg-black/70 p-5">
            <span className="text-[10px] uppercase tracking-[0.16em] text-[#1677FF]">Strategy → Design → Build</span>
            <p className="mt-8 text-2xl font-medium tracking-[-0.04em]">Built around the next move, not the last trend.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section id="work" className="section-space">
      <div className="site-wrapper">
        <div data-reveal className="reveal mb-10 grid gap-5 lg:grid-cols-2 lg:items-end">
          <div><p className="section-label">Our work</p><h2 className="section-title mt-4">Selected creative work.</h2></div>
          <p className="max-w-md text-sm leading-6 text-white/45 lg:justify-self-end">A mix of brands, ecommerce, product interfaces and operational systems shaped by one multidisciplinary team.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project,index) => (
            <article key={project.name} data-reveal className={"reveal group overflow-hidden rounded-[22px] border border-white/8 bg-[#0d0d0d] " + (project.size === "lg" ? "md:row-span-2" : "")}>
              <div className={"relative overflow-hidden bg-[linear-gradient(145deg,#191a19,#080808)] " + (project.size === "lg" ? "min-h-[360px] md:min-h-[620px]" : "min-h-[280px]")}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(22,119,255,.12),transparent_28%)] transition duration-500 group-hover:scale-110" />
                <div className="absolute left-1/2 top-1/2 grid h-[45%] w-[62%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border border-white/10 bg-black/50 text-[clamp(2rem,7vw,7rem)] font-semibold tracking-[-0.07em] text-white/80">0{index + 1}</div>
              </div>
              <div className="flex items-end justify-between gap-4 p-5">
                <div><p className="text-[10px] uppercase tracking-[0.14em] text-white/35">{project.type}</p><h3 className="mt-1 text-xl font-medium">{project.name}</h3></div>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1677FF] text-sm text-white transition group-hover:rotate-45"><Arrow /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeSection() {
  return (
    <section className="overflow-hidden border-y border-white/8 py-8 md:py-12">
      <div className="marquee whitespace-nowrap text-[clamp(3rem,8vw,8rem)] font-semibold leading-none tracking-[-0.065em]">
        <span className="mr-12">Digital Products <span className="font-serif italic text-white/25">×</span> Brand Systems <span className="font-serif italic text-white/25">×</span> Web Experiences <span className="font-serif italic text-white/25">×</span></span>
        <span>Digital Products <span className="font-serif italic text-white/25">×</span> Brand Systems <span className="font-serif italic text-white/25">×</span> Web Experiences <span className="font-serif italic text-white/25">×</span></span>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const items = [
    ["The team made a complex product feel clear and simple from the first design round.","Product Lead"],
    ["Fast communication, practical decisions and a final build that performs beautifully.","Founder"],
    ["Cubixmet gave us a sharper digital direction without losing the personality of our brand.","Marketing Lead"],
  ];
  return (
    <section className="section-space">
      <div className="site-wrapper">
        <div data-reveal className="reveal text-center">
          <p className="section-label">Client stories</p>
          <h2 className="section-title mt-4">Trusted by teams. Backed by outcomes.</h2>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {items.map(([quote,role]) => (
            <blockquote key={quote} data-reveal className="reveal rounded-[20px] border border-white/8 bg-[#0b0b0b] p-6">
              <span className="text-3xl text-[#1677FF]">“</span><p className="mt-6 text-base leading-7 text-white/65">{quote}</p>
              <footer className="mt-10 border-t border-white/8 pt-4 text-[11px] uppercase tracking-[0.14em] text-white/35">{role}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="section-space">
      <div className="site-wrapper grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
        <div data-reveal className="reveal"><p className="section-label">Leadership</p><h2 className="section-title mt-4">Meet the people behind the work.</h2></div>
        <div className="space-y-2">
          {[["Creative Direction","Brand, positioning and visual systems."],["Product & UX","Interface direction and user experience systems."],["Technology","Architecture, engineering and delivery."]].map(([title,copy],index) => (
            <div key={title} data-reveal className="reveal grid gap-5 rounded-[20px] border border-white/8 bg-[#0b0b0b] p-5 sm:grid-cols-[90px_1fr_auto] sm:items-center">
              <div className="grid h-[72px] w-[72px] place-items-center rounded-full bg-[radial-gradient(circle,#1677FF_0_38%,#0e2744_39%_62%,#111_63%)] text-sm font-bold text-white">0{index + 1}</div>
              <div><h3 className="text-xl font-medium">{title}</h3><p className="mt-2 text-sm text-white/40">{copy}</p></div><span className="text-white/30"><Arrow /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JournalSection() {
  const insights = [["Design","How sharper UX decisions improve conversion without adding more screens."],["Technology","Why modern websites should feel fast before they look impressive."],["Growth","Building a digital brand system that stays consistent while you scale."]];
  return (
    <section id="journal" className="section-space">
      <div className="site-wrapper">
        <div data-reveal className="reveal grid gap-6 lg:grid-cols-2">
          <div><p className="section-label">Journal</p><h2 className="section-title mt-4">Insight from the studio.</h2></div>
          <p className="max-w-md self-end text-sm leading-6 text-white/45 lg:justify-self-end">Short notes on design, product thinking, technology and digital growth.</p>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {insights.map(([tag,title],index) => (
            <article key={title} data-reveal className="reveal group flex min-h-[330px] flex-col justify-between rounded-[20px] border border-white/8 bg-[#0b0b0b] p-5 transition hover:-translate-y-1 hover:border-white/20">
              <span className="w-fit rounded-full bg-[#1677FF] px-3 py-1 text-[10px] font-bold text-white">{tag}</span>
              <div><p className="mb-5 text-[11px] text-white/25">0{index + 1} / 2026</p><h3 className="text-2xl font-medium leading-tight tracking-[-0.04em]">{title}</h3><div className="mt-6 flex items-center justify-between text-xs text-white/40"><span>Read insight</span><Arrow /></div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section-space pt-10">
      <div className="site-wrapper overflow-hidden rounded-[28px] bg-[#1677FF] text-white">
        <div className="grid gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[.9fr_1.1fr] xl:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em]">Start a project</p>
            <h2 className="mt-5 max-w-xl text-[clamp(3rem,6.5vw,7rem)] font-semibold leading-[0.86] tracking-[-0.065em]">Have a project in mind? Let&apos;s talk.</h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-white/70">Share the goal, challenge or rough idea. We&apos;ll help shape the next step.</p>
            <a href="mailto:hello@cubixmet.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-bold text-white">hello@cubixmet.com <Arrow /></a>
          </div>
          <form className="rounded-[22px] bg-white p-5 text-black md:p-7" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-medium">Your name<input className="form-line" placeholder="Name" /></label>
              <label className="text-xs font-medium">Email<input type="email" className="form-line" placeholder="you@company.com" /></label>
              <label className="text-xs font-medium sm:col-span-2">What can we help with?<input className="form-line" placeholder="Brand, website, product, growth..." /></label>
              <label className="text-xs font-medium sm:col-span-2">Tell us about the project<textarea rows={4} className="form-line resize-none" placeholder="A short project summary" /></label>
            </div>
            <button type="submit" className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-bold text-white">Send project <Arrow /></button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function HomeSections() {
  useReveal();
  return (
    <>
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <MarqueeSection />
      <TestimonialsSection />
      <LeadershipSection />
      <JournalSection />
      <ContactSection />
    </>
  );
}
