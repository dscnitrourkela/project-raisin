/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/theme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      screens: {
        xsm: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        techno: 'var(--font-techno)',
        orbitron: 'var(--font-orbitron)',
        montserrat: 'var(--font-montserrat)',
        prompt: 'var(--font-prompt)',
        share_tech: 'var(--font-share_tech)',
        inter: 'var(--font-inter)',
      },
    },
  },
  plugins: [nextui()],
};
