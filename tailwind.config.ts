import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      dispXL: ['56px', '125%'],
      dispL: ['48px', '125%'],
      dispM: ['36px', '125%'],
      dispS1: ['28px', '140%'],
      dispS2: ['24px', '140%'],
      dispS3: ['20px', '140%'],
      parL: ['17px', '160%'],
      parM: ['15px', '160%'],
      parS: ['14px', '160%'],
      quot: ['12px', '160%'],
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      nunito:["Nunito Sans", "sans-serif"]
    },
    screens: {
      tablet: '768px',
      desktop: '1440px',
    },
  },
  plugins: [],
};
export default config;
