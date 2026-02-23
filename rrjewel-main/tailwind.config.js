/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Luxury dark greens
        'luxury-dark': '#0F1F1C',
        'luxury-secondary': '#102925',
        'luxury-tertiary': '#0C1513',
        // Additional brand palette (wine & teal)
        'wine-deep': '#741522', // Deep Wine Red
        'rose-maroon': '#843A46', // Muted Rose Maroon
        'dark-chocolate': '#261216', // Dark Chocolate / Black Wine
        'deep-teal': '#143C45', // Deep Teal Blue-Green
        // Gold accents
        'gold-primary': '#D4AF37',
        'gold-soft': '#E8C76A',
        'gold-highlight': '#F5D98E',
        // Text colors (use brand palette; add on-dark for dark backgrounds)
        'text-primary': '#143C45', // deep-teal
        'text-muted': '#843A46', // rose-maroon
        'text-on-dark': '#FFFFFF', // white for use on dark backgrounds
        // Brand
        'brand': '#D4AF37',
        'brand-hover': '#E8C76A',
        'brand-light': '#F5D98E',
      },
      fontFamily: {
        'serif': ['Georgia', 'Garamond', 'serif'],
        'sans': ['Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 30px rgba(212, 175, 55, 0.3)',
        'glow-lg': '0 0 60px rgba(212, 175, 55, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(212, 175, 55, 0.1)',
      },
      backdropFilter: {
        'glass': 'backdrop-filter blur(10px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};