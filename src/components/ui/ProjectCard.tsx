import { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={project.id}
      className="group scroll-mt-32 border border-cream/10 p-8 hover:border-gold/30 transition-all duration-500 bg-black hover:bg-charcoal/35 h-full"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
        <div>
          <p className="font-mono text-xs text-gold/50 tracking-[0.2em] uppercase mb-2">
            {project.category}
          </p>
          <h3 className="font-serif text-2xl text-cream group-hover:text-gold transition-colors duration-300">
            {project.name}
          </h3>
        </div>
        <span
          className={`font-mono text-xs px-3 py-1 border tracking-[0.15em] uppercase shrink-0 self-start max-w-full leading-relaxed ${
            project.status === 'Active'
              ? 'border-gold/30 text-gold/60'
              : project.status === 'Active Development'
              ? 'border-bronze/40 text-bronze'
              : 'border-cream/15 text-cream/30'
          }`}
        >
          {project.status}
        </span>
      </div>

      <p className="font-serif text-xl text-cream/75 leading-snug mb-5">
        {project.wall}
      </p>

      <p className="text-cream/45 text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      <p className="text-cream/25 text-xs">
        <span className="text-cream/35">Role:</span> {project.role}
      </p>

      {project.tags && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs text-cream/25 border border-cream/10 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}
