module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#EAD7C0',
        blue: {
          200: '#6C8BA3',
          500: '#4A6D8C',
          700: '#2E4E6C',
        },
        'deep-brown': '#362F2D',
        primary: '#937dc2',
        secondary: '#c689c6',
        accent: '#e8a0bf',
        neutral: '#fcc5c0',
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-mansion': "url('/hero-img.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
