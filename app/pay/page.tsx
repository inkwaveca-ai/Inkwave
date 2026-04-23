import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PayForm } from "./PayForm";

export const metadata: Metadata = {
  title: "Pay Invoice or Deposit",
  description:
    "Pay an InkWave invoice or place a deposit on a custom job. Enter your invoice or quote number to get started.",
};

export default function PayPage() {
  return (
    <>
      <PageHeader
        eyebrow="Billing"
        title="Pay invoice or deposit."
        subtitle="Enter the invoice or quote number from your email. You can pay in full or place a 50% deposit on custom jobs."
        crumbs={[{ href: "/", label: "Home" }, { label: "Pay Invoice" }]}
      />
      <section className="py-14">
        <div className="container-8xl grid gap-10 lg:grid-cols-[1fr_360px]">
          <PayForm />
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-base font-semibold text-slate-900">How payment works</h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3"><span className="font-bold text-ink-600">1.</span> Enter your invoice or quote number.</li>
                <li className="flex gap-3"><span className="font-bold text-ink-600">2.</span> Choose full payment or a 50% deposit.</li>
                <li className="flex gap-3"><span className="font-bold text-ink-600">3.</span> Pay securely by card. We’ll email a receipt.</li>
              </ol>
            </div>
            <div className="card p-6">
              <h3 className="text-base font-semibold text-slate-900">Need a different method?</h3>
              <p className="mt-2 text-sm text-slate-600">
                We also accept e-transfer and EFT for Canadian businesses. Contact us and we’ll send details.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
