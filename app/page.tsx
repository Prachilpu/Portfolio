import Hero from "../src/components/hero"
import About from "../src/components/about"
import Projects from "../src/components/projects"
import Achievements from "../src/components/achievements"
import CurrentStatus from "../src/components/current-status"
import Contact from "../src/components/contact"
import Footer from "../src/components/footer"

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
