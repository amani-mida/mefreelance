'use client'

import { motion } from 'framer-motion'
import { Users, Briefcase, ShoppingCart, CheckCircle2 } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    icon: Users,
    title: 'Mise en contact',
    description:
      'Connectez-vous facilement avec les acteurs du secteur agricole. Trouvez des exploitants, des travailleurs qualifiés et des acheteurs fiables.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Briefcase,
    title: 'Création de jobs',
    description:
      'Créez et gérez vos activités agricoles en toute simplicité. Publiez des jobs, suivez leur progression et affectez des travailleurs compétents.',
    color: 'from-primary-500 to-primary-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: ShoppingCart,
    title: 'Vente de produits',
    description:
      'Vendez vos produits agricoles directement sur la plateforme. Gérez vos ventes, suivez les transactions et développez votre activité commerciale.',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
  },
]

const features = [
  'Gestion complète des activités agricoles',
  'Suivi en temps réel des jobs et ventes',
  'Validation par des agents terrain certifiés',
  'Système de notation et de confiance',
  'Support multi-acteurs (solo, entreprise)',
  'Interface intuitive et moderne',
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-dark-900 mb-4"
          >
            Nos{' '}
            <span className="text-gradient-hanbara">Services Principaux</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-dark-600 max-w-2xl mx-auto"
          >
            Découvrez les fonctionnalités qui font de Hanbara la solution idéale
            pour votre activité agricole
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${service.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary-200`}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Features list */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-primary-50 to-green-50 rounded-3xl p-8 md:p-12 border border-primary-100"
        >
          <h3 className="text-3xl font-bold text-dark-900 mb-8 text-center">
            Fonctionnalités clés
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-dark-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

