"use client";

import Link from "next/link";
import { getStrapiURL } from "@/lib/strapi";

const VEGETABLE_IMAGE = "/uploads/image_f93a3adfdf.png";
const CHILLI_IMAGE = "/red_chills.jpg"; // swap with your actual filename under /public

const STATS = [
  { value: "500+", label: "Farmers partnered" },
  { value: "12+",  label: "Product lines"     },
  { value: "Kenya", label: "Kitale sourced"   },
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "92vh", background: "#0e1a0c" }}
    >
      {/* ── SPLIT PANELS ─────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 flex"
        style={{ minHeight: "92vh" }}
      >
        {/* LEFT PANEL — Vegetables */}
        <div className="relative flex-1 overflow-hidden">
          <img
            src={getStrapiURL(VEGETABLE_IMAGE)}
            alt="Fresh vegetables sourced from Kitale farms"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "60% center", opacity: 0.6 }}
          />
          {/* Directional dark wash — left-heavy so headline stays legible */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(14,26,12,0.92) 0%, rgba(14,26,12,0.68) 55%, rgba(14,26,12,0.18) 100%)",
            }}
          />
          {/* Bottom product label */}
          <div
            className="absolute bottom-8 left-0 right-0 flex justify-center"
            style={{ zIndex: 5 }}
          >
            <div
              className="flex items-center gap-2 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(14,26,12,0.70)",
                border: "1px solid rgba(122,173,94,0.30)",
              }}
            >
              <span
                className="block w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#7aad5e" }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#a8cc8c", fontSize: "9px" }}
              >
                Dried Vegetables
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — Dried Chilli */}
        <div className="relative flex-1 overflow-hidden">
          <img
            src={CHILLI_IMAGE}
            alt="Premium dried chilli products"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center", opacity: 0.62 }}
          />
          {/* Warm rust wash — mirrors left panel logic but in the chilli palette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, rgba(48,16,8,0.88) 0%, rgba(48,16,8,0.55) 55%, rgba(48,16,8,0.10) 100%)",
            }}
          />
          {/* Right panel tagline — anchored bottom-left of its panel */}
          <div
            className="absolute inset-0 flex flex-col justify-end"
            style={{ padding: "0 36px 80px", zIndex: 5 }}
          >
            <h2
              className="font-bold leading-tight mb-2"
              style={{
                fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                color: "#f5ede8",
                letterSpacing: "-0.025em",
              }}
            >
              Fiery. Dried.
              <br />
              <span style={{ color: "#c96b3a" }}>Export-ready.</span>
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#c0a898", maxWidth: "220px" }}
            >
              Premium dried chilli varieties — bold flavour, consistent
              heat, packed for global kitchens.
            </p>
          </div>

          {/* Bottom product label */}
          <div
            className="absolute bottom-8 left-0 right-0 flex justify-center"
            style={{ zIndex: 6 }}
          >
            <div
              className="flex items-center gap-2 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(48,16,8,0.70)",
                border: "1px solid rgba(201,107,58,0.30)",
              }}
            >
              <span
                className="block w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#c96b3a" }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#e2a882", fontSize: "9px" }}
              >
                Dried Chilli
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── CENTRE DIVIDER ───────────────────────────────────────────── */}
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          background: "rgba(122,173,94,0.45)",
          zIndex: 20,
        }}
      >
        {/* Badge at midpoint */}
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#0e1a0c",
            border: "1px solid rgba(122,173,94,0.45)",
            borderRadius: "20px",
            padding: "6px 16px",
            whiteSpace: "nowrap",
          }}
        >
          <span
            className="font-semibold tracking-widest uppercase"
            style={{ fontSize: "8px", color: "#7aad5e", letterSpacing: "0.14em" }}
          >
            Two products &middot; One mission
          </span>
        </div>
      </div>

      {/* ── HEADLINE CONTENT (left panel overlay) ───────────────────── */}
      <div
        className="relative max-w-7xl mx-auto px-6 flex flex-col justify-center"
        style={{ minHeight: "92vh", zIndex: 10, pointerEvents: "none" }}
      >
        <div className="max-w-xl py-28" style={{ pointerEvents: "auto" }}>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="block h-px"
              style={{ width: "28px", background: "#7aad5e" }}
            />
            <span
              className="font-semibold uppercase tracking-widest"
              style={{ fontSize: "10px", color: "#a8cc8c", letterSpacing: "0.14em" }}
            >
              From Farm to Global Markets
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-bold leading-none mb-5"
            style={{
              fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
              color: "#f5f0e8",
              letterSpacing: "-0.035em",
              lineHeight: 1.04,
            }}
          >
            Premium produce.
            <br />
            <span style={{ color: "#7aad5e" }}>Kenyan roots.</span>
          </h1>

          {/* Body */}
          <p
            className="leading-relaxed mb-10"
            style={{ fontSize: "15px", color: "#c8bfaa", maxWidth: "480px" }}
          >
            Dried vegetables and agricultural products sourced directly from
            smallholder farmers in Kitale — delivering quality, sustainability,
            and nutrition to local and international markets.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap items-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-semibold rounded-lg transition-colors"
              style={{
                fontSize: "13px",
                padding: "11px 24px",
                background: "#7aad5e",
                color: "#0e1a0c",
                letterSpacing: "0.02em",
              }}
            >
              Explore Products
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center font-semibold rounded-lg transition-colors"
              style={{
                fontSize: "13px",
                padding: "11px 24px",
                color: "#e8e0d0",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              Our Story
            </Link>
          </div>

          {/* Trust stats */}
          <div
            className="flex gap-8 mt-14 pt-8 flex-wrap"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            {STATS.map((item) => (
              <div key={item.label}>
                <div
                  className="font-bold"
                  style={{ fontSize: "18px", color: "#7aad5e" }}
                >
                  {item.value}
                </div>
                <div
                  className="mt-0.5"
                  style={{ fontSize: "10px", color: "#8a7d6e" }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM PAGE FADE ─────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "96px",
          background:
            "linear-gradient(to bottom, transparent 0%, #f7f3ed 100%)",
          zIndex: 15,
        }}
      />
    </section>
  );
}