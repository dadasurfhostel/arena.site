import {
  ArrowRight,
  ArrowDown,
  BedDouble,
  Sunset,
  Waves,
  Coffee,
} from "lucide-react";
import Reveal from "./Reveal";
import Star from "./Star";
import { useSiteContent } from "../context/SiteContentContext";

const chipIcons = [BedDouble, Sunset, Waves, Coffee];

export default function Hero() {
  const { content, openPanel } = useSiteContent();
  const { hero, brand } = content;

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background */}
      <img
        src={hero.image}
        alt="Sunset from the rooftop terrace overlooking the Atlantic ocean"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/85 via-ocean-950/35 to-ocean-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/75 via-transparent to-ocean-950/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-32 pt-36 md:pb-40">
        <Reveal>
          <p className="mb-7 flex items-center gap-4 text-[11px] font-extrabold uppercase tracking-[0.4em] text-sun-400 md:text-xs">
            <span className="h-px w-12 bg-sun-400/70" />
            {hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="max-w-5xl font-display text-[clamp(2.7rem,7vw,5.6rem)] font-medium leading-[1.03] text-sand-50">
            {hero.titleA}{" "}
            <span className="italic text-sun-400">{hero.accentA}</span>,{" "}
            {hero.titleB}{" "}
            <span className="italic text-sun-400">{hero.accentB}</span>
            <span className="mt-4 block text-left text-[0.38em] font-light italic tracking-wide text-sand-200">
              — at{" "}
              <button
                type="button"
                onClick={openPanel}
                aria-label={`${brand.name} — open control panel`}
                className="cursor-pointer font-display underline-offset-4 transition hover:text-sun-300 hover:underline"
              >
                {brand.name}
              </button>{" "}
              {brand.suffix}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-sand-100/90 md:text-lg">
            {hero.sub}
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center gap-3 rounded-full bg-clay-500 px-9 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-sand-50 shadow-2xl shadow-clay-900/40 transition-all duration-300 hover:-translate-y-1 hover:bg-clay-600"
            >
              {hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a
              href="#activities"
              className="inline-flex items-center gap-3 rounded-full border border-sand-50/40 bg-sand-50/5 px-9 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-sand-50 backdrop-blur-md transition-all duration-300 hover:border-sand-50/80 hover:bg-sand-50/15"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </Reveal>

        <Reveal delay={480}>
          <div className="mt-14 flex flex-wrap gap-3">
            {hero.chips.map((label, i) => {
              const Icon = chipIcons[i % chipIcons.length] ?? Star;
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-2.5 rounded-full border border-sand-50/20 bg-ocean-950/35 px-4 py-2.5 text-xs font-bold text-sand-100 backdrop-blur-md"
                >
                  <Icon className="h-4 w-4 text-sun-400" />
                  {label}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <a
        href="#stays"
        aria-label="Scroll to stays"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <span className="flex h-13 w-13 animate-bounce items-center justify-center rounded-full border border-sand-50/30 text-sand-50/90 backdrop-blur-sm">
          <ArrowDown className="h-5 w-5" />
        </span>
      </a>
    </section>
  );
}
