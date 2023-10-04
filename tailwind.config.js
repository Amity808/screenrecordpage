/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Secondary': '#141414',
        'neutral-1': '#434343',
        'neutral-2': '#E7E7ED',
        'Primary': '#120B48',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        sora: ['var(--font-sora)'],
        work_sans: ['var(--font-work-sans)'],
        sen: ['var(--font-sen)'],
      },
    },
  },
  plugins: [],
}

