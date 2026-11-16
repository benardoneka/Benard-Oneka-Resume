import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About, Skills } from '@/components/about-skills'
import { Experience } from '@/components/experience'
import { Contact, Education } from '@/components/education-contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  )
}
