import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Mise en contact', href: '#services' },
    { name: 'Création de jobs', href: '#services' },
    { name: 'Vente de produits', href: '#services' },
  ],
  acteurs: [
    { name: 'Exploitants', href: '#acteurs' },
    { name: 'Travailleurs', href: '#acteurs' },
    { name: 'Acheteurs', href: '#acteurs' },
  ],
  entreprise: [
    { name: 'À propos', href: '#about' },
    { name: 'Sécurité', href: '#securite' },
    { name: 'Contact', href: '#contact' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-400">Hanbara</span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Une solution d'assistance qui apporte sécurité et garantie de confiance
              entre les différents acteurs du secteur agricole.
            </p>
            <p className="text-primary-400 font-semibold italic">
              "Hanbara avec vous dans le travail"
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Acteurs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Acteurs</h4>
            <ul className="space-y-2">
              {footerLinks.acteurs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-400" />
              <a
                href="mailto:contact@hanbara.com"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                contact@hanbara.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary-400" />
              <a
                href="tel:+225XXXXXXXXX"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                +225 XX XX XX XX XX
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary-400" />
              <span className="text-gray-300">Abidjan, Côte d'Ivoire</span>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
          <p className="text-gray-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} Hanbara. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

