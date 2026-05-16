/*
 * BEZINO SERVICES SECTION
 * Design: Brutalist Precision — expandable service cards with structural lines
 * Layout: 2-column grid on desktop, stacked on mobile
 */

import { motion } from "framer-motion";
import { Zap, Code2, BarChart3, Layers, Smartphone, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Layers,
    number: "01",
    title: "Landing Pages",
    description:
      "Conversion-focused pages for product launches, campaigns, and validation. Built to communicate your offer clearly and move visitors to action.",
    features: ["Clear visual hierarchy", "Conversion-led layout", "Campaign & launch ready", "Mobile responsive"],
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Startup Websites",
    description:
      "Clean marketing sites that explain what you do, make the business feel credible, and hold up when people actually look.",
    features: ["Offer clarity", "Trust-building structure", "Fast and lightweight", "Built to grow with you"],
  },
  {
    icon: Zap,
    number: "03",
    title: "SaaS & AI Product Sites",
    description:
      "Premium product pages for software, platforms, and AI tools. Designed to communicate value without overpromising.",
    features: ["Product storytelling", "Feature showcases", "Pricing page design", "Premium visual system"],
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Website Redesigns",
    description:
      "Modern rebuilds for outdated websites that need better structure, clearer messaging, and a visual system that doesn't look like 2017.",
    features: ["Structure & UX improvements", "Visual refresh", "Content restructuring", "Performance uplift"],
  },
  {
    icon: Code2,
    number: "05",
    title: "Frontend Development",
    description:
      "React / Vite implementation with clean, responsive layouts. We build from designs or spec — fast, maintainable, production-ready.",
    features: ["React / Vite", "Responsive layouts", "Clean, readable code", "Cross-browser tested"],
  },
  {
    icon: Smartphone,
    number: "06",
    title: "Launch Support",
    description:
      "Contact form setup, basic SEO configuration, performance checks, and deployment polish so you go live without loose ends.",
    features: ["Contact form integration", "Basic SEO setup", "Performance checks", "Deployment support"],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[oklch(0.09_0.005_264)]">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="section-label block mb-4">What We Build</span>
            <h2
              className="font-display font-800 text-[oklch(0.94_0.003_264)] leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Focused Work.
              <br />
              <span className="gradient-text">Clear Results.</span>
            </h2>
            <p className="text-[oklch(0.50_0.010_264)] text-base leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Web design and development for startups, SaaS teams, and modern businesses that need a sharper online presence.
            </p>
        </div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group bg-[oklch(0.09_0.005_264)] p-8 hover:bg-[oklch(0.11_0.006_264)] transition-colors duration-300 relative cursor-pointer"
              >
                {/* Number */}
                <span className="font-mono-label text-[0.65rem] text-[oklch(0.25_0.005_264)] group-hover:text-cyan/50 transition-colors duration-200 block mb-6">
                  {service.number}
                </span>

                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-sm border border-white/[0.08] flex items-center justify-center mb-5 group-hover:border-cyan/30 group-hover:bg-cyan/5 transition-all duration-300"
                >
                  <Icon size={18} className="text-[oklch(0.50_0.010_264)] group-hover:text-cyan transition-colors duration-200" />
                </motion.div>

                {/* Title */}
                <h3 className="font-display font-700 text-lg text-[oklch(0.94_0.003_264)] mb-3 group-hover:text-cyan transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[oklch(0.50_0.010_264)] text-sm leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-xs text-[oklch(0.40_0.008_264)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <span className="w-1 h-1 rounded-full bg-cyan/50 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
