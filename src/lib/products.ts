export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  size?: string;
  image: string;
  badges: string[];
  highlights: string[];
  description: string;
  bundleIds?: string[];
};

export const products: Product[] = [
  {
    id: "face-wash",
    slug: "refresh-purify-face-wash",
    name: "Refresh & Purify Face Wash",
    tagline: "Deep cleansing, without stripping the skin.",
    price: 1200,
    size: "120 ml",
    image: "/products/face-wash.jpg",
    badges: ["Daily ritual"],
    highlights: ["Deep Cleansing", "Hydrating", "For All Skin Types"],
    description:
      "A gentle, creamy cleanser that lifts away impurities while keeping the skin barrier comfortable. Use morning and night as the first step of your Maison Luxe ritual.",
  },
  {
    id: "face-toner",
    slug: "refresh-revive-face-toner",
    name: "Refresh & Revive Face Toner",
    tagline: "Hydration and pore refining in one mist.",
    price: 1200,
    image: "/products/face-toner.jpg",
    badges: ["Mist"],
    highlights: ["Hydrating", "Pore Refining", "For All Skin Types"],
    description:
      "A lightweight toner mist that rebalances after cleansing. It hydrates, refines the look of pores, and preps skin for cream. Spritz, then press in with clean palms.",
  },
  {
    id: "whitening-cream",
    slug: "whitening-cream",
    name: "Whitening Cream",
    tagline: "Even-looking radiance for every skin type.",
    price: 1250,
    image: "/products/whitening-cream.jpg",
    badges: ["Hero cream"],
    highlights: ["Brightening", "Nourishing", "For All Skin Types"],
    description:
      "A rich yet breathable cream formulated to support a more even, luminous complexion. Apply after toner, morning and evening, and follow with SPF during the day.",
  },
  {
    id: "bridal-kit",
    slug: "bridal-luxe-glow-kit",
    name: "Bridal Luxe Glow Kit",
    tagline: "The complete ritual — wash, tone, and cream.",
    price: 2800,
    originalPrice: 3650,
    image: "/products/bridal-kit.jpg",
    badges: ["Best value", "Save Rs 850"],
    highlights: ["3-step ritual", "Bridal glow", "For All Skin Types"],
    description:
      "Face Wash, Face Toner, and Whitening Cream together as a curated kit. The easiest way to gift — or to start the full Maison Luxe routine at a better price than buying each product separately.",
    bundleIds: ["face-wash", "face-toner", "whitening-cream"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
