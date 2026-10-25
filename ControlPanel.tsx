import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  X,
  Download,
  Upload,
  RotateCcw,
  Sunset,
  Sparkles,
  BedDouble,
  Waves,
  HeartHandshake,
  CalendarDays,
  ClipboardList,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { useSiteContent } from "../../context/SiteContentContext";
import Star from "../Star";
import {
  AddButton,
  Card,
  Group,
  ImageSelect,
  NumberInput,
  StringList,
  TextArea,
  TextInput,
} from "./fields";

const SECTIONS: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "hero", label: "Brand & Hero", icon: Sunset },
  { id: "marquee", label: "Marquee", icon: Sparkles },
  { id: "stays", label: "Stays & Prices", icon: BedDouble },
  { id: "facilities", label: "Facilities", icon: Waves },
  { id: "soul", label: "Moroccan Soul", icon: HeartHandshake },
  { id: "activities", label: "Activities", icon: CalendarDays },
  { id: "booking", label: "Booking", icon: ClipboardList },
  { id: "footer", label: "Footer & Contact", icon: MapPin },
];

function Editor({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-display text-3xl font-medium text-ink-800">
          {title}
        </h3>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-500">
          {desc}
        </p>
      </div>
      {children}
    </div>
  );
}

/* --------------------------- Section editors ----------------------- */

function HeroEditor() {
  return (
    <Editor
      title="Brand & Hero"
      desc="The brand name and the first thing visitors see. Clicking any “Dada” on the site opens this panel."
    >
      <Card title="Brand">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput path="brand.name" label="Brand name" />
          <TextInput path="brand.suffix" label="Brand suffix" />
        </div>
      </Card>
      <Card title="Hero content">
        <ImageSelect path="hero.image" label="Background image" />
        <TextInput path="hero.eyebrow" label="Eyebrow (location line)" />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput path="hero.titleA" label="Headline — start" />
          <TextInput path="hero.accentA" label="Headline — accent (italic)" />
          <TextInput path="hero.titleB" label="Headline — middle" />
          <TextInput path="hero.accentB" label="Headline — accent (italic)" />
        </div>
        <TextArea path="hero.sub" label="Intro paragraph" rows={4} />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput path="hero.ctaPrimary" label="Primary button" />
          <TextInput path="hero.ctaSecondary" label="Secondary button" />
        </div>
        <StringList path="hero.chips" label="Info chips" addLabel="Add chip" />
      </Card>
    </Editor>
  );
}

function MarqueeEditor() {
  return (
    <Editor
      title="Marquee"
      desc="The scrolling strip of Moroccan phrases below the hero."
    >
      <Card title="Scrolling phrases">
        <StringList path="marquee" label="Items" addLabel="Add phrase" />
      </Card>
    </Editor>
  );
}

function StaysEditor() {
  const { content, removeItem } = useSiteContent();
  return (
    <Editor
      title="Stays & Prices"
      desc="Dormitory names, nightly rates, descriptions and included amenities."
    >
      <Card title="Section intro">
        <TextInput path="stays.eyebrow" label="Eyebrow" />
        <div className="grid gap-4 sm:grid-cols-3">
          <TextInput path="stays.titleA" label="Title — start" />
          <TextInput path="stays.titleAccent" label="Title — accent" />
          <TextInput path="stays.titleB" label="Title — end" />
        </div>
        <TextArea path="stays.sub" label="Subtitle" rows={2} />
        <TextInput path="stays.reserveLabel" label="Reserve button label" />
      </Card>

      {content.dorms.map((dorm, i) => (
        <Group
          key={i}
          title={dorm.name || `Dorm ${i + 1}`}
          onRemove={() => removeItem("dorms", i)}
        >
          <TextInput path={`dorms.${i}.name`} label="Dorm name" />
          <ImageSelect path={`dorms.${i}.image`} label="Photo" />
          <div className="grid gap-4 sm:grid-cols-2">
            <NumberInput path={`dorms.${i}.price`} label="Price per night" />
            <TextInput path={`dorms.${i}.priceUnit`} label="Price unit label" />
          </div>
          <TextArea path={`dorms.${i}.description`} label="Description" rows={3} />
          <StringList
            path={`dorms.${i}.features`}
            label="Amenities"
            addLabel="Add amenity"
          />
        </Group>
      ))}
      <AddButton
        path="dorms"
        template={{
          name: "New Dorm",
          image: "/images/dorm-female.jpg",
          price: 200,
          priceUnit: "MAD / night",
          description: "Describe this dorm…",
          features: ["Free Wi-Fi", "Free parking", "Moroccan lounges"],
        }}
        label="Add dorm"
      />

      <Card title="Included strip">
        <TextInput path="stays.includedTitle" label="Strip title" />
        <StringList
          path="stays.included"
          label="Included items"
          addLabel="Add item"
        />
      </Card>
    </Editor>
  );
}

function FacilitiesEditor() {
  const { content, removeItem } = useSiteContent();
  return (
    <Editor
      title="Facilities & Experiences"
      desc="Rooftop, café, surf coaching — the three big experience cards."
    >
      <Card title="Section intro">
        <TextInput path="facilities.eyebrow" label="Eyebrow" />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput path="facilities.titleA" label="Title — start" />
          <TextInput
            path="facilities.titleAccent"
            label="Title — accent (italic)"
          />
        </div>
        <TextArea path="facilities.sub" label="Subtitle" rows={2} />
        <TextInput
          path="facilities.wideCtaLabel"
          label="Wide card button label"
        />
      </Card>

      {content.facilities.cards.map((card, i) => (
        <Group
          key={i}
          title={card.title || `Card ${i + 1}`}
          onRemove={() => removeItem("facilities.cards", i)}
        >
          <TextInput path={`facilities.cards.${i}.title`} label="Title" />
          <ImageSelect path={`facilities.cards.${i}.image`} label="Photo" />
          <TextArea
            path={`facilities.cards.${i}.description`}
            label="Description"
            rows={3}
          />
          <StringList
            path={`facilities.cards.${i}.tags`}
            label="Tags"
            addLabel="Add tag"
          />
        </Group>
      ))}
      <AddButton
        path="facilities.cards"
        template={{
          title: "New experience",
          image: "/images/rooftop.jpg",
          description: "Describe this experience…",
          tags: ["Tag one", "Tag two"],
        }}
        label="Add experience card"
      />
    </Editor>
  );
}

function SoulEditor() {
  const { content, removeItem } = useSiteContent();
  return (
    <Editor
      title="The Moroccan Soul"
      desc="The cultural story section — values, proverb and stats."
    >
      <Card title="Images">
        <div className="grid gap-4 sm:grid-cols-2">
          <ImageSelect path="soul.imageMain" label="Main photo" />
          <ImageSelect path="soul.imageFloating" label="Floating card photo" />
        </div>
      </Card>
      <Card title="Section intro & story">
        <TextInput path="soul.eyebrow" label="Eyebrow" />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput path="soul.titleA" label="Title — start" />
          <TextInput
            path="soul.titleAccent"
            label="Title — accent (italic)"
          />
        </div>
        <TextArea path="soul.paragraph1" label="Paragraph one" rows={4} />
        <TextArea path="soul.paragraph2" label="Paragraph two" rows={4} />
      </Card>
      <Card title="Proverb">
        <TextArea path="soul.quote" label="Quote" rows={2} />
        <TextInput path="soul.quoteAuthor" label="Attribution" />
      </Card>

      {content.soul.values.map((value, i) => (
        <Group
          key={i}
          title={value.title || `Value ${i + 1}`}
          onRemove={() => removeItem("soul.values", i)}
        >
          <TextInput path={`soul.values.${i}.title`} label="Title" />
          <TextArea path={`soul.values.${i}.text`} label="Text" rows={2} />
        </Group>
      ))}
      <AddButton
        path="soul.values"
        template={{ title: "New value", text: "Describe this value…" }}
        label="Add value"
      />

      {content.soul.stats.map((_, i) => (
        <Group
          key={i}
          title={`Stat ${i + 1}`}
          onRemove={() => removeItem("soul.stats", i)}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <TextInput path={`soul.stats.${i}.value`} label="Value" />
            <TextInput path={`soul.stats.${i}.label`} label="Label" />
          </div>
        </Group>
      ))}
      <AddButton
        path="soul.stats"
        template={{ value: "0", label: "new stat" }}
        label="Add stat"
      />
    </Editor>
  );
}

function ActivitiesEditor() {
  const { content, removeItem } = useSiteContent();
  return (
    <Editor
      title="Activities"
      desc="The daily program grid — surf, skate, fire nights and excursions."
    >
      <Card title="Section intro">
        <TextInput path="activities.eyebrow" label="Eyebrow" />
        <div className="grid gap-4 sm:grid-cols-3">
          <TextInput path="activities.titleA" label="Title — start" />
          <TextInput path="activities.titleAccent" label="Title — accent" />
          <TextInput path="activities.titleB" label="Title — end" />
        </div>
        <TextArea path="activities.sub" label="Subtitle" rows={2} />
      </Card>

      {content.activities.items.map((item, i) => (
        <Group
          key={i}
          title={item.title || `Activity ${i + 1}`}
          onRemove={() => removeItem("activities.items", i)}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <TextInput path={`activities.items.${i}.title`} label="Title" />
            <TextInput
              path={`activities.items.${i}.time`}
              label="Schedule badge"
            />
          </div>
          <ImageSelect path={`activities.items.${i}.image`} label="Photo" />
          <TextArea path={`activities.items.${i}.text`} label="Description" rows={3} />
        </Group>
      ))}
      <AddButton
        path="activities.items"
        template={{
          title: "New activity",
          time: "Daily",
          text: "Describe this activity…",
          image: "/images/surf.jpg",
        }}
        label="Add activity"
      />

      <Card title="Program CTA card">
        <TextInput path="activities.ctaTitle" label="Title" />
        <TextArea path="activities.ctaText" label="Text" rows={3} />
        <TextInput path="activities.ctaButton" label="Button label" />
      </Card>
    </Editor>
  );
}

function BookingEditor() {
  return (
    <Editor
      title="Booking"
      desc="The availability request card and its confirmation messages."
    >
      <Card title="Card content">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput path="booking.titleA" label="Title — start" />
          <TextInput
            path="booking.titleAccent"
            label="Title — accent (italic)"
          />
        </div>
        <TextArea path="booking.text" label="Text" rows={4} />
        <StringList
          path="booking.bullets"
          label="Bullets"
          addLabel="Add bullet"
        />
        <TextInput path="booking.submitLabel" label="Submit button label" />
      </Card>
      <Card title="Confirmation">
        <TextInput path="booking.successTitle" label="Success title" />
        <TextArea path="booking.successText" label="Success text" rows={3} />
        <TextInput path="booking.demoNote" label="Demo note (below button)" />
      </Card>
    </Editor>
  );
}

function FooterEditor() {
  const { content, removeItem } = useSiteContent();
  return (
    <Editor
      title="Footer & Contact"
      desc="Location, contact details, social handles and the closing call-to-action."
    >
      <Card title="Closing CTA">
        <TextInput path="footer.ctaEyebrow" label="Eyebrow" />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput
            path="footer.ctaTitleA"
            label="Title (…before “Dada.”)"
          />
          <TextInput path="footer.ctaButton" label="Button label" />
        </div>
        <TextArea path="footer.blurb" label="Brand blurb" rows={3} />
      </Card>
      <Card title="Location & contact">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput path="footer.addressLine1" label="Address line 1" />
          <TextInput path="footer.addressLine2" label="Address line 2" />
          <TextInput path="footer.phone" label="Phone" />
          <TextInput path="footer.email" label="Email" />
        </div>
        <TextInput path="footer.nearNote" label="Nearby note" />
        <TextInput path="footer.hoursNote" label="Hours note" />
      </Card>

      {content.footer.socials.map((social, i) => (
        <Group
          key={i}
          title={social.label || `Social ${i + 1}`}
          onRemove={() => removeItem("footer.socials", i)}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <TextInput path={`footer.socials.${i}.label`} label="Platform" />
            <TextInput path={`footer.socials.${i}.handle`} label="Handle" />
          </div>
        </Group>
      ))}
      <AddButton
        path="footer.socials"
        template={{ label: "New platform", handle: "@handle" }}
        label="Add social"
      />

      <Card title="Bottom bar">
        <TextArea
          path="footer.copyright"
          label="Copyright (after the year)"
          rows={2}
        />
        <TextInput path="footer.madeWith" label="Made-with note" />
      </Card>
    </Editor>
  );
}

/* ------------------------------ Panel ------------------------------ */

export default function ControlPanel() {
  const { content, isPanelOpen, closePanel, reset, importContent } =
    useSiteContent();
  const [active, setActive] = useState("hero");
  const [notice, setNotice] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  /* Close on Escape */
  useEffect(() => {
    if (!isPanelOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isPanelOpen, closePanel]);

  if (!isPanelOpen) return null;

  const flashNotice = (msg: string) => {
    setNotice(msg);
    window.setTimeout(() => setNotice(null), 3200);
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dada-surf-hostel-content.json";
    a.click();
    URL.revokeObjectURL(url);
    flashNotice("Content exported as JSON.");
  };

  const onImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    const ok = importContent(text);
    flashNotice(
      ok ? "Content imported successfully." : "Import failed — invalid JSON."
    );
    e.target.value = "";
  };

  const onReset = () => {
    if (
      window.confirm(
        "Reset all content back to the original Dada Surf Hostel copy? This cannot be undone."
      )
    ) {
      reset();
      flashNotice("Content reset to defaults.");
    }
  };

  const headBtn =
    "inline-flex items-center gap-2 rounded-full border border-sand-50/20 bg-sand-50/10 px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-sand-100 backdrop-blur transition hover:border-sun-400/60 hover:text-sun-300";

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ocean-950/75 backdrop-blur-sm"
        onClick={closePanel}
      />

      {/* Panel */}
      <div className="absolute inset-2 flex flex-col overflow-hidden rounded-[1.75rem] border border-sand-300 bg-sand-100 shadow-2xl md:inset-6">
        {/* Header */}
        <div className="relative flex shrink-0 flex-wrap items-center justify-between gap-3 overflow-hidden bg-ocean-900 px-5 py-4 md:px-7">
          <div className="absolute inset-0 bg-zellige-dark opacity-60" />
          <div className="relative flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-clay-500 text-sand-50">
              <Star className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-medium italic leading-none text-sand-50">
                Site Control Panel
              </p>
              <p className="mt-1.5 text-[10px] font-extrabold uppercase tracking-[0.25em] text-ocean-100/70">
                {content.brand.name} {content.brand.suffix} — live editor
              </p>
            </div>
          </div>
          <div className="relative flex items-center gap-2">
            {notice && (
              <span className="mr-1 hidden rounded-full bg-sun-500/15 px-3.5 py-1.5 text-xs font-bold text-sun-300 sm:block">
                {notice}
              </span>
            )}
            <button type="button" onClick={exportJson} className={headBtn}>
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className={headBtn}
            >
              <Upload className="h-4 w-4" />
              <span className="hidden sm:inline">Import</span>
            </button>
            <button type="button" onClick={onReset} className={headBtn}>
              <RotateCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              type="button"
              onClick={closePanel}
              aria-label="Close control panel"
              className="grid h-10 w-10 place-items-center rounded-full bg-clay-500 text-sand-50 transition hover:bg-clay-600"
            >
              <X className="h-5 w-5" />
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json"
              className="hidden"
              onChange={onImport}
            />
          </div>
        </div>

        {/* Body */}
        <div className="flex min-h-0 flex-1 flex-col md:flex-row">
          {/* Sidebar */}
          <nav className="flex shrink-0 gap-2 overflow-x-auto border-b border-sand-300 bg-sand-200/70 p-3 md:w-60 md:flex-col md:overflow-y-auto md:border-b-0 md:border-r">
            {SECTIONS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActive(id)}
                className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-xs font-extrabold uppercase tracking-[0.12em] transition-all ${
                  active === id
                    ? "bg-clay-500 text-sand-50 shadow-lg shadow-clay-900/20"
                    : "text-ink-600 hover:bg-clay-500/10 hover:text-clay-600"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </button>
            ))}
            <p className="mt-auto hidden rounded-xl bg-clay-500/10 p-3.5 text-[10px] leading-relaxed text-ink-500 md:block">
              You found the secret door — clicking any “{content.brand.name}”
              on the site opens this panel. Every change applies live and saves
              automatically to this browser.
            </p>
          </nav>

          {/* Main */}
          <div className="min-h-0 flex-1 overflow-y-auto p-5 md:p-8">
            {active === "hero" && <HeroEditor />}
            {active === "marquee" && <MarqueeEditor />}
            {active === "stays" && <StaysEditor />}
            {active === "facilities" && <FacilitiesEditor />}
            {active === "soul" && <SoulEditor />}
            {active === "activities" && <ActivitiesEditor />}
            {active === "booking" && <BookingEditor />}
            {active === "footer" && <FooterEditor />}
          </div>
        </div>
      </div>
    </div>
  );
}
