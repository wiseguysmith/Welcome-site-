import { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'
import EssayCard from '@/components/ui/EssayCard'
import { essays } from '@/data/essays'

export const metadata: Metadata = {
  title: 'Essays | Elijah Smith',
  description: 'Notes on technology, capital, and access.',
}

export default function EssaysPage() {
  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">Writing</p>
          <h1 className="font-serif text-[clamp(3rem,7vw,8rem)] text-cream leading-tight mb-6">
            Essays
          </h1>
          <p className="text-cream/35 text-lg max-w-xl mb-16">
            Notes on technology, capital, and access.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-16">
            {['All', 'Systems', 'Capital', 'Ecosystems', 'Philosophy', 'Field Notes'].map((cat) => (
              <span
                key={cat}
                className={`font-mono text-xs px-4 py-2 border tracking-[0.15em] uppercase cursor-default select-none ${
                  cat === 'All'
                    ? 'border-gold/40 text-gold'
                    : 'border-cream/10 text-cream/25'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          {essays.length > 0 ? (
            <div>
              {essays.map((essay) => (
                <EssayCard key={essay.slug} essay={essay} />
              ))}
            </div>
          ) : (
            <div className="py-20 border-t border-cream/10">
              <p className="font-serif text-2xl text-cream/25">
                Essays are coming. Check back soon.
              </p>
            </div>
          )}
        </FadeIn>
      </div>
    </div>
  )
}

