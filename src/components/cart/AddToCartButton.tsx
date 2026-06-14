"use client";

import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
  product: {
    documentId: string;
    name: string;
    slug: string;
    price: number;
    image?: string;
    category?: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem, items } = useCart();

  const inCart = items.find((item) => item.documentId === product.documentId);

  return (
    <button
      onClick={() => addItem(product)}
      className={`
        px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
        ${
          inCart
            ? "bg-green-100 text-green-700 hover:bg-green-200"
            : "bg-green-700 text-white hover:bg-green-800 shadow-sm hover:shadow-md"
        }
      `}
    >
      {inCart ? `✓ Added (${inCart.quantity})` : "+ Add to Cart"}
    </button>
  );
}