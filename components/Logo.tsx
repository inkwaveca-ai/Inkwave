import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="InkWave home">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-ink-600 text-white">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path
            fill="currentColor"
            d="M3 16c2-4 5-4 7 0s5 4 7 0 4-4 4-4v6H3v-2Z"
          />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-slate-900">
        Ink<span className="text-ink-600">Wave</span>
      </span>
    </Link>
  );
}
