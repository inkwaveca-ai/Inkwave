import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Print",
  description:
    "Business cards, flyers, brochures, postcards, and NCR forms — professional print in days, not weeks.",
};

export default function PrintPage() {
  const category = categoryBySlug("print")!;
  return <CategoryPage category={category} />;
}
