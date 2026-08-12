"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface TradingCardData {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  groups: { label: string; items: string }[];
}

export function TradingCard({ data, index }: { data: TradingCardData; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
      className="group bg-white rounded-2xl border border-brand-border overflow-hidden transition-all duration-[420ms] ease-out hover:-translate-y-2.5 hover:shadow-[0_28px_60px_-15px_rgba(34,34,34,0.22)] hover:border-brand-red/25"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill
          className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
        <span className="absolute bottom-4 left-5 h-[3px] w-9 bg-brand-red transition-all duration-[400ms] group-hover:w-14" />
      </div>

      <div className="p-7 sm:p-8">
        <h3 className="text-2xl font-bold text-brand-dark tracking-tight">{data.title}</h3>
        <p className="mt-3 text-brand-gray text-sm leading-relaxed">{data.description}</p>

        <div className="mt-5 space-y-4">
          {data.groups.map((g) => (
            <div key={g.label}>
              <p className="text-brand-dark text-xs font-bold tracking-[0.12em] uppercase mb-1.5">
                {g.label}
              </p>
              <p className="text-brand-gray text-sm leading-relaxed">{g.items}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
