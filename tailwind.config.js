/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        userView: '80rem'
      },
      width: {
        userView: '80rem'
      },
    },
  },
  darkMode: "class",
  plugins: [],
} 