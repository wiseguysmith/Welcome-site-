export interface Project {
  id: string
  name: string
  category: string
  status: 'Active' | 'Active Development' | 'Building' | 'Ongoing'
  role: string
  wall: string
  description: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 'title2token',
    name: 'Title2Token',
    category: 'Capital Infrastructure',
    status: 'Active Development',
    role: 'Founder / Strategy / Deal Architecture',
    wall: 'Most people cannot own a piece of the buildings their lives happen in.',
    description:
      'Real-asset ownership, tokenized and built on Chainlink CCIP. The work is honest: deal architecture, product clarity, and rails for participation.',
    tags: ['RWA', 'Tokenization', 'Chainlink CCIP', 'Real Estate'],
  },
  {
    id: 'mindful-tech',
    name: 'Mindful Tech',
    category: 'AI Systems',
    status: 'Active',
    role: 'Founder',
    wall: 'Small teams hit large-team operating problems without large-team staff.',
    description:
      'AI systems and automation for operators who need clearer workflows, better handoffs, and less manual drag.',
    tags: ['AI', 'Automation', 'Operations'],
    link: 'https://mindfultech.services',
  },
  {
    id: 'mindful360',
    name: 'Mindful360',
    category: 'Wellness Technology',
    status: 'Active',
    role: 'Founder',
    wall: 'Wellbeing work often gets split from the tools people use every day.',
    description:
      'A health practice platform shaped around care, community, and useful digital support.',
    tags: ['Wellness', 'Care', 'Community'],
  },
  {
    id: 'la-mesa',
    name: 'La Mesa',
    category: 'Community Infrastructure',
    status: 'Active',
    role: 'Co-Founder / Builder',
    wall: 'Builders need rooms where trust can form before deals do.',
    description:
      'A gathering table for founders, creatives, and operators who need a place to think together before they build together.',
    tags: ['Community', 'Founders', 'Coordination'],
  },
  {
    id: 'dream-up-properties',
    name: 'Dream Up Properties',
    category: 'Real Estate',
    status: 'Active',
    role: 'Principal',
    wall: 'Real estate knowledge often stays inside private networks.',
    description:
      'Real estate operations and investment work focused on practical asset strategy and grounded ownership pathways.',
    tags: ['Real Estate', 'Investment', 'Operations'],
  },
  {
    id: 'barcodedao',
    name: 'BarcodeDAO',
    category: 'Web3 Infrastructure',
    status: 'Building',
    role: 'Founder / Builder',
    wall: 'Physical goods move through supply chains most buyers cannot verify.',
    description:
      'Blockchain-verified records for goods and supply paths, built for clearer ownership and trust.',
    tags: ['DAO', 'Supply Chain', 'Web3'],
  },
  {
    id: 'isd',
    name: 'ISD Ambassador Work',
    category: 'Innovation Ecosystems',
    status: 'Ongoing',
    role: 'Ambassador',
    wall: 'Founders need translation between institutions, resources, and the rooms where decisions happen.',
    description:
      'Ambassador work connecting founders, institutions, and practical resources across disciplines.',
    tags: ['Innovation', 'Founders', 'Education'],
  },
]

