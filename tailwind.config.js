import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        esm: "300px",
        ssm: "400px",
        msm: "600px",
        md: "768px",
        lg: "1280px",
        llg: "1920px",
        xl: "3840px",
      },
      fontFamily: {
        dubai: ['"Dubai"', "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".hide-scrollbar": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          },
          ".hide-scrollbar::-webkit-scrollbar": {
            display: "none",
          },
        },
        ["responsive", "hover"]
      );
    },
    tailwindcssAnimate,
  ],
};
