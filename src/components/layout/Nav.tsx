'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/principles', label: 'Principles' },
  { href: '/essays', label: 'Essays' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const [shown, setShown] = useState(false)
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const updateNav = () => {
      const onHome = pathname === '/'
      const pastDoorway = window.scrollY > window.innerHeight * 0.88
      setShown(!onHome || pastDoorway)
      setSolid(window.scrollY > 20)
    }

    updateNav()
    window.addEventListener('scroll', updateNav)
    window.addEventListener('resize', updateNav)

    return () => {
      window.removeEventListener('scroll', updateNav)
      window.removeEventListener('resize', updateNav)
    }
  }, [pathname])

  useEffect(() => { setOpen(false) }, [pathname])

  const visible = shown || open

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
      } ${
        solid || open
          ? 'bg-black/95 backdrop-blur-sm border-b border-gold/10'
          : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl text-cream hover:text-gold transition-colors duration-300"
        >
          Elijah Smith
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                pathname === href
                  ? 'text-gold'
                  : 'text-cream/50 hover:text-cream'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href="/consultation"
            className="hidden md:inline-flex text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold px-6 py-2.5 hover:bg-gold hover:text-black transition-all duration-300"
          >
            Talk
          </Link>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-cream/60 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-cream/60 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-cream/60 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-cream/10 bg-black/95">
          <nav className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-serif text-2xl text-cream/80 hover:text-gold transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/consultation"
              className="mt-4 inline-flex text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold px-6 py-3 hover:bg-gold hover:text-black transition-all duration-300 w-fit"
            >
              Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

