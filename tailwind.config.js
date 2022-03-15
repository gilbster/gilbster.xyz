module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  "scripts": {
  "build": "tailwind build src/css/tailwind.css -o dist/css/tailwind.css"
},
};
