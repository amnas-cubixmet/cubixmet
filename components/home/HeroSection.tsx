"use client";

import Arrow from "./Arrow";

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#050505] pt-[54px] md:pt-[58px]">
      <div className="pointer-events-none absolute left-3 top-[72px] z-[5] hidden h-24 w-24 opacity-55 md:block xl:left-5 xl:h-28 xl:w-28">
        <div className="relative h-full w-full rotate-[-12deg]">
          {[0, 34, 72, 112, 154, 202].map((angle, index) => (
            <span
              key={angle}
              className="absolute left-1/2 top-1/2 h-[58%] w-[24%] origin-[50%_8%] rounded-full bg-[linear-gradient(90deg,#401616_0%,#ff6666_46%,#8c2424_100%)] shadow-[inset_-8px_-8px_16px_rgba(0,0,0,.28),inset_7px_6px_12px_rgba(255,255,255,.16)]"
              style={{
                transform: `translate(-50%,-6%) rotate(${angle}deg)`,
                zIndex: index % 2 === 0 ? 2 : 1,
              }}
            />
          ))}
          <span className="absolute left-1/2 top-1/2 z-[3] h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_28%,#ff7777,#b43232_55%,#6f1e1e_100%)] shadow-[inset_-6px_-7px_12px_rgba(0,0,0,.25)]" />
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
