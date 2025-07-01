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
      }
    },
  },
  plugins: [],
} 