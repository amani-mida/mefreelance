'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Next.js', level: 95 },
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'Flutter', level: 85 },
    ],
  },
  {
    category: 'CMS & Page Builders',
    skills: [
      { name: 'WordPress', level: 90 },
      { name: 'Elementor', level: 88 },
      { name: 'Divi', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'API REST', level: 85 },
      { name: 'GraphQL', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    category: 'Outils & Autres',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Figma', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'AWS', level: 70 },
    ],
  },
]

const technologies = [
  'Next.js', 'React', 'TypeScript', 'JavaScript', 'Node.js',
  'WordPress', 'Elementor', 'Divi', 'Tailwind CSS', 'Framer Motion',
  'Flutter', 'Git', 'Docker', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Figma', 'AWS', 'Vercel'
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="skills"
      className="py-24 bg-dark-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900">
            Nos technologies
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Technologies et outils que nous maîtrisons pour créer des solutions performantes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover"
            >
              <h3 className="text-2xl font-bold mb-6 text-dark-900">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-dark-700">{skill.name}</span>
                      <span className="text-sm text-primary-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-dark-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-dark-900">
            Stack technologique
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow font-medium text-dark-700 hover:text-primary-600 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

