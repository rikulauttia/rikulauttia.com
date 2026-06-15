/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        ink: {
          DEFAULT: '#111111',
          muted: '#5c5c5c',
          faint: '#8a8a8a',
        },
        line: '#e6e6e6',
        paper: '#fdfdfc',
      },
      maxWidth: {
        content: '60rem',
        prose: '40rem',
      },
    },
  },
  plugins: [],
}
