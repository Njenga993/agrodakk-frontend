import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog, getBlogs } from "@/lib/api";
import { getStrapiURL } from "@/lib/strapi";

// Add this function for static generation
export async function generateStaticParams() {
  const res = await getBlogs().catch(() => ({ data: [] }));
  const blogs = res.data || [];
  
  return blogs.map((blog: any) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await getBlog(slug).catch(() => ({ data: [] }));
  const blog = res.data?.[0];

  if (!blog) notFound();

  const coverImageUrl = blog.coverImage?.url || blog.images?.[0]?.url;
  const coverImageAlt =
    blog.coverImage?.alternativeText ||
    blog.images?.[0]?.alternativeText ||
    blog.title;

  return (
    <main style={{ background: "#f7f3ed" }}>
      {/* ── Cinematic Hero Banner ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "480px", background: "#0e1a0c" }}
      >
        {coverImageUrl && (
          <img
            src={getStrapiURL(coverImageUrl)}
            alt={coverImageAlt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.4, objectPosition: "center 30%" }}
          />
        )}
        {/* Left vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: coverImageUrl
              ? "linear-gradient(to right, rgba(14,26,12,0.95) 0%, rgba(14,26,12,0.6) 55%, rgba(14,26,12,0.15) 100%)"
              : "linear-gradient(to right, rgba(14,26,12,1) 0%, rgba(14,26,12,0.95) 100%)",
          }}
        />
        {/* Bottom fade to cream */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: "linear-gradient(to bottom, transparent, #f7f3ed)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 w-full pb-24 pt-40">
          {/* Breadcrumbs */}
          <nav
            className="flex items-center gap-2 text-xs mb-8"
            style={{ color: "#6a7d62" }}
          >
            <Link
              href="/"
              className="hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-white transition-colors duration-200"
            >
              Blog
            </Link>
            <span>/</span>
            <span
              className="truncate max-w-[200px] sm:max-w-none"
              style={{ color: "#a8cc8c" }}
            >
              {blog.title}
            </span>
          </nav>

          {/* Meta Row */}
          <div className="flex items-center gap-3 mb-5">
            {blog.category && (
              <span
                className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded"
                style={{
                  color: "#a8cc8c",
                  background: "rgba(122,173,94,0.15)",
                  border: "1px solid rgba(122,173,94,0.2)",
                }}
              >
                {blog.category}
              </span>
            )}
            {blog.publishedDate && (
              <span className="text-xs" style={{ color: "#6a7d62" }}>
                {new Date(blog.publishedDate).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </span>
            )}
          </div>

          {/* Title */}
          <h1
            className="font-bold leading-[1.1] mb-6"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              color: "#f5f0e8",
              letterSpacing: "-0.03em",
            }}
          >
            {blog.title}
          </h1>

          {/* Author */}
          {blog.author && (
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: "rgba(122,173,94,0.2)",
                  color: "#7aad5e",
                }}
              >
                {blog.author.charAt(0).toUpperCase()}
              </div>
              <div>
                <p
                  className="text-sm font-medium"
                  style={{ color: "#e8f0e0" }}
                >
                  {blog.author}
                </p>
                <p className="text-xs" style={{ color: "#4a6041" }}>
                  AgroDakk Foods
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Article Content ── */}
      <section
        className="py-16 md:py-24"
        style={{ background: "#f7f3ed" }}
      >
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          {/* White "Paper" Card */}
          <div
            className="rounded-2xl p-8 md:p-12 lg:p-16"
            style={{
              background: "#ffffff",
              border: "1px solid #e4ddd2",
            }}
          >
            {/* Rich Text / Prose Area */}
            <div
              className="prose prose-lg max-w-none leading-relaxed"
              style={{ color: "#5a5347" }}
            >
              {/* Custom styles to override default Tailwind prose colors to match our warm palette */}
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
                .prose code {
                  background: #f7f3ed;
                  color: #3d5c35;
                  padding: 0.2em 0.4em;
                  border-radius: 0.25rem;
                  font-size: 0.9em;
                }
              `}</style>

              {Array.isArray(blog.content) ? (
                blog.content.map((block: any, i: number) => {
                  // Handle different block types if they exist, fallback to text extraction
                  if (block.type === "paragraph" || !block.type) {
                    return (
                      <p key={i}>
                        {block.children
                          ?.map((c: any) => c.text)
                          .join("")}
                      </p>
                    );
                  }
                  if (
                    block.type === "heading" &&
                    block.level === 2
                  ) {
                    return (
                      <h2 key={i}>
                        {block.children
                          ?.map((c: any) => c.text)
                          .join("")}
                      </h2>
                    );
                  }
                  if (
                    block.type === "heading" &&
                    block.level === 3
                  ) {
                    return (
                      <h3 key={i}>
                        {block.children
                          ?.map((c: any) => c.text)
                          .join("")}
                      </h3>
                    );
                  }
                  // Fallback for unknown blocks
                  return (
                    <p key={i}>
                      {block.children
                        ?.map((c: any) => c.text)
                        .join("")}
                    </p>
                  );
                })
              ) : (
                <p>{blog.content}</p>
              )}
            </div>
          </div>

          {/* Back Navigation */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/blog"
              className="
                group inline-flex items-center gap-2.5 text-sm font-semibold 
                px-6 py-3 rounded-full transition-all duration-200
                hover:shadow-sm
              "
              style={{
                background: "#ffffff",
                color: "#3d5c35",
                border: "1px solid #e4ddd2",
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
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}