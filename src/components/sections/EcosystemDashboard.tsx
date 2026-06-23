import FadeIn from '@/components/ui/FadeIn'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'
import Link from 'next/link'

export default function EcosystemDashboard() {
  const featured = projects.slice(0, 6)

  return (
    <section className="py-32 border-t border-cream/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">Active Ecosystem</p>
              <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-cream leading-tight">
                The WISE<br />Ecosystem
              </h2>
              <p className="text-cream/35 text-sm mt-5 max-w-md leading-relaxed">
                A connected body of work across AI systems, real-world assets,
                community infrastructure, and operator-led ventures.
              </p>
            </div>
            <Link
              href="/work"
              className="font-mono text-xs text-gold/50 tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300 whitespace-nowrap"
            >
              View All Work →
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/5">
          {featured.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.07}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
