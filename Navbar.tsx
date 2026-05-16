/*
 * BEZINO NAVBAR
 * Design: Brutalist Precision — fixed top nav with blur backdrop
 * Behavior: transparent on top, frosted glass on scroll
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.07_0.004_264/0.92)] backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-7 h-7 rounded-sm bg-cyan flex items-center justify-center flex-shrink-0">
                <span className="font-display font-800 text-[oklch(0.07_0.004_264)] text-xs leading-none">B</span>
              </div>
              <span className="font-display font-700 text-[oklch(0.94_0.003_264)] text-base tracking-tight">
                Bezino
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#quote"
                onClick={(e) => { e.preventDefault(); handleNavClick("#quote"); }}
                className="btn-primary px-5 py-2 rounded-sm text-sm"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-[oklch(0.55_0.012_264)] hover:text-[oklch(0.94_0.003_264)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 bg-[oklch(0.07_0.004_264/0.97)] backdrop-blur-xl flex flex-col pt-20 px-6 pb-8"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display font-700 text-3xl text-left text-[oklch(0.94_0.003_264)] py-3 border-b border-white/[0.06] hover:text-cyan transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="mt-8"
            >
              <a
                href="#quote"
                onClick={(e) => { e.preventDefault(); handleNavClick("#quote"); }}
                className="btn-primary w-full py-4 rounded-sm text-base text-center block"
              >
                Get a Quote
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
