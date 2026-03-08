"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storyLines = [
  "Every pixel tells a story.",
  "Every interaction has a purpose.",
  "Design is not just how it looks —",
  "It's how it works.",
  "And I believe in making both",
  "unforgettable.",
];

export default function MapSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const textElements = containerRef.current.querySelectorAll(".story-line");

    textElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0.1, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background Texture with Parallax */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "url(/textures/paper.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1 }}
        >
          <div ref={containerRef} className="max-w-3xl mx-auto py-16">
            {/* Cinematic Quote Lines */}
            <div className="space-y-6 md:space-y-8">
              {storyLines.map((line, index) => (
                <div
                  key={index}
                  className="story-line"
                >
                  <p
                    className={`font-serif leading-relaxed ${
                      index === 2 || index === 3
                        ? "text-2xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)]"
                        : "text-xl md:text-3xl lg:text-4xl text-[var(--color-text-secondary)]"
                    } ${index % 2 === 0 ? "" : "md:pl-12 lg:pl-24"}`}
                  >
                    {line}
                  </p>
                </div>
              ))}
            </div>

            {/* Location tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-sm font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                Kerala, India
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
