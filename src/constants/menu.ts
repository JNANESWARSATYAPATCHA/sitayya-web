export const SIGNATURE_DISHES = [
  {
    name: "Chicken Pulao",
    nameTe: "కోడి పులావ్",
    imageUrl:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2000&auto=format&fit=crop",
    heritage:
      "Basmati pearls slow-steamed with fragrant stock and whole spices, finished with a buttery sheen worthy of royal tables.",
  },
  {
    name: "Chicken Dum Biryani",
    nameTe: "చికెన్ దమ్ బిర్యానీ",
    imageUrl:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2000&auto=format&fit=crop",
    heritage:
      "Layered with saffron and caramelized onions, sealed in traditional dum for a velvet, perfumed depth of flavor.",
  },
  {
    name: "Chicken Roast Biryani",
    imageUrl:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2000&auto=format&fit=crop",
    heritage:
      "Char-kissed chicken folded into long-grain rice, enriched with ghee and spice oils for a luxe, celebratory finish.",
  },
] as const;

export const FULL_MENU = [
  {
    category: "Biryanis",
    items: [
      {
        name: "Gongura Mutton Biryani",
        nameTe: "గోంగూర మటన్ బిర్యానీ",
        imageUrl:
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2000&auto=format&fit=crop",
        description:
          "Slow-cooked mutton and tangy gongura layered with aromatic basmati, sealed for a deep, regal finish.",
      },
      {
        name: "Ulavacharu Chicken Biryani",
        nameTe: "ఉలవచారు చికెన్ బిర్యానీ",
        imageUrl:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2000&auto=format&fit=crop",
        description:
          "Velvety ulavacharu gravy folded into fragrant rice with tender chicken and a ghee-laced glaze.",
      },
    ],
  },
  {
    category: "Pulaos",
    items: [
      {
        name: "Raju Gari Kodi Pulao",
        nameTe: "రాజు గారి కోడి పులావ్",
        imageUrl:
          "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2000&auto=format&fit=crop",
        description:
          "A Bhimavaram classic with juicy chicken, warm whole spices, and basmati grains kissed with saffron.",
      },
    ],
  },
  {
    category: "Fried Rice",
    items: [
      {
        name: "Special Chicken Fried Rice",
        nameTe: "స్పెషల్ చికెన్ ఫ్రైడ్ రైస్",
        imageUrl:
          "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2000&auto=format&fit=crop",
        description:
          "Wok-tossed basmati with tender chicken, garden aromatics, and a luxe soy-garlic finish.",
      },
      {
        name: "Double Egg Fried Rice",
        nameTe: "డబుల్ ఎగ్ ఫ్రైడ్ రైస్",
        imageUrl:
          "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2000&auto=format&fit=crop",
        description:
          "Fluffy rice crowned with two buttery eggs, scallions, and a gentle spice glow.",
      },
    ],
  },
] as const;

export const FOUNDERS = [
  {
    name: "Placeholder Name 1",
    role: "Master Chef & Co-Founder",
    imageUrl:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
    bio: "Bringing three decades of heritage spice mastery.",
    description: "Bringing three decades of heritage spice mastery.",
  },
  {
    name: "Placeholder Name 2",
    role: "Operations Director",
    imageUrl:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
    bio: "Ensuring every plate served is a royal experience.",
    description: "Ensuring every plate served is a royal experience.",
  },
] as const;
