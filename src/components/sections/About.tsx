'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Palette, Zap, Heart } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Code Propre',
    description: 'Écriture de code maintenable, scalable et suivant les meilleures pratiques.',
  },
  {
    icon: Palette,
    title: 'Design Moderne',
    description: 'Création d\'interfaces utilisateur élégantes et intuitives.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimisation pour des applications rapides et réactives.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Dévouement à chaque projet avec attention aux détails.',
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="about"
      className="py-24 bg-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À <span className="text-gradient">propos</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Développeuse web freelance passionnée par la création de sites web modernes et performants
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-dark-900">
                Mon parcours
              </h3>
              <p className="text-dark-700 mb-4 leading-relaxed">
                Je suis développeuse web freelance passionnée par la création de sites web modernes 
                et performants. J'ai eu l'opportunité de travailler sur de nombreux projets web, 
                dont plusieurs sont présentés dans ce portfolio.
              </p>
              <p className="text-dark-700 mb-4 leading-relaxed">
                Mon approche combine créativité et rigueur technique pour livrer
                des solutions qui répondent parfaitement aux besoins de mes clients.
                En tant que freelance, je m'engage à fournir un travail de qualité 
                et à respecter les délais convenus.
              </p>
              <p className="text-dark-700 leading-relaxed">
                Toujours en veille technologique, j'aime apprendre et expérimenter
                avec de nouveaux outils et frameworks pour rester à la pointe de
                l'innovation et offrir les meilleures solutions à mes clients.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg card-hover border border-dark-100"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h4 className="font-semibold text-dark-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-dark-600">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Prêt à collaborer sur votre prochain projet ?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Discutons de vos idées et créons quelque chose d'extraordinaire ensemble.
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commençons une conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

