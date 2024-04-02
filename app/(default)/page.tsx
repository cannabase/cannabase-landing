export const metadata = {
  title: 'Cannabase - Deine einfache CSC Mitgliederverwaltung',
  description: 'Cannabase bietet dir alles was du für deinen Cannabis Social Club benötigst. Von der Mitglieder über die Lagerverwaltung bis hin zum Bestell- und Bezahlungsmanagement ist alles inklusive.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Newsletter />
    </>
  )
}
