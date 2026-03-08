"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, fadeIn } from "@/lib/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Textures */}
      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-transparent to-[var(--color-bg)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "url(/textures/paper.jpg)",
            backgroundSize: "cover",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--color-accent)]/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[var(--color-accent-gold)]/[0.03] blur-[100px]" />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 section-container flex flex-col items-center text-center pt-20"
      >
        {/* Profile Image */}
        <motion.div
          variants={staggerItem}
          className="relative mb-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[var(--color-border-hover)]">
            <Image
              src="/images/profile.png"
              alt="Muhammed Shadil MP"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-[var(--color-accent)]/10 blur-2xl scale-150 -z-10" />
        </motion.div>

        {/* Name */}
        <motion.div variants={staggerItem} className="mb-2">
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 glow-accent"
        >
          <span className="block">Muhammed</span>
          <span className="block gradient-text">Shadil MP</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={staggerItem}
          className="text-lg md:text-xl font-mono uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-8"
        >
          UI/UX Designer & Frontend Developer
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={staggerItem}
          className="text-base md:text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed"
        >
          Crafting visually engaging digital products with strong motion design,
          thoughtful user experiences, and clean frontend architecture.
        </motion.p>

        {/* Divider */}
        <motion.div variants={fadeIn} className="divider mx-auto mt-12" />

        {/* Scroll Indicator */}
        <motion.div
          variants={staggerItem}
          className="mt-8"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Scroll
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="text-[var(--color-text-muted)]"
            >
              <rect
                x="1"
                y="1"
                width="14"
                height="22"
                rx="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <motion.circle
                cx="8"
                cy="8"
                r="2"
                fill="currentColor"
                animate={{ cy: [8, 16, 8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
