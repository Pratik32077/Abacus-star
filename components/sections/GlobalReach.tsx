"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const MARKETS = [
  "Indonesia",
  "Australia",
  "South Africa",
  "India",
  "United Arab Emirates",
  "Global Trade Corridors",
];

export function GlobalReach() {
  const loop = [...MARKETS, ...MARKETS];

  return (
    <section className="relative bg-brand-dark py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 shrink-0"
        >
          <Globe2 size={20} className="text-brand-red" />
          <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
            Sourced &amp; Delivered Across
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-0 animate-marquee">
            {loop.map((market, i) => (
              <span
                key={`${market}-${i}`}
                className="flex items-center text-white/85 text-lg sm:text-xl font-semibold tracking-tight px-8 whitespace-nowrap"
              >
                {market}
                <span className="ml-8 h-1 w-1 rounded-full bg-brand-red/70" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
