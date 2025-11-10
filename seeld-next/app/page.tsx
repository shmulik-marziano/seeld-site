import { Hero } from '@/components/home/Hero'
import { SocialProof } from '@/components/home/SocialProof'
import { ThreePillars } from '@/components/home/ThreePillars'
import { WhySeeLD } from '@/components/home/WhySeeLD'
import { HowItWorks } from '@/components/home/HowItWorks'
import { Testimonials } from '@/components/home/Testimonials'
import { CTASection } from '@/components/home/CTASection'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ThreePillars />
        <WhySeeLD />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
