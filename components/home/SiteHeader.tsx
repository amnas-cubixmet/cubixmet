"use client";

import { useEffect, useState } from "react";

const navLinks = [
  ["#top", "Home"],
  ["#about", "About"],
  ["#ventures", "Ventures"],
  ["#services", "Services"],
  ["#work", "Portfolio"],
  ["#team", "Team"],
  ["#contact", "Contact"],
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#top");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = ["top", "about", "ventures", "services", "process", "work", "team", "impact", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target?.id) return;

        const id = visible.target.id;
        if (id === "process" || id === "impact") return;
        setActiveLink(`#${id}`);
      },
      { rootMargin: "-32% 0px -56% 0px", threshold: [0, 0.15, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (scrolled || menuOpen
          ? "border-b border-white/8 bg-[#050505]/92 backdrop-blur-xl"
          : "bg-gradient-to-b from-black/55 to-transparent")
      }
    >
      <div className="header-wrapper flex h-[60px] items-center justify-between md:h-[68px]">
        <a
          href="#top"
          onClick={() => {
            setActiveLink("#top");
            setMenuOpen(false);
          }}
          className="relative z-50 text-[13px] font-black tracking-[-0.04em] text-white md:text-[15px]"
        >
          CUBIXMET<span className="text-[#1677FF]">.</span>
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/8 bg-white/[0.035] p-1 md:flex">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setActiveLink(href)}
              className={
                "relative rounded-full px-3 py-2 text-[10px] font-medium transition-all duration-300 lg:px-3.5 lg:text-[11px] " +
                (activeLink === href
                  ? "bg-[#1677FF] text-white shadow-[0_0_20px_rgba(22,119,255,.22)]"
                  : "text-white/45 hover:bg-white/[0.045] hover:text-white")
              }
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={() => setActiveLink("#contact")}
          className="hidden items-center gap-2 rounded-full border border-white/12 bg-white/[0.035] px-4 py-2 text-[10px] font-semibold text-white transition hover:border-[#1677FF]/60 hover:bg-[#1677FF] md:inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF]" />
          Let&apos;s Talk
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className={
            "relative z-50 grid h-9 w-9 place-items-center border transition md:hidden " +
            (menuOpen
              ? "border-[#1677FF] bg-[#1677FF]"
              : "border-white/12 bg-white/[0.04]")
          }
        >
          <span className="flex w-4 flex-col gap-[5px]">
            <span
              className={
                "h-px w-full bg-white transition duration-300 " +
                (menuOpen ? "translate-y-[3px] rotate-45" : "")
              }
            />
            <span
              className={
                "h-px w-full bg-white transition duration-300 " +
                (menuOpen ? "-translate-y-[3px] -rotate-45" : "")
              }
            />
          </span>
        </button>
      </div>

      <div
        className={
          "absolute right-[14px] top-[66px] w-[min(320px,calc(100vw-28px))] overflow-hidden border border-white/10 bg-[#0b0b0b]/98 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden " +
          (menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 pointer-events-none opacity-0")
        }
      >
        <nav className="p-2">
          {navLinks.map(([href, label], index) => (
            <a
              key={href}
              href={href}
              onClick={() => {
                setActiveLink(href);
                setMenuOpen(false);
              }}
              className={
                "flex items-center justify-between border-white/7 px-4 py-3.5 text-[15px] font-medium tracking-[-0.02em] transition " +
                (index !== navLinks.length - 1 ? "border-b " : "") +
                (activeLink === href
                  ? "text-white"
                  : "text-white/52 hover:text-white")
              }
            >
              <span>{label}</span>
              <span
                className={
                  "h-1.5 w-1.5 rounded-full transition " +
                  (activeLink === href ? "bg-[#1677FF]" : "bg-white/12")
                }
              />
            </a>
          ))}
        </nav>

        <div className="border-t border-white/8 p-3">
          <a
            href="#contact"
            onClick={() => {
              setActiveLink("#contact");
              setMenuOpen(false);
            }}
            className="flex items-center justify-between bg-[#1677FF] px-4 py-3 text-[12px] font-semibold text-white"
          >
            Start a project
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
