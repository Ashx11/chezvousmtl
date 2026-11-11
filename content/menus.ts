/**
 * SET MENUS — edit freely.
 *
 * - price: starting price per person, in CAD (number only, no $ sign)
 * - fr / en: the name, description and courses shown in each language
 * - courses: optional list of dishes/courses (leave as [] to hide)
 *
 * Add, remove or reorder menus by editing this array. 3–4 menus looks best.
 */
export type Menu = {
  id: string;
  price: number;
  fr: { name: string; description: string; courses: string[] };
  en: { name: string; description: string; courses: string[] };
};

export const menus: Menu[] = [
  {
    id: "bistro",
    price: 95,
    fr: {
      name: "Le Bistro",
      description:
        "Les grands classiques de la cuisine française, servis avec soin. Trois services, comme au restaurant — mais à votre table.",
      courses: [
        "Velouté de saison",
        "Suprême de volaille, jus corsé",
        "Tarte fine aux pommes",
      ],
    },
    en: {
      name: "Le Bistro",
      description:
        "Timeless French classics, carefully served. Three courses, just like a restaurant — at your own table.",
      courses: [
        "Seasonal velouté",
        "Chicken supreme, rich jus",
        "Thin apple tart",
      ],
    },
  },
  {
    id: "marche",
    price: 125,
    fr: {
      name: "Le Marché",
      description:
        "Un menu guidé par les producteurs québécois et ce que le marché offre de meilleur cette semaine-là.",
      courses: [
        "Crudo de truite, pomme verte",
        "Risotto aux champignons sauvages",
        "Magret de canard, courge rôtie",
        "Fromages d'ici",
      ],
    },
    en: {
      name: "The Market",
      description:
        "A menu led by Québec producers and the very best the market has to offer that week.",
      courses: [
        "Trout crudo, green apple",
        "Wild mushroom risotto",
        "Duck breast, roasted squash",
        "Local cheeses",
      ],
    },
  },
  {
    id: "mediterranee",
    price: 85,
    fr: {
      name: "Méditerranée",
      description:
        "Un festin généreux à partager au centre de la table. Idéal pour les grandes tablées et les soirées décontractées.",
      courses: [
        "Mezze et pains chauds",
        "Agneau mijoté, herbes fraîches",
        "Légumes grillés, labneh",
        "Orange, pistache et miel",
      ],
    },
    en: {
      name: "Mediterranean",
      description:
        "A generous feast to share in the middle of the table. Perfect for big groups and relaxed evenings.",
      courses: [
        "Mezze and warm breads",
        "Slow-cooked lamb, fresh herbs",
        "Grilled vegetables, labneh",
        "Orange, pistachio and honey",
      ],
    },
  },
  {
    id: "degustation",
    price: 165,
    fr: {
      name: "Dégustation",
      description:
        "Le menu signature du chef : six services raffinés pour les grandes occasions.",
      courses: [
        "Six services",
        "Amuse-bouche et mignardises",
        "Accords mets-vins sur demande",
      ],
    },
    en: {
      name: "Tasting",
      description:
        "The chef's signature menu: six refined courses for truly special occasions.",
      courses: [
        "Six courses",
        "Amuse-bouche and petits fours",
        "Wine pairings on request",
      ],
    },
  },
];
