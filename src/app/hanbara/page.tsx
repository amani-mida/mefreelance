import Hero from '@/components/hanbara/Hero'
import Services from '@/components/hanbara/Services'
import Acteurs from '@/components/hanbara/Acteurs'
import Securite from '@/components/hanbara/Securite'
import CTA from '@/components/hanbara/CTA'

export default function HanbaraPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Acteurs />
      <Securite />
      <CTA />
    </div>
  )
}

