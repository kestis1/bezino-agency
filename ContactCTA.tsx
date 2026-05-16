/*
 * BEZINO CONTACT CTA SECTION
 * Design: Brutalist Precision — full-width dark CTA with gradient accent
 * Layout: Centered, high-impact conversion section before footer
 */

import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-[oklch(0.09_0.005_264)]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,oklch(0.85_0.18_196/5%)_0%,transparent_70%)]" />
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

      <div className="relative z-10 container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            className="font-display font-800 text-[oklch(0.94_0.003_264)] leading-tight mb-6"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Ready to Build a Site That
            <br />
            <span className="gradient-text">Actually Converts?</span>
          </h2>

          <p className="text-[oklch(0.50_0.010_264)] text-lg leading-relaxed mb-8 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Tell us what you're building and we'll map out the fastest path to a premium, production-ready landing page.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#quote"
              onClick={(e) => { e.preventDefault(); document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-sm text-base w-full sm:w-auto justify-center"
            >
              Start Your Project
              <ArrowRight size={16} />
            </a>
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-outline inline-flex items-center gap-2.5 px-8 py-4 rounded-sm text-base w-full sm:w-auto justify-center"
            >
              View Work
            </a>
          </div>

          {/* Contact option */}
          <div className="flex items-center justify-center gap-2 pt-8 border-t border-white/[0.06]">
            <span className="text-[oklch(0.50_0.010_264)] text-sm">Questions?</span>
            <a
              href="mailto:bezinoagency@gmail.com"
              className="text-cyan hover:text-cyan/80 transition-colors font-600 text-sm inline-flex items-center gap-1"
            >
              bezinoagency@gmail.com
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
