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
    category: "Soups",
    items: [
      { name: "Veg Sweet Corn Soup", price: "₹90", imageUrl: "/images/placeholder-soup.jpg" },
      { name: "Veg Mushroom Soup", price: "₹100", imageUrl: "/images/placeholder-soup.jpg" },
      { name: "Veg Hot & Sour Soup", price: "₹90", imageUrl: "/images/placeholder-soup.jpg" },
      { name: "Chicken Sweet Corn Soup", price: "₹110", imageUrl: "/images/placeholder-soup.jpg" },
      { name: "Chicken Manchow Soup", price: "₹120", imageUrl: "/images/placeholder-soup.jpg" },
      { name: "Chicken Hot & Sour Soup", price: "₹120", imageUrl: "/images/placeholder-soup.jpg" },
    ],
  },
  {
    category: "Veg Starters",
    items: [
      { name: "Chilli Paneer & Manchurian", price: "₹250", imageUrl: "/images/placeholder-veg-starter.jpg" },
      { name: "Dragon Paneer", price: "₹280", imageUrl: "/images/placeholder-veg-starter.jpg" },
      { name: "Schezwan Paneer", price: "₹260", imageUrl: "/images/placeholder-veg-starter.jpg" },
      { name: "Paneer Majestic", price: "₹260", imageUrl: "/images/placeholder-veg-starter.jpg" },
      { name: "Chilli Mushroom", price: "₹200", imageUrl: "/images/placeholder-veg-starter.jpg" },
      { name: "Mushroom Manchurian", price: "₹200", imageUrl: "/images/placeholder-veg-starter.jpg" },
      { name: "Dragon Mushroom", price: "₹220", imageUrl: "/images/placeholder-veg-starter.jpg" },
      { name: "Veg Manchurian", price: "₹170", imageUrl: "/images/placeholder-veg-starter.jpg" },
      { name: "Crispy Baby Corn", price: "₹200", imageUrl: "/images/placeholder-veg-starter.jpg" },
      { name: "Chilli Baby Corn", price: "₹200", imageUrl: "/images/placeholder-veg-starter.jpg" },
      { name: "Dragon Baby Corn", price: "₹210", imageUrl: "/images/placeholder-veg-starter.jpg" },
      { name: "Crispy Corn", price: "₹200", imageUrl: "/images/placeholder-veg-starter.jpg" },
      { name: "Baby Corn Manchurian", price: "₹200", imageUrl: "/images/placeholder-veg-starter.jpg" },
    ],
  },
  {
    category: "Non-Veg Starters",
    items: [
      { name: "Lemon Chicken", price: "₹260", imageUrl: "/images/placeholder-non-veg-starter.jpg" },
      { name: "Chicken Majestic", price: "₹260", imageUrl: "/images/placeholder-non-veg-starter.jpg" },
      { name: "Chicken 65", price: "₹240", imageUrl: "/images/placeholder-non-veg-starter.jpg" },
      { name: "Chilli Chicken", price: "₹240", imageUrl: "/images/placeholder-non-veg-starter.jpg", description: "Crispy fried chicken tossed generously with fierce red chillies and curry leaves." },
      { name: "Dragon Chicken", price: "₹260", imageUrl: "/images/placeholder-non-veg-starter.jpg" },
      { name: "Chicken Lollipop (6 pcs)", price: "₹260", imageUrl: "/images/placeholder-non-veg-starter.jpg" },
      { name: "Drumstick Chicken", price: "₹250", imageUrl: "/images/placeholder-non-veg-starter.jpg" },
      { name: "Devil Chicken (4 pcs)", price: "₹270", imageUrl: "/images/placeholder-non-veg-starter.jpg" },
      { name: "Crispy Chicken", price: "₹250", imageUrl: "/images/placeholder-non-veg-starter.jpg" },
      { name: "Pepper Chicken", price: "₹250", imageUrl: "/images/placeholder-non-veg-starter.jpg" },
      { name: "Kaju Chicken", price: "₹260", imageUrl: "/images/placeholder-non-veg-starter.jpg" },
      { name: "Paradise Spl Chicken Starter", price: "₹300", imageUrl: "/images/placeholder-non-veg-starter.jpg", description: "Our house special signature chicken starter." },
    ],
  },
  {
    category: "Prawn & Fish",
    items: [
      { name: "Loose Prawns", price: "₹320", imageUrl: "/images/placeholder-seafood.jpg" },
      { name: "Garlic Prawns", price: "₹320", imageUrl: "/images/placeholder-seafood.jpg" },
      { name: "Chilli Prawn", price: "₹310", imageUrl: "/images/placeholder-seafood.jpg" },
      { name: "Chilli Fish", price: "₹280", imageUrl: "/images/placeholder-seafood.jpg" },
      { name: "Apollo Fish", price: "₹290", imageUrl: "/images/placeholder-seafood.jpg", description: "Boneless fish chunks marinated in fiery spices, deep-fried and tossed in a tangy yogurt sauce." },
      { name: "Garlic Fish", price: "₹280", imageUrl: "/images/placeholder-seafood.jpg" },
    ],
  },
  {
    category: "Tandoori",
    items: [
      { name: "Paneer Tikka", price: "₹290", imageUrl: "/images/placeholder-tandoori.jpg" },
      { name: "Malai Paneer Tikka", price: "₹300", imageUrl: "/images/placeholder-tandoori.jpg" },
      { name: "Achari Paneer Tikka", price: "₹300", imageUrl: "/images/placeholder-tandoori.jpg" },
      { name: "Pahadi Chicken Tikka", price: "₹270", imageUrl: "/images/placeholder-tandoori.jpg" },
      { name: "Malai Chicken Tikka", price: "₹260", imageUrl: "/images/placeholder-tandoori.jpg" },
      { name: "Chicken Tikka", price: "₹230", imageUrl: "/images/placeholder-tandoori.jpg" },
      { name: "Reshmi Kabab", price: "₹300", imageUrl: "/images/placeholder-tandoori.jpg" },
      { name: "Hariyali Tikka", price: "₹230", imageUrl: "/images/placeholder-tandoori.jpg" },
      { name: "Lemon Chicken Tikka", price: "₹280", imageUrl: "/images/placeholder-tandoori.jpg" },
      { name: "Tangdi Kabab", price: "₹280", imageUrl: "/images/placeholder-tandoori.jpg" },
      { name: "Achari Chicken Tikka", price: "₹280", imageUrl: "/images/placeholder-tandoori.jpg" },
      { name: "Tandoori Chicken", price: "Half ₹250 / Full ₹450", imageUrl: "/images/placeholder-tandoori.jpg" },
      { name: "Paradise Spl Tandoori Chicken", price: "Half ₹300 / Full ₹500", imageUrl: "/images/placeholder-tandoori.jpg" },
    ],
  },
  {
    category: "Veg Curries",
    items: [
      { name: "Paneer Butter Masala", price: "₹240", imageUrl: "/images/placeholder-curry.jpg", description: "Soft cottage cheese cubes simmered in a rich, buttery tomato gravy with a hint of fenugreek." },
      { name: "Kaju Tomato Curry", price: "₹250", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Butter Paneer Curry", price: "₹200", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Kadai Paneer Curry", price: "₹250", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Paneer Do Pyaza Curry", price: "₹250", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Mushroom Masala Curry", price: "₹200", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Kaju Paneer Curry", price: "₹250", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Dal Tadka & Fry", price: "₹150", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Tomato Dal", price: "₹140", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Palak Paneer Curry", price: "₹200", imageUrl: "/images/placeholder-curry.jpg" },
    ],
  },
  {
    category: "Non-Veg Curries",
    items: [
      { name: "Boneless Chicken Curry", price: "₹250", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Hyderabadi Chicken Curry", price: "₹260", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Butter Chicken Curry", price: "₹280", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Kadai Chicken Curry", price: "₹260", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Chicken Palli Palem Curry", price: "₹360", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Chicken Do Pyaza Curry", price: "₹260", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Chicken Tikka Masala Curry", price: "₹300", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Mughlai Chicken Curry", price: "₹280", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Paradise Spl Chicken Curry", price: "₹300", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Punjabi Chicken Curry", price: "₹280", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Mutton Rogan Josh", price: "₹310", imageUrl: "/images/placeholder-curry.jpg", description: "Tender mutton pieces slow-cooked in a vibrant, aromatic Kashmiri spiced gravy." },
      { name: "Mutton Curry", price: "₹300", imageUrl: "/images/placeholder-curry.jpg" },
      { name: "Prawn Curry", price: "₹280", imageUrl: "/images/placeholder-curry.jpg" },
    ],
  },
  {
    category: "Naan - Roties",
    items: [
      { name: "Tandoori Roti Plain", price: "₹30", imageUrl: "/images/placeholder-bread.jpg" },
      { name: "Butter Roti", price: "₹40", imageUrl: "/images/placeholder-bread.jpg" },
      { name: "Green Chilli Roti", price: "₹40", imageUrl: "/images/placeholder-bread.jpg" },
      { name: "Plain Naan", price: "₹40", imageUrl: "/images/placeholder-bread.jpg" },
      { name: "Butter Naan", price: "₹50", imageUrl: "/images/placeholder-bread.jpg" },
      { name: "Garlic Naan", price: "₹60", imageUrl: "/images/placeholder-bread.jpg" },
      { name: "Plain Kulcha", price: "₹40", imageUrl: "/images/placeholder-bread.jpg" },
      { name: "Butter Kulcha", price: "₹50", imageUrl: "/images/placeholder-bread.jpg" },
    ],
  },
  {
    category: "Biryani",
    items: [
      { name: "Veg Biryani", price: "₹200", imageUrl: "/images/placeholder-biryani.jpg" },
      { name: "Paneer Biryani", price: "₹240", imageUrl: "/images/placeholder-biryani.jpg" },
      { name: "Mushroom Biryani", price: "₹240", imageUrl: "/images/placeholder-biryani.jpg" },
      { name: "Chicken Dum Biryani", price: "Half ₹150 / Full ₹220", imageUrl: "/images/placeholder-biryani.jpg", description: "Layered with saffron and caramelized onions, sealed in traditional dum for a velvet, perfumed depth of flavor." },
      { name: "Chicken Fry Piece Biryani", price: "Half ₹150 / Full ₹220", imageUrl: "/images/placeholder-biryani.jpg", description: "Fluffy dum biryani rice served generously with spicy, crispy pan-fried chicken pieces." },
      { name: "Chicken Mughlai Biryani", price: "₹280", imageUrl: "/images/placeholder-biryani.jpg" },
      { name: "Chicken 65 Biryani", price: "₹260", imageUrl: "/images/placeholder-biryani.jpg" },
      { name: "Mixed Biryani", price: "₹350", imageUrl: "/images/placeholder-biryani.jpg" },
      { name: "Mutton Fry Biryani", price: "₹380", imageUrl: "/images/placeholder-biryani.jpg" },
      { name: "Fish Biryani", price: "₹280", imageUrl: "/images/placeholder-biryani.jpg" },
      { name: "Punjabi Biryani", price: "₹300", imageUrl: "/images/placeholder-biryani.jpg" },
      { name: "Dilkush Biryani", price: "₹480", imageUrl: "/images/placeholder-biryani.jpg" },
      { name: "Paradise Spl Chicken Biryani", price: "₹380", imageUrl: "/images/placeholder-biryani.jpg" },
      { name: "Spl Chicken Biryani", price: "₹280", imageUrl: "/images/placeholder-biryani.jpg" },
    ],
  },
  {
    category: "Fried Rice & Noodles",
    items: [
      { name: "Veg Fried Rice", price: "₹160", imageUrl: "/images/placeholder-fried-rice.jpg" },
      { name: "Paneer Fried Rice", price: "₹220", imageUrl: "/images/placeholder-fried-rice.jpg" },
      { name: "Mushroom Fried Rice", price: "₹200", imageUrl: "/images/placeholder-fried-rice.jpg" },
      { name: "Jeera Fried Rice", price: "₹280", imageUrl: "/images/placeholder-fried-rice.jpg" },
      { name: "Kaju Fried Rice", price: "₹220", imageUrl: "/images/placeholder-fried-rice.jpg" },
      { name: "Paradise Spl Veg Fried Rice", price: "₹250", imageUrl: "/images/placeholder-fried-rice.jpg" },
      { name: "Chicken Fried Rice", price: "₹200", imageUrl: "/images/placeholder-fried-rice.jpg" },
      { name: "Egg Fried Rice", price: "₹180", imageUrl: "/images/placeholder-fried-rice.jpg" },
      { name: "Schezwan Chicken Fried Rice", price: "₹210", imageUrl: "/images/placeholder-fried-rice.jpg" },
      { name: "Schezwan Egg Fried Rice", price: "₹190", imageUrl: "/images/placeholder-fried-rice.jpg" },
      { name: "Chicken Noodles", price: "₹170", imageUrl: "/images/placeholder-fried-rice.jpg" },
      { name: "Egg Noodles", price: "₹150", imageUrl: "/images/placeholder-fried-rice.jpg" },
      { name: "Special Chicken Fried Rice", price: "₹280", imageUrl: "/images/placeholder-fried-rice.jpg" },
      { name: "Mixed Fried Rice", price: "₹300", imageUrl: "/images/placeholder-fried-rice.jpg" },
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
