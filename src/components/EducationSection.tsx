"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const education = [
  {
    period: "2025 – Current",
    degree: "B.Tech in Information Technology",
    institution: "GEC Sreekrishnapuram",
    status: "current",
  },
  {
    period: "2023",
    degree: "Biology Science",
    institution: "GHSS Purathur",
    status: "completed",
  },
  {
    period: "2022",
    degree: "Secondary Graduate",
    institution: "TIC Secondary",
    status: "completed",
  },
];

export default function EducationSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={staggerItem} className="section-title block text-center">
            Education
          </motion.span>
          <motion.h2 variants={staggerItem} className="section-heading text-center">
            Academic <span className="gradient-text">journey</span>
          </motion.h2>
          <motion.div variants={staggerItem} className="divider mx-auto" />

          {/* Timeline */}
          <div className="relative mt-12 max-w-2xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-[var(--color-border)]" />

            {education.map((edu, index) => (
              <motion.div
                key={`${edu.degree}-${index}`}
                variants={staggerItem}
                className="relative pl-12 mb-10 last:mb-0"
              >
                {/* Dot */}
                <div
                  className={`absolute left-[12px] top-2 w-4 h-4 rounded-full border-2 z-10 ${
                    edu.status === "current"
                      ? "border-[var(--color-accent)] bg-[var(--color-bg)]"
                      : "border-[var(--color-text-muted)] bg-[var(--color-bg)]"
                  }`}
                >
                  {edu.status === "current" && (
                    <div className="absolute inset-1 rounded-full bg-[var(--color-accent)] animate-pulse" />
                  )}
                </div>

                {/* Content */}
                <div className="paper-card p-6">
                  <div className="relative z-10">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-mono tracking-wider rounded-full mb-3 ${
                        edu.status === "current"
                          ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                          : "bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)]"
                      }`}
                    >
                      {edu.period}
                    </span>
                    <h3 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-mono text-[var(--color-text-secondary)]">
                      {edu.institution}
                    </p>
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
