import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs uppercase tracking-[0.28em] text-sage">Our ritual</p>
      <h1 className="mt-3 font-serif text-5xl text-ink">Maison Luxe</h1>
      <p className="mt-6 text-base leading-8 text-muted/80">
        Maison Luxe is a small skincare house built around a simple idea: a
        complete glow ritual should feel calm, look considered, and work for
        every skin type. Cleanse with Refresh & Purify Face Wash, mist with
        Refresh & Revive Face Toner, and finish with Whitening Cream — or take
        the Bridal Luxe Glow Kit and do all three in one gift.
      </p>
      <p className="mt-4 text-base leading-8 text-muted/80">
        Orders are confirmed on WhatsApp and paid cash on delivery across
        Pakistan.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-white"
      >
        Shop the collection
      </Link>
    </div>
  );
}
