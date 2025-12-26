'use client'

import { motion } from 'framer-motion'
import {
  User,
  Building2,
  ShoppingBag,
  Users,
  TrendingUp,
  Shield,
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const acteurs = [
  {
    icon: User,
    title: 'Exploitants',
    subtitle: 'Agriculteurs, pisciculteurs, apiculteurs, éleveurs',
    description:
      'Créez vos activités, publiez des jobs et trouvez des travailleurs qualifiés pour développer votre exploitation.',
    features: [
      'Gestion de vos activités agricoles',
      'Création et suivi de jobs',
      'Recrutement de travailleurs',
      'Vente de vos produits',
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Users,
    title: 'Travailleurs',
    subtitle: 'Solo ou en entreprise',
    description:
      'Trouvez des opportunités de travail adaptées à vos compétences. Travaillez en solo ou intégrez une entreprise.',
    features: [
      'Recherche de jobs adaptés',
      'Profil professionnel complet',
      'Suivi de vos missions',
      'Validation par agents terrain',
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: ShoppingBag,
    title: 'Acheteurs',
    subtitle: 'Particuliers et professionnels',
    description:
      'Accédez à une large gamme de produits agricoles de qualité, directement auprès des exploitants certifiés.',
    features: [
      'Catalogue de produits variés',
      'Achat sécurisé',
      'Suivi des commandes',
      'Produits certifiés',
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
  },
]

const valeurs = [
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Transactions sécurisées et données protégées',
  },
  {
    icon: TrendingUp,
    title: 'Confiance',
    description: 'Système de notation et validation par experts',
  },
  {
    icon: Building2,
    title: 'Transparence',
    description: 'Suivi complet et traçabilité des activités',
  },
]

export default function Acteurs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="acteurs" className="py-20 bg-gradient-to-b from-white to-primary-50">
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
            Pour{' '}
            <span className="text-gradient-hanbara">Tous les Acteurs</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-dark-600 max-w-2xl mx-auto"
          >
            Une plateforme adaptée à chaque profil professionnel du secteur agricole
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {acteurs.map((acteur, index) => {
            const Icon = acteur.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${acteur.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary-200 relative overflow-hidden`}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Decorative background element */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${acteur.color} opacity-10 rounded-full -mr-16 -mt-16`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${acteur.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">
                    {acteur.title}
                  </h3>
                  <p className="text-primary-700 font-semibold mb-4">
                    {acteur.subtitle}
                  </p>
                  <p className="text-dark-600 mb-6 leading-relaxed">
                    {acteur.description}
                  </p>
                  <ul className="space-y-3">
                    {acteur.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-dark-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Valeurs section */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary-100"
        >
          <h3 className="text-3xl font-bold text-dark-900 mb-12 text-center">
            Nos Valeurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valeurs.map((valeur, index) => {
              const Icon = valeur.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-dark-900 mb-2">
                    {valeur.title}
                  </h4>
                  <p className="text-dark-600">{valeur.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

