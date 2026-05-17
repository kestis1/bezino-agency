/*
 * BEZINO WORK / PORTFOLIO SECTION
 * Design: Brutalist Precision — numbered list with large hover-reveal thumbnails
 * Layout: Full-width cards with project details and image reveals
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


const TALENTFLOW = "https://d2xsxph8kpxj0f.cloudfront.net/310519663666570549/9ww9FhpDzHYpo7TRELpyEu/bezino-portfolio-talentflow-mockup-WK5yYZjiqSfiJNShDnLx2f.webp";
const NOIR_CAFE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663666570549/9ww9FhpDzHYpo7TRELpyEu/bezino-portfolio-noir-cafe-mockup-gqDT4MxF62MgQoUPaDsVmH.webp";
const HORIZON = "https://d2xsxph8kpxj0f.cloudfront.net/310519663666570549/9ww9FhpDzHYpo7TRELpyEu/bezino-portfolio-horizon-mockup-iXweyULbZkt2pvT6QbrqJj.webp";
const LEDGERAI = "https://d2xsxph8kpxj0f.cloudfront.net/310519663666570549/9ww9FhpDzHYpo7TRELpyEu/bezino-portfolio-ledgerai-mockup-UwDEbCBVGMs6skhL6xswu6.webp";

const projects = [
  {
    id: "01",
    name: "TalentFlow AI",
    category: "AI Recruiting Platform",
    tags: ["SaaS", "AI", "Dashboard"],
    description: "AI recruiting platform concept for modern hiring teams. Clean dashboard design with candidate matching and pipeline management.",
    image: TALENTFLOW,
    year: "2024",
  },
  {
    id: "02",
    name: "Noir Café",
    category: "Premium Café Brand",
    tags: ["Hospitality", "Brand", "E-commerce"],
    description: "Premium café brand direction with dark luxury styling. Concept for upscale hospitality with online presence and reservations.",
    image: NOIR_CAFE,
    year: "2024",
  },
  {
    id: "03",
    name: "Horizon Trips",
    category: "Travel Agency",
    tags: ["Travel", "Booking", "Editorial"],
    description: "Travel agency concept focused on curated destination discovery. Editorial-style platform design with booking integration.",
    image: HORIZON,
    year: "2023",
  },
  {
    id: "04",
    name: "LedgerAI",
    category: "Finance SaaS Dashboard",
    tags: ["FinTech", "SaaS", "Analytics"],
    description: "Finance SaaS dashboard concept with clean analytics positioning. Real-time financial data visualization and insights.",
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
    <section id="work" className="py-20 bg-[oklch(0.07_0.004_264)]">
      <div className="container">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
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
            Sample landing page directions and concept explorations across different industries.
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
                <div className="md:hidden w-full aspect-video rounded-sm overflow-hidden border border-white/[0.10]">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
                        className="px-2.5 py-1 text-[0.65rem] font-mono-label tracking-wider uppercase border border-white/[0.08] bg-white/[0.03] text-[oklch(0.50_0.010_264)] rounded-sm group-hover:border-cyan/20 group-hover:text-[oklch(0.55_0.012_264)] transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>



              {/* Floating image on hover — desktop only */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 10 }}
                animate={{
                  opacity: hoveredId === project.id ? 1 : 0,
                  scale: hoveredId === project.id ? 1 : 0.92,
                  y: hoveredId === project.id ? 0 : 10,
                }}
                transition={{ duration: 0.3, ease: "easeOut" as const }}
                className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 w-80 aspect-video rounded-lg overflow-hidden border border-white/[0.1] shadow-2xl z-10 pointer-events-none"
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded-lg blur-xl" />
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
            Have a project in mind?
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


