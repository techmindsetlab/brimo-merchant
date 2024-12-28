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
      dropShadow: {
        'card': '0px 15px 25px 1px rgba(29, 52, 61, 0.05)', 
      },
      boxShadow: {
        'accordion': '0px 10px 30px 0px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        primary: {
          blue: "#06549D",
          white: "#FAFAFA",
          black: "#161627",
        },
        secondary: {
          blue: "#15A6DF",
        },
        accent: {
          orange: "#F7821B",
        },
        tertiary: {
          blue: "#DDEFFC",
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
        blanquotey: ["Blanquotey", "sans-serif"],
        jakarta: ["JakartaSansRegular", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('/images/pattern_background.svg')",
      },
    },
  },
  plugins: [],
};
