import { useTheme } from './hooks/useTheme'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Leadership } from './components/Leadership'
import { EducationEtc } from './components/EducationEtc'
import { Gaming } from './components/Gaming'
import { Footer } from './components/Footer'

function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Gaming />
        <EducationEtc />
      </main>
      <Footer />
    </div>
  )
}

export default App
