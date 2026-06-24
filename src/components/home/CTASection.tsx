import Link from "next/link";
import { getSiteSettings } from "@/lib/api";

export default async function CTASection() {
  let settings = null;
  try {
    const res = await getSiteSettings();
    settings = res?.data;
  } catch (e) {}

  const contactItems = [
    {
      label: "Head Office",
      value: settings?.address || "Kitale, Kenya",
      href: null,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: "Email",
      value: settings?.contactEmail || "info@agrodakk.com",
      href: `mailto:${settings?.contactEmail || "info@agrodakk.com"}`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    ...(settings?.contactPhone
      ? [
          {
            label: "Phone",
            value: settings.contactPhone,
            href: `tel:${settings.contactPhone}`,
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            ),
          },
        ]
      : []),
    {
      label: "Markets",
      value: "Local (Kenya) & International Export",
      href: null,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 overflow-hidden" style={{ background: "#1e2a1a" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px" style={{ background: "#7aad5e" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#7aad5e" }}>
              Let's Work Together
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight"
              style={{ color: "#f0ebe0", letterSpacing: "-0.02em", maxWidth: "560px" }}
            >
              Partner With Us Today
            </h2>
            <p className="text-base leading-relaxed md:max-w-xs" style={{ color: "#7a8f72" }}>
              Looking for premium dried vegetables? We supply bulk orders for local and
              international markets. Let's grow together.
            </p>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Map placeholder */}
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              minHeight: "340px",
              background: "#162012",
              border: "1px solid rgba(122,173,94,0.12)",
            }}
          >
            {/* Subtle grid texture */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(rgba(122,173,94,1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(122,173,94,1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(122,173,94,0.1)", border: "1px solid rgba(122,173,94,0.2)" }}
              >
                <svg className="w-7 h-7" style={{ color: "#7aad5e" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="font-semibold" style={{ color: "#e8f0e0" }}>Kitale, Kenya</p>
                <p className="text-xs mt-1" style={{ color: "#4a6041" }}>Map will be embedded here</p>
              </div>
            </div>
          </div>

          {/* Contact panel */}
          <div
            className="rounded-2xl p-8 lg:p-10 flex flex-col justify-between"
            style={{
              background: "#162012",
              border: "1px solid rgba(122,173,94,0.12)",
            }}
          >
            {/* Contact items */}
            <div className="space-y-0 divide-y" style={{ borderColor: "rgba(122,173,94,0.08)" }}>
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4 py-5 first:pt-0">
                  {/* Icon */}
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(122,173,94,0.08)",
                      color: "#7aad5e",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#4a6041" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm transition-colors"
                        style={{ color: "#a8b8a0" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: "#a8b8a0" }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="flex gap-3 mt-8 pt-8"
              style={{ borderTop: "1px solid rgba(122,173,94,0.1)" }}
            >
              <Link
                href="/contact"
                className="flex-1 text-center text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
                style={{ background: "#3d5c35", color: "#ffffff" }}
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="flex-1 text-center text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
                style={{
                  border: "1.5px solid rgba(122,173,94,0.25)",
                  color: "#a8b8a0",
                }}
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