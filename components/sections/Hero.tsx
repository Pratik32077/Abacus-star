"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Boxes, Briefcase, ChevronDown } from "lucide-react";

const easing = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden scroll-mt-header"
    >
      <motion.div
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: easing }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2400&auto=format&fit=crop"
          alt="Global shipping port at dusk representing international trade"
          fill
          priority
          className="object-cover scale-110"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: easing }}
        className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-brand-dark/50"
      />
      <div className="absolute inset-0 bg-grid-fade opacity-20" aria-hidden="true" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 pt-32 pb-16 sm:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: easing }}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-7"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
          <span className="text-white/80 text-xs font-bold tracking-[0.2em] uppercase">
            Dubai, United Arab Emirates
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: easing }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight max-w-3xl text-balance"
        >
          Global Trade. Business Solutions. <span className="text-brand-red">One Partner.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.68, ease: easing }}
          className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg leading-relaxed"
        >
          Abacus Star connects businesses with commodities, industrial products, and commercial solutions across international markets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.86, ease: easing }}
          className="mt-12"
        >
          <p className="text-white/50 text-xs font-bold tracking-[0.25em] uppercase mb-5">
            Explore Our Offerings
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#trading"
              onClick={(e) => handleNavClick(e, "#trading")}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: easing }}
              className="group flex items-center justify-between gap-6 w-full sm:w-64 rounded-lg border border-white/25 bg-white/5 backdrop-blur-sm px-6 py-5 transition-all duration-300 hover:border-brand-red hover:bg-white/10"
            >
              <span className="flex items-center gap-3">
                <Boxes size={20} className="text-brand-red" />
                <span className="text-white font-semibold text-sm tracking-wide uppercase">
                  Trading
                </span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-white/60 group-hover:text-brand-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </motion.a>

            <motion.a
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.12, ease: easing }}
              className="group flex items-center justify-between gap-6 w-full sm:w-64 rounded-lg border border-white/25 bg-white/5 backdrop-blur-sm px-6 py-5 transition-all duration-300 hover:border-brand-red hover:bg-white/10"
            >
              <span className="flex items-center gap-3">
                <Briefcase size={20} className="text-brand-red" />
                <span className="text-white font-semibold text-sm tracking-wide uppercase">
                  Services
                </span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-white/60 group-hover:text-brand-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
