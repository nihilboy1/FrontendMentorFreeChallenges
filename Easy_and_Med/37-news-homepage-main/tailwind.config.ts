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
        "web3Mobile": "url('/image-web-3-mobile.jpg')",
        "web3Desktop": "url('/image-web-3-desktop.jpg')"
      },
    },
  },
  plugins: [],
};
export default config;
