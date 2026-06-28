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
      { name: "Veg Sweet Corn Soup", price: "₹90", imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop" },
      { name: "Veg Mushroom Soup", price: "₹100", imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop" },
      { name: "Veg Hot & Sour Soup", price: "₹90", imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Sweet Corn Soup", price: "₹110", imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Manchow Soup", price: "₹120", imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Hot & Sour Soup", price: "₹120", imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    category: "Veg Starters",
    items: [
      { name: "Chilli Paneer & Manchurian", price: "₹250", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" },
      { name: "Dragon Paneer", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" },
      { name: "Schezwan Paneer", price: "₹260", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" },
      { name: "Paneer Majestic", price: "₹260", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" },
      { name: "Chilli Mushroom", price: "₹200", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" },
      { name: "Mushroom Manchurian", price: "₹200", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" },
      { name: "Dragon Mushroom", price: "₹220", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" },
      { name: "Veg Manchurian", price: "₹170", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" },
      { name: "Crispy Baby Corn", price: "₹200", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" },
      { name: "Chilli Baby Corn", price: "₹200", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" },
      { name: "Dragon Baby Corn", price: "₹210", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" },
      { name: "Crispy Corn", price: "₹200", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" },
      { name: "Baby Corn Manchurian", price: "₹200", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    category: "Non-Veg Starters",
    items: [
      { name: "Lemon Chicken", price: "₹260", imageUrl: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Majestic", price: "₹260", imageUrl: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken 65", price: "₹240", imageUrl: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop" },
      { name: "Chilli Chicken", price: "₹240", imageUrl: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop", description: "Crispy fried chicken tossed generously with fierce red chillies and curry leaves." },
      { name: "Dragon Chicken", price: "₹260", imageUrl: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Lollipop (6 pcs)", price: "₹260", imageUrl: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop" },
      { name: "Drumstick Chicken", price: "₹250", imageUrl: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop" },
      { name: "Devil Chicken (4 pcs)", price: "₹270", imageUrl: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop" },
      { name: "Crispy Chicken", price: "₹250", imageUrl: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop" },
      { name: "Pepper Chicken", price: "₹250", imageUrl: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop" },
      { name: "Kaju Chicken", price: "₹260", imageUrl: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop" },    ],
  },
  {
    category: "Prawn & Fish",
    items: [
      { name: "Loose Prawns", price: "₹320", imageUrl: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop" },
      { name: "Garlic Prawns", price: "₹320", imageUrl: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop" },
      { name: "Chilli Prawn", price: "₹310", imageUrl: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop" },
      { name: "Chilli Fish", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop" },
      { name: "Apollo Fish", price: "₹290", imageUrl: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop", description: "Boneless fish chunks marinated in fiery spices, deep-fried and tossed in a tangy yogurt sauce." },
      { name: "Garlic Fish", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    category: "Tandoori",
    items: [
      { name: "Paneer Tikka", price: "₹290", imageUrl: "https://images.unsplash.com/photo-1599487405270-8e71be8ebdda?q=80&w=800&auto=format&fit=crop" },
      { name: "Malai Paneer Tikka", price: "₹300", imageUrl: "https://images.unsplash.com/photo-1599487405270-8e71be8ebdda?q=80&w=800&auto=format&fit=crop" },
      { name: "Achari Paneer Tikka", price: "₹300", imageUrl: "https://images.unsplash.com/photo-1599487405270-8e71be8ebdda?q=80&w=800&auto=format&fit=crop" },
      { name: "Pahadi Chicken Tikka", price: "₹270", imageUrl: "https://images.unsplash.com/photo-1599487405270-8e71be8ebdda?q=80&w=800&auto=format&fit=crop" },
      { name: "Malai Chicken Tikka", price: "₹260", imageUrl: "https://images.unsplash.com/photo-1599487405270-8e71be8ebdda?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Tikka", price: "₹230", imageUrl: "https://images.unsplash.com/photo-1599487405270-8e71be8ebdda?q=80&w=800&auto=format&fit=crop" },
      { name: "Reshmi Kabab", price: "₹300", imageUrl: "https://images.unsplash.com/photo-1599487405270-8e71be8ebdda?q=80&w=800&auto=format&fit=crop" },
      { name: "Hariyali Tikka", price: "₹230", imageUrl: "https://images.unsplash.com/photo-1599487405270-8e71be8ebdda?q=80&w=800&auto=format&fit=crop" },
      { name: "Lemon Chicken Tikka", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1599487405270-8e71be8ebdda?q=80&w=800&auto=format&fit=crop" },
      { name: "Tangdi Kabab", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1599487405270-8e71be8ebdda?q=80&w=800&auto=format&fit=crop" },
      { name: "Achari Chicken Tikka", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1599487405270-8e71be8ebdda?q=80&w=800&auto=format&fit=crop" },
      { name: "Tandoori Chicken", price: "Half ₹250 / Full ₹450", imageUrl: "https://images.unsplash.com/photo-1599487405270-8e71be8ebdda?q=80&w=800&auto=format&fit=crop" },    ],
  },
  {
    category: "Veg Curries",
    items: [
      { name: "Paneer Butter Masala", price: "₹240", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop", description: "Soft cottage cheese cubes simmered in a rich, buttery tomato gravy with a hint of fenugreek." },
      { name: "Kaju Tomato Curry", price: "₹250", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Butter Paneer Curry", price: "₹200", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Kadai Paneer Curry", price: "₹250", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Paneer Do Pyaza Curry", price: "₹250", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Mushroom Masala Curry", price: "₹200", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Kaju Paneer Curry", price: "₹250", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Dal Tadka & Fry", price: "₹150", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Tomato Dal", price: "₹140", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Palak Paneer Curry", price: "₹200", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    category: "Non-Veg Curries",
    items: [
      { name: "Boneless Chicken Curry", price: "₹250", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Hyderabadi Chicken Curry", price: "₹260", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Butter Chicken Curry", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Kadai Chicken Curry", price: "₹260", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Palli Palem Curry", price: "₹360", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Do Pyaza Curry", price: "₹260", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Tikka Masala Curry", price: "₹300", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Mughlai Chicken Curry", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },      { name: "Punjabi Chicken Curry", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Mutton Rogan Josh", price: "₹310", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop", description: "Tender mutton pieces slow-cooked in a vibrant, aromatic Kashmiri spiced gravy." },
      { name: "Mutton Curry", price: "₹300", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
      { name: "Prawn Curry", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    category: "Naan - Roties",
    items: [
      { name: "Tandoori Roti Plain", price: "₹30", imageUrl: "https://images.unsplash.com/photo-1606851094655-b25cb7a18f15?q=80&w=800&auto=format&fit=crop" },
      { name: "Butter Roti", price: "₹40", imageUrl: "https://images.unsplash.com/photo-1606851094655-b25cb7a18f15?q=80&w=800&auto=format&fit=crop" },
      { name: "Green Chilli Roti", price: "₹40", imageUrl: "https://images.unsplash.com/photo-1606851094655-b25cb7a18f15?q=80&w=800&auto=format&fit=crop" },
      { name: "Plain Naan", price: "₹40", imageUrl: "https://images.unsplash.com/photo-1606851094655-b25cb7a18f15?q=80&w=800&auto=format&fit=crop" },
      { name: "Butter Naan", price: "₹50", imageUrl: "https://images.unsplash.com/photo-1606851094655-b25cb7a18f15?q=80&w=800&auto=format&fit=crop" },
      { name: "Garlic Naan", price: "₹60", imageUrl: "https://images.unsplash.com/photo-1606851094655-b25cb7a18f15?q=80&w=800&auto=format&fit=crop" },
      { name: "Plain Kulcha", price: "₹40", imageUrl: "https://images.unsplash.com/photo-1606851094655-b25cb7a18f15?q=80&w=800&auto=format&fit=crop" },
      { name: "Butter Kulcha", price: "₹50", imageUrl: "https://images.unsplash.com/photo-1606851094655-b25cb7a18f15?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    category: "Biryani",
    items: [
      { name: "Veg Biryani", price: "₹200", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" },
      { name: "Paneer Biryani", price: "₹240", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" },
      { name: "Mushroom Biryani", price: "₹240", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Dum Biryani", price: "Half ₹150 / Full ₹220", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop", description: "Layered with saffron and caramelized onions, sealed in traditional dum for a velvet, perfumed depth of flavor." },
      { name: "Chicken Fry Piece Biryani", price: "Half ₹150 / Full ₹220", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop", description: "Fluffy dum biryani rice served generously with spicy, crispy pan-fried chicken pieces." },
      { name: "Chicken Mughlai Biryani", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken 65 Biryani", price: "₹260", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" },
      { name: "Mixed Biryani", price: "₹350", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" },
      { name: "Mutton Fry Biryani", price: "₹380", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" },
      { name: "Fish Biryani", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" },
      { name: "Punjabi Biryani", price: "₹300", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" },
      { name: "Dilkush Biryani", price: "₹480", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" },      { name: "Spl Chicken Biryani", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    category: "Fried Rice & Noodles",
    items: [
      { name: "Veg Fried Rice", price: "₹160", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
      { name: "Paneer Fried Rice", price: "₹220", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
      { name: "Mushroom Fried Rice", price: "₹200", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
      { name: "Jeera Fried Rice", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
      { name: "Kaju Fried Rice", price: "₹220", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },      { name: "Chicken Fried Rice", price: "₹200", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
      { name: "Egg Fried Rice", price: "₹180", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
      { name: "Schezwan Chicken Fried Rice", price: "₹210", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
      { name: "Schezwan Egg Fried Rice", price: "₹190", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Noodles", price: "₹170", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
      { name: "Egg Noodles", price: "₹150", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
      { name: "Special Chicken Fried Rice", price: "₹280", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
      { name: "Mixed Fried Rice", price: "₹300", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
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
