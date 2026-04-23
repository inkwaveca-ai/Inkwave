import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Promotional Products",
  description:
    "Mugs, tote bags, apparel, drinkware, and trade-show swag — branded for your next event.",
};

export default function PromoPage() {
  const category = categoryBySlug("promotional-products")!;
  return <CategoryPage category={category} />;
}
