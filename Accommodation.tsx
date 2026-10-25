import {
  Wifi,
  SquareParking,
  Sofa,
  LockKeyhole,
  ShowerHead,
  UtensilsCrossed,
  Users,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Star from "./Star";
import { useSiteContent } from "../context/SiteContentContext";

const featureIcons = [
  Wifi,
  SquareParking,
  Sofa,
  LockKeyhole,
  ShowerHead,
  UtensilsCrossed,
];
const includedIcons = [Wifi, SquareParking, Sofa];

export default function Accommodation() {
  const { content } = useSiteContent();
  const { stays, dorms } = content;

  return (
    <section id="stays" className="relative scroll-mt-20 bg-sand-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow={stays.eyebrow}
          title={
            <>
              {stays.titleA}{" "}
              <span className="italic text-clay-500">{stays.titleAccent}</span>{" "}
              {stays.titleB}
            </>
          }
          sub={stays.sub}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {dorms.map((dorm, i) => (
            <Reveal key={i} delay={i * 140}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-sand-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-clay-900/15">
                {/* Image */}
                <div className="relative h-72 overflow-hidden md:h-80">
                  <img
                    src={dorm.image}
                    alt={dorm.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/35 to-transparent opacity-60" />
                  <div className="absolute right-5 top-5 flex items-baseline gap-1.5 rounded-full bg-sand-50/95 px-5 py-2.5 shadow-lg backdrop-blur">
                    <span className="font-display text-2xl font-semibold text-clay-600">
                      {dorm.price}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-ink-600">
                      {dorm.priceUnit}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <div className="mb-3 flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.2em] text-clay-500">
                    <Users className="h-4 w-4" />
                    Shared dorm
                  </div>
                  <h3 className="font-display text-3xl font-medium text-ink-800">
                    {dorm.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-500">
                    {dorm.description}
                  </p>

                  <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {dorm.features.map((label, fi) => {
                      const Icon = featureIcons[fi % featureIcons.length] ?? Star;
                      return (
                        <div
                          key={fi}
                          className="flex items-center gap-2.5 rounded-xl bg-sand-100 px-3 py-2.5"
                        >
                          <Icon className="h-4 w-4 shrink-0 text-clay-500" />
                          <span className="text-xs font-bold text-ink-700">
                            {label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <a
                    href="#booking"
                    className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-clay-500 px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.2em] text-clay-600 transition-all duration-300 hover:border-clay-600 hover:bg-clay-500 hover:text-sand-50"
                  >
                    {stays.reserveLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Included strip */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 rounded-[2rem] border border-clay-500/25 bg-clay-500/10 px-8 py-8 text-center md:flex-row md:gap-12 md:text-left">
            <p className="shrink-0 font-display text-xl italic text-clay-700">
              {stays.includedTitle}
            </p>
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-10">
              {stays.included.map((label, i) => {
                const Icon = includedIcons[i % includedIcons.length] ?? Star;
                return (
                  <span
                    key={i}
                    className="flex items-center gap-3 text-sm font-bold text-ink-700"
                  >
                    <Icon className="h-5 w-5 text-clay-500" />
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
