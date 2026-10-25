import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
} from "./SocialIcons";
import Star from "./Star";
import Reveal from "./Reveal";
import { useSiteContent } from "../context/SiteContentContext";

const socialIcons = [InstagramIcon, FacebookIcon, WhatsAppIcon];

const quickLinks = [
  { label: "Stays & pricing", href: "#stays" },
  { label: "Facilities", href: "#facilities" },
  { label: "Moroccan soul", href: "#soul" },
  { label: "Activities", href: "#activities" },
  { label: "Book a bed", href: "#booking" },
];

export default function Footer() {
  const { content, openPanel } = useSiteContent();
  const { footer, brand } = content;

  return (
    <footer
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-ocean-950 text-sand-200"
    >
      {/* Pattern divider at top */}
      <div className="h-3 bg-clay-600 bg-zellige-clay" />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20">
        <div className="absolute inset-0 bg-zellige-dark opacity-40" />

        <div className="relative">
          {/* CTA row */}
          <Reveal className="flex flex-col items-start justify-between gap-8 border-b border-sand-50/10 pb-14 md:flex-row md:items-center">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.35em] text-sun-400">
                <Star className="h-3.5 w-3.5" />
                {footer.ctaEyebrow}
              </p>
              <h2 className="font-display text-4xl font-medium leading-tight text-sand-50 md:text-6xl">
                {footer.ctaTitleA}{" "}
                <button
                  type="button"
                  onClick={openPanel}
                  aria-label={`${brand.name} — open control panel`}
                  className="cursor-pointer italic text-sun-400 underline-offset-4 transition hover:text-sun-300 hover:underline"
                >
                  {brand.name}
                </button>
                .
              </h2>
            </div>
            <a
              href="#booking"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-sun-500 px-9 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-ocean-950 shadow-2xl shadow-sun-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-sun-400"
            >
              {footer.ctaButton}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </Reveal>

          {/* Link columns */}
          <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <button
                type="button"
                onClick={openPanel}
                aria-label={`${brand.name} — open control panel`}
                className="flex cursor-pointer items-center gap-3"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-clay-500 text-sand-50">
                  <Star className="h-5 w-5" />
                </span>
                <span className="leading-none text-sand-50">
                  <span className="font-display text-2xl font-semibold italic">
                    {brand.name}
                  </span>
                  <span className="block pt-1 text-[9px] font-extrabold uppercase tracking-[0.4em] opacity-80">
                    {brand.suffix}
                  </span>
                </span>
              </button>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-ocean-100/75">
                {footer.blurb}
              </p>
              <div className="mt-6 flex gap-3">
                {footer.socials.map((social, i) => {
                  const Icon = socialIcons[i % socialIcons.length] ?? Star;
                  return (
                    <a
                      key={i}
                      href="#contact"
                      aria-label={social.label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-sand-50/15 text-ocean-100 transition-all duration-300 hover:border-sun-400 hover:bg-sun-500 hover:text-ocean-950"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Visit us */}
            <div>
              <h3 className="mb-5 flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.25em] text-sun-400">
                <MapPin className="h-4 w-4" /> Visit us
              </h3>
              <ul className="space-y-4 text-sm leading-relaxed text-ocean-100/80">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay-300" />
                  <span>
                    {footer.addressLine1}
                    <br />
                    {footer.addressLine2}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Star className="mt-1 h-3 w-3 shrink-0 text-clay-300" />
                  <span>{footer.nearNote}</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-clay-300" />
                  <span>{footer.hoursNote}</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-5 flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.25em] text-sun-400">
                <Phone className="h-4 w-4" /> Say salaam
              </h3>
              <ul className="space-y-4 text-sm text-ocean-100/80">
                <li>
                  <a
                    href={`tel:${footer.phone.replace(/[^+\d]/g, "")}`}
                    className="flex items-center gap-3 transition-colors hover:text-sun-400"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-clay-300" />
                    {footer.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${footer.email}`}
                    className="flex items-center gap-3 transition-colors hover:text-sun-400"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-clay-300" />
                    {footer.email}
                  </a>
                </li>
              </ul>
              <div className="mt-6 space-y-2">
                {footer.socials.map((social, i) => {
                  const Icon = socialIcons[i % socialIcons.length] ?? Star;
                  return (
                    <p
                      key={i}
                      className="flex items-center gap-3 text-xs font-semibold text-ocean-100/60"
                    >
                      <Icon className="h-3.5 w-3.5 text-clay-300" />
                      {social.handle}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="mb-5 flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.25em] text-sun-400">
                <Star className="h-3.5 w-3.5" /> Quick links
              </h3>
              <ul className="space-y-3.5">
                {quickLinks.map((l) => (
                  <li key={l.href + l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2.5 text-sm font-semibold text-ocean-100/80 transition-colors hover:text-sun-400"
                    >
                      <span className="h-px w-4 bg-clay-300/60 transition-all duration-300 group-hover:w-6 group-hover:bg-sun-400" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-sand-50/10 pt-8 text-xs text-ocean-100/60 md:flex-row">
            <p>
              © {new Date().getFullYear()} {footer.copyright}
            </p>
            <p className="flex items-center gap-2">
              {footer.madeWith}
              <Star className="h-3 w-3 text-sun-400" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
