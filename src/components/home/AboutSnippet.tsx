"use client";

import Link from "next/link";
import { useState } from "react";
import { getStrapiURL } from "@/lib/strapi";

interface AboutSnippetProps {
  siteName?: string;
}

const images = [
  { src: "/uploads/image_f93a3adfdf.png", alt: "Seedings of the vegetables" },
  { src: "/uploads/TK_16872_0e61895da7.jpg", alt: "vegetables ready for processing" },
  { src: "/uploads/Managu_right_90b0fbbca0.jpeg", alt: "Packed products ready for export" },
];

const stats = [
  { value: "500+", label: "Farmers Supported" },
  { value: "12+", label: "Product Lines" },
  { value: "8 yrs", label: "In Agribusiness" },
];

export default function AboutSnippet({ siteName = "AgroDakk Foods" }: AboutSnippetProps) {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: "#f7f3ed" }} className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="block w-10 h-px" style={{ background: "#7aad5e" }} />
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#4a6741" }}
          >
            About {siteName}
          </span>
        </div>

        {/* Main asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 items-stretch">

          {/* ── Left: Big image with thumbnail switcher ── */}
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "520px" }}>
            {/* Main image */}
            {images.map((img, i) => (
              <img
                key={i}
                src={getStrapiURL(img.src)}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                style={{ opacity: active === i ? 1 : 0 }}
              />
            ))}

            {/* Dark scrim at bottom */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(20,30,15,0.65) 0%, transparent 55%)",
              }}
            />

            {/* Bottom: caption + thumbnails */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
              <p className="text-white text-sm font-medium" style={{ opacity: 0.9 }}>
                {images[active].alt}
              </p>

              {/* Thumbnails */}
              <div className="flex gap-2 flex-shrink-0">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="rounded-lg overflow-hidden transition-all duration-300"
                    style={{
                      width: "52px",
                      height: "52px",
                      border: active === i ? "2px solid #7aad5e" : "2px solid rgba(255,255,255,0.3)",
                      opacity: active === i ? 1 : 0.65,
                      transform: active === i ? "scale(1.08)" : "scale(1)",
                    }}
                    aria-label={img.alt}
                  >
                    <img
                      src={getStrapiURL(img.src)}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Text panel ── */}
          <div
            className="rounded-2xl flex flex-col justify-between p-10"
            style={{ background: "#ffffff" }}
          >
            {/* Top: heading + body */}
            <div>
              <h2
                className="text-3xl xl:text-4xl font-bold leading-tight mb-6"
                style={{ color: "#1e2a1a", letterSpacing: "-0.02em" }}
              >
                Rooted in Kenya.
                <br />
                <span style={{ color: "#3d5c35" }}>Built for the World.</span>
              </h2>

              <p className="text-base leading-relaxed mb-4" style={{ color: "#5a5347" }}>
                {siteName} Ltd is a Kenyan agribusiness dedicated to producing and supplying
                high-quality agricultural products for local and international markets. Based
                in Kitale, we partner with smallholder farmers to promote sustainable
                agriculture and inclusive market access.
              </p>

              <p className="text-base leading-relaxed" style={{ color: "#5a5347" }}>
                Committed to quality, integrity, and innovation — connecting farmers
                to global opportunities, one harvest at a time.
              </p>
            </div>

            {/* Middle: Stats */}
            <div
              className="grid grid-cols-3 gap-4 py-8 my-8"
              style={{ borderTop: "1px solid #e8e0d4", borderBottom: "1px solid #e8e0d4" }}
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "#3d5c35" }}>
                    {s.value}
                  </div>
                  <div className="text-xs mt-1 leading-tight" style={{ color: "#8a7d6e" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom: CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/about"
                className="flex-1 flex items-center justify-center gap-2 text-white text-sm font-semibold py-3 px-5 rounded-lg transition-colors"
                style={{ background: "#3d5c35", letterSpacing: "0.02em" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = "#2e4528")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = "#3d5c35")
                }
              >
                Our Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center text-sm font-semibold py-3 px-5 rounded-lg transition-colors"
                style={{
                  color: "#3d5c35",
                  border: "1.5px solid #b0c9a0",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#f4f8f1";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#3d5c35";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#b0c9a0";
                }}
              >
                Partner With Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}