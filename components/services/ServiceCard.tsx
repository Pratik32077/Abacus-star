"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Truck, Cpu, Users } from "lucide-react";

const ICONS = { truck: Truck, cpu: Cpu, users: Users } as const;
export type ServiceIconKey = keyof typeof ICONS;

export interface ServiceCardData {
  title: string;
  icon: ServiceIconKey;
  image: string;
  imageAlt: string;
  description?: string;
  points: string[];
  pointsLabel?: string;
}

export function ServiceCard({ data, index }: { data: ServiceCardData; index: number }) {
  const Icon = ICONS[data.icon];
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
      className="group bg-white rounded-2xl border border-brand-border overflow-hidden transition-all duration-[420ms] ease-out hover:-translate-y-2.5 hover:shadow-[0_28px_60px_-15px_rgba(34,34,34,0.22)] hover:border-brand-red/25 flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill
          className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-brand-dark/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <Icon size={24} className="text-white" />
          </span>
        </div>
      </div>

      <div className="p-7 sm:p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-brand-dark tracking-tight">{data.title}</h3>
        {data.description && (
          <p className="mt-2 text-brand-gray text-sm leading-relaxed">{data.description}</p>
        )}

        {data.pointsLabel && (
          <p className="mt-4 text-brand-dark text-xs font-bold tracking-[0.12em] uppercase">
            {data.pointsLabel}
          </p>
        )}
        <ul className="mt-3 space-y-2.5 flex-1">
          {data.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-brand-gray leading-relaxed">
              <Check size={15} className="text-brand-red mt-0.5 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
