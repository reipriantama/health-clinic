/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        top: '15px -10px 15px -10px rgba(0, 0, 1, 1)',
      },
    },
    fontFamily: {
      workSans: ['Work Sans'],
    },
  },
  plugins: [],
};
