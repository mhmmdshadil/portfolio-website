"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const experiences = [
  {
    year: "2026",
    title: "Documentation & Poster Lead",
    org: "INVENTO'26 · GEC Sreekrishnapuram",
    description:
      "Created visual assets, event posters, and maintained comprehensive documentation for the technical fest.",
  },
  {
    year: "2026",
    title: "Instagram Management",
    org: "INVENTO'26, SAPTHA'26 · GEC Palakkad",
    description:
      "Developed social media strategy, created engaging visual content, and managed audience growth.",
  },
  {
    year: "2022",
    title: "Arts Convenor",
    org: "TICHSS",
    description:
      "Led arts initiatives and cultural events, coordinating creative activities across the institution.",
  },
  {
    year: "2022",
    title: "Magazine Editor",
    org: "TICHSS",
    description:
      "Managed editorial content, layout design, typography, and publication workflow.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={staggerItem} className="section-title block">
            Experience
          </motion.span>
          <motion.h2 variants={staggerItem} className="section-heading">
            Roles & <span className="gradient-text">responsibilities</span>
          </motion.h2>
          <motion.div variants={staggerItem} className="divider" />

          {/* Timeline */}
          <div className="relative mt-12">
            {/* Timeline Line */}
            <div className="absolute left-[19px] md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-[var(--color-border)]" />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${index}`}
                variants={staggerItem}
                className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-accent)] z-10">
                  <div className="absolute inset-1 rounded-full bg-[var(--color-accent)]" />
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="paper-card p-6">
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 text-xs font-mono tracking-wider bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full mb-3">
                        {exp.year}
                      </span>
                      <h3 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-mono text-[var(--color-text-muted)] mb-3">
                        {exp.org}
                      </p>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
