// packages/libs/ui/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "../../apps/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003366",
        secondary: "#004080",
        accent: "#EF4444",
      },
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
    },
  },
};
