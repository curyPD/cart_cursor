"use client";

import Image from "next/image";
import type { ProductImageConfig } from "@/lib/cart-data";

type ProductThumbnailProps = {
  image: ProductImageConfig;
};

export function ProductThumbnail({ image }: ProductThumbnailProps) {
  return (
    <div className="relative size-[99px] shrink-0 overflow-hidden rounded-[8.66px] bg-surface-product lg:size-[124px]">
      <div className="relative size-full">
        {image.secondarySrc ? (
          <>
            <Image
              src={image.src}
              alt=""
              width={125}
              height={187}
              className={`hidden lg:block ${image.desktop.primaryClassName}`}
              aria-hidden
            />
            <Image
              src={image.secondarySrc}
              alt=""
              width={125}
              height={187}
              className={`hidden lg:block ${
                image.desktop.secondaryClassName ??
                image.desktop.primaryClassName
              }`}
              aria-hidden
            />
            <Image
              src={image.src}
              alt=""
              width={100}
              height={149}
              className={`lg:hidden ${image.mobile.primaryClassName}`}
              aria-hidden
            />
            <Image
              src={image.secondarySrc}
              alt=""
              width={100}
              height={149}
              className={`lg:hidden ${
                image.mobile.secondaryClassName ??
                image.mobile.primaryClassName
              }`}
              aria-hidden
            />
          </>
        ) : (
          <>
            <Image
              src={image.src}
              alt={image.alt}
              width={125}
              height={187}
              className={`hidden lg:block ${image.desktop.primaryClassName}`}
            />
            <Image
              src={image.src}
              alt={image.alt}
              width={99}
              height={149}
              className={`lg:hidden ${image.mobile.primaryClassName}`}
            />
          </>
        )}
      </div>
    </div>
  );
}
