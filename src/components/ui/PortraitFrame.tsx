import Image from 'next/image'

interface PortraitFrameProps {
  className?: string
  priority?: boolean
}

const portraitSrc = '/images/elijah-portrait.jpg'

export default function PortraitFrame({ className = '', priority = false }: PortraitFrameProps) {
  return (
    <div className={`group relative ${className}`}>
      <div className="absolute -inset-3 border border-gold/10" />
      <div className="relative aspect-[3/4] overflow-hidden border border-cream/10 bg-charcoal/30">
        <Image
          src={portraitSrc}
          alt="Temporary editorial portrait placeholder"
          fill
          priority={priority}
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 40vw, 100vw"
          className="object-cover object-[52%_28%] saturate-[0.95] contrast-[1.03] transition duration-700 group-hover:scale-[1.02]"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>
    </div>
  )
}
