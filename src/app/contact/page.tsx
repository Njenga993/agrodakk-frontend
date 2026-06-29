import { getSiteSettings } from "@/lib/api";
import { getStrapiURL } from "@/lib/strapi";

const CONTACT_HERO_IMAGE = "/uploads/image_199c3b1658.png";

export default async function ContactPage() {
  let settings = null;
  try {
    const res = await getSiteSettings();
    settings = res?.data;
  } catch (e) {}

  const email = settings?.contactEmail || "info@agrodakk.com";
  const phone = settings?.contactPhone || null;

  const pathways = [
    {
      title: "Place an Order",
      description:
        "Bulk purchases of dried vegetables or chilli products for retail, distribution, or food service.",
      action: "Email Our Sales Team",
      subject: "Bulk Order Inquiry",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      accent: "#7aad5e",
    },
    {
      title: "Partnership Inquiry",
      description:
        "Distribution partnerships, joint ventures, or supply chain collaboration opportunities.",
      action: "Discuss a Partnership",
      subject: "Partnership Inquiry",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
      accent: "#c96b3a",
    },
    {
      title: "Farmer Registration",
      description:
        "Join our network of smallholder farmers in Kitale and gain access to ready markets.",
      action: "Register as a Farmer",
      subject: "Farmer Registration",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m-8-9H3m18 0h-1M5.636 5.636l-.707-.707M19.071 19.071l-.707-.707M5.636 18.364l-.707.707M19.071 4.929l-.707.707"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8a4 4 0 100 8 4 4 0 000-8z"
          />
        </svg>
      ),
      accent: "#7aad5e",
    },
    {
      title: "General Inquiry",
      description:
        "Questions about our products, sourcing practices, certifications, or anything else.",
      action: "Send a General Inquiry",
      subject: "General Inquiry",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      accent: "#6b8a60",
    },
  ];

  const contactItems = [
    {
      label: "Head Office",
      value: settings?.address || "Kitale, Kenya",
      href: null,
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    ...(phone
      ? [
          {
            label: "Phone",
            value: phone,
            href: `tel:${phone}`,
            icon: (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
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
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const hours = [
    { day: "Monday — Friday", time: "8:00 AM — 5:00 PM", closed: false },
    { day: "Saturday", time: "9:00 AM — 1:00 PM", closed: false },
    { day: "Sunday", time: "Closed", closed: true },
  ];

  return (
    <main style={{ background: "#f7f3ed" }}>
      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "480px", background: "#0e1a0c" }}
      >
        <img
          src={getStrapiURL(CONTACT_HERO_IMAGE)}
          alt="Contact AgroDakk"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.35, objectPosition: "center 40%" }}
        />
        {/* Solid overlay instead of gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(14,26,12,0.72)" }}
        />
        {/* Bottom transition */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "#f7f3ed" }}
        />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full pb-24 pt-40">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="block w-8 h-px"
              style={{ background: "#7aad5e" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#a8cc8c" }}
            >
              Get In Touch
            </span>
          </div>
          <h1
            className="font-bold leading-[1.05] mb-6"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              color: "#f5f0e8",
              letterSpacing: "-0.03em",
              maxWidth: "620px",
            }}
          >
            Let's start a
            <br />
            <span style={{ color: "#7aad5e" }}>conversation.</span>
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#c8bfaa", maxWidth: "480px" }}
          >
            Whether you have an inquiry about our products, want to place an
            order, or explore a partnership.
          </p>
        </div>
      </section>

      {/* ── Inquiry Pathways ── */}
      <section className="py-20" style={{ background: "#f7f3ed" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Section header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="block w-6 h-px"
                style={{ background: "#7aad5e" }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#4a6741" }}
              >
                How Can We Help?
              </span>
            </div>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "#1e2a1a",
                letterSpacing: "-0.02em",
              }}
            >
              Choose the right channel for your inquiry.
            </h2>
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "#8a7d6e", maxWidth: "520px" }}
            >
              Each pathway connects you directly with the right team and
              pre-fills your email subject so we can respond faster.
            </p>
          </div>

          {/* Pathway cards — 2x2 grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pathways.map((p) => (
              <a
                key={p.title}
                href={`mailto:${email}?subject=${encodeURIComponent(p.subject)}`}
                className="group block rounded-2xl p-7 lg:p-8 transition-colors"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e4ddd2",
                  borderLeft: `3px solid ${p.accent}`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${p.accent}12`,
                      color: p.accent,
                    }}
                  >
                    {p.icon}
                  </div>
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-1 transition-transform group-hover:translate-x-0.5"
                    style={{ color: "#c8c0b4" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                <h3
                  className="font-bold mt-5 mb-2"
                  style={{
                    fontSize: "17px",
                    color: "#1e2a1a",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#8a7d6e" }}
                >
                  {p.description}
                </p>

                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: p.accent, letterSpacing: "0.06em" }}
                >
                  {p.action}
                  <svg
                    className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          {/* Response expectation note */}
          <div
            className="mt-8 flex items-center gap-3 px-5 py-4 rounded-xl"
            style={{
              background: "#ffffff",
              border: "1px solid #e4ddd2",
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "#7aad5e12", color: "#7aad5e" }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-sm" style={{ color: "#6b6355" }}>
              <span className="font-semibold" style={{ color: "#1e2a1a" }}>
                Typical response within 24 hours
              </span>{" "}
              during business days. For urgent orders, call us directly.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Details + Hours ── */}
      <section
        className="pb-20"
        style={{ background: "#f7f3ed" }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6 items-start">
            {/* Contact information — 3 cols */}
            <div
              className="lg:col-span-3 rounded-2xl overflow-hidden"
              style={{ border: "1px solid #e4ddd2" }}
            >
              {/* Dark header */}
              <div
                className="px-8 py-5"
                style={{
                  background: "#1e2a1a",
                  borderBottom: "1px solid rgba(122,173,94,0.1)",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#7aad5e" }}
                >
                  Contact Information
                </p>
                <p className="text-sm mt-1" style={{ color: "#6a7d62" }}>
                  Reach us directly through any channel below.
                </p>
              </div>

              {/* Items */}
              <div
                className="divide-y"
                style={{
                  background: "#162012",
                  borderColor: "rgba(122,173,94,0.08)",
                }}
              >
                {contactItems.map((item, i) => {
                  const inner = (
                    <div className="flex items-start gap-4 px-8 py-5">
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
                        <p
                          className="text-[10px] font-semibold uppercase tracking-wider mb-0.5"
                          style={{ color: "#4a6041" }}
                        >
                          {item.label}
                        </p>
                        <p className="text-sm" style={{ color: "#a8b8a0" }}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={i}
                      href={item.href}
                      className="block transition-colors hover:bg-white/5"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={i}
                      style={{ borderColor: "rgba(122,173,94,0.08)" }}
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Business hours — 2 cols */}
            <div
              className="lg:col-span-2 rounded-2xl p-7"
              style={{ background: "#ffffff", border: "1px solid #e4ddd2" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="block w-5 h-px"
                  style={{ background: "#7aad5e" }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#4a6741" }}
                >
                  Business Hours
                </span>
              </div>
              <div
                className="space-y-0 divide-y"
                style={{ borderColor: "#f0ebe0" }}
              >
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-3"
                  >
                    <span className="text-sm" style={{ color: "#6b6355" }}>
                      {h.day}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: h.closed ? "#b0a898" : "#1e2a1a",
                      }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ color: "#a89d8e" }}>
                East Africa Time (EAT, UTC+3)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section
        className="relative overflow-hidden"
        style={{ height: "380px", background: "#162012" }}
      >
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
            style={{
              background: "rgba(122,173,94,0.1)",
              border: "1px solid rgba(122,173,94,0.2)",
            }}
          >
            <svg
              className="w-7 h-7"
              style={{ color: "#7aad5e" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="text-center">
            <p
              className="font-semibold"
              style={{ color: "#e8f0e0" }}
            >
              Kitale, Kenya
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: "#4a6041" }}
            >
              Map integration available
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}