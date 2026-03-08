"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "CashFlow (Expense Tracker)",
    description:
      "A modern expense tracking application designed to help users manage daily finances efficiently with a clean interface and intuitive workflow.",
    image: "/images/cashflow.jpg",
    url: "https://cashflow-expense.vercel.app/",
  },
  {
    title: "Tool Nexus (Mini Tools)",
    description:
      "A collection of useful mini tools built for productivity and quick everyday tasks, designed with simplicity and accessibility in mind.",
    image: "/images/toolnexus.jpg",
    url: "https://toolnexus.vercel.app/",
  },
  {
    title: "Kalastra (Live Leaderboard System)",
    description:
      "A live leaderboard system designed to track and display real-time rankings during competitive events and activities.",
    image: "/images/kalastra.jpg",
    url: "https://kalastra-leaderboard.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={staggerItem} className="section-title block text-center">
            Projects
          </motion.span>
          <motion.h2 variants={staggerItem} className="section-heading text-center">
            Featured <span className="gradient-text">work</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="section-description text-center mx-auto mb-4">
            A curated collection of projects that showcase my approach to design
            and development — where aesthetics meet functionality.
          </motion.p>
          <motion.div variants={staggerItem} className="divider mx-auto" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
