/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        glassAccent: '#3DD6C9',
        glassLavender: '#A78BFA',
        glassGold: '#FFD87D',
        glassTextLight: '#E8EEF6',
        glassTextDark: '#0F1724',
        primary: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        secondary: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 50%, #0369A1 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
        'gradient-light': 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'navbar': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'glass-soft': '0 6px 18px rgba(15, 23, 42, 0.55)',
        'glass-strong': '0 28px 60px rgba(15, 23, 42, 0.9)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'motion-fade-up': 'motionFadeUp 0.42s cubic-bezier(0.16, 1, 0.3, 1)',
        'glass-glow': 'glassGlow 1.6s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        motionFadeUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 12px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        glassGlow: {
          '0%': {
            boxShadow: '0 0 0 0 rgba(61, 214, 201, 0.25), 0 0 25px rgba(61, 214, 201, 0.2)',
          },
          '100%': {
            boxShadow: '0 0 0 4px rgba(61, 214, 201, 0.06), 0 0 40px rgba(167, 139, 250, 0.35)',
          },
        },
      },
      backdropBlur: {
        glass: '10px',
      },
    },
  },
  plugins: [],
}
