'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Briefcase, Globe, Store, Factory, ShoppingBag } from 'lucide-react'

// Logos de clients/partenaires - vous pouvez remplacer par de vrais logos
const partners = [
  {
    name: 'TechStart',
    icon: Building2,
    category: 'Startup Tech',
  },
  {
    name: 'Innovation Corp',
    icon: Briefcase,
    category: 'Entreprise',
  },
  {
    name: 'Fashion Co',
    icon: ShoppingBag,
    category: 'E-commerce',
  },
  {
    name: 'Global Solutions',
    icon: Globe,
    category: 'International',
  },
  {
    name: 'Retail Plus',
    icon: Store,
    category: 'Commerce',
  },
  {
    name: 'Industrial Pro',
    icon: Factory,
    category: 'Industrie',
  },
]

export default function TrustedBy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="trusted-by"
      className="py-16 bg-white border-t border-b border-dark-200"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-dark-900">
            Ils nous font confiance
          </h2>
          <p className="text-dark-600 max-w-xl mx-auto">
            Des entreprises de tous secteurs nous font confiance pour leur transformation digitale
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner, index) => {
            const Icon = partner.icon
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 hover:bg-dark-50 rounded-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-20 h-20 bg-dark-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-50 group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-dark-600 group-hover:text-primary-600 transition-colors" size={36} />
                </div>
                <div className="text-center">
                  <div className="font-bold text-dark-900 text-sm mb-1">
                    {partner.name}
                  </div>
                  <div className="text-xs text-dark-500">
                    {partner.category}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Version alternative avec logos en ligne simple (sans icônes) */}
        {/* Vous pouvez décommenter cette section et utiliser de vrais logos d'images */}
        {/* 
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={`/images/partners/${partner.logo}`}
                alt={partner.name}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
        */}
      </div>
    </section>
  )
}

