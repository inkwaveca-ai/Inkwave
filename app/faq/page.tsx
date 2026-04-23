import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about ordering, proofs, artwork, turnaround, shipping, and payment at InkWave.",
};

const groups = [
  {
    title: "Ordering",
    items: [
      { q: "What’s the minimum order?", a: "It varies by product — 100 pens, 24 shirts, 36 mugs, 1 sign. Each product page lists its minimum." },
      { q: "How do I order a custom product not in your shop?", a: "Use our Custom Quote form. We’ll reply within one business day with pricing, turnaround, and a proof plan." },
      { q: "Can I change or cancel my order?", a: "Yes — as long as production hasn’t started. Once your proof is approved and we’ve started printing, orders are final." },
    ],
  },
  {
    title: "Artwork & proofs",
    items: [
      { q: "What file types do you accept?", a: "Vector files (AI, EPS, PDF, SVG) are best. We also accept high-res PNG and JPG (300 DPI)." },
      { q: "I don’t have artwork ready — can you help?", a: "Yes. Our team can lay out a simple logo at no extra cost. For full design work, request a design quote." },
      { q: "Do I always get a proof?", a: "Yes — every order includes a free digital proof. We never print without your approval." },
      { q: "How many revisions are included?", a: "Unlimited within reason. If scope changes significantly, we’ll flag it." },
    ],
  },
  {
    title: "Turnaround & shipping",
    items: [
      { q: "How fast can you turn it around?", a: "Standard is 3–7 business days from proof approval, depending on the product. Rush options are available — ask us." },
      { q: "Where do you ship?", a: "Every province in Canada, via tracked carriers. Shipping is calculated at checkout." },
      { q: "Do you offer local pickup?", a: "We’re online only — no storefront. Every order ships to you." },
      { q: "International shipping?", a: "Not at this time. We focus on serving Canadian businesses." },
    ],
  },
  {
    title: "Payment",
    items: [
      { q: "How do I pay?", a: "Credit card via secure checkout. We also accept e-transfer and EFT for Canadian businesses on quoted jobs." },
      { q: "Do you require a deposit?", a: "Custom and large jobs require a 50% deposit to start production. Balance is due before shipping." },
      { q: "Do you charge GST/HST/PST?", a: "Yes, per Canadian tax rules for the shipping destination." },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="Help"
        title="Frequently asked questions."
        subtitle="Quick answers to the things people ask us most. Don’t see yours? Contact us — we reply fast."
        crumbs={[{ href: "/", label: "Home" }, { label: "FAQ" }]}
      />
      <section className="py-14">
        <div className="container-8xl grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Topics</h3>
            <ul className="mt-4 space-y-1">
              {groups.map((g) => (
                <li key={g.title}>
                  <a href={`#${g.title.replace(/\s+/g, "-").toLowerCase()}`} className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-ink-50 hover:text-ink-700">
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h4 className="text-sm font-semibold text-slate-900">Still stuck?</h4>
              <p className="mt-1 text-sm text-slate-600">We’re here to help.</p>
              <Link href="/contact" className="btn-primary mt-4 w-full">Contact us</Link>
            </div>
          </aside>
          <div className="space-y-12">
            {groups.map((g) => (
              <div key={g.title} id={g.title.replace(/\s+/g, "-").toLowerCase()} className="scroll-mt-24">
                <h2 className="h3">{g.title}</h2>
                <div className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200">
                  {g.items.map((f) => (
                    <details key={f.q} className="group p-5">
                      <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                        {f.q}
                        <span className="ml-4 text-ink-600 transition group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-sm text-slate-600">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
