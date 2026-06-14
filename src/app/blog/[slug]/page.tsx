import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog } from "@/lib/api";
import { getStrapiURL } from "@/lib/strapi";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await getBlog(slug).catch(() => ({ data: [] }));
  const blog = res.data?.[0];

  if (!blog) notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-green-700 transition">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-green-700 transition">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">{blog.title}</span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            {blog.category && (
              <span className="text-green-700 font-medium">{blog.category}</span>
            )}
            {blog.publishedDate && (
              <>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{new Date(blog.publishedDate).toLocaleDateString("en-US", {
                  year: "numeric", month: "long", day: "numeric",
                })}</span>
              </>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
          {blog.author && <p className="text-gray-500">By {blog.author}</p>}
        </div>

        {blog.coverImage && (
          <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-10 bg-gray-100">
            <img
              src={getStrapiURL(blog.coverImage.url)}
              alt={blog.coverImage.alternativeText || blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-gray-600">
          {Array.isArray(blog.content) ? (
            blog.content.map((block: any, i: number) => (
              <p key={i}>{block.children?.map((c: any) => c.text).join("")}</p>
            ))
          ) : (
            <p>{blog.content}</p>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-green-700 font-medium hover:underline"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Articles
          </Link>
        </div>
      </article>
    </main>
  );
}