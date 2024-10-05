/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        esm: '300px',  // Extra small mobile
        ssm: '400px',  // Small mobile
        msm: '600px',  // Medium small mobile
        md: '768px',   // Medium
        lg: '1280px',  // Large
        llg: '1920px', // Larger
        xl: '3840px',  // Extra large
      },
      fontFamily: {
        dubai: ['"Dubai"', 'sans-serif'],
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { color: '#026896' },
          '50%': { color: 'white' },
        },
      },
      animation: {
        colorChange: 'colorChange 3s infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require("tailwindcss-animate"),
  ],
}
