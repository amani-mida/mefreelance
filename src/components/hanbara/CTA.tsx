'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@hanbara.com',
    href: 'mailto:contact@hanbara.com',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+225 XX XX XX XX XX',
    href: 'tel:+225XXXXXXXXX',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Abidjan, Côte d\'Ivoire',
    href: '#',
  },
]

export default function CTA() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-white">
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
            Prêt à{' '}
            <span className="text-gradient-hanbara">Commencer ?</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-dark-600 max-w-2xl mx-auto"
          >
            Rejoignez la communauté Hanbara et développez votre activité agricole
            en toute confiance
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CTA Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">
              Démarrer avec Hanbara
            </h3>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Créez votre compte en quelques minutes et accédez à toutes les
              fonctionnalités de la plateforme. Que vous soyez exploitant,
              travailleur ou acheteur, Hanbara s'adapte à vos besoins.
            </p>
            <div className="space-y-4">
              <motion.a
                href="#"
                className="group flex items-center justify-between w-full bg-white text-primary-700 rounded-xl p-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Créer un compte</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#"
                className="flex items-center justify-center w-full bg-white/10 backdrop-blur-sm text-white rounded-xl p-4 font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Accéder au back office
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-dark-900 mb-6">
              Contactez-nous
            </h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 group"
                  whileHover={{ scale: 1.02, x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-dark-500 font-medium">
                      {info.label}
                    </div>
                    <div className="text-lg font-semibold text-dark-900">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

