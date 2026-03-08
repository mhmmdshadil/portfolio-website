"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  url,
  index,
}: ProjectCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60, rotate: index % 2 === 0 ? 1 : -1 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.03,
        rotate: -0.5,
        transition: { duration: 0.4 },
      }}
      className="paper-card group block cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-60" />
        
        {/* View Project Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <span className="px-5 py-2.5 bg-[var(--color-accent)] text-white text-sm font-mono uppercase tracking-wider rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
            View Project
          </span>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 p-6">
        <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Arrow Link */}
        <div className="flex items-center gap-2 mt-4 text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
          <span>Explore</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transform group-hover:translate-x-1 transition-transform duration-300"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}
