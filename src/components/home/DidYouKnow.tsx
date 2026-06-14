const facts = [
  {
    number: "01",
    title: "International Reach",
    description:
      "AgroDakk Foods has expanded beyond Kenya, now serving international markets across multiple continents with premium dried vegetables.",
  },
  {
    number: "02",
    title: "Premium Produce",
    description:
      "We specialize in naturally sun-dried vegetables including Managu, Saga, Kunde, and Chillies — sourced directly from smallholder farmers.",
  },
  {
    number: "03",
    title: "Kitale Roots",
    description:
      "Our headquarters and processing facility are based in Kitale, Kenya — the heart of the country's most productive agricultural region.",
  },
];

export default function DidYouKnow() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px),
                            linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-green-400 uppercase tracking-[0.2em] mb-3">
            Did You Know
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Facts about AgroDakk
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {facts.map((fact) => (
            <div
              key={fact.number}
              className="group relative p-8 rounded-2xl border border-gray-800 bg-gray-800/30 hover:bg-gray-800/50 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number */}
              <span className="block text-5xl font-bold text-gray-700 group-hover:text-green-700/30 transition-colors mb-6">
                {fact.number}
              </span>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {fact.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {fact.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gray-700 group-hover:bg-green-700/50 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}