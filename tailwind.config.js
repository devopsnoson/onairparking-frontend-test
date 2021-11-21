module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: () => ({
        'city-map': '36.5rem',
        98: '28rem',
      }),
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#e57715',
      'primary-hover': '#E26D06',
      secondary: '#5e98d8',
      'secondary-hover': '#3F8AA9',
      'orange-50': '#FEF3EB',
      deal: '#8d8d8d',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#e57715',
      secondary: '#5e98d8',
      cityList: '#808080',
      'onair-gray': '#515356',
      brown: '#AC550B',
      'onair-orange': '#FA8C16',
    }),
    divideColor: (theme) => ({
      ...theme('borderColors'),
      primary: '#e57715',
      secondary: '#5e98d8',
      'onair-orange': '#FA8C16',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      primary: '#e57715',
      secondary: '#5e98d8',
    }),
    fontFamily: () => ({
      body: ['Roboto', 'sans-serif'],
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
