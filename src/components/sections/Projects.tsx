'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Globe, LayoutDashboard, Smartphone, X, ChevronLeft, ChevronRight } from 'lucide-react'

type ProjectCategory = 'site-web' | 'dashboard' | 'app-mobile'

interface Project {
  title: string
  description: string
  image: string
  images?: string[] // Pour la galerie si site en construction
  tags: string[]
  github?: string
  demo?: string
  category: ProjectCategory
  isActive: boolean // true = site actif, false = en construction
  websiteUrl?: string
}

const projects: Project[] = [
  // Sites web
  {
    title: 'TO7 e-SIM',
    description: 'Plateforme de vente d\'eSIM pour voyager dans plus de 150 pays. Solution 100% numérique avec activation instantanée.',
    image: '/images/projects/to7esim.png',
    tags: ['React', 'E-commerce', 'Paiement en ligne', 'Responsive'],
    websiteUrl: 'https://to7esim.com/',
    category: 'site-web' as ProjectCategory,
    isActive: true,
  },
  {
    title: 'Big Bag Express',
    description: 'Leader français de la vente de granulats en big bag. Plateforme e-commerce spécialisée dans les graviers, galets, sables colorés et matériaux d\'aménagement extérieur. Showroom de 1500m².',
    image: '/images/projects/big-bag-express.png',
    tags: ['E-commerce', 'B2B', 'Granulats', 'Aménagement extérieur'],
    websiteUrl: 'https://bigbagexpress.com/',
    category: 'site-web' as ProjectCategory,
    isActive: true,
  },
  {
    title: 'Ylios Energy',
    description: 'Site vitrine pour une entreprise spécialisée dans l\'installation de panneaux solaires en Côte d\'Ivoire. Solutions énergétiques durables.',
    image: '/images/projects/yliosenergy.png',
    tags: ['WordPress', 'Energie solaire', 'B2B', 'SEO'],
    websiteUrl: 'https://yliosenergy.com/',
    category: 'site-web' as ProjectCategory,
    isActive: true,
  },
  {
    title: 'Casa Josa',
    description: 'Site de location d\'appartements de charme à Cannes. Présentation des différents appartements avec système de réservation.',
    image: '/images/projects/casa-josa.png',
    tags: ['WordPress', 'Immobilier', 'Réservation', 'Multilingue'],
    websiteUrl: 'https://www.casa-josa.fr/',
    category: 'site-web' as ProjectCategory,
    isActive: true,
  },
  {
    title: 'SITA SA',
    description: 'Site web professionnel pour une entreprise de services. Présentation des offres et réalisations.',
    image: '/images/projects/sita-sa.png',
    tags: ['Web Design', 'Corporate', 'Responsive'],
    websiteUrl: 'https://sita-sa.com/',
    category: 'site-web' as ProjectCategory,
    isActive: true,
  },
  {
    title: 'Pliiz',
    description: 'Plateforme de système d\'appel numérique permettant aux clients d\'appeler instantanément les équipes.',
    image: '/images/projects/pliiz.png',
    tags: ['SaaS', 'Système d\'appel', 'Interface moderne'],
    websiteUrl: 'https://pliiz.eu/',
    category: 'site-web' as ProjectCategory,
    isActive: true,
  },
  {
    title: 'Sud Est Sécurité',
    description: 'Site web pour une entreprise de sécurité offrant des services de rondes, interventions et gardiennage.',
    image: '/images/projects/sud-est-securite.png',
    tags: ['Sécurité', 'Services professionnels', 'Corporate'],
    websiteUrl: 'https://sud-est-securite.fr/',
    category: 'site-web' as ProjectCategory,
    isActive: true,
  },
  {
    title: 'Nice Driver',
    description: 'Plateforme de réservation de services de chauffeur privé de luxe sur la Côte d\'Azur. Système de réservation en ligne avec sélection de véhicules et destinations.',
    image: '/images/projects/nice-driver.png',
    tags: ['E-commerce', 'Réservation en ligne', 'Services premium', 'Côte d\'Azur'],
    websiteUrl: 'https://nice-driver.com/',
    category: 'site-web' as ProjectCategory,
    isActive: true,
  },
  {
    title: 'My Future AI',
    description: 'Plateforme de clairvoyance IA avec chat en direct. Application moderne alliant tradition et technologie pour des prédictions personnalisées. Développé en front Symfony/Twig.',
    image: '/images/projects/my-future-ai.png',
    tags: ['Symfony', 'Twig', 'IA', 'Chat en direct', 'E-commerce'],
    websiteUrl: 'https://my-future.ai/',
    category: 'site-web' as ProjectCategory,
    isActive: true,
  },
  {
    title: 'Royspace',
    description: 'Plateforme financière africaine pour l\'entrepreneuriat et l\'investissement. Services de formation, accompagnement en montage de projet et recherche de financement pour atteindre la liberté financière.',
    image: '/images/projects/royspace.png',
    tags: ['Plateforme financière', 'Entrepreneuriat', 'Formation', 'Afrique'],
    websiteUrl: 'https://royspace.org/fr/',
    category: 'site-web' as ProjectCategory,
    isActive: true,
  },
  {
    title: 'Benoit Bechet',
    description: 'Site web professionnel pour présenter les services et réalisations.',
    image: '/images/projects/benoit-bechet.png',
    tags: ['Web Design', 'Portfolio', 'Professionnel'],
    websiteUrl: 'https://www.benoitbechet.com/',
    category: 'site-web' as ProjectCategory,
    isActive: true,
  },
  // Dashboards
  {
    title: 'ANV Dashboard',
    description: 'Dashboard de gestion complet pour une application mobile interne. Interface d\'administration avec gestion des utilisateurs, permissions, livraisons, locations, formations et statistiques en temps réel.',
    image: '/images/projects/ds-anva-2.png', // Image de couverture pour la carte
    images: [
      '/images/projects/ds-anva-2.png', // Tableau de bord principal
      '/images/projects/ds-anva-3.png', // Page de livraisons
      '/images/projects/ds-anva-4.png', // Page de permissions
      '/images/projects/ds-anva-5.png', // Image supplémentaire
    ],
    tags: ['Dashboard', 'Gestion d\'application', 'Administration', 'Statistiques'],
    category: 'dashboard' as ProjectCategory,
    isActive: false, // Projet interne, pas de site public
  },
  {
    title: 'Atoo Dashboard',
    description: 'Dashboard d\'administration pour l\'application Atoo. Interface complète de gestion avec outils de suivi et statistiques en temps réel.',
    image: '/images/projects/atoo-dash-1.png', // Image de couverture pour la carte
    images: [
      '/images/projects/atoo-dash-1.png',
      '/images/projects/atoo-dash-2.png',
      '/images/projects/atoo-dash-3.png',
    ],
    tags: ['Dashboard', 'Gestion', 'Administration', 'Atoo'],
    category: 'dashboard' as ProjectCategory,
    isActive: false, // Projet interne, pas de site public
  },
  // Apps mobiles
  {
    title: 'Atoo App Mobile',
    description: 'Application mobile de mise en relation et de gestion de services. Interface moderne et intuitive permettant de connecter les utilisateurs et de gérer diverses prestations.',
    image: '/images/projects/ato.1.png', // Image de couverture pour la carte
    images: [
      '/images/projects/ato.1.png',
      '/images/projects/ato-2.png',
      '/images/projects/ato-3.png',
      '/images/projects/ato-4.png',
      '/images/projects/ato-5.png',
    ],
    tags: ['React Native', 'Application mobile', 'Mise en relation', 'Gestion de services'],
    category: 'app-mobile' as ProjectCategory,
    isActive: false, // Application mobile, pas de site web
  },
  {
    title: 'ANV App Mobile',
    description: 'Application mobile de mise en relation pour connecter les professionnels et les entreprises. Interface intuitive avec gestion de profils particuliers et entreprises, authentification sécurisée et système de validation.',
    image: '/images/projects/anva-app-1.png', // Image de couverture pour la carte
    images: [
      '/images/projects/anva-app-1.png',
      '/images/projects/anva-app2 (1).png',
      '/images/projects/anva-app2 (2).png',
      '/images/projects/anva-app2 (3).png',
      '/images/projects/anva-app2 (4).png',
    ],
    tags: ['React Native', 'Application mobile', 'Mise en relation', 'Profil utilisateur'],
    category: 'app-mobile' as ProjectCategory,
    isActive: false, // Application mobile, pas de site web
  },
]

const categories = [
  { id: 'site-web' as ProjectCategory, label: 'Site web', icon: Globe },
  { id: 'dashboard' as ProjectCategory, label: 'Dashboard', icon: LayoutDashboard },
  { id: 'app-mobile' as ProjectCategory, label: 'App mobile', icon: Smartphone },
]

// Composant pour la modal de galerie
function GalleryModal({ 
  images, 
  projectTitle, 
  isOpen, 
  onClose,
  initialIndex = 0 
}: { 
  images: string[], 
  projectTitle: string,
  isOpen: boolean,
  onClose: () => void,
  initialIndex?: number
}) {
  const [selectedImage, setSelectedImage] = useState(initialIndex)

  // Réinitialiser l'index quand la modal s'ouvre
  useEffect(() => {
    if (isOpen) {
      setSelectedImage(initialIndex)
    }
  }, [isOpen, initialIndex])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-dark-900/95 flex items-center justify-center p-2 sm:p-4"
        onClick={onClose}
      >
        <div className="relative max-w-6xl max-h-[90vh] w-full">
          <button
            onClick={onClose}
            className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-primary-400 transition-colors z-10 p-2"
          >
            <X size={24} className="sm:w-8 sm:h-8" />
          </button>

          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(selectedImage - 1)
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
          )}

          {selectedImage < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(selectedImage + 1)
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          )}

          <motion.img
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            src={images[selectedImage]}
            alt={`${projectTitle} - Image ${selectedImage + 1}`}
            className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-white text-xs sm:text-sm bg-dark-900/50 px-3 py-1 rounded-full">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('site-web')
  const [galleryModal, setGalleryModal] = useState<{ projectTitle: string, images: string[], isOpen: boolean, initialIndex: number }>({
    projectTitle: '',
    images: [],
    isOpen: false,
    initialIndex: 0
  })
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = projects.filter((p) => p.category === activeTab)

  const openGallery = (project: Project) => {
    if (project.images && project.images.length > 0) {
      setGalleryModal({
        projectTitle: project.title,
        images: project.images,
        isOpen: true,
        initialIndex: 0
      })
    }
  }

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-dark-900 px-4">
            Nos réalisations
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-dark-600 max-w-2xl mx-auto px-4">
            Découvrez une sélection de nos projets récents réalisés pour nos clients
          </p>
        </motion.div>

        {/* Tabs */}
            <motion.div
          initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mi-tab_mobil flex justify-center mb-8 sm:mb-12 px-4"
            >
          <div className=" mi-tab_mobil-inner inline-flex bg-dark-100 rounded-full p-1.5 sm:p-2 gap-1 sm:gap-2 overflow-x-auto w-full sm:w-auto justify-center">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`
                    relative px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base
                    flex items-center gap-1.5 sm:gap-2 whitespace-nowrap
                    ${
                      activeTab === category.id
                        ? 'text-white'
                        : 'text-dark-600 hover:text-dark-900'
                    }
                  `}
                >
                  {activeTab === category.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-500 rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon
                    size={18}
                    className={`relative z-10 ${
                      activeTab === category.id ? 'text-white' : 'text-dark-600'
                    }`}
                  />
                  <span className="relative z-10">{category.label}</span>
                </button>
              )
            })}
              </div>
            </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg card-hover"
            >
              {/* Image cliquable pour site actif ou galerie pour site en construction */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                {project.isActive && project.websiteUrl ? (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                    <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-dark-900">
                        <ExternalLink size={14} />
                        <span className="hidden sm:inline">Visiter le site</span>
                        <span className="sm:hidden">Visiter</span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    onClick={() => project.images && project.images.length > 0 && openGallery(project)}
                    className="cursor-pointer w-full h-full"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})`, minHeight: '192px' }}
                    />
                    <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-orange-500/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium text-white whitespace-nowrap">
                        {project.category === 'app-mobile' ? 'En construction' : (project.images && project.images.length > 0 ? 'Voir la galerie' : 'En construction')}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-dark-900">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-dark-600 mb-3 sm:mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                  <a
                    href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-dark-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    <Github size={18} />
                      Code
                  </a>
                  )}
                  {project.isActive && project.websiteUrl && (
                  <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-dark-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    <ExternalLink size={18} />
                      Visiter
                  </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal de galerie */}
        <GalleryModal
          images={galleryModal.images}
          projectTitle={galleryModal.projectTitle}
          isOpen={galleryModal.isOpen}
          onClose={() => setGalleryModal({ ...galleryModal, isOpen: false })}
          initialIndex={galleryModal.initialIndex}
        />

        {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
        >
            <p className="text-dark-600 text-lg">
              Aucun projet dans cette catégorie pour le moment.
            </p>
        </motion.div>
        )}
      </div>
    </section>
  )
}

