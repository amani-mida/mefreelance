'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Target, Code2, TestTube, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Découverte & Analyse',
    description: 'Compréhension approfondie de vos besoins, objectifs et contraintes pour définir la meilleure stratégie.',
  },
  {
    number: '02',
    icon: Target,
    title: 'Stratégie & Planification',
    description: 'Élaboration d\'un plan d\'action détaillé avec roadmap, jalons et KPIs mesurables.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Design & Développement',
    description: 'Création et développement de solutions innovantes avec feedback régulier et itérations.',
  },
  {
    number: '04',
    icon: TestTube,
    title: 'Tests & Optimisation',
    description: 'Tests rigoureux et optimisation pour garantir qualité, performance et sécurité.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Lancement & Support',
    description: 'Mise en ligne accompagnée d\'un support continu, maintenance et formations.',
  },
]

export default function Methodology() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="methodology"
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
            Un processus éprouvé pour votre succès
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Une méthodologie structurée garantissant la réussite de votre projet digital
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-400" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-dark-100">
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                        <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                          <Icon className="text-white" size={32} />
                        </div>
                        <div>
                          <div className="text-sm text-primary-600 font-bold mb-1">
                            {step.number}
                          </div>
                          <h3 className="text-2xl font-bold text-dark-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-dark-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-primary-600 items-center justify-center z-10">
                    <span className="text-primary-600 font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Empty space for timeline alignment */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

