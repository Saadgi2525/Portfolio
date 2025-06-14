/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"], // Custom font
        nunito: ["Nunito ", "sans-serif"],
        robotoSlab: ["Roboto Slab", "serif"],
        tektur: ["Tektur", "cursive"],
        caveat: ["Caveat", "cursive"],
        cinzel: ['Cinzel', 'serif'],
         harry: ['HarryP', 'cursive'],
 // Optional: Default sans-serif font
      },

      colors: {
        tyellow: "#eeba30",  // Yellow
        tblack: "#191923", // Teal
        tgrey: "gray-800",      // Dark Blue
        tgreen: "#D8EBE4",
        tbrown:"#740001",
        torange:"#AE0001",
        tgolden: "#d3a625"     // Light Greenish
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        slide: "slide 15s linear infinite",
        bounce: "bounce 1.5s infinite",
      },
    },
  },
  plugins: [],
};