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
        "pp-right-grotesk": ["PPRightGrotesk", "sans-serif"],
        "pp-right-grotesk-medium": ["PPRightGrotesk Medium", "sans-serif"],
        "pp-right-grotesk-compact-black": [
          "PPRightGrotesk Compact Black",
          "sans-serif",
        ],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('/images/pattern_background.svg')",
      },
    },
  },
  plugins: [],
};
