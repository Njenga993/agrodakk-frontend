import Link from "next/link";
import { getSiteSettings } from "@/lib/api";

export default async function CTASection() {
  let settings = null;
  try {
    const res = await getSiteSettings();
    settings = res?.data;
  } catch (e) {}

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-green-400 uppercase tracking-[0.2em] mb-3">
            Let's Work Together
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Partner With Us Today
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Looking for premium dried vegetables? We supply bulk orders for local and
            international markets. Let's grow together.
          </p>
        </div>

        {/* Map + Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Map */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden h-[320px] lg:h-auto relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-400 font-medium">Kitale, Kenya</p>
                <p className="text-gray-500 text-sm mt-1">Map will be embedded here</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-800 rounded-2xl p-8 lg:p-10 flex flex-col justify-between">
            <div className="space-y-7">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Head Office</h3>
                  <p className="text-gray-400 mt-1">
                    {settings?.address || "Kitale, Kenya"}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Email</h3>
                  <a
                    href={`mailto:${settings?.contactEmail || "info@agrodakk.com"}`}
                    className="text-gray-400 hover:text-green-400 transition-colors mt-1 block"
                  >
                    {settings?.contactEmail || "info@agrodakk.com"}
                  </a>
                </div>
              </div>

              {/* Phone */}
              {settings?.contactPhone && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Phone</h3>
                    <p className="text-gray-400 mt-1">{settings.contactPhone}</p>
                  </div>
                </div>
              )}

              {/* Markets */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Markets</h3>
                  <p className="text-gray-400 mt-1">Local (Kenya) & International Export</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mt-10 pt-8 border-t border-gray-700">
              <Link
                href="/contact"
                className="flex-1 bg-green-600 text-white text-center px-6 py-3 rounded-xl font-semibold hover:bg-green-500 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="flex-1 border border-gray-600 text-gray-300 text-center px-6 py-3 rounded-xl font-semibold hover:border-gray-400 hover:text-white transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}