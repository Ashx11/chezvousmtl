/** Minimal line drawing: fork · plate · knife. 1px strokes in the accent colour. */
export default function PlateIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="45 4 153 56"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      className={`h-14 w-auto overflow-visible text-accent ${className}`}
    >
      <g>
        {/* Fork */}
        <path vectorEffect="non-scaling-stroke" d="M46 6v15c0 5 2.7 8 6 8s6-3 6-8V6" />
        <path vectorEffect="non-scaling-stroke" d="M52 6v15" />
        <path vectorEffect="non-scaling-stroke" d="M52 29v29" />
        {/* Plate */}
        <circle vectorEffect="non-scaling-stroke" cx="120" cy="32" r="27" />
        <circle vectorEffect="non-scaling-stroke" cx="120" cy="32" r="19" />
        {/* Knife */}
        <path vectorEffect="non-scaling-stroke" d="M188 58V6c6 4 9 13 8.5 26H188" />
      </g>
    </svg>
  );
}
