import type { Metadata } from "next";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-4xl text-ink">Cart</h1>
      <p className="mt-2 text-sm text-muted/75">
        Review your ritual, then checkout on WhatsApp.
      </p>
      <div className="mt-8">
        <CartView />
      </div>
    </div>
  );
}
