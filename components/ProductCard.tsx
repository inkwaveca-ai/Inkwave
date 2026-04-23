import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/${product.category}/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
    >
      <div className="relative aspect-square bg-ink-50">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {product.bestSeller && (
          <span className="absolute left-3 top-3 rounded-full bg-accent-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            Best Seller
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold text-slate-900 group-hover:text-ink-700">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-slate-600">{product.short}</p>
        <div className="mt-3 flex items-end justify-between">
          <div>
            {product.quoteOnly ? (
              <span className="text-sm font-semibold text-ink-700">Request quote</span>
            ) : (
              <>
                <div className="text-xs uppercase tracking-wide text-slate-500">From</div>
                <div className="text-lg font-bold text-slate-900">
                  ${product.startingPrice.toFixed(2)}
                  <span className="ml-1 text-xs font-medium text-slate-500">/ea</span>
                </div>
              </>
            )}
          </div>
          <div className="text-right text-xs text-slate-500">
            <div>Min {product.minOrder}</div>
            <div>{product.turnaround.split(" ")[0]}{product.turnaround.includes("–") ? " days" : ""}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
