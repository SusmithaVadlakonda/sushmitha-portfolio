import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Scalable Music Insights Platform',
      description: 'Developed a scalable ETL pipeline to extract, transform, and load user data, enabling real-time analysis of listening behavior for business intelligence.',
      tech: ['Spotify API', 'GCP Cloud Functions', 'Pub/Sub', 'App Engine', 'BigQuery', 'Cloud Storage'],
      highlights: [
        'Built and deployed a data-driven dashboard with BigQuery and Cloud Storage',
        'Leveraged serverless GCP architecture for cost-effective, efficient, and scalable processing',
        'Real-time analysis of listening behavior for business intelligence'
      ]
    },
    {
      title: 'Semantic Search Engine',
      description: 'Built a semantic search application using NLP and sentence transformers to enhance query understanding and retrieve contextually relevant results.',
      tech: ['Python', 'FAISS', 'Sentence Transformers', 'Pandas', 'Streamlit'],
      highlights: [
        'Implemented high-dimensional similarity search with FAISS',
        'Fast and scalable query processing over large datasets',
        'Interactive Streamlit interface for real-time query testing'
      ]
    },
    {
      title: 'Budget Management App',
      description: 'Developed a full-stack web & mobile-compatible application with personalized budgeting recommendations.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
      highlights: [
        'Full-stack web & mobile-compatible application',
        'Personalized budgeting recommendations',
        'Real-time synchronization across devices using Firebase'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Showcasing innovative solutions and technical expertise.
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-number">0{index + 1}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="project-tech-tag">{tech}</span>
                ))}
              </div>
              
              <ul className="project-highlights">
                {project.highlights.map((highlight, hlIndex) => (
                  <li key={hlIndex}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

