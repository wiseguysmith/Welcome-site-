import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'

const beliefs = [
  {
    statement: 'Technology is a tool. People are the purpose. Community is the multiplier.',
    support: 'The build only matters if it helps real people move.',
  },
  {
    statement: 'Communities need operating systems, not just inspiration.',
    support: 'A room can start the work. A repeatable structure helps it last.',
  },
  {
    statement: 'Fragmentation is the state of the world. We are here to put it together.',
    support: 'Most gaps are not talent gaps. They are translation gaps.',
  },
  {
    statement: 'Nobody should be locked out by a credential.',
    support: 'I taught myself to code because the door was closed. Then I propped it open.',
  },
]

export default function HowIThink() {
  return (
    <section id="how-i-think" className="py-32 border-t border-cream/10">
      <div className="max-w-[960px] mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">How I Think</p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-cream mb-16 leading-tight">
            The filter I use before I build.
          </h2>
        </FadeIn>

        <div className="divide-y divide-cream/10">
          {beliefs.map((belief, index) => (
            <FadeIn key={belief.statement} delay={index * 0.07}>
              <article className="grid md:grid-cols-[4rem,1fr] gap-5 py-9 group">
                <span className="font-mono text-xs text-gold/30 tracking-[0.2em] pt-2">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-[clamp(1.55rem,3vw,2.35rem)] text-cream/85 leading-snug group-hover:text-cream transition-colors duration-300">
                    {belief.statement}
                  </h3>
                  <p className="mt-4 text-cream/45 leading-relaxed max-w-2xl">
                    {belief.support}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <Link
            href="/principles"
            className="mt-12 inline-flex font-mono text-xs text-gold/60 tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300"
          >
            The full operating system -&gt; /principles
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

