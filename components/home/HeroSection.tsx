"use client";

import Arrow from "./Arrow";

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#050505] pt-[54px] md:pt-[58px]">
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
            <div className="mb-12 ml-10 grid h-28 w-28 place-items-center rounded-full border border-white/10 bg-black/20 text-center backdrop-blur">
              <span className="text-[9px] leading-4 text-white/45"><strong className="block text-[34px] leading-none text-white">12+</strong>Your trust builds us</span>
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

        <div className="grid grid-cols-[.72fr_1.65fr_.82fr] items-end gap-2 px-5 pb-3 md:gap-4 md:px-8 md:pb-5 xl:px-10">
          <div className="hero-card h-[120px] translate-y-4 overflow-hidden rounded-[10px] border border-white/10 bg-[#0c0d0c] p-2 sm:h-[170px] md:h-[230px] md:rounded-[14px] md:p-3">
            <div className="flex h-full items-end rounded-[8px] bg-[linear-gradient(145deg,#1a1a1a,#090909)] p-2">
              <div className="h-[68%] w-[52%] rounded-[8px] border border-white/10 bg-[linear-gradient(160deg,#e8e8e8,#b9b9b9_48%,#161616_49%)]" />
            </div>
          </div>

          <div className="hero-card h-[150px] overflow-hidden rounded-[10px] border border-white/10 bg-[#0c0d0c] p-2 sm:h-[205px] md:h-[280px] md:rounded-[14px] md:p-3">
            <div className="relative grid h-full place-items-center rounded-[8px] bg-[radial-gradient(circle_at_50%_30%,#112a46,#0b1520_42%,#090909_82%)]">
              <div className="grid h-[56%] w-[62%] place-items-center rounded-[8px] border border-white/10 bg-black/45 text-[clamp(1.6rem,5vw,5rem)] font-semibold tracking-[-0.06em]">022</div>
              <span className="absolute bottom-3 grid h-9 w-9 place-items-center rounded-full bg-[#1677FF] text-[10px] font-bold text-white md:h-12 md:w-12">↗</span>
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
