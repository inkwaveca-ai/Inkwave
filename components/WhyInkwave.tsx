const reasons = [
  {
    title: "Fast turnaround",
    body: "Most orders ship in 3–7 business days. Rush options available when you need it yesterday.",
  },
  {
    title: "Real customer service",
    body: "Talk to a real human by phone, email, or chat. We’ll help you pick the right product and get art-ready.",
  },
  {
    title: "Free digital proof",
    body: "We never print without your approval. Every order includes a free proof — no surprises.",
  },
  {
    title: "Bulk pricing built in",
    body: "Volume discounts kick in automatically. The more you order, the lower your per-piece price.",
  },
  {
    title: "Canada-wide shipping",
    body: "Fast, tracked shipping to every province. Online only means we pass the savings to you.",
  },
  {
    title: "Promo + print + signage",
    body: "One shop, one proof process, one point of contact — whether you need 500 pens or a full vehicle wrap.",
  },
];

export function WhyInkwave() {
  return (
    <section className="bg-white py-20">
      <div className="container-8xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Why InkWave</p>
          <h2 className="h2 mt-2">Everything you need to promote your brand — in one place.</h2>
          <p className="lede mt-4">
            We combine the easy-to-shop experience of an online store with the flexibility of a custom print & sign shop.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="card p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink-100 text-ink-700">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
