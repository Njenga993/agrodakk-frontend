import Link from "next/link";
import { getSiteSettings } from "@/lib/api";
import { getStrapiURL } from "@/lib/strapi";

// Change this to your Strapi image URL or a static image
const ABOUT_HERO_IMAGE = "/uploads/Langat_a822855147.jpg";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "2,000+", label: "Happy Customers" },
  { value: "50+", label: "Local Partners" },
  { value: "10+", label: "International Partners" },
];

const values = [
  {
    title: "Quality First",
    description:
      "Every product undergoes rigorous quality checks to ensure it meets international food safety standards before reaching our customers.",
  },
  {
    title: "Sustainable Farming",
    description:
      "We work hand-in-hand with smallholder farmers to promote environmentally responsible agricultural practices that preserve the land.",
  },
  {
    title: "Farmer Empowerment",
    description:
      "By providing fair prices, training, and direct market access, we help farming communities build sustainable livelihoods.",
  },
  {
    title: "Global Reach",
    description:
      "From Kitale to the world — we connect Kenyan farmers to international markets while maintaining traceability and transparency.",
  },
];

const timeline = [
  { year: "2014", title: "Founded", desc: "AgroDakk Foods established in Kitale, Kenya with a vision to connect farmers to markets." },
  { year: "2016", title: "First Export", desc: "Began exporting dried vegetables to regional East African markets." },
  { year: "2019", title: "Farmer Network", desc: "Built a network of 50+ smallholder farming partners across Trans Nzoia County." },
  { year: "2022", title: "International Growth", desc: "Expanded operations to serve international markets across multiple continents." },
  { year: "2025", title: "Scaling Impact", desc: "Over 2,000 customers served globally with plans for continued expansion." },
];

export default async function AboutPage() {
  let siteName = "AgroDakk Foods";
  try {
    const settings = await getSiteSettings();
    siteName = settings?.data?.siteName || "AgroDakk Foods";
  } catch (e) {}

  return (
    <main>
      {/* Hero — Image Background + Wave Divider */}
      <section className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={getStrapiURL(ABOUT_HERO_IMAGE)}
            alt="AgroDakk farm"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-green-300 uppercase tracking-[0.2em] mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Connecting farmers to
              <br />
              <span className="text-green-300">global opportunities</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {siteName} Ltd is a Kenyan agribusiness dedicated to producing and supplying
              premium dried vegetables to local and international markets.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-auto"
          >
            <path
              d="M0 50L60 45C120 40 240 30 360 35C480 40 600 60 720 65C840 70 960 60 1080 45C1200 30 1320 20 1380 15L1440 10V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Story Section — Two Column */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left — Image placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNkMWQ1ZGIiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-center flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-medium">Company Image</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-green-200 rounded-2xl -z-10"></div>
            </div>

            {/* Right — Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Rooted in Nature,<br />
                Committed to You
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Based in Kitale, Kenya — the heart of the country's agricultural region — we work
                  closely with smallholder farmers to source the finest dried vegetables. Our supply
                  chain is built on trust, transparency, and shared prosperity.
                </p>
                <p>
                  Every product that leaves our facility is carefully sorted, naturally dried, and
                  packed to preserve nutrients and flavor. We are committed to quality, integrity,
                  and innovation at every step.
                </p>
                <p>
                  Our vision is clear: connect farmers to the world while delivering products that
                  meet the highest standards of safety and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — Clean Cards */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-6 py-4 first:pl-0 last:pr-0">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values — Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-green-700 uppercase tracking-[0.2em] mb-3">
              What Drives Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-5 group-hover:bg-green-200 transition-colors">
                  <span className="text-green-700 font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — Journey */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-green-700 uppercase tracking-[0.2em] mb-3">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              From Farm to Global Markets
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-8 pb-12 last:pb-0">
                {i < timeline.length - 1 && (
                  <div className="absolute left-[27px] top-12 bottom-0 w-px bg-gray-200"></div>
                )}

                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-green-200 flex items-center justify-center z-10 relative">
                    <span className="text-xs font-bold text-green-700">{item.year}</span>
                  </div>
                </div>

                <div className="pt-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
            "To empower smallholder farmers through sustainable agriculture, value addition, and
            direct access to global markets — while delivering premium quality dried vegetables
            to customers worldwide."
          </blockquote>
          <p className="text-gray-500">Our Mission</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a farmer looking to partner with us, or a buyer seeking premium dried
            vegetables, we'd love to hear from you.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-green-500 transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 px-8 py-3.5 rounded-lg font-semibold hover:border-gray-400 hover:text-white transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}