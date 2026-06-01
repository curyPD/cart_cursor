"use client";

import Image from "next/image";

type QuantityControlProps = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  size?: "sm" | "md";
};

export function QuantityControl({
  quantity,
  onDecrease,
  onIncrease,
  size = "md",
}: QuantityControlProps) {
  const isSm = size === "sm";

  return (
    <div
      className={`flex items-center justify-center rounded-[62px] bg-surface-control ${
        isSm
          ? "h-[31px] w-[105px] gap-5 px-5"
          : "gap-5 px-5 py-3 lg:min-w-[126px]"
      }`}
    >
      <button
        type="button"
        className={`btn-icon relative shrink-0 ${isSm ? "size-4" : "size-5"}`}
        onClick={onDecrease}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        <Image
          src="/images/icon-minus.svg"
          alt=""
          width={isSm ? 16 : 20}
          height={isSm ? 16 : 20}
          className="size-full"
          aria-hidden
        />
      </button>
      <span
        className="min-w-[6px] text-center text-sm font-medium leading-normal text-black"
        aria-live="polite"
        aria-atomic="true"
      >
        {quantity}
      </span>
      <button
        type="button"
        className={`btn-icon relative shrink-0 ${isSm ? "size-4" : "size-5"}`}
        onClick={onIncrease}
        aria-label="Increase quantity"
      >
        <Image
          src="/images/icon-plus.svg"
          alt=""
          width={isSm ? 16 : 20}
          height={isSm ? 16 : 20}
          className="size-full"
          aria-hidden
        />
      </button>
    </div>
  );
}
