/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: "#FEF15A",
        secondBlack: "#252F31",
        grayLight1: "#FCFAFA",
        grayLight2: "#818B8D",
        grayLight3: "#615954",
        detailGreen: "#3FA09F",
      },
    },
  },
  plugins: [],
};
