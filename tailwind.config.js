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
        "hero": "url(assets/hero-bg.png)",
        "wholesale": "url(assets/wholesale.jpg)",
        "products": "url(assets/products.jpg)",
        "testimonials": "url(assets/testimonials-bg.png)"
      },
    },
  },
  plugins: [],
}

