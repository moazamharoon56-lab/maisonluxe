import type { Metadata } from "next";
import { CheckoutForm } from "@/components/CheckoutForm";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-4xl text-ink">Checkout</h1>
      <p className="mt-2 max-w-xl text-sm leading-6 text-muted/75">
        We notify the shop on WhatsApp — no Gmail setup required. Your order
        is sent to +92 331 5533207.
      </p>
      <div className="mt-8">
        <CheckoutForm />
      </div>
    </div>
  );
}
