
'use client'

import Link from "next/link";
import { getStrapiURL } from "@/lib/strapi";

const LOGO_URL     = getStrapiURL("/uploads/logo_all_f2a38cd5c8.jpeg");
const CHILLI_IMAGE = "/flake_powder.png"; // swap with your actual filename under /public

const quickLinks = [
  { href: "/",         label: "Home"      },
  { href: "/about",    label: "About Us"  },
  { href: "/products", label: "Products"  },
  { href: "/blog",     label: "Blog"      },
  { href: "/contact",  label: "Contact"   },
];

const products = [
  "Dried Managu",
  "Dried Saga",
  "Dried Kunde",
  "Dried Red Chillies Flakes",
  "Dried Red Chillies Powder",
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#0b1509" }}>

      {/* ── Chilli background image — full bleed, very low opacity ── */}
      <img
        src={CHILLI_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ objectPosition: "center 40%", opacity: 0.7 }}
      />

      {/* ── Dark overlay to keep text readable ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(11,21,9,0.82)" }}
      />

      {/* ── Top dual-tone accent bar ── */}
      <div className="relative flex" style={{ height: "3px" }}>
        <div className="flex-1" style={{ background: "rgba(122,173,94,0.55)" }} />
        <div className="flex-1" style={{ background: "rgba(185,85,40,0.55)" }} />
      </div>

      {/* ── Product identity strip ── */}
      <div
        className="relative"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex items-center justify-center gap-10 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span
              className="block w-1.5 h-1.5 rounded-full"
              style={{ background: "#7aad5e" }}
            />
            <span
              className="font-semibold uppercase tracking-widest"
              style={{ fontSize: "9px", color: "#7aad5e" }}
            >
              Dried Vegetables
            </span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "10px" }}>/</span>
          <div className="flex items-center gap-2.5">
            <span
              className="block w-1.5 h-1.5 rounded-full"
              style={{ background: "#c96b3a" }}
            />
            <span
              className="font-semibold uppercase tracking-widest"
              style={{ fontSize: "9px", color: "#c96b3a" }}
            >
              Dried Chilli
            </span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "10px" }}>/</span>
          <span
            className="font-medium uppercase tracking-widest"
            style={{ fontSize: "9px", color: "rgba(255,255,255,0.28)" }}
          >
            Kitale, Kenya &mdash; From Farm to Global Markets
          </span>
        </div>
      </div>

      {/* ── Main body ── */}
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand — 4 cols */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div
                className="flex items-center justify-center rounded-xl overflow-hidden"
                style={{
                  width      : "80px",
                  height     : "80px",
                  background : "rgba(255,255,255,0.96)",
                }}
              >
                <img
                  src={LOGO_URL}
                  alt="AgroDakk Foods"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            <p
              className="text-sm leading-relaxed mb-5 max-w-xs"
              style={{ color: "#6a7d62" }}
            >
              Premium dried vegetables and chilli products sourced directly
              from Kenyan smallholder farmers. From farm to global markets
              &mdash; quality you can trust.
            </p>

            <p
              className="text-xs font-semibold uppercase tracking-widest mb-7"
              style={{ color: "#3d5c35", letterSpacing: "0.12em" }}
            >
              Rooted in Nature, Committed to You
            </p>

            {/* Socials */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center justify-center rounded-lg transition-colors duration-200"
                  style={{
                    width      : "36px",
                    height     : "36px",
                    background : "rgba(122,173,94,0.07)",
                    color      : "#6a7d62",
                    border     : "1px solid rgba(122,173,94,0.14)",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links — 2 cols */}
          <div className="lg:col-span-2">
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#7aad5e", letterSpacing: "0.12em" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#6a7d62" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products — 3 cols */}
          <div className="lg:col-span-3">
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#7aad5e", letterSpacing: "0.12em" }}
            >
              Our Products
            </h4>
            <ul className="space-y-3.5">
              {products.map((product) => (
                <li key={product} className="flex items-center gap-2">
                  {/* Dot colour hints at which category */}
                  <span
                    className="block w-1 h-1 rounded-full flex-shrink-0"
                    style={{
                      background: product.toLowerCase().includes("chill")
                        ? "#c96b3a"
                        : "#3d5c35",
                    }}
                  />
                  <Link
                    href="/products"
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#6a7d62" }}
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 3 cols */}
          <div className="lg:col-span-3">
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#7aad5e", letterSpacing: "0.12em" }}
            >
              Contact
            </h4>
            <ul className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  content: <span>Kitale, Kenya</span>,
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  content: (
                    <a href="mailto:agrodakk@gmail.com" style={{ color: "#6a7d62" }}>
                      agrodakk@gmail.com
                    </a>
                  ),
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  content: <span>Local &amp; International Markets</span>,
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0" style={{ color: "#3d5c35" }}>
                    {item.icon}
                  </span>
                  <span className="text-sm" style={{ color: "#6a7d62" }}>
                    {item.content}
                  </span>
                </li>
              ))}
            </ul>

            {/* Hours */}
            <div
              className="mt-7 pt-6"
              style={{ borderTop: "1px solid rgba(122,173,94,0.1)" }}
            >
              <p
                className="font-semibold uppercase tracking-widest mb-3"
                style={{ fontSize: "10px", color: "#3d5c35", letterSpacing: "0.12em" }}
              >
                Business Hours
              </p>
              <p className="text-xs mb-1" style={{ color: "#56644e" }}>
                Mon &mdash; Fri: 8:00 AM &mdash; 5:00 PM
              </p>
              <p className="text-xs" style={{ color: "#56644e" }}>
                Sat: 9:00 AM &mdash; 1:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="relative"
        style={{ borderTop: "1px solid rgba(122,173,94,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#3d5035" }}>
            &copy; {new Date().getFullYear()} AgroDakk Foods Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs" style={{ color: "#3d5035" }}>
            <a
              href="#"
              className="transition-colors"
              style={{ color: "#3d5035" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#7aad5e")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#3d5035")}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors"
              style={{ color: "#3d5035" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#7aad5e")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#3d5035")}
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Kspace credit */}
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-5 flex justify-center">
          <a
            href="https://njenga993.github.io/kspace/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ fontSize: "10px", color: "#2a3d25", letterSpacing: "0.08em" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#7aad5e")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#2a3d25")}
          >
            Designed &amp; Built by{" "}
            <span className="font-semibold" style={{ color: "#3d5c35" }}>Kspace</span>
          </a>
        </div>
      </div>

    </footer>
  );
}