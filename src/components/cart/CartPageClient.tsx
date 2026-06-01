"use client";

import { useCallback, useMemo, useState } from "react";
import { initialCartItems, type CartLineItem } from "@/lib/cart-data";
import { calculateOrderTotals } from "@/lib/cart-utils";
import { Breadcrumbs } from "./Breadcrumbs";
import { CartItemsPanel } from "./CartItemsPanel";
import { OrderSummary } from "./OrderSummary";

export function CartPageClient() {
  const [items, setItems] = useState<CartLineItem[]>(initialCartItems);

  const totals = useMemo(() => calculateOrderTotals(items), [items]);

  const handleRemove = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleQuantityChange = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const quantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity };
      }),
    );
  }, []);

  return (
    <main className="mx-auto w-full max-w-[1440px] bg-white px-4 pt-[43px] pb-10 sm:px-6 sm:pt-12 md:px-10 lg:px-12 lg:pt-14 xl:px-16 2xl:px-[100px] 2xl:pt-[58px] 2xl:pb-[78px]">
      <Breadcrumbs />

      <h1 className="mt-5 font-heading text-[32px] leading-normal text-black lg:mt-6 lg:text-[40px]">
        Your cart
      </h1>

      <div className="mt-5 grid w-full min-w-0 grid-cols-1 gap-5 lg:mt-6 lg:grid-cols-[minmax(0,715fr)_minmax(0,505fr)] lg:items-start">
        <CartItemsPanel
          items={items}
          onRemove={handleRemove}
          onQuantityChange={handleQuantityChange}
        />
        <OrderSummary totals={totals} hasItems={items.length > 0} />
      </div>
    </main>
  );
}
