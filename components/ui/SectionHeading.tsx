"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
  as?: "h2" | "h1";
}

export function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "left",
  dark = false,
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`inline-flex items-center gap-2 mb-5 ${align === "center" ? "" : ""}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
          <p className="text-brand-red text-xs font-bold tracking-[0.24em] uppercase">
            {eyebrow}
          </p>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      >
        <Heading
          className={`text-4xl sm:text-5xl md:text-[3.25rem] font-extrabold tracking-tight leading-[1.06] text-balance ${
            dark ? "text-white" : "text-brand-dark"
          }`}
        >
          {heading}
        </Heading>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className={`block h-[3px] w-16 bg-brand-red origin-left mt-6 ${
            align === "center" ? "mx-auto" : ""
          }`}
        />
      </motion.div>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
          className={`mt-6 text-base sm:text-lg leading-relaxed ${
            dark ? "text-white/70" : "text-brand-gray"
          }`}
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}
