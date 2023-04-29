/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'cream': 'hsl(30, 38%, 92%)',
        'very-dark-blue': 'hsl(212, 21%, 14%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)',
      },
      fontFamily: {
        'Fraunces': 'Fraunces',
        'Montserrat': 'Montserrat',
      },
      backgroundImage: {
        'desktop': "url('images/image-product-desktop.jpg')",
        'mobile': "url('images/image-product-mobile.jpg')",
      },
    },
  },
  plugins: [],
}