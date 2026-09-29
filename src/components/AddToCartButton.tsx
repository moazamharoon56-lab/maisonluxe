"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export function AddToCartButton({
  productId,
  label = "Add to cart",
}: {
  productId: string;
  label?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        addItem(productId);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1400);
      }}
      className="w-full rounded-full bg-[#E07A5F] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#d36c52]"
    >
      {added ? "Added" : label}
    </button>
  );
}
