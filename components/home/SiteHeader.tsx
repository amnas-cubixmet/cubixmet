"use client";

import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#top");

  useEffect(() => {
    const sectionIds = ["top", "about", "services", "process", "work", "journal", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveLink(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.15, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/20 backdrop-blur-[2px]">
      <div className="header-wrapper flex h-[54px] items-center justify-between md:h-[58px]">
        <a href="#top" className="relative z-50 text-[12px] font-black tracking-[-0.035em] md:text-[13px]">
          CUBIXMET<span className="text-[#1677FF]">.</span>
        </a>

        <nav className="hidden items-center gap-6 text-[9px] font-medium md:flex">
          {[
            ["#top", "Home"],
            ["#services", "Services"],
            ["#work", "Portfolio"],
            ["#journal", "Blog"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setActiveLink(href)}
              className={
                "relative transition-colors duration-300 " +
                (activeLink === href ? "text-[#1677FF]" : "text-white/55 hover:text-white")
              }
            >
              {label}
              <span
                className={
                  "absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#1677FF] transition-all duration-300 " +
                  (activeLink === href ? "w-4 opacity-100" : "w-0 opacity-0")
                }
              />
            </a>
          ))}
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
