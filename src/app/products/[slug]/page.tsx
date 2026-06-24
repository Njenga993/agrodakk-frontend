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
    <main style={{ background: "#f7f3ed" }}>
      
      {/* ── Breadcrumb ── */}
      <div className="border-b" style={{ borderColor: "#e4ddd2" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-xs" style={{ color: "#a89d8e" }}>
            <Link href="/" className="hover:text-[#1e2a1a] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#1e2a1a] transition-colors">Products</Link>
            <span>/</span>
            <span className="truncate font-medium" style={{ color: "#1e2a1a" }}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* ── Main Product Layout ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left - Images */}
          <div>
            {/* Main Image */}
            <div 
              className="aspect-square rounded-2xl overflow-hidden" 
              style={{ background: "#faf8f5", border: "1px solid #e4ddd2" }}
            >
              {product.images?.[0] ? (
                <img
                  src={getStrapiURL(product.images[0].url)}
                  alt={product.images[0].alternativeText || product.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-24 h-24" style={{ color: "#d0c8b8" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.images?.length > 1 && (
              <div className="flex gap-3 mt-4">
                {product.images.map((img: any, i: number) => (
                  <div
                    key={i}
                    className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-200"
                    style={{ 
                      background: "#faf8f5", 
                      border: "2px solid", 
                      borderColor: i === 0 ? "#3d5c35" : "#e4ddd2" 
                    }}
                  >
                    <img
                      src={getStrapiURL(img.url)}
                      alt={img.alternativeText || `${product.name} ${i + 1}`}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right - Product Details */}
          <div className="flex flex-col">
            {/* Category & Status Badges */}
            <div className="flex items-center gap-2.5 mb-5 flex-wrap">
              {product.product_category && (
                <span
                  className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ color: "#3d5c35", background: "#f7f3ed", border: "1px solid #e4ddd2" }}
                >
                  {product.product_category.name}
                </span>
              )}
              {product.inStock ? (
                <span
                  className="text-[10px] font-semibold px-3 py-1 rounded-full"
                  style={{ color: "#3d5c35", background: "rgba(122,173,94,0.1)", border: "1px solid #c8dbb8" }}
                >
                  ✓ In Stock
                </span>
              ) : (
                <span
                  className="text-[10px] font-semibold px-3 py-1 rounded-full"
                  style={{ color: "#b91c1c", background: "rgba(185, 28, 28, 0.06)", border: "1px solid #fecaca" }}
                >
                  Out of Stock
                </span>
              )}
              {product.featured && (
                <span
                  className="text-[10px] font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full"
                  style={{ background: "#3d5c35" }}
                >
                  Featured
                </span>
              )}
            </div>

            {/* Product Name */}
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight mb-4"
              style={{ color: "#1e2a1a", letterSpacing: "-0.02em" }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" style={{ color: "#d4a843" }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs" style={{ color: "#a89d8e" }}>4.5 (24 reviews)</span>
            </div>

            {/* Price Block */}
            <div className="mb-6 pb-6" style={{ borderBottom: "1px solid #f0ebe0" }}>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold" style={{ color: "#3d5c35" }}>
                  KES {price.toLocaleString()}
                </span>
                <span className="text-base line-through" style={{ color: "#a89d8e" }}>
                  KES {originalPrice.toLocaleString()}
                </span>
                <span
                  className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{ color: "#b91c1c", background: "rgba(185, 28, 28, 0.08)" }}
                >
                  Save 20%
                </span>
              </div>
              <p className="text-xs mt-2" style={{ color: "#a89d8e" }}>
                Price per 50g pack • Bulk discounts available
              </p>
            </div>

            {/* Short Description */}
            <p className="text-base leading-relaxed mb-8" style={{ color: "#5a5347" }}>
              {product.shortDescription || "Premium quality dried vegetable, naturally processed and carefully packed to preserve nutrients and flavor."}
            </p>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "#6b6355" }}>
                Key Features
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {[
                  "Naturally Sun-Dried",
                  "100% Organic",
                  "Export-Grade Quality",
                  "Grown in Kenya",
                  "Lab Tested",
                  "Sustainable Farming",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm" style={{ color: "#5a5347" }}>
                    <svg className="w-4 h-4 shrink-0" style={{ color: "#7aad5e" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-auto">
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
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 pt-6" style={{ borderTop: "1px solid #f0ebe0" }}>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a89d8e" }}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                50g per pack
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a89d8e" }}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Kitale, Kenya
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a89d8e" }}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Bulk orders available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Full Description Section ── */}
      {product.description && (
        <section className="pb-16 md:pb-24" style={{ background: "#f7f3ed" }}>
          <div className="max-w-4xl mx-auto px-5 lg:px-8">
            {/* Paper Card */}
            <div
              className="rounded-2xl p-8 md:p-12 lg:p-16"
              style={{ background: "#ffffff", border: "1px solid #e4ddd2" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="block w-8 h-px" style={{ background: "#7aad5e" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a6741" }}>
                  Product Details
                </span>
              </div>

              <div className="prose prose-lg max-w-none leading-relaxed" style={{ color: "#5a5347" }}>
                {/* Custom styles matching blog detail page */}
                <style>{`
                  .prose h2 { color: #1e2a1a !important; letter-spacing: -0.02em; margin-top: 2.5em; margin-bottom: 1em; font-weight: 700; }
                  .prose h3 { color: #1e2a1a !important; margin-top: 2em; margin-bottom: 0.8em; font-weight: 600; }
                  .prose p { margin-bottom: 1.5em; }
                  .prose a { color: #3d5c35 !important; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: rgba(61,92,53,0.3); }
                  .prose a:hover { text-decoration-color: #3d5c35 !important; }
                  .prose strong { color: #3d3a35 !important; font-weight: 600; }
                  .prose ul, .prose ol { padding-left: 1.5em; margin-bottom: 1.5em; }
                  .prose li { margin-bottom: 0.5em; }
                  .prose li::marker { color: #7aad5e; }
                  .prose blockquote {
                    border-left: 3px solid #c8dbb8 !important;
                    background: #f7f3ed;
                    padding: 1em 1.5em;
                    margin: 2em 0;
                    border-radius: 0 0.5rem 0.5rem 0;
                    font-style: italic;
                    color: #6b6355 !important;
                  }
                  .prose img {
                    border-radius: 1rem;
                    border: 1px solid #e4ddd2;
                    margin: 2.5em 0;
                  }
                `}</style>

                {Array.isArray(product.description) ? (
                  product.description.map((block: any, i: number) => {
                    if (block.type === "paragraph" || !block.type) {
                      return <p key={i}>{block.children?.map((c: any) => c.text).join("")}</p>;
                    }
                    if (block.type === "heading" && block.level === 2) {
                      return <h2 key={i}>{block.children?.map((c: any) => c.text).join("")}</h2>;
                    }
                    if (block.type === "heading" && block.level === 3) {
                      return <h3 key={i}>{block.children?.map((c: any) => c.text).join("")}</h3>;
                    }
                    return <p key={i}>{block.children?.map((c: any) => c.text).join("")}</p>;
                  })
                ) : (
                  <p>{product.description}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Back Link ── */}
      <div className="pb-16 md:pb-24 flex justify-center" style={{ background: "#f7f3ed" }}>
        <Link
          href="/products"
          className="
            group inline-flex items-center gap-2.5 text-sm font-semibold 
            px-6 py-3 rounded-full transition-all duration-200 hover:shadow-sm
          "
          style={{ 
            background: "#ffffff", 
            color: "#3d5c35", 
            border: "1px solid #e4ddd2" 
          }}
        >
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Back to All Products
        </Link>
      </div>
    </main>
  );
}