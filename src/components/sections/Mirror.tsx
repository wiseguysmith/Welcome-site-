import Link from 'next/link'
import { CONTACT_EMAIL } from '@/data/site'

export default function Mirror() {
  return (
    <section className="relative min-h-[100svh] bg-black flex items-center justify-center px-6 py-28 border-t border-cream/10 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mirror-line mirror-delay-1 font-serif text-[clamp(1.6rem,4vw,3rem)] text-cream/60 leading-tight">
          You&apos;ve spent a few minutes with me.
        </p>
        <h2 className="mirror-line mirror-delay-2 mt-10 font-serif text-[clamp(2.35rem,7vw,4.5rem)] text-cream leading-tight">
          So &mdash; who were you locked out of?
        </h2>
        <h3 className="mirror-line mirror-delay-3 mt-5 font-serif text-[clamp(2.1rem,6vw,4rem)] text-cream leading-tight">
          And who are you keeping out?
        </h3>

        <p className="mirror-line mirror-delay-4 mt-16 font-serif italic text-[clamp(1.15rem,2.5vw,1.75rem)] text-cream/60 leading-relaxed">
          Just a warrior that dreams he can bring peace. - see you in the work.
        </p>

        <div className="mirror-line mirror-delay-5 mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
          <Link
            href="/consultation"
            className="font-mono text-xs text-gold/70 tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300"
          >
            Start a conversation
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-mono text-xs text-cream/35 tracking-[0.16em] uppercase hover:text-gold transition-colors duration-300"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}

