import { Variants } from "framer-motion";

// ===== Fade In Variants =====
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ===== Slide Up Variants =====
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ===== Slide In from Left =====
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ===== Slide In from Right =====
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ===== Scale Up Variant =====
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ===== Stagger Container =====
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// ===== Stagger Item =====
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ===== Cinematic Reveal =====
export const cinematicReveal: Variants = {
  hidden: { opacity: 0, y: 80, rotate: 1 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

// ===== Paper Card Hover =====
export const paperCardHover = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.03,
    rotate: -0.5,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ===== Viewport Settings =====
export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};
