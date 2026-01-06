# Midigitale - Agence Digital

Site web moderne et élégant pour une agence digitale spécialisée dans la création de solutions web, applications mobiles et transformation digitale. Construit avec Next.js 16, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Fonctionnalités

- ✨ Design moderne et responsive
- 🎨 Animations fluides avec Framer Motion
- 📱 Entièrement responsive (mobile, tablette, desktop)
- ⚡ Optimisé pour les performances
- 🎯 SEO-friendly
- 🌙 Prêt pour le mode sombre (à venir)

## 🛠️ Technologies

- **Next.js 16** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **Framer Motion** - Animations
- **Lucide React** - Icônes

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Démarrer le serveur de production
npm start
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du projet

```
midigitale/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout principal
│   │   ├── page.tsx        # Page d'accueil
│   │   └── globals.css     # Styles globaux
│   └── components/
│       ├── Navbar.tsx      # Navigation
│       ├── Footer.tsx      # Pied de page
│       └── sections/
│           ├── Hero.tsx          # Section héro
│           ├── About.tsx         # Section à propos
│           ├── Services.tsx      # Section services
│           ├── Skills.tsx        # Section technologies
│           ├── Methodology.tsx   # Section méthodologie
│           ├── Projects.tsx      # Section réalisations
│           ├── Testimonials.tsx  # Section témoignages
│           └── Contact.tsx       # Section contact
├── public/                 # Fichiers statiques
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Personnalisation

### Couleurs

Les couleurs peuvent être modifiées dans `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    // Vos couleurs primaires
  }
}
```

### Contenu

Modifiez le contenu directement dans les composants :
- `src/components/sections/Hero.tsx` - Section héro
- `src/components/sections/About.tsx` - Informations personnelles
- `src/components/sections/Skills.tsx` - Compétences
- `src/components/sections/Projects.tsx` - Projets
- `src/components/sections/Contact.tsx` - Informations de contact

## 📝 Licence

MIT

## 👩‍💻 Auteure

Développeuse Web

