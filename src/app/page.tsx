import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Pricing from '@/components/sections/Pricing'
import TrustedBy from '@/components/sections/TrustedBy'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Projects />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <TrustedBy />
      <Contact />
    </div>
  )
}

