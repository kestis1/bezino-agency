/*
 * BEZINO WORK / PORTFOLIO SECTION
 * Design: Brutalist Precision — numbered list with large hover-reveal thumbnails
 * Layout: Full-width cards with project details and image reveals
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const TALENTFLOW = "https://d2xsxph8kpxj0f.cloudfront.net/310519663666570549/9ww9FhpDzHYpo7TRELpyEu/bezino-portfolio-talentflow-BzKnMfAs6GKwKKAbp46oDn.webp";
const NOIR_CAFE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663666570549/9ww9FhpDzHYpo7TRELpyEu/bezino-portfolio-noir-cafe-UzeveLErntenSXZgVSy3Md.webp";
const HORIZON = "https://d2xsxph8kpxj0f.cloudfront.net/310519663666570549/9ww9FhpDzHYpo7TRELpyEu/bezino-portfolio-horizon-F6EnqvaxQnEojvpzqKfdMH.webp";
const LEDGERAI = "https://d2xsxph8kpxj0f.cloudfront.net/310519663666570549/9ww9FhpDzHYpo7TRELpyEu/bezino-portfolio-ledgerai-cnbXpciumP9JmEoWmNx3tk.webp";

const projects = [
  {
    id: "01",
    name: "TalentFlow AI",
    category: "AI Recruiting Platform",
    tags: ["SaaS", "AI", "Dashboard"],
    description: "A full-featured recruiting platform with AI-powered candidate matching, pipeline management, and real-time analytics.",
    image: TALENTFLOW,
    year: "2024",
  },
  {
    id: "02",
    name: "Noir Café",
    category: "Premium Café Brand",
    tags: ["Hospitality", "Brand", "E-commerce"],
    description: "Dark luxury branding and digital presence for an upscale café chain, including online reservations and menu showcase.",
    image: NOIR_CAFE,
    year: "2024",
  },
  {
    id: "03",
    name: "Horizon Trips",
    category: "Travel Agency",
    tags: ["Travel", "Booking", "Editorial"],
    description: "An editorial-style travel platform with destination discovery, curated itineraries, and seamless booking flows.",
    image: HORIZON,
    year: "2023",
  },
  {
    id: "04",
    name: "LedgerAI",
    category: "Finance SaaS Dashboard",
    tags: ["FinTech", "SaaS", "Analytics"],
    description: "Real-time financial analytics dashboard with AI-powered insights, P&L summaries, and cash flow forecasting.",
    image: LEDGERAI,
    year: "2023",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Work() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="work" className="py-28 bg-[oklch(0.07_0.004_264)]">
      <div className="container">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="section-label block mb-4">Selected Work</span>
            <h2
              className="font-display font-800 text-[oklch(0.94_0.003_264)] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Projects That
              <br />
              <span className="gradient-text">Move the Needle</span>
            </h2>
          </div>
          <p className="text-[oklch(0.50_0.010_264)] text-sm max-w-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            A curated selection of landing pages and marketing sites we've built for ambitious teams.
          </p>
        </div>

        {/* Project list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="divide-y divide-white/[0.06]"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-8 py-8 cursor-pointer"
            >
              {/* Number */}
              <div className="hidden md:flex items-start pt-1">
                <span className="font-mono-label text-xs text-[oklch(0.30_0.006_264)] group-hover:text-cyan transition-colors duration-200">
                  {project.id}
                </span>
              </div>

              {/* Main content */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                {/* Image — mobile shows above, desktop shows on hover */}
                <div className="md:hidden w-full aspect-video rounded-sm overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display font-700 text-xl md:text-2xl text-[oklch(0.94_0.003_264)] group-hover:text-cyan transition-colors duration-200">
                      {project.name}
                    </h3>
                    <span className="font-mono-label text-[0.65rem] text-[oklch(0.35_0.006_264)] mt-1.5 flex-shrink-0">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-[oklch(0.45_0.008_264)] text-xs font-mono-label tracking-wider uppercase mb-3">
                    {project.category}
                  </p>
                  <p className="text-[oklch(0.55_0.010_264)] text-sm leading-relaxed max-w-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[0.65rem] font-mono-label tracking-wider uppercase border border-white/[0.08] text-[oklch(0.45_0.008_264)] rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center">
                <div className="w-9 h-9 rounded-sm border border-white/[0.08] flex items-center justify-center text-[oklch(0.35_0.006_264)] group-hover:border-cyan/40 group-hover:text-cyan group-hover:bg-cyan/5 transition-all duration-200">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Floating image on hover — desktop only */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: hoveredId === project.id ? 1 : 0,
                  scale: hoveredId === project.id ? 1 : 0.95,
                }}
                transition={{ duration: 0.25, ease: "easeOut" as const }}
                className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 w-72 aspect-video rounded-sm overflow-hidden border border-white/[0.08] shadow-2xl z-10 pointer-events-none"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-[oklch(0.45_0.008_264)] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Ready to build something that converts?
          </p>
          <a
            href="#quote"
            onClick={(e) => { e.preventDefault(); document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-sm text-sm"
          >
            Start Your Project
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


