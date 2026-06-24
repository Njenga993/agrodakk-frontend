"use client";

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
    <section
      className="py-24 overflow-hidden"
      style={{ background: "#1e2a1a" }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px" style={{ background: "#7aad5e" }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#7aad5e" }}
            >
              Did You Know
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: "#f0ebe0", letterSpacing: "-0.02em" }}
          >
            Facts about AgroDakk
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(122,173,94,0.1)" }}>
          {facts.map((fact, i) => (
            <div
              key={fact.number}
              className="group relative flex flex-col p-10 transition-colors duration-300"
              style={{ background: "#1e2a1a" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = "#243020")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = "#1e2a1a")
              }
            >
              {/* Large ghost number */}
              <div
                className="text-[5rem] font-bold leading-none mb-8 transition-colors duration-300 select-none"
                style={{ color: "rgba(122,173,94,0.12)", fontVariantNumeric: "tabular-nums" }}
              >
                {fact.number}
              </div>

              {/* Thin top rule — accent on hover */}
              <div
                className="absolute top-0 left-10 right-10 h-px transition-colors duration-300"
                style={{
                  background: i === 0
                    ? "#7aad5e"
                    : "rgba(122,173,94,0.2)",
                }}
              />

              {/* Content */}
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "#e8f0e0" }}
              >
                {fact.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#7a8f72" }}
              >
                {fact.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}