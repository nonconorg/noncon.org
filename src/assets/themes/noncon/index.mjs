export const vars = {
  black: '#010101',
  white: '#FEFEFE',

  neutral: '#c4c4c4',

  headerBackgroundColor: '#000000cc',

  scrollbar: {
    dark: '#FF0000',
    light: '#FF0000',
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
    neutral: '#FF0000',
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
    body: {
      fontSize: '16px',
    },

    '::selection': {
      backgroundColor: v.text.dark,
      color: v.background.dark,
      textShadow: 'none',
    },

    '*': {
      scrollbarColor: `${v.scrollbar.dark} ${v.background.dark}`,
      scrollbarWidth: 'thin',
    },

    '#Magic.light': {
      'h1, h2, h3': {
        color: vars.text.light,
      },

      a: {
        color: vars.primary.neutral,
      },
    },

    'h1, h2, h3': {
      color: vars.text.dark,
    },

    a: {
      color: vars.primary.neutral,
    },

    '.pageImg': {
      fontSize: '1.8em',
      margin: '0 auto 2em',
      display: 'block',
      height: 'auto',
    },

    '.Page': {
      '> div': {
        padding: '1.5em 8%',

        '&#hero': {
          padding: '1.5em 0',
        },
      },
    },

    'h1, h2, h3, h4, h5': {
      textAlign: 'center',
    },

    h2: {
      fontSize: '1.8em',
      padding: '0 0 2em',
    },

    '.Hero': {
      '.Menu': {
        a: {
          fontSize: '1.7em',
          color: v.primary.neutral,
        },
      },
    },

    '.Footer': {
      fontSize: '1em',
      width: '100%',
      color: v.text.dark,
      textAlign: 'center',

      h2: {
        padding: 0,
        color: v.text.dark,

        '#Magic.light &&': {
          color: v.text.dark,
        },
      },

      li: {
        textAlign: 'center',
      },

      '.Credits': {
        textAlign: 'center',
      },

      '.Menus, .Credits': {

        a: {
          color: v.text.light,

          '#Magic.light &&': {
            color: v.text.light,
          },

          '&:hover': {
            color: v.neutral,
          },
        },
      },
    },

    '.Gdpr': {
      '.ShowHide': {
        width: '1.5em',
        height: '1.5em',
      },
    },

    '.LightSwitch': {
      width: '1.5em',
      height: '1.5em',
    },

    [`@media screen and (min-width: ${v.widths.tablet})`]: {
      body: {
        fontSize: '20px',
      },
    },

    [`@media screen and (min-width: ${v.widths.laptop})`]: {
      body: {
        fontSize: '24px',
      },
    },
  }
}
