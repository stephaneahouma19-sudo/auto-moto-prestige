# AUTO MOTO PRESTIGE

Site statique multipages réalisé en **HTML5, CSS3 et JavaScript natif** (aucun framework, aucun build requis).

## Structure

```text
index.html                         Accueil
catalogue.html                     Catalogue + filtres
a-propos.html                      Notre maison
contact.html                       Contact
404.html                           Page d’erreur
vehicules/*.html                   Quatre fiches de démonstration
favicon.svg                        Monogramme A.P.
robots.txt / sitemap.xml           Référencement
assets/css/styles.css              Design premium (bleu nuit / or / blanc cassé)
assets/js/config.js                Coordonnées commerciales + message WhatsApp
assets/js/whatsapp.js              Génération des liens wa.me
assets/js/catalogue.js             Recherche et filtres
assets/js/ui.js                    Menu responsive, année, accessibilité
assets/js/contact.js               Coordonnées + objet prérempli
assets/images/...                  Dossiers prêts pour les images locales
```

## Configuration commerciale

Modifier **uniquement** `assets/js/config.js` :

```js
window.AMP_CONFIG = {
  whatsappNumber: '',   // format international sans "+" ni espaces, ex. 33123456789
  phone: '',
  email: '',
  address: '',
  whatsappGeneralMessage: "Bonjour, j'aimerais savoir si vous avez des camions à votre disposition."
};
```

- Tant que `whatsappNumber` est vide, les boutons ouvrent `https://wa.me/?text=...` : le visiteur choisit le destinataire dans WhatsApp.
- Dès que le numéro est renseigné, les boutons ouvrent `https://wa.me/<numero>?text=...` : le visiteur discute directement avec le commerce.
- Chaque fiche véhicule possède son propre message, incluant le nom du véhicule.
- Aucun numéro n’a été inventé. Les champs vides affichent « À renseigner ».

## Remplacement des images

Les visuels proviennent provisoirement d’Unsplash afin de conserver le rendu actuel.
Pour les remplacer :

1. Déposer les fichiers dans `assets/images/vehicules/<id-du-vehicule>/`.
2. Remplacer les URL `images.unsplash.com` dans les fichiers HTML concernés.
3. Le logo peut être placé dans `assets/images/logo/`.

Les quatre annonces restent **fictives** et signalées « Visuel démo » / « Annonce fictive ».

## Déploiement Vercel

Aucune configuration particulière n’est nécessaire : Vercel détecte automatiquement les fichiers statiques à la racine.
`404.html` est pris en charge automatiquement pour les pages introuvables.

Avant mise en ligne définitive :
- renseigner `assets/js/config.js` ;
- remplacer le domaine dans `sitemap.xml` et décommenter la ligne `Sitemap` dans `robots.txt` ;
- ajouter les mentions légales si nécessaire.

Aucun déploiement n’a été effectué automatiquement.
