import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order sent",
};

export default function ThanksPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
      <p className="text-xs uppercase tracking-[0.28em] text-sage">Maison Luxe</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">WhatsApp is open</h1>
      <p className="mt-4 text-sm leading-7 text-muted/80">
        Send the pre-filled message so the shop can confirm your order and
        delivery. If WhatsApp did not open, return to checkout and try again.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-white"
      >
        Continue shopping
      </Link>
    </div>
  );
}
