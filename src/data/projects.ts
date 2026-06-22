export interface Project {
  name: string
  category: string
  status: 'Active' | 'Active Development' | 'Building' | 'Ongoing'
  role: string
  description: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    name: 'Mindful Tech',
    category: 'AI Systems',
    status: 'Active',
    role: 'Founder',
    description:
      'AI systems consultancy focused on automation, operational intelligence, and emerging technology strategy for businesses ready to work smarter.',
    tags: ['AI', 'Automation', 'Strategy', 'Systems'],
    link: 'https://mindfultech.services',
  },
  {
    name: 'Title2Token',
    category: 'Capital Infrastructure',
    status: 'Active Development',
    role: 'Founder / Strategy / Deal Architecture',
    description:
      'Commercial operating layer for real-world asset tokenization. Building the infrastructure that connects physical assets to on-chain capital markets.',
    tags: ['RWA', 'Tokenization', 'Capital', 'Real Estate'],
  },
  {
    name: 'BarcodeDAO',
    category: 'Web3 Infrastructure',
    status: 'Building',
    role: 'Founder / Builder',
    description:
      'Decentralized infrastructure connecting physical goods and supply chains to blockchain-verified ownership and transparency.',
    tags: ['DAO', 'Supply Chain', 'Web3', 'Ownership'],
  },
  {
    name: 'Mindful360',
    category: 'Wellness Technology',
    status: 'Active',
    role: 'Founder',
    description:
      'Holistic platform integrating technology with human-centered health practices. Building tools for conscious living and community wellbeing.',
    tags: ['Wellness', 'Technology', 'Community', 'Health'],
  },
  {
    name: 'La Mesa',
    category: 'Community Infrastructure',
    status: 'Active',
    role: 'Co-Founder / Builder',
    description:
      'Community gathering and coordination infrastructure. The table where diverse builders, founders, and creatives meet, think, and build together.',
    tags: ['Community', 'Ecosystem', 'Coordination'],
  },
  {
    name: 'Dream Up Properties',
    category: 'Real Estate',
    status: 'Active',
    role: 'Principal',
    description:
      'Real estate operations and investment strategy focused on value-add opportunities across residential and commercial assets.',
    tags: ['Real Estate', 'Investment', 'Operations'],
  },
  {
    name: 'ISD Ambassador Work',
    category: 'Innovation Ecosystems',
    status: 'Ongoing',
    role: 'Ambassador',
    description:
      'Representing and building innovation ecosystem infrastructure. Connecting founders, institutions, and resources across geographies and disciplines.',
    tags: ['Innovation', 'Ecosystem', 'Community', 'Education'],
  },
]
