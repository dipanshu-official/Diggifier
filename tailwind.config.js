/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        customblck: '#111917', // Define your custom color here
        btnclr: '#4db465',
        gradientcustom: 'linear-gradient(103.72deg, #009DDA 0%, #62BA47 97.95%)',

      },
    },
  },
  plugins: [],
}
