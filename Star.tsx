interface StarProps {
  className?: string;
}

/** Moroccan eight-pointed star (khatam) — two overlapping squares */
export default function Star({ className = "" }: StarProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <rect x="6" y="6" width="12" height="12" />
      <rect x="6" y="6" width="12" height="12" transform="rotate(45 12 12)" />
    </svg>
  );
}
