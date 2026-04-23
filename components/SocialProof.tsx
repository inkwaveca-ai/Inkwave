const reviews = [
  {
    quote:
      "Ordered 500 branded soft touch pens for our conference — arrived in a week, the proof process was painless, and the quality was way better than the last vendor we used.",
    name: "Jenna M.",
    role: "Events Lead, TechNorth",
  },
  {
    quote:
      "We use InkWave for everything now — business cards, flyers, trade show banners, staff tees. One point of contact, one invoice, consistent quality.",
    name: "Dev P.",
    role: "Marketing Manager, Bloom Realty",
  },
  {
    quote:
      "Needed 50 coroplast signs overnight for a campaign kickoff. They made it happen, and the print quality was sharp. Saved the launch.",
    name: "Alex R.",
    role: "Campaign Director",
  },
];

export function SocialProof() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container-8xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Trusted by</p>
          <h2 className="h2 mt-2">Businesses, events, and organizations across Canada.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="card p-6">
              <div className="flex gap-0.5 text-accent-500" aria-hidden>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-slate-700">“{r.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                {r.name}
                <span className="block text-xs font-normal text-slate-500">{r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
