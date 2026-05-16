/*
 * BEZINO FAQ SECTION
 * Design: Brutalist Precision — accordion-style Q&A with structural lines
 * Layout: Two-column on desktop (heading + accordion), single column on mobile
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Timeline depends on project scope and complexity. We discuss realistic timelines during the discovery call and keep you updated throughout. Most projects move efficiently once scope is locked in.",
  },
  {
    q: "Do you show fixed pricing on your site?",
    a: "We don't, because every project is different. A single-page SaaS landing page has very different requirements from a multi-page marketing site with animations and CMS integration. We scope each project individually to ensure you're paying for exactly what you need — nothing more.",
  },
  {
    q: "What's included in a landing page project?",
    a: "Every project includes strategy & wireframing, copywriting support, high-fidelity Figma design, production-ready code, mobile responsiveness, SEO markup, and performance optimization. We also provide documentation and support during launch.",
  },
  {
    q: "What tech stack do you build with?",
    a: "We primarily build with Next.js, React, and Tailwind CSS for custom-coded projects. We also work with Webflow for clients who need a no-code CMS. We'll recommend the right stack based on your team's technical capabilities and long-term needs.",
  },
  {
    q: "Can you work with our existing brand guidelines?",
    a: "Absolutely. We work within your existing brand system — fonts, colors, tone of voice — and elevate it for the web. If you don't have brand guidelines yet, we can help define the visual direction as part of the project.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We provide support during launch and are available for questions. For ongoing work like updates, new pages, or performance optimization, we can discuss retainer options.",
  },
  {
    q: "How do revisions work?",
    a: "Revisions are included at each major milestone (wireframes, design, development). We work collaboratively and iterate based on your feedback. Additional revision rounds can be discussed based on project scope.",
  },
  {
    q: "Do you write the copy or do we provide it?",
    a: "Both options work. We can write conversion-focused copy as part of the project scope, or we can work with copy you've already prepared. Many clients do a hybrid — they provide the raw content and we refine it for conversion.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-[oklch(0.07_0.004_264)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="section-label block mb-4">FAQ</span>
            <h2
              className="font-display font-800 text-[oklch(0.94_0.003_264)] leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Questions
              <br />
              <span className="gradient-text">Answered.</span>
            </h2>
            <p className="text-[oklch(0.50_0.010_264)] text-sm leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Can't find what you're looking for? Send us a message and we'll get back to you within a few hours.
            </p>
            <a
              href="#quote"
              onClick={(e) => { e.preventDefault(); document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-outline inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm"
            >
              Ask a Question
            </a>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
            className="divide-y divide-white/[0.06]"
          >
            {faqs.map((faq, index) => (
              <div key={index} className="py-5">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between gap-4 text-left group"
                >
                  <span className={`font-display font-600 text-base transition-colors duration-200 ${openIndex === index ? "text-cyan" : "text-[oklch(0.80_0.008_264)] group-hover:text-[oklch(0.94_0.003_264)]"}`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-sm border flex items-center justify-center transition-all duration-200 mt-0.5 ${openIndex === index ? "border-cyan/40 bg-cyan/10 text-cyan" : "border-white/[0.10] text-[oklch(0.40_0.008_264)] group-hover:border-white/20"}`}>
                    {openIndex === index ? <Minus size={12} /> : <Plus size={12} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" as const }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-[oklch(0.50_0.010_264)] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
