"use client";

import { useEffect, useRef, useState } from "react";
import Arrow from "./Arrow";
import { services } from "../../data/services";
import { aboutContent, aboutPillars } from "../../data/about";
import { ventures } from "../../data/ventures";
import { projects } from "../../data/projects";
import { whyChoose } from "../../data/whyChoose";
import { marqueeItems } from "../../data/marquee";
import { testimonials } from "../../data/testimonials";
import { leaders, teamMembers } from "../../data/leaders";
import { impactStats } from "../../data/impact";

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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (
      !section ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const revealItems = Array.from(
      section.querySelectorAll<HTMLElement>("[data-about-reveal]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-about-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );

    revealItems.forEach((item) => observer.observe(item));
    section.classList.add("about-motion-ready");

    return () => {
      observer.disconnect();
      section.classList.remove("about-motion-ready");
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-space about-mobile-section"
      data-no-text-reveal
    >
      <div className="about-wrapper">
        <div className="relative overflow-hidden rounded-[18px] bg-[#0b0b0b] md:rounded-[22px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(22,119,255,.08),transparent_24%),radial-gradient(circle_at_88%_82%,rgba(22,119,255,.08),transparent_26%)]" />

          <div className="relative z-10 grid gap-5 px-5 pb-6 pt-7 sm:gap-8 md:gap-10 md:px-10 md:py-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 xl:px-12">
            <div data-about-reveal className="about-reveal">
              <p className="section-label">{aboutContent.label}</p>
              <h2 className="max-w-[14ch] text-[clamp(2.2rem,10vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.055em] sm:max-w-[720px] md:text-[clamp(2.6rem,4.6vw,5.3rem)] md:font-medium md:leading-[.94]">
                {aboutContent.title}
              </h2>
            </div>

            <div data-about-reveal className="about-reveal flex items-end lg:justify-end">
              <p className="max-w-[560px] text-[13px] leading-[1.75] text-white/65 md:text-[15px] md:leading-7">
                {aboutContent.description}
              </p>
            </div>
          </div>

          <div className="relative z-10 grid border-t border-white/10 sm:grid-cols-2 sm:border-white/8 lg:grid-cols-4">
            {aboutPillars.map((item, index) => (
              <article
                key={item.title}
                data-about-reveal
                className="about-reveal about-pillar relative px-5 py-5 sm:min-h-[210px] sm:border-r sm:border-white/8 sm:py-7 md:px-7 md:py-8 lg:min-h-[230px] lg:last:border-r-0"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex items-start gap-3.5 sm:block">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#1677FF]/25 bg-[#1677FF]/5 text-[#1677FF] md:h-11 md:w-11">
                    <AboutIcon type={item.icon} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="pt-0.5 text-[17px] font-medium tracking-[-0.025em] text-white sm:mt-8 sm:pt-0 md:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-[300px] text-[12px] leading-[1.65] text-white/60 sm:mt-3 md:max-w-[250px] md:leading-5">
                      {item.copy}
                    </p>
                  </div>
                </div>
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
            <div className="grid items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:relative lg:block lg:min-h-[1080px]">
              {ventures.map((venture, index) => {
                const placement =
                  index === 0
                    ? "lg:absolute lg:left-[43%] lg:top-0 lg:w-[55%]"
                    : index === 1
                      ? "lg:absolute lg:-left-[28%] lg:top-[235px] lg:w-[55%]"
                      : "lg:absolute lg:left-[36%] lg:top-[630px] lg:w-[55%]";

                return (
                  <article
                    key={venture.name}
                    data-scroll-card
                    data-scroll-delay={index * 100}
                    className={
                      "scroll-card group relative flex min-w-0 flex-col overflow-hidden border border-white/8 bg-[#101010] p-5 sm:p-6 md:min-h-[370px] md:p-6 lg:min-h-[390px] lg:p-7 " +
                      placement
                    }
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.018),transparent_38%)]" />

                    <div className="relative z-10 flex h-full flex-col">
                      <span className="text-[clamp(2.3rem,3.5vw,3.7rem)] font-semibold leading-none tracking-[-0.06em] text-[#1677FF]">
                        0{index + 1}
                      </span>

                      <h3 className="mt-5 text-[clamp(1.75rem,2.65vw,2.8rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-white">
                        {venture.name}
                      </h3>

                      <p className="mt-2.5 text-[12px] font-medium text-white/70 md:text-[13px]">
                        {venture.tagline}
                      </p>

                      <p className="mt-3.5 max-w-[470px] text-[12px] leading-[1.7] text-white/55">
                        {venture.copy}
                      </p>

                      <div className="mt-5 grid gap-2 border-t border-white/10 pt-4">
                        {venture.services.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2.5 text-[11px] leading-[1.6] text-white/60"
                          >
                            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1677FF]" />
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
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const mobileDragRef = useRef<{ id: number; x: number; scrollLeft: number; moved: boolean } | null>(null);
  const suppressNavClickRef = useRef(false);
  const [activeService, setActiveService] = useState(0);
  const [serviceProgress, setServiceProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section || window.innerWidth < 1024) return;

      const top = section.getBoundingClientRect().top + window.scrollY;
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.max(0, Math.min(1, (window.scrollY - top) / distance));

      setServiceProgress(progress);
      setActiveService(
        Math.min(services.length - 1, Math.floor(progress * services.length))
      );
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) return;
    const track = mobileNavRef.current;
    const active = track?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!track || !active) return;
    const trackRect = track.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    const center = track.scrollLeft + activeRect.left - trackRect.left +
      activeRect.width / 2 - track.clientWidth / 2;
    track.scrollTo({
      left: Math.max(0, center),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, [activeService]);

  const selectService = (index: number) => {
    if (window.innerWidth < 1024) {
      setActiveService(index);
      setServiceProgress((index + 1) / services.length);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY;
    const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
    const destination = Math.min(0.999, (index + 0.08) / services.length);

    window.scrollTo({
      top: top + distance * destination,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  const handleNavPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
    const track = mobileNavRef.current;
    if (!track) return;
    suppressNavClickRef.current = false;
    mobileDragRef.current = {
      id: event.pointerId,
      x: event.clientX,
      scrollLeft: track.scrollLeft,
      moved: false,
    };
  };

  const handleNavPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = mobileDragRef.current;
    const track = mobileNavRef.current;
    if (!drag || !track || drag.id !== event.pointerId) return;
    const distance = event.clientX - drag.x;
    if (Math.abs(distance) < 7 && !drag.moved) return;
    drag.moved = true;
    suppressNavClickRef.current = true;
    track.scrollLeft = drag.scrollLeft - distance;
  };

  const handleNavPointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (mobileDragRef.current?.id === event.pointerId) {
      mobileDragRef.current = null;
    }
  };

  const current = services[activeService];

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-label="Our services"
      className="relative isolate w-full bg-white text-black lg:h-[600svh]"
      data-no-text-reveal
    >
      {/* Mobile/tablet: Northframe-style horizontal navigation and single media stage. */}
      <div className="mx-auto w-full max-w-[660px] px-5 pb-14 pt-16 sm:px-8 lg:hidden">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1677FF]">
            Services
          </p>
          <p className="font-mono text-[11px] text-black/55" aria-live="polite">
            <span className="font-semibold text-black">{current.no}</span>
            <span className="mx-2 text-black/30">—</span>
            {String(services.length).padStart(2, "0")}
          </p>
        </div>

        <nav
          aria-label="Choose a service"
          ref={mobileNavRef}
          onPointerDown={handleNavPointerDown}
          onPointerMove={handleNavPointerMove}
          onPointerUp={handleNavPointerEnd}
          onPointerCancel={handleNavPointerEnd}
          onClickCapture={(event) => {
            if (!suppressNavClickRef.current) return;
            event.preventDefault();
            event.stopPropagation();
            suppressNavClickRef.current = false;
          }}
          className="services-mobile-nav flex w-full snap-x snap-mandatory gap-2 overflow-x-auto pb-3"
        >
          {services.map((service, index) => (
            <button
              key={service.no}
              type="button"
              onClick={() => selectService(index)}
              aria-current={activeService === index ? "true" : undefined}
              className={
                "shrink-0 snap-center whitespace-nowrap rounded-sm px-3.5 py-3 text-[12px] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF] " +
                (activeService === index
                  ? "bg-black text-white"
                  : "bg-[#f2f2f2] text-black/60")
              }
            >
              {service.title}
            </button>
          ))}
        </nav>

        <div className="mb-6 h-[2px] w-full bg-black/10" aria-hidden="true">
          <div
            className="h-full origin-left bg-[#1677FF] transition-[width] duration-300"
            style={{ width: `${((activeService + 1) / services.length) * 100}%` }}
          />
        </div>

        <div key={current.no} className="service-content-enter">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111]">
            <img src={current.image} alt={current.title} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="pt-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1677FF]">
              {current.no} / Service
            </p>
            <h3 className="mt-3 text-[clamp(1.5rem,5vw,2.1rem)] font-semibold tracking-[-0.045em]">
              {current.title}
            </h3>
            <p className="mt-3 text-[14px] leading-7 text-black/65">{current.copy}</p>
            <ul className="mt-5 grid gap-x-5 gap-y-3 sm:grid-cols-2">
              {current.meta.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[12px] leading-5 text-black/65">
                  <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1677FF]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop: full-screen sticky service showcase, inspired by NORTHFRAME DeliverablesSection. */}
      <div className="sticky top-0 hidden h-[100svh] w-full overflow-hidden bg-white lg:flex">
        <div className="mx-auto grid h-full w-[90%] max-w-[1500px] grid-cols-[minmax(0,1fr)_32px_minmax(0,1.1fr)] items-center gap-8 py-10 xl:gap-14">
          <nav aria-label="Choose a service" className="flex min-w-0 flex-col items-center justify-center">
            <div className="w-full max-w-[470px]">
              <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1677FF]">
                Services
              </p>

              <div className="relative flex w-full flex-col gap-1">
                <span
                  aria-hidden="true"
                  className="service-active-indicator pointer-events-none absolute left-0 top-0 h-12 w-full rounded-sm bg-black"
                  style={{ transform: `translate3d(0, ${activeService * 52}px, 0)` }}
                />
                {services.map((service, index) => (
                  <button
                    key={service.no}
                    type="button"
                    onClick={() => selectService(index)}
                    aria-current={activeService === index ? "true" : undefined}
                    className={
                      "relative z-10 flex h-12 min-w-0 w-full items-center justify-center px-2 text-center text-[clamp(14px,1.6vw,23px)] font-semibold tracking-[-0.045em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF] " +
                      (activeService === index ? "text-white" : "text-black/35 hover:text-black/80")
                    }
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          <div className="flex h-[48svh] max-h-[460px] min-h-[250px] flex-col items-center justify-between">
            <div className="relative min-h-0 w-[2px] flex-1 overflow-hidden bg-black/10">
              <div
                className="absolute inset-0 origin-top bg-[#1677FF] transition-transform duration-150"
                style={{ transform: `scaleY(${Math.max(1 / services.length, serviceProgress)})` }}
              />
            </div>
            <p className="mt-5 whitespace-nowrap font-mono text-[11px] font-semibold">
              {current.no}
              <span className="mx-2 text-[#1677FF]">—</span>
              {String(services.length).padStart(2, "0")}
            </p>
          </div>

          <div className="flex min-w-0 flex-col justify-center">
            <div className="relative h-[31svh] min-h-[190px] max-h-[330px] w-full overflow-hidden bg-[#101010]">
              {services.map((service, index) => (
                <img
                  key={service.no}
                  src={service.image}
                  alt={service.title}
                  aria-hidden={index !== activeService}
                  className={
                    "pointer-events-none absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out " +
                    (index === activeService
                      ? "scale-100 opacity-100"
                      : "scale-[1.04] opacity-0")
                  }
                />
              ))}
            </div>

            <div key={current.no} className="service-content-enter mt-6 min-h-[205px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1677FF]">
                {current.no} / Service
              </p>
              <p className="mt-3 max-w-[560px] text-[clamp(13px,1vw,15px)] leading-[1.7] text-black/65">
                {current.copy}
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                {current.meta.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12px] leading-5 text-black/65">
                    <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1677FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseIcon({ type }: { type: string }) {
  const common = "h-6 w-6";

  if (type === "growth") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.4" />
        <path d="m7 15 4-4 3 2 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 7h3v3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }

  if (type === "ecosystem") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="18" cy="7" r="2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="18" cy="17" r="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="m8 11 8-3M8 13l8 3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }

  if (type === "talent") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 19c.8-4 3-6 7-6s6.2 2 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M18 3v4M16 5h4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }

  if (type === "partnership") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="m8 12 2.2 2.2a2.5 2.5 0 0 0 3.6 0L16 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="m3 10 4-4 4 1 2-1 4 4-3 3M21 10l-4-4-4 1" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      <path d="M12 3 19 6v5c0 4.4-2.8 7.5-7 10-4.2-2.5-7-5.6-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="relative z-10 bg-[#050505] pb-20 pt-10 md:pb-28 md:pt-14">
      <div data-reveal className="reveal about-wrapper">
        <div className="relative overflow-hidden rounded-[22px] border border-white/8 bg-[#0b0b0b]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(22,119,255,.11),transparent_24%),radial-gradient(circle_at_88%_84%,rgba(22,119,255,.08),transparent_26%)]" />

          <div className="relative z-10 grid gap-10 p-5 md:p-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-14 xl:p-10">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#1677FF]">
                Why Choose Cubixmet
              </p>

              <h2 className="max-w-[560px] text-[clamp(2.4rem,4.2vw,4.8rem)] font-medium leading-[.96] tracking-[-0.055em]">
                We don&apos;t just deliver services —
                <span className="block text-white/38">we engineer growth ecosystems.</span>
              </h2>
            </div>

            <div className="divide-y divide-white/8 border-t border-white/8 lg:border-t-0">
              {whyChoose.map((item, index) => (
                <article
                  key={item.title}
                  data-scroll-card
                  data-scroll-delay={index * 80}
                  className="scroll-card grid gap-5 py-6 first:pt-6 md:grid-cols-[54px_1fr_auto] md:items-start md:py-7"
                >
                  <div className="grid h-11 w-11 place-items-center border border-[#1677FF]/25 bg-[#1677FF]/5 text-[#1677FF]">
                    <WhyChooseIcon type={item.icon} />
                  </div>

                  <div>
                    <h3 className="text-[18px] font-medium tracking-[-0.03em] text-white md:text-[22px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[500px] text-[11px] leading-5 text-white/40 md:text-[12px] md:leading-6">
                      {item.copy}
                    </p>
                  </div>

                  <span className="text-[10px] font-semibold tracking-[0.12em] text-white/20">
                    0{index + 1}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  const [portfolioFilter, setPortfolioFilter] = useState<
    "All" | "Dynamic Website" | "Digital Marketing"
  >("All");

  const filters = ["All", "Dynamic Website", "Digital Marketing"] as const;
  const filteredProjects =
    portfolioFilter === "All"
      ? projects
      : projects.filter((project) => project.category === portfolioFilter);

  return (
    <section id="work" className="pb-20 pt-8 md:pb-28 md:pt-12" data-no-text-reveal>
      <div className="about-wrapper">
        <div data-reveal className="reveal grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label">Our Portfolio</p>
            <h2 className="max-w-[720px] text-[clamp(2.8rem,5.1vw,5.8rem)] font-medium leading-[.92] tracking-[-0.06em]">
              Selected work across web and digital growth.
            </h2>
          </div>

          <p className="max-w-[540px] text-[13px] leading-6 text-white/45 md:text-[15px] md:leading-7 lg:justify-self-end">
            A selection of projects showcasing our web development and digital marketing capabilities.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-y border-white/8 py-4">
          {filters.map((filter) => {
            const active = portfolioFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setPortfolioFilter(filter)}
                className={
                  "rounded-full border px-4 py-2 text-[11px] font-medium transition-all duration-300 " +
                  (active
                    ? "border-[#1677FF] bg-[#1677FF] text-white"
                    : "border-white/10 text-white/45 hover:border-white/25 hover:text-white")
                }
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              data-scroll-card
              data-scroll-delay={(index % 6) * 70}
              className="scroll-card group overflow-hidden border border-white/8 bg-[#0b0b0b]"
            >
              <div className="relative aspect-[1.35/1] overflow-hidden bg-[#101010]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/72 backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-5">
                  <h3 className="text-[26px] font-semibold leading-[.98] tracking-[-0.045em] text-white md:text-[30px]">
                    {project.name}
                  </h3>

                  <span className="text-[10px] font-medium text-white/22">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 min-h-[72px] text-[12px] leading-6 text-white/42">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/8 pt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] text-white/52"
                    >
                      {tag}
                    </span>
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

function MarqueeSection() {
  return (
    <section
      aria-label="Our capabilities"
      className="relative w-full overflow-hidden bg-[#050505] py-5 sm:py-6 md:py-8"
      data-no-text-reveal
    >
      <div className="marquee-viewport w-full overflow-hidden">
        <div className="marquee items-center whitespace-nowrap text-[clamp(1.65rem,4.6vw,4.4rem)] font-semibold leading-[1.12] tracking-[-0.045em]">
          {[0, 1].map((loop) => (
            <div
              key={loop}
              aria-hidden={loop === 1}
              className="inline-flex shrink-0 items-center gap-[0.4em] pr-[0.4em]"
            >
              {marqueeItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex shrink-0 items-center gap-[0.4em] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  <span>{item}</span>
                  <span className="inline-flex shrink-0 text-[#1677FF]/85" aria-hidden="true">
                    <FlowerSeparator />
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
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
    <section id="team" className="pb-20 pt-12 md:pb-28 md:pt-16">
      <div className="work-wrapper">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div data-reveal className="reveal">
            <p className="section-label mb-4">Meet the Team</p>
            <h2 className="max-w-[370px] text-[clamp(2.2rem,3.6vw,4.1rem)] font-medium leading-[.94] tracking-[-0.05em]">
              The minds behind
              <span className="block">— Cubixmet</span>
            </h2>
          </div>

          <div className="divide-y divide-white/8">
            {leaders.map((leader, index) => (
              <article
                key={leader.name}
                data-reveal
                data-scroll-card
                data-scroll-delay={index * 100}
                className="reveal scroll-card grid gap-6 py-8 first:pt-0 md:grid-cols-[1fr_150px] md:items-center md:gap-10"
              >
                <div>
                  <h3 className="text-[18px] font-semibold text-white md:text-[20px]">
                    {leader.name}
                  </h3>

                  <p className="mt-1 text-[10px] font-medium uppercase leading-5 tracking-[0.1em] text-white/38">
                    {leader.role}
                  </p>

                  <p className="mt-6 max-w-[500px] text-[11px] leading-5 text-white/38 md:text-[12px] md:leading-6">
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
                    <path
                      d="M31 8C39 8 44 13 50 18C56 13 61 8 69 8C83 8 92 19 92 33C92 41 87 46 82 50C87 54 92 59 92 67C92 81 81 92 67 92C59 92 54 87 50 82C46 87 41 92 33 92C19 92 8 81 8 67C8 59 13 54 18 50C13 46 8 41 8 33C8 19 19 8 31 8Z"
                      fill="#0d0d0d"
                      stroke="rgba(255,255,255,.12)"
                      strokeWidth="1"
                    />
                    <text
                      x="50"
                      y="56"
                      textAnchor="middle"
                      fill="#1677FF"
                      fontSize="22"
                      fontWeight="700"
                      letterSpacing="-1"
                    >
                      {leader.initials}
                    </text>
                  </svg>

                  <a
                    href={leader.href}
                    aria-label={`Open ${leader.name} profile`}
                    className="absolute bottom-0 right-0 grid h-8 w-8 place-items-center rounded-full bg-[#1677FF] text-[9px] text-white transition hover:scale-105"
                  >
                    <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {teamMembers.length > 0 && (
          <div className="mt-12 border-t border-white/8 pt-8 md:mt-16 md:pt-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1677FF]">
                Team Members
              </p>
              <p className="text-[10px] uppercase tracking-[0.14em] text-white/22">
                Auto loop
              </p>
            </div>

            <div className="team-slider-viewport overflow-hidden">
              <div className="team-slider-track flex w-max gap-3">
                {[...teamMembers, ...teamMembers].map((member, index) => (
                  <article
                    key={`${member.name}-${index}`}
                    className="flex w-[250px] shrink-0 items-center gap-4 border border-white/8 bg-[#0b0b0b] p-4 md:w-[310px] md:p-5"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center border border-[#1677FF]/25 bg-[#1677FF]/5 text-[12px] font-semibold text-[#1677FF]">
                      {member.initials}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-[15px] font-semibold tracking-[-0.025em] text-white md:text-[17px]">
                        {member.name}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-[9px] uppercase leading-4 tracking-[0.08em] text-white/38 md:text-[10px]">
                        {member.role}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ImpactCounter({ value }: { value: string }) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = numberRef.current;
    if (!node) return;

    const target = Number.parseInt(value.replace(/\D/g, ""), 10) || 0;
    let frame = 0;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;

        const startedAt = performance.now();
        const duration = 1000;

        const animate = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(target * eased));

          if (progress < 1) {
            frame = requestAnimationFrame(animate);
          }
        };

        frame = requestAnimationFrame(animate);
        observer.unobserve(node);
      },
      { threshold: 0.45 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={numberRef}>
      {count}
      {value.includes("+") ? "+" : ""}
    </span>
  );
}

function ImpactSection() {
  return (
    <section id="impact" className="section-space">
      <div className="about-wrapper">
        <div
          data-reveal
          className="reveal relative overflow-hidden rounded-[22px] border border-white/8 bg-[#0b0b0b]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(22,119,255,.10),transparent_26%),radial-gradient(circle_at_86%_84%,rgba(22,119,255,.06),transparent_24%)]" />

          <div className="relative z-10 px-5 py-8 md:px-8 md:py-10 xl:px-10">
            <p className="section-label mb-0">Our Impact</p>
          </div>

          <div className="relative z-10 grid border-t border-white/8 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((item, index) => (
              <article
                key={item.label}
                data-scroll-card
                data-scroll-delay={index * 80}
                className="scroll-card min-h-[190px] border-white/8 p-5 sm:border-r sm:nth-[2n]:border-r-0 md:min-h-[220px] md:p-7 lg:min-h-[240px] lg:border-r lg:last:border-r-0"
              >
                <div className="flex h-full flex-col justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.14em] text-white/20">
                    0{index + 1}
                  </span>

                  <div>
                    <strong className="block text-[clamp(3rem,5.5vw,6.5rem)] font-semibold leading-none tracking-[-0.065em] text-[#1677FF]">
                      <ImpactCounter value={item.value} />
                    </strong>
                    <p className="mt-4 text-[13px] font-medium text-white/58 md:text-[14px]">
                      {item.label}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
      <MarqueeSection />
      <AboutSection />
      <VenturesSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <TestimonialsSection />
      <LeadershipSection />
      <ImpactSection />
      <ContactSection />
    </>
  );
}
