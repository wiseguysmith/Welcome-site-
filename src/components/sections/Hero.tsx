'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(184,150,12,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184,150,12,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(184,150,12,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <motion.p
          className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Elijah &middot; WISE
        </motion.p>

        <motion.h1
          className="font-serif text-[clamp(5rem,13vw,11rem)] leading-[0.88] text-cream mb-10 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          WISE
        </motion.h1>

        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="font-serif text-[clamp(1.2rem,2.5vw,2rem)] text-cream/75 leading-snug mb-6">
            Building systems at the intersection of capital,
            technology, and human transformation.
          </p>

          <p className="font-mono text-xs text-cream/30 tracking-[0.2em] uppercase mb-14">
            AI systems &nbsp;&middot;&nbsp; Real-world asset tokenization &nbsp;&middot;&nbsp; Founder ecosystems &nbsp;&middot;&nbsp; Conscious technology
          </p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.48, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Button href="https://calendly.com/mindfultechnology" external variant="primary">
              Schedule a Consultation
            </Button>
            <Button href="/essays" variant="ghost">
              Read My Thinking
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="font-mono text-xs text-cream/15 tracking-[0.3em] uppercase">scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-gold/25 to-transparent" />
      </motion.div>
    </section>
  )
}
