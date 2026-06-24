"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 10, suffix: "+", label: "Years Experience" },
  { number: 2000, suffix: "+", label: "Happy Customers" },
  { number: 50, suffix: "+", label: "Local Partners" },
  { number: 10, suffix: "+", label: "International Partners" },
];

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
  started,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, started]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#f7f3ed", borderBottom: "1px solid #e4ddd2" }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 px-6 text-center"
              style={{
                borderRight:
                  i < stats.length - 1 ? "1px solid #e4ddd2" : "none",
              }}
            >
              {/* Number */}
              <div
                className="text-4xl md:text-5xl font-bold tabular-nums leading-none mb-2"
                style={{ color: "#3d5c35", letterSpacing: "-0.03em" }}
              >
                <AnimatedCounter
                  target={stat.number}
                  suffix={stat.suffix}
                  started={isVisible}
                />
              </div>

              {/* Divider dot */}
              <span
                className="block w-1 h-1 rounded-full my-2"
                style={{ background: "#7aad5e" }}
              />

              {/* Label */}
              <div
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#8a7d6e" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}