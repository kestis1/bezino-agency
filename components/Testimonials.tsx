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
    author: "SaaS Founder",
    highlight: "Clean work",
  },
  {
    quote: "The whole process was straightforward. No surprises, no fluff. They delivered what they said they would.",
    author: "Product Lead",
    highlight: "Transparent",
  },
  {
    quote: "They actually cared about the details. From the design to the copy to the code, everything felt intentional.",
    author: "Startup Operator",
    highlight: "Thoughtful",
  },
  {
    quote: "Our team was impressed with the code quality. It's documented, scalable, and easy to work with.",
    author: "Engineering Lead",
    highlight: "Production-ready",
  },
  {
    quote: "They didn't just build a site, they helped us think through our positioning and messaging.",
    author: "Early-stage Founder",
    highlight: "Strategic",
  },
  {
    quote: "Fast, professional, and they actually listen. Would work with them again.",
    author: "E-commerce Owner",
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
    <section className="py-20 bg-[oklch(0.09_0.005_264)]">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
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

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="border border-white/[0.08] rounded-sm bg-[oklch(0.10_0.005_264)] p-6 flex flex-col"
            >
              {/* Quote icon */}
              <Quote size={20} className="text-cyan/30 mb-4" />

              {/* Quote */}
              <p
                className="text-[oklch(0.60_0.010_264)] text-sm leading-relaxed flex-1 mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author + Highlight */}
              <div className="border-t border-white/[0.06] pt-4">
                <p className="font-mono-label text-[0.65rem] text-[oklch(0.45_0.008_264)] tracking-wider uppercase mb-1">
                  {testimonial.author}
                </p>
                <p className="text-[0.7rem] text-cyan font-mono-label tracking-wider uppercase">
                  {testimonial.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
