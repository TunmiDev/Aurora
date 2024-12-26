/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes React component files
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0808FF",
        secondary: "#f49434",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
