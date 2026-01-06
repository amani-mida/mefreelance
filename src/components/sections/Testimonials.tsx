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
      className="py-24 bg-white relative"
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
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est au cœur de notre démarche
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
              className="bg-white rounded-2xl p-8 shadow-lg border border-dark-200 relative overflow-hidden group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              >
                <Quote className="absolute top-6 right-6 text-dark-200" size={48} />
              </motion.div>
              <div className="relative z-10">
                <p className="text-dark-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-dark-200 pt-6">
                  <div className="font-bold text-dark-900">{testimonial.author}</div>
                  <div className="text-sm text-dark-600">
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

