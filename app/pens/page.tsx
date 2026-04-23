import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Custom Pens",
  description:
    "Soft touch, metal, stylus, executive, and budget pens — branded with your logo and shipped fast across Canada.",
};

export default function PensPage() {
  const category = categoryBySlug("pens")!;
  return <CategoryPage category={category} />;
}
