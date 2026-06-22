import { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Work | WISE',
  description: 'The WISE ecosystem — ventures, projects, and active work.',
}

const partners = [
  { name: 'GreenChain', role: 'Fundraising & Capital Partner' },
  { name: 'Rippio.io', role: 'Technology Partner' },
  { name: 'Impesa', role: 'Strategic Partner' },
  { name: 'Frugal Studio', role: 'Design & Build Partner' },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">Ecosystem</p>
          <h1 className="font-serif text-[clamp(3rem,7vw,8rem)] text-cream leading-tight mb-6">
            The Work
          </h1>
          <p className="text-cream/35 text-lg max-w-xl mb-20">
            A map of active ventures, partnerships, and infrastructure projects.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-px bg-cream/5">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.07}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-32 pt-16 border-t border-cream/10">
            <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">Partnerships</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] text-cream mb-12 leading-tight">
              Strategic Partners
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/5">
              {partners.map((partner, i) => (
                <FadeIn key={partner.name} delay={i * 0.07}>
                  <div className="bg-black p-8 hover:bg-charcoal/40 transition-all duration-300 group h-full">
                    <h3 className="font-serif text-xl text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-cream/35 text-sm">{partner.role}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
