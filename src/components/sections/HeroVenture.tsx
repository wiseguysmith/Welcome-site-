import Link from 'next/link'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/ui/FadeIn'
import { projects } from '@/data/projects'

const alsoBuilding = ['Mindful Tech', 'BarcodeDAO', 'Mindful360', 'La Mesa', 'Dream Up Properties', 'ISD Ambassador Work']

export default function HeroVenture() {
  const title2Token = projects.find((project) => project.name === 'Title2Token')

  return (
    <section id="the-work" className="py-32 border-t border-cream/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.85fr,1.15fr] gap-14 lg:gap-24 items-start">
          <FadeIn>
            <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-5">
              Current Mission
            </p>
            <h2 className="font-serif text-[clamp(2.75rem,6vw,6rem)] text-cream leading-tight">
              Title2Token
            </h2>
            <p className="mt-5 text-cream/35 text-sm">
              {title2Token?.status ?? 'Active Development'} - being built now.
            </p>
          </FadeIn>

          <div className="space-y-10">
            <FadeIn delay={0.08}>
              <div className="border-l border-gold/30 pl-6">
                <p className="font-mono text-xs text-gold/45 tracking-[0.2em] uppercase mb-3">The wall</p>
                <p className="font-serif text-2xl text-cream/80 leading-relaxed">
                  Most people cannot own a piece of the buildings their lives happen in.
                  Ownership of real assets is gated by minimums, paperwork, and networks.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.14}>
              <div className="border-l border-cream/10 pl-6">
                <p className="font-mono text-xs text-gold/45 tracking-[0.2em] uppercase mb-3">The door</p>
                <p className="text-cream/50 leading-relaxed">
                  Title2Token turns real-asset ownership into tokenized participation,
                  built on Chainlink CCIP.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border-l border-cream/10 pl-6">
                <p className="font-mono text-xs text-gold/45 tracking-[0.2em] uppercase mb-3">The build</p>
                <p className="text-cream/50 leading-relaxed">
                  It is being built now. The work is deal architecture, product clarity,
                  and the rails that make participation legible.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.26}>
              <div className="pt-4">
                <Button href="/work" variant="primary">
                  All the work -&gt;
                </Button>

                <p className="mt-8 font-mono text-xs text-cream/30 tracking-[0.16em] uppercase leading-relaxed">
                  Also building:{' '}
                  {alsoBuilding.map((name, index) => {
                    const project = projects.find((item) => item.name === name)
                    if (!project) return null

                    return (
                      <span key={name}>
                        <Link href={`/work#${project.id}`} className="hover:text-gold transition-colors duration-300">
                          {name.replace(' Ambassador Work', '')}
                        </Link>
                        {index < alsoBuilding.length - 1 && <span className="text-cream/15"> &middot; </span>}
                      </span>
                    )
                  })}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

