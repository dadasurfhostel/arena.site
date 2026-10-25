import { ArrowUpRight, CalendarDays } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Star from "./Star";
import { useSiteContent } from "../context/SiteContentContext";

export default function Activities() {
  const { content } = useSiteContent();
  const { activities } = content;

  return (
    <section
      id="activities"
      className="relative scroll-mt-20 bg-sand-50 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow={activities.eyebrow}
          title={
            <>
              {activities.titleA}{" "}
              <span className="italic text-clay-500">
                {activities.titleAccent}
              </span>{" "}
              {activities.titleB}
            </>
          }
          sub={activities.sub}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.items.map((a, i) => (
            <Reveal key={i} delay={(i % 3) * 120}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-sand-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-clay-900/15">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-107"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/30 to-transparent" />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-sand-50/95 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-ink-700 backdrop-blur">
                    <CalendarDays className="h-3.5 w-3.5 text-clay-500" />
                    {a.time}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-medium text-ink-800">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">
                    {a.text}
                  </p>
                </div>
                <span className="absolute right-5 top-5 grid h-10 w-10 translate-y-1 place-items-center rounded-full bg-sun-500 text-ocean-950 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-4.5 w-4.5" />
                </span>
              </article>
            </Reveal>
          ))}

          {/* CTA card */}
          <Reveal delay={240}>
            <div className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-clay-600 p-8 text-sand-50">
              <div className="absolute inset-0 bg-zellige-clay" />
              <div className="relative">
                <Star className="h-8 w-8 text-sun-400" />
                <h3 className="mt-5 font-display text-3xl font-medium leading-tight">
                  {activities.ctaTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sand-100/85">
                  {activities.ctaText}
                </p>
              </div>
              <a
                href="#booking"
                className="relative mt-6 inline-flex w-fit items-center gap-2.5 rounded-full bg-sand-50 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.2em] text-clay-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sun-500 hover:text-ocean-950"
              >
                {activities.ctaButton}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
