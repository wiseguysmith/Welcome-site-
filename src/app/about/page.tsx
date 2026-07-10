import { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import PortraitFrame from '@/components/ui/PortraitFrame'
import { SHOW_VOICE } from '@/data/site'

export const metadata: Metadata = {
  title: 'About | Elijah Smith',
  description:
    'Elijah Smith, from psychology and community work in Lexington to building technology in service of access.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">About</p>
          <h1 className="font-serif text-[clamp(3rem,7vw,8rem)] text-cream leading-tight mb-20">
            Where the lens came from.
          </h1>
        </FadeIn>

        <div className="grid lg:grid-cols-[0.78fr,1.22fr] gap-16 lg:gap-24 mb-28">
          <FadeIn>
            <div className="lg:sticky lg:top-32">
              <PortraitFrame className="max-w-sm" priority />

              {SHOW_VOICE && (
                <div className="mt-10 border border-cream/10 p-5 max-w-sm">
                  {/* VOICE_PENDING - 20 to 30 seconds of Elijah reading his own lines. */}
                  <p className="font-mono text-xs text-gold/50 tracking-[0.2em] uppercase mb-4">Voice</p>
                  <audio controls preload="none" className="w-full">
                    <source src="/audio/elijah-voice.mp3" type="audio/mpeg" />
                  </audio>
                </div>
              )}
            </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.08}>
              <section>
                <p className="font-mono text-xs text-gold/45 tracking-[0.25em] uppercase mb-4">Where it started</p>
                <p className="font-serif text-2xl text-cream/82 leading-relaxed">
                  I grew up in Lexington, Kentucky. Psychology, social work, and
                  community organizing came first. They taught me to notice where
                  a system says no before a person ever gets to ask.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.12}>
              <section>
                <p className="font-mono text-xs text-gold/45 tracking-[0.25em] uppercase mb-4">The turn</p>
                <p className="text-cream/48 leading-relaxed">
                  Denver added another layer: mental health practice, SHIFT, and
                  Empower, a conference with 24 speakers and more than 1,000
                  attendees. Technology came later because the people I served kept
                  meeting walls that software, contracts, and capital had helped build.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.16}>
              <section>
                <p className="font-mono text-xs text-gold/45 tracking-[0.25em] uppercase mb-4">The self-taught path</p>
                <p className="text-cream/48 leading-relaxed">
                  I taught myself Python, Solidity, Chainlink, and AI systems because
                  credentials were part of the wall. That was not just a career move.
                  It became a belief: learn the language, then translate it for the
                  people who were told it was not for them.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.2}>
              <section>
                <p className="font-mono text-xs text-gold/45 tracking-[0.25em] uppercase mb-4">The geography</p>
                <p className="text-cream/48 leading-relaxed">
                  Kentucky, DFW, the Bay Area, Denver, Costa Rica. I do not treat
                  those places like resume stops. I went where the gaps were visible,
                  then listened long enough to understand what kind of door the place
                  actually needed.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.24}>
              <section>
                <p className="font-mono text-xs text-gold/45 tracking-[0.25em] uppercase mb-4">The names</p>
                <p className="text-cream/48 leading-relaxed">
                  Family and friends have called me Wise, Eli, and Jah since I was a
                  kid. They are warmth, not branding. The public work carries my full
                  name: Elijah Smith.
                </p>
              </section>
            </FadeIn>
          </div>
        </div>

        <FadeIn>
          <div className="border-t border-cream/10 pt-16 flex flex-wrap gap-4">
            <Button href="/work" variant="primary">
              The work -&gt;
            </Button>
            <Button href="/consultation" variant="ghost">
              Start a conversation
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
