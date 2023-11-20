const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{react,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      black: {
        dark: '#1F1F1F',
      },
      orange: {
        default: '#F2A227',
        500: '#F2A227',
      },
      green: {
        default: '#16A34A',
        500: '#16A34A',
      },
    },
    fontFamily: {
      sans: 'Now, sans-serif',
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents, theme }) {
    },
    require('tailwindcss-animated')
  ],
});
