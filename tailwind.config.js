/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
      center: true,
    },
    borderRadius: {
      '4xl': '32px',
      '3xl': '24px',
    },
    extend: {
      colors: {
        'color-primary': 'var(--text-color-primary)',
        'color-secondary': 'var(--text-color-secondary)',
        'color-tertiary': 'var(--text-color-tertiary)',
        'background-dark': 'var(--background-secondary)',
        'background-darker': 'var(--background-primary)',
        'btn-primary': 'var(--button-color-primary)',
        'btn-secondary': 'var(--button-color-secondary)',
        'btn-tertiary': 'var(--button-color-tertiary)',
        'btn-confirmed': 'var(--button-color-confirmed)',
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      mid: { max: '1150px' },
      // => @media (max-width: 1150px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '760px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      sxm: { max: '600px' },
      // => @media {max-width: 600px}{...}

      '1xsm': { max: '540px' },
      // => @media {max-width: 540px}{...}

      '2xsm': { max: '500px' },
      // => @media {max-width: 500px}{...}

      '3xsm': { max: '400px' },
      // => @media {max-width: 500px}{...}
    },
  },
  plugins: [],
};
