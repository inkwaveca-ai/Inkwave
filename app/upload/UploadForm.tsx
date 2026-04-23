"use client";

import { useState } from "react";

export function UploadForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="card p-8">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-600 text-white">✓</div>
        <h2 className="mt-4 text-2xl font-bold text-slate-900">Files received.</h2>
        <p className="mt-2 text-slate-600">
          We’ll match your files to your order and email a digital proof before we print anything.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="btn-secondary mt-6">
          Upload more
        </button>
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
          <label className="label" htmlFor="name">Name</label>
          <input id="name" required className="input" placeholder="Jane Smith" />
        </div>
        <div>
          <label className="label" htmlFor="email">Email</label>
          <input id="email" type="email" required className="input" placeholder="you@company.com" />
        </div>
        <div>
          <label className="label" htmlFor="order">Order or quote #</label>
          <input id="order" className="input" placeholder="Optional" />
        </div>
        <div>
          <label className="label" htmlFor="product">Product</label>
          <input id="product" className="input" placeholder="e.g. Soft touch pens" />
        </div>
      </div>

      <div>
        <label className="label" htmlFor="notes">Notes for our production team</label>
        <textarea id="notes" rows={4} className="input" placeholder="Pantone colours, placement, sizing — anything we should know." />
      </div>

      <div>
        <label className="label" htmlFor="files">Upload files</label>
        <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <input id="files" type="file" multiple required className="mx-auto block" />
          <p className="mt-3 text-xs text-slate-500">PDF, AI, EPS, SVG, PNG, JPG — up to 50 MB each.</p>
        </div>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">Submit files</button>
    </form>
  );
}
