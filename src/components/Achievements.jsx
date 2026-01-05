import { motion } from 'framer-motion'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      title: 'TCS CodeVita Global Championship',
      description: 'Placed 50th out of approximately 73,000 students',
      icon: '🏆',
      highlight: true
    },
    {
      title: "Dean's List",
      description: 'Fall 2024, Spring 2025',
      icon: '⭐',
      highlight: false
    }
  ]

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Recognitions and accomplishments in my career journey.
          </p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={`achievement-card card ${achievement.highlight ? 'highlight' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

