/*
 * BEZINO TRUST BAR
 * Design: Brutalist Precision — minimal trust signals after hero
 * Shows: "Featured in" or key differentiators as a horizontal strip
 */

import { motion } from "framer-motion";
import { Shield, Clock, Star, Zap } from "lucide-react";

const signals = [
  { icon: Zap, label: "Conversion-focused", sub: "built for results" },
  { icon: Shield, label: "Production-ready", sub: "clean, scalable code" },
  { icon: Clock, label: "Fast turnaround", sub: "flexible timeline" },
  { icon: Star, label: "Modern workflows", sub: "Next.js, React, Tailwind" },
];

export default function TrustBar() {
  return (
    <section className="py-10 bg-[oklch(0.09_0.005_264)] border-b border-white/[0.06]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/[0.06]"
        >
          {signals.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 lg:px-8 first:lg:pl-0 last:lg:pr-0">
              <div className="w-8 h-8 rounded-sm border border-white/[0.08] flex items-center justify-center flex-shrink-0 bg-cyan/5">
                <Icon size={15} className="text-cyan/70" />
              </div>
              <div>
                <p className="font-display font-600 text-sm text-[oklch(0.80_0.008_264)]">{label}</p>
                <p className="font-mono-label text-[0.6rem] text-[oklch(0.35_0.006_264)] tracking-wider">{sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
