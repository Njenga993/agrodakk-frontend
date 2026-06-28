import Link from "next/link";
import { getSiteSettings } from "@/lib/api";
import { getStrapiURL } from "@/lib/strapi";

const ABOUT_HERO_IMAGE = "/uploads/image_f93a3adfdf.png";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "2,000+", label: "Happy Customers" },
  { value: "50+", label: "Local Partners" },
  { value: "10+", label: "International Partners" },
];

const values = [
  {
    title: "Quality First",
    description:
      "Every product undergoes rigorous quality checks to ensure it meets international food safety standards before reaching our customers.",
  },
  {
    title: "Sustainable Farming",
    description:
      "We work hand-in-hand with smallholder farmers to promote environmentally responsible agricultural practices that preserve the land.",
  },
  {
    title: "Farmer Empowerment",
    description:
      "By providing fair prices, training, and direct market access, we help farming communities build sustainable livelihoods.",
  },
  {
    title: "Global Reach",
    description:
      "From Kitale to the world — we connect Kenyan farmers to international markets while maintaining traceability and transparency.",
  },
];

const timeline = [
  { year: "2014", title: "Founded", desc: "AgroDakk Foods established in Kitale, Kenya with a vision to connect farmers to markets." },
  { year: "2016", title: "First Export", desc: "Began exporting dried vegetables to regional East African markets." },
  { year: "2019", title: "Farmer Network", desc: "Built a network of 50+ smallholder farming partners across Trans Nzoia County." },
  { year: "2022", title: "International Growth", desc: "Expanded operations to serve international markets across multiple continents." },
  { year: "2025", title: "Scaling Impact", desc: "Over 2,000 customers served globally with plans for continued expansion." },
];

export default async function AboutPage() {
  let siteName = "AgroDakk Foods";
  try {
    const settings = await getSiteSettings();
    siteName = settings?.data?.siteName || "AgroDakk Foods";
  } catch (e) {}

  return (
    <main style={{ background: "#f7f3ed" }}>

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "580px", background: "#0e1a0c" }}
      >
        <img
          src={getStrapiURL(ABOUT_HERO_IMAGE)}
          alt="AgroDakk farm"
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
              About Us
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
            Connecting farmers to
            <br />
            <span style={{ color: "#7aad5e" }}>global opportunities.</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#c8bfaa", maxWidth: "500px" }}>
            {siteName} Ltd is a Kenyan agribusiness dedicated to producing and supplying
            premium dried vegetables to local and international markets.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-24" style={{ background: "#f7f3ed" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div className="relative">
              <div
                className="aspect-[4/5] rounded-2xl overflow-hidden"
                style={{ background: "#e4ddd2" }}
              >
                <img
                  src={getStrapiURL(ABOUT_HERO_IMAGE)}
                  alt="AgroDakk operations"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Offset border decoration */}
              <div
                className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl -z-10"
                style={{ border: "2px solid #c8dbb8" }}
              />
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px" style={{ background: "#7aad5e" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a6741" }}>
                  Our Story
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-8"
                style={{ color: "#1e2a1a", letterSpacing: "-0.02em" }}
              >
                Rooted in Nature,
                <br />
                <span style={{ color: "#3d5c35" }}>Committed to You.</span>
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#5a5347" }}>
                <p>
                  Based in Kitale, Kenya — the heart of the country's agricultural region — we work
                  closely with smallholder farmers to source the finest dried vegetables. Our supply
                  chain is built on trust, transparency, and shared prosperity.
                </p>
                <p>
                  Every product that leaves our facility is carefully sorted, naturally dried, and
                  packed to preserve nutrients and flavor. We are committed to quality, integrity,
                  and innovation at every step.
                </p>
                <p>
                  Our vision is clear: connect farmers to the world while delivering products that
                  meet the highest standards of safety and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ background: "#1e2a1a", borderTop: "1px solid rgba(122,173,94,0.1)", borderBottom: "1px solid rgba(122,173,94,0.1)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-8 px-6 text-center"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid rgba(122,173,94,0.12)" : "none",
                }}
              >
                <div
                  className="text-4xl md:text-5xl font-bold tabular-nums leading-none mb-2"
                  style={{ color: "#7aad5e", letterSpacing: "-0.03em" }}
                >
                  {stat.value}
                </div>
                <span className="block w-1 h-1 rounded-full my-2" style={{ background: "#7aad5e" }} />
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#6a7d62" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24" style={{ background: "#f7f3ed" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px" style={{ background: "#7aad5e" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a6741" }}>
                What Drives Us
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#1e2a1a", letterSpacing: "-0.02em" }}
            >
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px" style={{ background: "#e4ddd2" }}>
            {values.map((value, i) => (
              <div
                key={i}
                className="p-10"
                style={{ background: "#f7f3ed" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-6 text-sm font-bold"
                  style={{ background: "rgba(61,92,53,0.08)", color: "#3d5c35" }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: "#1e2a1a" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b6355" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px" style={{ background: "#7aad5e" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a6741" }}>
                Our Journey
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#1e2a1a", letterSpacing: "-0.02em" }}
            >
              From Farm to Global Markets
            </h2>
          </div>

          <div className="max-w-3xl">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-10 pb-12 last:pb-0">
                {/* Vertical line */}
                {i < timeline.length - 1 && (
                  <div
                    className="absolute left-[22px] top-12 bottom-0 w-px"
                    style={{ background: "#e4ddd2" }}
                  />
                )}

                {/* Year badge */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center z-10 relative text-[11px] font-bold"
                    style={{
                      background: i === timeline.length - 1 ? "#3d5c35" : "#f7f3ed",
                      border: `2px solid ${i === timeline.length - 1 ? "#3d5c35" : "#c8dbb8"}`,
                      color: i === timeline.length - 1 ? "#ffffff" : "#3d5c35",
                    }}
                  >
                    {item.year}
                  </div>
                </div>

                <div className="pt-2 pb-2">
                  <h3 className="text-base font-semibold mb-1" style={{ color: "#1e2a1a" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b6355" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Quote ── */}
      <section className="py-24" style={{ background: "#1e2a1a" }}>
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <span className="block w-8 h-px" style={{ background: "#7aad5e" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#7aad5e" }}>
              Our Mission
            </span>
            <span className="block w-8 h-px" style={{ background: "#7aad5e" }} />
          </div>
          <blockquote
            className="text-xl md:text-2xl font-medium leading-relaxed text-center"
            style={{ color: "#e8f0e0" }}
          >
            "To empower smallholder farmers through sustainable agriculture, value addition, and
            direct access to global markets — while delivering premium quality dried vegetables
            to customers worldwide."
          </blockquote>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: "#f7f3ed" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div
            className="rounded-2xl px-10 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
            style={{ background: "#ffffff", border: "1px solid #e4ddd2" }}
          >
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ color: "#1e2a1a", letterSpacing: "-0.02em" }}
              >
                Let's Work Together
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#6b6355", maxWidth: "420px" }}>
                Whether you're a farmer looking to partner with us, or a buyer seeking premium dried
                vegetables, we'd love to hear from you.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors text-white"
                style={{ background: "#3d5c35" }}
              >
                Get In Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors"
                style={{ border: "1.5px solid #b0c9a0", color: "#3d5c35" }}
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}