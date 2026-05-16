/*
 * BEZINO PROCESS SECTION
 * Design: Brutalist Precision — large numbered steps with connecting lines
 * Layout: Horizontal timeline on desktop, vertical on mobile
 */

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    duration: "Initial phase",
    description:
      "We start with a focused call to understand your business, goals, and what success looks like. Then we outline the approach and scope.",
    deliverable: "Project brief",
  },
  {
    number: "02",
    title: "Strategy & Design",
    duration: "Design phase",
    description:
      "We map out the user flow and create high-fidelity designs in Figma. You get design options and we refine based on your feedback.",
    deliverable: "Figma files",
  },
  {
    number: "03",
    title: "Development",
    duration: "Build phase",
    description:
      "Clean, production-ready code built with Next.js, React, and Tailwind. Performance, accessibility, and SEO are built in from the start.",
    deliverable: "Staging site",
  },
  {
    number: "04",
    title: "Testing & Launch",
    duration: "Final phase",
    description:
      "We test across browsers and devices, make final refinements, and handle deployment. You get clean code and documentation.",
    deliverable: "Live site",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 bg-[oklch(0.07_0.004_264)]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="section-label block mb-4">How We Work</span>
            <h2
              className="font-display font-800 text-[oklch(0.94_0.003_264)] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Our
              <br />
              <span className="gradient-text">Process</span>
            </h2>
          </div>
            <p className="text-[oklch(0.50_0.010_264)] text-sm max-w-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            A streamlined workflow designed for efficiency. Timeline depends on your project scope.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[4.5rem] right-[4.5rem] h-px bg-white/[0.06]" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-px">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" as const }}
                className="group relative flex flex-col"
              >
                {/* Mobile: left border line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-[1.875rem] top-[3.5rem] bottom-0 w-px bg-white/[0.06]" />
                )}

                <div className="flex lg:flex-col gap-5 lg:gap-0 p-6 lg:p-8 hover:bg-[oklch(0.09_0.005_264)] transition-colors duration-300 rounded-sm">
                  {/* Number circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-[3.75rem] h-[3.75rem] rounded-full border border-white/[0.10] bg-[oklch(0.07_0.004_264)] flex items-center justify-center group-hover:border-cyan/30 group-hover:bg-cyan/5 transition-all duration-300">
                      <span className="font-mono-label text-xs text-[oklch(0.40_0.008_264)] group-hover:text-cyan transition-colors duration-200">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 lg:mt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono-label text-[0.6rem] text-cyan/60 tracking-wider">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="font-display font-700 text-base text-[oklch(0.94_0.003_264)] mb-2 group-hover:text-cyan transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-[oklch(0.45_0.008_264)] text-xs leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan/50" />
                      <span className="font-mono-label text-[0.6rem] text-[oklch(0.35_0.006_264)] tracking-wider">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mt-12 p-6 border border-white/[0.06] rounded-sm bg-[oklch(0.09_0.005_264)] flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="w-8 h-8 rounded-sm bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0">
            <span className="text-cyan text-xs">✓</span>
          </div>
          <div>
            <p className="font-display font-600 text-sm text-[oklch(0.80_0.008_264)] mb-0.5">
              Straightforward process.
            </p>
            <p className="text-[oklch(0.45_0.008_264)] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We scope projects based on your needs, outline what's included, and work collaboratively from start to finish.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
