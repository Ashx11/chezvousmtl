/**
 * ALL SITE TEXT — French (default) and English.
 *
 * Edit any string below. Keep the same structure in both languages:
 * if you add an item to a list in `fr`, add the matching item in `en`.
 *
 * Menus live in content/menus.ts. Contact details live in content/site.ts.
 * In the menu price lines, {price} is replaced with the number from menus.ts.
 */

const fr = {
  meta: {
    title: "Chez Vous MTL — Chef à domicile à Montréal",
    description:
      "Chef privé à Montréal : soupers, réceptions et événements cuisinés et servis chez vous. Épicerie, service et nettoyage inclus. Menus sur mesure.",
    keywords: [
      "chef à domicile Montréal",
      "chef privé Montréal",
      "traiteur à domicile Montréal",
      "souper privé",
      "private chef Montreal",
    ],
  },
  nav: {
    how: "Fonctionnement",
    menus: "Menus",
    occasions: "Occasions",
    services: "Formules",
    chefs: "Le chef",
    gallery: "Galerie",
    faq: "FAQ",
    book: "Réserver",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    switchTo: "English",
  },
  hero: {
    eyebrow: "Chef privé · Montréal",
    title: "Chez Vous",
    tagline: "Votre table. Notre cuisine. Une soirée inoubliable.",
    imageAlt: "Souper préparé par un chef privé à domicile, Montréal",
    cta: "Réserver un souper",
    secondary: "Voir les menus",
  },
  how: {
    kicker: "Fonctionnement",
    title: "Une soirée de restaurant, sans quitter la maison.",
    steps: [
      {
        title: "Choisissez votre menu",
        text: "Un de nos menus signatures ou un menu créé sur mesure pour vous, vos goûts et vos invités.",
      },
      {
        title: "Nous faisons l'épicerie, cuisinons et servons",
        text: "Le chef arrive avec des produits frais, cuisine dans votre cuisine et sert chaque plat à table.",
      },
      {
        title: "Nous nettoyons",
        text: "La cuisine est rendue impeccable. Vous n'avez qu'à profiter de la soirée.",
      },
    ],
  },
  menus: {
    kicker: "Menus",
    title: "Menus signatures",
    intro:
      "Des points de départ, pensés pour la saison. Chaque menu s'ajuste à vos invités.",
    from: "à partir de {price} $ / personne",
    customNote: "Menus sur mesure disponibles — toutes cuisines, tous régimes.",
    cta: "Demander un menu",
  },
  occasions: {
    kicker: "Occasions",
    title: "Pour chaque moment qui compte",
    items: [
      { title: "Anniversaires", text: "Une fête à la maison, sans rien à préparer." },
      { title: "Anniversaires de couple", text: "Un souper intime, juste pour deux." },
      { title: "Soupers entre amis", text: "Recevez comme un pro, profitez comme un invité." },
      { title: "Fêtes et temps des Fêtes", text: "Noël, réveillon, Action de grâce, Pâques." },
      { title: "Corporatif", text: "Soupers d'équipe, clients et réceptions privées." },
    ],
  },
  services: {
    kicker: "Formules",
    title: "La formule qui vous ressemble",
    items: [
      {
        title: "Souper à l'assiette",
        text: "Plusieurs services dressés à l'assiette, servis à table comme au restaurant.",
        detail: "2 à 14 personnes",
      },
      {
        title: "Festin à partager",
        text: "De grands plats généreux au centre de la table, à la façon familiale.",
        detail: "6 à 30 personnes",
      },
      {
        title: "Cocktail dînatoire",
        text: "Bouchées et petites assiettes servies tout au long de la soirée.",
        detail: "10 à 60 personnes",
      },
      {
        title: "Brunch",
        text: "Un brunch fait maison, sucré et salé, pour bien commencer la journée.",
        detail: "4 à 25 personnes",
      },
    ],
  },
  chefs: {
    kicker: "Le chef",
    title: "Derrière les fourneaux",
    name: "[Nom du chef]",
    role: "Chef fondateur",
    bio: [
      "Formé en cuisine française et passé par plusieurs des belles tables de Montréal, notre chef cuisine depuis 9 ans avec une conviction simple : les meilleurs repas se partagent à la maison.",
      "Sa cuisine est précise mais généreuse, guidée par les saisons et les producteurs du Québec. Chaque menu est pensé pour vos invités — et pour que vous puissiez enfin vous asseoir à votre propre table.",
    ],
    stats: [
      { value: "9", label: "ans d'expérience" },
      { value: "100 %", label: "sur mesure" },
      { value: "MTL", label: "produits locaux" },
    ],
    photoPlaceholder: "Photo du chef",
  },
  gallery: {
    kicker: "Galerie",
    title: "À table",
    placeholder: "Photo à venir",
  },
  faq: {
    kicker: "Questions",
    title: "Questions fréquentes",
    items: [
      {
        q: "Qu'est-ce qui est inclus?",
        a: "La planification du menu, l'épicerie, la préparation et la cuisson sur place, le service à table et le nettoyage complet de la cuisine. Vous fournissez la cuisine, la vaisselle et la table — nous nous occupons du reste.",
      },
      {
        q: "Qui s'occupe de l'épicerie?",
        a: "Nous. Le chef achète des ingrédients frais chez ses fournisseurs et producteurs locaux le jour même ou la veille. Le coût des aliments est inclus dans le prix par personne.",
      },
      {
        q: "Et le nettoyage?",
        a: "Nous laissons votre cuisine aussi propre qu'à notre arrivée : vaisselle de cuisson, comptoirs et poubelles. Vous n'avez rien à faire.",
      },
      {
        q: "Comment confirmer une réservation?",
        a: "Un dépôt de 50 % confirme votre date et lance l'achat des produits. Le solde est payable le jour de l'événement.",
      },
      {
        q: "Quels secteurs desservez-vous?",
        a: "Montréal et ses environs : Laval, la Rive-Sud, la Rive-Nord et l'Ouest-de-l'Île. Pour les chalets et les Laurentides, écrivez-nous.",
      },
      {
        q: "Combien de temps à l'avance faut-il réserver?",
        a: "Idéalement 2 à 3 semaines à l'avance, et plus tôt pour le temps des Fêtes et les grands groupes. Pour une date rapprochée, écrivez-nous quand même — nous ferons tout pour vous accommoder.",
      },
    ],
  },
  booking: {
    kicker: "Réservation",
    title: "Réservez votre souper",
    intro:
      "Parlez-nous de votre événement. Nous vous répondons avec une proposition de menu et un prix.",
    required: "Champs obligatoires",
    fields: {
      name: "Nom",
      email: "Courriel",
      phone: "Téléphone",
      date: "Date de l'événement",
      guests: "Nombre d'invités",
      occasion: "Occasion",
      service: "Formule",
      budget: "Budget par personne",
      dietary: "Restrictions alimentaires",
      dietaryPlaceholder: "Allergies, végétarien, sans gluten…",
      message: "Message",
      messagePlaceholder: "Parlez-nous de votre soirée, de vos invités, de vos envies…",
      select: "Choisir…",
    },
    occasionOptions: [
      "Anniversaire",
      "Anniversaire de couple",
      "Souper entre amis",
      "Fêtes",
      "Corporatif",
      "Autre",
    ],
    serviceOptions: [
      "Souper à l'assiette",
      "Festin à partager",
      "Cocktail dînatoire",
      "Brunch",
      "Je ne sais pas encore",
    ],
    budgetOptions: [
      "Moins de 75 $",
      "75 $ – 100 $",
      "100 $ – 150 $",
      "150 $ et plus",
      "Je ne sais pas encore",
    ],
    submit: "Envoyer la demande",
    sending: "Envoi…",
    successTitle: "Merci!",
    successText: "Nous vous répondrons d'ici 24 heures.",
    error:
      "Oups, l'envoi n'a pas fonctionné. Réessayez ou écrivez-nous directement à",
    notConfigured:
      "Le formulaire n'est pas encore configuré. Écrivez-nous directement à",
  },
  footer: {
    tagline: "Chef privé à domicile · Montréal",
    contact: "Contact",
    follow: "Suivez-nous",
    whatsapp: "WhatsApp",
    rights: "Tous droits réservés.",
  },
};

export type Dictionary = typeof fr;

const en: Dictionary = {
  meta: {
    title: "Chez Vous MTL — Private Chef in Montreal",
    description:
      "Private chef in Montreal: dinners, parties and events cooked and served in your home. Groceries, service and cleanup included. Custom menus.",
    keywords: [
      "private chef Montreal",
      "personal chef Montreal",
      "in-home chef Montreal",
      "private dinner Montreal",
      "chef à domicile Montréal",
    ],
  },
  nav: {
    how: "How it works",
    menus: "Menus",
    occasions: "Occasions",
    services: "Formats",
    chefs: "The chef",
    gallery: "Gallery",
    faq: "FAQ",
    book: "Book",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchTo: "Français",
  },
  hero: {
    eyebrow: "Private chef · Montréal",
    title: "Chez Vous",
    tagline: "Your table. Our kitchen. An unforgettable evening.",
    imageAlt: "Dinner prepared by a private chef at home, Montréal",
    cta: "Book a dinner",
    secondary: "See the menus",
  },
  how: {
    kicker: "How it works",
    title: "A restaurant evening, without leaving home.",
    steps: [
      {
        title: "Choose your menu",
        text: "Pick one of our signature menus or let us design one around you, your tastes and your guests.",
      },
      {
        title: "We shop, cook & serve",
        text: "The chef arrives with fresh ingredients, cooks in your kitchen and serves every course at the table.",
      },
      {
        title: "We clean up",
        text: "Your kitchen is left spotless. All you have to do is enjoy the evening.",
      },
    ],
  },
  menus: {
    kicker: "Menus",
    title: "Signature menus",
    intro:
      "Starting points, shaped by the season. Every menu adapts to your guests.",
    from: "from ${price} / person",
    customNote: "Custom menus available — any cuisine, any diet.",
    cta: "Request a menu",
  },
  occasions: {
    kicker: "Occasions",
    title: "For every moment that matters",
    items: [
      { title: "Birthdays", text: "A celebration at home, with nothing to prepare." },
      { title: "Anniversaries", text: "An intimate dinner, just for two." },
      { title: "Dinner parties", text: "Host like a pro, relax like a guest." },
      { title: "Holidays", text: "Christmas, New Year's Eve, Thanksgiving, Easter." },
      { title: "Corporate", text: "Team dinners, client evenings and private receptions." },
    ],
  },
  services: {
    kicker: "Formats",
    title: "The format that suits you",
    items: [
      {
        title: "Plated dinner",
        text: "Multiple courses, plated and served at the table, restaurant-style.",
        detail: "2 to 14 guests",
      },
      {
        title: "Family-style feast",
        text: "Generous sharing platters in the middle of the table.",
        detail: "6 to 30 guests",
      },
      {
        title: "Cocktail party",
        text: "Canapés and small plates passed throughout the evening.",
        detail: "10 to 60 guests",
      },
      {
        title: "Brunch",
        text: "A homemade sweet and savoury brunch to start the day right.",
        detail: "4 to 25 guests",
      },
    ],
  },
  chefs: {
    kicker: "The chef",
    title: "Behind the stove",
    name: "[Chef's name]",
    role: "Founding chef",
    bio: [
      "Trained in French cuisine and seasoned in some of Montreal's finest kitchens, our chef has been cooking for 9 years with one simple belief: the best meals are shared at home.",
      "The cooking is precise yet generous, guided by the seasons and Québec producers. Every menu is built around your guests — so that you can finally sit down at your own table.",
    ],
    stats: [
      { value: "9", label: "years of experience" },
      { value: "100%", label: "tailor-made" },
      { value: "MTL", label: "local produce" },
    ],
    photoPlaceholder: "Chef portrait",
  },
  gallery: {
    kicker: "Gallery",
    title: "At the table",
    placeholder: "Photo coming soon",
  },
  faq: {
    kicker: "Questions",
    title: "Frequently asked questions",
    items: [
      {
        q: "What's included?",
        a: "Menu planning, grocery shopping, on-site preparation and cooking, table service and a full kitchen cleanup. You provide the kitchen, dishes and table — we take care of everything else.",
      },
      {
        q: "Who buys the groceries?",
        a: "We do. The chef shops for fresh ingredients from trusted suppliers and local producers on the day or the day before. Groceries are included in the per-person price.",
      },
      {
        q: "What about cleanup?",
        a: "We leave your kitchen as clean as we found it: cookware, counters and garbage. There's nothing left for you to do.",
      },
      {
        q: "How do I confirm a booking?",
        a: "A 50% deposit secures your date and covers the groceries. The balance is due on the day of the event.",
      },
      {
        q: "Which areas do you serve?",
        a: "Montreal and surroundings: Laval, the South Shore, the North Shore and the West Island. For chalets and the Laurentians, just ask.",
      },
      {
        q: "How far in advance should I book?",
        a: "Ideally 2 to 3 weeks ahead, and earlier for the holiday season and large groups. Short notice? Write to us anyway — we'll do our best to make it happen.",
      },
    ],
  },
  booking: {
    kicker: "Booking",
    title: "Book your dinner",
    intro:
      "Tell us about your event. We'll reply with a proposed menu and a quote.",
    required: "Required fields",
    fields: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      date: "Event date",
      guests: "Number of guests",
      occasion: "Occasion",
      service: "Service type",
      budget: "Budget per person",
      dietary: "Dietary needs",
      dietaryPlaceholder: "Allergies, vegetarian, gluten-free…",
      message: "Message",
      messagePlaceholder: "Tell us about your evening, your guests, what you're craving…",
      select: "Select…",
    },
    occasionOptions: [
      "Birthday",
      "Anniversary",
      "Dinner party",
      "Holiday",
      "Corporate",
      "Other",
    ],
    serviceOptions: [
      "Plated dinner",
      "Family-style feast",
      "Cocktail party",
      "Brunch",
      "Not sure yet",
    ],
    budgetOptions: [
      "Under $75",
      "$75 – $100",
      "$100 – $150",
      "$150+",
      "Not sure yet",
    ],
    submit: "Send inquiry",
    sending: "Sending…",
    successTitle: "Thank you!",
    successText: "We'll reply within 24 hours.",
    error: "Sorry, something went wrong. Please try again or email us at",
    notConfigured: "The form isn't set up yet. Please email us at",
  },
  footer: {
    tagline: "Private in-home chef · Montréal",
    contact: "Contact",
    follow: "Follow",
    whatsapp: "WhatsApp",
    rights: "All rights reserved.",
  },
};

export const translations = { fr, en };
