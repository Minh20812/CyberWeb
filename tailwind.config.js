/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-gray": "#EDEDED",
        "productCard-gray": "#F6F6F6",
        "promo-gray": "#656565",
        "search-gray": "#F5F5F5",
      },
      spacing: {
        search: "372px",
        tabSpace: "52px",
      },
      fontSize: {
        iconSize: "22px",
        hamburgerSize: "40px",
        custom: [
          "18px",
          {
            lineHeight: "24px",
          },
        ],
      },
      fontFamily: {
        "sf-pro": ["SF Pro Display", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      alignItems: ["max-lg"],
      justifyContent: ["max-lg"],
    },
  },
  plugins: [],
};
