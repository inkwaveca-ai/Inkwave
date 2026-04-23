import { trustPoints } from "@/lib/site";

export function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="container-8xl grid grid-cols-2 gap-y-6 py-6 text-sm md:grid-cols-5">
        {trustPoints.map((p) => (
          <div key={p.label} className="flex items-start gap-3">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-none text-ink-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <div>
              <div className="font-semibold text-slate-900">{p.label}</div>
              <div className="text-slate-500">{p.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
