import { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Work | Elijah Smith',
  description: 'Ventures and active work from Elijah Smith.',
}

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">The Work</p>
          <h1 className="font-serif text-[clamp(3rem,7vw,8rem)] text-cream leading-tight mb-6">
            The doors I am building.
          </h1>
          <p className="text-cream/40 text-lg max-w-2xl mb-20 leading-relaxed">
            Title2Token leads the current build. The rest of the work lives around
            the same question: who is outside the room, and what would let them in?
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-px bg-cream/5">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.06}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}

