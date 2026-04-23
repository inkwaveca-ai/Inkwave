import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url(/img/hero-bg.svg)" }}
        aria-hidden
      />
      <div className="relative container-8xl py-20 sm:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-100">
            Canada-wide · Online only
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Custom Branded Pens, Promo, Print &amp; Signage
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-100">
            Fast quotes, free digital proofs, and tracked shipping across Canada. Promote your brand with products that actually get used.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/pens" className="btn-accent">Shop Pens</Link>
            <Link href="/quote" className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white/20">
              Get a Quote
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-100">
            <span>✓ Low minimums</span>
            <span>✓ Free proof before print</span>
            <span>✓ Bulk pricing</span>
            <span>✓ Real human support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
