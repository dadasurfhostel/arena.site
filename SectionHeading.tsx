import type { ReactNode } from "react";
import Star from "./Star";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  dark?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  dark = false,
  center = true,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-14 md:mb-20`}
    >
      <p
        className={`mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.35em] ${
          center ? "justify-center" : ""
        } ${dark ? "text-sun-400" : "text-clay-500"}`}
      >
        <Star className="h-3.5 w-3.5" />
        {eyebrow}
        <Star className="h-3.5 w-3.5" />
      </p>
      <h2
        className={`font-display text-4xl font-medium leading-[1.08] md:text-5xl ${
          dark ? "text-sand-50" : "text-ink-800"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-6 text-base leading-relaxed md:text-lg ${
            dark ? "text-ocean-100/85" : "text-ink-500"
          } ${center ? "mx-auto max-w-2xl" : ""}`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
