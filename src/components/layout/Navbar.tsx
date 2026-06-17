"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { getStrapiURL } from "@/lib/strapi";

const LOGO_URL = getStrapiURL("/uploads/logo_all_f2a38cd5c8.jpeg");

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
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4">

        {/* ── Desktop layout ── */}
        <div className="hidden md:flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm">
              <img
                src={LOGO_URL}
                alt="AgroDakk Foods"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">AgroDakk</span>
              <span className="block text-[11px] text-green-700 font-medium leading-tight tracking-wide">
                Foods Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-green-50 text-green-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side: Cart + CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-full hover:bg-gray-100 transition"
              aria-label="Open cart"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-green-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <Link
              href="/contact"
              className="bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-800 transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* ── Mobile layout ── */}
        <div className="md:hidden">
          {/* Top bar: hamburger | centered logo | cart */}
          <div className="flex items-center justify-between h-16">
            {/* Hamburger (left) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Logo — absolutely centered */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src={LOGO_URL}
                  alt="AgroDakk Foods"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div>
                <span className="text-base font-bold text-gray-900 tracking-tight">AgroDakk</span>
                <span className="block text-[10px] text-green-700 font-medium leading-tight tracking-wide">
                  Foods Ltd
                </span>
              </div>
            </Link>

            {/* Cart (right) */}
            <button
              onClick={openCart}
              className="relative p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Open cart"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-green-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileOpen && (
            <div className="border-t border-gray-100 py-4 pb-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition ${
                        isActive
                          ? "bg-green-50 text-green-700"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 bg-green-700 text-white text-center px-4 py-3 rounded-xl text-sm font-semibold hover:bg-green-800 transition"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          )}
        </div>

      </nav>
    </header>
  );
}