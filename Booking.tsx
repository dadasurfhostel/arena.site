import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import Reveal from "./Reveal";
import Star from "./Star";
import { useSiteContent } from "../context/SiteContentContext";

interface FormState {
  checkin: string;
  checkout: string;
  guests: string;
  dorm: string;
}

export default function Booking() {
  const { content } = useSiteContent();
  const booking = content.booking;

  const [form, setForm] = useState<FormState>({
    checkin: "",
    checkout: "",
    guests: "2",
    dorm: "any",
  });
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const inputCls =
    "w-full rounded-xl border border-sand-300 bg-sand-50 px-4 py-3.5 text-sm font-semibold text-ink-800 outline-none transition-all placeholder:text-ink-400 focus:border-clay-500 focus:ring-4 focus:ring-clay-500/20";
  const labelCls =
    "mb-2 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink-500";

  return (
    <section id="booking" className="relative scroll-mt-20 px-5 py-24 md:py-32">
      {/* Warm clay band */}
      <div className="absolute inset-0 bg-gradient-to-br from-clay-600 via-clay-500 to-clay-700" />
      <div className="absolute inset-0 bg-zellige-clay" />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] bg-sand-50 shadow-2xl shadow-clay-900/30">
            <div className="grid md:grid-cols-5">
              {/* Side panel */}
              <div className="relative flex flex-col justify-between overflow-hidden bg-ocean-900 p-8 md:p-10">
                <div className="absolute inset-0 bg-zellige-dark opacity-70" />
                <div className="relative">
                  <Star className="h-7 w-7 text-sun-400" />
                  <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-sand-50 md:text-4xl">
                    {booking.titleA}{" "}
                    <span className="italic text-sun-400">
                      {booking.titleAccent}
                    </span>
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-ocean-100/85">
                    {booking.text}
                  </p>
                </div>
                <ul className="relative mt-8 space-y-3 text-xs font-bold uppercase tracking-[0.15em] text-ocean-100/80">
                  {booking.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Star className="h-3 w-3 shrink-0 text-sun-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form */}
              <div className="p-8 md:col-span-3 md:p-10">
                {submitted ? (
                  <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-clay-500/15 text-clay-600">
                      <Star className="h-9 w-9" />
                    </span>
                    <h3 className="mt-6 font-display text-3xl font-medium text-ink-800">
                      {booking.successTitle}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500">
                      {booking.successText}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 inline-flex items-center gap-2.5 rounded-full border-2 border-clay-500 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.2em] text-clay-600 transition-all hover:bg-clay-500 hover:text-sand-50"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Make another request
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="grid gap-5 sm:grid-cols-2"
                  >
                    <div>
                      <label htmlFor="checkin" className={labelCls}>
                        Check-in
                      </label>
                      <input
                        id="checkin"
                        type="date"
                        required
                        value={form.checkin}
                        onChange={update("checkin")}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout" className={labelCls}>
                        Check-out
                      </label>
                      <input
                        id="checkout"
                        type="date"
                        required
                        value={form.checkout}
                        onChange={update("checkout")}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className={labelCls}>
                        Guests
                      </label>
                      <select
                        id="guests"
                        value={form.guests}
                        onChange={update("guests")}
                        className={inputCls}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "guest" : "guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="dorm" className={labelCls}>
                        Dorm
                      </label>
                      <select
                        id="dorm"
                        value={form.dorm}
                        onChange={update("dorm")}
                        className={inputCls}
                      >
                        <option value="any">Any dorm</option>
                        {content.dorms.map((dorm, i) => (
                          <option key={i} value={String(i)}>
                            {dorm.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-3 rounded-full bg-clay-500 px-8 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-sand-50 shadow-lg shadow-clay-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-600 sm:col-span-2"
                    >
                      {booking.submitLabel}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </button>
                    <p className="text-center text-xs text-ink-400 sm:col-span-2">
                      {booking.demoNote}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
