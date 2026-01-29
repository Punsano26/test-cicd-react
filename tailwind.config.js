/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customblue: '#1e40af', // ตัวอย่างสี custom
        custompink: '#ec4899',
      },
    },
  },
  plugins: [],
};
