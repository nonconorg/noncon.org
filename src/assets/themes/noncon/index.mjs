export const vars = {
  black: '#010101',
  white: '#FEFEFE',

  neutral: '#c4c4c4',

  headerBackgroundColor: '#000000cc',

  scrollbar: {
    dark: '#C55400',
  },

  text: {
    dark: '#FAFAFA',
    light: '#000000',
  },

  background: {
    dark: '#000000',
    light: '#FAFAFA',
  },

  primary: {
    neutral: '#FAFAFA',
    dark: '#CACACA',
    light: '#FFFFFF',
  },

  link: {
    dark: '#FAFAFA',
    light: '#000000',

    hover: {
      dark: '#BDBDBD',
      light: '#BDBDBD',
    },
  },

  borderColor: '#FAFAFA',

  maxWidth: '1200px',
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    '::selection': {
      backgroundColor: v.text.dark,
      color: v.background.dark,
      textShadow: 'none',
    },

    '*': {
      scrollbarColor: `${v.scrollbar.dark} ${v.background.dark}`,
      scrollbarWidth: 'thin',
    },

    '.Footer': {
      fontSize: '1em',
      width: '100%',
      color: v.text.light,

      '.Menus, .Credits': {
        a: {
          color: v.text.light,
          '&:hover': {
            color: v.neutral,
          },
        },
      },
    },
  }
}
