"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Boxes, Handshake, Cpu } from "lucide-react";

const PILLARS = [
  { icon: Boxes, label: "Global Trading" },
  { icon: Handshake, label: "Management & Consultancy" },
  { icon: Cpu, label: "IT Solutions" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-header relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            <p className="text-brand-red text-xs font-bold tracking-[0.24em] uppercase">
              Who We Are
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-[3.25rem] font-extrabold tracking-tight leading-[1.06] text-brand-dark text-balance">
            About Us
          </h2>
          <span className="block h-[3px] w-16 bg-brand-red mt-6 mb-7" />
          <p className="text-brand-gray text-base sm:text-lg leading-relaxed">
            At Abacus Star General Trading LLC, we are your trusted partner in the
            intricate world of global trade. With a robust portfolio spanning
            various industries, we specialize in importing and exporting metals
            such as Copper and Aluminium, minerals, trading coal and agricultural
            commodities, and offering a wide array of electronic goods.
            Complemented by our comprehensive suite of services including
            Management, Consultancy, and IT solutions, we are dedicated to
            empowering businesses with seamless operations and strategic insights.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 + i * 0.1 }}
                  className="flex flex-col gap-3 rounded-lg border border-brand-border bg-brand-light/60 px-4 py-5"
                >
                  <Icon size={20} className="text-brand-red" />
                  <span className="text-brand-dark text-sm font-semibold leading-snug">
                    {pillar.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] sm:aspect-[5/4] rounded-2xl overflow-hidden"
          >
            <motion.div
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800&auto=format&fit=crop"
                alt="Global business professionals reviewing international trade operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            className="hidden sm:flex absolute -bottom-8 -left-8 items-center gap-4 rounded-xl bg-white border border-brand-border shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] px-6 py-5 max-w-[280px]"
          >
            <span className="h-11 w-11 shrink-0 rounded-full bg-brand-red/10 flex items-center justify-center">
              <Handshake size={20} className="text-brand-red" />
            </span>
            <p className="text-brand-dark text-sm font-semibold leading-snug">
              Empowering businesses with seamless operations and strategic insights.
            </p>
          </motion.div>

          <span
            className="absolute -top-6 -right-6 hidden sm:block h-24 w-24 border-t-4 border-r-4 border-brand-red/70 rounded-tr-2xl"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
