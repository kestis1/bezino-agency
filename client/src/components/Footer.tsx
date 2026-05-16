/*
 * BEZINO FOOTER
 * Design: Brutalist Precision — minimal dark footer with structural lines
 * Layout: 4-column grid on desktop, stacked on mobile
 */

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: [
    "Landing Page Design",
    "SaaS Marketing Sites",
    "CRO & Analytics",
    "Development",
    "Site Redesigns",
  ],
  Company: [
    "About Us",
    "Our Work",
    "Process",
    "Blog",
    "Careers",
  ],
  Connect: [
    "Twitter / X",
    "LinkedIn",
    "Dribbble",
    "GitHub",
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.07_0.004_264)] border-t border-white/[0.06]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-sm bg-cyan flex items-center justify-center flex-shrink-0">
                <span className="font-display font-800 text-[oklch(0.07_0.004_264)] text-xs leading-none">B</span>
              </div>
              <span className="font-display font-700 text-[oklch(0.94_0.003_264)] text-base tracking-tight">
                Bezino
              </span>
            </div>

            <p className="text-[oklch(0.45_0.008_264)] text-sm leading-relaxed max-w-xs mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              A sharp, modern web studio focused on premium landing pages for startups and SaaS.
            </p>

            <a
              href="mailto:bezinoagency@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm text-[oklch(0.50_0.010_264)] hover:text-cyan transition-colors duration-200 group"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              bezinoagency@gmail.com
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], colIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (colIndex + 1) * 0.07, duration: 0.5, ease: "easeOut" as const }}
            >
              <h4 className="font-mono-label text-[0.65rem] text-[oklch(0.35_0.006_264)] tracking-widest uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-sm text-[oklch(0.45_0.008_264)] hover:text-[oklch(0.75_0.008_264)] transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono-label text-[0.65rem] text-[oklch(0.30_0.006_264)] tracking-wider">
            © {currentYear} Bezino Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="font-mono-label text-[0.65rem] text-[oklch(0.30_0.006_264)] hover:text-[oklch(0.50_0.010_264)] transition-colors duration-200 tracking-wider"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
