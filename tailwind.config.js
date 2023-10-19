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
        sm: '500px',
        smd: '666px',
        md: '900px',
        lg: '1200px',
        xl: '1500px',
        '2xl': '2000px',
      },
      textColor: {
        accent: 'var(--color-accent)',
        'accent-2': 'var(--color-accent-2)',
        muted: 'var(--color-muted)',
        base: 'var(--color-base)',
        dark: 'var(--color-base-dark)',
      },
      backgroundColor: {
        base: 'var(--color-base)',
        dark: 'var(--color-base-dark)',
        darker: 'var(--color-base-darker)',
        accent: 'var(--color-accent)',
        'accent-2': 'var(--color-accent-2)',
        muted: 'var(--color-muted)',
      },
      borderColor: {
        base: 'var(--color-base)',
        accent: 'var(--color-accent)',
        'accent-2': 'var(--color-accent-2)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
