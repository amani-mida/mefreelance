'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'Midigitale a transformé notre présence digitale. Leur expertise et professionnalisme ont dépassé nos attentes. Une équipe réactive et innovante !',
    author: 'Sophie Martin',
    role: 'CEO',
    company: 'TechStart',
  },
  {
    quote: 'Un partenaire de confiance pour notre transformation digitale. ROI rapide et mesurable. Je recommande vivement !',
    author: 'Marc Dubois',
    role: 'Directeur',
    company: 'Innovation Corp',
  },
  {
    quote: 'Excellente collaboration ! Midigitale a su comprendre nos besoins et proposer des solutions sur mesure parfaitement adaptées.',
    author: 'Amélie Laurent',
    role: 'Marketing Manager',
    company: 'Fashion Co',
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-24 bg-white relative"
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
            Ce que disent nos clients
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-dark-600 max-w-2xl mx-auto px-4">
            La satisfaction de nos clients est au cœur de notre démarche
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-dark-200 relative overflow-hidden group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              >
                <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 text-dark-200" size={40} />
              </motion.div>
              <div className="relative z-10">
                <p className="text-sm sm:text-base text-dark-700 mb-4 sm:mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-dark-200 pt-4 sm:pt-6">
                  <div className="font-bold text-dark-900 text-sm sm:text-base">{testimonial.author}</div>
                  <div className="text-xs sm:text-sm text-dark-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

