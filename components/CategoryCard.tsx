import Link from "next/link";
import type { Category } from "@/lib/categories";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/${category.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] bg-gradient-to-br from-ink-100 to-ink-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold text-ink-900/20">{category.short}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-ink-700">
          {category.name}
        </h3>
        <p className="mt-1 text-sm text-slate-600">{category.blurb}</p>
        <span className="mt-4 text-sm font-semibold text-ink-600 group-hover:underline">
          Shop {category.short.toLowerCase()} →
        </span>
      </div>
    </Link>
  );
}
