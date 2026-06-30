import Link from "next/link";

export default function NotificationBar() {
  return (
    <div
      className="relative z-50"
      style={{ background: "#1e2a1a", borderBottom: "1px solid rgba(122,173,94,0.15)" }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-2.5 flex items-center justify-between gap-4">

        {/* Left: pulse + message */}
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Live pulse dot */}
          <span className="relative flex-shrink-0 hidden sm:flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#7aad5e" }} />
            <span className="relative inline-flex rounded-full w-2 h-2" style={{ background: "#7aad5e" }} />
          </span>

          <p className="text-xs leading-snug truncate" style={{ color: "#a8b8a0" }}>
            <span className="font-semibold" style={{ color: "#e8f0e0" }}>
              Now shipping internationally
            </span>
            <span className="hidden sm:inline" style={{ color: "#6a7d62" }}>
              {" "}— Premium dried vegetables from Kenya to the world.
            </span>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 ml-2 font-semibold transition-colors"
              style={{ color: "#7aad5e" }}
            >
              Browse products
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </p>
        </div>

        {/* Right: contact details */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0 text-xs" style={{ color: "#556650" }}>
          <a
            href="mailto:agrodakk@gmail.com"
            className="transition-colors hover:text-[#a8cc8c]"
          >
            agrodakk@gmail.com
          </a>
          <span className="w-px h-3.5" style={{ background: "#2e3d2a" }} />
          <span>Kitale, Kenya</span>
        </div>

      </div>
    </div>
  );
}