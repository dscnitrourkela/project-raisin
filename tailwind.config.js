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
        xxxs: '334px',
        xxs: '380px',
        '2xs': '425px',
        xsm: '480px',
        ssm: '560px',
        sm: '640px',
        md: '768px',
        slg: '900px',
        lg: '1024px',
        llg: '1124px',
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
        spaceX: 'var(--font-spacex)',
        spaceGrotesk: 'var(--font-space_grotesk)',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 0px #fef08a' },
          '100%': { boxShadow: '0 4px 15px #fef08a' },
        },
      },
      animation: {
        glow: 'glow 1s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [nextui()],
};
