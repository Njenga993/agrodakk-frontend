import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Services</h1>
        <p>Services page coming soon.</p>
        <Link href="/" className="text-green-700 underline mt-4 inline-block">← Back to Home</Link>
      </div>
    </main>
  );
}