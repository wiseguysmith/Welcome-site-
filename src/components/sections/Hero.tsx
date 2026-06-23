'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const ecosystemSignals = [
  { label: 'AI Systems', value: 'Automation + operating intelligence' },
  { label: 'Capital Infrastructure', value: 'RWA tokenization + deal pathways' },
  { label: 'Founder Ecosystems', value: 'Community, education, coordination' },
]

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

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.25fr,0.75fr] gap-16 lg:gap-20 items-end">
          <div>
            <motion.p
              className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Elijah &middot; WISE
            </motion.p>

            <motion.h1
              className="font-serif text-[clamp(4.5rem,12vw,10rem)] leading-[0.88] text-cream mb-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              WISE<br />
              Ecosystem
            </motion.h1>

            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <p className="font-serif text-[clamp(1.2rem,2.5vw,2rem)] text-cream/75 leading-snug mb-6">
                A founder/operator ecosystem building across AI systems,
                capital infrastructure, real-world assets, and human-centered
                technology.
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
                <Button href="/work" variant="primary">
                  Explore the Ecosystem
                </Button>
                <Button href="https://calendly.com/mindfultechnology" external variant="ghost">
                  Schedule a Consultation
                </Button>
                <Button href="/essays" variant="ghost">
                  Read My Thinking
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="border border-cream/10 bg-black/70"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.38, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="border-b border-cream/10 p-5">
              <p className="font-mono text-xs text-gold/50 tracking-[0.2em] uppercase">
                Operating Map
              </p>
            </div>
            <div>
              {ecosystemSignals.map((signal, i) => (
                <div
                  key={signal.label}
                  className="grid grid-cols-[3rem,1fr] gap-5 border-b border-cream/10 p-5 last:border-b-0"
                >
                  <span className="font-mono text-xs text-gold/20">0{i + 1}</span>
                  <div>
                    <p className="font-serif text-xl text-cream mb-1">{signal.label}</p>
                    <p className="text-sm text-cream/35 leading-relaxed">{signal.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
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
