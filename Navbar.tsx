import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Star from "./Star";
import { useSiteContent } from "../context/SiteContentContext";

const links = [
  { label: "Stays", href: "#stays" },
  { label: "Experiences", href: "#facilities" },
  { label: "Moroccan Soul", href: "#soul" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { content, openPanel } = useSiteContent();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textCls = scrolled ? "text-ink-800" : "text-sand-50";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink-900/10 bg-sand-50/90 py-3 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5">
        {/* Logo — the secret door to the control panel */}
        <button
          type="button"
          onClick={openPanel}
          aria-label={`${content.brand.name} — open control panel`}
          className="group flex cursor-pointer items-center gap-3"
        >
          <span
            className={`grid h-11 w-11 place-items-center rounded-2xl transition-colors duration-500 ${
              scrolled
                ? "bg-clay-500 text-sand-50"
                : "bg-sand-50/15 text-sun-400 backdrop-blur-md"
            }`}
          >
            <Star className="h-5 w-5" />
          </span>
          <span className={`leading-none ${textCls}`}>
            <span className="font-display text-2xl font-semibold italic">
              {content.brand.name}
            </span>
            <span className="block pt-1 text-[9px] font-extrabold uppercase tracking-[0.4em] opacity-80">
              {content.brand.suffix}
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative text-[13px] font-bold uppercase tracking-[0.18em] transition-colors ${textCls} ${
                scrolled ? "hover:text-clay-500" : "hover:text-sun-400"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                  scrolled ? "bg-clay-500" : "bg-sun-400"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="group hidden items-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.15em] text-sand-50 shadow-lg shadow-clay-900/25 transition-all hover:-translate-y-0.5 hover:bg-clay-600 sm:inline-flex"
          >
            Book your stay
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className={`grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${
              scrolled
                ? "bg-clay-500/10 text-clay-600"
                : "bg-sand-50/15 text-sand-50 backdrop-blur-md"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-4 mt-3 flex flex-col gap-1 rounded-3xl border border-ink-900/10 bg-sand-50 p-4 shadow-2xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.15em] text-ink-700 transition-colors hover:bg-clay-500/10 hover:text-clay-600"
            >
              {l.label}
              <Star className="h-3 w-3 text-clay-400" />
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-clay-500 px-6 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-sand-50"
          >
            Book your stay
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
