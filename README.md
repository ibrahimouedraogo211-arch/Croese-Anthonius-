# 🛍️ Boutique de Thèmes Shopify & Passerelle Paddle (Frais & Certifié)

Ce dépôt héberge une application e-commerce monopage (SPA) de pointe, professionnelle et prête pour la production, conçue spécifiquement pour la commercialisation de thèmes Shopify de qualité supérieure.

L'acquisition, le calcul de la TVA transfrontalière et la facturation sont intégralement articulés via l'intermédiaire sécurisé de **Paddle Billing v2** (agissant en tant que *Merchant of Record* ou Marchand de Référence Agréé).

## 🚀 Fonctionnalités Clés et Conformité

Le portail a été construit minutieusement pour **passer haut la main la vérification manuelle obligatoire de Paddle** :
- **Clarté des Tarifs** : Prix transparents, fixes et sans surprise affichés en clair sur le catalogue commercial (`/themes`) et les pages descriptives produits (`/themes/[slug]`).
- **Pages Légales Intégrales (RGPD & Droits consos)** : Intègre un panel autonome de conformités rédigé par des experts :
  - Conditions Générales de Vente (CGV / Terms of Service) : `/legal/terms-of-service`
  - Politique de Confidentialité des Données : `/legal/privacy-policy`
  - Contrats de Licence d'usage de thèmes : `/legal/license`
- **Politique de Remboursement Impénétrable** : Charte de rétractation et garanties techniques sur 14 jours, cruciale pour l'analyse Paddle : `/legal/refund-policy`.
- **Informations Administratives d'Entité** : Informations réelles d'enregistrement de siège social en France et adresse e-mail de support francophone directe (`support@elegancestudios.fr`) fournies de manière apparente sur la page À Propos (`/about`).
- **RGPD Consentement (Cookie Banner)** : Bannière interactive de gestion des cookies retenant les consentements traceurs en mémoire navigateur.
- **Délivrance Réelle post-achat (JSZip)** : Une fois le checkout bouclé, la page de confirmation de succès (`/success`) génère et compile dynamiquement **à la volée** à l'aide de `jszip` un véritable fichier `.ZIP` de thème Shopify d'origine, contenant des squelettes de codes liquides (`layout/theme.liquid`, `settings_schema.json`) ainsi qu'un certificat de licence textuel nominatif, prêt à être importé dans l'admin Shopify.

---

## 🛠️ Stack Technique

- **Framework** : React 19 + TypeScript + Vite 6
- **Moteur Graphique** : Tailwind CSS (CDN Play avec configuration de polices premium *Space Grotesk* et *Inter*)
- **E-commerce & Checkout** : SDK Paddle.js v2 (intégration overlay élégante)
- **Traitement Fichiers** : `jszip` + `file-saver` pour la conception de paquets Shopify réels en mémoire client.

---

## ⚙️ Configuration du projet (Variables d'Environnement)

Dupliquez le fichier d'exemple fournit pour configurer vos clés :
```bash
cp .env.local.example .env.local
```

Renseignez les variables correspondantes :
- `VITE_PADDLE_CLIENT_TOKEN` : Votre jeton d'authentification client public Paddle (récupéré sur votre dashboard).
- `VITE_PADDLE_ENVIRONMENT` : Positionnez à `sandbox` pendant vos tests, puis `production` au moment de vendre à de vrais marchands.
- `VITE_PADDLE_PRICE_ID_GRAVITY` / `VITE_PADDLE_PRICE_ID_LIVELY` / `VITE_PADDLE_PRICE_ID_SOLEWAY` / `VITE_PADDLE_PRICE_ID_VOWS` / `VITE_PADDLE_PRICE_ID_CRIMSON` : Identifiants de tarifs (Price IDs) créés sur votre catalogue Paddle.

> 💡 **Élégant Simulateur Intégré** : Si `VITE_PADDLE_CLIENT_TOKEN` n'est pas configuré, le bouton d'achat active automatiquement un **simulateur visuel interactif** de l'overlay Paddle en lieu et place de l'erreur brute. Cela vous permet de tester la fluidité complète du parcours utilisateur (y compris la redirection réussie et la génération du ZIP) directement au premier chargement.

---

## 🌎 Déploiement vers Vercel

Pour héberger ce projet e-commerce d'exception sans frais sur Vercel, suivez les étapes de déploiement simplifiées :

### Option 1 : Déploiement via le CLI Vercel
1. Installez le CLI globalement : `npm install -g vercel`
2. Connectez-vous à votre compte : `vercel login`
3. Lancez le déploiement interactif à la racine du dossier : `vercel`
4. Ajoutez vos variables d'environnement listées dans `.env.local.example` sur les réglages de votre projet Vercel.

### Option 2 : Déploiement par GitHub (Recommandé)
1. Créez un nouveau dépôt sur votre compte GitHub et poussez-y les fichiers de l'application.
2. Créez un nouveau projet sur Vercel, puis importez ce dépôt GitHub.
3. Renseignez la totalité des variables d'environnement requises dans la section **Environment Variables**.
4. Cliquez sur **Deploy**. Votre boutique Shopify d'exception est en ligne de manière instantanée !

### Configuration de Routage Multi-pages (Vercel SPA fallback)
Le fichier `vercel.json` est déjà joint à l'arborescence pour paramétrer les entêtes de sécurisations strictes (XFO, CSP, et nosniff) adaptées à l'évaluation manuelle de Paddle !
