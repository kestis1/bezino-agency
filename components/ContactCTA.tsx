export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-cyan/20 bg-cyan/10 p-8 md:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />

          <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <span className="section-label">Start a project</span>
              <h2 className="mt-4 text-4xl md:text-6xl">
                Need a website that feels premium from the first click?
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-white/60">
                Tell us what you are building and we will shape the landing page direction, structure, and launch-ready experience.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <a href="mailto:hello@bezino.agency" className="btn-primary rounded-full px-7 py-4 text-center">
                Email Bezino
              </a>
              <a href="#contact-form" className="btn-outline rounded-full px-7 py-4 text-center">
                Fill project form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}