"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getStrapiURL } from "@/lib/strapi";
import AddToCartButton from "@/components/cart/AddToCartButton";

function StarRating({ rating = 4.5 }: { rating?: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`f-${i}`} className="w-3.5 h-3.5" style={{ color: "#d4a843" }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {hasHalf && (
        <svg className="w-3.5 h-3.5" style={{ color: "#d4a843" }} fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="#d4a843" />
              <stop offset="50%" stopColor="#e4ddd2" />
            </linearGradient>
          </defs>
          <path fill="url(#halfGrad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`e-${i}`} className="w-3.5 h-3.5" style={{ color: "#e4ddd2" }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs ml-1" style={{ color: "#a89d8e" }}>{rating}</span>
    </div>
  );
}

// Categories that should hide pricing
const HIDDEN_PRICE_CATEGORIES = ["chillies", "chilli", "chili", "chilies"];

interface Category {
  documentId: string;
  slug: string;
  name: string;
}

interface ProductsGridProps {
  products: any[];
  categories: Category[];
}

export default function ProductsGrid({ products, categories }: ProductsGridProps) {
  // null = "All". Otherwise holds the slug of the selected category.
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    if (!activeSlug) return products;
    return products.filter((product: any) => {
      const slug = product.product_category?.slug?.toLowerCase() ?? "";
      return slug === activeSlug.toLowerCase();
    });
  }, [products, activeSlug]);

  return (
    <>
      {/* ── Category Filter ── */}
      {categories.length > 0 && (
        <section
          className="sticky top-16 z-20 backdrop-blur-2xl border-b"
          style={{ background: "rgba(247, 243, 237, 0.9)", borderColor: "#e4ddd2" }}
        >
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-3.5 flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <button
              type="button"
              onClick={() => setActiveSlug(null)}
              className="px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors duration-200"
              style={
                activeSlug === null
                  ? { background: "#2a4f18", color: "#ffffff" }
                  : { color: "#6b6355", border: "1px solid #e4ddd2", background: "#ffffff" }
              }
            >
              All
            </button>
            {categories.map((cat) => {
              const isActive = activeSlug === cat.slug;
              return (
                <button
                  key={cat.documentId}
                  type="button"
                  onClick={() => setActiveSlug(cat.slug)}
                  className="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 hover:text-[#2a4f18]"
                  style={
                    isActive
                      ? { background: "#2a4f18", color: "#ffffff" }
                      : { color: "#6b6355", border: "1px solid #e4ddd2", background: "#ffffff" }
                  }
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Product Grid ── */}
      <section className="py-16 md:py-24" style={{ background: "#f7f3ed" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          {filteredProducts.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center text-center py-24 rounded-2xl"
              style={{ background: "#ffffff", border: "1px solid #e4ddd2" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "rgba(61,92,53,0.06)", border: "1px solid #e4ddd2" }}
              >
                <svg className="w-8 h-8" style={{ color: "#c8dbb8" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#1e2a1a" }}>
                {activeSlug ? "No Products In This Category" : "No Products Yet"}
              </h3>
              <p className="text-sm max-w-sm mb-6" style={{ color: "#a89d8e" }}>
                {activeSlug
                  ? "Try a different category or view all products."
                  : "Our products are currently being harvested and prepared. Check back soon!"}
              </p>
              {activeSlug ? (
                <button
                  type="button"
                  onClick={() => setActiveSlug(null)}
                  className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
                  style={{ border: "1px solid #e4ddd2", color: "#3d5c35" }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
                  </svg>
                  View All Products
                </button>
              ) : (
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
                  style={{ border: "1px solid #e4ddd2", color: "#3d5c35" }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
                  </svg>
                  Back to Home
                </Link>
              )}
            </div>
          ) : (
            <>
              {/* Results header */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm" style={{ color: "#a89d8e" }}>
                  Showing <span className="font-semibold" style={{ color: "#1e2a1a" }}>{filteredProducts.length}</span> products
                </p>
                <select
                  className="text-sm rounded-lg px-3 py-2 outline-none"
                  style={{ border: "1px solid #e4ddd2", background: "#faf8f5", color: "#1e2a1a" }}
                >
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A-Z</option>
                </select>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product: any) => {
                  // Hide price for chillies category (case-insensitive)
                  const categorySlug = product.product_category?.slug?.toLowerCase() ?? "";
                  const categoryName = product.product_category?.name?.toLowerCase() ?? "";
                  const hidePrice = HIDDEN_PRICE_CATEGORIES.some(
                    (c) => categorySlug.includes(c) || categoryName.includes(c)
                  );

                  return (
                    <div
                      key={product.documentId}
                      className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col"
                      style={{ border: "1px solid #e4ddd2" }}
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden bg-[#faf8f5]">
                        <Link href={`/products/${product.slug}`}>
                          <div className="aspect-square overflow-hidden">
                            {product.images?.[0] ? (
                              <img
                                src={getStrapiURL(product.images[0].url)}
                                alt={product.images[0].alternativeText || product.name}
                                className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <svg className="w-16 h-16" style={{ color: "#d0c8b8" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                                </svg>
                              </div>
                            )}
                          </div>
                        </Link>

                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                          {product.featured && (
                            <span
                              className="text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm"
                              style={{ background: "#3d5c35" }}
                            >
                              Featured
                            </span>
                          )}
                          {product.inStock ? (
                            <span
                              className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                              style={{ color: "#3d5c35", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(4px)", border: "1px solid #c8dbb8" }}
                            >
                              In Stock
                            </span>
                          ) : (
                            <span
                              className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                              style={{ color: "#b91c1c", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(4px)", border: "1px solid #fecaca" }}
                            >
                              Out of Stock
                            </span>
                          )}
                        </div>

                        {/* Quick view */}
                        <Link
                          href={`/products/${product.slug}`}
                          className="absolute bottom-3 right-3 p-2.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                          style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(4px)", color: "#5a5347" }}
                          title="View details"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </Link>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-3">
                          {product.product_category ? (
                            <span
                              className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
                              style={{ color: "#3d5c35", background: "#f7f3ed" }}
                            >
                              {product.product_category.name}
                            </span>
                          ) : (
                            <span />
                          )}
                          <StarRating rating={4.5} />
                        </div>

                        <Link href={`/products/${product.slug}`} className="mb-2 block">
                          <h3
                            className="text-base font-semibold leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[#3d5c35]"
                            style={{ color: "#1e2a1a" }}
                          >
                            {product.name}
                          </h3>
                        </Link>

                        <p className="text-sm leading-relaxed line-clamp-2 mb-4 flex-1" style={{ color: "#6b6355" }}>
                          {product.shortDescription || "Premium quality dried vegetable, naturally processed and packed."}
                        </p>

                        <div className="flex items-center gap-2 mb-4">
                          <span
                            className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-md"
                            style={{ color: "#a89d8e", background: "#f7f3ed" }}
                          >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                            {hidePrice ? "100g" : "50g"}
                          </span>
                          <span
                            className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-md"
                            style={{ color: "#a89d8e", background: "#f7f3ed" }}
                          >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Kitale, KE
                          </span>
                        </div>

                        {/* Price + Cart — hidden for chillies category */}
                        <div
                          className="flex items-center justify-between pt-4"
                          style={{ borderTop: "1px solid #f0ebe0" }}
                        >
                          {hidePrice ? (
                            <p className="text-sm italic" style={{ color: "#a89d8e" }}>
                              Price on request
                            </p>
                          ) : (
                            <>
                              <div>
                                <span className="text-xs line-through block" style={{ color: "#a89d8e" }}>
                                  KES {((product.price ?? 500) * 1.2).toLocaleString()}
                                </span>
                                <span className="text-lg font-bold" style={{ color: "#3d5c35" }}>
                                  KES {(product.price ?? 500).toLocaleString()}
                                </span>
                              </div>
                              <AddToCartButton
                                product={{
                                  documentId: product.documentId,
                                  name: product.name,
                                  slug: product.slug,
                                  price: product.price ?? 500,
                                  image: product.images?.[0] ? getStrapiURL(product.images[0].url) : undefined,
                                  category: product.product_category?.name,
                                }}
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}