'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@midigitale.com',
    href: 'mailto:contact@midigitale.com',
  },
  {
    icon: Phone,
    label: 'Téléphone / WhatsApp',
    value: '+225 07 11 13 41 06',
    href: 'tel:+2250711134106',
  },
]

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white relative overflow-hidden"
      ref={ref}
    >
      {/* Grille subtile */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white px-4">
            Travaillons ensemble
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-dark-300 max-w-2xl mx-auto px-4">
            Vous avez un projet digital ? Discutons de vos besoins et créons une solution
            sur mesure pour votre entreprise !
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto px-4 sm:px-0"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Informations de contact</h3>
          <p className="text-sm sm:text-base text-dark-300 mb-6 sm:mb-8 text-center">
            N'hésitez pas à nous contacter pour discuter de votre projet ou
            demander un devis. Nous répondons généralement sous 24h.
          </p>

          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-dark-800/50 rounded-lg hover:bg-dark-800 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-dark-400">{info.label}</p>
                    <p className="font-medium text-sm sm:text-base truncate">{info.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>

          <motion.div 
            className="bg-primary-500 rounded-xl p-6 text-center relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <div className="relative z-10">
              <h4 className="font-bold mb-2">Disponibilité</h4>
              <p className="text-sm opacity-90">
                Nous sommes disponibles pour accompagner vos nouveaux projets digitaux.
                Devis gratuit sous 24h.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

