import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="font-serif text-xl tracking-[0.15em] text-cream mb-2">WISE</p>
            <p className="text-cream/30 text-sm max-w-xs">
              Building systems at the intersection of capital,
              technology, and human transformation.
            </p>
          </div>

          <nav className="flex flex-col md:flex-row gap-6 md:gap-10">
            {[
              { href: '/work', label: 'Work' },
              { href: '/essays', label: 'Essays' },
              { href: '/about', label: 'About' },
              { href: '/consultation', label: 'Consultation' },
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
            &copy; {new Date().getFullYear()} WISE. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs tracking-wide">mindfultech.services</p>
        </div>
      </div>
    </footer>
  )
}
