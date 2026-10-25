import Star from "./Star";
import { useSiteContent } from "../context/SiteContentContext";

export default function Marquee() {
  const { content } = useSiteContent();
  const items = content.marquee.length > 0 ? content.marquee : ["Dada Surf Hostel"];

  return (
    <div className="relative overflow-hidden border-y border-clay-700/40 bg-clay-600 py-4">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center"
            aria-hidden={copy === 1}
          >
            {items.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center gap-6 pr-6">
                <span className="whitespace-nowrap font-display text-lg italic text-sand-50 md:text-xl">
                  {item}
                </span>
                <Star className="h-3.5 w-3.5 shrink-0 text-sun-400" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
