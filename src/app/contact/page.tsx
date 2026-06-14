import { getSiteSettings } from "@/lib/api";
import { getStrapiURL } from "@/lib/strapi";

const CONTACT_HERO_IMAGE = "/uploads/TK_16834_0dfd79ced1.jpg";

const contactDetails = [
  {
    label: "Address",
    value: "Kitale, Kenya",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@agrodakk.com",
    href: "mailto:info@agrodakk.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: null, // filled from Strapi if available
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Markets",
    value: "Local (Kenya) & International Export",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default async function ContactPage() {
  let settings = null;
  try {
    const res = await getSiteSettings();
    settings = res?.data;
  } catch (e) {}

  return (
    <main>
      {/* Hero — Image + Wave */}
      <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getStrapiURL(CONTACT_HERO_IMAGE)}
            alt="Contact AgroDakk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/65"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-green-300 uppercase tracking-[0.2em] mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Let's start a
              <br />
              <span className="text-green-300">conversation</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you have an inquiry about our products, want to place an order, or explore
              a partnership — we're here to help.
            </p>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-auto">
            <path d="M0 50L60 45C120 40 240 30 360 35C480 40 600 60 720 65C840 70 960 60 1080 45C1200 30 1320 20 1380 15L1440 10V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form — 3 columns */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all bg-white">
                    <option value="">Select a topic</option>
                    <option value="order">Product Order / Bulk Purchase</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="farmer">Farmer Registration</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your inquiry, order requirements, or partnership idea..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-green-800 transition-colors shadow-sm"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Info — 2 columns */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
              <p className="text-gray-500 mb-8">
                Reach us directly through any of the channels below.
              </p>

              <div className="space-y-6">
                {contactDetails.map((detail, i) => {
                  // Skip phone if not available
                  if (detail.label === "Phone" && !settings?.contactPhone) return null;

                  const displayValue =
                    detail.label === "Email" && settings?.contactEmail
                      ? settings.contactEmail
                      : detail.label === "Phone" && settings?.contactPhone
                      ? settings.contactPhone
                      : detail.label === "Address" && settings?.address
                      ? settings.address
                      : detail.value;

                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 text-green-700 group-hover:bg-green-100 transition-colors">
                        {detail.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">{detail.label}</h3>
                        <p className="text-gray-600 mt-0.5">{displayValue}</p>
                      </div>
                    </div>
                  );

                  if (detail.href) {
                    return (
                      <a key={i} href={detail.href} className="block">
                        {content}
                      </a>
                    );
                  }
                  return <div key={i}>{content}</div>;
                })}
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Monday — Friday</span>
                    <span className="text-gray-900 font-medium">8:00 AM — 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Saturday</span>
                    <span className="text-gray-900 font-medium">9:00 AM — 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3">East Africa Time (EAT)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-gray-500 font-medium">Kitale, Kenya</p>
            <p className="text-gray-400 text-sm mt-1">Map integration available</p>
          </div>
        </div>
      </section>
    </main>
  );
}