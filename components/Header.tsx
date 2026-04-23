"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { href: "/pens", label: "Pens" },
  { href: "/promotional-products", label: "Promotional Products" },
  { href: "/print", label: "Print" },
  { href: "/signage", label: "Signage" },
  { href: "/quote", label: "Custom Quote" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="bg-ink-950 text-xs text-ink-100">
        <div className="container-8xl flex h-9 items-center justify-between">
          <span>Free digital proof on every order · Fast shipping Canada-wide</span>
          <div className="hidden gap-6 sm:flex">
            <Link href="/upload" className="hover:text-white">Upload Artwork</Link>
            <Link href="/pay" className="hover:text-white">Pay Invoice</Link>
            <Link href="/faq" className="hover:text-white">FAQ</Link>
          </div>
        </div>
      </div>
      <div className="container-8xl flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-ink-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/quote" className="btn-secondary">Get a Quote</Link>
          <Link href="/pens" className="btn-primary">Shop Pens</Link>
        </div>
        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container-8xl py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-slate-800 hover:bg-ink-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link href="/quote" onClick={() => setOpen(false)} className="btn-secondary">Get a Quote</Link>
              <Link href="/pens" onClick={() => setOpen(false)} className="btn-primary">Shop Pens</Link>
            </div>
            <div className="mt-3 flex gap-4 text-sm text-slate-600">
              <Link href="/upload" onClick={() => setOpen(false)}>Upload Artwork</Link>
              <Link href="/pay" onClick={() => setOpen(false)}>Pay Invoice</Link>
              <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
