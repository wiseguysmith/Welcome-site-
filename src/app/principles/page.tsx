import { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Principles | Elijah Smith',
  description: 'The Elijah Operating System.',
}

const filterQuestions = [
  'Who does this serve?',
  'Who does this exclude?',
  'Does this increase access or reduce it?',
  'Infrastructure or trend?',
  'Can this outlast me?',
]

const nonNegotiables = [
  'Never commodify access to knowledge.',
  'Never build systems that exclude the people you claim to serve.',
  'Never dilute the work to appeal to the wrong audience.',
  'Never present aspiration as achievement - be honest about built vs. being built.',
  'Never separate commercial success from the community it was meant to serve.',
  'Never become a person of one world. The translation between worlds is the work.',
]

const mentalModels = [
  {
    name: 'The Gap Model',
    copy: 'Everything worth building addresses a gap between people and resources they need. Map the gap, then design the bridge. Never the reverse.',
  },
  {
    name: 'The Translation Model',
    copy: 'Every domain has language that keeps outsiders out. Learn it fluently, then translate it for the people who need access to what it guards.',
  },
  {
    name: 'The Infrastructure Test',
    copy: 'If it requires Elijah personally to keep running, it is not infrastructure. Build for absence, not presence.',
  },
  {
    name: 'The Access Question',
    copy: "Who does this serve, and who does it exclude? If you can't answer both sides, you don't yet understand the system.",
  },
  {
    name: 'The Multiplier Frame',
    copy: 'Technology enables; community scales. Technology without community is optimization. Community without technology is under-resourced.',
  },
]

export default function PrinciplesPage() {
  return (
    <div className="min-h-screen pt-40 pb-32">
      <article className="max-w-[820px] mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">
            The Elijah Operating System
          </p>
          <h1 className="font-serif text-[clamp(3rem,7vw,7rem)] text-cream leading-tight mb-8">
            The filter before the build.
          </h1>
          <p className="text-cream/45 text-lg leading-relaxed mb-20 max-w-2xl">
            Calm reference material for the question underneath the work.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <section className="border-t border-cream/10 pt-12 mb-20">
            <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-8">
              The five questions
            </p>
            <ol className="space-y-5">
              {filterQuestions.map((question, index) => (
                <li key={question} className="grid grid-cols-[3rem,1fr] gap-5">
                  <span className="font-mono text-xs text-gold/30 pt-2">0{index + 1}</span>
                  <span className="font-serif text-2xl text-cream/80 leading-snug">{question}</span>
                </li>
              ))}
            </ol>
          </section>
        </FadeIn>

        <FadeIn delay={0.12}>
          <section className="border-t border-cream/10 pt-12 mb-20">
            <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-8">
              Non-negotiables
            </p>
            <ul className="space-y-5">
              {nonNegotiables.map((line) => (
                <li key={line} className="font-serif text-[clamp(1.35rem,3vw,2rem)] text-cream/72 leading-snug">
                  {line}
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={0.16}>
          <section className="border-t border-cream/10 pt-12">
            <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-8">
              Mental models
            </p>
            <div className="space-y-10">
              {mentalModels.map((model, index) => (
                <div key={model.name} className="grid md:grid-cols-[4rem,1fr] gap-5">
                  <span className="font-mono text-xs text-gold/30 pt-2">0{index + 1}</span>
                  <div>
                    <h2 className="font-serif text-2xl text-cream mb-3">{model.name}</h2>
                    <p className="text-cream/45 leading-relaxed">{model.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      </article>
    </div>
  )
}

