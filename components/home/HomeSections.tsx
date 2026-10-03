"use client";

import { useEffect } from "react";
import Arrow from "./Arrow";

function FlowerSeparator() {
  return (
    <span className="inline-flex h-[0.66em] w-[0.66em] shrink-0 translate-y-[0.03em] items-center justify-center align-middle text-[#1677FF]">
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        <g fill="currentColor">
          <ellipse cx="50" cy="20" rx="10" ry="22" />
          <ellipse cx="50" cy="80" rx="10" ry="22" />
          <ellipse cx="24" cy="35" rx="10" ry="22" transform="rotate(-55 24 35)" />
          <ellipse cx="76" cy="35" rx="10" ry="22" transform="rotate(55 76 35)" />
          <ellipse cx="24" cy="65" rx="10" ry="22" transform="rotate(55 24 65)" />
          <ellipse cx="76" cy="65" rx="10" ry="22" transform="rotate(-55 76 65)" />
        </g>
      </svg>
    </span>
  );
}

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
          <div className="lg:justify-self-end lg:pr-[6%]">
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
    <section id="process" className="pb-20 pt-10 md:pb-28 md:pt-14">
      <div data-reveal className="reveal about-wrapper">
        <div className="relative overflow-hidden rounded-[22px] border border-white/8 bg-[#0b0b0b]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_52%,rgba(22,119,255,.11),transparent_28%),radial-gradient(circle_at_92%_12%,rgba(255,255,255,.035),transparent_18%)]" />

          <div className="relative z-10 grid gap-10 p-5 md:p-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 xl:p-10">
            <div className="flex flex-col">
              <div>
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#1677FF]">Work process</p>
                <h2 className="max-w-[520px] text-[clamp(2.2rem,4.2vw,4.8rem)] font-medium leading-[.96] tracking-[-0.055em]">
                  Our Process design, and Deliver Simplified
                </h2>
              </div>

              <div className="mt-10 md:mt-14">
                {process.map(([no,title,copy], index) => (
                  <div key={no} className="group relative grid grid-cols-[30px_1fr] gap-4 py-4 first:pt-0">
                    {index !== process.length - 1 && (
                      <span className="absolute left-[9px] top-8 h-[calc(100%-12px)] w-px bg-white/10" />
                    )}
                    <span className="relative z-10 mt-0.5 grid h-5 w-5 place-items-center rounded-full border border-[#1677FF]/55 bg-[#0b0b0b] text-[8px] text-[#1677FF]">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-medium text-white md:text-[17px]">{title}</h3>
                      {index === 1 && (
                        <p className="mt-2 max-w-[390px] text-[11px] leading-5 text-white/38 md:text-[12px]">
                          {copy}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-auto hidden pt-10 text-[9px] uppercase tracking-[0.22em] text-white/25 lg:block [writing-mode:vertical-rl]">
                Strategy / Design / Development
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <p className="max-w-[430px] text-[12px] leading-5 text-white/42 md:text-[13px] md:leading-6">
                  We follow a simple, results-driven process to bring your vision to life. From understanding your goals to designing and developing, we focus on clarity, collaboration, and strong execution at every stage.
                </p>
                <a
                  href="#contact"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#1677FF] px-4 py-2.5 text-[10px] font-semibold text-white"
                >
                  Let&apos;s talk <Arrow />
                </a>
              </div>

              <div className="group relative mt-8 overflow-hidden rounded-[16px] border border-white/8 bg-[#111] md:mt-10">
                <div className="aspect-[1.12/1] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=84"
                    alt="Cubixmet team discussing a project"
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[9px] uppercase tracking-[0.14em] text-white/65 backdrop-blur">
                  Collaborate → Build
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full border border-white/7 opacity-30 md:h-40 md:w-40" />
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section id="work" className="pb-20 pt-4 md:pb-28 md:pt-8">
      <div className="work-wrapper">
        <div data-reveal className="reveal mb-6 grid gap-6 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div><p className="section-label mb-0">Case Studies</p><p className="mt-3 hidden max-w-[220px] text-[11px] leading-5 text-white/32 lg:block">Selected brand, product and digital work from across the studio.</p></div>

          <div className="lg:justify-self-start lg:pl-[4%]">
            <h2 className="max-w-[420px] text-[clamp(2rem,3.25vw,3.6rem)] font-medium leading-[.94] tracking-[-0.05em]">
              See Our <span className="font-serif font-normal italic">All Latest</span>
              <span className="block">Creative Work</span>
            </h2>

            <a
              href="#work-grid"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#1677FF] px-3.5 py-2 text-[9px] font-semibold text-white"
            >
              View all <Arrow />
            </a>
          </div>
        </div>

        <div id="work-grid" className="grid w-full gap-3 md:grid-cols-3 md:auto-rows-[210px] lg:auto-rows-[235px]">
          {projects.map((project, index) => {
            const layout =
              index === 0
                ? "md:col-span-2"
                : index === 1
                  ? "md:col-span-1"
                  : index === 2
                    ? "md:col-span-1"
                    : "md:col-span-2";

            return (
              <article
                key={project.name}
                data-reveal
                className={"reveal group relative overflow-hidden rounded-[14px] border border-white/8 bg-[#0d0d0d] " + layout}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 md:p-5">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.14em] text-white/45">{project.type}</p>
                    <h3 className="mt-1 text-[15px] font-medium text-white md:text-[18px]">{project.name}</h3>
                  </div>

                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#1677FF] text-[10px] text-white transition duration-300 group-hover:rotate-45">
                    <Arrow />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const marqueeItems = ["Digital Products", "Brand Systems", "Web Experiences"];

  return (
    <section className="overflow-hidden border-y border-white/8 py-8 md:py-12">
      <div className="marquee items-center whitespace-nowrap text-[clamp(3rem,8vw,8rem)] font-semibold leading-none tracking-[-0.065em]">
        {[0, 1].map((loop) => (
          <span key={loop} className="mr-[0.18em] inline-flex items-center gap-[0.18em]">
            {marqueeItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-[0.18em]">
                <span className="text-[#fff]">{item}</span>
                <FlowerSeparator />
              </span>
            ))}
          </span>
        ))}
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
