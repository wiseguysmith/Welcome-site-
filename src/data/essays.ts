export interface Essay {
  slug: string
  title: string
  description: string
  date: string
  category: 'Systems' | 'Capital' | 'Ecosystems' | 'Philosophy' | 'Field Notes'
  readTime: string
}

export const essays: Essay[] = [
  {
    slug: 'technology-capital-access',
    title: 'Technology, Capital, and Access: The Work Ahead',
    description:
      'Why the next generation of builders must understand systems, ownership, and coordination — and what it costs when they do not.',
    date: 'June 2026',
    category: 'Philosophy',
    readTime: '5 min read',
  },
]
