"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe, Zap, Truck } from "lucide-react";

const STATS = [
  {
    icon: TrendingUp,
    label: "Trading Volume",
    value: "$2.5B+",
    description: "Annual commodities traded",
  },
  {
    icon: Globe,
    label: "Global Reach",
    value: "45+",
    description: "Countries served",
  },
  {
    icon: Truck,
    label: "Shipments",
    value: "10K+",
    description: "Delivered annually",
  },
  {
    icon: Zap,
    label: "Supply Partners",
    value: "500+",
    description: "Verified suppliers worldwide",
  },
];

export function Stats() {
  return (
    <section className="relative bg-white py-24 sm:py-32 scroll-mt-header">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            <p className="text-brand-red text-xs font-bold tracking-[0.24em] uppercase">
              By The Numbers
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-[3.25rem] font-extrabold tracking-tight leading-[1.06] text-brand-dark text-balance">
            Trusted by Businesses Worldwide
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-brand-gray text-base sm:text-lg leading-relaxed">
            Our scale and operational excellence enable seamless commodity trading and business solutions on a global stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
                className="group relative rounded-xl border border-brand-border bg-gradient-to-br from-brand-light/60 to-brand-light/30 p-8 hover:border-brand-red/30 hover:shadow-[0_12px_32px_-8px_rgba(233,27,35,0.1)] transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex flex-col gap-4">
                  <div className="h-12 w-12 rounded-lg bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/15 transition-colors">
                    <Icon size={24} className="text-brand-red" />
                  </div>

                  <div>
                    <p className="text-3xl sm:text-4xl font-bold text-brand-dark">
                      {stat.value}
                    </p>
                    <p className="text-brand-dark font-semibold text-sm mt-2">
                      {stat.label}
                    </p>
                  </div>

                  <p className="text-brand-gray text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
