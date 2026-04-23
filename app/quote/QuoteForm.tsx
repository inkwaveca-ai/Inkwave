"use client";

import { useState } from "react";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="card p-8">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-600 text-white">
          ✓
        </div>
        <h2 className="mt-4 text-2xl font-bold text-slate-900">Thanks — we got it.</h2>
        <p className="mt-2 text-slate-600">
          We’ll review your project and reply within one business day with pricing and a proof plan.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-secondary mt-6"
        >
          Submit another
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
          <label className="label" htmlFor="name">Your name</label>
          <input id="name" required className="input" placeholder="Jane Smith" />
        </div>
        <div>
          <label className="label" htmlFor="business">Business / organization</label>
          <input id="business" className="input" placeholder="Optional" />
        </div>
        <div>
          <label className="label" htmlFor="email">Email</label>
          <input id="email" type="email" required className="input" placeholder="you@company.com" />
        </div>
        <div>
          <label className="label" htmlFor="phone">Phone</label>
          <input id="phone" type="tel" className="input" placeholder="Optional" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="product">Product / project type</label>
          <select id="product" className="input" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Pens</option>
            <option>Promotional products</option>
            <option>Business cards</option>
            <option>Flyers / brochures</option>
            <option>Banners</option>
            <option>Coroplast / aluminum signs</option>
            <option>Window graphics</option>
            <option>Vehicle lettering / wrap</option>
            <option>Storefront sign</option>
            <option>Other / mixed job</option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor="qty">Estimated quantity</label>
          <input id="qty" className="input" placeholder="e.g. 500" />
        </div>
        <div>
          <label className="label" htmlFor="size">Size / dimensions</label>
          <input id="size" className="input" placeholder="If applicable" />
        </div>
        <div>
          <label className="label" htmlFor="deadline">Deadline</label>
          <input id="deadline" type="date" className="input" />
        </div>
      </div>

      <div>
        <label className="label" htmlFor="details">Project details</label>
        <textarea
          id="details"
          rows={5}
          className="input"
          placeholder="Tell us what you’re promoting, colours, materials, installation needs — whatever you know."
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-ink-600 focus:ring-ink-500" />
          I need design help (I don’t have artwork ready)
        </label>
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-ink-600 focus:ring-ink-500" />
          I need installation (signage projects)
        </label>
      </div>

      <div>
        <label className="label" htmlFor="files">Upload files (optional)</label>
        <input
          id="files"
          type="file"
          multiple
          className="block w-full text-sm text-slate-600 file:mr-3 file:rounded-md file:border-0 file:bg-ink-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-ink-700 hover:file:bg-ink-100"
        />
        <p className="mt-1 text-xs text-slate-500">PDF, AI, EPS, PNG, JPG — up to 25 MB each.</p>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">Submit quote request</button>
    </form>
  );
}
