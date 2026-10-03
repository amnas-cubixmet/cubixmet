"use client";

import { useEffect } from "react";
import Arrow from "./Arrow";

const services = [
  { no: "01", title: "Branding", copy: "Identity systems, brand direction and visual language built to make your business easy to remember.", meta: ["Brand Strategy", "Visual Identity", "Campaign Direction"] },
  { no: "02", title: "UI / UX Design", copy: "Digital interfaces shaped around clarity, speed and conversion across every screen size.", meta: ["Product Design", "UX Systems", "Design Systems"] },
  { no: "03", title: "Web Development", copy: "Fast, scalable websites and web products engineered with modern stacks and dependable performance.", meta: ["Next.js", "Commerce", "Custom Platforms"] },
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
      <div data-reveal className="reveal site-wrapper rounded-[24px] border border-white/8 bg-[#0b0b0b] p-5 md:p-9">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="section-label">About us</p>
            <h2 className="section-title max-w-[760px]">Smart, fast, and creative <span className="block text-white/45">— digital experiences with purpose.</span></h2>
          </div>
          <p className="max-w-md self-end text-sm leading-7 text-white/45 md:text-base">
            Cubixmet combines strategy, interface design and modern development to create focused digital experiences for growing businesses.
          </p>
        </div>
        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          {[["4x","Faster design-to-build workflow"],["2x","Lean collaborative process"],["100%","Responsive by default"]].map(([value,label]) => (
            <div key={value} className="rounded-[18px] border border-white/8 bg-[#101010] p-5 md:p-6">
              <p className="text-[11px] leading-5 text-white/38">{label}</p>
              <p className="mt-10 text-[clamp(2rem,4vw,4rem)] font-semibold tracking-[-0.05em]">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/8 pt-5 text-[10px] uppercase tracking-[0.14em] text-white/45">
          <span>/ Results driven solutions</span><span>/ Strategic experiences</span><span>/ Purposeful design</span>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section-space">
      <div className="site-wrapper">
        <div data-reveal className="reveal mb-14 grid gap-6 lg:grid-cols-2">
          <p className="section-label">Services</p>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">We deliver</p>
            <h2 className="mt-2 max-w-xl text-[clamp(2rem,4vw,4rem)] font-medium leading-[1.02] tracking-[-0.05em]">Comprehensive solutions to help businesses grow and thrive.</h2>
          </div>
        </div>
        <div className="space-y-4">
          {services.map((service) => (
            <article key={service.no} data-reveal className="reveal grid gap-6 border-t border-white/10 py-8 md:grid-cols-[.7fr_1.1fr_1fr] md:items-center md:py-12">
              <div>
                <span className="mb-3 block text-xs text-[#1677FF]">{service.no}</span>
                <h3 className="text-[clamp(2rem,4.5vw,4.8rem)] font-semibold tracking-[-0.055em]">{service.title}</h3>
              </div>
              <div className="service-visual relative min-h-[210px] overflow-hidden rounded-[22px] border border-white/10 bg-[#0f0f0f] md:min-h-[300px]">
                <div className="absolute inset-8 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_30%,rgba(22,119,255,.10),transparent_40%),#0b0b0b]" />
                <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/60 text-4xl font-semibold">{service.no}</div>
              </div>
              <div className="md:pl-8">
                <p className="max-w-sm text-sm leading-6 text-white/50">{service.copy}</p>
                <div className="mt-7 space-y-2 text-[11px] text-white/55">
                  {service.meta.map((item) => <div key={item} className="flex items-center justify-between border-b border-white/8 pb-2"><span>{item}</span><Arrow /></div>)}
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
