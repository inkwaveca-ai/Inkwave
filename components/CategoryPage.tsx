import Link from "next/link";
import { PageHeader } from "./PageHeader";
import { ProductCard } from "./ProductCard";
import { CTASection } from "./CTASection";
import { TrustStrip } from "./TrustStrip";
import type { Category } from "@/lib/categories";
import { productsByCategory } from "@/lib/products";

export function CategoryPage({ category }: { category: Category }) {
  const items = productsByCategory(category.key);

  return (
    <>
      <PageHeader
        eyebrow={category.short}
        title={category.name}
        subtitle={category.hero}
        crumbs={[{ href: "/", label: "Home" }, { label: category.name }]}
      />

      <TrustStrip />

      <section className="py-14">
        <div className="container-8xl grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Subcategories
            </h3>
            <ul className="mt-4 space-y-1">
              {category.subcategories.map((sub) => (
                <li key={sub.slug}>
                  <a
                    href={`#${sub.slug}`}
                    className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-ink-50 hover:text-ink-700"
                  >
                    {sub.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h4 className="text-sm font-semibold text-slate-900">
                Don’t see what you need?
              </h4>
              <p className="mt-1 text-sm text-slate-600">
                We handle custom jobs every day. Tell us what you’re thinking.
              </p>
              <Link href="/quote" className="btn-primary mt-4 w-full">
                Request a Quote
              </Link>
            </div>
          </aside>

          <div>
            <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="text-sm text-slate-600">
                Showing <span className="font-semibold text-slate-900">{items.length}</span> {category.short.toLowerCase()} products
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Price", "Material", "Colour", "Branding", "Min Qty"].map((f) => (
                  <button
                    key={f}
                    type="button"
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700 hover:border-ink-300 hover:text-ink-700"
                  >
                    {f} ▾
                  </button>
                ))}
              </div>
            </div>

            {category.subcategories.map((sub) => {
              const subItems = items.filter((p) => p.subcategory === sub.slug);
              if (subItems.length === 0) return null;
              return (
                <div key={sub.slug} id={sub.slug} className="mt-12 scroll-mt-24">
                  <div className="flex items-end justify-between">
                    <div>
                      <h2 className="h3">{sub.name}</h2>
                      <p className="mt-1 text-sm text-slate-600">{sub.blurb}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {subItems.map((p) => (
                      <ProductCard key={p.slug} product={p} />
                    ))}
                  </div>
                </div>
              );
            })}

            {items.length === 0 && (
              <div className="mt-12 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
                <h3 className="text-lg font-semibold text-slate-900">
                  Custom {category.short.toLowerCase()} is our specialty.
                </h3>
                <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
                  Every {category.short.toLowerCase()} job is quoted individually. Send us the details and we’ll come back with pricing and a proof.
                </p>
                <Link href="/quote" className="btn-primary mt-6">
                  Request a Quote
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
