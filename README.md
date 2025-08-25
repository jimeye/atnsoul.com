# ATN Soul - Site Web Officiel

Site web officiel d'ATN Soul, une plateforme dédiée à la musique soul, jazz et R&B avec des fonctionnalités avancées de lecture audio et de gestion de contenu.

## 🚀 Technologies Utilisées

- **Next.js 14** - Framework React avec App Router
- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **shadcn/ui** - Composants UI modernes
- **next-themes** - Gestion du thème sombre/clair
- **Lucide React** - Icônes

## 🎨 Design

- **Polices** : Helvetica Bold pour les titres, Lucida Console pour le texte
- **Responsive** : Optimisé pour tous les écrans (mobile, tablette, desktop, écrans larges)
- **Thème** : Mode sombre/clair avec transitions fluides
- **Animations** : Animations Framer Motion pour une expérience utilisateur optimale

## 📁 Structure du Projet

```
src/
├── app/                    # Pages Next.js 14 (App Router)
│   ├── about/             # Page À propos
│   ├── la-serre-aux-papillons/  # Page Film
│   ├── nyc-sessions/      # Page Performance
│   ├── amarela/           # Page Album
│   ├── co-productions/    # Page Collaborations
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants React
│   ├── ui/               # Composants UI de base
│   ├── layout/           # Composants de mise en page
│   ├── music/            # Composants musicaux
│   ├── forms/            # Composants de formulaires
│   └── providers/        # Providers React
└── lib/                  # Utilitaires et types
    ├── utils.ts          # Fonctions utilitaires
    ├── types.ts          # Types TypeScript
    └── hooks/            # Hooks personnalisés
```

## 🎵 Fonctionnalités

### 🏠 Page d'Accueil
- Section hero avec logo ATN Soul
- Statistiques de l'entreprise
- Événements à venir
- Call-to-action

### 🎬 Pages de Contenu
- **La Serre aux Papillons** : Présentation du film musical
- **NYC Sessions** : Performance live
- **Amarela** : Album LP avec liste des morceaux
- **Co-Productions** : Collaborations musicales

### 🎵 Lecteur Audio
- Lecteur sticky en bas de page
- Contrôles de lecture (play/pause, volume, progression)
- Playlist avec navigation
- Mode shuffle et repeat

### 🎨 Interface
- Navigation sticky avec logo
- Toggle thème sombre/clair
- Menu hamburger responsive
- Animations fluides

## 🚀 Installation et Démarrage

1. **Cloner le projet**
```bash
git clone [url-du-repo]
cd atnsoul.com
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Démarrer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 📦 Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run start` - Serveur de production
- `npm run lint` - Vérification ESLint
- `npm run type-check` - Vérification TypeScript

## 🌐 Déploiement

Le projet est optimisé pour le déploiement sur Vercel :

1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement si nécessaire
3. Déployez automatiquement

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints optimisés :
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : 1024px - 1920px
- Écrans larges : > 1920px

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `src/app/globals.css` avec des variables CSS personnalisées.

### Polices
- **Titres** : Helvetica Bold
- **Texte** : Lucida Console

### Images
Le logo principal se trouve dans `public/atn-soul-website-typo-producer-paris-ultra-soul-ultrasoul.png`

## 📄 Licence

Ce projet est propriétaire d'ATN Soul.

## 🤝 Contribution

Pour contribuer au projet, veuillez contacter l'équipe ATN Soul.

---

**ATN Soul** - Votre destination pour la musique soul, jazz et R&B.
