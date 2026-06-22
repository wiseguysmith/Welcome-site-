import FadeIn from '@/components/ui/FadeIn'

const beliefs = [
  'Technology should increase access, not complexity.',
  'Capital should move with more transparency.',
  'Communities need operating systems, not just inspiration.',
  'The future belongs to builders who understand people.',
  'AI should serve human agency, not replace human judgment.',
  'Ownership, access, and coordination are the real infrastructure problems.',
]

export default function Philosophy() {
  return (
    <section className="py-32 border-t border-cream/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">Philosophy</p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-cream mb-20 leading-tight">
            What I Believe
          </h2>
        </FadeIn>

        <div>
          {beliefs.map((belief, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="group py-8 border-b border-cream/10 hover:border-gold/15 transition-colors duration-300 flex items-center gap-8">
                <span className="font-mono text-xs text-gold/15 w-8 shrink-0 group-hover:text-gold/40 transition-colors duration-300">
                  0{i + 1}
                </span>
                <p className="font-serif text-[clamp(1.25rem,2.5vw,2.25rem)] text-cream/60 group-hover:text-cream transition-colors duration-300 leading-snug">
                  {belief}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
