import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/api";
import { getStrapiURL } from "@/lib/strapi";
import AddToCartSection from "@/components/cart/AddToCartSection";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await getProduct(slug).catch(() => ({ data: [] }));
  const product = res.data?.[0];

  if (!product) {
    notFound();
  }

  const price = product.price ?? 500;
  const originalPrice = price * 1.2;

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-green-700 transition">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-green-700 transition">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Images */}
          <div>
            {/* Main Image */}
            <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl overflow-hidden mb-4">
              {product.images?.[0] ? (
                <img
                  src={getStrapiURL(product.images[0].url)}
                  alt={product.images[0].alternativeText || product.name}
                  className="w-full h-full object-contain bg-white"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-9xl">🌿</span>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.images?.length > 1 && (
              <div className="flex gap-3 overflow-x-auto">
                {product.images.map((img: any, i: number) => (
                  <div
                    key={i}
                    className="w-20 h-20 flex-shrink-0 bg-green-50 rounded-xl overflow-hidden border-2 border-green-500"
                  >
                    <img
                      src={getStrapiURL(img.url)}
                      alt={img.alternativeText || `${product.name} ${i + 1}`}
                      className="w-full h-full object-contain bg-white"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right - Product Details */}
          <div>
            {/* Category & Status */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              {product.product_category && (
                <span className="text-xs text-green-600 font-semibold uppercase tracking-wider bg-green-50 px-3 py-1 rounded-full">
                  {product.product_category.name}
                </span>
              )}
              {product.inStock ? (
                <span className="text-xs text-green-700 font-medium bg-green-100 px-3 py-1 rounded-full">
                  ✓ In Stock
                </span>
              ) : (
                <span className="text-xs text-red-600 font-medium bg-red-50 px-3 py-1 rounded-full">
                  Out of Stock
                </span>
              )}
              {product.featured && (
                <span className="text-xs text-white font-bold bg-green-600 px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">4.5 (24 reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-green-700">
                  KES {price.toLocaleString()}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  KES {originalPrice.toLocaleString()}
                </span>
                <span className="text-sm font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Price per 50g pack • Bulk discounts available</p>
            </div>

            {/* Short Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.shortDescription || "Premium quality dried vegetable, naturally processed and carefully packed to preserve nutrients and flavor."}
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Features</h3>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  { icon: "☀️", text: "Naturally Sun-Dried" },
                  { icon: "🌱", text: "100% Organic" },
                  { icon: "📦", text: "Export-Grade Quality" },
                  { icon: "🇰🇪", text: "Grown in Kenya" },
                  { icon: "🔬", text: "Lab Tested" },
                  { icon: "♻️", text: "Sustainable Farming" },
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{feature.icon}</span>
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Add to Cart */}
<AddToCartSection
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

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                50g per pack
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Kitale, Kenya
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Bulk orders available
              </span>
            </div>
          </div>
        </div>

        {/* Full Description Section */}
{product.description && (
  <div className="mt-16 pt-12 border-t border-gray-200">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h2>
    <div className="prose prose-lg max-w-none text-gray-600">
      {Array.isArray(product.description) ? (
        product.description.map((block: any, i: number) => (
          <p key={i} className="mb-4">
            {block.children?.map((child: any) => child.text).join("")}
          </p>
        ))
      ) : (
        <p>{product.description}</p>
      )}
    </div>
  </div>
)}

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-green-700 font-medium hover:underline"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Products
          </Link>
        </div>
      </div>
    </main>
  );
}