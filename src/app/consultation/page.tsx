import { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'
import ConsultationForm from '@/components/forms/ConsultationForm'

export const metadata: Metadata = {
  title: 'Consultation | Elijah Smith',
  description: "Start a conversation with Elijah Smith about what you are building.",
}

const areas = [
  'AI systems and automation',
  'Real-world asset tokenization',
  'Founder room design',
  'Strategic partnership',
  'Speaking and press',
]

export default function ConsultationPage() {
  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-16 md:gap-24 items-start">
          <FadeIn>
            <div className="md:sticky md:top-32">
              <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">Start Here</p>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-cream leading-tight mb-6">
                Tell me what you are building.
              </h1>
              <p className="text-cream/40 leading-relaxed mb-8 text-sm">
                If the work touches AI systems, tokenized real assets, founder rooms,
                or access to capital, this is a good place to start.
              </p>

              <div className="space-y-3 mb-10">
                {areas.map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-gold/40 rounded-full shrink-0" />
                    <span className="text-cream/35 text-sm">{area}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://calendly.com/mindfultechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs tracking-[0.2em] uppercase bg-gold text-black px-8 py-4 hover:bg-gold/80 transition-all duration-300"
              >
                Book directly on Calendly
              </a>
              <p className="text-cream/20 text-xs mt-4">Or fill out the form below.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ConsultationForm />
          </FadeIn>
        </div>
      </div>
    </div>
  )
}

