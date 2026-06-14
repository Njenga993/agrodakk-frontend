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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-green-700 uppercase tracking-[0.2em] mb-3">
              Insights
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest from Our Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
          >
            View All Articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog: any) => (
            <Link
              key={blog.documentId}
              href={`/blog/${blog.slug}`}
              className="group flex flex-col md:flex-row gap-6 p-4 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
            >
              <div className="md:w-48 flex-shrink-0">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                  {blog.coverImage ? (
                    <img
                      src={getStrapiURL(blog.coverImage.url)}
                      alt={blog.coverImage.alternativeText || blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : blog.images?.[0] ? (
                    <img
                      src={getStrapiURL(blog.images[0].url)}
                      alt={blog.images[0].alternativeText || blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
                      No Image
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                  {blog.category && (
                    <span className="text-green-700 font-medium">{blog.category}</span>
                  )}
                  {blog.publishedDate && (
                    <>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>{new Date(blog.publishedDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}</span>
                    </>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                  {blog.excerpt || blog.description?.slice(0, 120)}
                </p>
                {blog.author && (
                  <p className="text-sm text-gray-400">By {blog.author}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
          >
            View All Articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}