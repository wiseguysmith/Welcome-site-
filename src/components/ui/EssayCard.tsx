import Link from 'next/link'
import { Essay } from '@/data/essays'

export default function EssayCard({ essay }: { essay: Essay }) {
  return (
    <Link href={`/essays/${essay.slug}`} className="group block">
      <article className="border-b border-cream/10 hover:border-gold/20 transition-all duration-300 py-10 first:border-t">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="font-mono text-xs text-gold/50 tracking-[0.2em] uppercase">
            {essay.category}
          </span>
          <span className="text-cream/20 text-xs">&middot;</span>
          <span className="text-cream/30 text-xs">{essay.readTime}</span>
          <span className="text-cream/20 text-xs">&middot;</span>
          <span className="text-cream/30 text-xs">{essay.date}</span>
        </div>

        <h3 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-cream group-hover:text-gold transition-colors duration-300 mb-3 leading-tight">
          {essay.title}
        </h3>

        <p className="text-cream/40 text-sm leading-relaxed max-w-2xl mb-4">
          {essay.description}
        </p>

        <p className="text-gold/40 text-xs tracking-[0.2em] uppercase group-hover:text-gold transition-colors duration-300">
          Read Essay →
        </p>
      </article>
    </Link>
  )
}
