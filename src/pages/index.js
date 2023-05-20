import { Inter } from 'next/font/google'
import { AboutMeSection } from '../../components/AboutMe/AboutMeSection'
import { Banner } from '../../components/Banner/Banner'
import { ContactSection } from '../../components/Contact/ContactSection'
import { Footer } from '../../components/Footer/Footer'
import { NavBar } from '../../components/NavBar/NavBar'
import { ProjectsSection } from '../../components/Projects/ProjectsSection'
import { SkillsSection } from '../../components/Skills/SkillsSection'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>Camilo's Portfolio</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    <main className={`${inter.className}`}>
        <Banner/>
        <NavBar/>
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection/>
        <Footer/>
    </main>
    </>
  )
}
