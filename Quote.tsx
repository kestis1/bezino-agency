/*
 * BEZINO CUSTOM QUOTE SECTION
 * Design: Brutalist Precision — full-width dark form with cyan accents
 * Layout: Two-column on desktop (copy + form), single column on mobile
 * Note: No fixed pricing — custom quote only
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const projectTypes = [
  "SaaS Landing Page",
  "Startup Marketing Site",
  "Product Launch Page",
  "E-commerce Brand Site",
  "Agency / Studio Site",
  "Other",
];

// Budget section removed - no pricing discussion in form

const timelines = [
  "Fast turnaround",
  "Standard timeline",
  "Flexible",
  "Depends on scope",
];

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  timeline: string;
  details: string;
}

export default function Quote() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    timeline: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelect = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.projectType) {
      toast.error("Please fill in the required fields.");
      return;
    }
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="quote" className="py-28 bg-[oklch(0.09_0.005_264)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="flex flex-col justify-center"
          >
            <span className="section-label block mb-4">Get in Touch</span>
            <h2
              className="font-display font-800 text-[oklch(0.94_0.003_264)] leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Let's build
              <br />
              <span className="gradient-text">your site.</span>
            </h2>
            <p className="text-[oklch(0.50_0.010_264)] text-base leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Share your project details and we'll get back to you with next steps.
            </p>

            {/* What's included */}
            <div className="space-y-4">
              {[
                "Quick response",
                "Honest assessment",
                "Clear next steps",
                "No pressure",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-[oklch(0.60_0.010_264)] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust signal */}
            <div className="mt-10 pt-8 border-t border-white/[0.06]">
              <p className="font-mono-label text-[0.65rem] text-[oklch(0.35_0.006_264)] tracking-wider uppercase mb-3">
                Who we work with
              </p>
              <div className="flex flex-wrap gap-4">
                {["Startups", "SaaS Teams", "Founders", "Studios"].map((t) => (
                  <span key={t} className="font-display font-600 text-sm text-[oklch(0.45_0.008_264)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-white/[0.08] rounded-sm bg-[oklch(0.10_0.005_264)]">
                <div className="w-14 h-14 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center mb-5">
                  <CheckCircle2 size={24} className="text-cyan" />
                </div>
                <h3 className="font-display font-700 text-xl text-[oklch(0.94_0.003_264)] mb-3">
                  Request Received
                </h3>
                <p className="text-[oklch(0.50_0.010_264)] text-sm max-w-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  We'll review your project details and send you a custom proposal within 24 hours. Check your inbox.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-white/[0.08] rounded-sm bg-[oklch(0.10_0.005_264)] p-8 space-y-6"
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono-label text-[0.65rem] text-[oklch(0.45_0.008_264)] tracking-wider uppercase block mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Alex Johnson"
                      required
                      className="input-dark w-full px-4 py-3 rounded-sm text-sm"
                    />
                  </div>
                  <div>
                    <label className="font-mono-label text-[0.65rem] text-[oklch(0.45_0.008_264)] tracking-wider uppercase block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      required
                      className="input-dark w-full px-4 py-3 rounded-sm text-sm"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="font-mono-label text-[0.65rem] text-[oklch(0.45_0.008_264)] tracking-wider uppercase block mb-2">
                    Company / Startup
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="input-dark w-full px-4 py-3 rounded-sm text-sm"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="font-mono-label text-[0.65rem] text-[oklch(0.45_0.008_264)] tracking-wider uppercase block mb-2">
                    Project Type *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleSelect("projectType", type)}
                        className={`px-3 py-1.5 rounded-sm text-xs border transition-all duration-150 font-mono-label tracking-wide ${
                          form.projectType === type
                            ? "border-cyan/50 bg-cyan/10 text-cyan"
                            : "border-white/[0.08] text-[oklch(0.45_0.008_264)] hover:border-white/20 hover:text-[oklch(0.70_0.008_264)]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>



                {/* Timeline */}
                <div>
                  <label className="font-mono-label text-[0.65rem] text-[oklch(0.45_0.008_264)] tracking-wider uppercase block mb-2">
                    Timeline
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => handleSelect("timeline", t)}
                        className={`px-3 py-1.5 rounded-sm text-xs border transition-all duration-150 font-mono-label tracking-wide ${
                          form.timeline === t
                            ? "border-cyan/50 bg-cyan/10 text-cyan"
                            : "border-white/[0.08] text-[oklch(0.45_0.008_264)] hover:border-white/20 hover:text-[oklch(0.70_0.008_264)]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label className="font-mono-label text-[0.65rem] text-[oklch(0.45_0.008_264)] tracking-wider uppercase block mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="input-dark w-full px-4 py-3 rounded-sm text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-3.5 rounded-sm text-sm flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send My Request
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>

                <p className="text-center text-[oklch(0.35_0.006_264)] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
