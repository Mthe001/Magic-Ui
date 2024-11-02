/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'dark-centered-gradient': 'radial-gradient(circle, #CFCECE 5%, #4B3A28 70%, #020101 85%, #0000 100%)',
      },

    },
  },
  plugins: [],
}

