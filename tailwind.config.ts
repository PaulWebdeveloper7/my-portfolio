import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const {default: flattenColorPalette,} = require("tailwindcss/lib/util/flattenColorPalette");
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
        animation: {
          scroll:
            "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            first: "moveVertical 30s ease infinite",
            second: "moveInCircle 20s reverse infinite",
            third: "moveInCircle 40s linear infinite",
            fourth: "moveHorizontal 40s ease infinite",
            fifth: "moveInCircle 20s ease infinite",
            shimmer: "shimmer 2s linear infinite",

        },
        keyframes: {
          scroll: {
            to: {
              transform: "translate(calc(-50% - 0.5rem))",
            },
          },
          shimmer: {
            from: {
              backgroundPosition: "0 0",
            },
            to: {
              backgroundPosition: "-200% 0",
            },
          },
          moveHorizontal: {
            "0%": {
              transform: "translateX(-50%) translateY(-10%)",
            },
            "50%": {
              transform: "translateX(50%) translateY(10%)",
            },
            "100%": {
              transform: "translateX(-50%) translateY(-10%)",
            },
          },
          moveInCircle: {
            "0%": {
              transform: "rotate(0deg)",
            },
            "50%": {
              transform: "rotate(180deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
          moveVertical: {
            "0%": {
              transform: "translateY(-50%)",
            },
            "50%": {
              transform: "translateY(50%)",
            },
            "100%": {
              transform: "translateY(-50%)",
            },
          },
        },
  
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            'custom-image': "url('/images/bg.jpg')",
            'approach-image1': "url('/images/1.jpeg')",
            'approach-image2': "url('/images/2.jpeg')",
            'approach-image3': "url('/images/3.jpg')",
            'approach-image4': "url('/images/4.png')"

      },
    }
  },
  plugins: [
    // rest of the code
    addVariablesForColors,

  ],};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
