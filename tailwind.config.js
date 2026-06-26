/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        snow: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
        },
        night: {
          900: '#070a0f',
          800: '#0d1219',
          700: '#141b26',
          600: '#1c2530',
          500: '#2a3543',
        },
        crimson: {
          DEFAULT: '#c8102e',
          light: '#e23956',
          dark: '#8f0a1f',
        },
        moon: {
          DEFAULT: '#cbd5e1',
          glow: '#e8eef5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Noto Serif SC"', 'ui-serif', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'night-gradient': 'linear-gradient(180deg, #070a0f 0%, #141b26 100%)',
      },
      keyframes: {
        'snow-fall': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '50%': { opacity: '0.6' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'fade-up': {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'snow-fall': 'snow-fall 10s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}