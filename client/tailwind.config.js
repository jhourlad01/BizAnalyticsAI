/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}"
  ],
  theme: {
    extend: {
      colors: {
        iosblue: {
          DEFAULT: '#007AFF',
          light: '#5AC8FA',
          dark: '#004080',
        },
        iosgreen: {
          DEFAULT: '#34C759',
          light: '#30D158',
          dark: '#248A3D',
        },
        iosgray: {
          light: '#F2F2F7',
          DEFAULT: '#E5E5EA',
          dark: '#1C1C1E',
        },
        iosbg: {
          DEFAULT: '#F9F9F9',
        },
        ioscard: {
          DEFAULT: '#FFFFFF',
        },
        iosBg: 'rgba(245, 245, 250, 0.85)', // iOS-like light background
        iosCard: 'rgba(255, 255, 255, 0.7)', // Card background
        iosCardDark: 'rgba(40, 48, 65, 0.85)', // Darker, friendly card background
        iosAccent: '#007AFF', // iOS blue
        iosText: '#222',
        iosBorder: 'rgba(0,0,0,0.08)',
        iosShadow: 'rgba(0,0,0,0.10)',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"San Francisco"',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ]
      },
      borderRadius: {
        ios: '1.5rem',
      },
      boxShadow: {
        ios: '0 4px 24px 0 rgba(0,0,0,0.10)',
      },
      backdropBlur: {
        ios: '8px',
      },
    },
  },
  plugins: [],
} 