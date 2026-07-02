
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const LOGO_URL = "/uploads/logo_all_removebg_preview_d5dececa81.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  return (
    <header
      className="sticky top-0 z-30 backdrop-blur-md"
      style={{
        background: "rgba(255,253,248,0.97)",
        borderBottom: "1px solid #ddd6c8",
        boxShadow: "0 1px 8px rgba(90,70,40,0.06)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-5">

        {/* ── Desktop layout ── */}
        <div className="hidden md:flex items-center justify-between h-[100px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img
              src={LOGO_URL}
              alt="AgroDakk Foods"
              className="h-40 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: isActive ? "#3d5c35" : "#6b6355",
                    fontWeight: isActive ? 600 : 400,
                    fontSize: "0.9rem",
                    letterSpacing: "0.01em",
                    paddingBottom: "2px",
                    borderBottom: isActive ? "2px solid #7aad5e" : "2px solid transparent",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#3d5c35";
                      (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#c8dbb8";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#6b6355";
                      (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side: Cart + CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              className="relative flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
              style={{ color: "#6b6355" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#f0ece4")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
              }
              aria-label="Open cart"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {totalItems > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "#7aad5e" }}
                >
                  {totalItems}
                </span>
              )}
            </button>

            <Link
              href="/contact"
              className="text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
              style={{ background: "#3d5c35", letterSpacing: "0.02em" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = "#2e4528")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = "#3d5c35")
              }
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* ── Mobile layout ── */}
        <div className="md:hidden">
          {/* Top bar: hamburger | centered logo | cart */}
          <div className="relative flex items-center justify-between h-24">

            {/* Hamburger (left) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="z-10 flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
              style={{ color: "#4a6741" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#f0ece4")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
              }
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Logo — centered, tall, full-bleed height */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
              style={{ height: "100px" }}
            >
              <img
                src={LOGO_URL}
                alt="AgroDakk Foods"
                className="h-40 w-auto object-contain"
              />
            </Link>

            {/* Cart (right) */}
            <button
              onClick={openCart}
              className="z-10 relative flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
              style={{ color: "#4a6741" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#f0ece4")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
              }
              aria-label="Open cart"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {totalItems > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "#7aad5e" }}
                >
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileOpen && (
            <div
              className="pb-6"
              style={{ borderTop: "1px solid #e4ddd2" }}
            >
              <div className="flex flex-col pt-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 text-sm font-medium transition-colors"
                      style={{
                        color: isActive ? "#3d5c35" : "#6b6355",
                        fontWeight: isActive ? 600 : 400,
                        borderLeft: isActive ? "3px solid #7aad5e" : "3px solid transparent",
                        background: isActive ? "#f4f8f1" : "transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="px-4 mt-4">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block text-white text-center text-sm font-semibold px-4 py-3 rounded-lg transition-colors"
                    style={{ background: "#3d5c35", letterSpacing: "0.02em" }}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

      </nav>
    </header>
  );
}
