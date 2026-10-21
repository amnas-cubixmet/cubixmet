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

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (menuOpen
          ? "bg-[#050505]"
          : scrolled
            ? "bg-[#050505]/92 backdrop-blur-xl"
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
          className="relative z-50 inline-flex items-center gap-2.5"
          aria-label="Cubixmet home"
        >
          <span className="grid h-10 w-[120px] place-items-center overflow-hidden md:h-11 md:w-[136px]">
            <img
              src="/image/logo.png"
              alt="Cubixmet"
              className="h-full w-full object-contain"
            />
          </span>
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 md:flex lg:gap-6">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setActiveLink(href)}
              className={
                "relative px-1 py-2 text-[11px] font-medium transition-colors duration-300 lg:text-[12px] " +
                (activeLink === href
                  ? "text-[#1677FF]"
                  : "text-white/65 hover:text-white")
              }
            >
              {label}
              <span
                aria-hidden="true"
                className={
                  "absolute inset-x-1 bottom-0 h-0.5 rounded-full bg-[#1677FF] transition-transform duration-300 motion-reduce:transition-none " +
                  (activeLink === href ? "scale-x-100" : "scale-x-0")
                }
              />
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/918921592742?text=Hi%20Cubixmet%2C%20I%27d%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Cubixmet on WhatsApp"
          className="hidden items-center gap-2 rounded-full border border-white/12 bg-white/[0.035] px-4 py-2 text-[10px] font-semibold text-white transition hover:border-[#1677FF]/60 hover:bg-[#1677FF] md:inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF]" />
          Let&apos;s Talk
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-site-menu"
          onClick={() => setMenuOpen((value) => !value)}
          className="relative z-50 grid h-10 w-10 place-items-center border-0 bg-transparent text-white outline-none transition-colors hover:text-[#1677FF] focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#1677FF] md:hidden"
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

      {menuOpen && (
        <div
          id="mobile-site-menu"
          className="mobile-menu-panel fixed inset-x-0 bottom-0 top-[60px] z-40 flex flex-col overflow-y-auto overscroll-contain bg-[#050505] px-6 pb-[max(16px,env(safe-area-inset-bottom))] pt-3 md:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-1 flex-col justify-center gap-1 py-2">
            {navLinks.map(([href, label]) => {
              const isActive = activeLink === href;
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => {
                    setActiveLink(href);
                    setMenuOpen(false);
                  }}
                  className={
                    "group flex min-h-[46px] items-center py-2 text-[16px] font-medium tracking-[-0.02em] transition-colors duration-200 " +
                    (isActive ? "text-white" : "text-white/65 hover:text-white")
                  }
                >
                  <span className="inline-flex flex-col items-start gap-1.5">
                    {label}
                    <span
                      aria-hidden="true"
                      className={
                        "h-[2px] rounded-full bg-[#1677FF] transition-all duration-300 motion-reduce:transition-none " +
                        (isActive ? "w-full opacity-100" : "w-0 opacity-0")
                      }
                    />
                  </span>
                </a>
              );
            })}
          </nav>
          <div className="mt-3 shrink-0 pb-1">
            <a
              href="#contact"
              onClick={() => {
                setActiveLink("#contact");
                setMenuOpen(false);
              }}
              className="flex min-h-12 items-center justify-between rounded-md bg-[#1677FF] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#3187ff]"
            >
              Start a project
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
