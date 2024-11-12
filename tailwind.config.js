/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        background: "#2e0249",
        dark_pink: "#a91079",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

