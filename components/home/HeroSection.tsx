"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import Arrow from "./Arrow";
import Image from "next/image";
import { heroProjects } from "../../data/heroProjects";

export default function HeroSection() {
  const [activeCard, setActiveCard] = useState(2);
  const [paused, setPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const hoveredRef = useRef(false);
  const dragRef = useRef<{ pointerId: number; startX: number } | null>(null);

  const goNext = () => setActiveCard((current) => (current + 1) % heroProjects.length);
  const goPrevious = () =>
    setActiveCard((current) => (current - 1 + heroProjects.length) % heroProjects.length);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % heroProjects.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [paused]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
    dragRef.current = { pointerId: event.pointerId, startX: event.clientX };
    event.currentTarget.setPointerCapture(event.pointerId);
    setPaused(true);
    setDragging(true);
    setDragOffset(0);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    setDragOffset(Math.max(-130, Math.min(130, (event.clientX - drag.startX) * 0.55)));
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>, cancelled = false) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.startX;
    dragRef.current = null;
    if (!cancelled && Math.abs(distance) > 45) {
      setActiveCard((current) =>
        (current + (distance < 0 ? 1 : -1) + heroProjects.length) % heroProjects.length
      );
    }
    setDragOffset(0);
    setDragging(false);
    setPaused(hoveredRef.current);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const visibleProjects = [-2, -1, 0, 1].map((offset) => {
    const index = (activeCard + offset + heroProjects.length) % heroProjects.length;
    return { ...heroProjects[index], index, offset };
  });

  const mobileProjects = [-1, 0, 1].map((offset) => {
    const index = (activeCard + offset + heroProjects.length) % heroProjects.length;
    return { ...heroProjects[index], index, offset };
  });

  return (
    <section id="top" className="relative w-full max-w-full overflow-x-clip bg-[#050505] pt-[60px] md:min-h-[82svh] md:pt-[58px]">
      <div className="relative z-10 flex flex-col md:min-h-[calc(82svh-58px)]">
        <div className="hero-text-wrapper grid min-w-0 flex-1 content-center gap-6 pb-4 pt-10 md:min-h-[56svh] md:gap-7 md:pb-12 md:pt-16 lg:min-h-[58svh] lg:grid-cols-[1fr_360px]">
          <div className="min-w-0 max-w-[900px]">
            <h1 className="max-w-full text-[clamp(2.3rem,11vw,3.4rem)] font-semibold leading-[0.98] tracking-[-0.055em] md:text-[clamp(2.9rem,6.4vw,6.3rem)] md:leading-[0.92]">
              <span className="block">Growth Through</span>
              <span className="block">Innovation.</span>
            </h1>

            <div className="mt-6 lg:hidden">
              <div className="hidden items-center gap-3">
                <div className="grid h-[74px] w-[74px] place-items-center rounded-[24px] bg-[#171c13] text-center">
                  <span className="text-[7px] leading-3 text-white/45">
                    <strong className="block text-[24px] leading-none text-white">12+</strong>
                    Your trust builds us
                  </span>
                </div>
              </div>

              <p className="mt-5 max-w-[34ch] text-[12px] leading-[1.65] text-white/65 sm:max-w-[48ch] md:text-[13px]">
                Cubixmet is a multi-venture innovation ecosystem in Pandikkad, Malappuram delivering software development, digital marketing, and IT training solutions across The World.
              </p>

              <a
                href="https://api.whatsapp.com/send/?phone=918921592742&text=Hi+Cubixmet%21+I%27d+like+to+get+started.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-[#1677FF] px-5 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-[#3187ff] lg:mt-4" 
              >
                Let&apos;s Talk <Arrow />
              </a>
            </div>
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
          className="relative w-full max-w-full cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing md:mt-0 md:pb-5"
          onPointerEnter={(event) => {
            if (event.pointerType !== "mouse") return;
            hoveredRef.current = true;
            setPaused(true);
          }}
          onPointerLeave={(event) => {
            if (event.pointerType !== "mouse") return;
            hoveredRef.current = false;
            if (!dragRef.current) setPaused(false);
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={(event) => finishDrag(event)}
          onPointerCancel={(event) => finishDrag(event, true)}
          onDragStart={(event) => event.preventDefault()}
          role="region"
          aria-label="Featured projects — drag or swipe horizontally to browse"
        >
          <div
            style={{
              transform: `translate3d(${dragOffset}px, 0, 0)`,
              transition: dragging ? "none" : "transform 220ms ease-out",
            }}
          >
          {/* Mobile: balanced centered card with subtle side previews. */}
          <div
            key={`mobile-${activeCard}`}
            className="hero-slider-stage-mobile mx-auto flex w-full max-w-full items-center justify-center gap-3 py-3 md:hidden"
          >
            {mobileProjects.map((project, slot) => {
              const isActive = slot === 1;

              return (
                <article
                  key={`mobile-${project.index}-${slot}`}
                  className={
                    "hero-card hero-project-card group relative flex-none overflow-hidden rounded-[12px] border bg-[#0c0d0c] " +
                    (isActive
                      ? "hero-project-card-active h-[clamp(185px,55vw,250px)] w-[min(74vw,360px)]"
                      : "hero-project-card-inactive h-[clamp(155px,45vw,210px)] w-[min(36vw,170px)] border-white/10")
                  }
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={isActive ? "(max-width: 767px) 74vw, 360px" : "(max-width: 767px) 36vw, 170px"}
                    loading={isActive && project.index === 2 ? "eager" : "lazy"}
                    fetchPriority={isActive ? "high" : "auto"}
                    draggable={false}
                    className="pointer-events-none object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                  {isActive && (
                    <div className="pointer-events-none absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4">
                      <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-white/70">
                        {project.type}
                      </p>
                      <p className="mt-1 text-[15px] font-semibold leading-tight text-white sm:text-[17px]">
                        {project.title}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Tablet/Desktop: keep the 4-card composition */}
          <div
            key={`desktop-${activeCard}`}
            className="hero-slider-step mx-auto hidden w-[104%] grid-cols-[.72fr_.9fr_1.55fr_.9fr] items-end gap-3 md:grid md:gap-4"
          >
            {visibleProjects.map((project, slot) => {
              const position =
                slot === 0
                  ? "translate-y-8"
                  : slot === 1
                    ? "translate-y-4"
                    : slot === 2
                      ? "-translate-y-2"
                      : "translate-y-6";

              const isActive = project.index === activeCard;

              return (
                <article
                  key={`${project.index}-${slot}`}
                  className={
                    "hero-card hero-project-card group relative overflow-hidden rounded-[10px] border border-white/10 bg-[#0c0d0c] " +
                    position +
                    (isActive ? " hero-project-card-active" : " hero-project-card-inactive")
                  }
                >
                  <div
                    className={
                      "relative " +
                      (slot === 2
                        ? "aspect-[1.72/1]"
                        : slot === 1
                          ? "aspect-[.86/1]"
                          : slot === 0
                            ? "aspect-[.72/1]"
                            : "aspect-[.8/1]")
                    }
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes={slot === 2 ? "(min-width: 1280px) 40vw, (min-width: 768px) 35vw, 50vw" : "(min-width: 1280px) 22vw, (min-width: 768px) 25vw, 50vw"}
                      loading="lazy"
                      fetchPriority={isActive ? "high" : "auto"}
                      draggable={false}
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/50 md:text-[11px]">
                      {project.type}
                    </p>
                    <p className="mt-1 text-[14px] font-semibold leading-tight text-white md:text-[18px]">
                      {project.title}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
          </div>
          <button
            type="button"
            onClick={goPrevious}
            className="sr-only focus:not-sr-only focus:absolute focus:bottom-3 focus:left-3 focus:z-40 focus:bg-[#1677FF] focus:px-3 focus:py-2 focus:text-white"
          >
            Previous project
          </button>
          <button
            type="button"
            onClick={goNext}
            className="sr-only focus:not-sr-only focus:absolute focus:bottom-3 focus:right-3 focus:z-40 focus:bg-[#1677FF] focus:px-3 focus:py-2 focus:text-white"
          >
            Next project
          </button>
        </div>
      </div>
    </section>
  );
}
