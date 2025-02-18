/** @type {import('tailwindcss').Config} */
module.exports = {
  arkMode: 'media', // 'media' means it uses prefers-color-scheme
  theme: {
    extend: {},
  },
  plugins: [],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
