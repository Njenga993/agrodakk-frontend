"use client";

import Link from "next/link";
import { getStrapiURL } from "@/lib/strapi";

const VEGETABLE_IMAGE = "/uploads/Managu_right_90b0fbbca0.jpeg";
const CHILLI_IMAGE = "/flake_powder.png";

const STATS = [
  { value: "500+", label: "Farmers partnered" },
  { value: "12+",  label: "Product lines"     },
  { value: "Kenya", label: "Kitale sourced"   },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col lg:flex-row"
      style={{ minHeight: "100vh", background: "#0e1a0c" }}
    >
      {/* ── LEFT: Full-bleed vegetable image ─────────────────────────── */}
      <div
        className="relative w-full lg:w-[57%] flex-shrink-0"
        style={{ minHeight: "42vh" }}
      >
        <img
          src={getStrapiURL(VEGETABLE_IMAGE)}
          alt="Fresh vegetables sourced from Kitale farms"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "60% center" }}
        />

        {/* Floating label pinned to bottom-left of image */}
        <div
          className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            background: "rgba(14,26,12,0.78)",
            border: "1px solid rgba(122,173,94,0.30)",
          }}
        >
          <span
            className="block w-1.5 h-1.5 rounded-full"
            style={{ background: "#7aad5e" }}
          />
          <span
            className="font-semibold uppercase"
            style={{ fontSize: "9px", color: "#a8cc8c", letterSpacing: "0.12em" }}
          >
            Dried Vegetables
          </span>
        </div>
      </div>

      {/* ── RIGHT: Cream content panel ───────────────────────────────── */}
      <div
        className="flex-1 flex flex-col justify-center"
        style={{
          background: "#f5f0e8",
          padding: "44px 32px",
        }}
      >
        <div className="lg:px-8 xl:px-14">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="block h-px"
              style={{ width: "28px", background: "#7aad5e" }}
            />
            <span
              className="font-semibold uppercase"
              style={{ fontSize: "10px", color: "#7aad5e", letterSpacing: "0.14em" }}
            >
              From Farm to Global Markets
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-bold leading-none mb-6"
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3.2rem)",
              color: "#1a1612",
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
            }}
          >
            Premium produce.
            <br />
            <span style={{ color: "#7aad5e" }}>Kenyan roots.</span>
          </h1>

          {/* Body */}
          <p
            className="leading-relaxed mb-10"
            style={{ fontSize: "15px", color: "#6b6258", maxWidth: "400px" }}
          >
            Dried vegetables and agricultural products sourced directly from
            smallholder farmers in Kitale — delivering quality, sustainability,
            and nutrition to local and international markets.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap items-center mb-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-semibold rounded-lg transition-colors"
              style={{
                fontSize: "13px",
                padding: "12px 26px",
                background: "#1a1612",
                color: "#f5f0e8",
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
                padding: "12px 26px",
                color: "#1a1612",
                border: "1px solid #d4cdc0",
              }}
            >
              Our Story
            </Link>
          </div>

          {/* ── Chilli product card ──────────────────────────────────── */}
          <div className="mb-10">
            <div
              className="overflow-hidden rounded-lg"
              style={{ height: "250px", maxWidth: "340px" }}
            >
              <img
                src={CHILLI_IMAGE}
                alt="Premium dried chilli products"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2 mt-3">
              <span
                className="block w-1.5 h-1.5 rounded-full"
                style={{ background: "#c96b3a" }}
              />
              <span
                className="font-semibold uppercase"
                style={{ fontSize: "9px", color: "#c96b3a", letterSpacing: "0.12em" }}
              >
                Dried Chilli
              </span>
            </div>

            <p
              className="mt-2 leading-relaxed"
              style={{ fontSize: "13px", color: "#8a7d6e", maxWidth: "280px" }}
            >
              Fiery. Dried. Export-ready. Bold flavour and consistent heat,
              packed for global kitchens.
            </p>
          </div>

          {/* ── Stats row with vertical dividers ─────────────────────── */}
          <div
            className="flex"
            style={{ borderTop: "1px solid #d4cdc0", paddingTop: "24px" }}
          >
            {STATS.map((item, i) => (
              <div
                key={item.label}
                className="flex-1"
                style={
                  i < STATS.length - 1
                    ? {
                        borderRight: "1px solid #d4cdc0",
                        paddingRight: "20px",
                        marginRight: "20px",
                      }
                    : {}
                }
              >
                <div
                  className="font-bold"
                  style={{ fontSize: "20px", color: "#1a1612" }}
                >
                  {item.value}
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontSize: "10px",
                    color: "#8a7d6e",
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}