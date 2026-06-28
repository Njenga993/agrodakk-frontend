import { getSiteSettings } from "@/lib/api";
import { getStrapiURL } from "@/lib/strapi";

const CONTACT_HERO_IMAGE = "/uploads/image_199c3b1658.png";

export default async function ContactPage() {
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
        style={{ minHeight: "520px", background: "#0e1a0c" }}
      >
        <img
          src={getStrapiURL(CONTACT_HERO_IMAGE)}
          alt="Contact AgroDakk"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.4, objectPosition: "center 40%" }}
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
          <p className="text-lg leading-relaxed" style={{ color: "#c8bfaa", maxWidth: "480px" }}>
            Whether you have an inquiry about our products, want to place an order, or explore
            a partnership — we're here to help.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-24" style={{ background: "#f7f3ed" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* ── Form — 3 cols ── */}
            <div
              className="lg:col-span-3 rounded-2xl p-8 lg:p-10"
              style={{ background: "#ffffff", border: "1px solid #e4ddd2" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="block w-6 h-px" style={{ background: "#7aad5e" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a6741" }}>
                  Message Us
                </span>
              </div>
              <h2
                className="text-2xl font-bold mb-1"
                style={{ color: "#1e2a1a", letterSpacing: "-0.02em" }}
              >
                Send Us a Message
              </h2>
              <p className="text-sm mb-8" style={{ color: "#8a7d6e" }}>
                We'll get back to you within 24 hours.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: "#6b6355" }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                      style={{
                        border: "1px solid #e4ddd2",
                        background: "#faf8f5",
                        color: "#1e2a1a",
                      }}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: "#6b6355" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                      style={{
                        border: "1px solid #e4ddd2",
                        background: "#faf8f5",
                        color: "#1e2a1a",
                      }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "#6b6355" }}
                  >
                    Subject
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{
                      border: "1px solid #e4ddd2",
                      background: "#faf8f5",
                      color: "#1e2a1a",
                    }}
                  >
                    <option value="">Select a topic</option>
                    <option value="order">Product Order / Bulk Purchase</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="farmer">Farmer Registration</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "#6b6355" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                    style={{
                      border: "1px solid #e4ddd2",
                      background: "#faf8f5",
                      color: "#1e2a1a",
                    }}
                    placeholder="Tell us about your inquiry, order requirements, or partnership idea..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 text-white text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors"
                  style={{ background: "#3d5c35" }}
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>

            {/* ── Sidebar — 2 cols ── */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              {/* Contact details */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid #e4ddd2" }}
              >
                <div
                  className="px-8 py-5"
                  style={{ background: "#1e2a1a", borderBottom: "1px solid rgba(122,173,94,0.1)" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#7aad5e" }}>
                    Contact Information
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#6a7d62" }}>
                    Reach us directly through any channel below.
                  </p>
                </div>

                <div
                  className="divide-y"
                  style={{ background: "#162012", borderColor: "rgba(122,173,94,0.08)" }}
                >
                  {contactItems.map((item, i) => {
                    const inner = (
                      <div className="flex items-start gap-4 px-8 py-5">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "rgba(122,173,94,0.08)", color: "#7aad5e" }}
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
                      <a key={i} href={item.href} className="block transition-colors hover:bg-white/5">
                        {inner}
                      </a>
                    ) : (
                      <div key={i} style={{ borderColor: "rgba(122,173,94,0.08)" }}>
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Business hours */}
              <div
                className="rounded-2xl p-7"
                style={{ background: "#ffffff", border: "1px solid #e4ddd2" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="block w-5 h-px" style={{ background: "#7aad5e" }} />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "#4a6741" }}
                  >
                    Business Hours
                  </span>
                </div>
                <div className="space-y-0 divide-y" style={{ borderColor: "#f0ebe0" }}>
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center py-3">
                      <span className="text-sm" style={{ color: "#6b6355" }}>
                        {h.day}
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: h.closed ? "#b0a898" : "#1e2a1a" }}
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
        </div>
      </section>

      {/* ── Map ── */}
      <section
        className="relative overflow-hidden"
        style={{ height: "380px", background: "#162012" }}
      >
        {/* grid texture */}
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
            <p className="text-xs mt-1" style={{ color: "#4a6041" }}>Map integration available</p>
          </div>
        </div>
      </section>

    </main>
  );
}