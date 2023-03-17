/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {     
        // "accent": "#37cdbe"
      },
    },
  ],
  plugins: [require("daisyui")],
}
