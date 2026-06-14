"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { getStrapiURL } from "@/lib/strapi";

interface AddToCartSectionProps {
  product: {
    documentId: string;
    name: string;
    slug: string;
    price: number;
    image?: string;
    category?: string;
  };
}

export default function AddToCartSection({ product }: AddToCartSectionProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setQuantity(1);
  };

  const price = product.price ?? 500;
  const total = price * quantity;

  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center border border-gray-200 rounded-full">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-l-full transition"
          >
            −
          </button>
          <span className="w-12 text-center text-sm font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-r-full transition"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition shadow-sm hover:shadow-md"
        >
          Add to Cart — KES {total.toLocaleString()}
        </button>
      </div>
    </>
  );
}