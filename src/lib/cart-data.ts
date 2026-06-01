export type ProductImageConfig = {
  src: string;
  alt: string;
  secondarySrc?: string;
  desktop: {
    primaryClassName: string;
    secondaryClassName?: string;
  };
  mobile: {
    primaryClassName: string;
    secondaryClassName?: string;
  };
};

export type CartLineItem = {
  id: string;
  title: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: ProductImageConfig;
};

export const initialCartItems: CartLineItem[] = [
  {
    id: "1",
    title: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    quantity: 1,
    image: {
      src: "/images/product-tshirt.png",
      alt: "Gradient Graphic T-shirt",
      desktop: {
        primaryClassName:
          "absolute h-[187px] w-[125px] -left-px -top-[30.5px] object-cover",
      },
      mobile: {
        primaryClassName:
          "absolute left-0 top-[-25px] h-[149px] w-[99px] object-cover",
      },
    },
  },
  {
    id: "2",
    title: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    quantity: 1,
    image: {
      src: "/images/product-tshirt.png",
      alt: "Checkered Shirt",
      secondarySrc: "/images/product-shirt.png",
      desktop: {
        primaryClassName: "absolute inset-0 size-full object-cover",
        secondaryClassName: "absolute inset-0 size-full object-cover",
      },
      mobile: {
        primaryClassName: "absolute inset-0 size-full object-cover",
        secondaryClassName: "absolute inset-0 size-full object-cover",
      },
    },
  },
  {
    id: "3",
    title: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    quantity: 1,
    image: {
      src: "/images/product-jeans.png",
      alt: "Skinny Fit Jeans",
      desktop: {
        primaryClassName:
          "absolute left-[11px] top-1/2 h-[153px] w-[102px] -translate-y-1/2 object-cover",
      },
      mobile: {
        primaryClassName:
          "absolute left-[10px] top-1/2 h-[120px] w-[80px] -translate-y-1/2 object-cover",
      },
    },
  },
];
