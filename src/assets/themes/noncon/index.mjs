export const vars = {
  black: '#010101',
  white: '#FEFEFE',

  headerBackgroundColor: '#000000cc',
  scrollbarColor: '#C55400',

  textColor: '#FAFAFA',

  backgroundColor: '#000000',

  linkColor: '#FAFAFA',
  linkColorHover: '#BDBDBD',

  borderColor: '#FAFAFA',

  maxWidth: '1200px',
  fontSize: '17px',
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    '::selection': {
      backgroundColor: v.textColor,
      color: v.backgroundColor,
      textShadow: 'none',
    },

    '*': {
      scrollbarColor: `${v.scrollbarColor} ${v.backgroundColor}`,
      scrollbarWidth: 'thin',
    },

    body: {
      backgroundColor: v.backgroundColor,
      border: 0,
      color: v.textColor,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
      fontSize: v.fontSize,
      fontWeight: 200,
      height: '100%',
      lineHeight: '1.6',
      margin: 0,
      minHeight: '100vh',
      overflowY: 'scroll',
      padding: 0,
      position: 'absolute',
      verticalAlign: 'baseline',
      width: '100%',
    },

    // html header tags
    'h1, h2, h3, h4, h5': {
      margin: '1em 0 0.2em',
    },

    h1: {
      fontSize: '2em',
    },
    h2: {
      fontSize: '2em',
    },
    h3: {
      fontSize: '1.5em',
    },

    a: {
      background: 'transparent',
      fontSize: '100%',
      margin: 0,
      padding: 0,
      verticalAlign: 'baseline',
      color: v.textColor,
      textDecorationColor: v.colors.gray[800],

      '&:hover': {
        color: v.linkColorHover,
      },
    },

    '#Magic': {
      width: '100%',
    },

    '.Wrapper': {
      width: '100%',
    },

    '.Page': {
      h2: {
        width: '90%',
        margin: '0 auto 0',
        padding: '2em 0 0',
        textAlign: 'center',
        fontWeight: 700,
      },

      p: {
        width: '90%',
        margin: '0 auto',
      },

      img: {
        margin: '3em 0',
      },
    },

    '.Footer': {
      fontSize: '1em',
      width: '100%',
    },

    '.full-image': {
      width: '100%',
    },

    b: {
      fontWeight: 700,
    },
  }
}
