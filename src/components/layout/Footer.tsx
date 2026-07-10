import Link from 'next/link'
import { sayings } from '@/data/sayings'

function daySeededSaying() {
  const pool = sayings.filter((saying) => saying.weight === 'footer')
  const now = new Date()
  const start = Date.UTC(now.getUTCFullYear(), 0, 1)
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  const day = Math.floor((today - start) / 86400000)

  return pool[day % pool.length]?.text ?? 'Service before status.'
}

export default function Footer() {
  const saying = daySeededSaying()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-cream/10 py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="font-serif text-xl text-cream mb-2">Elijah Smith</p>
            <p className="font-serif italic text-cream/35 text-xl max-w-md leading-snug">
              {saying}
            </p>
          </div>

          <nav className="flex flex-col md:flex-row gap-6 md:gap-10">
            {[
              { href: '/work', label: 'Work' },
              { href: '/principles', label: 'Principles' },
              { href: '/essays', label: 'Essays' },
              { href: '/about', label: 'About' },
              { href: '/consultation', label: 'Talk' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs tracking-[0.2em] uppercase text-cream/30 hover:text-gold transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-cream/20 text-xs tracking-wide">
            &copy; {year} Elijah Smith. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs tracking-wide">mindfultech.services</p>
        </div>
      </div>
    </footer>
  )
}

