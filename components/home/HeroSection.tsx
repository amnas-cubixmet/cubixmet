"use client";

import { useEffect, useState } from "react";
import Arrow from "./Arrow";

const heroProjects = [
  {
    title: "Brand System",
    type: "Branding",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=82",
  },
  {
    title: "Mobile Product",
    type: "UI / UX",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1000&q=82",
  },
  {
    title: "Digital Platform",
    type: "Web",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1300&q=82",
  },
  {
    title: "Creative Studio",
    type: "Campaign",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=82",
  },
  {
    title: "Workspace",
    type: "Experience",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=82",
  },
  {
    title: "Product Story",
    type: "Content",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=82",
  },
  {
    title: "Launch Campaign",
    type: "Growth",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=82",
  },
];

export default function HeroSection() {
  const [activeCard, setActiveCard] = useState(2);
  const [paused, setPaused] = useState(false);

  const goNext = () => setActiveCard((current) => (current + 1) % heroProjects.length);
  const goPrev = () => setActiveCard((current) => (current - 1 + heroProjects.length) % heroProjects.length);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(goNext, 3200);
    return () => window.clearInterval(timer);
  }, [paused]);

  const visibleProjects = [-2, -1, 0, 1].map((offset) => {
    const index = (activeCard + offset + heroProjects.length) % heroProjects.length;
    return { ...heroProjects[index], index, offset };
  });

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#050505] pt-[54px] md:pt-[58px]">
      <div className="pointer-events-none absolute left-3 top-[72px] z-[5] hidden h-24 w-24 opacity-55 md:block xl:left-5 xl:h-28 xl:w-28">
        <div className="relative h-full w-full rotate-[-12deg]">
          {[0, 34, 72, 112, 154, 202].map((angle, index) => (
            <span
              key={angle}
              className="absolute left-1/2 top-1/2 h-[58%] w-[24%] origin-[50%_8%] rounded-full bg-[linear-gradient(90deg,#0b2f63_0%,#1677FF_46%,#0f4fb0_100%)] shadow-[inset_-8px_-8px_16px_rgba(0,0,0,.28),inset_7px_6px_12px_rgba(255,255,255,.16)]"
              style={{
                transform: `translate(-50%,-6%) rotate(${angle}deg)`,
                zIndex: index % 2 === 0 ? 2 : 1,
              }}
            />
          ))}
          <span className="absolute left-1/2 top-1/2 z-[3] h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_28%,#4da2ff,#1677FF_55%,#0b3f8a_100%)] shadow-[inset_-6px_-7px_12px_rgba(0,0,0,.25)]" />
        </div>
      </div>
      <div className="relative z-10 flex min-h-[calc(100svh-54px)] flex-col md:min-h-[calc(100svh-58px)]">
        <div className="hero-text-wrapper grid flex-1 items-center gap-8 pb-8 pt-10 md:pb-10 md:pt-12 lg:grid-cols-[1fr_360px]">
          <div className="max-w-[900px]">
            <h1 className="text-[clamp(3.15rem,8.3vw,8.1rem)] font-semibold leading-[0.88] tracking-[-0.068em]">
              <span className="block">We Build</span>
              <span className="block"><span className="font-serif font-normal italic">— Brands</span> that</span>
              <span className="block">Stand Out</span>
            </h1>
          </div>

          <div className="relative hidden self-center lg:block">
            <div className="relative mb-12 ml-10 h-32 w-32">
              <svg
                viewBox="0 0 100 100"
                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible [filter:drop-shadow(0_0_26px_rgba(89,105,45,.10))]"
                aria-hidden="true"
              >
                <path
                  d="M 8.70 6.24 L 5.42 9.69 L 2.96 13.46 L 0.99 18.23 L 0 23.48 L 0.82 32.18 L 2.79 37.27 L 7.06 43.68 L 8.05 47.62 L 7.55 54.84 L 2.30 63.88 L 0.16 71.92 L 0.33 78 L 1.64 83.25 L 3.78 87.68 L 7.22 92.12 L 14.45 97.37 L 18.88 99.01 L 23.81 99.84 L 28.90 99.67 L 34.32 98.36 L 38.75 96.22 L 42.86 93.27 L 47.45 91.95 L 52.55 91.95 L 55.50 92.61 L 64.04 97.70 L 68.47 99.18 L 72.91 99.84 L 77.83 99.67 L 83.09 98.36 L 86.70 96.72 L 91.30 93.43 L 94.91 89.49 L 97.54 85.06 L 99.18 80.30 L 99.84 75.70 L 99.51 70.11 L 98.03 64.86 L 93.10 56.98 L 91.79 52.55 L 92.28 44.99 L 97.70 35.80 L 99.34 30.71 L 99.84 26.93 L 99.51 21.35 L 98.36 16.91 L 95.57 11.33 L 93.10 8.21 L 89 4.60 L 85.06 2.30 L 81.61 0.99 L 76.19 0 L 70.77 0.16 L 66.50 1.15 L 61.41 3.45 L 56.65 6.73 L 51.56 7.88 L 45.16 7.39 L 42.53 6.40 L 35.47 1.97 L 27.42 0 L 22 0.16 L 18.23 0.99 L 13.14 3.12 Z"
                  fill="rgba(30,35,24,.80)"
                />
              </svg>
              <div className="relative z-10 grid h-full w-full place-items-center text-center">
                <span className="text-[9px] leading-4 text-white/45">
                  <strong className="block text-[34px] leading-none text-white">12+</strong>
                  Your trust builds us
                </span>
              </div>
            </div>

            <div className="max-w-[330px]">
              <p className="text-[11px] leading-[1.55] text-white/52">
                Easily connect your SEO-optimized content to your WordPress effortless publishing —
                <span className="text-[#1677FF]"> helping you stay consistent, save time, and grow faster.</span>
              </p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1677FF] px-4 py-2 text-[10px] font-bold text-white">
                Let&apos;s Talk <Arrow />
              </a>
            </div>
          </div>
        </div>

        <div
          className="relative overflow-hidden pb-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div key={activeCard} className="hero-slider-step mx-auto grid w-[104%] -translate-x-[2%] grid-cols-[.72fr_.9fr_1.55fr_.9fr] items-end gap-3 md:gap-4">
            {visibleProjects.map((project, slot) => {
              const position =
                slot === 0
                  ? "translate-y-4"
                  : slot === 1
                    ? "translate-y-8"
                    : slot === 2
                      ? ""
                      : "translate-y-7";

              const isActive = project.index === activeCard;

              return (
                <article
                  key={`${project.index}-${slot}`}
                  onClick={() => setActiveCard(project.index)}
                  tabIndex={0}
                  onFocus={() => setActiveCard(project.index)}
                  className={"hero-card hero-project-card group relative cursor-pointer overflow-hidden rounded-[10px] border border-white/10 bg-[#0c0d0c] " + position + (isActive ? " hero-project-card-active" : "")}
                >
                  <div className={slot === 2 ? "aspect-[1.7/1]" : "aspect-[.78/1]"}>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading={slot < 3 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                    <div className={isActive ? "block" : "hidden md:block"}>
                      <p className="text-[8px] uppercase tracking-[0.14em] text-white/45">{project.type}</p>
                      <p className="mt-0.5 text-[10px] font-medium text-white/85 md:text-xs">{project.title}</p>
                    </div>

                    {isActive && (
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#1677FF] text-[10px] font-bold text-white md:h-12 md:w-12">
                        ↗
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous project"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-sm text-white/70 transition hover:border-[#1677FF] hover:bg-[#1677FF] hover:text-white"
            >
              ←
            </button>

            <div className="flex items-center gap-1.5">
              {heroProjects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setActiveCard(index)}
                  aria-label={`Show ${project.title}`}
                  className={"h-1.5 rounded-full transition-all duration-300 " + (activeCard === index ? "w-7 bg-[#1677FF]" : "w-1.5 bg-white/20 hover:bg-white/45")}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next project"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-sm text-white/70 transition hover:border-[#1677FF] hover:bg-[#1677FF] hover:text-white"
            >
              →
            </button>
          </div>
        </div>

        <div className="hero-text-wrapper pb-7 pt-6 lg:hidden">
          <div className="flex items-end justify-between gap-5">
            <p className="max-w-[260px] text-[11px] leading-5 text-white/50">
              Strategy, design and development for brands that want to stand out and grow.
            </p>
            <a href="#contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1677FF] px-3.5 py-2 text-[10px] font-bold text-white">
              Let&apos;s Talk <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
