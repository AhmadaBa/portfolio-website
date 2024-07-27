/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    }
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

