'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Lock,
  CheckCircle2,
  Eye,
  FileCheck,
  UserCheck,
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const securiteFeatures = [
  {
    icon: Shield,
    title: 'Protection des données',
    description:
      'Vos informations personnelles et professionnelles sont sécurisées avec les dernières technologies de chiffrement.',
  },
  {
    icon: UserCheck,
    title: 'Validation par experts',
    description:
      'Tous les acteurs sont validés par nos agents terrain certifiés pour garantir la qualité et la fiabilité.',
  },
  {
    icon: FileCheck,
    title: 'KYC complet',
    description:
      'Système de vérification d\'identité (KYC) pour tous les utilisateurs, garantissant la transparence et la confiance.',
  },
  {
    icon: Lock,
    title: 'Transactions sécurisées',
    description:
      'Toutes les transactions financières sont protégées et tracées pour votre sécurité.',
  },
  {
    icon: Eye,
    title: 'Traçabilité totale',
    description:
      'Suivez chaque étape de vos activités, jobs et ventes avec une traçabilité complète.',
  },
  {
    icon: CheckCircle2,
    title: 'Garantie de confiance',
    description:
      'Système de notation et d\'évaluation pour maintenir un niveau élevé de confiance entre les acteurs.',
  },
]

export default function Securite() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="securite" className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-6 shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Sécurité et{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
              Garantie de Confiance
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Hanbara n'est pas qu'une solution de mise en relation. C'est une solution
            d'assistance qui apporte sécurité et garantie de confiance entre les
            différents acteurs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securiteFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Call to action box */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Rejoignez une communauté sécurisée
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Plus de 1000 acteurs font déjà confiance à Hanbara pour développer
            leurs activités en toute sécurité.
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-primary-700 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commencer maintenant
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

