"use client";

import Link from "next/link";
import { getStrapiURL } from "@/lib/strapi";

const HERO_IMAGE = "/uploads/TK_16834_0dfd79ced1.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "92vh", background: "#0e1a0c" }}
    >
      {/* Background image */}
      <img
        src={getStrapiURL(HERO_IMAGE)}
        alt="AgroDakk farm and vegetables"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "60% center", opacity: 0.45 }}
      />

      {/* Left-side vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(14,26,12,0.92) 0%, rgba(14,26,12,0.65) 50%, rgba(14,26,12,0.15) 100%)",
        }}
      />

      {/* Bottom fade into page */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to bottom, transparent, #f7f3ed)" }}
      />

      {/* Content */}
      <div
        className="relative max-w-7xl mx-auto px-5 flex flex-col justify-center"
        style={{ minHeight: "92vh" }}
      >
        <div className="max-w-2xl py-28">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-8 h-px" style={{ background: "#7aad5e" }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#a8cc8c" }}
            >
              From Farm to Global Markets
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-bold leading-[1.05] mb-6"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              color: "#f5f0e8",
              letterSpacing: "-0.03em",
            }}
          >
            Premium produce.
            <br />
            <span style={{ color: "#7aad5e" }}>Kenyan roots.</span>
          </h1>

          {/* Body */}
          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "#c8bfaa", maxWidth: "520px" }}
          >
            Dried vegetables and agricultural products sourced directly from smallholder
            farmers in Kitale — delivering quality, sustainability, and nutrition to
            local and international markets.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap items-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors"
              style={{
                background: "#7aad5e",
                color: "#0e1a0c",
                letterSpacing: "0.02em",
              }}
            >
              Explore Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors"
              style={{
                color: "#e8e0d0",
                border: "1.5px solid rgba(255,255,255,0.2)",
              }}
            >
              Our Story
            </Link>
          </div>

          {/* Trust strip */}
          <div
            className="flex gap-8 mt-16 pt-8 flex-wrap"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { value: "500+", label: "Farmers partnered" },
              { value: "12+", label: "Product lines" },
              { value: "Kenya", label: "Kitale sourced" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-xl font-bold" style={{ color: "#7aad5e" }}>
                  {item.value}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#8a7d6e" }}>
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