import { motion } from 'framer-motion'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'MS in Computer Science',
      university: 'Texas State University',
      location: 'San Marcos, TX',
      coursework: ['Data Structures & Algorithms', 'Distributed Systems', 'Artificial Intelligence']
    },
    {
      degree: 'BS in Computer Science',
      university: 'Malla Reddy College of Engineering and Technology',
      location: 'Hyderabad, TG',
      coursework: []
    }
  ]

  return (
    <section id="education" className="section education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic foundation in computer science and software engineering.
          </p>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="education-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-university">{edu.university}</div>
              <div className="education-location">{edu.location}</div>
              {edu.coursework.length > 0 && (
                <div className="education-coursework">
                  <div className="coursework-label">Relevant Coursework:</div>
                  <div className="coursework-tags">
                    {edu.coursework.map((course, courseIndex) => (
                      <span key={courseIndex} className="coursework-tag">{course}</span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

