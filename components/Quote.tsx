export default function Quote() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="card-surface rounded-3xl p-8 md:p-14">
          <p className="font-display text-3xl leading-tight md:text-5xl">
            “A premium website should make the offer feel valuable before the first sales call.”
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-cyan/20" />
            <div>
              <p className="font-semibold text-white">Bezino Agency</p>
              <p className="text-sm text-white/45">Design & development studio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}