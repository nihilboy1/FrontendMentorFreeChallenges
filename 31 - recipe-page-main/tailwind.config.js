/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // quando eu fecho a aspa dupla, a fonte para de funcionar. Incompreensível.
        Outfit: ['"Outfit'],
        YoungSerif: ['"Young Serif"', '"serif"'],
      },
    },
  },
  plugins: [],
};
