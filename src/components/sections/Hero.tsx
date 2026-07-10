'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import PortraitFrame from '@/components/ui/PortraitFrame'

export default function Hero() {
  return (
    <section className="min-h-[100svh] flex flex-col justify-center pt-28 pb-20 relative overflow-hidden">
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
      <div className="absolute -right-24 top-1/4 w-[32rem] h-[32rem] bg-gold/10 blur-[140px] rounded-full" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr,0.82fr] gap-14 lg:gap-20 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.p
              className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Lexington, Kentucky - building doors
            </motion.p>

            <motion.h1
              className="font-serif text-[clamp(3.5rem,11vw,6.5rem)] leading-[0.95] text-cream mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Elijah Smith
            </motion.h1>

            <motion.p
              className="font-serif italic text-[clamp(1.35rem,3vw,2rem)] text-cream/80 leading-snug mb-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Just a warrior that dreams he can bring peace.
            </motion.p>

            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <p className="text-lg md:text-xl text-cream/58 leading-relaxed mb-12 max-w-xl">
                I started in psychology and community work in Lexington, Kentucky.
                I learned to build technology because the people I served kept
                hitting walls that someone had designed. Now I build doors.
              </p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.48, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <Button href="#the-work" variant="primary">
                  The work -&gt;
                </Button>
                <Button href="/consultation" variant="ghost">
                  Start a conversation
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 max-w-sm lg:max-w-none mx-auto w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.38, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <PortraitFrame priority />
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
