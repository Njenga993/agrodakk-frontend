import Link from "next/link";
import { getStrapiURL } from "@/lib/strapi";

const HERO_IMAGE = "/uploads/TK_16834_0dfd79ced1.jpg";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={getStrapiURL(HERO_IMAGE)}
          alt="AgroDakk farm and vegetables"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay on top of image */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 via-green-800/75 to-green-700/70"></div>
      </div>
      
      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                          radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-24 md:pt-36 pb-24 md:pb-32">
        <span className="inline-block bg-green-600/40 backdrop-blur-sm text-green-100 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-green-500/30">
           From Farm to Global Markets
        </span>
        
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
          Rooted in Nature,<br />
          <span className="text-green-200">Committed to You</span>
        </h1>
        
        <p className="text-xl text-green-100 mb-8 max-w-2xl leading-relaxed">
          Premium dried vegetables sourced directly from Kenyan smallholder farmers. 
          Delivering quality, sustainability, and nutrition to local and international markets.
        </p>
        
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/products"
            className="bg-white text-green-900 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
          >
            Explore Our Products
          </Link>
          <Link
            href="/about"
            className="border-2 border-white/60 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white transition"
          >
            Our Story
          </Link>
        </div>
      </div>
      
      {/* 🌊 Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-px">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path 
            d="M0 60L60 55C120 50 240 40 360 45C480 50 600 70 720 75C840 80 960 70 1080 55C1200 40 1320 20 1380 10L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}