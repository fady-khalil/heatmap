/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      spacing: {
        primary: "",
        secondary: "",
      },
      borderRadius: {
        smal: "",
      },
    },
  },

  screens: {
    xs: "320px",
    ss: "420px",
    sm: "578px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  plugins: [],
};
