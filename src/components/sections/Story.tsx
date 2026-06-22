import FadeIn from '@/components/ui/FadeIn'

export default function Story() {
  return (
    <section className="py-32 border-t border-cream/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1fr,2fr] gap-16 md:gap-24 items-start">
          <FadeIn>
            <div className="md:sticky md:top-32">
              <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">Story</p>
              <h2 className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] text-cream leading-tight">
                How I Got Here
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-7">
            <FadeIn delay={0.1}>
              <p className="font-serif text-xl text-cream/80 leading-relaxed">
                I started in Lexington, Kentucky. Psychology and social work were the
                first lens — understanding how people move, where systems fail, and
                why access matters.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-cream/45 leading-relaxed">
                That foundation carried through Dallas, the Bay Area, Denver, and
                eventually Costa Rica. Commercial real estate taught me capital flows
                and how assets move. Community organizing taught me coordination —
                what it takes to move people toward something together.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-cream/45 leading-relaxed">
                In Denver, I built in the community sector. I had a practice serving
                the mental health community, founded SHIFT — a nonprofit in the mental
                health sector — and organized Empower, a national conference that
                brought together 24 speakers and over 1,000 attendees. Proof that
                ecosystems can be built.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-cream/45 leading-relaxed">
                Technology came through self-teaching. Python. Solidity. Chainlink CCIP.
                AI systems. Blockchain architecture. Each language learned because a
                specific problem required it.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="font-serif text-xl text-cream/80 leading-relaxed">
                Today the work sits at the intersection of all of it: systems that
                help people coordinate, build, and move resources with more
                intelligence.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="border-l-2 border-gold/25 pl-6 mt-10">
                <p className="font-serif text-2xl text-cream/50 italic leading-relaxed">
                  “The goal has always been the same — build infrastructure that
                  gives more people more access.”
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
