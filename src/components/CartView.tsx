"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatPkr } from "@/lib/format";
import { cartTotal } from "@/lib/orders";
import { getProductById } from "@/lib/products";

export function CartView() {
  const { items, setQuantity, removeItem, ready } = useCart();
  const total = cartTotal(items);

  if (!ready) {
    return (
      <div className="rounded-3xl border border-[#eadfd6] bg-white px-6 py-16 text-center text-sm text-[#3D405B]/70">
        Loading cart…
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-[#eadfd6] bg-white px-6 py-16 text-center">
        <p className="font-serif text-2xl text-[#2B2A33]">Your cart is empty</p>
        <p className="mt-2 text-sm text-[#3D405B]/75">
          Start with the Bridal Luxe Glow Kit, or shop each step on its own.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-flex rounded-full bg-[#E07A5F] px-6 py-3 text-sm font-medium text-white"
        >
          Browse the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
      <ul className="space-y-4">
        {items.map((item) => {
          const product = getProductById(item.productId);
          if (!product) return null;
          return (
            <li
              key={item.productId}
              className="flex gap-4 rounded-3xl border border-[#eadfd6] bg-white p-4"
            >
              <div className="relative h-28 w-24 overflow-hidden rounded-2xl bg-[#FCF6F5]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Link
                      href={`/product/${product.slug}`}
                      className="font-serif text-lg text-[#2B2A33] hover:text-[#E07A5F]"
                    >
                      {product.name}
                    </Link>
                    <p className="text-sm text-[#3D405B]/70">
                      {formatPkr(product.price)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.productId)}
                    className="text-xs uppercase tracking-wide text-[#3D405B]/60 hover:text-[#E07A5F]"
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-auto flex items-center gap-3 pt-3">
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border border-[#eadfd6]"
                    onClick={() => setQuantity(item.productId, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm">{item.quantity}</span>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border border-[#eadfd6]"
                    onClick={() => setQuantity(item.productId, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <aside className="h-fit rounded-3xl border border-[#eadfd6] bg-white p-6">
        <h2 className="font-serif text-2xl text-[#2B2A33]">Summary</h2>
        <div className="mt-4 flex justify-between text-sm text-[#3D405B]">
          <span>Subtotal</span>
          <span>{formatPkr(total)}</span>
        </div>
        <p className="mt-2 text-xs leading-5 text-[#3D405B]/70">
          Delivery is confirmed on WhatsApp. Payment is cash on delivery.
        </p>
        <Link
          href="/checkout"
          className="mt-6 flex w-full items-center justify-center rounded-full bg-[#E07A5F] px-5 py-3 text-sm font-medium text-white"
        >
          Checkout
        </Link>
      </aside>
    </div>
  );
}
