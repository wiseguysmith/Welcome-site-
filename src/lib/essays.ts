import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const ESSAYS_DIR = path.join(process.cwd(), 'content/essays')

export interface EssayFrontmatter {
  title: string
  description: string
  date: string
  category: string
  readTime?: string
}

export interface EssayData {
  slug: string
  frontmatter: EssayFrontmatter
  content: string
}

function calcReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}

export function getAllEssaySlugs(): string[] {
  if (!fs.existsSync(ESSAYS_DIR)) return []
  return fs
    .readdirSync(ESSAYS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}

export function getEssayBySlug(slug: string): EssayData | null {
  const filePath = path.join(ESSAYS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    frontmatter: {
      ...data,
      readTime: data.readTime || calcReadTime(content),
    } as EssayFrontmatter,
    content,
  }
}

export function getAllEssays(): EssayData[] {
  return getAllEssaySlugs()
    .map(getEssayBySlug)
    .filter(Boolean) as EssayData[]
}
