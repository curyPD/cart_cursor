import type { CartLineItem } from "@/lib/cart-data";

const DISCOUNT_RATE = 0.2;
const DELIVERY_FEE = 15;

export type OrderTotals = {
  subtotal: number;
  discountPercent: number;
  discountAmount: number;
  deliveryFee: number;
  total: number;
};

export function formatPrice(amount: number): string {
  return `$${Math.round(amount)}`;
}

export function calculateSubtotal(items: CartLineItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function calculateDiscount(subtotal: number): number {
  if (subtotal <= 0) return 0;
  return Math.round(subtotal * DISCOUNT_RATE);
}

export function calculateOrderTotals(items: CartLineItem[]): OrderTotals {
  const subtotal = calculateSubtotal(items);
  const discountAmount = calculateDiscount(subtotal);
  const deliveryFee = items.length > 0 ? DELIVERY_FEE : 0;
  const total = Math.max(0, subtotal - discountAmount + deliveryFee);

  return {
    subtotal,
    discountPercent: 20,
    discountAmount,
    deliveryFee,
    total,
  };
}
