/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'pages/**/*',
    'src/**/*',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
