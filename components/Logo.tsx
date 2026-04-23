import Link from "next/link";

export function Logo({
  className = "",
  variant = "mark-with-wordmark",
}: {
  className?: string;
  variant?: "mark-with-wordmark" | "mark" | "lockup";
}) {
  if (variant === "lockup") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`} aria-label="InkWave home">
        <img src="/img/logo-lockup.svg" alt="InkWave" className="h-12 w-auto" />
      </Link>
    );
  }

  if (variant === "mark") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`} aria-label="InkWave home">
        <img src="/img/logo-mark.svg" alt="InkWave" className="h-8 w-auto" />
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="InkWave home">
      <img src="/img/logo-mark.svg" alt="" className="h-9 w-auto" aria-hidden />
      <span className="text-xl font-extrabold tracking-wide text-slate-900">
        INK<span className="ml-1">WAVE</span>
      </span>
    </Link>
  );
}
