"use client";

import type { CartLineItem } from "@/lib/cart-data";
import { CartItem } from "./CartItem";

function Divider() {
  return <div className="h-px w-full bg-border-subtle" />;
}

type CartItemsPanelProps = {
  items: CartLineItem[];
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, delta: number) => void;
};

export function CartItemsPanel({
  items,
  onRemove,
  onQuantityChange,
}: CartItemsPanelProps) {
  return (
    <section
      className="w-full min-w-0 rounded-[20px] border border-border-subtle p-3.5 lg:p-5 lg:px-6"
      aria-label="Cart items"
    >
      {items.length === 0 ? (
        <p className="py-8 text-center text-base text-muted">
          Your cart is empty. Add items to continue shopping.
        </p>
      ) : (
        <div className="flex flex-col gap-4 lg:gap-6">
          {items.map((product, index) => (
            <div key={product.id} className="flex flex-col gap-4 lg:gap-6">
              <CartItem
                product={product}
                onRemove={onRemove}
                onQuantityChange={onQuantityChange}
              />
              {index < items.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
