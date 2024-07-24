/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ["Lato", "sans-serif"],
      },

      backgroundImage: {
        'washington': "url('./assets/images/washington.png')",
        'franklin': "url('./assets/images/franklin.png')",
        'clinton': "url('./assets/images/clinton.png')",
        'greenville': "url('./assets/images/greenville.png')",
        'bristol': "url('./assets/images/bristol.png')",
        'fairview': "url('./assets/images/fairview.png')",
        'fairview2': "url('./assets/images/fairview2.png')",
        'salem': "url('./assets/images/salem.png')",
        'madison': "url('./assets/images/madison.png')",
      }
    },
  },
  plugins: [],
}