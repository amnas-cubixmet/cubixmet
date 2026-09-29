"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const HeroCanvas = dynamic(() => import("../components/HeroCanvas"), { ssr: false });

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const p = Math.min(window.scrollY / window.innerHeight, 1);
      heroRef.current.style.setProperty("--scroll", String(p));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-[#02050a] text-white">
      <section ref={heroRef} className="hero relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroCanvas />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_65%_45%,rgba(22,119,255,.08),transparent_34%),linear-gradient(180deg,rgba(2,5,10,.08),rgba(2,5,10,.3))]" />
        <div className="pointer-events-none absolute inset-0 z-[1] opacity-[.14] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

        <header className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-5 py-6 md:px-10 md:py-8">
          <a href="#" className="text-[15px] font-semibold tracking-[.24em]">CUBIXMET</a>
          <nav className="hidden items-center gap-8 text-[11px] font-medium tracking-[.16em] text-white/65 md:flex">
            <a className="transition hover:text-white" href="#work">WORK</a>
            <a className="transition hover:text-white" href="#services">SERVICES</a>
            <a className="transition hover:text-white" href="#about">ABOUT</a>
          </nav>
          <a href="#contact" className="rounded-full border border-white/20 px-4 py-2 text-[10px] font-semibold tracking-[.13em] backdrop-blur-md transition hover:border-[#1677ff] hover:bg-[#1677ff] md:px-5">
            START A PROJECT
          </a>
        </header>

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-8 pt-28 md:px-10 md:pb-10">
          <div className="hero-copy max-w-[1180px]">
            <p className="mb-5 text-[10px] font-medium tracking-[.24em] text-[#6ea8ff] md:mb-7 md:text-xs">
              TECHNOLOGY × DEVELOPMENT × DIGITAL GROWTH
            </p>
            <h1 className="hero-title max-w-[1100px] text-[clamp(3.4rem,10.2vw,9.5rem)] font-medium uppercase leading-[.78] tracking-[-.075em]">
              <span className="block">Building</span>
              <span className="block text-white/95">Digital</span>
              <span className="block text-white/45">Futures.</span>
            </h1>
          </div>

          <div className="mt-8 flex items-end justify-between gap-6 border-t border-white/15 pt-5 md:mt-10">
            <p className="max-w-[420px] text-sm leading-6 text-white/58 md:text-base">
              We design and develop digital products, software and intelligent experiences for ambitious businesses.
            </p>
            <div className="hidden items-center gap-3 text-[10px] tracking-[.18em] text-white/45 sm:flex">
              <span className="h-2 w-2 rounded-full bg-[#1677ff] shadow-[0_0_18px_#1677ff]" />
              SCROLL TO EXPLORE
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 flex min-h-screen items-center bg-[#f3f3ef] px-5 py-24 text-[#080b10] md:px-10">
        <div className="mx-auto w-full max-w-[1500px]">
          <p className="mb-7 text-xs tracking-[.2em] text-black/45">01 / WHAT WE DO</p>
          <h2 className="max-w-6xl text-[clamp(3rem,8vw,8rem)] font-medium uppercase leading-[.85] tracking-[-.065em]">
            Code. Design.<br />Growth.
          </h2>
          <p className="ml-auto mt-10 max-w-xl text-base leading-7 text-black/55 md:text-xl md:leading-8">
            From first idea to working product, Cubixmet combines software engineering, AI, design and digital growth in one team.
          </p>
        </div>
      </section>

      <section id="contact" className="flex min-h-[70vh] items-end bg-[#02050a] px-5 py-12 md:px-10">
        <div>
          <p className="mb-5 text-xs tracking-[.2em] text-[#6ea8ff]">HAVE AN IDEA?</p>
          <h2 className="text-[clamp(3.2rem,9vw,9rem)] font-medium uppercase leading-[.84] tracking-[-.07em]">Let&apos;s build<br />what&apos;s next.</h2>
        </div>
      </section>
    </main>
  );
}
