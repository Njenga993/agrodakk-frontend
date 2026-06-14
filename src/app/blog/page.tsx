import Link from "next/link";
import { getBlogs } from "@/lib/api";
import { getStrapiURL } from "@/lib/strapi";

export default async function BlogPage() {
  let blogs: any[] = [];
  try {
    const res = await getBlogs();
    blogs = res.data || [];
  } catch (e) {}

  return (
    <main>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-green-700 uppercase tracking-[0.2em] mb-4">
              Insights & Stories
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Stories from the farm, market insights, and updates from the world of dried vegetables and sustainable agriculture.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {blogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Articles coming soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog: any) => (
                <Link
                  key={blog.documentId}
                  href={`/blog/${blog.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
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
                      <div className="w-full h-full flex items-center justify-center text-gray-300">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      {blog.category && (
                        <span className="text-green-700 font-medium">{blog.category}</span>
                      )}
                      {blog.publishedDate && (
                        <>
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                          <span>{new Date(blog.publishedDate).toLocaleDateString("en-US", {
                            month: "short", day: "numeric", year: "numeric",
                          })}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                      {blog.excerpt || ""}
                    </p>
                    {blog.author && (
                      <p className="text-sm text-gray-400">By {blog.author}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}