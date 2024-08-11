/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'translate-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' }, // Adjust the translation distance as needed
        },
      },
      animation: {
        'translate-y': 'translate-y 3s infinite', // Adjust the duration as needed
      },
      boxShadow: {
        'custom': '0px 1px 2px rgba(250, 204, 21, 0.5), 0px 2px 4px rgba(250, 204, 21, 0.5), 0px 4px 8px rgba(250, 204, 21, 0.5), 0px 8px 16px rgba(250, 204, 21, 0.5)',
      },
    },
  },
  plugins: [],
}

