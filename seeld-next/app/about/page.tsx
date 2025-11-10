import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AboutHero } from '@/components/about/AboutHero'
import { OurStory } from '@/components/about/OurStory'
import { MissionVision } from '@/components/about/MissionVision'
import { OurValues } from '@/components/about/OurValues'
import { TheTeam } from '@/components/about/TheTeam'
import { Timeline } from '@/components/about/Timeline'
import { AboutCTA } from '@/components/about/AboutCTA'

export const metadata: Metadata = {
  title: 'אודות',
  description:
    'הסיפור מאחורי SeeLD Finance & Insurance - איך התחלנו, מה מניע אותנו, והחזון שלנו לעתיד השירותים הפיננסיים בישראל.',
  openGraph: {
    title: 'אודות SeeLD Finance & Insurance',
    description: 'הסיפור מאחורי המהפכה הפיננסית',
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <OurStory />
        <MissionVision />
        <OurValues />
        <TheTeam />
        <Timeline />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}
