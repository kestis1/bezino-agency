/*
 * BEZINO MARQUEE / TICKER
 * Design: Brutalist Precision — scrolling tech stack / trust signals
 */

import { motion } from "framer-motion";

const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Webflow",
  "Figma",
  "Vercel",
  "Stripe",
  "Sanity CMS",
  "Contentful",
  "Supabase",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="py-8 bg-[oklch(0.09_0.005_264)] border-y border-white/[0.06] overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[oklch(0.09_0.005_264)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[oklch(0.09_0.005_264)] to-transparent z-10" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-0 whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-0">
            <span className="font-mono-label text-[0.7rem] tracking-widest uppercase text-[oklch(0.30_0.006_264)] px-6">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-cyan/20 flex-shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
