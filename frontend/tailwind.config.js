/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Scans the index.html file
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rabbit-red": "#ea2e0e",
      },
    },
  },
  plugins: [],
};
