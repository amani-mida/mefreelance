'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Sur devis',
    description: 'Idéal pour démarrer votre présence digitale',
    features: [
      'Site vitrine ou branding',
      'Design personnalisé',
      'Responsive mobile',
      'SEO de base',
      '3 mois de support',
    ],
    color: 'primary',
    popular: false,
  },
  {
    name: 'Professional',
    price: 'Sur devis',
    description: 'Pour les entreprises en croissance',
    features: [
      'Tout du plan Starter',
      'E-commerce ou app mobile',
      'Intégrations avancées',
      'Marketing digital',
      '6 mois de support',
      'Formation équipe',
    ],
    color: 'primary',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur devis',
    description: 'Solutions sur mesure pour grandes entreprises',
    features: [
      'Tout du plan Professional',
      'Solutions IA personnalisées',
      'ERP/CRM sur mesure',
      'Accompagnement dédié',
      'Support prioritaire',
      'SLA garanti',
    ],
    color: 'primary',
    popular: false,
  },
]

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="pricing"
      className="py-24 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Décoration de fond */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #54b437 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900">
            Des formules adaptées à vos besoins
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Choisissez la formule qui correspond le mieux à votre projet digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const bgColor = 'bg-primary-500'
            const borderColor = 'border-primary-500'
            const textColor = 'text-primary-500'
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 ${
                  plan.popular 
                    ? `${borderColor} border-2 shadow-2xl scale-105` 
                    : 'border-dark-100'
                } transition-all duration-300 overflow-hidden group`}
              >
                {/* Badge "Populaire" */}
                {plan.popular && (
                  <div className={`absolute top-0 right-0 ${bgColor} text-white px-4 py-1 rounded-bl-2xl rounded-tr-3xl text-sm font-bold`}>
                    Populaire
                  </div>
                )}

                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${textColor}`}>
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-dark-900">{plan.price}</span>
                    </div>
                    <p className="text-dark-600 text-sm">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`flex-shrink-0 w-5 h-5 ${bgColor} rounded-full flex items-center justify-center mt-0.5`}>
                          <Check className="text-white" size={14} />
                        </div>
                        <span className="text-dark-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.a
                    href="https://wa.me/2250711134106"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? `${bgColor} text-white hover:shadow-xl hover:scale-105`
                        : 'bg-white border-2 ' + borderColor + ' ' + textColor + ' hover:bg-opacity-10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {plan.name === 'Enterprise' ? 'Nous contacter' : 'Demander un devis'}
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-50 rounded-3xl p-8 md:p-12 border border-primary-100">
            <h3 className="text-3xl font-bold mb-4 text-dark-900">
              Un projet en tête ?
            </h3>
            <p className="text-xl text-dark-600 mb-8 max-w-2xl mx-auto">
              Discutons de vos besoins et trouvons la solution parfaite ensemble
            </p>
            <motion.a
              href="https://wa.me/2250711134106"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-primary-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un devis gratuit
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

