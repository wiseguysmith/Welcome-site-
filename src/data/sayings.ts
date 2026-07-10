export interface Saying {
  text: string
  weight: 'breath' | 'footer'
}

export const sayings: Saying[] = [
  { text: 'Name the wall before you build the door.', weight: 'breath' },
  { text: 'Service before status.', weight: 'breath' },
  { text: 'Map the gap, then build the bridge.', weight: 'breath' },
  { text: 'Specific beats vague every time.', weight: 'footer' },
  { text: 'Fewer things. More depth.', weight: 'footer' },
  { text: 'Build for absence, not applause.', weight: 'footer' },
  { text: 'The work starts with who is missing.', weight: 'footer' },
  { text: 'Translation is part of the work.', weight: 'footer' },
  { text: 'Do the ground work before the grand work.', weight: 'footer' },
]

