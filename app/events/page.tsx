import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/home/SiteHeader";
import SiteFooter from "../../components/home/SiteFooter";
import EventVisual from "../../components/events/EventVisual";
import { events, eventsPageCopy } from "../../data/events";

export const metadata: Metadata = {
  title: "Events | Cubixmet",
  description:
    "Explore Cubixmet events, workshops and hands-on learning experiences in artificial intelligence, software and digital technology.",
};

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      strokeLinejoin="round" className="h-4 w-4">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      strokeLinejoin="round" className="h-4 w-4">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4m10-4v4M3 10h18" />
    </svg>
  );
}

export default function EventsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#050505] pt-[60px] text-white md:pt-[68px]">
      <SiteHeader />
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-32 h-[480px] w-[480px] rounded-full bg-[#1677FF]/10 blur-[110px]" />
        <div className="relative mx-auto w-[calc(100%-40px)] max-w-[1320px] pb-16 pt-14 md:pb-24 md:pt-20">
          <p className="mb-6 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.2em] text-[#65a8ff]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF]" />
            {eventsPageCopy.eyebrow}
          </p>
          <h1 className="max-w-[940px] text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[.92] tracking-[-.07em]">
            {eventsPageCopy.title}
          </h1>
          <p className="mt-8 max-w-[650px] text-[14px] leading-[1.85] text-white/55 md:text-[17px]">
            {eventsPageCopy.description}
          </p>
          <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-5 text-[11px] font-semibold uppercase tracking-[.17em] text-[#70adff]">
            <span>01</span>
            <span className="h-px w-9 bg-[#1677FF]" />
            <span>{eventsPageCopy.featured}</span>
          </div>
        </div>
      </section>

      <section aria-labelledby="events-heading" className="py-16 md:py-24">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1320px]">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
            <h2 id="events-heading" className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-.055em]">
              {eventsPageCopy.featured}
            </h2>
            <span className="text-[11px] font-mono text-white/45">
              {String(events.length).padStart(2, "0")} {events.length === 1 ? "EVENT" : "EVENTS"}
            </span>
          </div>
          <div className="grid gap-7 lg:grid-cols-2">
            {events.map((event) => (
              <article key={event.id} className="group flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#0b0e14] transition-colors duration-300 hover:border-[#1677FF]/55">
                <Link href={`/events/${event.slug}`} aria-label={`View ${event.title}`} className="block overflow-hidden">
                  <EventVisual className="aspect-[1.6/1] w-full transition-transform duration-700 group-hover:scale-[1.025] sm:aspect-[1.9/1]" />
                </Link>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] font-semibold uppercase tracking-[.1em] text-white/55">
                    <span className="inline-flex items-center gap-2 text-[#75b5ff]"><CalendarIcon /> <time dateTime={event.date}>{event.displayDate}</time></span>
                    <span className="rounded-full border border-[#1677FF]/30 bg-[#1677FF]/10 px-3 py-1.5 text-[#9ecbff]">{event.status}</span>
                  </div>
                  <h3 className="text-[clamp(1.7rem,3vw,2.7rem)] font-semibold leading-[1.1] tracking-[-.055em]">
                    <Link href={`/events/${event.slug}`} className="transition-colors hover:text-[#7bb7ff]">{event.title}</Link>
                  </h3>
                  <p className="mt-4 max-w-[61ch] text-[13px] leading-[1.85] text-white/55 sm:text-[15px]">{event.summary}</p>
                  <div className="mt-auto pt-8">
                    <Link href={`/events/${event.slug}`}
                      className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#1677FF] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#338bff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF]">
                      {eventsPageCopy.viewEvent}
                      <ArrowUpRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
