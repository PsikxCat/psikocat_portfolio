/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        smd: '666px',
        md: '900px',
        lg: '1200px',
        xl: '1500px',
        '2xl': '2000px',
      },
      textColor: {
        accent: 'var(--color-accent)',
      },
      backgroundColor: {
        base: 'var(--color-base)',
        dark: 'var(--color-base-dark)',
        accent: 'var(--color-accent)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
