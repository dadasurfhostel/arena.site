import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useSiteContent } from "../context/SiteContentContext";

export default function Facilities() {
  const { content } = useSiteContent();
  const { facilities } = content;
  const overlayCards = facilities.cards.slice(0, 2);
  const wideCards = facilities.cards.slice(2);

  return (
    <section
      id="facilities"
      className="relative scroll-mt-20 overflow-hidden bg-ocean-900 py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-zellige-dark opacity-60" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sun-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-clay-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          dark
          eyebrow={facilities.eyebrow}
          title={
            <>
              {facilities.titleA}{" "}
              <span className="italic text-sun-400">
                {facilities.titleAccent}
              </span>
            </>
          }
          sub={facilities.sub}
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {overlayCards.map((card, i) => (
            <Reveal
              key={i}
              delay={i * 140}
              className={i === 0 ? "lg:col-span-7" : "lg:col-span-5"}
            >
              <article className="group relative h-[420px] overflow-hidden rounded-[2rem] md:h-[460px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <span className="font-display text-lg italic text-sun-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-display text-3xl font-medium text-sand-50 md:text-4xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-sand-100/85">
                    {card.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="rounded-full border border-sand-50/25 bg-sand-50/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sand-100 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-sand-50/30 bg-ocean-950/40 text-sand-50 backdrop-blur-md transition-all duration-300 group-hover:bg-sun-500 group-hover:text-ocean-950">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </article>
            </Reveal>
          ))}

          {/* Wide cards */}
          {wideCards.map((card, i) => (
            <Reveal key={i} delay={280} className="lg:col-span-12">
              <article className="group grid overflow-hidden rounded-[2rem] bg-ocean-800 md:grid-cols-2">
                <div className="relative h-72 overflow-hidden md:h-auto md:min-h-[380px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ocean-800/40 md:bg-gradient-to-r" />
                </div>
                <div className="relative flex flex-col justify-center p-8 md:p-12">
                  <div className="absolute inset-0 bg-zellige-dark opacity-40" />
                  <div className="relative">
                    <span className="font-display text-lg italic text-sun-400">
                      {String(overlayCards.length + i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-3xl font-medium text-sand-50 md:text-4xl">
                      {card.title}
                    </h3>
                    <p className="mt-4 max-w-md leading-relaxed text-ocean-100/85">
                      {card.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {card.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="rounded-full border border-sun-400/30 bg-sun-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sun-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#activities"
                      className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-sun-500 px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.2em] text-ocean-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sun-400"
                    >
                      {facilities.wideCtaLabel}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
