import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  external?: boolean
  className?: string
}

export default function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-all duration-300 px-8 py-4'
  const variants = {
    primary: 'bg-gold text-black hover:bg-gold/80',
    ghost: 'border border-cream/30 text-cream hover:border-gold hover:text-gold',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  }
  return <Link href={href} className={cls}>{children}</Link>
}
