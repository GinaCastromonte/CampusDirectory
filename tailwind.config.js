/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      backgroundImage: {
        homebg: "url(/public/images/homebg.webp)",
      },
    },
  },
  plugins: [],
};
