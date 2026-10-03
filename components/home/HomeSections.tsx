"use client";

import { useEffect, useRef, useState } from "react";
import Arrow from "./Arrow";
import { services } from "../../data/services";
import { aboutContent, aboutPillars, ventures, projects, process, marqueeItems, testimonials, leaders, insights } from "../../data/home";

function FlowerSeparator() {
  return (
    <span className="inline-flex h-[0.66em] w-[0.66em] shrink-0 translate-y-[0.03em] items-center justify-center align-middle text-current">
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

function useReveal() {
  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const cardNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-card]"));
    const textNodes = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main h1, main h2, main h3, main h4, main p, main blockquote footer"
      )
    ).filter((node) => !node.closest("header") && !node.closest("[data-no-text-reveal]"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target as HTMLElement;
          const delay = Number(node.dataset.scrollDelay || 0);
          window.setTimeout(() => node.classList.add("is-card-visible"), delay);
          cardObserver.unobserve(node);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target as HTMLElement;
          node.classList.add("is-text-visible");
          textObserver.unobserve(node);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -7% 0px" }
    );

    textNodes.forEach((node, index) => {
      node.classList.add("text-scroll-reveal");
      node.style.setProperty("--text-delay", `${Math.min(index % 4, 3) * 55}ms`);
      textObserver.observe(node);
    });

    revealNodes.forEach((node) => revealObserver.observe(node));
    cardNodes.forEach((node) => cardObserver.observe(node));

    return () => {
      revealObserver.disconnect();
      cardObserver.disconnect();
      textObserver.disconnect();
    };
  }, []);
}

function AboutIcon({ type }: { type: string }) {
  const common = "h-6 w-6";

  if (type === "layers") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="m12 3 8 4-8 4-8-4 8-4Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="m4 12 8 4 8-4M4 17l8 4 8-4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }

  if (type === "orbit") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="4.3" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="9" ry="4.3" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4.3" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.4" />
        <path d="m7 15 4-4 3 2 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 7h3v3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-space">
      <div className="about-wrapper">
        <div
          data-reveal
          className="reveal relative overflow-hidden rounded-[22px] border border-white/8 bg-[#0b0b0b]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(22,119,255,.08),transparent_24%),radial-gradient(circle_at_88%_82%,rgba(22,119,255,.08),transparent_26%)]" />

          <div className="relative z-10 grid gap-10 px-5 py-8 md:px-10 md:py-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 xl:px-12">
            <div>
              <p className="section-label">{aboutContent.label}</p>
              <h2 className="max-w-[720px] text-[clamp(2.6rem,4.6vw,5.3rem)] font-medium leading-[.94] tracking-[-0.055em]">
                {aboutContent.title}
              </h2>
            </div>

            <div className="flex items-end lg:justify-end">
              <p className="max-w-[560px] text-[13px] leading-6 text-white/46 md:text-[15px] md:leading-7">
                {aboutContent.description}
              </p>
            </div>
          </div>

          <div className="relative z-10 grid border-t border-white/8 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPillars.map((item, index) => (
              <article
                key={item.title}
                data-scroll-card
                data-scroll-delay={index * 80}
                className="scroll-card min-h-[210px] border-white/8 p-5 sm:border-r sm:last:border-r-0 md:p-7 lg:min-h-[230px]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-full border border-[#1677FF]/25 bg-[#1677FF]/5 text-[#1677FF]">
                  <AboutIcon type={item.icon} />
                </div>

                <h3 className="mt-8 text-[18px] font-medium tracking-[-0.025em] text-white md:text-[20px]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[250px] text-[11px] leading-5 text-white/38 md:text-[12px]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VenturesSection() {
  return (
    <section id="ventures" className="relative overflow-hidden pb-24 pt-10 md:pb-36 md:pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          viewBox="0 0 640 640"
          className="absolute right-[-12%] top-[8%] h-[78%] w-auto text-white/[0.035] md:right-[-2%] md:top-[4%] md:h-[90%]"
          fill="currentColor"
          aria-hidden="true"
        >
          <g transform="translate(64 92)">
            <path d="M40 70 212 170 212 270 40 170Z" />
            <path d="M472 70 300 170 300 270 472 170Z" />
            <path d="M40 210 212 310 212 410 40 310Z" />
            <path d="M472 210 300 310 300 410 472 310Z" />
            <path d="M212 170 256 196 300 170 300 270 256 296 212 270Z" />
          </g>
        </svg>
      </div>

      <div className="about-wrapper relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div data-reveal className="reveal lg:col-span-3">
            <p className="section-label">Our Ventures</p>
          </div>

          <div className="lg:col-span-9">
            <div className="grid gap-6 md:grid-cols-2 lg:relative lg:block lg:min-h-[1180px]">
              {ventures.map((venture, index) => {
                const placement =
                  index === 0
                    ? "lg:absolute lg:left-[41.667%] lg:top-0 lg:w-[58.333%]"
                    : index === 1
                      ? "lg:absolute lg:-left-[30%] lg:top-[230px] lg:w-[58.333%]"
                      : "lg:absolute lg:left-[24%] lg:top-[665px] lg:w-[58.333%]";

                return (
                  <article
                    key={venture.name}
                    data-scroll-card
                    data-scroll-delay={index * 100}
                    className={
                      "scroll-card group relative flex min-h-[410px] flex-col overflow-hidden border border-white/8 bg-[#101010] p-6 md:min-h-[430px] md:p-8 lg:h-[430px] lg:min-h-0 " +
                      placement
                    }
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.018),transparent_38%)]" />

                    <div className="relative z-10 flex h-full flex-col">
                      <span className="text-[clamp(2.2rem,4vw,4.6rem)] font-semibold leading-none tracking-[-0.06em] text-[#1677FF]">
                        0{index + 1}
                      </span>

                      <h3 className="mt-8 text-[clamp(2rem,3.3vw,4rem)] font-semibold leading-[.92] tracking-[-0.055em] text-white">
                        {venture.name}
                      </h3>

                      <p className="mt-3 text-[13px] font-medium text-white/68">
                        {venture.tagline}
                      </p>

                      <p className="mt-5 max-w-[470px] text-[12px] leading-6 text-white/40">
                        {venture.copy}
                      </p>

                      <div className="mt-7 grid gap-2.5 border-t border-white/8 pt-6">
                        {venture.services.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 text-[11px] leading-5 text-white/50"
                          >
                            <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1677FF]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>


                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState(0);
  const [serviceProgress, setServiceProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section || window.innerWidth < 1024) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrollRange = Math.max(section.offsetHeight - window.innerHeight, 1);
      const raw = (window.scrollY - sectionTop) / scrollRange;
      const progress = Math.min(1, Math.max(0, raw));
      const index = Math.min(
        services.length - 1,
        Math.floor(progress * services.length)
      );

      setServiceProgress(progress);
      setActiveService(index);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToService = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const scrollRange = Math.max(section.offsetHeight - window.innerHeight, 1);
    const targetProgress =
      services.length === 1
        ? 0
        : Math.min(0.99, index / services.length + 0.01);

    window.scrollTo({
      top: sectionTop + scrollRange * targetProgress,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative isolate bg-[#050505] text-white lg:h-[700svh]"
      data-no-text-reveal
    >
      {/* Mobile / tablet: normal flow, no pinning */}
      <div className="about-wrapper py-20 lg:hidden">
        <div className="mb-10">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1677FF]">
            Services
          </p>
          <h2 className="max-w-[520px] text-[clamp(2.7rem,8vw,4.7rem)] font-semibold leading-[.92] tracking-[-0.055em]">
            What we build, grow and teach.
          </h2>
        </div>

        <div className="divide-y divide-white/10">
          {services.map((service, index) => (
            <article
              key={service.no}
              data-scroll-card
              data-scroll-delay={index * 70}
              className="scroll-card py-9 first:pt-0"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="max-w-[280px] text-[clamp(2rem,8vw,3.2rem)] font-semibold leading-[.92] tracking-[-0.05em]">
                  {service.title}
                </h3>
                <span className="text-[12px] font-semibold text-[#1677FF]">
                  {service.no}
                </span>
              </div>

              <div className="mt-6 aspect-[1.35/1] overflow-hidden bg-[#101010]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-6 max-w-[560px] text-[14px] leading-6 text-white/55">
                {service.copy}
              </p>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {service.meta.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[13px] leading-5 text-white/58"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Desktop: pinned scroll-driven services stage */}
      <div className="sticky top-0 hidden h-[100svh] overflow-hidden bg-[#050505] lg:flex">
        <div className="about-wrapper grid h-full min-h-0 grid-cols-12 items-center gap-8 py-8 xl:gap-10 xl:py-10">
          <div className="col-span-5 flex h-full min-h-0 flex-col justify-center">
            <p className="mb-8 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1677FF]">
              Services
            </p>

            <div className="flex flex-col items-start">
              {services.map((service, index) => {
                const isActive = index === activeService;

                return (
                  <button
                    key={service.no}
                    type="button"
                    onClick={() => scrollToService(index)}
                    className={
                      "whitespace-nowrap text-left text-[32px] font-semibold leading-[1.02] tracking-[-0.045em] transition-all duration-300 " +
                      (isActive
                        ? "translate-x-3 text-white opacity-100"
                        : "text-white opacity-18 hover:opacity-50")
                    }
                  >
                    {service.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="col-span-2 flex h-[68%] min-h-0 flex-col items-center justify-between">
            <div className="relative h-full w-px overflow-hidden bg-white/12">
              <div
                className="absolute left-0 top-0 w-px bg-white transition-[height] duration-150"
                style={{ height: `${Math.max(serviceProgress * 100, 2)}%` }}
              />
            </div>

            <div className="mt-5 flex items-center gap-2 bg-black px-2.5 py-1.5 text-[12px] font-semibold text-white">
              <span>{String(activeService + 1).padStart(2, "0")}</span>
              <span className="h-px w-5 bg-[#1677FF]" />
              <span>{String(services.length).padStart(2, "0")}</span>
            </div>
          </div>

          <div className="col-span-5 flex h-full min-h-0 flex-col justify-center">
            <div className="relative h-[34svh] min-h-[210px] max-h-[340px] overflow-hidden bg-[#101010]">
              {services.map((service, index) => (
                <img
                  key={service.no}
                  src={service.image}
                  alt={service.title}
                  className={
                    "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] " +
                    (index === activeService
                      ? "translate-y-0 scale-100 opacity-100"
                      : index < activeService
                        ? "-translate-y-[105%] scale-[1.01] opacity-0"
                        : "translate-y-[105%] scale-[1.01] opacity-0")
                  }
                />
              ))}
            </div>

            <div className="relative mt-6 min-h-[170px]">
              {services.map((service, index) => (
                <div
                  key={service.no}
                  className={
                    "absolute inset-0 transition-all duration-500 " +
                    (index === activeService
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-6 opacity-0")
                  }
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1677FF]">
                        {service.no} / Service
                      </p>
                      <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-white/58">
                        {service.copy}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-2">
                    {service.meta.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[13px] leading-5 text-white/58"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="relative z-10 bg-[#050505] pb-20 pt-10 md:pb-28 md:pt-14">
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
                data-scroll-card
                data-scroll-delay={index * 90}
                className={"reveal scroll-card group relative overflow-hidden rounded-[14px] border border-white/8 bg-[#0d0d0d] " + layout}
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
  return (
    <section className="overflow-hidden border-y border-white/8 py-8 md:py-12">
      <div className="marquee items-center whitespace-nowrap text-[clamp(3rem,8vw,8rem)] font-semibold leading-none tracking-[-0.065em]">
        {[0, 1].map((loop) => (
          <span key={loop} className="mr-[0.18em] inline-flex items-center gap-[0.18em]">
            {marqueeItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-[0.18em] text-white/28 transition-colors duration-500 hover:text-white">
                <span>{item}</span>
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
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="overflow-hidden pb-20 pt-12 md:pb-28 md:pt-16">
      <div className="w-full">
        <div data-reveal className="reveal mx-auto max-w-[900px] px-4 text-center md:px-8">
          <p className="section-label mb-3">Client stories</p>
          <h2 className="mx-auto max-w-[580px] text-[clamp(2rem,3.6vw,4.2rem)] font-medium leading-[.94] tracking-[-0.05em]">
            Trusted by Brands, Backed
            <span className="block">by Stories</span>
          </h2>
        </div>

        <div className="mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((_, index) => (
              <div key={index} className="w-full shrink-0 px-4 md:px-6 lg:px-8">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {[0, 1, 2].map((offset) => {
                    const itemIndex = (index + offset) % testimonials.length;
                    const card = testimonials[itemIndex];

                    return (
                      <blockquote
                        key={`${card.name}-${offset}`}
                        data-scroll-card
                        data-scroll-delay={offset * 80}
                        className="scroll-card flex min-h-[260px] flex-col justify-between rounded-[16px] border border-white/8 bg-[#0b0b0b] p-5 md:min-h-[280px] md:p-6"
                      >
                        <div>
                          <span className="text-[18px] leading-none text-[#1677FF]">“</span>
                          <p className="mt-5 text-[12px] leading-6 text-white/52 md:text-[13px]">
                            {card.quote}
                          </p>
                        </div>

                        <footer className="mt-8 flex items-center gap-3 border-t border-white/7 pt-4">
                          <img
                            src={card.avatar}
                            alt={card.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-[12px] font-medium text-white">{card.name}</p>
                            <p className="mt-0.5 text-[10px] text-white/32">{card.role}</p>
                          </div>
                        </footer>
                      </blockquote>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 flex w-full max-w-[1400px] items-center gap-3 px-4 md:px-6 lg:px-8">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-[13px] text-white/45 transition hover:border-[#1677FF]/60 hover:text-white"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="grid h-10 w-10 place-items-center rounded-full bg-[#1677FF] text-[13px] text-white transition hover:scale-105"
          >
            →
          </button>

          <div className="ml-1 h-px flex-1 bg-white/10">
            <div
              className="h-px bg-[#1677FF] transition-all duration-500"
              style={{ width: `${((current + 1) / testimonials.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="pb-20 pt-12 md:pb-28 md:pt-16">
      <div className="work-wrapper">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div data-reveal className="reveal">
            <p className="section-label mb-4">Leadership</p>
            <h2 className="max-w-[330px] text-[clamp(2.2rem,3.6vw,4.1rem)] font-medium leading-[.94] tracking-[-0.05em]">
              Meet the
              <span className="block">— Leadership</span>
            </h2>

            
          </div>

          <div className="divide-y divide-white/8">
            {leaders.map((leader, index) => (
              <article
                key={`${leader.name}-${index}`}
                data-reveal
                data-scroll-card
                data-scroll-delay={index * 100}
                className="reveal scroll-card grid gap-6 py-7 first:pt-0 md:grid-cols-[1fr_150px] md:items-center md:gap-10"
              >
                <div>
                  <h3 className="text-[16px] font-medium text-white md:text-[18px]">{leader.name}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/34">{leader.role}</p>
                  <p className="mt-6 max-w-[470px] text-[11px] leading-5 text-white/38 md:text-[12px] md:leading-6">
                    {leader.copy}
                  </p>
                </div>

                <div className="relative mx-auto h-[136px] w-[136px] md:mx-0 md:justify-self-end">
                  <svg
                    viewBox="0 0 100 100"
                    className="h-full w-full overflow-visible"
                    role="img"
                    aria-label={leader.name}
                  >
                    <defs>
                      <clipPath id={`leader-blob-${index}`} clipPathUnits="userSpaceOnUse">
                        <path d="M31 8C39 8 44 13 50 18C56 13 61 8 69 8C83 8 92 19 92 33C92 41 87 46 82 50C87 54 92 59 92 67C92 81 81 92 67 92C59 92 54 87 50 82C46 87 41 92 33 92C19 92 8 81 8 67C8 59 13 54 18 50C13 46 8 41 8 33C8 19 19 8 31 8Z" />
                      </clipPath>
                    </defs>

                    <image
                      href={leader.image}
                      x="0"
                      y="0"
                      width="100"
                      height="100"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#leader-blob-${index})`}
                      className="grayscale"
                    />

                    <path
                      d="M31 8C39 8 44 13 50 18C56 13 61 8 69 8C83 8 92 19 92 33C92 41 87 46 82 50C87 54 92 59 92 67C92 81 81 92 67 92C59 92 54 87 50 82C46 87 41 92 33 92C19 92 8 81 8 67C8 59 13 54 18 50C13 46 8 41 8 33C8 19 19 8 31 8Z"
                      fill="none"
                      stroke="rgba(255,255,255,.1)"
                      strokeWidth="1"
                    />
                  </svg>

                  {index === 1 && (
                    <span className="absolute bottom-0 right-0 grid h-8 w-8 place-items-center rounded-full bg-[#1677FF] text-[9px] text-white">
                      <Arrow />
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JournalSection() {
  return (
    <section id="journal" className="section-space">
      <div className="site-wrapper">
        <div data-reveal className="reveal grid gap-6 lg:grid-cols-2">
          <div><p className="section-label">Journal</p><h2 className="section-title mt-4">Insight from the studio.</h2></div>
          <p className="max-w-md self-end text-sm leading-6 text-white/45 lg:justify-self-end">Short notes on design, product thinking, technology and digital growth.</p>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {insights.map(([tag,title],index) => (
            <article key={title} data-reveal data-scroll-card data-scroll-delay={index * 90} className="reveal scroll-card group flex min-h-[330px] flex-col justify-between rounded-[20px] border border-white/8 bg-[#0b0b0b] p-5 transition hover:-translate-y-1 hover:border-white/20">
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
      <VenturesSection />
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
