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
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, started]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.3, // Trigger when 30% visible
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="group">
              <div className="text-3xl md:text-4xl font-bold text-green-700 mb-1 group-hover:scale-110 transition-transform tabular-nums">
                <AnimatedCounter
                  target={stat.number}
                  suffix={stat.suffix}
                  started={isVisible}
                />
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}