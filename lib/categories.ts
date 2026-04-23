export type CategoryKey = "pens" | "promotional-products" | "print" | "signage";

export type Subcategory = {
  slug: string;
  name: string;
  blurb: string;
};

export type Category = {
  key: CategoryKey;
  slug: string;
  name: string;
  short: string;
  blurb: string;
  hero: string;
  subcategories: Subcategory[];
};

export const categories: Category[] = [
  {
    key: "pens",
    slug: "pens",
    name: "Custom Pens",
    short: "Pens",
    blurb:
      "Soft touch, metal, stylus, and executive pens — branded with your logo and shipped fast.",
    hero: "Your logo in every hand. Branded pens that feel great and get noticed.",
    subcategories: [
      { slug: "soft-touch", name: "Soft Touch Pens", blurb: "Rubberized grip, premium feel." },
      { slug: "metal", name: "Metal Pens", blurb: "Laser-engraved, executive look." },
      { slug: "stylus", name: "Stylus Pens", blurb: "Pen + touchscreen stylus combo." },
      { slug: "executive", name: "Executive Pens", blurb: "Gift-worthy weight and finish." },
      { slug: "budget", name: "Budget Pens", blurb: "High-volume giveaways." },
      { slug: "best-sellers", name: "Best Sellers", blurb: "Our most-ordered pens." },
    ],
  },
  {
    key: "promotional-products",
    slug: "promotional-products",
    name: "Promotional Products",
    short: "Promo",
    blurb:
      "Mugs, tote bags, apparel, drinkware, and trade show swag — branded for your next event.",
    hero: "Promo that gets used, not tossed. Quality swag with your logo.",
    subcategories: [
      { slug: "mugs", name: "Mugs", blurb: "Ceramic and travel mugs." },
      { slug: "tote-bags", name: "Tote Bags", blurb: "Cotton, canvas, and non-woven." },
      { slug: "apparel", name: "T-Shirts & Apparel", blurb: "Screen print and embroidery." },
      { slug: "drinkware", name: "Drinkware", blurb: "Bottles, tumblers, can coolers." },
      { slug: "keychains", name: "Keychains", blurb: "Metal, leather, and acrylic." },
      { slug: "notebooks", name: "Notebooks", blurb: "Softcover and hardcover journals." },
      { slug: "sunglasses", name: "Sunglasses", blurb: "Summer event favourite." },
      { slug: "trade-show", name: "Trade Show Kits", blurb: "Table covers, banners, swag." },
    ],
  },
  {
    key: "print",
    slug: "print",
    name: "Print",
    short: "Print",
    blurb:
      "Business cards, flyers, brochures, postcards, and NCR forms — professional print in days, not weeks.",
    hero: "Sharp, professional print. Delivered fast.",
    subcategories: [
      { slug: "business-cards", name: "Business Cards", blurb: "Matte, gloss, soft touch, foil." },
      { slug: "flyers", name: "Flyers", blurb: "Full colour, any quantity." },
      { slug: "brochures", name: "Brochures", blurb: "Bi-fold, tri-fold, booklets." },
      { slug: "posters", name: "Posters", blurb: "Sizes from 11x17 to 24x36." },
      { slug: "postcards", name: "Postcards", blurb: "Direct mail ready." },
      { slug: "ncr-forms", name: "NCR Forms", blurb: "2-part and 3-part carbonless." },
    ],
  },
  {
    key: "signage",
    slug: "signage",
    name: "Signage",
    short: "Signs",
    blurb:
      "Coroplast, aluminum, banners, window graphics, vehicle lettering, and custom signs.",
    hero: "Signage that works as hard as you do.",
    subcategories: [
      { slug: "coroplast", name: "Coroplast Signs", blurb: "Lawn & real estate signs." },
      { slug: "aluminum", name: "Aluminum Signs", blurb: "Durable, weather-resistant." },
      { slug: "banners", name: "Banners", blurb: "Vinyl, mesh, indoor & outdoor." },
      { slug: "window-graphics", name: "Window Graphics", blurb: "Frosted, perforated, decals." },
      { slug: "vehicle-lettering", name: "Vehicle Lettering", blurb: "Logos, decals, full wraps." },
      { slug: "storefront", name: "Storefront Signs", blurb: "Channel letters, lightboxes." },
      { slug: "custom", name: "Custom Signs", blurb: "Talk to us — we build it." },
    ],
  },
];

export const categoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
