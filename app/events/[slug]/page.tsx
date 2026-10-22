import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/home/SiteHeader";
import SiteFooter from "../../../components/home/SiteFooter";
import EventVisual from "../../../components/events/EventVisual";
import { events, eventsPageCopy, getEventBySlug } from "../../../data/events";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found | Cubixmet" };
  return {
    title: `${event.title} | Cubixmet Events`,
    description: event.summary,
    openGraph: {
      title: event.title,
      description: event.summary,
      type: "article",
      publishedTime: event.date,
    },
  };
}

function BackArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      strokeLinejoin="round" className="h-4 w-4">
      <path d="m14 5-7 7 7 7M7 12h13" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
      strokeLinejoin="round" className="h-5 w-5">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4m10-4v4M3 10h18" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <main className="min-h-screen overflow-x-clip bg-[#050505] pt-[60px] text-white md:pt-[68px]">
      <SiteHeader />
      <article>
        <section className="relative isolate overflow-hidden border-b border-white/10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-32 h-[480px] w-[480px] rounded-full bg-[#1677FF]/10 blur-[110px]" />
          <div className="relative mx-auto w-[90%] max-w-[1500px] pb-14 pt-10 md:pb-20 md:pt-14">
            <Link href="/events" className="inline-flex min-h-10 items-center gap-2.5 text-[12px] font-medium text-white/55 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF]">
              <BackArrow /> {eventsPageCopy.backToEvents}
            </Link>

            <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-14">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#1677FF]/25 bg-[#1677FF]/10 px-4 py-2 text-[12px] font-semibold text-[#8cc2ff]">
                <CalendarIcon />
                <time dateTime={event.date}>{event.displayDate}</time>
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.12em] text-white/60">
                {event.category}
              </span>
            </div>
            <h1 className="mt-7 max-w-[1030px] text-[clamp(2.9rem,7.3vw,7.5rem)] font-semibold leading-[.95] tracking-[-.075em]">
              {event.title}
            </h1>
            <p className="mt-7 max-w-[840px] text-[15px] leading-[1.85] text-white/60 md:text-[19px]">
              {event.summary}
            </p>
            <div className="mt-11 overflow-hidden rounded-[18px] border border-[#1677FF]/30 sm:rounded-[24px]">
              <EventVisual
                imageSrc={event.detailImage}
                imageAlt={`${event.title} workshop photograph`}
                className="aspect-[1.35/1] w-full sm:aspect-[1.9/1] lg:aspect-[2.35/1]"
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid w-[90%] max-w-[1500px] gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,.55fr)] lg:gap-20">
            <div className="min-w-0">
              <p className="section-label">{eventsPageCopy.eventOverview}</p>
              <h2 className="mb-8 text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[1] tracking-[-.06em]">
                Learning AI by doing.
              </h2>
              <div className="space-y-6">
                {event.paragraphs.map((paragraph, index) => (
                  <p key={index} className={`text-[14px] leading-[1.95] md:text-[16px] ${index === 0 ? "font-medium text-white/85" : "text-white/60"}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <aside className="h-fit rounded-[20px] border border-white/10 bg-[#0c0f15] p-6 sm:p-8 lg:sticky lg:top-24">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                <p className="text-[11px] font-semibold uppercase tracking-[.17em] text-[#72b2ff]">{eventsPageCopy.topicsLabel}</p>
                <span className="font-mono text-[12px] text-white/35">{String(event.topics.length).padStart(2, "0")}</span>
              </div>
              <ul className="mt-6 space-y-5">
                {event.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-[13px] leading-[1.6] text-white/70">
                    <span className="mt-[3px] text-[#69aaff]"><CheckIcon /></span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#090b11] py-16 md:py-24">
          <div className="mx-auto w-[90%] max-w-[1500px]">
            <p className="section-label">{eventsPageCopy.outcomesLabel}</p>
            <h2 className="mb-10 max-w-[780px] text-[clamp(2.1rem,4.3vw,4.6rem)] font-semibold leading-[1] tracking-[-.06em]">
              Turning ideas into real projects.
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {event.outcomes.map((outcome, index) => (
                <div key={outcome} className="flex min-h-[170px] flex-col justify-between gap-8 rounded-[17px] border border-white/10 bg-[#0e1119] p-6">
                  <span className="font-mono text-[12px] text-[#65a8ff]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-[18px] font-medium leading-[1.35] tracking-[-.025em]">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
      <section className="py-14 md:py-20">
        <div className="mx-auto flex w-[90%] max-w-[1500px] flex-col items-start justify-between gap-7 overflow-hidden rounded-[22px] bg-[#1677FF] px-6 py-9 sm:px-9 md:flex-row md:items-center md:py-11 lg:px-12">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[.17em] text-white/80">{eventsPageCopy.allEvents}</p>
            <h2 className="mt-2 text-[clamp(1.7rem,3.4vw,3.2rem)] font-semibold tracking-[-.05em]">
              {eventsPageCopy.exploreMore}
            </h2>
          </div>
          <Link
            href="/events"
            aria-label="Browse all Cubixmet events"
            style={{ color: "#09111f", backgroundColor: "#ffffff" }}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full px-6 py-3 text-[13px] font-bold shadow-[0_8px_24px_rgba(0,0,0,.14)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:self-auto"
          >
            <BackArrow />
            <span>{eventsPageCopy.backToEvents}</span>
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
