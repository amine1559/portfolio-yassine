import type { PortfolioContent } from "@/types/portfolio";

/**
 * Contenu du portfolio.
 * Modifiez ce fichier pour changer les textes, les liens et les listes.
 *
 * Avant publication, renseignez :
 * - profile.email et profile.phone
 * - les liens sociaux (laissez "" pour masquer un réseau)
 * - cv.available = true après avoir ajouté public/cv.pdf
 * - les années de formation (laissez "" si elles ne sont pas confirmées)
 * - les expériences : dates, structure, lieu, puis validated: true
 * - les vrais projets, à la place des études de cas conceptuelles
 *
 * Anglais plus tard : dupliquez `fr` dans `dictionaries` sous la clé `en`,
 * avec le même format, puis ajoutez "en" aux usages de Locale.
 * Aucune bibliothèque i18n n'est installée.
 */
const fr: PortfolioContent = {
  locale: "fr",
  htmlLang: "fr",
  siteName: "Yassine Issouani",
  metaTitle: "Yassine Issouani — Chargé de Communication Digitale",
  metaDescription:
    "Portfolio de Yassine Issouani, chargé de communication digitale à Rabat. Création de contenus, réseaux sociaux, community management et publicité Meta Ads.",
  keywords: [
    "Yassine Issouani",
    "communication digitale",
    "création de contenu",
    "community management",
    "réseaux sociaux",
    "Meta Ads",
    "Facebook Ads",
    "Instagram",
    "Rabat",
  ],
  profile: {
    firstName: "Yassine",
    fullName: "Yassine Issouani",
    title: "Chargé de Communication Digitale",
    subtitle: "Digital Communication | Content Creation | Social Media | Meta Ads",
    location: "Rabat, Maroc",
    city: "Rabat",
    country: "Maroc",
    bio: "Titulaire d'une Licence en Communication Digitale de l'École Normale Supérieure de Tétouan, passionné par la communication numérique, la création de contenus et les stratégies de visibilité en ligne. Je m'intéresse particulièrement au développement des marques sur les réseaux sociaux, à la publicité digitale et à la communication des entreprises.",
    aboutLead:
      "Mon approche relie l'analyse et la création : comprendre un public, formuler un message, puis le décliner en contenus, en publications et en publicités. La visibilité d'une marque passe par des réseaux sociaux cohérents, une publicité digitale lisible et une communication adaptée, y compris pour l'e-commerce.",
    email: "",
    phone: "",
    photo: "/images/profile.jpg",
    photoAlt: "Portrait professionnel de Yassine Issouani",
    initials: "YI",
    socials: [
      { platform: "linkedin", label: "LinkedIn", href: "" },
      { platform: "instagram", label: "Instagram", href: "" },
      { platform: "facebook", label: "Facebook", href: "" },
    ],
  },
  cv: {
    href: "/cv.pdf",
    available: false,
    label: "Télécharger le CV",
    unavailableLabel: "CV à venir",
  },
  navLabel: "Navigation principale",
  nav: [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#a-propos" },
    { label: "Compétences", href: "#competences" },
    { label: "Expériences", href: "#experiences" },
    { label: "Projets", href: "#projets" },
    { label: "Formation", href: "#formation" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    greeting: "Bonjour, je suis Yassine.",
    title: "Je transforme les idées en communications qui captent l'attention.",
    subtitle: "Communication Digitale • Création de Contenu • Stratégie Social Media",
    primaryCta: "Découvrir mes projets",
    primaryHref: "#projets",
    secondaryCta: "Me contacter",
    secondaryHref: "#contact",
    photoHint: "Le portrait s'affichera ici dès que le fichier public/images/profile.jpg sera disponible.",
    basedLabel: "Basé à",
  },
  about: {
    index: "01",
    eyebrow: "À propos",
    title: "Une communication claire, créative et utile.",
    description:
      "Licence en communication digitale, goût pour les médias numériques et envie de rendre les marques plus lisibles en ligne.",
    cards: [
      {
        title: "Communication & Stratégie",
        description:
          "Construire des messages et des plans de communication adaptés aux objectifs d'une marque.",
        icon: "compass",
      },
      {
        title: "Création de Contenu",
        description:
          "Imaginer des contenus visuels et éditoriaux pour les réseaux sociaux et les campagnes.",
        icon: "pen",
      },
      {
        title: "Marketing & Social Media",
        description:
          "Relier présence sociale, publicité digitale et visibilité des activités, notamment en e-commerce.",
        icon: "share",
      },
    ],
  },
  skills: {
    index: "02",
    eyebrow: "Compétences",
    title: "Ce que je mets au service d'une marque.",
    description:
      "Six domaines de travail, de la stratégie jusqu'à la publication.",
    items: [
      {
        title: "Communication Digitale",
        description:
          "Concevoir des messages clairs et adaptés aux canaux numériques, au service de la visibilité d'une marque.",
        icon: "megaphone",
      },
      {
        title: "Community Management",
        description:
          "Animer une présence sur les réseaux sociaux, avec une ligne éditoriale cohérente et une attention portée aux communautés.",
        icon: "users",
      },
      {
        title: "Marketing Digital",
        description:
          "Comprendre les leviers du marketing digital pour soutenir la notoriété et la promotion d'une offre.",
        icon: "chart",
      },
      {
        title: "Création de Contenu Numérique",
        description:
          "Produire des visuels, des textes et des vidéos pensés pour les usages des plateformes sociales.",
        icon: "clapperboard",
      },
      {
        title: "Gestion des Réseaux Sociaux",
        description:
          "Organiser et publier des contenus sur Facebook, Instagram et TikTok, selon les codes de chaque réseau.",
        icon: "share",
      },
      {
        title: "Stratégie de Communication",
        description:
          "Structurer une communication autour d'objectifs, de publics, de messages et de canaux.",
        icon: "compass",
      },
    ],
    toolsTitle: "Outils & Plateformes",
    toolsDescription:
      "Plateformes liées à la création, à la publication et au suivi. Retirez de la liste celles qui ne sont pas utilisées.",
    tools: [
      "Meta Ads Manager",
      "Meta Business Suite",
      "Canva",
      "Google Analytics",
      "Facebook",
      "Instagram",
      "TikTok",
      "Google Workspace",
    ],
    toolsEmpty: "Aucun outil n'est renseigné pour le moment.",
  },
  experience: {
    index: "03",
    eyebrow: "Expériences",
    title: "Missions de communication et de publicité.",
    description:
      "Des fiches de missions à personnaliser. Aucune date, aucun employeur et aucun résultat n'ont été ajoutés sans source.",
    noticeTitle: "Exemples à valider",
    notice:
      "Ces expériences décrivent des types de missions. Elles ne sont pas présentées comme des expériences confirmées tant que la structure, les dates, le lieu et les résultats documentés ne sont pas renseignés.",
    exampleBadge: "Exemple à valider",
    missionsLabel: "Missions",
    resultsLabel: "Résultats vérifiés",
    items: [
      {
        title: "Chargé de Publicité Digitale — Facebook Ads",
        status: "Freelance / E-commerce",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        missions: [
          "Création de campagnes publicitaires Facebook et Instagram",
          "Conception de visuels publicitaires",
          "Ciblage des audiences",
          "Gestion des budgets publicitaires",
          "Analyse des indicateurs CPC, CPM, CTR et ROAS",
        ],
        results: [],
        validated: false,
      },
      {
        title: "Créateur de Contenus Publicitaires — E-commerce",
        status: "Projets indépendants",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        missions: [
          "Création de visuels promotionnels",
          "Réalisation de vidéos publicitaires",
          "Rédaction de textes marketing",
          "Conception de contenus adaptés aux réseaux sociaux",
          "Participation à l'optimisation des campagnes",
        ],
        results: [],
        validated: false,
      },
    ],
  },
  projects: {
    index: "04",
    eyebrow: "Projets",
    title: "Études de cas et réalisations.",
    description:
      "Les projets ci-dessous sont conceptuels. Ils montrent une méthode de travail et seront remplacés par des réalisations réelles.",
    all: "Tous",
    filterLabel: "Filtrer les projets",
    conceptualBadge: "Projet conceptuel",
    conceptualNotice:
      "Projet conceptuel. Cette étude de cas décrit une méthode. Elle ne documente pas une mission client réelle et n'affiche aucun résultat inventé.",
    view: "Voir le projet",
    objectiveLabel: "Objectif de communication",
    toolsLabel: "Outils utilisés",
    countSingular: "projet",
    countPlural: "projets",
    empty: "Aucun projet ne correspond à ce filtre.",
    categories: [
      "Communication Digitale",
      "Facebook Ads",
      "Instagram Ads",
      "Community Management",
      "Création Graphique",
      "E-commerce",
    ],
    back: "Retour aux projets",
    sections: {
      context: "Contexte",
      problem: "Problématique",
      objectives: "Objectifs",
      audience: "Public cible",
      strategy: "Stratégie",
      visuals: "Créations visuelles",
      methodology: "Méthodologie",
      results: "Résultats",
    },
    galleryEmpty: "Les visuels de cette étude seront ajoutés lorsqu'un projet réel sera documenté.",
    resultsEmpty:
      "Aucun résultat chiffré n'est affiché. Cette section sera complétée uniquement avec des indicateurs réels et documentés.",
    coverEmpty: "Visuel de couverture à ajouter.",
    items: [
      {
        slug: "campagne-facebook-ads-e-commerce",
        title: "Campagne Facebook Ads — E-commerce",
        category: "Facebook Ads",
        categories: ["Facebook Ads", "E-commerce", "Création Graphique"],
        description:
          "Structure d'une campagne Facebook et Instagram pour présenter un produit et conduire vers une action simple.",
        tools: ["Meta Ads Manager", "Canva", "Meta Business Suite"],
        objective:
          "Rendre un produit compréhensible dans le fil d'actualité et orienter l'attention vers une page ou une prise de contact.",
        cover: "",
        conceptual: true,
        context:
          "Cette étude décrit comment organiser une campagne publicitaire pour une activité de vente en ligne. Elle ne correspond pas à un client nommé ni à un budget réel.",
        problem:
          "Dans un fil d'actualité, l'offre doit être comprise tout de suite : le produit, la raison de s'y intéresser et l'action attendue tiennent dans un message court.",
        objectives: [
          "Formuler une promesse lisible",
          "Préparer des audiences cohérentes avec l'offre",
          "Décliner des visuels adaptés au mobile",
          "Prévoir le suivi des indicateurs sans inventer de performance",
        ],
        audience:
          "Personnes susceptibles d'être intéressées par la catégorie de produit, selon les critères disponibles dans les outils Meta. Le ciblage exact se définit avec un brief réel.",
        strategy:
          "Un message principal, deux ou trois déclinaisons et un seul appel à l'action. Le choix entre notoriété, trafic ou conversion dépend de l'objectif du moment. Les budgets ne sont pas indiqués ici.",
        visuals:
          "Formats carré et vertical, produit identifiable, texte court et identité visuelle stable. Les créations définitives restent à produire pour un projet réel.",
        methodology: [
          "Clarifier le brief et l'objectif de communication",
          "Rédiger l'accroche et le texte de l'annonce",
          "Préparer les déclinaisons Facebook et Instagram",
          "Paramétrer la campagne dans Meta Ads Manager",
          "Lire CPC, CPM, CTR et ROAS seulement à partir de données exportées",
        ],
        results: [],
        gallery: [],
      },
      {
        slug: "contenus-instagram-marque",
        title: "Création de contenus Instagram pour une marque",
        category: "Instagram Ads",
        categories: ["Instagram Ads", "Community Management", "Création Graphique"],
        description:
          "Trame éditoriale pour donner à une marque une présence Instagram cohérente, visuelle et régulière.",
        tools: ["Instagram", "Canva", "Meta Business Suite"],
        objective:
          "Installer une identité reconnaissable et donner envie de découvrir la marque, sans multiplier les messages.",
        cover: "",
        conceptual: true,
        context:
          "Étude conceptuelle d'une série de contenus pour une marque qui souhaite être plus claire sur Instagram. Aucun compte ni calendrier réel n'est présenté.",
        problem:
          "Une publication isolée ne construit pas une présence. Il faut un fil conducteur : ton, couleurs, sujets et rythme de publication.",
        objectives: [
          "Définir une ligne éditoriale simple",
          "Prévoir des formats adaptés au fil, aux stories et aux réels",
          "Garder un ton constant",
          "Laisser la place à de vrais contenus lorsque la marque sera identifiée",
        ],
        audience:
          "Communauté à préciser selon l'activité de la marque : habitudes, langage et centres d'intérêt. Aucun persona fictif n'est détaillé ici.",
        strategy:
          "Trois familles de contenus : présenter, expliquer, inviter à échanger. La publicité Instagram peut relayer les meilleurs formats, sans remplacer la ligne éditoriale.",
        visuals:
          "Grille visuelle stable, titres courts et images lisibles sur mobile. Les visuels de démonstration ne sont pas présentés comme des publications réelles.",
        methodology: [
          "Recueillir les informations de la marque",
          "Choisir les rubriques et le ton",
          "Écrire les textes et préparer les visuels",
          "Organiser les formats dans Meta Business Suite",
          "Ajuster la ligne selon les retours qualitatifs réels",
        ],
        results: [],
        gallery: [],
      },
      {
        slug: "strategie-communication-digitale",
        title: "Stratégie de communication digitale pour une entreprise",
        category: "Communication Digitale",
        categories: ["Communication Digitale", "Community Management"],
        description:
          "Plan de communication pour relier objectifs, publics, messages et canaux d'une entreprise.",
        tools: ["Google Workspace", "Facebook", "Instagram", "Canva"],
        objective:
          "Rendre la communication plus cohérente, du message principal jusqu'aux publications du quotidien.",
        cover: "",
        conceptual: true,
        context:
          "Cette étude montre la structure d'une stratégie pour une entreprise qui veut clarifier sa présence en ligne. Elle ne remplace pas un diagnostic mené auprès d'une structure réelle.",
        problem:
          "Sans cap commun, les publications se succèdent sans que l'on comprenne ce que l'entreprise veut faire savoir.",
        objectives: [
          "Formuler un message principal",
          "Choisir les canaux utiles, pas tous les canaux",
          "Décrire les publics à adresser",
          "Préparer un cadre éditorial réutilisable",
        ],
        audience:
          "Publics à confirmer avec l'entreprise : clients, partenaires ou futurs recrutés. Ils ne sont pas inventés dans cette version de démonstration.",
        strategy:
          "Un socle de messages, une présence sociale régulière et, si besoin, des campagnes pour amplifier un temps fort. Chaque canal a un rôle distinct.",
        visuals:
          "Déclinaisons simples du message : visuel d'annonce, publication explicative, story courte. Les fichiers finaux dépendent de l'identité réelle de l'entreprise.",
        methodology: [
          "Poser les objectifs de communication",
          "Hiérarchiser les publics et les messages",
          "Choisir les canaux et les formats",
          "Rédiger un calendrier type",
          "Prévoir des points de lecture, sans indicateurs fictifs",
        ],
        results: [],
        gallery: [],
      },
      {
        slug: "publicites-produit-e-commerce",
        title: "Conception de publicités pour un produit e-commerce",
        category: "E-commerce",
        categories: ["E-commerce", "Facebook Ads", "Création Graphique"],
        description:
          "Méthode pour concevoir des annonces produit : promesse, preuve visuelle et appel à l'action.",
        tools: ["Canva", "Meta Ads Manager", "Facebook", "Instagram"],
        objective:
          "Présenter un produit de façon nette, avec des annonces prêtes à être adaptées à une offre réelle.",
        cover: "",
        conceptual: true,
        context:
          "Étude conceptuelle autour d'un produit vendu en ligne. Aucun catalogue, aucun prix et aucune marque ne sont présentés comme réels.",
        problem:
          "Une publicité produit échoue quand l'objet n'est pas identifiable, ou quand le texte promet plus que ce que l'offre peut tenir.",
        objectives: [
          "Isoler le bénéfice principal du produit",
          "Concevoir des formats publicitaires lisibles",
          "Écrire un appel à l'action unique",
          "Préparer les variantes sans gonfler les promesses",
        ],
        audience:
          "Personnes déjà proches de la catégorie de produit. Le détail du ciblage se règle dans Meta Ads Manager au moment d'une campagne réelle.",
        strategy:
          "Une annonce principale et des variantes de visuel ou d'accroche. On ne change qu'un élément à la fois pour comprendre, plus tard, ce qui fonctionne vraiment.",
        visuals:
          "Produit centré, fond sobre, texte minimal et déclinaisons carré, vertical et story. Les fichiers seront ajoutés avec le produit concerné.",
        methodology: [
          "Décrire le produit et ses contraintes",
          "Choisir une promesse vérifiable",
          "Concevoir les visuels et les textes",
          "Préparer les emplacements Facebook et Instagram",
          "N'interpréter les résultats qu'avec les statistiques de la campagne",
        ],
        results: [],
        gallery: [],
      },
    ],
  },
  education: {
    index: "05",
    eyebrow: "Formation",
    title: "Parcours universitaire.",
    description:
      "Les années d'obtention restent vides tant qu'elles ne sont pas confirmées. L'établissement du baccalauréat est à compléter.",
    items: [
      {
        degree: "Licence en Communication Digitale",
        school: "École Normale Supérieure (ENS) de Tétouan",
        university: "Université Abdelmalek Essaâdi",
        city: "Tétouan, Maroc",
        year: "",
        description:
          "Communication numérique, marketing digital, médias sociaux, création de contenus et stratégies de communication.",
      },
      {
        degree: "Baccalauréat en Sciences Physiques et Chimiques",
        school: "À compléter",
        university: "",
        city: "Maroc",
        year: "",
        description: "Formation scientifique en physique, chimie et mathématiques.",
      },
    ],
  },
  certifications: {
    index: "06",
    eyebrow: "Certifications & colloques",
    title: "Participation scientifique.",
    description:
      "Cette attestation concerne une participation à un colloque. Elle n'est pas présentée comme une certification technique professionnelle.",
    view: "Voir l'attestation",
    missing: "Le visuel de l'attestation sera ajouté prochainement.",
    participationLabel: "Attestation de participation",
    organizerLabel: "Organisateur",
    items: [
      {
        title: "Attestation de participation — CISC'23",
        event: "Colloque International des Sciences de la Communication",
        organizer: "",
        year: "2023",
        description:
          "Participation à un événement scientifique international portant sur les sciences de la communication, les médias et leurs évolutions.",
        kind: "participation",
        image: "",
      },
    ],
  },
  services: {
    index: "07",
    eyebrow: "Services",
    title: "Ce que je peux prendre en charge.",
    description:
      "Des accompagnements de communication digitale. Aucun tarif n'est affiché : chaque mission se discute selon le besoin réel.",
    navLabel: "Services",
    items: [
      {
        title: "Stratégie de communication digitale",
        description:
          "Définir les objectifs, les publics, les messages et les canaux adaptés à une marque ou à une entreprise.",
        icon: "compass",
      },
      {
        title: "Gestion des réseaux sociaux",
        description:
          "Organiser une présence régulière et cohérente sur les plateformes sociales.",
        icon: "share",
      },
      {
        title: "Création de contenu",
        description:
          "Concevoir des textes, des visuels et des vidéos pensés pour les usages numériques.",
        icon: "pen",
      },
      {
        title: "Campagnes publicitaires Meta Ads",
        description:
          "Préparer des campagnes Facebook et Instagram : audiences, visuels, budgets et lecture des indicateurs.",
        icon: "megaphone",
      },
      {
        title: "Conception de visuels publicitaires",
        description:
          "Créer des visuels lisibles, adaptés aux formats des réseaux et à l'identité d'une marque.",
        icon: "palette",
      },
      {
        title: "Communication e-commerce",
        description:
          "Mettre en valeur une offre en ligne et accompagner sa visibilité sur les canaux sociaux et publicitaires.",
        icon: "bag",
      },
    ],
  },
  contact: {
    index: "08",
    eyebrow: "Contact",
    title: "Parlons de votre communication.",
    description:
      "Écrivez pour une mission, une collaboration ou une question. Le message s'ouvre dans votre application de messagerie.",
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
    locationLabel: "Localisation",
    whatsapp: "WhatsApp",
    nameLabel: "Nom",
    emailFieldLabel: "E-mail",
    subjectLabel: "Sujet",
    messageLabel: "Message",
    submit: "Ouvrir le message",
    notice:
      "Le site n'envoie pas le message lui-même. Le bouton prépare un e-mail dans l'application de messagerie du visiteur.",
    missingEmail: "L'adresse de contact n'est pas encore renseignée.",
    opened:
      "Votre application de messagerie va s'ouvrir avec ce message. L'envoi se fait depuis cette application, pas depuis le site.",
    errors: {
      name: "Indiquez un nom d'au moins 2 caractères.",
      email: "Indiquez votre e-mail.",
      emailInvalid: "Le format de l'e-mail n'est pas valide.",
      subject: "Indiquez un sujet d'au moins 3 caractères.",
      message: "Écrivez un message d'au moins 10 caractères.",
      messageLong: "Le message dépasse 800 caractères, la limite utile pour un e-mail prérempli.",
    },
  },
  footer: {
    text: "Portfolio personnel de communication digitale.",
    rights: "Tous droits réservés.",
    year: "2026",
  },
  notFound: {
    code: "404",
    title: "Cette page est introuvable.",
    description: "Le lien est peut-être incomplet, ou la page n'existe pas.",
    cta: "Retour à l'accueil",
  },
  a11y: {
    skip: "Aller au contenu",
    backToTop: "Retour en haut de la page",
    themeToggle: "Changer le thème",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    newTab: "nouvel onglet",
  },
};

export const dictionaries = { fr } satisfies Record<"fr", PortfolioContent>;

export type Locale = keyof typeof dictionaries;

export function getContent(locale: Locale = "fr") {
  return dictionaries[locale];
}

export const content = getContent();
