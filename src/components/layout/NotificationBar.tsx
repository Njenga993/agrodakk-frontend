import Link from "next/link";

export default function NotificationBar() {
  return (
    <div className="bg-gray-900 text-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1 justify-center md:justify-start">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0 hidden sm:inline-block"></span>
          <p className="text-gray-300 text-xs md:text-sm">
            <span className="font-semibold text-white">Now shipping internationally</span>
            <span className="text-gray-500 hidden sm:inline"> — Premium dried vegetables from Kenya to the world.</span>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors ml-1.5 font-medium"
            >
              Browse products
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </p>
        </div>
        <div className="hidden md:flex items-center gap-5 text-xs text-gray-500">
          <a href="mailto:info@agrodakk.com" className="hover:text-gray-300 transition-colors">
            info@agrodakk.com
          </a>
          <span className="w-px h-4 bg-gray-700"></span>
          <span>Kitale, Kenya</span>
        </div>
      </div>
    </div>
  );
}