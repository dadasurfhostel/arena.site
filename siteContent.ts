/* ------------------------------------------------------------------ */
/*  Editable content model — the single source of truth for all copy   */
/*  on the site. The hidden Control Panel edits this structure live.   */
/* ------------------------------------------------------------------ */

export interface DormContent {
  name: string;
  image: string;
  price: number;
  priceUnit: string;
  description: string;
  features: string[];
}

export interface FacilityCardContent {
  title: string;
  image: string;
  description: string;
  tags: string[];
}

export interface ValueContent {
  title: string;
  text: string;
}

export interface StatContent {
  value: string;
  label: string;
}

export interface ActivityContent {
  title: string;
  time: string;
  text: string;
  image: string;
}

export interface SocialContent {
  label: string;
  handle: string;
}

export interface SiteContent {
  brand: { name: string; suffix: string };
  hero: {
    image: string;
    eyebrow: string;
    titleA: string;
    accentA: string;
    titleB: string;
    accentB: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chips: string[];
  };
  marquee: string[];
  stays: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    sub: string;
    reserveLabel: string;
    includedTitle: string;
    included: string[];
  };
  dorms: DormContent[];
  facilities: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    sub: string;
    wideCtaLabel: string;
    cards: FacilityCardContent[];
  };
  soul: {
    imageMain: string;
    imageFloating: string;
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    paragraph1: string;
    paragraph2: string;
    quote: string;
    quoteAuthor: string;
    values: ValueContent[];
    stats: StatContent[];
  };
  activities: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    sub: string;
    items: ActivityContent[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  booking: {
    titleA: string;
    titleAccent: string;
    text: string;
    bullets: string[];
    submitLabel: string;
    successTitle: string;
    successText: string;
    demoNote: string;
  };
  footer: {
    ctaEyebrow: string;
    ctaTitleA: string;
    ctaButton: string;
    blurb: string;
    addressLine1: string;
    addressLine2: string;
    nearNote: string;
    hoursNote: string;
    phone: string;
    email: string;
    socials: SocialContent[];
    copyright: string;
    madeWith: string;
  };
}

/* ------------------------- Image catalogue ------------------------- */

export const IMAGES: { value: string; label: string }[] = [
  { value: "/images/hero-sunset.jpg", label: "Rooftop sunset — hero" },
  { value: "/images/rooftop.jpg", label: "Rooftop terrace at dusk" },
  { value: "/images/cafe.jpg", label: "Café & mint tea" },
  { value: "/images/surf.jpg", label: "Surf lesson at sunrise" },
  { value: "/images/culture.jpg", label: "Moroccan mint tea ritual" },
  { value: "/images/bonfire.jpg", label: "Beach bonfire night" },
  { value: "/images/skate.jpg", label: "Sunset skate session" },
  { value: "/images/excursion.jpg", label: "Paradise Valley excursion" },
  { value: "/images/dorm-female.jpg", label: "Female dormitory" },
  { value: "/images/dorm-male.jpg", label: "Male dormitory" },
];

/* --------------------------- Default copy -------------------------- */

export const defaultContent: SiteContent = {
  brand: { name: "Dada", suffix: "Surf Hostel" },
  hero: {
    image: "/images/hero-sunset.jpg",
    eyebrow: "Tsaoudine · Tamraght · Agadir",
    titleA: "Catch the",
    accentA: "Waves",
    titleB: "live the",
    accentB: "Moroccan vibe",
    sub: "A warm little house in the quiet village of Tsaoudine, Tamraght — minutes from Agadir's surf breaks. Authentic Moroccan hospitality, salt-water days and true community spirit, all under one terracotta roof.",
    ctaPrimary: "Book your stay",
    ctaSecondary: "Explore activities",
    chips: [
      "Dorms from 200 MAD / night",
      "Rooftop sunset terrace",
      "Surf coaching & guides",
      "Café & restaurant",
    ],
  },
  marquee: [
    "Yalla surf",
    "Ahlan wa sahlan",
    "Mint tea sunsets",
    "Tamraght · Agadir",
    "Bonfire nights",
    "One big family",
    "Salt & stories",
    "Dada Surf Hostel",
  ],
  stays: {
    eyebrow: "Stay with us",
    titleA: "Cozy dorms with a",
    titleAccent: "bohemian Moroccan",
    titleB: "soul",
    sub: "Simple, warm and honest — the way a surf hostel should be. Choose your dorm, drop your board, and feel at home.",
    reserveLabel: "Reserve this dorm",
    includedTitle: "Every stay includes",
    included: ["Free fast Wi-Fi", "Free parking", "Cozy Moroccan lounges"],
  },
  dorms: [
    {
      name: "Female Shared Dormitory",
      image: "/images/dorm-female.jpg",
      price: 200,
      priceUnit: "MAD / night",
      description:
        "A bright, calm retreat designed for female travelers — woven textures, warm clay tones and a cozy bohemian atmosphere made for deep rest between surf sessions.",
      features: [
        "Free Wi-Fi",
        "Free parking",
        "Moroccan lounges",
        "Personal lockers",
        "Hot showers",
        "Shared kitchen",
      ],
    },
    {
      name: "Male Shared Dormitory",
      image: "/images/dorm-male.jpg",
      price: 200,
      priceUnit: "MAD / night",
      description:
        "An earthy, easygoing dorm with Berber rugs, warm wood and a surf-shack soul — crash after dawn patrol, recharge, and do it all again tomorrow.",
      features: [
        "Free Wi-Fi",
        "Free parking",
        "Moroccan lounges",
        "Personal lockers",
        "Hot showers",
        "Shared kitchen",
      ],
    },
  ],
  facilities: {
    eyebrow: "Facilities & experiences",
    titleA: "Everything you need — and a",
    titleAccent: "little magic",
    sub: "From sunrise coffee to sunset rooftops and midnight bonfires, the house hums from dawn till long after dark.",
    wideCtaLabel: "Explore activities",
    cards: [
      {
        title: "Rooftop & Sunset",
        image: "/images/rooftop.jpg",
        description:
          "The ultimate chill-out spot. Panoramic Atlantic views, floor cushions and warm lantern light — made for golden hours, slow evening chats and community gatherings under a painted sky.",
        tags: ["Sunset views", "Evening gatherings", "Mint tea rituals"],
      },
      {
        title: "Café & Restaurant",
        image: "/images/cafe.jpg",
        description:
          "Delicious local and international dishes served with a vibrant café culture — hearty surf breakfasts, slow tagine dinners, fresh juices and mint tea all day long.",
        tags: ["Local & international", "Tagine nights", "Fresh juices"],
      },
      {
        title: "Surf Coaching & Adventures",
        image: "/images/surf.jpg",
        description:
          "Professional surf training and guided sessions on Tamraght's friendly breaks, surf-skate practice to sharpen your flow, and magical evening fire gatherings on the sand to close the day.",
        tags: ["Certified local coaches", "Surf-skate sessions", "Bonfire gatherings"],
      },
    ],
  },
  soul: {
    imageMain: "/images/culture.jpg",
    imageFloating: "/images/rooftop.jpg",
    eyebrow: "The Moroccan soul",
    titleA: "Hospitality is our",
    titleAccent: "mother tongue",
    paragraph1:
      "In Morocco, dada means grandmother — the warm heart of the home. We built this house in her honor: a place where every traveler is welcomed like family, where the tea is always brewing and no story is ever told only once.",
    paragraph2:
      "From the zellige-inspired details to the handmade Berber textiles, local tradition lives in every corner. Evenings end with communal dinners, gnawa rhythms and slow conversations — the kind of community bonding you carry home long after the sand is gone.",
    quote: "A guest is a gift from God — and at Dada, every guest is family.",
    quoteAuthor: "Old Moroccan saying, lived daily here",
    values: [
      {
        title: "Ahlan wa sahlan",
        text: "A welcome that feels like coming home — it is simply the Moroccan way.",
      },
      {
        title: "The atay ritual",
        text: "Sweet mint tea, poured high and shared slowly — hospitality in a glass.",
      },
      {
        title: "Living craft",
        text: "Zellige, weaving and carving — artisan traditions alive in every corner.",
      },
      {
        title: "One community",
        text: "Travelers, surfers and locals gathering as one big family, every evening.",
      },
    ],
    stats: [
      { value: "200 MAD", label: "dorms per night" },
      { value: "5 min", label: "walk to the surf" },
      { value: "2", label: "cozy shared dorms" },
      { value: "1", label: "big family" },
    ],
  },
  activities: {
    eyebrow: "Daily program",
    titleA: "Days full of",
    titleAccent: "salt, skate",
    titleB: "& stories",
    sub: "From dawn-patrol surf sessions to bonfire nights — at Dada, there is always something happening, and everyone is invited.",
    items: [
      {
        title: "Surf Lessons",
        time: "Daily · 09:00 & 15:00",
        text: "Beginner-friendly lessons and guided sessions with certified local coaches on Tamraght's gentle beach breaks.",
        image: "/images/surf.jpg",
      },
      {
        title: "Skate Sessions",
        time: "Mon · Wed · Fri",
        text: "Surf-skate training on the promenade — build flow, carve and balance for the days the ocean rests.",
        image: "/images/skate.jpg",
      },
      {
        title: "Evening Fire Nights",
        time: "Tue & Sat · after sunset",
        text: "Guitars, stories and sweet mint tea around a crackling bonfire under a sky full of stars.",
        image: "/images/bonfire.jpg",
      },
      {
        title: "Rooftop Chilling",
        time: "Every evening",
        text: "Golden hour on the terrace — the ultimate chill-out spot for sunset views, card games and long talks.",
        image: "/images/rooftop.jpg",
      },
      {
        title: "Cultural Excursions",
        time: "Weekly",
        text: "Day trips to Paradise Valley, Taghazout's fishing village and Agadir's vibrant souks and markets.",
        image: "/images/excursion.jpg",
      },
    ],
    ctaTitle: "See the full weekly program",
    ctaText:
      "Yoga mornings, tagine cook-alongs, gnawa nights and movie screenings — the chalkboard in the café always knows what's next.",
    ctaButton: "Plan your week",
  },
  booking: {
    titleA: "Ready to catch your",
    titleAccent: "wave",
    text: "Tell us when you're coming and we'll hold a bed for you. Dorms from 200 MAD / night — Wi-Fi, parking and the lounges always included.",
    bullets: ["No booking fees", "Free cancellation", "Pay on arrival"],
    submitLabel: "Check availability",
    successTitle: "Shukran! Request received.",
    successText:
      "We'll confirm your bed within 24 hours — yalla, the waves are waiting for you in Tamraght.",
    demoNote: "This is a concept demo — your dates aren't sent anywhere.",
  },
  footer: {
    ctaEyebrow: "Yalla — the ocean is calling",
    ctaTitleA: "See you at",
    ctaButton: "Book your stay",
    blurb: "A warm Moroccan surf house in Tsaoudine, Tamraght — where waves, mint tea and new friends meet every single day.",
    addressLine1: "Tsaoudine, Tamraght 80000",
    addressLine2: "Agadir, Morocco",
    nearNote: "5 minutes from Tamraght surf spots",
    hoursNote: "Reception open 24/7 — tea always on",
    phone: "+212 6 61 23 45 67",
    email: "salaam@dadasurf.ma",
    socials: [
      { label: "Instagram", handle: "@dadasurfhostel" },
      { label: "Facebook", handle: "Dada Surf Hostel" },
      { label: "WhatsApp", handle: "+212 6 61 23 45 67" },
    ],
    copyright:
      "Dada Surf Hostel — Tsaoudine, Tamraght, Agadir. All rights reserved.",
    madeWith: "Crafted with mint tea & ocean breeze",
  },
};

/* ------------------------ Persistence helpers ---------------------- */

const STORAGE_KEY = "dada-surf-content-v1";

export function loadContent(): SiteContent {
  if (typeof window === "undefined") return defaultContent;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultContent;
    const parsed = JSON.parse(raw) as Partial<SiteContent>;
    return { ...defaultContent, ...parsed };
  } catch {
    return defaultContent;
  }
}

export function saveContent(content: SiteContent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  } catch {
    /* storage unavailable — ignore */
  }
}

/* --------------------------- Path helpers -------------------------- */

export function getByPath(obj: unknown, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (acc, key) =>
        (acc as Record<string, unknown> | null | undefined)?.[key] ?? null,
      obj
    );
}

export function setByPath<T>(obj: T, path: string, value: unknown): T {
  const keys = path.split(".");
  const clone: Record<string, unknown> = Array.isArray(obj)
    ? ([...(obj as unknown[])] as unknown as Record<string, unknown>)
    : { ...(obj as Record<string, unknown>) };
  let cur: Record<string, unknown> = clone;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    const child = cur[key];
    cur[key] = Array.isArray(child)
      ? ([...child] as unknown)
      : { ...(child as Record<string, unknown>) };
    cur = cur[key] as Record<string, unknown>;
  }
  cur[keys[keys.length - 1]] = value;
  return clone as unknown as T;
}
