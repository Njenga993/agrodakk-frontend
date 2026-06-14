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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-200">
              <img
                src={LOGO_URL}
                alt="AgroDakk Foods"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-gray-900 tracking-tight">AgroDakk</span>
              <span className="block text-[10px] text-green-700 font-medium leading-tight tracking-wide">
                Foods Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
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
          <div className="hidden md:flex items-center gap-3">
            {/* Cart Button */}
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

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
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
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 pb-6">
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
              <div className="flex gap-2 mt-2">
                <button
                  onClick={openCart}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition flex-1"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                  Cart
                  {totalItems > 0 && (
                    <span className="bg-green-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                      {totalItems}
                    </span>
                  )}
                </button>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-green-700 text-white text-center px-4 py-3 rounded-xl text-sm font-semibold hover:bg-green-800 transition flex-1"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}