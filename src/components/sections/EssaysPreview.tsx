import FadeIn from '@/components/ui/FadeIn'
import EssayCard from '@/components/ui/EssayCard'
import { essays } from '@/data/essays'
import Link from 'next/link'

export default function EssaysPreview() {
  const preview = essays.slice(0, 3)

  return (
    <section className="py-32 border-t border-cream/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">Essays</p>
              <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-cream leading-tight">
                Systems Notes
              </h2>
              <p className="text-cream/35 text-sm mt-3 max-w-sm">
                Notes on technology, capital, and access.
              </p>
            </div>
            <Link
              href="/essays"
              className="font-mono text-xs text-gold/50 tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300 whitespace-nowrap"
            >
              All Essays -&gt;
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div>
            {preview.map((essay) => (
              <EssayCard key={essay.slug} essay={essay} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

