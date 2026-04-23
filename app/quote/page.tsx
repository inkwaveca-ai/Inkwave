import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TrustStrip } from "@/components/TrustStrip";
import { QuoteForm } from "./QuoteForm";

export const metadata: Metadata = {
  title: "Custom Quote",
  description:
    "Get a fast quote for custom signage, wraps, large print runs, and mixed jobs. We respond within one business day.",
};

export default function QuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Custom Quote"
        title="Tell us about your project."
        subtitle="Best for signage, wraps, large print runs, installs, or mixed jobs. We’ll reply within one business day with pricing and a proof plan."
        crumbs={[{ href: "/", label: "Home" }, { label: "Custom Quote" }]}
      />
      <section className="py-14">
        <div className="container-8xl grid gap-10 lg:grid-cols-[1fr_360px]">
          <QuoteForm />
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-base font-semibold text-slate-900">What happens next</h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3"><span className="font-bold text-ink-600">1.</span> We review your project and reply within one business day.</li>
                <li className="flex gap-3"><span className="font-bold text-ink-600">2.</span> You get pricing, timeline, and a proof plan.</li>
                <li className="flex gap-3"><span className="font-bold text-ink-600">3.</span> Approve the proof, pay a deposit, and we go to print.</li>
                <li className="flex gap-3"><span className="font-bold text-ink-600">4.</span> Tracked shipping to your door.</li>
              </ol>
            </div>
            <div className="card p-6">
              <h3 className="text-base font-semibold text-slate-900">Great for</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                <li>· Vehicle lettering & wraps</li>
                <li>· Window graphics</li>
                <li>· Storefront signs</li>
                <li>· Large banner runs</li>
                <li>· Custom apparel bundles</li>
                <li>· Anything not listed in our shop</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <TrustStrip />
    </>
  );
}
