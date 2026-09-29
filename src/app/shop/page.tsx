import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-xs uppercase tracking-[0.28em] text-sage">Maison Luxe</p>
      <h1 className="mt-2 font-serif text-4xl text-ink sm:text-5xl">Shop</h1>
      <p className="mt-3 max-w-xl text-sm leading-6 text-muted/75">
        Four essentials. Cash on delivery. Confirm every order on WhatsApp.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
