import Doorway from '@/components/sections/Doorway'
import Hero from '@/components/sections/Hero'
import HowIThink from '@/components/sections/HowIThink'
import HeroVenture from '@/components/sections/HeroVenture'
import Scar from '@/components/sections/Scar'
import ProofSignals from '@/components/sections/ProofSignals'
import EssaysPreview from '@/components/sections/EssaysPreview'
import Mirror from '@/components/sections/Mirror'
import Breath from '@/components/ui/Breath'
import { sayings } from '@/data/sayings'

export default function Home() {
  const breathSayings = sayings.filter((saying) => saying.weight === 'breath')

  return (
    <>
      <Doorway />
      <Hero />
      <HowIThink />
      <Breath text={breathSayings[0].text} />
      <HeroVenture />
      <Scar />
      <Breath text={breathSayings[1].text} />
      <ProofSignals />
      <EssaysPreview />
      <Breath text={breathSayings[2].text} />
      <Mirror />
    </>
  )
}
