import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: '',
      period: 'Dec 2023 - Present',
      location: 'Intel Techworks',
      achievements: [
        'Led the migration of a critical data processing module to Java 17, resulting in a 20% performance improvement and 15% reduction in memory consumption.',
        'Optimized database queries and implemented caching strategies, resulting in a 15% reduction in average transaction processing time and improved application scalability to handle peak loads.',
        'Developed and deployed Spring Boot microservices in Docker containers on AWS EC2.',
        'Implemented a CI/CD pipeline using Bamboo, Nexus, and Terraform, streamlining the release process and improving deployment frequency.',
        'Redesigned a critical API endpoint using asynchronous processing, increasing throughput by 25%, and reducing latency for end-users.'
      ],
      tech: ['Java 17', 'Spring Boot', 'Docker', 'AWS EC2', 'Bamboo', 'Nexus', 'Terraform']
    },
    {
      title: 'Senior Software Engineer',
      company: 'Capgemini',
      period: 'Aug 2021 - Jul 2023',
      location: '',
      achievements: [
        'Managed data systems processing 100M+ daily records using AWS Lambda, Glue, Kinesis, S3, and Snowflake',
        'Built REST APIs and ETL pipelines in Java and Kafka, improving data processing efficiency by 70%',
        'Worked with business and IT teams to capture requirements and deliver solutions for product and infrastructure needs',
        'Reduced infrastructure costs by 85% through automated provisioning with Terraform and CI/CD pipelines',
        'Implemented logging and monitoring systems to maintain data integrity and system reliability'
      ],
      tech: ['Java', 'Kafka', 'AWS Lambda', 'AWS Glue', 'Kinesis', 'S3', 'Snowflake', 'Terraform']
    }
  ]

  const [expanded, setExpanded] = useState(() => experiences.map(() => true))

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Building impactful solutions and driving innovation through code.
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`experience-item ${expanded[index] ? 'expanded' : ''}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => setExpanded(prev => {
                const next = [...prev]
                next[index] = !next[index]
                return next
              })}
            >
              <div className="experience-header">
                <div className="experience-marker"></div>
                <div className="experience-content-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company">{exp.company}</div>
                  <div className="experience-period">{exp.period}</div>
                </div>
              </div>
              
              <AnimatePresence>
                {expanded[index] && (
                  <motion.div
                    className="experience-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="experience-tech">
                      {exp.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <ul className="experience-achievements">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

