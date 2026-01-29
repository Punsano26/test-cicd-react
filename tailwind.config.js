/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customblue: "#1e40af",
        custompink: "#ec4899",
      },
    },
  },
  plugins: [require("daisyui")],
};