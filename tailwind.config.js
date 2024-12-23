/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project structure
    "./src/**/*.{js,jsx,ts,tsx}", // Include any other directories where Tailwind classes are used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}