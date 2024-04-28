/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        "fira-sans": ["Fira Sans", " sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
