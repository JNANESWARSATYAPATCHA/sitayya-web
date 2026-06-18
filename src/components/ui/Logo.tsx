export const SitayyaLogo = ({
  className = "w-12 h-12",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* The Grand Shield (Double Layered & Subtle Fill) */}
    <path
      d="M25 32 L75 32 L75 55 C75 78, 50 92, 50 92 C50 92, 25 78, 25 55 Z"
      fill="#C5A059"
      fillOpacity="0.05"
      stroke="#C5A059"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M31 38 L69 38 L69 55 C69 72, 50 84, 50 84 C50 84, 31 72, 31 55 Z"
      stroke="#C5A059"
      strokeWidth="1"
      strokeLinejoin="round"
    />

    {/* The Solid Royal Crown */}
    <path
      d="M35 28 L39 12 L50 22 L61 12 L65 28 Z"
      fill="#C5A059"
      stroke="#C5A059"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="39" cy="9" r="2.5" fill="#C5A059" />
    <circle cx="50" cy="18" r="3" fill="#C5A059" />
    <circle cx="61" cy="9" r="2.5" fill="#C5A059" />
    <path
      d="M32 32 L68 32"
      stroke="#C5A059"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* The Premium Serif 'S' (True Typographic Weight) */}
    <text
      x="50%"
      y="74%"
      fontFamily="'Playfair Display', serif"
      fontSize="42"
      fontWeight="bold"
      fill="#C5A059"
      textAnchor="middle"
    >
      S
    </text>

    {/* Solid Sweeping Laurels (No more fishbones) */}
    <path
      d="M 21 65 C 5 50, 15 35, 23 32 C 15 45, 10 55, 24 61 Z"
      fill="#C5A059"
    />
    <path
      d="M 17 75 C -1 60, 10 45, 18 42 C 10 55, 5 65, 20 71 Z"
      fill="#C5A059"
    />

    <path
      d="M 79 65 C 95 50, 85 35, 77 32 C 85 45, 90 55, 76 61 Z"
      fill="#C5A059"
    />
    <path
      d="M 83 75 C 101 60, 90 45, 82 42 C 90 55, 95 65, 80 71 Z"
      fill="#C5A059"
    />

    {/* Elegant Solid Pedestal */}
    <path
      d="M 30 94 Q 50 102 70 94 Q 50 97 30 94 Z"
      fill="#C5A059"
    />
  </svg>
);
