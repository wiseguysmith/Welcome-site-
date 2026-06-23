import { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import PortraitFrame from '@/components/ui/PortraitFrame'

export const metadata: Metadata = {
  title: 'About | WISE',
  description:
    'The story of WISE — from Lexington to building systems at the intersection of capital, technology, and transformation.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">About</p>
          <h1 className="font-serif text-[clamp(3rem,7vw,8rem)] text-cream leading-tight mb-24">
            The Path<br />Into Systems
          </h1>
        </FadeIn>

        <div className="grid md:grid-cols-[1fr,1.8fr] gap-16 md:gap-24 mb-32">
          <FadeIn>
            <div className="md:sticky md:top-32">
              <PortraitFrame priority />
            </div>
          </FadeIn>

          <div className="space-y-7">
            <FadeIn delay={0.1}>
              <p className="font-serif text-2xl text-cream/80 leading-relaxed">
                I grew up in Lexington, Kentucky. My first framework for
                understanding the world came from psychology and social work —
                learning how people behave under pressure, and where systems
                fail the people inside them.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-cream/45 leading-relaxed">
                That foundation carried through every geography since. Dallas.
                The Bay Area. Denver. Costa Rica. Each place taught me something
                different about how capital, community, and technology intersect —
                and where the gaps are.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-cream/45 leading-relaxed">
                In Colorado, I built in commercial real estate — acquiring,
                operating, and selling assets. I owned a 5,000 sq ft commercial
                unit, ran a transportation business, and launched CleanWise. These
                weren’t experiments. They were operator reps.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-cream/45 leading-relaxed">
                In Denver, I built in the community sector. I had a practice serving
                the mental health community, founded SHIFT — a mental health
                nonprofit — and organized Empower: a national conference with 24
                speakers and over 1,000 attendees. Proof that ecosystems can be
                built from the ground up.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-cream/45 leading-relaxed">
                Technology came through self-teaching. Not a bootcamp, not a
                degree — years of building. Python. Solidity. Chainlink CCIP. AI
                systems. Blockchain architecture. Each language learned to solve
                a specific problem.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="font-serif text-2xl text-cream/80 leading-relaxed">
                Today the work lives at the intersection of all of it. Mindful Tech
                handles the AI systems work. Title2Token tackles real-world asset
                tokenization. The broader ecosystem — BarcodeDAO, Mindful360,
                La Mesa, Dream Up Properties — is the operating system underneath.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Mission */}
        <FadeIn>
          <div className="border-t border-cream/10 pt-20 mb-20">
            <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-6">Mission</p>
            <blockquote className="font-serif text-[clamp(1.5rem,3vw,2.75rem)] text-cream/60 leading-relaxed max-w-3xl italic">
              “Liberating systems and expanding access to resources through
              eco-conscious, human-centered, technology-enabled infrastructure.”
            </blockquote>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-4">
            <Button href="https://calendly.com/mindfultechnology" external variant="primary">
              Schedule a Consultation
            </Button>
            <Button href="/work" variant="ghost">
              Explore the Ecosystem
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
