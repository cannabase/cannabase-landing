import BlogView from "@/components/blog-view";

export const metadata = {
  title: 'Cannabase - Deine einfache CSC Mitgliederverwaltung',
  description: 'Cannabase bietet dir alles was du für deinen CSC benötigst. Von der Mitglieder über die Lagerverwaltung bis hin zum Bestellmanagement ist alles inklusive.',
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
        <BlogView />
        <Newsletter />
    </>
  )
}
