import FadeIn from '@/components/ui/FadeIn'

export default function Breath({ text }: { text: string }) {
  return (
    <div className="min-h-[40vh] flex items-center justify-center px-6 border-t border-cream/5">
      <FadeIn direction="none">
        <p className="font-serif italic text-[clamp(1.55rem,4vw,3rem)] text-cream/70 text-center leading-tight">
          <span className="text-gold/60">-</span> {text}
        </p>
      </FadeIn>
    </div>
  )
}

