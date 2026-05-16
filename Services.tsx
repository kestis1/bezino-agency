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
    title: "Landing Page Design",
    description:
      "Conversion-focused landing pages built from scratch. We combine strategic copywriting, visual hierarchy, and psychological triggers to turn visitors into leads.",
    features: ["Custom UI/UX design", "Copywriting & messaging", "A/B test-ready structure", "Brand alignment"],
  },
  {
    icon: Code2,
    number: "02",
    title: "Production-Ready Development",
    description:
      "Clean, performant code in Next.js, React, or Webflow. Every site is optimized for Core Web Vitals, SEO, and fast load times out of the box.",
    features: ["Next.js / React / Webflow", "Core Web Vitals optimized", "SEO-ready markup", "CMS integration"],
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Conversion Rate Optimization",
    description:
      "We don't just build pretty sites — we build sites that perform. Analytics setup, heatmaps, and iterative improvements based on real user data.",
    features: ["Analytics & heatmap setup", "Funnel analysis", "Iterative A/B testing", "Conversion audits"],
  },
  {
    icon: Zap,
    number: "04",
    title: "SaaS Marketing Sites",
    description:
      "Full marketing websites for SaaS products — from hero to pricing to docs. Built to communicate value, reduce churn, and accelerate signups.",
    features: ["Product storytelling", "Pricing page design", "Onboarding flows", "Feature showcases"],
  },
  {
    icon: Smartphone,
    number: "05",
    title: "Mobile-First Experiences",
    description:
      "Every project is designed mobile-first. Responsive layouts, touch-optimized interactions, and performance tuned for all devices and connection speeds.",
    features: ["Responsive design", "Touch interactions", "Progressive enhancement", "Cross-browser QA"],
  },
  {
    icon: RefreshCw,
    number: "06",
    title: "Site Redesigns & Refreshes",
    description:
      "Transform underperforming sites into conversion machines. We audit your existing site, identify friction points, and rebuild with purpose.",
    features: ["UX audit & analysis", "Performance benchmarking", "Phased redesign", "Migration support"],
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
          <span className="section-label block mb-4">What We Do</span>
            <h2
              className="font-display font-800 text-[oklch(0.94_0.003_264)] leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Premium Services
              <br />
              <span className="gradient-text">Built for Results</span>
            </h2>
            <p className="text-[oklch(0.50_0.010_264)] text-base leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We combine strategic design with production-ready development. Every project is custom-built to drive conversions and scale.
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
