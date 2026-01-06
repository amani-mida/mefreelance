import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/amani-mida', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/amani-mida', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#contact', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img
              src="/images/logo/logo.png"
              alt="Midigitale"
              className="h-10 w-auto mb-4"
            />
            <p className="text-dark-300">
              Agence digitale spécialisée dans la création de solutions web modernes 
              et performantes pour votre transformation digitale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-dark-300 hover:text-primary-400 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#services" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#skills" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Réalisations
                </a>
              </li>
              <li>
                <a href="#contact" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Réseaux sociaux</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center bg-dark-800 rounded-full hover:bg-primary-600 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8 text-center text-dark-400">
          <p>&copy; {new Date().getFullYear()} Midigitale. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

