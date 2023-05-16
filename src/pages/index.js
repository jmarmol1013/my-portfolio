import { Inter } from 'next/font/google'
import { AboutMeSection } from '../../components/AboutMe/AboutMeSection'
import { Banner } from '../../components/Banner/Banner'
import { NavBar } from '../../components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
        <Banner/>
        <NavBar/>
        <AboutMeSection />
    </main>
  )
}
