"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import { PricingTable } from "./PricingTable";

export function ProductDetail({ product }: { product: Product }) {
  const [qty, setQty] = useState(product.priceTiers[0]?.qty ?? product.minOrder);
  const [color, setColor] = useState(product.colors[0] ?? "");

  const estimatedUnit = useMemo(() => {
    if (!product.priceTiers.length) return null;
    const applicable = product.priceTiers
      .filter((t) => t.qty <= qty)
      .sort((a, b) => b.qty - a.qty)[0];
    return applicable ?? product.priceTiers[0];
  }, [qty, product.priceTiers]);

  const estimatedTotal = estimatedUnit ? estimatedUnit.unit * qty : null;

  return (
    <section className="py-14">
      <div className="container-8xl grid gap-10 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-ink-50">
            <div className="aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-lg border border-slate-200 bg-ink-50"
              >
                <img src={product.image} alt="" className="h-full w-full object-cover opacity-80" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">{product.subcategory.replace(/-/g, " ")}</p>
          <h1 className="h2 mt-2">{product.name}</h1>
          <p className="mt-3 text-lg text-slate-600">{product.short}</p>

          <div className="mt-6 flex flex-wrap items-end gap-6">
            {product.quoteOnly ? (
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500">Custom pricing</div>
                <div className="text-2xl font-bold text-ink-700">Request a quote</div>
              </div>
            ) : (
              <>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">From</div>
                  <div className="text-3xl font-bold text-slate-900">
                    ${product.startingPrice.toFixed(2)}
                    <span className="ml-1 text-sm font-medium text-slate-500">/piece</span>
                  </div>
                </div>
                {estimatedTotal !== null && (
                  <div className="rounded-lg bg-ink-50 px-4 py-2 text-sm text-ink-900">
                    <span className="font-semibold">Estimated total:</span>{" "}
                    ${estimatedTotal.toFixed(2)}{" "}
                    <span className="text-ink-700/70">
                      ({qty.toLocaleString()} × ${estimatedUnit!.unit.toFixed(2)})
                    </span>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="mt-8 space-y-6 rounded-2xl border border-slate-200 p-6">
            {product.colors.length > 0 && (
              <div>
                <label className="label">Colour</label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColor(c)}
                      className={`rounded-full border px-3 py-1.5 text-sm transition ${
                        color === c
                          ? "border-ink-600 bg-ink-600 text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-ink-300"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="label">Size</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {!product.quoteOnly && (
              <div>
                <label className="label" htmlFor="qty">
                  Quantity (min {product.minOrder})
                </label>
                <input
                  id="qty"
                  type="number"
                  min={product.minOrder}
                  step={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(product.minOrder, Number(e.target.value) || product.minOrder))}
                  className="input max-w-[180px]"
                />
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Link href="/upload" className="btn-secondary">
                Upload Artwork
              </Link>
              <Link
                href={`/quote?product=${encodeURIComponent(product.name)}&qty=${qty}`}
                className="btn-primary"
              >
                {product.quoteOnly ? "Request Quote" : "Get Free Proof"}
              </Link>
            </div>

            <p className="text-xs text-slate-500">
              We’ll email a free digital proof before anything goes to print.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {product.material && (
              <>
                <dt className="text-slate-500">Material</dt>
                <dd className="text-slate-900">{product.material}</dd>
              </>
            )}
            <dt className="text-slate-500">Branding method</dt>
            <dd className="text-slate-900">{product.brandingMethod.join(", ")}</dd>
            <dt className="text-slate-500">Minimum order</dt>
            <dd className="text-slate-900">{product.minOrder}</dd>
            <dt className="text-slate-500">Turnaround</dt>
            <dd className="text-slate-900">{product.turnaround}</dd>
            <dt className="text-slate-500">Shipping</dt>
            <dd className="text-slate-900">Tracked, Canada-wide</dd>
          </dl>
        </div>
      </div>

      <div className="container-8xl mt-14 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="h3">Description</h2>
          <p className="mt-3 text-slate-700">{product.description}</p>

          {product.priceTiers.length > 0 && (
            <div className="mt-10">
              <h2 className="h3">Bulk pricing</h2>
              <p className="mt-2 text-sm text-slate-600">
                Volume discounts apply automatically. Larger orders = lower per-piece cost.
              </p>
              <div className="mt-4">
                <PricingTable tiers={product.priceTiers} />
              </div>
            </div>
          )}

          <div className="mt-10">
            <h2 className="h3">Frequently asked</h2>
            <div className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200">
              {[
                {
                  q: "Can I see a proof before you print?",
                  a: "Yes — every order includes a free digital proof. We won’t print anything until you approve it.",
                },
                {
                  q: "What if I don’t have artwork ready?",
                  a: "Our team can help prep a simple logo layout at no extra cost. For more complex design work, we quote separately.",
                },
                {
                  q: "What file types do you accept?",
                  a: "Vector files (AI, EPS, PDF, SVG) are best. We also accept high-res PNG and JPG — we’ll flag any issues during the proof stage.",
                },
                {
                  q: "How long does production take?",
                  a: `Standard turnaround for this product is ${product.turnaround}, starting after you approve your proof. Rush options available — contact us.`,
                },
                {
                  q: "Do you ship across Canada?",
                  a: "Yes — tracked shipping to every province. Shipping cost is calculated at checkout based on weight and destination.",
                },
              ].map((f) => (
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
        </div>

        <aside className="space-y-4">
          {[
            { t: "Free digital proof", d: "Approve before we print — always." },
            { t: "Professional imprint", d: "Crisp, durable branding that lasts." },
            { t: "Canada-wide shipping", d: "Tracked delivery to every province." },
            { t: "Real human support", d: "Talk to our team by phone or email." },
          ].map((c) => (
            <div key={c.t} className="card p-5">
              <h4 className="text-sm font-semibold text-slate-900">{c.t}</h4>
              <p className="mt-1 text-sm text-slate-600">{c.d}</p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
