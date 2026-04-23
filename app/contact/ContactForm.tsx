"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="card p-8">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-600 text-white">✓</div>
        <h2 className="mt-4 text-2xl font-bold text-slate-900">Message sent.</h2>
        <p className="mt-2 text-slate-600">We’ll reply within one business day.</p>
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
          <input id="name" required className="input" />
        </div>
        <div>
          <label className="label" htmlFor="email">Email</label>
          <input id="email" type="email" required className="input" />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="subject">Subject</label>
        <select id="subject" className="input" defaultValue="general">
          <option value="general">General question</option>
          <option value="order">Order status</option>
          <option value="quote">Quote enquiry</option>
          <option value="artwork">Artwork / proof</option>
          <option value="billing">Billing / invoice</option>
        </select>
      </div>
      <div>
        <label className="label" htmlFor="message">Message</label>
        <textarea id="message" rows={5} required className="input" />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">Send message</button>
    </form>
  );
}
