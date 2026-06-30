import { getProducts, getCategories } from "@/lib/api";
import { getStrapiURL } from "@/lib/strapi";
import ProductsGrid from "@/components/products/ProductsGrid";

const PRODUCTS_HERO_IMAGE = "/uploads/Managu_right_90b0fbbca0.jpeg";

export default async function ProductsPage() {
  const [productsRes, categoriesRes] = await Promise.all([
    getProducts().catch(() => ({ data: [] })),
    getCategories().catch(() => ({ data: [] })),
  ]);

  const products = productsRes.data || [];
  const categories = categoriesRes.data || [];

  return (
    <main style={{ background: "#f7f3ed" }}>

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "420px", background: "#0e1a0c" }}
      >
        <img
          src={getStrapiURL(PRODUCTS_HERO_IMAGE)}
          alt="AgroDakk Products"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.4, objectPosition: "center 30%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(14,26,12,0.92) 0%, rgba(14,26,12,0.55) 55%, rgba(14,26,12,0.1) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to bottom, transparent, #f7f3ed)" }}
        />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full pb-24 pt-40">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px" style={{ background: "#7aad5e" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#a8cc8c" }}>
              Shop
            </span>
          </div>
          <h1
            className="font-bold leading-[1.05] mb-6"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              color: "#f5f0e8",
              letterSpacing: "-0.03em",
              maxWidth: "680px",
            }}
          >
            Premium Dried
            <br />
            <span style={{ color: "#7aad5e" }}>Vegetables.</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#c8bfaa", maxWidth: "520px" }}>
            Naturally dried, carefully packed, and sourced directly from trusted smallholder farmers across Kenya.
          </p>
        </div>
      </section>

      <ProductsGrid products={products} categories={categories} />
    </main>
  );
}