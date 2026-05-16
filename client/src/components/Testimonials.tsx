/*
 * BEZINO TESTIMONIALS SECTION
 * Design: Brutalist Precision — card grid with structural borders
 * Layout: 3-column masonry-style on desktop
 */

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They understood what we were trying to do and built something that actually works. The site feels premium and the code is clean.",
    author: "Sarah Chen",
    role: "Founder",
    company: "TalentFlow",
    highlight: "Clean work",
  },
  {
    quote: "The whole process was straightforward. No surprises, no fluff. They delivered what they said they would.",
    author: "Marcus Webb",
    role: "Head of Product",
    company: "LedgerAI",
    highlight: "Transparent",
  },
  {
    quote: "They actually cared about the details. From the design to the copy to the code, everything felt intentional.",
    author: "Priya Nair",
    role: "Founder",
    company: "Horizon",
    highlight: "Thoughtful",
  },
  {
    quote: "Our team was impressed with the code quality. It's documented, scalable, and easy to work with.",
    author: "Tom Eriksson",
    role: "CTO",
    company: "Noir",
    highlight: "Production-ready",
  },
  {
    quote: "They didn't just build a site, they helped us think through our positioning and messaging.",
    author: "Aisha Okonkwo",
    role: "Founder",
    company: "Startup Studio",
    highlight: "Strategic",
  },
  {
    quote: "Fast, professional, and they actually listen. Would work with them again.",
    author: "James Thornton",
    role: "Founder",
    company: "B2B SaaS",
    highlight: "Reliable",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Testimonials() {
  return (
    <section className="py-28 bg-[oklch(0.09_0.005_264)]">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label block mb-4">Feedback</span>
          <h2
            className="font-display font-800 text-[oklch(0.94_0.003_264)] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            What teams
            <br />
            <span className="gradient-text">have said</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-[oklch(0.09_0.005_264)] p-8 hover:bg-[oklch(0.11_0.006_264)] transition-colors duration-300 group"
            >
              {/* Quote icon */}
              <Quote size={20} className="text-cyan/30 mb-5 group-hover:text-cyan/50 transition-colors duration-200" />

              {/* Highlight */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-cyan/10 border border-cyan/20 mb-4">
                <span className="font-mono-label text-[0.6rem] text-cyan tracking-wider uppercase">
                  {t.highlight}
                </span>
              </div>

              {/* Quote text */}
              <p className="text-[oklch(0.65_0.010_264)] text-sm leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                <div className="w-8 h-8 rounded-sm bg-[oklch(0.15_0.006_264)] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-700 text-xs text-[oklch(0.60_0.010_264)]">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-600 text-sm text-[oklch(0.80_0.008_264)]">
                    {t.author}
                  </p>
                  <p className="font-mono-label text-[0.6rem] text-[oklch(0.40_0.008_264)] tracking-wider">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
