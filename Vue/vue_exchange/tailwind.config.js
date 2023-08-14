module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif']
    },
    extend: {
      colors: {
        cyan: '#9cdbff'
      },
      margin: {
        '96': '24rem',
        '128': '32rem'
      }
    }
  },
  variants: {
    extend: {},
    opacity: ['responsive', 'hover'],
  },
  plugins: [],
}
