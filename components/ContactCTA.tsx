export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-sm border border-cyan/20 bg-[oklch(0.09_0.005_264)] p-8 md:p-12 lg:p-16">
          {/* Glow */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-cyan/5 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid gap-10 md:gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <span className="section-label">Start a project</span>
              <h2
                className="font-display font-800 text-[oklch(0.94_0.003_264)] leading-tight mt-4 mb-5"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Need a site that makes the
                <br className="hidden sm:block" />
                <span className="gradient-text"> right first impression?</span>
              </h2>
              <p className="text-[oklch(0.50_0.010_264)] text-base leading-relaxed max-w-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Tell us what you're building and we'll shape the direction, structure, and experience — from first concept to live site.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <a href="mailto:bezinoagency@gmail.com" className="btn-primary rounded-sm px-7 py-3.5 text-center text-sm">
                bezinoagency@gmail.com
              </a>
              <a href="#contact-form" className="btn-outline rounded-sm px-7 py-3.5 text-center text-sm">
                Share your brief
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}