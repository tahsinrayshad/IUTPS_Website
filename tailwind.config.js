/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"San Francisco"', 'system-ui', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: "#0070f3",
        background: "#f5f5f5",
        muted: "#e5e7eb",
        "muted-foreground": "#6b7280",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
