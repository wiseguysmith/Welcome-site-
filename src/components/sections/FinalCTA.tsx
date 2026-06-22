import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'

export default function FinalCTA() {
  return (
    <section className="py-40 border-t border-cream/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-8">Let’s Work</p>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,6rem)] text-cream leading-tight mb-8">
              Building something at the edge?
            </h2>
            <p className="text-cream/40 text-lg leading-relaxed mb-12 max-w-xl">
              Technology. Capital. Community. If your work lives at that
              intersection, let’s have a conversation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="https://calendly.com/mindfultechnology" external variant="primary">
                Schedule a Consultation
              </Button>
              <Button href="/consultation" variant="ghost">
                Send a Message
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
