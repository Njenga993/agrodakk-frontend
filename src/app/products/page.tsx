import Link from "next/link";
import { getProducts, getCategories } from "@/lib/api";
import { getStrapiURL } from "@/lib/strapi";
import AddToCartButton from "@/components/cart/AddToCartButton";

// Star Rating Component
function StarRating({ rating = 4.5 }: { rating?: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`f-${i}`} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {hasHalf && (
        <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`e-${i}`} className="w-3.5 h-3.5 text-gray-200" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-gray-400 ml-1">{rating}</span>
    </div>
  );
}

export default async function ProductsPage() {
  const [productsRes, categoriesRes] = await Promise.all([
    getProducts().catch(() => ({ data: [] })),
    getCategories().catch(() => ({ data: [] })),
  ]);

  const products = productsRes.data || [];
  const categories = categoriesRes.data || [];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-green-600/40 backdrop-blur-sm text-green-100 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
             Our Products
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Dried Vegetables
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Naturally dried, carefully packed, and sourced from trusted farmers across Kenya.
          </p>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-auto">
            <path d="M0 40L60 35C120 30 240 20 360 25C480 30 600 50 720 55C840 60 960 50 1080 35C1200 20 1320 10 1380 5L1440 0V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V40Z" fill="rgb(249 250 251)"/>
          </svg>
        </div>
      </section>

      {/* Category Filter Bar */}
      {categories.length > 0 && (
        <section className="sticky top-16 z-20 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <Link
              href="/products"
              className="px-5 py-2.5 rounded-full bg-green-600 text-white font-medium text-sm whitespace-nowrap hover:bg-green-700 transition shadow-sm"
            >
               All
            </Link>
            {categories.map((cat: any) => (
              <Link
                key={cat.documentId}
                href={`/products?category=${cat.slug}`}
                className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-600 font-medium text-sm whitespace-nowrap hover:border-green-400 hover:text-green-700 hover:bg-green-50 transition"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Product Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {products.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-7xl mb-6">🌱</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Products Yet</h3>
              <p className="text-gray-500 mb-6">Our products are being harvested. Check back soon!</p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-green-700 font-medium hover:underline"
              >
                ← Back to Home
              </Link>
            </div>
          ) : (
            <>
              {/* Results count */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-gray-500">
                  Showing <span className="font-semibold text-gray-700">{products.length}</span> products
                </p>
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A-Z</option>
                </select>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product: any) => (
                  <div
                    key={product.documentId}
                    className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-500 flex flex-col"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Image with tilt */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100/50">
                      <Link href={`/products/${product.slug}`}>
                        <div 
                          className="aspect-square overflow-hidden transition-transform duration-300 ease-out group-hover:[transform:rotateY(-6deg)_rotateX(3deg)]"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          {product.images?.[0] ? (
                            <img
                              src={getStrapiURL(product.images[0].url)}
                              alt={product.images[0].alternativeText || product.name}
                              className="w-full h-full object-contain bg-white transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-white">
                              <span className="text-7xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">🌿</span>
                            </div>
                          )}
                        </div>
                      </Link>

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5" style={{ transform: "translateZ(20px)" }}>
                        {product.featured && (
                          <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                            Featured
                          </span>
                        )}
                        {product.inStock ? (
                          <span className="bg-white/90 backdrop-blur-sm text-green-700 text-[10px] font-medium px-2.5 py-1 rounded-full">
                            In Stock
                          </span>
                        ) : (
                          <span className="bg-red-50 text-red-600 text-[10px] font-medium px-2.5 py-1 rounded-full">
                            Out of Stock
                          </span>
                        )}
                      </div>

                      {/* Quick View */}
                      <Link
                        href={`/products/${product.slug}`}
                        className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 p-2.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-110"
                        title="View details"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </Link>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
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

                      <Link href={`/products/${product.slug}`} className="mb-2">
                        <h3 className="text-base font-semibold text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2 leading-snug">
                          {product.name}
                        </h3>
                      </Link>

                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                        {product.shortDescription || "Premium quality dried vegetable, naturally processed."}
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                          </svg>
                          500g
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Kitale, KE
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <span className="text-xs text-gray-400 line-through block">
                            KES {((product.price ?? 500) * 1.2).toLocaleString()}
                          </span>
                          <span className="text-lg font-bold text-green-700">
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}