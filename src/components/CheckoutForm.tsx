"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatPkr, waDigits } from "@/lib/format";
import { buildOrderMessage, cartTotal } from "@/lib/orders";
import { getProductById } from "@/lib/products";

const empty = {
  name: "",
  phone: "",
  city: "",
  address: "",
  notes: "",
};

export function CheckoutForm() {
  const { items, clear, ready } = useCart();
  const [details, setDetails] = useState(empty);
  const [error, setError] = useState("");
  const total = cartTotal(items);
  const whatsappNumber = waDigits(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923315533207",
  );

  const preview = useMemo(
    () =>
      items
        .map((line) => {
          const product = getProductById(line.productId);
          if (!product) return null;
          return `${line.quantity}× ${product.name}`;
        })
        .filter(Boolean)
        .join(", "),
    [items],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!items.length) {
      setError("Your cart is empty.");
      return;
    }
    if (!whatsappNumber) {
      setError("WhatsApp number is not configured yet.");
      return;
    }
    if (!details.name.trim() || !details.phone.trim() || !details.city.trim() || !details.address.trim()) {
      setError("Please fill in name, phone, city, and address.");
      return;
    }

    const { url } = buildOrderMessage(details, items, whatsappNumber);
    window.open(url, "_blank", "noopener,noreferrer");
    clear();
    window.location.assign("/checkout/thanks");
  }

  if (!ready) {
    return (
      <div className="rounded-3xl border border-line bg-white px-6 py-16 text-center text-sm text-muted/70">
        Loading checkout…
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-line bg-white px-6 py-16 text-center">
        <p className="font-serif text-2xl text-ink">Nothing to checkout</p>
        <p className="mt-2 text-sm text-muted/75">Add products to your cart first.</p>
        <Link
          href="/shop"
          className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-white"
        >
          Browse the collection
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4 rounded-3xl border border-line bg-white p-6">
        <h2 className="font-serif text-2xl text-ink">Delivery details</h2>
        {(
          [
            ["name", "Full name", "text"],
            ["phone", "Phone number", "tel"],
            ["city", "City", "text"],
          ] as const
        ).map(([key, label, type]) => (
          <label key={key} className="block text-sm text-muted">
            {label}
            <input
              required
              type={type}
              value={details[key]}
              onChange={(event) =>
                setDetails((current) => ({ ...current, [key]: event.target.value }))
              }
              className="mt-1 w-full rounded-2xl border border-line bg-rose px-4 py-3 text-ink outline-none focus:border-accent"
            />
          </label>
        ))}
        <label className="block text-sm text-muted">
          Address
          <textarea
            required
            rows={3}
            value={details.address}
            onChange={(event) =>
              setDetails((current) => ({ ...current, address: event.target.value }))
            }
            className="mt-1 w-full rounded-2xl border border-line bg-rose px-4 py-3 text-ink outline-none focus:border-accent"
          />
        </label>
        <label className="block text-sm text-muted">
          Notes (optional)
          <textarea
            rows={2}
            value={details.notes}
            onChange={(event) =>
              setDetails((current) => ({ ...current, notes: event.target.value }))
            }
            className="mt-1 w-full rounded-2xl border border-line bg-rose px-4 py-3 text-ink outline-none focus:border-accent"
          />
        </label>
      </div>

      <aside className="h-fit rounded-3xl border border-line bg-white p-6">
        <h2 className="font-serif text-2xl text-ink">Order</h2>
        <p className="mt-3 text-sm leading-6 text-muted/80">{preview}</p>
        <div className="mt-4 flex justify-between text-sm">
          <span>Total</span>
          <span className="font-medium">{formatPkr(total)}</span>
        </div>
        <p className="mt-3 text-xs leading-5 text-muted/70">
          Placing the order opens WhatsApp with a pre-filled message to the
          shop owner. Cash on delivery.
        </p>
        {error ? <p className="mt-3 text-sm text-accent">{error}</p> : null}
        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-accent px-5 py-3 text-sm font-medium text-white hover:bg-[#d36c52]"
        >
          Place order on WhatsApp
        </button>
      </aside>
    </form>
  );
}
