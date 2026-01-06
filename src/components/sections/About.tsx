'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Palette, Zap, Heart } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Code de Qualité',
    description: 'Développement maintenable, scalable et suivant les meilleures pratiques de l\'industrie.',
  },
  {
    icon: Palette,
    title: 'Design Sur Mesure',
    description: 'Création d\'interfaces utilisateur élégantes, intuitives et adaptées à votre identité.',
  },
  {
    icon: Zap,
    title: 'Performance Optimale',
    description: 'Optimisation pour des applications rapides, réactives et performantes.',
  },
  {
    icon: Heart,
    title: 'Accompagnement',
    description: 'Suivi personnalisé de votre projet avec attention aux détails et respect des délais.',
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
      className="py-24 bg-dark-50 relative overflow-hidden"
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
            Découvrez Midigitale
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Découvrez qui nous sommes et comment nous transformons vos idées en succès digitaux
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="bg-primary-50 rounded-2xl p-8 shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
              <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-dark-900">
                Notre mission
              </h3>
              <p className="text-dark-700 mb-4 leading-relaxed">
                Midigitale est une agence digitale spécialisée dans la création de sites web, 
                d'applications web et d'applications mobiles. Nous accompagnons nos clients 
                dans leur transformation digitale avec des solutions sur mesure et performantes.
              </p>
              <p className="text-dark-700 mb-4 leading-relaxed">
                Notre approche combine créativité, expertise technique et écoute client pour livrer
                des solutions qui répondent parfaitement à vos besoins. Nous nous engageons à 
                fournir un travail de qualité et à respecter les délais convenus.
              </p>
              <p className="text-dark-700 leading-relaxed">
                Forts de notre expérience sur de nombreux projets, nous restons à la pointe de
                l'innovation pour offrir les meilleures solutions technologiques à nos clients.
              </p>
              </div>
            </motion.div>
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
                  className="bg-white p-6 rounded-xl shadow-lg card-hover border border-dark-100 group"
                >
                  <div className="w-12 h-12 bg-dark-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-50 transition-colors duration-300">
                    <Icon className="text-dark-700 group-hover:text-primary-600 transition-colors" size={24} />
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
          className="bg-primary-500 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Prêt à démarrer votre projet digital ?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Discutons de vos besoins et créons une solution sur mesure pour votre entreprise.
          </p>
          <motion.a
            href="https://wa.me/2250711134106"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Demander un devis gratuit
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

