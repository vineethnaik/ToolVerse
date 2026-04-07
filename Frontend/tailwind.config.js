/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-base': '#0a0a0f',
        'dark-card': '#12121a',
        'dark-card-hover': '#1a1a25',
        'dark-border': '#1e1e2e',
        'dark-border-glow': '#2a2a40',
        'accent-blue': '#3b82f6',
        'accent-violet': '#8b5cf6',
        'accent-cyan': '#06b6d4',
        'accent-pink': '#ec4899',
        'accent-green': '#10b981',
        'text-primary': '#f1f1f7',
        'text-secondary': '#8888a4',
        'text-muted': '#55556a',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
