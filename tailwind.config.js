/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#06549D",
          white: "#FAFAFA",
        },
        secondary: {
          blue: "#15A6DF",
        },
        accent: {
          orange: "#F7821B",
        },
      },
      fontFamily: {
        "brineue-bold": ["BRINeueFaceBold", "sans-serif"],
        "brineue-regular": ["BRINeueFaceRegular", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('/pattern_background.svg')",
      },
    },
  },
  plugins: [],
};
