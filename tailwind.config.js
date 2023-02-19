/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        maximus: `rgb(var(--color-maximus) / <alpha-value>)`,
        linx: `rgb(var(--color-linx) / <alpha-value>)`,
        primary: `var(--bg-primary)`,
        secondary: `var(--bg-secondary)`,
        primaryDarken: `var(--bg-primary-dk)`,
      },
      boxShadow: {
        btPrimary: '0px 15px 10px -15px var(--bg-secondary)',
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
