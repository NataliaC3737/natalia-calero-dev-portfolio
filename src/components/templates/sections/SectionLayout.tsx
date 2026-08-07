"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function SectionLayout({ children }: { children: ReactNode }) {
  return (
    <motion.section
      className="section min-h-screen overflow-y-auto relative pt-24 pb-16 px-8 lg:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}
