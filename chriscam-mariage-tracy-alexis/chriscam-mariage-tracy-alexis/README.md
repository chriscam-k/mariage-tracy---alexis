# Galerie — Tracy & Alexis

Site statique (pas de build, pas de Node à installer). 3 fichiers : `index.html`, `css/style.css`, `js/main.js`.

## Avant de publier — obligatoire

Les photos sont chargées depuis ton Google Drive. Pour qu'elles s'affichent chez tes visiteurs :

1. Va sur Drive, clic droit sur le dossier **"Mariage de Tracy & Alexis"**.
2. **Partager** → change l'accès en **"Tous les utilisateurs disposant du lien"** (rôle : lecteur).
3. Sans cette étape, les photos resteront cassées sur le site — le HTML n'y changera rien.

Vérifie aussi que Tracy & Alexis sont d'accord pour un site public (pas juste accessible par lien).

## Éditer le mot aux mariés

Dans `index.html`, cherche `[À REMPLACER]` et remplace tout le paragraphe par ton vrai texte.

## Déployer — la voie rapide (aujourd'hui, sans compte)

1. Va sur **netlify.com/drop**.
2. Glisse le dossier entier (`chriscam-mariage-tracy-alexis`) dans la zone de dépôt.
3. Tu obtiens une URL publique en quelques secondes. Suffisant pour envoyer le lien à Tracy & Alexis ce soir.

## Déployer sur Vercel (première fois — étape par étape)

1. Crée un compte sur **vercel.com** (connexion possible avec GitHub, Google, ou email).
2. Une fois connecté, sur le dashboard : **Add New → Project**.
3. Vercel te proposera d'importer depuis GitHub. Le plus simple pour toi qui débutes :
   - Va sur **github.com**, crée un compte si tu n'en as pas, crée un nouveau repository (ex: `mariage-tracy-alexis`).
   - Sur la page du repo vide, GitHub propose "uploading an existing file" — glisse les 3 fichiers/dossiers de ce projet.
   - Reviens sur Vercel → Add New → Project → sélectionne ce repo → **Deploy**. Aucune configuration à changer (pas de build command, c'est du HTML pur).
4. Vercel te donne une URL du style `mariage-tracy-alexis.vercel.app`. Tu peux ensuite lier un domaine personnalisé (ex: un sous-domaine de chriscam.fr) dans Project → Settings → Domains.

## Modifier une photo

Ouvre `js/main.js` — chaque section a un tableau `ids`. Remplace un id par l'id d'une autre photo Drive (visible dans son URL de partage : `.../d/CET_ID/view`).
