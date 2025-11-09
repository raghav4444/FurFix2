/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/style.css"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      scrollBehavior: ['scroll-smooth'],
    },
  },
};