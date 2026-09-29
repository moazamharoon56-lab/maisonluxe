import { formatPkr } from "@/lib/format";
import { getProductById } from "@/lib/products";

export type CartLine = {
  productId: string;
  quantity: number;
};

export type CheckoutDetails = {
  name: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
};

export function cartTotal(items: CartLine[]) {
  return items.reduce((sum, line) => {
    const product = getProductById(line.productId);
    if (!product) return sum;
    return sum + product.price * line.quantity;
  }, 0);
}

export function buildOrderMessage(
  details: CheckoutDetails,
  items: CartLine[],
  whatsappNumber: string,
) {
  const lines = items.map((line) => {
    const product = getProductById(line.productId);
    if (!product) return "";
    return `• ${line.quantity}× ${product.name} (${formatPkr(product.price * line.quantity)})`;
  });

  const body = [
    "Hello MAISON LUXE, I would like to place an order.",
    "",
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `City: ${details.city}`,
    `Address: ${details.address}`,
    details.notes ? `Notes: ${details.notes}` : "",
    "",
    "Items:",
    ...lines.filter(Boolean),
    "",
    `Total: ${formatPkr(cartTotal(items))}`,
    "Payment: Cash on Delivery",
  ]
    .filter((line) => line !== "")
    .join("\n");

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(body)}`;
  return { body, url };
}
