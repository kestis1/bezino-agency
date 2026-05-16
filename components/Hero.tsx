/*
 * BEZINO HERO SECTION
 * Design: Brutalist Precision — full-viewport dark hero with grid background
 * Layout: Left-heavy text block with asymmetric composition
 * Animation: Staggered word reveals, fade-up elements
 */

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663666570549/9ww9FhpDzHYpo7TRELpyEu/bezino-hero-bg-CgTcNkgrxPgp5mFCVJC74T.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stats = [
  { value: "✓", label: "Conversion-focused" },
  { value: "✓", label: "Production-ready" },
  { value: "✓", label: "Fast delivery" },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Radial gradient glow behind headline */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/[0.08] rounded-full blur-3xl" />
      {/* Dark overlay with stronger gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.07_0.004_264/0.98)] via-[oklch(0.07_0.004_264/0.92)] to-[oklch(0.07_0.004_264/0.85)]" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[oklch(0.07_0.004_264)] via-[oklch(0.07_0.004_264/0.5)] to-transparent" />
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 229, 255, 0.05) 25%, rgba(0, 229, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 229, 255, 0.05) 75%, rgba(0, 229, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 229, 255, 0.05) 25%, rgba(0, 229, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 229, 255, 0.05) 75%, rgba(0, 229, 255, 0.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="relative z-10 container pt-16 pb-16">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-3 mb-8"
          >
            <span className="section-label">Bezino Agency</span>
            <span className="w-8 h-px bg-[oklch(0.85_0.18_196)]" />
            <span className="section-label opacity-60">Est. 2021</span>
          </motion.div>

          {/* Headline with glow */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display font-800 text-[oklch(0.94_0.003_264)] leading-[1.0] tracking-tight mb-6 relative"
            style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)" }}
          >
            {/* Glow effect behind text */}
            <span className="absolute -inset-4 bg-gradient-to-r from-cyan-500/0 via-cyan-500/[0.15] to-cyan-500/0 blur-2xl -z-10" />
            Your Site Should{" "}
            <span className="gradient-text">Earn Its Keep.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[oklch(0.60_0.010_264)] text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Modern websites designed to look premium, load fast, and turn visitors into customers.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.a
              href="#quote"
              onClick={(e) => { e.preventDefault(); handleScroll("#quote"); }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm text-sm font-700 transition-all duration-200"
            >
              Book a Discovery Call
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#work"
              onClick={(e) => { e.preventDefault(); handleScroll("#work"); }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm text-sm transition-all duration-200"
            >
              <Play size={14} className="fill-current" />
              See Our Work
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-8 pt-6 border-t border-white/[0.06]"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-display font-800 text-2xl text-[oklch(0.94_0.003_264)]">
                  {stat.value}
                </span>
                <span className="font-mono-label text-[0.65rem] tracking-widest uppercase text-[oklch(0.45_0.008_264)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-mono-label text-[0.6rem] tracking-widest uppercase text-[oklch(0.35_0.006_264)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[oklch(0.85_0.18_196/50%)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
