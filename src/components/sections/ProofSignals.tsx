import FadeIn from '@/components/ui/FadeIn'
import { signals } from '@/data/signals'

export default function ProofSignals() {
  return (
    <section className="py-32 border-t border-cream/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">Proof</p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-cream mb-20 leading-tight">
            Selected Signals
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-px bg-cream/5">
          {signals.map((signal, i) => (
            <FadeIn key={signal.label} delay={i * 0.06}>
              <div className="bg-black p-8 group hover:bg-charcoal/40 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-px h-12 bg-gold/25 mt-1 shrink-0 group-hover:bg-gold/50 transition-colors duration-300" />
                  <div>
                    <p className="font-serif text-xl text-cream mb-1 group-hover:text-gold transition-colors duration-300">
                      {signal.label}
                    </p>
                    {signal.detail && (
                      <p className="text-cream/35 text-sm">{signal.detail}</p>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
