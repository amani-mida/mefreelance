import { Linkedin, Twitter, Facebook } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/mi-digitale/', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/share/171pzmrKab/', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <img
              src="/images/logo/logo-o.png"
              alt="Midigitale"
              className="h-8 sm:h-10 w-auto mb-3 sm:mb-4 mx-auto sm:mx-0"
            />
            <p className="text-sm sm:text-base text-dark-300">
              Agence digitale spécialisée dans la création de solutions web modernes 
              et performantes pour votre transformation digitale.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm sm:text-base text-dark-300 hover:text-primary-400 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm sm:text-base text-dark-300 hover:text-primary-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm sm:text-base text-dark-300 hover:text-primary-400 transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm sm:text-base text-dark-300 hover:text-primary-400 transition-colors">
                  Réalisations
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm sm:text-base text-dark-300 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Réseaux sociaux</h4>
            <div className="flex space-x-4 justify-center sm:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-dark-800 rounded-full hover:bg-primary-600 transition-colors"
                    aria-label={social.label}
                    target='_blanck'
                  >
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm sm:text-base text-dark-400">
          <p>&copy; {new Date().getFullYear()} Midigitale. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

