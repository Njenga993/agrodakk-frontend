import Link from "next/link";
import { getFeaturedBlogs } from "@/lib/api";
import { getStrapiURL } from "@/lib/strapi";

export default async function FeaturedBlogs() {
  let blogs: any[] = [];
  try {
    const res = await getFeaturedBlogs();
    blogs = res.data || [];
  } catch (e) {
    console.log("Blogs loading...");
  }

  if (blogs.length === 0) return null;

  return (
    <section className="py-16 md:py-24" style={{ background: "#f7f3ed" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px" style={{ background: "#7aad5e" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a6741" }}>
                Insights & Stories
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#1e2a1a", letterSpacing: "-0.02em" }}
            >
              Latest from Our Blog
            </h2>
          </div>
          
          <Link
            href="/blog"
            className="group hidden md:inline-flex items-center gap-2.5 text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-sm"
            style={{ 
              background: "#ffffff", 
              color: "#3d5c35", 
              border: "1px solid #e4ddd2" 
            }}
          >
            View All Articles
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog: any) => {
            const imageUrl = blog.coverImage?.url || blog.images?.[0]?.url;
            const imageAlt = blog.coverImage?.alternativeText || blog.images?.[0]?.alternativeText || blog.title;

            return (
              <Link
                key={blog.documentId}
                href={`/blog/${blog.slug}`}
                className="group flex flex-col sm:flex-row gap-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg"
                style={{ background: "#ffffff", border: "1px solid #e4ddd2" }}
              >
                {/* Image */}
                <div className="sm:w-48 flex-shrink-0">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden" style={{ background: "#faf8f5" }}>
                    {imageUrl ? (
                      <img
                        src={getStrapiURL(imageUrl)}
                        alt={imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-8 h-8" style={{ color: "#d0c8b8" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2.5 min-h-[20px]">
                    {blog.category && (
                      <span
                        className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
                        style={{ color: "#3d5c35", background: "#f7f3ed" }}
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
                  
                  <h3
                    className="text-lg font-semibold leading-snug line-clamp-2 mb-2 transition-colors duration-200 group-hover:text-[#3d5c35]"
                    style={{ color: "#1e2a1a" }}
                  >
                    {blog.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed line-clamp-2 mb-3" style={{ color: "#6b6355" }}>
                    {blog.excerpt || "Discover insights into sustainable agriculture and the journey of Kenyan produce."}
                  </p>
                  
                  {blog.author && (
                    <p className="text-xs font-medium" style={{ color: "#a89d8e" }}>
                      By {blog.author}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2.5 text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-sm"
            style={{ 
              background: "#ffffff", 
              color: "#3d5c35", 
              border: "1px solid #e4ddd2" 
            }}
          >
            View All Articles
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}