import Hero from '@/components/sections/Hero'
import WhatIBuild from '@/components/sections/WhatIBuild'
import EcosystemDashboard from '@/components/sections/EcosystemDashboard'
import ProofSignals from '@/components/sections/ProofSignals'
import Story from '@/components/sections/Story'
import Philosophy from '@/components/sections/Philosophy'
import EssaysPreview from '@/components/sections/EssaysPreview'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIBuild />
      <EcosystemDashboard />
      <ProofSignals />
      <Story />
      <Philosophy />
      <EssaysPreview />
      <FinalCTA />
    </>
  )
}
