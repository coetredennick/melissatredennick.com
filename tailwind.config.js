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
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#ebe3d5',
          300: '#d9ccb8',
          400: '#c5ae94',
          500: '#b09478',
          600: '#9d7d62',
          700: '#836752',
          800: '#6d5646',
          900: '#5a473b',
        },
        accent: {
          50: '#fef9f3',
          100: '#fdf2e6',
          200: '#fae3c7',
          300: '#f5cfa3',
          400: '#efb475',
          500: '#e89a51',
          600: '#d97d36',
          700: '#b5612d',
          800: '#914f2a',
          900: '#764227',
        },
        warm: {
          50: '#fffbf5',
          100: '#fef6eb',
          200: '#fcecd6',
          300: '#fadeb8',
          400: '#f7ca8e',
          500: '#f3b05f',
          600: '#eb9334',
          700: '#d47621',
          800: '#b05e1d',
          900: '#8f4d1c',
        },
      },
    },
  },
  plugins: [],
}

