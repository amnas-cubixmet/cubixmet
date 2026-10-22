import type { Metadata } from "next";
import { enrollUrl, brochureUrl, allProgramsUrl, highlights, curriculum, eligibleLearners } from "../../../../data/academyCourses/graphic-designing-content-creation";
import type { CurriculumIconName } from "../../../../data/academyCourses/graphic-designing-content-creation";
import Image from "next/image";
import SiteHeader from "../../../../components/home/SiteHeader";
import SiteFooter from "../../../../components/home/SiteFooter";
import Arrow from "../../../../components/home/Arrow";

export const metadata: Metadata = {
  title: "Graphic Designing & Content Creation | Cubixmet Academy",
  description:
    "Explore Cubixmet Academy's 6-month Graphic Designing & Content Creation Program (AI Integrated): design, video editing, AI tools, photography, branding, marketing, communication and live projects.",
};

function CurriculumIcon({ name }: { name: CurriculumIconName }) {
  const icons = {
    design: (
      <>
        <path d="m4 20 4.8-1 10-10a2 2 0 0 0-2.8-2.8l-10 10L5 21m9-14 3 3"/>
        <path d="M5 5h5M5 5v5M19 14v5h-5"/>
      </>
    ),
    video: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="m10 9 5 3-5 3V9Zm-5-7v3m14-3v3"/>
      </>
    ),
    ai: (
      <>
        <path d="m12 2 2.3 6.7L21 11l-6.7 2.3L12 20l-2.3-6.7L3 11l6.7-2.3L12 2Z"/>
        <path d="m19 18 .8 1.8L22 21l-2.2 1-.8 2-.8-2-2.2-1 2.2-1.2L19 18Z"/>
      </>
    ),
    camera: (
      <>
        <path d="M4 7h4l1.5-2h5L16 7h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/>
        <circle cx="12" cy="14" r="4"/>
      </>
    ),
    growth: (
      <>
        <path d="M3 20V4m0 16h18M7 16l4-4 3 2 6-8m-4 0h4v4"/>
      </>
    ),
    communication: (
      <>
        <path d="M20 11.5a8 8 0 0 1-8 8 8 8 0 0 1-3.6-.8L4 20l1.3-4.5a8 8 0 1 1 14.7-4Z"/>
        <path d="M8 11h8m-8 3h5"/>
      </>
    ),
    projects: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2"/>
        <path d="M8 5V3m8 2V3M3 10h18m-13 5 2 2 5-5"/>
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      {icons[name]}
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function GraphicDesigningContentCreationPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#050505] pt-[60px] text-white md:pt-[68px]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[15%] -top-48 h-[600px] w-[600px] rounded-full bg-[#1677FF]/10 blur-[110px]"
        />
        <div className="relative mx-auto w-[calc(100%-40px)] max-w-[1320px] pb-18 pt-12 sm:pb-20 md:pt-16 lg:pb-24">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[12px] text-white/55">
            <a href="/ventures/academy" className="transition-colors hover:text-white">
              Cubixmet Academy
            </a>
            <span aria-hidden="true" className="text-white/30">/</span>
            <a href={allProgramsUrl} className="transition-colors hover:text-white">
              Programs
            </a>
            <span aria-hidden="true" className="text-white/30">/</span>
            <span aria-current="page" className="text-[#69adff]">Graphic Designing & Content Creation</span>
          </nav>

          <div className="mt-12 grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)] lg:items-center lg:gap-12 xl:gap-16">
            <div className="min-w-0">
              <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#69adff]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1677FF]" />
                Academy Program
              </p>
              <h1 className="mt-6 max-w-[850px] text-[clamp(2.65rem,5.6vw,5.9rem)] font-semibold leading-[.99] tracking-[-.067em]">
                Graphic Designing <span className="text-[#1677FF]">&amp;</span> Content Creation
                <span className="mt-3 block text-[clamp(1.1rem,2.1vw,1.65rem)] font-medium leading-tight tracking-[-.025em] text-white/65">
                  Program (AI Integrated)
                </span>
              </h1>
              <p className="mt-7 text-[clamp(1.25rem,2.65vw,2.15rem)] font-medium leading-tight tracking-[-.035em] text-white/90">
                Create. Design. Edit. Market. Earn.
              </p>
              <p className="mt-5 max-w-[62ch] text-[14px] leading-[1.85] text-white/60 md:text-[16px]">
                Turn your creativity into a career. Master the most in-demand design, video
                editing, branding, and content creation skills with real-world project
                experience.
              </p>

              <div className="mt-7 inline-flex min-h-10 items-center gap-2.5 rounded-full border border-[#1677FF]/30 bg-[#1677FF]/10 px-4 py-2 text-[12px] font-semibold text-[#85bdff]">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                6 Months Intensive Training Program
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={enrollUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#1677FF] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#328aff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Enroll via WhatsApp <Arrow />
                </a>
                <a
                  href="#curriculum"
                  className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-6 text-[13px] font-semibold text-white transition-colors hover:border-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF]"
                >
                  Explore Curriculum <Arrow />
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-[22px] border border-white/10 bg-[#0b1424] sm:aspect-[5/3] lg:aspect-[4/3]">
              <Image
                src="/images/ventures/academy-hero.png"
                alt="Students collaborating on a laptop during a Cubixmet Academy training session"
                fill
                priority
                sizes="(max-width: 1023px) calc(100vw - 40px), (max-width: 1536px) 43vw, 570px"
                className="object-cover object-center"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-7">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#75b5ff]">Learn by Building</p>
                  <p className="mt-1 text-[14px] font-medium text-white sm:text-[17px]">Create something extraordinary.</p>
                </div>
                <span aria-hidden="true" className="mb-1 h-2 w-2 shrink-0 rounded-full bg-[#1677FF] shadow-[0_0_15px_#1677FF]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" className="scroll-mt-24 py-20 md:py-24">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1320px]">
          <p className="section-label">Why This Program</p>
          <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <h2 className="text-[clamp(2.35rem,4.4vw,4.6rem)] font-semibold leading-[1.02] tracking-[-.06em]">Course Highlights.</h2>
            <p className="max-w-[440px] text-[14px] leading-[1.75] text-white/55">
              Creative skills, business understanding, and practical training in one intensive program.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="flex min-h-[92px] items-center gap-4 rounded-[15px] border border-white/10 bg-[#0d0f15] px-5 py-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] border border-[#1677FF]/30 bg-[#1677FF]/10 text-[#63a9ff]">
                  <CheckIcon />
                </span>
                <p className="text-[14px] font-medium leading-[1.5] tracking-[-.01em] text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculum" className="scroll-mt-24 border-y border-white/10 bg-[#090b10] py-20 md:py-28">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1320px]">
          <p className="section-label">What You Will Learn</p>
          <div className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-[780px] text-[clamp(2.5rem,5vw,5.1rem)] font-semibold leading-[.98] tracking-[-.06em]">
              Skills you can put to work.
            </h2>
            <p className="max-w-[410px] text-[14px] leading-[1.8] text-white/55">
              Explore design, editing, AI tools, photography, marketing, communication, and real-world practice.
            </p>
          </div>

          <div className="grid items-stretch gap-4 lg:grid-cols-2">
            {curriculum.map((module) => (
              <article
                id={module.id}
                key={module.id}
                className="flex min-w-0 scroll-mt-24 flex-col rounded-[20px] border border-white/10 bg-[#101216] p-6 transition-colors duration-300 hover:border-[#1677FF]/40 sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[13px] border border-[#1677FF]/30 bg-[#1677FF]/10 text-[#63a8ff]">
                    <CurriculumIcon name={module.icon} />
                  </span>
                  <h3 className="text-[clamp(1.3rem,2.5vw,1.7rem)] font-semibold leading-[1.18] tracking-[-.035em]">
                    {module.title}
                  </h3>
                </div>
                <p className="mt-5 text-[13px] leading-[1.75] text-white/50">{module.description}</p>
                <ul className="mt-6 grid gap-x-5 gap-y-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2.5 text-[12px] leading-[1.6] text-white/75 sm:text-[13px]">
                      <span aria-hidden="true" className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1677FF]" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="who-can-join" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1320px] gap-8 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
          <div>
            <p className="section-label">Who Can Join</p>
            <h2 className="text-[clamp(2.45rem,5vw,5rem)] font-semibold leading-[1] tracking-[-.06em]">
              Your next creative chapter starts here.
            </h2>
            <p className="mt-6 max-w-[540px] text-[14px] leading-[1.85] text-white/55 md:text-[16px]">
              Whether you are starting your career or expanding your skills, explore the
              techniques and workflows behind professional creative projects.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {eligibleLearners.map((learner) => (
              <div key={learner} className="flex min-h-[80px] items-center gap-3 rounded-[15px] border border-white/10 bg-white/[.03] px-5 py-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#1677FF]/15 text-[#63a8ff]">
                  <CheckIcon />
                </span>
                <span className="text-[14px] font-medium text-white/85">{learner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="relative mx-auto w-[calc(100%-40px)] max-w-[1320px] overflow-hidden rounded-[22px] bg-[#1677FF] px-6 py-12 sm:px-10 md:px-14 md:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-40 h-[400px] w-[400px] rounded-full border border-white/20" />
          <p className="relative text-[11px] font-semibold uppercase tracking-[.2em] text-white/80">Start Your Journey</p>
          <h2 className="relative mt-5 max-w-[880px] text-[clamp(2.4rem,5.4vw,5.4rem)] font-semibold leading-[.99] tracking-[-.06em]">
            Ready to turn your creativity into a career?
          </h2>
          <p className="relative mt-5 max-w-[660px] text-[14px] leading-[1.8] text-white/85 md:text-[16px]">
            Get course fees, batch timings, and enrollment guidance directly from the Cubixmet Academy team.
          </p>
          <div className="relative mt-9 flex flex-wrap gap-3">
            <a
              href={enrollUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#050505" }}
              className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-white px-5 text-[13px] font-semibold transition-colors hover:bg-white/85"
            >
              Enroll via WhatsApp <Arrow />
            </a>
            <a
              href={brochureUrl}
              download="cubixmet-academy.pdf"
              className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/65 px-5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3" />
              </svg>
              Download All Programs (PDF)
            </a>
            <a
              href={allProgramsUrl}
              className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/65 px-5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              View All Programs <Arrow />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
