import { motion } from 'framer-motion'
import { useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const els = document.querySelectorAll('a[href^="tel:"]')
    els.forEach(el => el.remove())
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello, I'm
          </motion.div>
          
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Susmitha Vadlakonda
          </motion.h1>
          
          <motion.div
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="gradient-text">Software Engineer</span>
            <span className="separator"> | </span>
            <span>Full-Stack Developer</span>
            <span className="separator"> | </span>
            <span>Cloud Enthusiast</span>
          </motion.div>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Building scalable solutions and transforming ideas into reality through code.
            Specialized in Java, Spring Boot, AWS, and modern web technologies.
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View Projects
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </motion.div>
          
          <motion.div
            className="hero-contact-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a href="mailto:susmithavg00@gmail.com" className="contact-link">susmithavg00@gmail.com</a>
            <span className="separator"> • </span>
            <a href="https://linkedin.com/in/susmitha-vadlakonda" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <div className="hero-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </section>
  )
}

export default Hero

