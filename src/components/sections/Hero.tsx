'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const services = ['Sites Web', 'Applications Web', 'Applications Mobiles', 'Dashboards']

export default function Hero() {
  const [currentService, setCurrentService] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="mi-mobile-padding min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
          }}
        />
        {/* Fallback si l'image n'existe pas */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      </div>

      {/* Overlay sombre pour la lisibilité */}
      <div className="absolute inset-0 bg-dark-900/70" />

      {/* Décoration subtile */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Pattern de cercles concentriques */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 200 200">
          <defs>
            <pattern id="circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
        
        {/* Lignes ondulées subtiles */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M0,400 Q300,300 600,400 T1200,400" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
          <path d="M0,500 Q300,400 600,500 T1200,500" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
        </svg>
        
        {/* Formes géométriques animées très subtiles */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <motion.span 
              className="text-white block mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transformez vos idées en
            </motion.span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              solutions digitales
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
          >
            Midigitale est votre partenaire stratégique pour réussir votre transformation digitale. 
            De la conception à la réalisation, nous donnons vie à vos projets avec expertise et créativité.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://wa.me/2250711134106"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-primary text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Démarrer un projet</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Voir nos réalisations</span>
            </motion.a>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16 mb-12"
          >
            {[
              { value: '50+', label: 'Projets réalisés', color: 'text-primary-500' },
              { value: '98%', label: 'Clients satisfaits', color: 'text-primary-500' },
              { value: '5+', label: "Années d'expérience", color: 'text-primary-500' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold ${stat.color === 'text-primary-500' ? 'text-primary-400' : 'text-primary-400'} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8"
          >
            <motion.a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-white/80 hover:text-primary-400 transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-medium">Découvrir plus</span>
              <ArrowDown size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

