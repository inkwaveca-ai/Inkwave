import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { TrustStrip } from "@/components/TrustStrip";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "InkWave is an online-only Canadian shop for custom pens, promotional products, print, and signage — built for businesses that want quality, speed, and real support.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Promoting Canadian brands, one order at a time."
        subtitle="InkWave is an online-only shop for custom pens, promo, print, and signage. We combine the ease of ecommerce with the flexibility of a real print & sign shop."
        crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
      />

      <section className="py-16">
        <div className="container-8xl grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="h2">Why we built InkWave</h2>
            <p className="mt-4 text-slate-700">
              Too many promotional suppliers make you choose: an easy-to-shop catalog with limited flexibility, or a custom print shop that wants a 30-minute phone call for a 5-minute order. We’re building the middle.
            </p>
            <p className="mt-4 text-slate-700">
              Our shop is simple for everyday orders — pens, shirts, business cards, banners. Our quote and proof flow is ready when you need something custom. And every job — big or small — gets a real human on your side.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: "How we operate", v: "Online only — no showroom, no overhead passed to you." },
              { k: "Where we ship", v: "Every province in Canada, via tracked carriers." },
              { k: "Our minimums", v: "Low — 100 pens, 24 shirts, 1 sign." },
              { k: "Our proof promise", v: "Nothing prints until you approve." },
            ].map((c) => (
              <div key={c.k} className="card p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-600">{c.k}</div>
                <div className="mt-2 text-sm text-slate-700">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-16">
        <div className="container-8xl">
          <h2 className="h2">How we work</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Shop or request a quote", d: "Simple products ship themselves. Custom jobs get a human reply within one business day." },
              { n: "02", t: "Send artwork", d: "Upload on the product page, via email, or after we send your quote." },
              { n: "03", t: "Approve your proof", d: "Free digital proof. Unlimited revisions until it’s right." },
              { n: "04", t: "Production & shipping", d: "We print, pack, and ship tracked across Canada." },
            ].map((s) => (
              <div key={s.n} className="card p-6">
                <div className="text-sm font-bold text-ink-600">{s.n}</div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{s.t}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/quote" className="btn-primary">Start a quote</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
