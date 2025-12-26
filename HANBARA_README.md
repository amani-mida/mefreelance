# Landing Page Hanbara

## 🎯 Vue d'ensemble

Landing page moderne et responsive pour **Hanbara**, une plateforme de mise en relation et d'assistance dans le secteur agricole.

## 🚀 Accès

La landing page est accessible à l'adresse : `/hanbara`

## 📋 Sections

### 1. Hero Section
- Slogan principal : "Hanbara avec vous dans le travail"
- Description de la plateforme
- Statistiques (acteurs connectés, jobs créés, taux de confiance)
- Call-to-action

### 2. Services
Présentation des trois services principaux :
- **Mise en contact** : Connecter les acteurs du secteur agricole
- **Création de jobs** : Gérer les activités agricoles
- **Vente de produits** : Vendre des produits agricoles

### 3. Acteurs
Description des trois types d'acteurs :
- **Exploitants** : Agriculteurs, pisciculteurs, apiculteurs, éleveurs
- **Travailleurs** : Solo ou en entreprise
- **Acheteurs** : Particuliers et professionnels

### 4. Sécurité et Confiance
Mise en avant des garanties de sécurité :
- Protection des données
- Validation par experts
- KYC complet
- Transactions sécurisées
- Traçabilité totale
- Garantie de confiance

### 5. Call-to-Action
Section de contact et d'inscription avec :
- Formulaire d'inscription
- Informations de contact
- Liens vers le back office

## 🎨 Design

- **Couleurs principales** : Vert (secteur agricole), Orange (énergie), Bleu (confiance)
- **Responsive** : Adapté à tous les écrans (mobile, tablette, desktop)
- **Animations** : Utilisation de Framer Motion pour des transitions fluides
- **Modern UI** : Design épuré et professionnel

## 🛠️ Technologies

- **Next.js 16** : Framework React
- **TypeScript** : Typage statique
- **Tailwind CSS** : Styling
- **Framer Motion** : Animations
- **Lucide React** : Icônes
- **React Intersection Observer** : Animations au scroll

## 📁 Structure des fichiers

```
src/
├── app/
│   └── hanbara/
│       ├── layout.tsx      # Layout spécifique Hanbara
│       └── page.tsx         # Page principale
└── components/
    └── hanbara/
        ├── Navbar.tsx       # Navigation
        ├── Footer.tsx       # Pied de page
        ├── Hero.tsx         # Section hero
        ├── Services.tsx     # Section services
        ├── Acteurs.tsx      # Section acteurs
        ├── Securite.tsx     # Section sécurité
        └── CTA.tsx          # Call-to-action
```

## 🚀 Démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Accéder à la landing page
# http://localhost:3000/hanbara
```

## ✨ Fonctionnalités

- ✅ Design responsive
- ✅ Animations fluides
- ✅ Navigation smooth scroll
- ✅ Menu mobile
- ✅ SEO optimisé
- ✅ Accessibilité

## 📝 Notes

- Le layout Hanbara remplace automatiquement le Navbar/Footer du layout racine
- Toutes les sections sont accessibles via le menu de navigation
- Les animations se déclenchent au scroll (Intersection Observer)

