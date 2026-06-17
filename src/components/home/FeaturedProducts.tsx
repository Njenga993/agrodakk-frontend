import Link from "next/link";
import { getFeaturedProducts } from "@/lib/api";
import { getStrapiURL } from "@/lib/strapi";
import AddToCartButton from "@/components/cart/AddToCartButton";

// Star rating component
function StarRating({ rating = 4.5 }: { rating?: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {hasHalf && (
        <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#halfGrad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-3.5 h-3.5 text-gray-200" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-gray-400 ml-1">{rating}</span>
    </div>
  );
}

export default async function FeaturedProducts() {
  let products: any[] = [];

  try {
    const res = await getFeaturedProducts();
    products = res.data || [];
  } catch (e) {
    console.log("Products loading...");
  }

  if (products.length === 0) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            🌿 Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Dried Vegetables
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Carefully sourced, naturally dried, and packed to preserve nutrients and flavor.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <div
              key={product.documentId}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-500 flex flex-col"
              style={{ perspective: "1000px" }}
            >
              {/* Image Container — TILT EFFECT */}
              <div 
                className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100/50"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link href={`/products/${product.slug}`}>
                  <div 
                    className="aspect-square overflow-hidden transition-transform duration-300 ease-out group-hover:[transform:rotateY(-8deg)_rotateX(4deg)]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {product.images?.[0] ? (
                      <img
                        src={getStrapiURL(product.images[0].url)}
                        alt={product.images[0].alternativeText || product.name}
                        className="w-full h-full object-contain bg-white transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-7xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">🌿</span>
                      </div>
                    )}
                  </div>
                </Link>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    transform: "translateX(-100%)",
                    animation: "none",
                  }}
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5" style={{ transform: "translateZ(20px)" }}>
                  {product.featured && (
                    <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Featured
                    </span>
                  )}
                  {product.inStock && (
                    <span className="bg-white/90 backdrop-blur-sm text-green-700 text-[10px] font-medium px-2.5 py-1 rounded-full">
                      In Stock
                    </span>
                  )}
                </div>

                {/* Quick View Button */}
                <Link
                  href={`/products/${product.slug}`}
                  className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-110"
                  title="Quick view"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Link>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Category & Rating */}
                <div className="flex items-center justify-between mb-2">
                  {product.product_category ? (
                    <span className="text-[11px] text-green-600 font-semibold uppercase tracking-wider bg-green-50 px-2 py-0.5 rounded-full">
                      {product.product_category.name}
                    </span>
                  ) : (
                    <span />
                  )}
                  <StarRating rating={4.5} />
                </div>

                {/* Product Name */}
                <Link href={`/products/${product.slug}`} className="mb-2">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2 leading-snug">
                    {product.name}
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                  {product.shortDescription || "Premium quality dried vegetable, naturally processed and ready for markets."}
                </p>

                {/* Weight/Unit Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    50g pack
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Kitale, KE
                  </span>
                </div>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400 line-through block">
                      KES {((product.price ?? 500) * 1.2).toLocaleString()}
                    </span>
                    <span className="text-xl font-bold text-green-700">
                      KES {(product.price ?? 500).toLocaleString()}
                    </span>
                  </div>
                  <AddToCartButton
                    product={{
                      documentId: product.documentId,
                      name: product.name,
                      slug: product.slug,
                      price: product.price ?? 500,
                      image: product.images?.[0]
                        ? getStrapiURL(product.images[0].url)
                        : undefined,
                      category: product.product_category?.name,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white border-2 border-green-700 text-green-700 px-8 py-3.5 rounded-full font-semibold hover:bg-green-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            View All Products
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}