import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ProductDetail } from "@/components/ProductDetail";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { categoryBySlug, categories } from "@/lib/categories";
import { productBySlug, products, relatedProducts } from "@/lib/products";

type Params = { category: string; product: string };

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, product: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { product: slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.short,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category: categorySlug, product: productSlug } = await params;
  const category = categoryBySlug(categorySlug);
  const product = productBySlug(productSlug);

  const isCategoryRoute = categories.some((c) => c.slug === categorySlug);
  if (isCategoryRoute && !product) notFound();
  if (!category || !product || product.category !== category.key) {
    // Not a real product route — let Next fall through to 404
    if (isCategoryRoute) notFound();
    return null;
  }

  const related = relatedProducts(product.slug);

  return (
    <>
      <PageHeader
        eyebrow={category.name}
        title={product.name}
        subtitle={product.short}
        crumbs={[
          { href: "/", label: "Home" },
          { href: `/${category.slug}`, label: category.name },
          { label: product.name },
        ]}
      />
      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="bg-slate-50 py-20">
          <div className="container-8xl">
            <div className="flex items-end justify-between">
              <div>
                <p className="eyebrow">You might also like</p>
                <h2 className="h2 mt-2">Related products</h2>
              </div>
              <Link href={`/${category.slug}`} className="text-sm font-semibold text-ink-700 hover:underline">
                Shop all {category.short.toLowerCase()} →
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
