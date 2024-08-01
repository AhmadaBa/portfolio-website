/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
'wave-animation': {
  '0%': { transform: 'rotate(0.0deg)' },
  '10%': { transform: 'rotate(30.0deg)' },
  '20%': { transform: 'rotate(-20.0deg)' },
  '30%': { transform: 'rotate(25.0deg)' },
  '40%': { transform: 'rotate(-15.0deg)' },
  '50%': { transform: 'rotate(20.0deg)' },
  '60%': { transform: 'rotate(0.0deg)' },
  '100%': { transform: 'rotate(0.0deg)' },
}
      },
      animation: {
        fadeIn: 'fadeIn 1.8s ease-in-out forwards',
        wave: 'wave-animation 4s'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.list-arrow li::before': {
          content: '"\\2023"', /* Insert the custom bullet symbol */
        },
      });
    },
  ]
};
