'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Liste des partenaires/clients - vous pourrez ajouter de vrais logos plus tard
const partners = [
  { name: 'Partenaire 1', logo: '/images/logo/logo.png' },
  { name: 'Partenaire 2', logo: '/images/logo/logo.png' },
  { name: 'Partenaire 3', logo: '/images/logo/logo.png' },
  { name: 'Partenaire 4', logo: '/images/logo/logo.png' },
  { name: 'Partenaire 5', logo: '/images/logo/logo.png' },
  { name: 'Partenaire 6', logo: '/images/logo/logo.png' },
  { name: 'Partenaire 7', logo: '/images/logo/logo.png' },
  { name: 'Partenaire 8', logo: '/images/logo/logo.png' },
]

// Dupliquer les partenaires pour créer un effet de boucle infinie
const duplicatedPartners = [...partners, ...partners, ...partners]

export default function TrustedBy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="trusted-by"
      className="py-12 sm:py-16 bg-white border-t border-b border-dark-200 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-dark-900 px-4">
            Ils nous font confiance
          </h2>
          <p className="text-sm sm:text-base text-dark-600 max-w-xl mx-auto px-4">
            Des entreprises de tous secteurs nous font confiance pour leur transformation digitale
          </p>
        </motion.div>

        {/* Carrousel */}
        <div className="relative w-full overflow-hidden">
          {/* Masque pour l'effet de fondu sur les bords */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Conteneur du carrousel */}
          <div className="flex">
            <motion.div
              className="flex gap-8 sm:gap-12 md:gap-16"
              animate={{
                x: [0, -1600],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-4"
                >
                  <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-10 sm:h-12 md:h-16 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

