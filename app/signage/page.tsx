import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Signage",
  description:
    "Coroplast, aluminum, banners, window graphics, and vehicle lettering — custom signage shipped nationwide.",
};

export default function SignagePage() {
  const category = categoryBySlug("signage")!;
  return <CategoryPage category={category} />;
}
