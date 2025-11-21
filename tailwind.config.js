/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        code: ['"Fira Code"', 'monospace'],
      },
      colors: {
        brand: {
          dark: '#0b1120',
          green: '#166945',
        },
      },
      backgroundImage: {
        'portfolio-pattern': `
          linear-gradient(30deg,#166945 12%,transparent 12.5%,transparent 87%,#166945 87.5%,#166945),
          linear-gradient(150deg,#166945 12%,transparent 12.5%,transparent 87%,#166945 87.5%,#166945),
          linear-gradient(30deg,#166945 12%,transparent 12.5%,transparent 87%,#166945 87.5%,#166945),
          linear-gradient(150deg,#166945 12%,transparent 12.5%,transparent 87%,#166945 87.5%,#166945),
          linear-gradient(60deg,#16694577 25%,transparent 25.5%,transparent 75%,#16694577 75%,#16694577),
          linear-gradient(60deg,#16694577 25%,transparent 25.5%,transparent 75%,#16694577 75%,#16694577)
        `,
      },
    },
  },
  plugins: [],
};
