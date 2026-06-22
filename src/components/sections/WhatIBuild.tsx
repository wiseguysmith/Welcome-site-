import FadeIn from '@/components/ui/FadeIn'

const pillars = [
  {
    tag: '01',
    label: 'AI Operating Systems',
    description:
      'Automation, workflows, business intelligence, and agentic infrastructure built for serious operators. Technology that reduces friction without losing the human layer.',
  },
  {
    tag: '02',
    label: 'Capital & Tokenization Infrastructure',
    description:
      'Real-world asset tokenization, deal readiness, and capital pathways for the next asset layer. Making ownership more transparent and capital more accessible.',
  },
  {
    tag: '03',
    label: 'Founder & Innovation Ecosystems',
    description:
      'Education, team formation, university pipelines, and community infrastructure for the builders who come next. Ecosystems that sustain, not just inspire.',
  },
]

export default function WhatIBuild() {
  return (
    <section className="py-32 border-t border-cream/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">What I Build</p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-cream mb-20 leading-tight max-w-lg">
            Three Domains.<br />One Operating System.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-px bg-cream/5">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.tag} delay={i * 0.1}>
              <div className="bg-black p-10 h-full group hover:bg-charcoal/50 transition-all duration-500">
                <p className="font-mono text-xs text-gold/25 tracking-[0.2em] mb-8">{pillar.tag}</p>
                <h3 className="font-serif text-2xl text-cream mb-5 group-hover:text-gold transition-colors duration-300 leading-snug">
                  {pillar.label}
                </h3>
                <p className="text-cream/45 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
