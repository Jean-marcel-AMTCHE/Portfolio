# Projet Portfolio - [Jean-Marcel Amoutché]

Un portfolio professionnel créé avec Next.js, présentant mes projets, mes compétences et mon expérience. Déployé sur Vercel.

## Description

Ce site web de portfolio sert de plateforme centrale pour présenter mon travail et mon expertise. Il est construit avec Next.js, un framework React qui permet des fonctionnalités telles que le rendu côté serveur, la génération de sites statiques et les routes API. Le site est conçu pour être visuellement attrayant, convivial et responsive.

## Fonctionnalités Clés

*   **Page d'Accueil :** Présentation, spécialisation et appel à l'action.
*   **Page "À propos de moi" :** Parcours, compétences et CV/résumé téléchargeable.
*   **Liste des Projets :** Présentation des projets avec descriptions, images et liens.
*   **Pages de Projets Dynamiques :** Informations détaillées pour chaque projet, y compris les technologies utilisées et les défis rencontrés.
*   **Page de Contact :** Informations de contact et formulaire de contact simple.
*   **Navigation Cohérente :** En-tête et pied de page pour une navigation facile et un accès aux liens importants.

## Technologies Utilisées

*   Next.js
*   React
*   CSS

## Structure du Projet


/
├── components/         # Composants React réutilisables
├── pages/              # Pages Next.js et routes API
│   ├── index.tsx        # Page d'accueil
│   ├── about.tsx        # Page "À propos de moi"
│   ├── projects/index.tsx    # Page de la liste des projets
│   ├── projects/[slug].js # Pages de détails des projets dynamiques
│   ├── contact.tsx      # Page de contact
│   └── api/            # Routes API (pour le formulaire de contact)
├── public/             # Ressources statiques (images, polices, etc.)
├── styles/             # Fichiers CSS ou de style
├── README.md           # Documentation du projet
└── package.json        # Dépendances du projet

## Installation

1.  **Cloner le dépôt :**

-    git clone https://github.com/Jean-marcel-AMTCHE/Portfolio.git
-    cd Portfolio
    
# Installer les dépendances :


npm install  

Développement Local


Démarrer le serveur de développement :


npm run dev 

Ouvrir votre navigateur et naviguer vers http://localhost:3000

Déploiement
Le projet est déployé sur Vercel. Tout commit sur la branche principale déclenchera un nouveau déploiement.
Sources de Données

Contact
Jean-Marcel Amoutché - jeanmarcelamoutche774@gmail.com - https://github.com/Jean-marcel-AMTCHE