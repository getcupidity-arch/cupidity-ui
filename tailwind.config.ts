import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4D6D',
          foreground: '#FFFFFF',
          50: '#FFF0F3',
          100: '#FFE0E6',
          200: '#FFC2D1',
          300: '#FF8FA3',
          400: '#FF6B85',
          500: '#FF4D6D',
          600: '#E63E5C',
          700: '#CC2F4B',
          800: '#B3203A',
          900: '#991129',
        },
        secondary: {
          DEFAULT: '#FF8FA3',
          foreground: '#0F0F11',
        },
        accent: {
          DEFAULT: '#CDB4DB',
          foreground: '#0F0F11',
        },
        background: '#0F0F11',
        surface: {
          DEFAULT: '#18181B',
          hover: '#1F1F23',
          active: '#27272A',
        },
        foreground: '#FFFFFF',
        muted: {
          DEFAULT: '#27272A',
          foreground: '#A1A1AA',
        },
        border: 'rgba(255, 255, 255, 0.08)',
        input: 'rgba(255, 255, 255, 0.08)',
        ring: '#FF4D6D',
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.375rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 77, 109, 0.15)',
        'glow-lg': '0 0 40px rgba(255, 77, 109, 0.2)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.36)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        shimmer: 'shimmer 2s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
