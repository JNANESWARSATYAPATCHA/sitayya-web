export const SIGNATURE_DISHES = [
  {
    name: "Chicken Pulao",
    nameTe: "కోడి పులావ్",
    imageUrl:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2000&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?q=80&w=2000&auto=format&fit=crop",
    heritage:
      "Char-kissed chicken folded into long-grain rice, enriched with ghee and spice oils for a luxe, celebratory finish.",
  },
] as const;

export const FULL_MENU = [
  {
    category: "Starters",
    items: [
      {
        name: "Apollo Fish",
        nameTe: "అపోలో ఫిష్",
        imageUrl:
          "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2000&auto=format&fit=crop",
        description:
          "Boneless fish chunks marinated in fiery spices, deep-fried and tossed in a tangy yogurt sauce.",
        price: "₹320",
      },
      {
        name: "Guntur Chilli Chicken",
        nameTe: "గుంటూరు చిల్లీ చికెన్",
        imageUrl:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2000&auto=format&fit=crop",
        description:
          "Crispy fried chicken tossed generously with fierce Guntur red chillies and curry leaves.",
        price: "₹290",
      },
    ],
  },
  {
    category: "Curries",
    items: [
      {
        name: "Royyala Iguru",
        nameTe: "రొయ్యల ఇగురు",
        imageUrl:
          "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=2000&auto=format&fit=crop",
        description:
          "A thick, spicy Andhra-style prawns roast cooked slowly with caramelized onions, tomatoes, and home-ground masala.",
        price: "₹380",
      },
      {
        name: "Paneer Butter Masala",
        nameTe: "పనీర్ బటర్ మసాలా",
        imageUrl:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?q=80&w=2000&auto=format&fit=crop",
        description:
          "Soft cottage cheese cubes simmered in a rich, buttery tomato gravy with a hint of fenugreek.",
        price: "₹260",
      },
      {
        name: "Kaju Tomato Curry",
        nameTe: "కాజు టొమాటో కర్రీ",
        imageUrl:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2000&auto=format&fit=crop",
        description:
          "Roasted cashew nuts cooked in a sweet and tangy tomato-onion base.",
        price: "₹280",
      },
    ],
  },
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
        price: "₹450",
      },
      {
        name: "Ulavacharu Chicken Biryani",
        nameTe: "ఉలవచారు చికెన్ బిర్యానీ",
        imageUrl:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2000&auto=format&fit=crop",
        description:
          "Velvety ulavacharu gravy folded into fragrant rice with tender chicken and a ghee-laced glaze.",
        price: "₹390",
      },
      {
        name: "Chicken Fry Piece Biryani",
        nameTe: "చికెన్ ఫ్రై పీస్ బిర్యానీ",
        imageUrl:
          "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=2000&auto=format&fit=crop",
        description:
          "Fluffy dum biryani rice served generously with spicy, crispy pan-fried chicken pieces.",
        price: "₹380",
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
        price: "₹350",
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
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=2000&auto=format&fit=crop",
        description:
          "Wok-tossed basmati with tender chicken, garden aromatics, and a luxe soy-garlic finish.",
        price: "₹250",
      },
      {
        name: "Double Egg Fried Rice",
        nameTe: "డబుల్ ఎగ్ ఫ్రైడ్ రైస్",
        imageUrl:
          "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=2000&auto=format&fit=crop",
        description:
          "Fluffy rice crowned with two buttery eggs, scallions, and a gentle spice glow.",
        price: "₹220",
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
