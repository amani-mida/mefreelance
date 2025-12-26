'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@devportfolio.com',
    href: 'mailto:contact@devportfolio.com',
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
      className="py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white"
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
            Travaillons <span className="text-primary-400">ensemble</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Discutons-en et créons quelque chose
            d'extraordinaire !
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Informations de contact</h3>
          <p className="text-dark-300 mb-8 text-center">
            N'hésitez pas à me contacter pour discuter de votre projet ou
            simplement pour échanger. Je réponds généralement sous 24h.
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
                  className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-lg hover:bg-dark-800 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-dark-400">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-xl p-6 text-center">
            <h4 className="font-bold mb-2">Disponibilité</h4>
            <p className="text-sm opacity-90">
              Actuellement disponible pour de nouveaux projets passionnants.
              Réponse garantie sous 24h.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

