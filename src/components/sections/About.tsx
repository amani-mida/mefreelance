'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Palette, TrendingUp, Bot } from 'lucide-react'

const floatingCards = [
  {
    icon: Code2,
    title: 'Développement',
  },
  {
    icon: Palette,
    title: 'Design',
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
  },
  {
    icon: Bot,
    title: 'IA',
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-24 bg-dark-50 relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-dark-900 px-4">
            Découvrez Midigitale
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-dark-600 max-w-2xl mx-auto px-4">
            Découvrez qui nous sommes et comment nous transformons vos idées en succès digitaux
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-4 md:px-0"
          >
            <motion.div 
              className="bg-primary-50 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
              <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-dark-900">
                Notre mission
              </h3>
              <p className="text-sm sm:text-base text-dark-700 mb-3 sm:mb-4 leading-relaxed">
                Midigitale est une agence digitale spécialisée dans la création de sites web, 
                d'applications web et d'applications mobiles. Nous accompagnons nos clients 
                dans leur transformation digitale avec des solutions sur mesure et performantes.
              </p>
              <p className="text-sm sm:text-base text-dark-700 mb-3 sm:mb-4 leading-relaxed">
                Notre approche combine créativité, expertise technique et écoute client pour livrer
                des solutions qui répondent parfaitement à vos besoins. Nous nous engageons à 
                fournir un travail de qualité et à respecter les délais convenus.
              </p>
              <p className="text-sm sm:text-base text-dark-700 leading-relaxed">
                Forts de notre expérience sur de nombreux projets, nous restons à la pointe de
                l'innovation pour offrir les meilleures solutions technologiques à nos clients.
              </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[500px] flex items-center justify-center px-4 md:px-0"
          >
            {/* Illustration Undraw centrale */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative z-10 w-full"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full"
              >
                <svg
                  viewBox="0 0 1200 900"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto max-w-[200px] sm:max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto"
                >
                  {/* Fond décoratif avec cercles concentriques */}
                  <motion.circle
                    cx="600"
                    cy="450"
                    r="400"
                    fill="#54b437"
                    fillOpacity="0.08"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                  <motion.circle
                    cx="600"
                    cy="450"
                    r="320"
                    fill="#81cd47"
                    fillOpacity="0.05"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />
                  
                  {/* Personnage assis au bureau */}
                  <motion.g
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {/* Bureau */}
                    <rect x="200" y="550" width="800" height="300" rx="20" fill="#8B4513" fillOpacity="0.3" />
                    <rect x="220" y="530" width="760" height="30" rx="15" fill="#654321" fillOpacity="0.4" />
                    
                    {/* Écran d'ordinateur principal */}
                    <motion.rect
                      x="350"
                      y="350"
                      width="500"
                      height="350"
                      rx="15"
                      fill="#4741c9"
                      initial={{ scale: 0.95 }}
                      animate={inView ? { scale: [0.95, 1, 0.95] } : {}}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <rect x="370" y="370" width="460" height="310" rx="8" fill="#ffffff" />
                    
                    {/* Contenu de l'écran */}
                    <motion.rect
                      x="390"
                      y="390"
                      width="200"
                      height="130"
                      rx="4"
                      fill="#54b437"
                      initial={{ opacity: 0.4 }}
                      animate={inView ? { opacity: [0.4, 0.7, 0.4] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.rect
                      x="610"
                      y="390"
                      width="200"
                      height="130"
                      rx="4"
                      fill="#81cd47"
                      initial={{ opacity: 0.4 }}
                      animate={inView ? { opacity: [0.4, 0.7, 0.4] } : {}}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.rect
                      x="390"
                      y="535"
                      width="420"
                      height="130"
                      rx="4"
                      fill="#4741c9"
                      fillOpacity="0.3"
                      initial={{ opacity: 0.3 }}
                      animate={inView ? { opacity: [0.3, 0.6, 0.3] } : {}}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                    
                    {/* Clavier */}
                    <rect x="450" y="680" width="300" height="40" rx="8" fill="#2C2C2C" />
                    
                    {/* Personnage */}
                    {/* Tête */}
                    <circle cx="650" cy="750" r="70" fill="#FFD93D" />
                    {/* Cheveux */}
                    <path
                      d="M580 720 Q650 680 720 720"
                      stroke="#FFD93D"
                      strokeWidth="25"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Corps (haut) */}
                    <ellipse cx="650" cy="820" rx="90" ry="60" fill="#FFD93D" />
                    
                    {/* Bras gauche */}
                    <ellipse cx="480" cy="800" rx="50" ry="80" fill="#FFD93D" />
                    <circle cx="430" cy="760" r="30" fill="#FFD93D" />
                    
                    {/* Bras droit */}
                    <ellipse cx="820" cy="800" rx="50" ry="80" fill="#FFD93D" />
                    <circle cx="870" cy="760" r="30" fill="#FFD93D" />
                    
                    {/* Éléments décoratifs flottants */}
                    <motion.circle
                      cx="250"
                      cy="300"
                      r="40"
                      fill="#54b437"
                      fillOpacity="0.4"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { 
                        opacity: [0.4, 0.7, 0.4],
                        scale: [1, 1.2, 1],
                        y: [0, -30, 0]
                      } : {}}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    />
                    <motion.circle
                      cx="950"
                      cy="300"
                      r="35"
                      fill="#81cd47"
                      fillOpacity="0.4"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { 
                        opacity: [0.4, 0.7, 0.4],
                        scale: [1, 1.3, 1],
                        y: [0, -25, 0]
                      } : {}}
                      transition={{ duration: 3.5, repeat: Infinity, delay: 1.2 }}
                    />
                    <motion.circle
                      cx="150"
                      cy="750"
                      r="30"
                      fill="#4741c9"
                      fillOpacity="0.4"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { 
                        opacity: [0.4, 0.7, 0.4],
                        scale: [1, 1.4, 1],
                        x: [0, 20, 0]
                      } : {}}
                      transition={{ duration: 4, repeat: Infinity, delay: 1.4 }}
                    />
                    <motion.circle
                      cx="1050"
                      cy="750"
                      r="35"
                      fill="#54b437"
                      fillOpacity="0.4"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { 
                        opacity: [0.4, 0.7, 0.4],
                        scale: [1, 1.2, 1],
                        x: [0, -20, 0]
                      } : {}}
                      transition={{ duration: 3.5, repeat: Infinity, delay: 1.6 }}
                    />
                  </motion.g>
                </svg>
              </motion.div>
            </motion.div>

            {/* 4 Cartes flottantes aux 4 coins de l'illustration */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Carte Top-Left (Développement) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -20, 0],
                  x: [0, 15, 0]
                } : {}}
                transition={{ 
                  opacity: { duration: 0.5, delay: 0.8 },
                  scale: { duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                }}
                className="absolute top-1 left-1 sm:top-2 sm:left-2 md:top-3 md:left-3 lg:top-5 lg:left-5 bg-white p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border border-dark-100 group z-20 pointer-events-auto"
                whileHover={{ scale: 1.1, zIndex: 30 }}
              >
                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-primary-500 rounded-md sm:rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300 shadow-md flex-shrink-0">
                    <Code2 className="text-white transition-colors w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />
                  </div>
                  <h4 className="font-bold text-dark-900 text-[10px] sm:text-xs md:text-sm whitespace-nowrap">Développement</h4>
                </div>
              </motion.div>

              {/* Carte Top-Right (Design) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -20, 0],
                  x: [0, -15, 0]
                } : {}}
                transition={{ 
                  opacity: { duration: 0.5, delay: 0.95 },
                  scale: { duration: 0.5, delay: 0.95, type: "spring", stiffness: 200 },
                  y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                  x: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
                }}
                className="absolute top-1 right-1 sm:top-2 sm:right-2 md:top-3 md:right-3 lg:top-5 lg:right-5 bg-white p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border border-dark-100 group z-20 pointer-events-auto"
                whileHover={{ scale: 1.1, zIndex: 30 }}
              >
                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-primary-500 rounded-md sm:rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300 shadow-md flex-shrink-0">
                    <Palette className="text-white transition-colors w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />
                  </div>
                  <h4 className="font-bold text-dark-900 text-[10px] sm:text-xs md:text-sm whitespace-nowrap">Design</h4>
                </div>
              </motion.div>

              {/* Carte Bottom-Left (Marketing) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { 
                  opacity: 1, 
                  scale: 1,
                  y: [0, 20, 0],
                  x: [0, 15, 0]
                } : {}}
                transition={{ 
                  opacity: { duration: 0.5, delay: 1.1 },
                  scale: { duration: 0.5, delay: 1.1, type: "spring", stiffness: 200 },
                  y: { duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
                  x: { duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
                }}
                className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 md:bottom-3 md:left-3 lg:bottom-5 lg:left-5 bg-white p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border border-dark-100 group z-20 pointer-events-auto"
                whileHover={{ scale: 1.1, zIndex: 30 }}
              >
                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-primary-500 rounded-md sm:rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300 shadow-md flex-shrink-0">
                    <TrendingUp className="text-white transition-colors w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />
                  </div>
                  <h4 className="font-bold text-dark-900 text-[10px] sm:text-xs md:text-sm whitespace-nowrap">Marketing</h4>
                </div>
              </motion.div>

              {/* Carte Bottom-Right (IA) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { 
                  opacity: 1, 
                  scale: 1,
                  y: [0, 20, 0],
                  x: [0, -15, 0]
                } : {}}
                transition={{ 
                  opacity: { duration: 0.5, delay: 1.25 },
                  scale: { duration: 0.5, delay: 1.25, type: "spring", stiffness: 200 },
                  y: { duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
                  x: { duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
                }}
                className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-3 lg:bottom-5 lg:right-5 bg-white p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border border-dark-100 group z-20 pointer-events-auto"
                whileHover={{ scale: 1.1, zIndex: 30 }}
              >
                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-primary-500 rounded-md sm:rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300 shadow-md flex-shrink-0">
                    <Bot className="text-white transition-colors w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />
                  </div>
                  <h4 className="font-bold text-dark-900 text-[10px] sm:text-xs md:text-sm whitespace-nowrap">IA</h4>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-primary-500 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center mx-4 md:mx-0"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Prêt à démarrer votre projet digital ?
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 opacity-90 px-4">
            Discutons de vos besoins et créons une solution sur mesure pour votre entreprise.
          </p>
          <motion.a
            href="https://wa.me/2250711134106"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 rounded-full font-semibold text-sm sm:text-base hover:bg-primary-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Demander un devis gratuit
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

