import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getEssayBySlug, getAllEssaySlugs } from '@/lib/essays'
import FadeIn from '@/components/ui/FadeIn'
import Link from 'next/link'

export async function generateStaticParams() {
  return getAllEssaySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const essay = getEssayBySlug(params.slug)
  if (!essay) return {}
  return {
    title: `${essay.frontmatter.title} | WISE`,
    description: essay.frontmatter.description,
  }
}

export default function EssayPage({ params }: { params: { slug: string } }) {
  const essay = getEssayBySlug(params.slug)
  if (!essay) notFound()

  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="max-w-[760px] mx-auto px-6 md:px-12">
        <FadeIn>
          <Link
            href="/essays"
            className="font-mono text-xs text-cream/25 tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300 mb-14 block"
          >
            &larr; Essays
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-xs text-gold/50 tracking-[0.2em] uppercase">
              {essay.frontmatter.category}
            </span>
            <span className="text-cream/20">&middot;</span>
            <span className="text-cream/30 text-xs">{essay.frontmatter.readTime}</span>
            <span className="text-cream/20">&middot;</span>
            <span className="text-cream/30 text-xs">{essay.frontmatter.date}</span>
          </div>

          <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] text-cream leading-tight mb-6">
            {essay.frontmatter.title}
          </h1>

          <p className="text-cream/40 text-lg mb-16 max-w-xl">
            {essay.frontmatter.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="prose-wise">
            <MDXRemote source={essay.content} />
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
