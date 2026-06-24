import Link from "next/link";
import { getBlogs } from "@/lib/api";
import { getStrapiURL } from "@/lib/strapi";

// 🔧 Update this with your actual Strapi blog hero filename
const BLOG_HERO_IMAGE = "/uploads/Langat_a822855147.jpg";

export default async function BlogPage() {
  let blogs: any[] = [];
  try {
    const res = await getBlogs();
    blogs = res.data || [];
  } catch (e) {}

  return (
    <main style={{ background: "#f7f3ed" }}>

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "520px", background: "#0e1a0c" }}
      >
        <img
          src={getStrapiURL(BLOG_HERO_IMAGE)}
          alt="AgroDakk Blog"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.4, objectPosition: "center 30%" }}
        />
        {/* Left vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(14,26,12,0.92) 0%, rgba(14,26,12,0.55) 55%, rgba(14,26,12,0.1) 100%)",
          }}
        />
        {/* Bottom fade to cream */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to bottom, transparent, #f7f3ed)" }}
        />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full pb-24 pt-40">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px" style={{ background: "#7aad5e" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#a8cc8c" }}>
              Insights & Stories
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
            From the farm to
            <br />
            <span style={{ color: "#7aad5e" }}>your screen.</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#c8bfaa", maxWidth: "520px" }}>
            Market insights, sustainable agriculture updates, and stories from the heart of Kenya's farming communities.
          </p>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="py-24" style={{ background: "#f7f3ed" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          
          {blogs.length === 0 ? (
            // ── Empty State ──
            <div
              className="flex flex-col items-center justify-center text-center py-24 rounded-2xl"
              style={{ background: "#ffffff", border: "1px solid #e4ddd2" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(61,92,53,0.06)", border: "1px solid #e4ddd2" }}
              >
                <svg className="w-7 h-7" style={{ color: "#c8dbb8" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#1e2a1a" }}>
                Articles Coming Soon
              </h3>
              <p className="text-sm max-w-sm" style={{ color: "#a89d8e" }}>
                We're working on insightful stories about agriculture and our journey. Check back soon.
              </p>
            </div>
          ) : (
            // ── Grid Layout ──
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog: any) => {
                const imageUrl = blog.coverImage?.url || blog.images?.[0]?.url;
                const imageAlt = blog.coverImage?.alternativeText || blog.images?.[0]?.alternativeText || blog.title;

                return (
                  <Link
                    key={blog.documentId}
                    href={`/blog/${blog.slug}`}
                    className="group block rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                    style={{ background: "#ffffff", border: "1px solid #e4ddd2" }}
                  >
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden" style={{ background: "#e4ddd2" }}>
                      {imageUrl ? (
                        <img
                          src={getStrapiURL(imageUrl)}
                          alt={imageAlt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-10 h-10" style={{ color: "#d0c8b8" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-7">
                      {/* Meta Row */}
                      <div className="flex items-center gap-2 mb-4 min-h-[20px]">
                        {blog.category && (
                          <span
                            className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
                            style={{ color: "#3d5c35", background: "rgba(61,92,53,0.06)" }}
                          >
                            {blog.category}
                          </span>
                        )}
                        {blog.publishedDate && (
                          <>
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#d0c8b8" }} />
                            <span className="text-xs" style={{ color: "#a89d8e" }}>
                              {new Date(blog.publishedDate).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        className="text-lg font-semibold leading-snug mb-3 line-clamp-2 transition-colors duration-200 group-hover:text-[#3d5c35]"
                        style={{ color: "#1e2a1a" }}
                      >
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm leading-relaxed line-clamp-3 mb-5" style={{ color: "#6b6355" }}>
                        {blog.excerpt || "Discover insights into sustainable agriculture, market trends, and the journey of Kenyan produce from farm to table."}
                      </p>

                      {/* Footer / Read More */}
                      <div
                        className="flex items-center justify-between pt-4 -mx-6 -mb-6 lg:-mx-7 lg:-mb-7 px-6 lg:px-7 pb-6 lg:pb-7"
                        style={{ borderTop: "1px solid #f0ebe0" }}
                      >
                        {blog.author ? (
                          <p className="text-xs font-medium truncate mr-4" style={{ color: "#8a7d6e" }}>
                            By {blog.author}
                          </p>
                        ) : (
                          <div />
                        )}
                        <span
                          className="flex items-center gap-1.5 text-xs font-semibold flex-shrink-0 transition-colors duration-200 group-hover:gap-2.5"
                          style={{ color: "#3d5c35" }}
                        >
                          Read
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter / CTA Section ── */}
      <section style={{ background: "#1e2a1a", borderTop: "1px solid rgba(122,173,94,0.1)", borderBottom: "1px solid rgba(122,173,94,0.1)" }}>
        <div className="max-w-3xl mx-auto px-5 lg:px-8 py-20 text-center">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="block w-8 h-px" style={{ background: "#7aad5e" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#7aad5e" }}>
              Stay Updated
            </span>
            <span className="block w-8 h-px" style={{ background: "#7aad5e" }} />
          </div>
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#f5f0e8", letterSpacing: "-0.02em" }}
          >
            Get Farm-Fresh Insights
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#6a7d62", maxWidth: "420px", margin: "0 auto" }}>
            Subscribe to our newsletter for updates on new products, agricultural insights, and partnerships.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-[#7aad5e]/30"
              style={{
                border: "1px solid rgba(122,173,94,0.2)",
                background: "rgba(255,255,255,0.05)",
                color: "#e8f0e0",
              }}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors text-white flex-shrink-0"
              style={{ background: "#3d5c35" }}
            >
              Subscribe
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}