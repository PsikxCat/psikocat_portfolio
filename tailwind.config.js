/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
