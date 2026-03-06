/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          foam: "#E0F7FA",
          sky: "#87CEEB",
          surface: "#4DB8DB",
          mid: "#1A8FB5",
          deep: "#0C5F7F",
          abyss: "#063B52",
          sand: "#F5E6CA",
          coral: "#FF7F7F",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fredoka", "Playfair Display", "Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "wave": "wave 8s linear infinite",
        "swim-right": "swimRight 18s linear infinite",
        "swim-left": "swimLeft 15s linear infinite",
        "turtle-glide": "turtleGlide 25s ease-in-out infinite",
        "bubble-rise": "bubbleRise 8s ease-in infinite",
        "bubble-rise-slow": "bubbleRise 12s ease-in infinite",
        "bubble-rise-fast": "bubbleRise 6s ease-in infinite",
        "sway": "sway 4s ease-in-out infinite",
        "sway-slow": "sway 6s ease-in-out infinite",
        "lobster-walk": "lobsterWalk 12s ease-in-out infinite",
        "jellyfish": "jellyfish 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        swimRight: {
          "0%": { transform: "translateX(-150px) scaleX(1)" },
          "100%": { transform: "translateX(calc(100vw + 150px)) scaleX(1)" },
        },
        swimLeft: {
          "0%": { transform: "translateX(calc(100vw + 150px)) scaleX(-1)" },
          "100%": { transform: "translateX(-150px) scaleX(-1)" },
        },
        turtleGlide: {
          "0%": { transform: "translateX(-200px) translateY(0px)" },
          "25%": { transform: "translateX(25vw) translateY(-15px)" },
          "50%": { transform: "translateX(50vw) translateY(5px)" },
          "75%": { transform: "translateX(75vw) translateY(-10px)" },
          "100%": { transform: "translateX(calc(100vw + 200px)) translateY(0px)" },
        },
        bubbleRise: {
          "0%": { transform: "translateY(100%) scale(0.4)", opacity: "0.6" },
          "50%": { opacity: "0.8" },
          "100%": { transform: "translateY(-120vh) scale(1)", opacity: "0" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        lobsterWalk: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(30px)" },
          "50%": { transform: "translateX(0)" },
          "75%": { transform: "translateX(-30px)" },
          "100%": { transform: "translateX(0)" },
        },
        jellyfish: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "30%": { transform: "translateY(-30px) scale(0.95)" },
          "60%": { transform: "translateY(-10px) scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};
