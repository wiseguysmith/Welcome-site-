import FadeIn from '@/components/ui/FadeIn'
import { SHOW_SCAR } from '@/data/site'

export default function Scar() {
  if (!SHOW_SCAR) return null

  return (
    <section className="py-32 border-t border-cream/10">
      <div className="max-w-[760px] mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-8">Where It Broke</p>
          {/* SCAR_CONTENT_PENDING - one true story: what he built that failed,
              what it cost, what it taught. Ship hidden until copy lands. */}
          <div className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] text-cream/55 leading-relaxed">
            <p>The failure story is held until Elijah names it in his own words.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

