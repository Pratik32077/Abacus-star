"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-white py-4">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl bg-brand-dark px-8 sm:px-14 py-14 sm:py-16"
        >
          <div className="absolute inset-0 bg-grid-fade opacity-40" aria-hidden="true" />
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-brand-red text-xs font-bold tracking-[0.24em] uppercase mb-4">
                Partner With Abacus Star
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight text-balance">
                From sourcing raw materials to running your back office —
                one trusted partner across the full trade lifecycle.
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="#services"
                onClick={(e) => handleClick(e, "#services")}
                className="group inline-flex items-center gap-2 rounded-[4px] px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 bg-brand-red text-white hover:bg-brand-red-dark shadow-[0_10px_30px_-8px_rgba(233,27,35,0.55)]"
              >
                Explore Services
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="group inline-flex items-center gap-2 rounded-[4px] px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 bg-transparent border border-white/40 text-white hover:border-white hover:bg-white/10"
              >
                Talk To Our Team
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
