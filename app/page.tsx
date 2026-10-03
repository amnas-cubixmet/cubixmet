"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroCanvas = dynamic(() => import("../components/HeroCanvas"), { ssr: false });

const services = [
  {
    no: "01",
    title: "Branding",
    copy: "Identity systems, brand direction and visual language built to make your business easy to remember.",
    meta: ["Brand Strategy", "Visual Identity", "Campaign Direction"],
  },
  {
    no: "02",
    title: "UI / UX Design",
    copy: "Digital interfaces shaped around clarity, speed and conversion across every screen size.",
    meta: ["Product Design", "UX Systems", "Design Systems"],
  },
  {
    no: "03",
    title: "Web Development",
    copy: "Fast, scalable websites and web products engineered with modern stacks and dependable performance.",
    meta: ["Next.js", "Commerce", "Custom Platforms"],
  },
];

const projects = [
  { code: "01", name: "Northframe", type: "Brand + Digital", size: "lg" },
  { code: "02", name: "Skylora", type: "Learning Platform", size: "sm" },
  { code: "03", name: "Kleid.in", type: "Ecommerce", size: "sm" },
  { code: "04", name: "CubixGear", type: "Operations Product", size: "lg" },
];

const process = [
  ["01", "Discovery", "We understand the business, users, goals and the problem worth solving."],
  ["02", "Ideas & Concepts", "We define the creative and technical direction before production starts."],
  ["03", "Design", "We shape clear, responsive interfaces with a strong visual system."],
  ["04", "Development", "We build, test and refine the experience for speed and reliability."],
];

const insights = [
  ["Design", "How sharper UX decisions improve conversion without adding more screens."],
  ["Technology", "Why modern websites should feel fast before they look impressive."],
  ["Growth", "Building a digital brand system that stays consistent while you scale."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-x-hidden bg-[#050505] text-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-black/20 backdrop-blur-[2px]">
        <div className="mx-auto flex h-[54px] max-w-[1500px] items-center justify-between px-5 md:h-[58px] md:px-8 xl:px-10">
          <a href="#top" className="relative z-50 text-[12px] font-black tracking-[-0.035em] md:text-[13px]">
            CUBIXMET<span className="text-[#1677FF]">.</span>
          </a>

          <nav className="hidden items-center gap-6 text-[9px] font-medium text-white/55 md:flex">
            <a className="transition hover:text-white" href="#about">Home</a>
            <a className="transition hover:text-white" href="#services">Services</a>
            <a className="transition hover:text-white" href="#work">Portfolio</a>
            <a className="transition hover:text-white" href="#journal">Blog</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <span className="h-2 w-2 rounded-full bg-[#1677FF]" />
            <a href="#contact" className="rounded-full border border-white/25 px-3 py-1.5 text-[9px] font-semibold text-white transition hover:border-[#1677FF] hover:text-[#1677FF]">
              Let&apos;s Talk
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="relative z-50 grid h-9 w-9 place-items-center rounded-full border border-white/10 md:hidden"
          >
            <span className="flex w-4 flex-col gap-1.5">
              <span className={"h-px w-full bg-white transition " + (menuOpen ? "translate-y-[3.5px] rotate-45" : "")} />
              <span className={"h-px w-full bg-white transition " + (menuOpen ? "-translate-y-[3.5px] -rotate-45" : "")} />
            </span>
          </button>
        </div>

        <div className={"absolute inset-x-0 top-0 min-h-[100svh] bg-[#050505] px-5 pb-8 pt-24 transition duration-500 md:hidden " + (menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none")}>
          <div className="flex flex-col gap-3 text-[clamp(2.6rem,14vw,4.8rem)] font-semibold leading-none tracking-[-0.06em]">
            {[["#about","About"],["#services","Services"],["#work","Work"],["#process","Process"],["#journal","Insights"],["#contact","Contact"]].map(([href,label]) => (
              <a key={href} onClick={() => setMenuOpen(false)} href={href} className="border-b border-white/10 pb-3">{label}</a>
            ))}
          </div>
        </div>
      </header>

      <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#050505] pt-[54px] md:pt-[58px]">
        <div className="absolute inset-0 opacity-45">
          <HeroCanvas />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_37%,rgba(22,119,255,.24),transparent_27%),radial-gradient(circle_at_25%_24%,rgba(255,255,255,.035),transparent_18%),linear-gradient(180deg,rgba(0,0,0,.16),rgba(0,0,0,.68)_78%,#050505_100%)]" />
        <div className="pointer-events-none absolute right-[18%] top-[20%] h-[170px] w-[170px] rounded-full border border-white/5 opacity-40 blur-[1px] md:h-[260px] md:w-[260px]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-54px)] max-w-[1500px] flex-col px-5 md:min-h-[calc(100svh-58px)] md:px-8 xl:px-10">
          <div className="grid flex-1 items-center gap-8 pb-8 pt-10 md:pb-10 md:pt-12 lg:grid-cols-[1fr_360px]">
            <div className="max-w-[900px]">
              <h1 className="text-[clamp(3.15rem,8.3vw,8.1rem)] font-semibold leading-[0.88] tracking-[-0.068em]">
                <span className="block">We Build</span>
                <span className="block"><span className="font-serif font-normal italic">— Brands</span> that</span>
                <span className="block">Stand Out</span>
              </h1>
            </div>

            <div className="relative hidden self-center lg:block">
              <div className="mb-12 ml-10 grid h-28 w-28 place-items-center rounded-full border border-white/10 bg-black/20 text-center backdrop-blur">
                <span className="text-[9px] leading-4 text-white/45"><strong className="block text-[34px] leading-none text-white">12+</strong>Your trust builds us</span>
              </div>

              <div className="max-w-[330px]">
                <p className="text-[11px] leading-[1.55] text-white/52">
                  Easily connect your SEO-optimized content to your WordPress effortless publishing —
                  <span className="text-[#1677FF]"> helping you stay consistent, save time, and grow faster.</span>
                </p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1677FF] px-4 py-2 text-[10px] font-bold text-black">
                  Let&apos;s Talk <Arrow />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[.72fr_1.65fr_.82fr] items-end gap-2 pb-3 md:gap-4 md:pb-5">
            <div className="hero-card h-[120px] translate-y-4 overflow-hidden rounded-[10px] border border-white/10 bg-[#0c0d0c] p-2 sm:h-[170px] md:h-[230px] md:rounded-[14px] md:p-3">
              <div className="flex h-full items-end rounded-[8px] bg-[linear-gradient(145deg,#1a1a1a,#090909)] p-2">
                <div className="h-[68%] w-[52%] rounded-[8px] border border-white/10 bg-[linear-gradient(160deg,#e8e8e8,#b9b9b9_48%,#161616_49%)]" />
              </div>
            </div>

            <div className="hero-card h-[150px] overflow-hidden rounded-[10px] border border-white/10 bg-[#0c0d0c] p-2 sm:h-[205px] md:h-[280px] md:rounded-[14px] md:p-3">
              <div className="relative grid h-full place-items-center rounded-[8px] bg-[radial-gradient(circle_at_50%_30%,#112a46,#0b1520_42%,#090909_82%)]">
                <div className="grid h-[56%] w-[62%] place-items-center rounded-[8px] border border-white/10 bg-black/45 text-[clamp(1.6rem,5vw,5rem)] font-semibold tracking-[-0.06em]">022</div>
                <span className="absolute bottom-3 grid h-9 w-9 place-items-center rounded-full bg-[#1677FF] text-[10px] font-bold text-black md:h-12 md:w-12">↗</span>
              </div>
            </div>

            <div className="hero-card h-[128px] translate-y-3 overflow-hidden rounded-[10px] border border-white/10 bg-[#0c0d0c] p-2 sm:h-[180px] md:h-[242px] md:rounded-[14px] md:p-3">
              <div className="flex h-full items-end justify-center rounded-[8px] bg-[linear-gradient(145deg,#1b1b1b,#080808)]">
                <div className="mb-2 h-[72%] w-[46%] rounded-t-[6px] border border-white/10 bg-[#171717] shadow-2xl">
                  <div className="mt-[45%] text-center text-[clamp(1rem,3vw,2.8rem)] font-semibold text-white/75">000</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-7 pt-6 lg:hidden">
            <div className="flex items-end justify-between gap-5">
              <p className="max-w-[260px] text-[11px] leading-5 text-white/50">
                Strategy, design and development for brands that want to stand out and grow.
              </p>
              <a href="#contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1677FF] px-3.5 py-2 text-[10px] font-bold text-black">
                Let&apos;s Talk <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 md:px-8 md:py-28 xl:px-10">
        <div data-reveal className="reveal mx-auto max-w-[1500px] rounded-[24px] border border-white/8 bg-[#0b0b0b] p-5 md:p-9">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-[#1677FF]">About us</p>
              <h2 className="max-w-[760px] text-[clamp(2.5rem,5.3vw,6.2rem)] font-medium leading-[0.95] tracking-[-0.055em]">
                Smart, fast, and creative
                <span className="block text-white/45">— digital experiences with purpose.</span>
              </h2>
            </div>
            <p className="max-w-md self-end text-sm leading-7 text-white/45 md:text-base">
              Cubixmet combines strategy, interface design and modern development to create focused digital experiences for growing businesses.
            </p>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-3">
            {[
              ["4x", "Faster design-to-build workflow"],
              ["2x", "Lean collaborative process"],
              ["100%", "Responsive by default"],
            ].map(([value, label]) => (
              <div key={value} className="rounded-[18px] border border-white/8 bg-[#101010] p-5 md:p-6">
                <p className="text-[11px] leading-5 text-white/38">{label}</p>
                <p className="mt-10 text-[clamp(2rem,4vw,4rem)] font-semibold tracking-[-0.05em]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/8 pt-5 text-[10px] uppercase tracking-[0.14em] text-white/45">
            <span>/ Results driven solutions</span>
            <span>/ Strategic experiences</span>
            <span>/ Purposeful design</span>
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-20 md:px-8 md:py-28 xl:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div data-reveal className="reveal mb-14 grid gap-6 lg:grid-cols-2">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#1677FF]">Services</p>
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">We deliver</p>
              <h2 className="mt-2 max-w-xl text-[clamp(2rem,4vw,4rem)] font-medium leading-[1.02] tracking-[-0.05em]">
                Comprehensive solutions to help businesses grow and thrive.
              </h2>
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
                  <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/60 text-4xl font-semibold">
                    {service.no}
                  </div>
                </div>

                <div className="md:pl-8">
                  <p className="max-w-sm text-sm leading-6 text-white/50">{service.copy}</p>
                  <div className="mt-7 space-y-2 text-[11px] text-white/55">
                    {service.meta.map((item) => (
                      <div key={item} className="flex items-center justify-between border-b border-white/8 pb-2">
                        <span>{item}</span>
                        <Arrow />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="px-5 py-20 md:px-8 md:py-28 xl:px-10">
        <div data-reveal className="reveal mx-auto grid max-w-[1500px] gap-10 rounded-[24px] border border-white/8 bg-[#0b0b0b] p-5 md:p-9 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#1677FF]">Work process</p>
            <h2 className="mt-5 max-w-xl text-[clamp(2.4rem,5vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Our process, designed and delivered simply.
            </h2>

            <div className="mt-10">
              {process.map(([no, title, copy]) => (
                <div key={no} className="grid grid-cols-[38px_1fr] gap-3 border-t border-white/10 py-5">
                  <span className="text-xs text-[#1677FF]">{no}</span>
                  <div>
                    <h3 className="text-lg font-medium">{title}</h3>
                    <p className="mt-2 max-w-md text-xs leading-5 text-white/40">{copy}</p>
                  </div>
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

      <section id="work" className="px-5 py-20 md:px-8 md:py-28 xl:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div data-reveal className="reveal mb-10 grid gap-5 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#1677FF]">Our work</p>
              <h2 className="mt-4 text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                Selected creative work.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/45 lg:justify-self-end">
              A mix of brands, ecommerce, product interfaces and operational systems shaped by one multidisciplinary team.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.code}
                data-reveal
                className={"reveal group overflow-hidden rounded-[22px] border border-white/8 bg-[#0d0d0d] " + (project.size === "lg" ? "md:row-span-2" : "")}
              >
                <div className={"relative overflow-hidden bg-[linear-gradient(145deg,#191a19,#080808)] " + (project.size === "lg" ? "min-h-[360px] md:min-h-[620px]" : "min-h-[280px]")}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(22,119,255,.12),transparent_28%)] transition duration-500 group-hover:scale-110" />
                  <div className="absolute left-1/2 top-1/2 grid h-[45%] w-[62%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border border-white/10 bg-black/50 text-[clamp(2rem,7vw,7rem)] font-semibold tracking-[-0.07em] text-white/80">
                    0{index + 1}
                  </div>
                </div>
                <div className="flex items-end justify-between gap-4 p-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/35">{project.type}</p>
                    <h3 className="mt-1 text-xl font-medium">{project.name}</h3>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1677FF] text-sm text-black transition group-hover:rotate-45"><Arrow /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/8 py-8 md:py-12">
        <div className="marquee whitespace-nowrap text-[clamp(3rem,8vw,8rem)] font-semibold leading-none tracking-[-0.065em]">
          <span className="mr-12">Digital Products <span className="font-serif italic text-white/25">×</span> Brand Systems <span className="font-serif italic text-white/25">×</span> Web Experiences <span className="font-serif italic text-white/25">×</span></span>
          <span>Digital Products <span className="font-serif italic text-white/25">×</span> Brand Systems <span className="font-serif italic text-white/25">×</span> Web Experiences <span className="font-serif italic text-white/25">×</span></span>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28 xl:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div data-reveal className="reveal text-center">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#1677FF]">Client stories</p>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,5rem)] font-medium tracking-[-0.055em]">
              Trusted by teams. Backed by outcomes.
            </h2>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {[
              ["The team made a complex product feel clear and simple from the first design round.", "Product Lead"],
              ["Fast communication, practical decisions and a final build that performs beautifully.", "Founder"],
              ["Cubixmet gave us a sharper digital direction without losing the personality of our brand.", "Marketing Lead"],
            ].map(([quote, role]) => (
              <blockquote key={quote} data-reveal className="reveal rounded-[20px] border border-white/8 bg-[#0b0b0b] p-6">
                <span className="text-3xl text-[#1677FF]">“</span>
                <p className="mt-6 text-base leading-7 text-white/65">{quote}</p>
                <footer className="mt-10 border-t border-white/8 pt-4 text-[11px] uppercase tracking-[0.14em] text-white/35">{role}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28 xl:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div data-reveal className="reveal">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#1677FF]">Leadership</p>
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.055em]">
              Meet the people behind the work.
            </h2>
          </div>

          <div className="space-y-2">
            {[
              ["Creative Direction", "Brand, positioning and visual systems."],
              ["Product & UX", "Interface direction and user experience systems."],
              ["Technology", "Architecture, engineering and delivery."],
            ].map(([title, copy], index) => (
              <div key={title} data-reveal className="reveal grid gap-5 rounded-[20px] border border-white/8 bg-[#0b0b0b] p-5 sm:grid-cols-[90px_1fr_auto] sm:items-center">
                <div className="grid h-[72px] w-[72px] place-items-center rounded-full bg-[radial-gradient(circle,#1677FF_0_38%,#0e2744_39%_62%,#111_63%)] text-sm font-bold text-black">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-white/40">{copy}</p>
                </div>
                <span className="text-white/30"><Arrow /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="px-5 py-20 md:px-8 md:py-28 xl:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div data-reveal className="reveal grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#1677FF]">Journal</p>
              <h2 className="mt-4 text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.055em]">
                Insight from the studio.
              </h2>
            </div>
            <p className="max-w-md self-end text-sm leading-6 text-white/45 lg:justify-self-end">
              Short notes on design, product thinking, technology and digital growth.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {insights.map(([tag, title], index) => (
              <article key={title} data-reveal className="reveal group flex min-h-[330px] flex-col justify-between rounded-[20px] border border-white/8 bg-[#0b0b0b] p-5 transition hover:-translate-y-1 hover:border-white/20">
                <span className="w-fit rounded-full bg-[#1677FF] px-3 py-1 text-[10px] font-bold text-black">{tag}</span>
                <div>
                  <p className="mb-5 text-[11px] text-white/25">0{index + 1} / 2026</p>
                  <h3 className="text-2xl font-medium leading-tight tracking-[-0.04em]">{title}</h3>
                  <div className="mt-6 flex items-center justify-between text-xs text-white/40">
                    <span>Read insight</span>
                    <Arrow />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-3 pb-3 pt-10 md:px-5 md:pb-5">
        <div className="overflow-hidden rounded-[28px] bg-[#1677FF] text-black">
          <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[.9fr_1.1fr] xl:px-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em]">Start a project</p>
              <h2 className="mt-5 max-w-xl text-[clamp(3rem,6.5vw,7rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
                Have a project in mind? Let&apos;s talk.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-6 text-black/60">
                Share the goal, challenge or rough idea. We&apos;ll help shape the next step.
              </p>
              <a href="mailto:hello@cubixmet.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-bold text-white">
                hello@cubixmet.com <Arrow />
              </a>
            </div>

            <form className="rounded-[22px] bg-white p-5 md:p-7" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-medium">
                  Your name
                  <input className="mt-2 w-full border-b border-black/15 bg-transparent py-3 text-sm outline-none placeholder:text-black/30 focus:border-black" placeholder="Name" />
                </label>
                <label className="text-xs font-medium">
                  Email
                  <input type="email" className="mt-2 w-full border-b border-black/15 bg-transparent py-3 text-sm outline-none placeholder:text-black/30 focus:border-black" placeholder="you@company.com" />
                </label>
                <label className="text-xs font-medium sm:col-span-2">
                  What can we help with?
                  <input className="mt-2 w-full border-b border-black/15 bg-transparent py-3 text-sm outline-none placeholder:text-black/30 focus:border-black" placeholder="Brand, website, product, growth..." />
                </label>
                <label className="text-xs font-medium sm:col-span-2">
                  Tell us about the project
                  <textarea rows={4} className="mt-2 w-full resize-none border-b border-black/15 bg-transparent py-3 text-sm outline-none placeholder:text-black/30 focus:border-black" placeholder="A short project summary" />
                </label>
              </div>
              <button type="submit" className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-bold text-white">
                Send project <Arrow />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="px-5 py-10 md:px-8 md:py-14 xl:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="border-b border-white/8 pb-8">
            <p className="text-[clamp(2.8rem,7.2vw,7.5rem)] font-semibold leading-none tracking-[-0.07em]">
              Get in touch <span className="text-white/18">for what&apos;s next.</span>
            </p>
          </div>

          <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-bold">CUBIXMET<span className="text-[#1677FF]">.</span></p>
              <p className="mt-4 max-w-xs text-xs leading-5 text-white/35">Brand, design and technology for ambitious businesses.</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">Navigate</p>
              <div className="mt-4 space-y-2 text-sm text-white/55">
                <a className="block hover:text-white" href="#about">About</a>
                <a className="block hover:text-white" href="#services">Services</a>
                <a className="block hover:text-white" href="#work">Work</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">Social</p>
              <div className="mt-4 space-y-2 text-sm text-white/55">
                <span className="block">Instagram</span>
                <span className="block">LinkedIn</span>
                <span className="block">Behance</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">Contact</p>
              <p className="mt-4 text-sm text-white/55">hello@cubixmet.com</p>
              <p className="mt-2 text-sm text-white/55">Kerala, India</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/8 pt-5 text-[10px] uppercase tracking-[0.12em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Cubixmet</span>
            <span>Designed & built for every screen</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
