/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
    },
    animation: {
      wiggle: "wiggle 1s ease-in-out infinite",
    },
    keyframes: {
      wiggleLeft: {
        "0%, 100%": { transform: "translateX(0)" },
        "50%": { transform: "translateX(-10px)" },
      },
      wiggleRight: {
        "0%, 100%": { transform: "translateX(0)" },
        "50%": { transform: "translateX(10px)" },
      },
    },
    animation: {
      "wiggle-left": "wiggleLeft 1s ease-in-out infinite",
      "wiggle-right": "wiggleRight 1s ease-in-out infinite",
    },
    wiggleLeft: {
      "0%, 100%": { transform: "translateX(0)" },
      "50%": { transform: "translateX(-10px)" },
    },
  },
  plugins: [],
};
