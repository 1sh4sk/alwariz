/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          maroon: "#7C1A1B",
          brownred: "#7C1A1B",
        }
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0))",
        "hero": "url(https://ik.imagekit.io/99y1fc9mh/alwariz/assets/hero-bg-CcSRFzOk.png?updatedAt=1724299252828 )",
        "wholesale": "url(https://ik.imagekit.io/99y1fc9mh/alwariz/assets/wholesale-uG7eoQ0O.jpg?updatedAt=1724299261947)",
        "products": "url(https://ik.imagekit.io/99y1fc9mh/alwariz/assets/products-BRiS2Skj.jpg?updatedAt=1724299259896)",
        "testimonials": "url(https://ik.imagekit.io/99y1fc9mh/alwariz/assets/testimonials-bg-2242uvtR.png?updatedAt=1724299267281)"
      },
    },
  },
  plugins: [],
}

