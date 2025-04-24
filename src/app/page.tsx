import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Achievements from "../components/achievements"
import CurrentStatus from "../components/current-status"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <CurrentStatus />
      <Contact />
      <Footer />
    </main>
  )
}
