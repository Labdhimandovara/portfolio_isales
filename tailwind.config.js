/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rule: '#e5e5e5',
        ink: '#1f2328',
        'nav-ink': '#373737',
        muted: '#59636e',
        paper: '#f6f6f6',
        card: '#fff3f2',
        rose: '#560e29',
        clay: '#988b81',
        lime: '#e7ff7d',
        sky: '#afe3ff',
        warmYellow: '#fee593',
        forestGreen: '#1f883d',
        tabRest: '#f5f5f5'
      },
      fontFamily: {
        serif: ['"Averia Serif Libre"', 'Georgia', 'serif'],
        display: ['"Averia Libre"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        column: '1664px',
      }
    },
  },
  plugins: [],
}
