export default function Doorway() {
  return (
    <section
      id="doorway"
      aria-label="Opening question"
      className="relative min-h-[100svh] bg-black flex items-center justify-center overflow-hidden px-6"
    >
      <div className="relative z-10 max-w-5xl text-center">
        <h1 className="doorway-question font-serif text-[clamp(2.2rem,8vw,4rem)] leading-tight text-cream">
          Who is locked out of this &mdash; and why?
        </h1>
        <p className="doorway-note mt-8 font-mono text-xs md:text-sm text-gold/70 tracking-[0.24em] uppercase">
          The question behind everything I build.
        </p>
      </div>

      <div className="doorway-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-mono text-[0.65rem] text-cream/15 tracking-[0.3em] uppercase">scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-gold/25 to-transparent" />
      </div>
    </section>
  )
}

