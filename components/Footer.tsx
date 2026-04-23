import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/pens", label: "Custom Pens" },
      { href: "/promotional-products", label: "Promotional Products" },
      { href: "/print", label: "Print" },
      { href: "/signage", label: "Signage" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/quote", label: "Custom Quote" },
      { href: "/upload", label: "Upload Artwork" },
      { href: "/pay", label: "Pay Invoice" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About InkWave" },
      { href: "/contact", label: "Contact" },
      { href: "/gallery", label: "Recent Work" },
      { href: "/reviews", label: "Reviews" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="container-8xl py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-slate-600">
              {site.shortTagline} Proudly shipping across Canada.
            </p>
            <div className="mt-6 space-y-1 text-sm text-slate-600">
              <div><a href={`mailto:${site.email}`} className="hover:text-ink-700">{site.email}</a></div>
              <div><a href={`tel:${site.phone}`} className="hover:text-ink-700">{site.phone}</a></div>
              <div>{site.hours}</div>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-slate-900">{col.title}</h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-slate-600 hover:text-ink-700">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Online only · Shipping across Canada</span>
        </div>
      </div>
    </footer>
  );
}
