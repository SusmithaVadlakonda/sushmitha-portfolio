import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Navigation scrolled={scrolled} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      
      {/* Background gradient effects */}
      <div className="bg-gradient-1"></div>
      <div className="bg-gradient-2"></div>
    </div>
  )
}

export default App

