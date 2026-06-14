"use client";

import Link from "next/link";
import { useState } from "react";
import { getStrapiURL } from "@/lib/strapi";

interface AboutSnippetProps {
  siteName?: string;
}

// 🔧 Update these with your actual Strapi image filenames
const aboutImages = [
  {
    src: "/uploads/TK_16834_0dfd79ced1.jpg",
    alt: "Farmers harvesting vegetables",
    rotate: "-6deg",
    offset: "left-0 top-0",
  },
  {
    src: "/uploads/Langat_a822855147.jpg", // Replace with a different image
    alt: "Dried vegetables processing",
    rotate: "3deg",
    offset: "left-8 top-4",
  },
  {
    src: "/uploads/tshirt3_9188b403ac.jpg", // Replace with a different image
    alt: "Packed products ready for export",
    rotate: "-2deg",
    offset: "left-16 top-8",
  },
];

export default function AboutSnippet({ siteName = "AgroDakk Foods" }: AboutSnippetProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Layered Images */}
          <div className="relative h-[450px] md:h-[500px] flex items-center justify-center">
            {/* Decorative background circles */}
            <div className="absolute top-10 -left-10 w-40 h-40 bg-green-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-5 right-5 w-56 h-56 bg-green-300 rounded-full opacity-10 blur-xl"></div>
            
            {/* Image Stack */}
            <div className="relative w-80 h-96">
              {aboutImages.map((image, index) => {
                const isActive = activeIndex === index;
                const zIndex = isActive ? 30 : 20 - index;
                
                return (
                  <div
                    key={index}
                    className={`absolute ${image.offset} transition-all duration-500 ease-out cursor-pointer`}
                    style={{
                      zIndex,
                      transform: `rotate(${isActive ? '0deg' : image.rotate}) scale(${isActive ? 1.05 : 1})`,
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div
                      className={`
                        w-64 h-80 rounded-2xl overflow-hidden shadow-lg transition-all duration-500
                        ${isActive 
                          ? 'shadow-2xl ring-4 ring-green-400 ring-offset-2' 
                          : 'shadow-md hover:shadow-xl'
                        }
                      `}
                    >
                      <img
                        src={getStrapiURL(image.src)}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      
                      {/* Label */}
                      <div className={`
                        absolute bottom-0 left-0 right-0 p-4 transition-all duration-500
                        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                      `}>
                        <p className="text-white text-sm font-semibold drop-shadow-lg">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Instruction hint */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-400 flex items-center gap-1">
              <span>👆</span> Hover or click images
            </div>
          </div>
          
          {/* Right - Content */}
          <div>
            <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              Connecting Farmers to<br />
              <span className="text-green-700">Global Opportunities</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {siteName} Ltd is a Kenyan agribusiness company dedicated to producing and 
              supplying high-quality agricultural and food products for local and international 
              markets. Based in Kitale, Kenya, we work closely with farmers to promote 
              sustainable agriculture, value addition, and inclusive market access.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We are committed to quality, integrity, and innovation, with a vision of 
              connecting farmers to global opportunities while delivering products that 
              meet the highest standards of safety and excellence.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition shadow-sm hover:shadow-md"
              >
                Learn More
                <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-green-700 hover:text-green-700 transition"
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