"use client";

import Image from "next/image";
import type { CartLineItem } from "@/lib/cart-data";
import { formatPrice } from "@/lib/cart-utils";
import { ProductThumbnail } from "./ProductThumbnail";
import { QuantityControl } from "./QuantityControl";

type CartItemProps = {
  product: CartLineItem;
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, delta: number) => void;
};

function DeleteButton({
  title,
  onRemove,
  className,
}: {
  title: string;
  onRemove: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`btn-icon relative shrink-0 ${className ?? ""}`}
      onClick={onRemove}
      aria-label={`Remove ${title} from cart`}
    >
      <Image
        src="/images/icon-delete.svg"
        alt=""
        width={24}
        height={24}
        className="size-full max-lg:size-5"
        aria-hidden
      />
    </button>
  );
}

export function CartItem({
  product,
  onRemove,
  onQuantityChange,
}: CartItemProps) {
  const lineTotal = product.price * product.quantity;

  return (
    <article className="flex w-full min-w-0 gap-3.5 lg:items-center lg:gap-4">
      <ProductThumbnail image={product.image} />

      {/* Mobile / tablet layout */}
      <div className="flex min-w-0 flex-1 flex-col justify-between lg:hidden">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 text-black">
            <h3 className="text-base font-bold leading-normal">
              {product.title}
            </h3>
            <div className="mt-px flex flex-col gap-0.5 text-xs font-normal leading-normal">
              <p>
                Size: <span className="text-muted">{product.size}</span>
              </p>
              <p>
                Color: <span className="text-muted">{product.color}</span>
              </p>
            </div>
          </div>
          <DeleteButton
            title={product.title}
            onRemove={() => onRemove(product.id)}
          />
        </div>

        <div className="mt-2.5 flex items-center justify-between gap-2">
          <p className="text-xl font-bold leading-normal">
            {formatPrice(lineTotal)}
          </p>
          <QuantityControl
            size="sm"
            quantity={product.quantity}
            onDecrease={() => onQuantityChange(product.id, -1)}
            onIncrease={() => onQuantityChange(product.id, 1)}
          />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden min-w-0 flex-1 items-center justify-between lg:flex">
        <div className="flex flex-col justify-between text-black">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-xl font-bold leading-normal">
              {product.title}
            </h3>
            <div className="flex flex-col gap-1 text-sm font-normal leading-normal">
              <p>
                Size: <span className="text-muted">{product.size}</span>
              </p>
              <p>
                Color: <span className="text-muted">{product.color}</span>
              </p>
            </div>
          </div>
          <p className="text-2xl font-bold leading-normal">
            {formatPrice(lineTotal)}
          </p>
        </div>

        <div className="flex h-[124px] w-[225px] shrink-0 flex-col items-end justify-between">
          <DeleteButton
            title={product.title}
            onRemove={() => onRemove(product.id)}
            className="size-6"
          />
          <QuantityControl
            quantity={product.quantity}
            onDecrease={() => onQuantityChange(product.id, -1)}
            onIncrease={() => onQuantityChange(product.id, 1)}
          />
        </div>
      </div>
    </article>
  );
}
