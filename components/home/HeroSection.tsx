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

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(goNext, 3600);
    return () => window.clearInterval(timer);
  }, [paused]);

  const visibleProjects = [-2, -1, 0, 1].map((offset) => {
    const index = (activeCard + offset + heroProjects.length) % heroProjects.length;
    return { ...heroProjects[index], index, offset };
  });

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#050505] pt-[54px] md:pt-[58px]">
      <div className="relative z-10 flex min-h-[calc(100svh-54px)] flex-col md:min-h-[calc(100svh-58px)]">
        <div className="hero-text-wrapper grid flex-1 items-center gap-8 pb-8 pt-10 md:pb-10 md:pt-12 lg:grid-cols-[1fr_360px]">
          <div className="max-w-[900px]">
            <h1 className="text-[clamp(3rem,7.4vw,7.4rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
              <span className="block">Engineering Growth.</span>
              <span className="block">Structuring Innovation.</span>
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
                Cubixmet is a multi-venture innovation ecosystem in Pandikkad, Malappuram delivering software development, digital marketing, and IT training solutions across The World.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=918921592742&text=Hi+Cubixmet%21+I%27d+like+to+get+started.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1677FF] px-4 py-2 text-[10px] font-bold text-white"
              >
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
          <div key={activeCard} className="hero-slider-step mx-auto grid w-[104%] grid-cols-[.72fr_.9fr_1.55fr_.9fr] items-end gap-3 md:gap-4">
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
                  className={"hero-card hero-project-card group relative cursor-pointer overflow-hidden rounded-[10px] border border-white/10 bg-[#0c0d0c] " + position + (isActive ? " hero-project-card-active" : " hero-project-card-inactive")}
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
                      <p className="text-[10px] uppercase tracking-[0.14em] text-white/50 md:text-[11px]">{project.type}</p>
                      <p className="mt-1 text-[14px] font-semibold leading-tight text-white md:text-[18px]">{project.title}</p>
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


        </div>

        <div className="hero-text-wrapper pb-7 pt-6 lg:hidden">
          <div className="flex items-end justify-between gap-5">
            <p className="max-w-[260px] text-[11px] leading-5 text-white/50">
              Strategy, design and development for brands that want to stand out and grow.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=918921592742&text=Hi+Cubixmet%21+I%27d+like+to+get+started.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1677FF] px-3.5 py-2 text-[10px] font-bold text-white"
            >
              Let&apos;s Talk <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
