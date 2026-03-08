"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left: Title Area */}
          <div>
            <motion.span variants={staggerItem} className="section-title block">
              About
            </motion.span>
            <motion.h2 variants={staggerItem} className="section-heading">
              A story of
              <span className="block gradient-text">design & code</span>
            </motion.h2>
            <motion.div variants={staggerItem} className="divider" />
          </div>

          {/* Right: Content */}
          <motion.div variants={staggerItem}>
            <div className="paper-card p-8 md:p-10">
              <div className="relative z-10 space-y-6">
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg">
                  I&#39;m <span className="text-[var(--color-text-primary)] font-medium">Muhammed Shadil MP</span>, 
                  a UI/UX Designer and Frontend Developer from{" "}
                  <span className="text-[var(--color-accent)]">Kerala, India</span>.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  I enjoy building visually engaging digital products with strong 
                  motion design, thoughtful user experiences, and clean frontend 
                  architecture. Every project I take on is an opportunity to merge 
                  creativity with precision, crafting interfaces that feel alive 
                  and intuitive.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  My approach combines the art of visual storytelling with the 
                  discipline of modern frontend development — creating digital 
                  experiences that are not just functional, but memorable.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--color-border)]">
                  {[
                    { label: "Projects", value: "10+" },
                    { label: "WPM", value: "85" },
                    { label: "Focus", value: "UI/UX" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-accent)]">
                        {stat.value}
                      </div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
