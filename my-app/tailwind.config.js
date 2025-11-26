/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'serif'], // للعناوين - خط أنيق وكلاسيكي
        display: ['Montserrat', 'sans-serif'], // للعناوين الكبيرة - خط حديث وأنيق
      },
      colors: {
        purple: {
          light: '#c084fc',
          DEFAULT: '#9333ea',
          dark: '#6b21a8',
        },
        pink: {
          light: '#f9a8d4',
          DEFAULT: '#ec4899',
          dark: '#be185d',
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-out',
        'progress': 'progress 5s linear forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },

  plugins: [],
}

