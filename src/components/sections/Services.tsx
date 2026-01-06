'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Globe, Code, Smartphone, Settings, Brain, Share2 } from 'lucide-react'

const services = [
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Stratégie de contenu, community management et publicité sur les réseaux sociaux pour maximiser votre visibilité.',
    features: ['Stratégie de contenu', 'Community management', 'Publicité réseaux sociaux', 'Maximisation visibilité'],
  },
  {
    icon: Globe,
    title: 'Branding & Identité Visuelle',
    description: 'Création de logo, charte graphique et identité de marque forte qui marque les esprits et génère de la confiance.',
    features: ['Création de logo', 'Charte graphique', 'Identité de marque', 'Design impactant'],
  },
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Sites vitrines, e-commerce et applications web modernes, performants et optimisés pour tous les appareils.',
    features: ['Sites vitrines', 'E-commerce', 'Applications web', 'Responsive design'],
  },
  {
    icon: Smartphone,
    title: 'Applications Mobile',
    description: 'Applications natives et cross-platform iOS/Android avec expérience utilisateur exceptionnelle.',
    features: ['iOS & Android', 'Applications natives', 'Cross-platform', 'UX exceptionnelle'],
  },
  {
    icon: Settings,
    title: 'Solutions Personnalisées',
    description: 'ERP, CRM et logiciels sur mesure adaptés à vos processus métier et besoins spécifiques.',
    features: ['ERP sur mesure', 'CRM personnalisé', 'Logiciels adaptés', 'Processus métier'],
  },
  {
    icon: Brain,
    title: 'Solutions IA',
    description: 'Chatbots intelligents, automatisation, analyse prédictive et intégration d\'IA dans vos processus.',
    features: ['Chatbots intelligents', 'Automatisation', 'Analyse prédictive', 'Intégration IA'],
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="services"
      className="py-24 bg-white relative overflow-hidden"
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
            Services qui propulsent votre croissance digitale
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Des solutions complètes et innovantes pour transformer votre entreprise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            // Utiliser uniquement la couleur primaire, plus sobre
            const bgColor = 'bg-dark-100'
            const iconColor = 'text-dark-700'
            const borderHover = 'hover:border-dark-300'
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-white rounded-2xl p-8 shadow-lg card-hover border border-dark-200 ${borderHover} transition-all relative overflow-hidden group`}
              >
                {/* Bordure colorée subtile en haut - seulement au hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <motion.div 
                  className={`w-16 h-16 ${bgColor} rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary-50 transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className={`${iconColor} group-hover:text-primary-600 transition-colors`} size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-dark-900 relative z-10 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-dark-600 mb-6 leading-relaxed relative z-10 text-base">
                  {service.description}
                </p>
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-2 text-dark-700"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                    >
                      <span className="text-dark-400 font-bold mt-1">•</span>
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

