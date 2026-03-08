"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const skillCategories = [
  {
    title: "Design",
    icon: "✦",
    skills: ["Figma", "UI/UX Design", "Canva", "Poster Design", "Branding"],
  },
  {
    title: "Development",
    icon: "⟨/⟩",
    skills: ["React", "HTML", "CSS", "JavaScript", "Python", "C"],
  },
  {
    title: "Tools & Workflow",
    icon: "⚙",
    skills: ["Git", "GitHub", "Vercel", "Framer Motion", "Notion", "VS Code"],
  },
  {
    title: "Other",
    icon: "◈",
    skills: ["85 WPM Typing", "Content Strategy", "Social Media", "Documentation"],
  },
];

export default function SkillsSection() {
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
            Skills
          </motion.span>
          <motion.h2 variants={staggerItem} className="section-heading text-center">
            Tools of the <span className="gradient-text">craft</span>
          </motion.h2>
          <motion.div variants={staggerItem} className="divider mx-auto" />

          {/* Skills Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="paper-card p-6"
              >
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xl text-[var(--color-accent)]">
                      {category.icon}
                    </span>
                    <h3 className="text-base font-serif font-semibold text-[var(--color-text-primary)]">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-3 py-1.5 text-xs font-mono tracking-wider 
                          bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)]
                          rounded-full border border-[var(--color-border)]
                          hover:border-[var(--color-accent)]/30 hover:text-[var(--color-accent)]
                          transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
