/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        main: "#333333",
      },
      boxShadow: {
        "neumorphism-inset":
          "inset 8px 8px 22px #202020, inset -8px -8px 22px #464646",
      },
    },
  },
  plugins: [],
};
