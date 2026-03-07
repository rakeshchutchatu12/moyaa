/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Premium Luxury Dark Backgrounds
        'luxury-dark': '#261216',        // Dark chocolate / black wine
        'luxury-secondary': '#0b1a2b',   // Deep navy blue
        'luxury-tertiary': '#143c45',    // Premium teal highlight
        
        // Luxury Wine & Rose Accents
        'primary-wine': '#741522',       // Deep wine red (Primary Accent)
        'secondary-rose': '#843a46',     // Muted rose maroon
        'ruby-luxury': '#741522',        // Deep wine red
        'teal-luxury': '#143c45',        // Premium teal blue-green
        
        // Premium Gold & Platinum
        'gold-primary': '#a88a1f',       // Luxury gold accent
        'gold-soft': '#a88a1f',          // Luxury gold
        'gold-highlight': '#e8c547',     // Brighter luxury gold
        'platinum': '#ffffff',           // Pure white
        'rose-gold': '#843a46',          // Muted rose maroon
        
        // Premium Text Colors
        'text-primary': '#ffffff',       // Pure white
        'text-secondary': '#cbd5e1',     // Light slate
        'text-muted': '#94a3b8',         // Muted slate
        'text-accent': '#a88a1f',        // Gold text
        
        // Glass & Overlay
        'glass-light': 'rgba(255, 255, 255, 0.05)',
        'glass-dark': 'rgba(0, 0, 0, 0.4)',
      },
      fontFamily: {
        'serif': ['Georgia', 'Garamond', 'serif'],
        'sans': ['Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 30px rgba(168, 138, 31, 0.3)',
        'glow-lg': '0 0 60px rgba(168, 138, 31, 0.2)',
        'glow-ruby': '0 0 40px rgba(116, 21, 34, 0.25)',
        'glow-emerald': '0 0 40px rgba(20, 60, 69, 0.25)',
        'glow-sapphire': '0 0 40px rgba(20, 60, 69, 0.25)',
        'inner-glow': 'inset 0 0 20px rgba(168, 138, 31, 0.1)',
        'premium': '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(168, 138, 31, 0.15)',
      },
      backdropFilter: {
        'glass': 'backdrop-filter blur(20px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' },
          '50%': { boxShadow: '0 0 50px rgba(255, 215, 0, 0.8)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '-200% center' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};