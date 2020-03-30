export const vars = {
  black: '#000000',
  white: '#ffffff',

  neutral: '#c4c4c4',

  headerBackgroundColor: '#000000cc',

  scrollbar: {
    dark: '#FF0000',
    light: '#FF0000',
  },

  text: {
    dark: '#FFFFFF',
    light: '#000000',
  },

  background: {
    dark: '#000000',
    light: '#FFFFFF',
  },

  primary: {
    neutral: '#FF0000',
    dark: '#CACACA',
    light: '#FFFFFF',
  },

  link: {
    dark: '#FFFFFF',
    light: '#000000',

    hover: {
      dark: '#BDBDBD',
      light: '#BDBDBD',
    },
  },

  borderColor: '#FFFFFF',

  maxWidth: '1200px',
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    html: {
      scrollBehavior: 'auto',
    },
    body: {
      fontSize: '16px',
    },

    '::selection': {
      backgroundColor: v.text.dark,
      color: v.background.dark,
      textShadow: 'none',


      '.light &&': {
        color: v.text.dark,
        backgroundColor: v.background.dark,
      },
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

    iframe: {
      margin: '0 auto',
      display: 'block',
    },

    'h1, h2, h3': {
      color: vars.text.dark,
    },

    a: {
      color: vars.primary.neutral,
      whiteSpace: 'normal',
    },

    img: {
      '&.center': {
        display: 'block',
        margin: '0 auto',
      },
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
      padding: '1em 0',
    },

    '.Hero': {
      '.Menu': {
        a: {
          fontSize: '1.7em',
          color: v.primary.neutral,
        },
      },
    },

    '.Speakers': {
      h3: {
        textAlign: 'center',
        padding: 0,
      },
      p: {
        textAlign: 'center',
        width: '100%',
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
      html: {
        scrollBehavior: 'smooth',
      },

      body: {
        fontSize: '20px',
      },

      '.Footer': {
        fontSize: '0.9em',
      },
    },

    [`@media screen and (min-width: ${v.widths.laptop})`]: {
      body: {
        fontSize: '24px',
      },
    },
  }
}
