/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3f0',
          100: '#e8e4dd',
          200: '#d4cbc0',
          300: '#baa99a',
          400: '#a08977',
          500: '#8b725d',
          600: '#7d6351',
          700: '#685044',
          800: '#57443b',
          900: '#493a32',
        },
        accent: {
          50: '#f0f4f8',
          100: '#d9e6f0',
          200: '#b3cde0',
          300: '#6fa8cf',
          400: '#4a90c8',
          500: '#2e7ab8',
          600: '#1f5f9b',
          700: '#1a4c7d',
          800: '#193f67',
          900: '#183556',
        },
      },
    },
  },
  plugins: [],
}

