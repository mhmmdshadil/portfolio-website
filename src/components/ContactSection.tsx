"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:muhammedshadilmp7@gmail.com",
    display: "muhammedshadilmp7@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mhmmd.shadil/",
    display: "@mhmmd.shadil",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/mhmmdshadil",
    display: "mhmmdshadil",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mhmmdshadil/",
    display: "mhmmdshadil",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span variants={staggerItem} className="section-title block">
            Contact
          </motion.span>
          <motion.h2 variants={staggerItem} className="section-heading">
            Let&#39;s <span className="gradient-text">connect</span>
          </motion.h2>
          <motion.div variants={staggerItem} className="divider mx-auto" />

          <motion.p
            variants={staggerItem}
            className="section-description mx-auto text-center mt-8"
          >
            I&#39;m always open to new opportunities, collaborations, and creative
            conversations. Let&#39;s build something beautiful together.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-4 mt-12"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                variants={staggerItem}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="paper-card p-5 flex items-center gap-4 group"
              >
                <div className="relative z-10 flex items-center gap-4 w-full">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-surface-elevated)] flex items-center justify-center text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-all duration-300">
                    {link.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
                      {link.label}
                    </div>
                    <div className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300 truncate">
                      {link.display}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
