"use client";

import { useState } from "react";

export function PayForm() {
  const [mode, setMode] = useState<"full" | "deposit">("full");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="card p-8">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-600 text-white">✓</div>
        <h2 className="mt-4 text-2xl font-bold text-slate-900">Redirecting to secure payment…</h2>
        <p className="mt-2 text-slate-600">
          (In production, this would redirect to our Stripe checkout. A receipt will be emailed when payment completes.)
        </p>
      </div>
    );
  }

  return (
    <form
      className="card space-y-6 p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="invoice">Invoice or quote #</label>
          <input id="invoice" required className="input" placeholder="INV-001234" />
        </div>
        <div>
          <label className="label" htmlFor="email">Email on file</label>
          <input id="email" type="email" required className="input" placeholder="you@company.com" />
        </div>
      </div>

      <div>
        <label className="label">Payment type</label>
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setMode("full")}
            className={`rounded-xl border p-4 text-left transition ${
              mode === "full" ? "border-ink-600 bg-ink-50" : "border-slate-200 bg-white hover:border-ink-300"
            }`}
          >
            <div className="text-sm font-semibold text-slate-900">Pay in full</div>
            <div className="mt-1 text-xs text-slate-600">Production starts after proof approval.</div>
          </button>
          <button
            type="button"
            onClick={() => setMode("deposit")}
            className={`rounded-xl border p-4 text-left transition ${
              mode === "deposit" ? "border-ink-600 bg-ink-50" : "border-slate-200 bg-white hover:border-ink-300"
            }`}
          >
            <div className="text-sm font-semibold text-slate-900">50% deposit</div>
            <div className="mt-1 text-xs text-slate-600">For custom jobs. Balance due before shipping.</div>
          </button>
        </div>
      </div>

      <div>
        <label className="label" htmlFor="amount">
          {mode === "full" ? "Amount (CAD)" : "Deposit amount (CAD)"}
        </label>
        <input id="amount" type="number" min="1" step="0.01" required className="input max-w-[260px]" placeholder="0.00" />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Continue to secure payment
      </button>
      <p className="text-xs text-slate-500">
        Payments are processed securely by Stripe. We never store your card details.
      </p>
    </form>
  );
}
