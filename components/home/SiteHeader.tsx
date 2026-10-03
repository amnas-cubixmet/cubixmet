"use client";

import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/20 backdrop-blur-[2px]">
      <div className="header-wrapper flex h-[54px] items-center justify-between md:h-[58px]">
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
            <a key={href} onClick={() => setMenuOpen(false)} href={href} className="border-b border-white/10 pb-3">
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
