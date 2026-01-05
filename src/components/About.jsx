import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const skillCategories = {
    'Languages': ['JAVA', 'Python', 'SQL', 'JavaScript (Node.js)', 'C++'],
    'Web & Framework': ['Spring Boot', 'React', 'Angular', 'RESTful APIs'],
    'Cloud/DevOps': ['AWS (Lambda, Glue)', 'CI/CD pipelines', 'Jenkins', 'Docker', 'Terraform', 'GCP'],
    'Databases': ['MySQL', 'Oracle', 'MongoDB', 'Snowflake'],
    'Data & ML': ['TensorFlow', 'Keras', 'Scikit-learn', 'Power BI', 'NLP'],
    'Tools': ['Git', 'Postman', 'Jenkins', 'Docker']
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate software engineer with expertise in building scalable applications, 
            optimizing performance, and leveraging cloud technologies to deliver impactful solutions.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skillCategories).map(([category, skills]) => (
            <motion.div
              key={category}
              className="skill-category card"
              variants={itemVariants}
            >
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-tags">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

