"use client";

import Image from "next/image";
import { useState } from "react";
import type { OrderTotals } from "@/lib/cart-utils";
import { formatPrice } from "@/lib/cart-utils";

function SummaryRow({
  label,
  value,
  valueClassName = "text-black",
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex w-full items-center justify-between gap-4 leading-normal whitespace-nowrap">
      <span className="text-base font-normal text-muted lg:text-xl">
        {label}
      </span>
      <span
        className={`shrink-0 text-right text-base font-bold lg:text-xl ${valueClassName}`}
      >
        {value}
      </span>
    </div>
  );
}

type OrderSummaryProps = {
  totals: OrderTotals;
  hasItems: boolean;
};

export function OrderSummary({ totals, hasItems }: OrderSummaryProps) {
  const [promoCode, setPromoCode] = useState("");

  return (
    <aside
      className="flex w-full min-w-0 flex-col gap-4 rounded-[20px] border border-border-subtle p-5 lg:gap-6 lg:py-5 lg:px-6"
      aria-label="Order summary"
    >
      <h2 className="text-xl font-bold leading-normal text-black lg:text-2xl">
        Order Summary
      </h2>

      <div className="flex flex-col gap-5">
        <SummaryRow
          label="Subtotal"
          value={formatPrice(totals.subtotal)}
        />
        <SummaryRow
          label={`Discount (-${totals.discountPercent}%)`}
          value={totals.discountAmount > 0 ? `-$${totals.discountAmount}` : "$0"}
          valueClassName="text-discount"
        />
        <SummaryRow
          label="Delivery Fee"
          value={formatPrice(totals.deliveryFee)}
        />
        <div className="h-px w-full bg-border-subtle" />
        <div className="flex w-full items-center justify-between gap-4 whitespace-nowrap">
          <span className="text-base font-normal leading-normal text-black lg:text-xl">
            Total
          </span>
          <span className="text-right text-xl font-bold leading-normal text-black lg:text-2xl">
            {formatPrice(totals.total)}
          </span>
        </div>
      </div>

      <div className="flex w-full items-stretch gap-3">
        <label className="input-shell flex min-w-0 flex-1 items-center gap-2.5 rounded-[62px] bg-surface-control px-4 py-3 lg:gap-3">
          <Image
            src="/images/icon-tag.svg"
            alt=""
            width={24}
            height={24}
            className="size-5 shrink-0 lg:size-6"
            aria-hidden
          />
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Add promo code"
            disabled={!hasItems}
            className="input-field min-w-0 flex-1 text-sm font-normal leading-normal text-foreground placeholder:text-placeholder lg:text-base"
          />
        </label>
        <button
          type="button"
          className="btn-primary flex h-12 w-[88px] shrink-0 items-center justify-center rounded-[62px] px-4 text-sm font-medium leading-normal lg:w-[119px] lg:text-base"
          disabled={!hasItems || !promoCode.trim()}
        >
          Apply
        </button>
      </div>

      <button
        type="button"
        className="btn-primary flex h-[54px] w-full items-center justify-center gap-3 rounded-[62px] px-6 text-sm font-medium leading-normal lg:h-[60px] lg:text-base"
        disabled={!hasItems}
      >
        Go to Checkout
        <span className="flex size-5 items-center justify-center lg:size-6">
          <Image
            src="/images/icon-arrow.svg"
            alt=""
            width={24}
            height={24}
            className="-rotate-90 size-5 lg:size-6"
            aria-hidden
          />
        </span>
      </button>
    </aside>
  );
}
