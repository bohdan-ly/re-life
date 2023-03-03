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
        primary: `rgb(var(--bg-primary) / <alpha-value>)`,
        secondary: `rgb(var(--bg-secondary) / <alpha-value>)`,
        additional: `rgb(var(--bg-additional) / <alpha-value>)`,
        borderFocus: `rgb(var(--color-gold) / <alpha-value>)`,

        primaryLight: `var(--bg-primary-lg)`,
        primaryDarken: `var(--bg-primary-dk)`,
        secondaryDarken: `var(--bg-secondary-dk)`,
        additionalDarken: `var(--bg-additional-dk)`,
        primaryColorSemiTransparent: `var(--text-primary-transparent)`,
        primaryColor: `var(--text-primary)`,
        borderPrimary: `var(--border-primary)`,
        mp: `rgb(var(--color-mp) / <alpha-value>)`,
        sta: `rgb(var(--color-sta) / <alpha-value>)`,
        xp: `rgb(var(--color-xp) / <alpha-value>)`,
        gold: `rgb(var(--color-gold) / <alpha-value>)`,
      },
      backgroundImage: {
        silver: `linear-gradient( to bottom, #777e82, #4d4d4d, #7e8589)`,
      },
      position: {
        centerY: 'absolute top-1/2 transform -translate-y-1/2',
        center: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
        centerX: 'absolute left-1/2 transform -translate-x-1/2',
      },
      boxShadow: {
        btPrimary: '0px 15px 10px -15px var(--bg-secondary)',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.17, 0.55, 0.55, 1)',
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
