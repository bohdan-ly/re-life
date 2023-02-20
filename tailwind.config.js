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
        primary: `var(--bg-primary)`,
        secondary: `var(--bg-secondary)`,
        primaryDarken: `var(--bg-primary-dk)`,
        primaryColorSemiTransparent: `var(--text-primary-transparent)`,
        primaryColor: `var(--text-primary)`,
        borderPrimary: `var(--border-primary)`,
      },
      position: {
        centerY: 'absolute top-1/2 -translate-y-1/2',
        center: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
        centerX: 'absolute left-1/2 transform -translate-x-1/2',
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
