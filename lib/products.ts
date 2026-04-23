import type { CategoryKey } from "./categories";

export type PriceTier = {
  qty: number;
  unit: number;
};

export type Product = {
  slug: string;
  name: string;
  category: CategoryKey;
  subcategory: string;
  short: string;
  description: string;
  startingPrice: number;
  minOrder: number;
  turnaround: string;
  brandingMethod: string[];
  material?: string;
  colors: string[];
  sizes?: string[];
  priceTiers: PriceTier[];
  bestSeller?: boolean;
  quoteOnly?: boolean;
  image: string;
};

export const products: Product[] = [
  // Pens
  {
    slug: "soft-touch-pen",
    name: "Soft Touch Pen",
    category: "pens",
    subcategory: "soft-touch",
    short: "Premium rubberized grip with your logo.",
    description:
      "Our best-selling soft touch pen — a velvety rubberized barrel with a satisfying click and smooth black ink. Perfect for businesses, conferences, and everyday giveaways.",
    startingPrice: 0.89,
    minOrder: 100,
    turnaround: "5–7 business days",
    brandingMethod: ["1-colour imprint", "Full colour wrap", "Laser engraving"],
    material: "ABS barrel with silicone grip",
    colors: ["Black", "Navy", "White", "Red", "Royal Blue", "Forest Green"],
    priceTiers: [
      { qty: 100, unit: 1.29 },
      { qty: 250, unit: 1.09 },
      { qty: 500, unit: 0.99 },
      { qty: 1000, unit: 0.89 },
      { qty: 2500, unit: 0.79 },
    ],
    bestSeller: true,
    image: "/img/product-placeholder.svg",
  },
  {
    slug: "metal-twist-pen",
    name: "Metal Twist Pen",
    category: "pens",
    subcategory: "metal",
    short: "Executive feel, laser-engraved logo.",
    description:
      "A heavier metal barrel with a smooth twist mechanism — ideal for client gifts, executive swag, and anything where first impressions matter.",
    startingPrice: 2.49,
    minOrder: 100,
    turnaround: "7–10 business days",
    brandingMethod: ["Laser engraving", "1-colour imprint"],
    material: "Brushed aluminum",
    colors: ["Silver", "Matte Black", "Gunmetal", "Rose Gold"],
    priceTiers: [
      { qty: 100, unit: 3.49 },
      { qty: 250, unit: 2.99 },
      { qty: 500, unit: 2.79 },
      { qty: 1000, unit: 2.49 },
    ],
    bestSeller: true,
    image: "/img/product-placeholder.svg",
  },
  {
    slug: "stylus-pen",
    name: "Stylus Pen",
    category: "pens",
    subcategory: "stylus",
    short: "Pen + touchscreen stylus in one.",
    description:
      "Functional two-in-one — a smooth writing pen on one end, a soft capacitive stylus on the other. A favourite at tech events and conferences.",
    startingPrice: 1.19,
    minOrder: 100,
    turnaround: "5–7 business days",
    brandingMethod: ["1-colour imprint", "Laser engraving"],
    material: "Aluminum barrel",
    colors: ["Black", "Silver", "Blue", "Red", "Gold"],
    priceTiers: [
      { qty: 100, unit: 1.79 },
      { qty: 250, unit: 1.49 },
      { qty: 500, unit: 1.29 },
      { qty: 1000, unit: 1.19 },
    ],
    bestSeller: true,
    image: "/img/product-placeholder.svg",
  },
  {
    slug: "executive-gift-pen",
    name: "Executive Gift Pen",
    category: "pens",
    subcategory: "executive",
    short: "Weighted, gift-box ready.",
    description:
      "A true gift-grade pen — weighted metal barrel, smooth refillable cartridge, ships in a satin-lined gift box. Perfect for VIPs and thank-yous.",
    startingPrice: 7.99,
    minOrder: 25,
    turnaround: "7–10 business days",
    brandingMethod: ["Laser engraving"],
    material: "Brass with lacquer finish",
    colors: ["Matte Black", "Navy", "Silver"],
    priceTiers: [
      { qty: 25, unit: 11.99 },
      { qty: 50, unit: 9.99 },
      { qty: 100, unit: 8.99 },
      { qty: 250, unit: 7.99 },
    ],
    image: "/img/product-placeholder.svg",
  },
  {
    slug: "budget-click-pen",
    name: "Budget Click Pen",
    category: "pens",
    subcategory: "budget",
    short: "High-volume giveaway, low cost per piece.",
    description:
      "When you need thousands of pens on a tight budget — dependable click action, bold imprint area, every colour under the sun.",
    startingPrice: 0.39,
    minOrder: 250,
    turnaround: "5–7 business days",
    brandingMethod: ["1-colour imprint", "Full colour wrap"],
    material: "Plastic",
    colors: ["White", "Black", "Red", "Blue", "Yellow", "Green", "Orange", "Purple"],
    priceTiers: [
      { qty: 250, unit: 0.69 },
      { qty: 500, unit: 0.49 },
      { qty: 1000, unit: 0.39 },
      { qty: 2500, unit: 0.29 },
      { qty: 5000, unit: 0.25 },
    ],
    image: "/img/product-placeholder.svg",
  },

  // Promo
  {
    slug: "ceramic-mug-11oz",
    name: "Ceramic Mug — 11oz",
    category: "promotional-products",
    subcategory: "mugs",
    short: "Classic printed mug, full colour.",
    description:
      "The staff room favourite. Full-colour dye sublimation print, dishwasher and microwave safe.",
    startingPrice: 3.99,
    minOrder: 36,
    turnaround: "7–10 business days",
    brandingMethod: ["Full colour print", "Spot colour"],
    material: "Ceramic",
    colors: ["White", "Black"],
    priceTiers: [
      { qty: 36, unit: 6.99 },
      { qty: 72, unit: 5.49 },
      { qty: 144, unit: 4.49 },
      { qty: 288, unit: 3.99 },
    ],
    bestSeller: true,
    image: "/img/product-placeholder.svg",
  },
  {
    slug: "cotton-tote-bag",
    name: "Cotton Tote Bag",
    category: "promotional-products",
    subcategory: "tote-bags",
    short: "100% cotton, screen printed.",
    description:
      "Eco-friendly cotton tote — sturdy handles, generous 15x16\" print area. A trade-show and event staple.",
    startingPrice: 2.49,
    minOrder: 50,
    turnaround: "7–10 business days",
    brandingMethod: ["Screen print", "Heat transfer"],
    material: "6oz cotton canvas",
    colors: ["Natural", "Black", "Navy", "Red"],
    priceTiers: [
      { qty: 50, unit: 4.49 },
      { qty: 100, unit: 3.49 },
      { qty: 250, unit: 2.99 },
      { qty: 500, unit: 2.49 },
    ],
    bestSeller: true,
    image: "/img/product-placeholder.svg",
  },
  {
    slug: "classic-tshirt",
    name: "Classic T-Shirt",
    category: "promotional-products",
    subcategory: "apparel",
    short: "Unisex fit, screen printed logo.",
    description:
      "Soft cotton tee, unisex fit, full range of colours and sizes. Screen printed or embroidered with your design.",
    startingPrice: 8.99,
    minOrder: 24,
    turnaround: "7–10 business days",
    brandingMethod: ["Screen print", "Embroidery", "DTG"],
    material: "100% cotton, 5.5oz",
    colors: ["White", "Black", "Navy", "Heather Grey", "Red", "Royal", "Forest"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    priceTiers: [
      { qty: 24, unit: 14.99 },
      { qty: 50, unit: 11.99 },
      { qty: 100, unit: 9.99 },
      { qty: 250, unit: 8.99 },
    ],
    bestSeller: true,
    image: "/img/product-placeholder.svg",
  },
  {
    slug: "insulated-water-bottle",
    name: "Insulated Water Bottle",
    category: "promotional-products",
    subcategory: "drinkware",
    short: "Stainless steel, laser-engraved.",
    description:
      "Double-wall vacuum-insulated bottle — keeps cold 24h, hot 12h. Laser engraving reveals a crisp stainless logo.",
    startingPrice: 9.99,
    minOrder: 50,
    turnaround: "7–10 business days",
    brandingMethod: ["Laser engraving", "Full colour wrap"],
    material: "18/8 stainless steel",
    colors: ["Matte Black", "White", "Navy", "Rose Gold"],
    priceTiers: [
      { qty: 50, unit: 14.99 },
      { qty: 100, unit: 12.49 },
      { qty: 250, unit: 10.99 },
      { qty: 500, unit: 9.99 },
    ],
    image: "/img/product-placeholder.svg",
  },
  {
    slug: "softcover-notebook",
    name: "Softcover Notebook",
    category: "promotional-products",
    subcategory: "notebooks",
    short: "A5 journal with custom cover.",
    description:
      "A5 lined notebook, elastic closure, 80 ruled pages. Deboss or foil your logo on the cover.",
    startingPrice: 4.49,
    minOrder: 50,
    turnaround: "7–10 business days",
    brandingMethod: ["Deboss", "Foil stamp", "Full colour print"],
    material: "PU softcover, cream paper",
    colors: ["Black", "Navy", "Burgundy", "Kraft"],
    priceTiers: [
      { qty: 50, unit: 7.49 },
      { qty: 100, unit: 5.99 },
      { qty: 250, unit: 4.99 },
      { qty: 500, unit: 4.49 },
    ],
    image: "/img/product-placeholder.svg",
  },

  // Print
  {
    slug: "business-cards",
    name: "Business Cards",
    category: "print",
    subcategory: "business-cards",
    short: "Matte, gloss, soft touch, or foil.",
    description:
      "Full colour business cards on 16pt or 32pt stock. Finishes include matte, gloss, soft touch, spot UV, and foil.",
    startingPrice: 19,
    minOrder: 100,
    turnaround: "3–5 business days",
    brandingMethod: ["Full colour, both sides"],
    material: "16pt or 32pt cover stock",
    colors: ["Full colour"],
    priceTiers: [
      { qty: 100, unit: 0.29 },
      { qty: 250, unit: 0.19 },
      { qty: 500, unit: 0.12 },
      { qty: 1000, unit: 0.08 },
    ],
    bestSeller: true,
    image: "/img/product-placeholder.svg",
  },
  {
    slug: "flyers",
    name: "Flyers",
    category: "print",
    subcategory: "flyers",
    short: "8.5x11 full colour flyers.",
    description:
      "Full colour flyers on 100lb gloss or matte text stock. Single or double-sided. Ideal for promotions, events, and direct distribution.",
    startingPrice: 49,
    minOrder: 100,
    turnaround: "3–5 business days",
    brandingMethod: ["Full colour"],
    material: "100lb gloss or matte text",
    colors: ["Full colour"],
    sizes: ["5.5x8.5", "8.5x11", "8.5x14", "11x17"],
    priceTiers: [
      { qty: 100, unit: 0.49 },
      { qty: 250, unit: 0.29 },
      { qty: 500, unit: 0.19 },
      { qty: 1000, unit: 0.12 },
    ],
    image: "/img/product-placeholder.svg",
  },
  {
    slug: "brochures",
    name: "Brochures",
    category: "print",
    subcategory: "brochures",
    short: "Bi-fold and tri-fold, full colour.",
    description:
      "Professional bi-fold or tri-fold brochures, printed on 100lb gloss text. Perfect for menus, service overviews, and direct mail.",
    startingPrice: 89,
    minOrder: 100,
    turnaround: "4–6 business days",
    brandingMethod: ["Full colour"],
    material: "100lb gloss text",
    colors: ["Full colour"],
    sizes: ["8.5x11 tri-fold", "8.5x11 bi-fold", "8.5x14 tri-fold"],
    priceTiers: [
      { qty: 100, unit: 0.89 },
      { qty: 250, unit: 0.59 },
      { qty: 500, unit: 0.39 },
      { qty: 1000, unit: 0.29 },
    ],
    image: "/img/product-placeholder.svg",
  },

  // Signage
  {
    slug: "coroplast-sign",
    name: "Coroplast Sign",
    category: "signage",
    subcategory: "coroplast",
    short: "4mm lawn & real estate signs.",
    description:
      "Weatherproof 4mm corrugated plastic signs. Ideal for lawn signs, real estate, political, event, and yard signage. Includes optional H-stakes.",
    startingPrice: 14.99,
    minOrder: 1,
    turnaround: "3–5 business days",
    brandingMethod: ["Full colour, single or double sided"],
    material: "4mm corrugated plastic",
    colors: ["Full colour"],
    sizes: ["12x18", "18x24", "24x36", "Custom"],
    priceTiers: [
      { qty: 1, unit: 24.99 },
      { qty: 10, unit: 19.99 },
      { qty: 25, unit: 16.99 },
      { qty: 50, unit: 14.99 },
      { qty: 100, unit: 12.99 },
    ],
    bestSeller: true,
    image: "/img/product-placeholder.svg",
  },
  {
    slug: "vinyl-banner",
    name: "Vinyl Banner",
    category: "signage",
    subcategory: "banners",
    short: "13oz scrim vinyl, indoor/outdoor.",
    description:
      "Heavy-duty 13oz scrim vinyl banners with hemmed edges and grommets. Full-colour, weatherproof, ready to hang.",
    startingPrice: 29,
    minOrder: 1,
    turnaround: "3–5 business days",
    brandingMethod: ["Full colour"],
    material: "13oz scrim vinyl",
    colors: ["Full colour"],
    sizes: ["2x4 ft", "3x6 ft", "4x8 ft", "Custom"],
    priceTiers: [
      { qty: 1, unit: 49 },
      { qty: 3, unit: 39 },
      { qty: 5, unit: 34 },
      { qty: 10, unit: 29 },
    ],
    image: "/img/product-placeholder.svg",
  },
  {
    slug: "window-graphics",
    name: "Window Graphics",
    category: "signage",
    subcategory: "window-graphics",
    short: "Frosted, perforated, or full-colour decals.",
    description:
      "Storefront window graphics — frosted privacy vinyl, perforated one-way, or full-colour cut decals. Installed or shipped ready to apply.",
    startingPrice: 0,
    minOrder: 1,
    turnaround: "Quoted per project",
    brandingMethod: ["Full colour", "Cut vinyl", "Frosted vinyl"],
    colors: ["Full colour"],
    priceTiers: [],
    quoteOnly: true,
    image: "/img/product-placeholder.svg",
  },
  {
    slug: "vehicle-lettering",
    name: "Vehicle Lettering & Decals",
    category: "signage",
    subcategory: "vehicle-lettering",
    short: "Cut vinyl logos, decals, and wraps.",
    description:
      "Turn your vehicle into rolling advertising. Cut vinyl lettering, printed decals, or full wraps — we quote per vehicle.",
    startingPrice: 0,
    minOrder: 1,
    turnaround: "Quoted per project",
    brandingMethod: ["Cut vinyl", "Printed vinyl", "Full wrap"],
    colors: ["Full colour"],
    priceTiers: [],
    quoteOnly: true,
    image: "/img/product-placeholder.svg",
  },
];

export const productsByCategory = (category: CategoryKey) =>
  products.filter((p) => p.category === category);

export const productBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const bestSellers = () => products.filter((p) => p.bestSeller);

export const relatedProducts = (slug: string, limit = 4) => {
  const current = productBySlug(slug);
  if (!current) return [];
  return products
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit);
};
