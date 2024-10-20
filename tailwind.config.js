/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "425px",
        // => @media (min-width: 425px) { ... }
        ssm: "375px",
        // => @media (min-width: 375px) { ... }
        sssm: "320px",
        // => @media (min-width: 320px) { ... }
        xs: "414px",
        // => @media (min-width: 414px) { ... }
        xxs: "412px",
        // => @media (min-width: 412px) { ... }
        xxxs: "344px",
        // => @media (min-width: 344px) { ... }
      },
    },
  },
  plugins: [],
};
