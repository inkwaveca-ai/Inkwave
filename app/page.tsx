import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { WhyInkwave } from "@/components/WhyInkwave";
import { SocialProof } from "@/components/SocialProof";
import { CTASection } from "@/components/CTASection";
import { categories } from "@/lib/categories";
import { bestSellers } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="py-20">
        <div className="container-8xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Shop by category</p>
              <h2 className="h2 mt-2">Everything you need to promote your brand.</h2>
            </div>
            <Link href="/quote" className="text-sm font-semibold text-ink-700 hover:underline">
              Not sure where to start? Get a quote →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-8xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Best sellers</p>
              <h2 className="h2 mt-2">Customer favourites, ready to brand.</h2>
            </div>
            <Link href="/pens" className="text-sm font-semibold text-ink-700 hover:underline">
              Shop all pens →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers().slice(0, 8).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <WhyInkwave />
      <SocialProof />
      <CTASection />
    </>
  );
}
