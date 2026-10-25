import { HeartHandshake, Coffee, Palette, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Star from "./Star";
import { useSiteContent } from "../context/SiteContentContext";

const valueIcons = [HeartHandshake, Coffee, Palette, Users];

export default function Soul() {
  const { content } = useSiteContent();
  const { soul } = content;

  return (
    <section
      id="soul"
      className="relative scroll-mt-20 overflow-hidden bg-sand-100 py-24 md:py-32"
    >
      {/* Decorative giant stars */}
      <Star className="pointer-events-none absolute -left-24 top-16 h-72 w-72 animate-spin-slower text-clay-500/10" />
      <Star className="pointer-events-none absolute -right-20 bottom-24 h-60 w-60 text-ocean-600/10" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text side */}
          <div>
            <SectionHeading
              center={false}
              eyebrow={soul.eyebrow}
              title={
                <>
                  {soul.titleA}{" "}
                  <span className="italic text-clay-500">
                    {soul.titleAccent}
                  </span>
                </>
              }
            />
            <Reveal>
              <div className="-mt-8 space-y-5 text-base leading-relaxed text-ink-600 md:text-lg">
                <p>{soul.paragraph1}</p>
                <p>{soul.paragraph2}</p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {soul.values.map(({ title, text }, i) => {
                const Icon = valueIcons[i % valueIcons.length] ?? Star;
                return (
                  <Reveal key={i} delay={i * 100}>
                    <div className="group h-full rounded-3xl border border-sand-200 bg-sand-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-clay-500/40 hover:shadow-xl hover:shadow-clay-900/10">
                      <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-clay-500/10 text-clay-600 transition-colors duration-300 group-hover:bg-clay-500 group-hover:text-sand-50">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="font-display text-xl font-medium text-ink-800">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">
                        {text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={200}>
              <blockquote className="mt-10 border-l-4 border-sun-500 bg-sun-500/10 py-5 pl-6 pr-4">
                <p className="font-display text-xl italic leading-snug text-ink-700">
                  "{soul.quote}"
                </p>
                <cite className="mt-2 block text-xs font-bold uppercase tracking-[0.2em] not-italic text-clay-600">
                  {soul.quoteAuthor}
                </cite>
              </blockquote>
            </Reveal>
          </div>

          {/* Collage side */}
          <Reveal delay={150} className="relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-clay-900/20">
                <img
                  src={soul.imageMain}
                  alt="Moroccan mint tea being poured into colorful glasses"
                  className="h-[420px] w-full object-cover md:h-[540px]"
                />
              </div>

              {/* Floating rooftop card */}
              <div className="absolute -bottom-10 -left-4 w-44 rotate-[-5deg] overflow-hidden rounded-3xl border-4 border-sand-50 shadow-xl md:-left-12 md:w-56">
                <img
                  src={soul.imageFloating}
                  alt="Rooftop terrace at dusk"
                  className="h-32 w-full object-cover md:h-40"
                />
              </div>

              {/* Floating star badge */}
              <div className="absolute -right-4 -top-8 md:-right-8">
                <div className="animate-drift grid h-24 w-24 place-items-center rounded-full bg-sun-500 text-ocean-950 shadow-xl shadow-sun-600/40 md:h-28 md:w-28">
                  <div className="text-center">
                    <Star className="mx-auto h-6 w-6" />
                    <span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[0.2em]">
                      Est. Tamraght
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={100}>
          <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-clay-500/20 bg-clay-500/20 shadow-lg md:grid-cols-4">
            {soul.stats.map(({ value, label }, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-sand-50 px-4 py-8 text-center"
              >
                <span className="font-display text-3xl font-semibold text-clay-600 md:text-4xl">
                  {value}
                </span>
                <span className="mt-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink-500">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
