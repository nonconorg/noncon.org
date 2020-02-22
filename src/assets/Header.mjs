export const View = (props = {}, children = []) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { logo, menu, logotext, hideMenu, ...state } = props

  return header({ class: { Header: true, hide: hideMenu } }, [
    Link({ to: state.root, class: 'Logo' }, Img(logo)),
    Menu({ state, items: menu, collapse: false }),
    Burger({ ...state, action: actions.header.toggleMenu }),
    children,
  ])
}

export const state = {
  hideMenu: true,
}

export const global = {
  state: {
    hideMenu: true,
  },
}

export const actions = {
  header: {
    toggleMenu: state => ({
      ...state,
      hideMenu: !state.hideMenu,
    }),
  },
}

export const style = vars => ({
  width: '100%',
  padding: '0 5%',
  position: 'fixed',
  backgroundColor: vars.headerBackgroundColor,
  top: 0,
  left: 0,

  '.Logo': {
    height: '2em',
    width: '2em',
    float: 'left',
    margin: '5px 0 0',

    img: {
      maxHeight: '100%',
      maxWidth: '100%',
    },
  },

  '.Menu': {
    float: 'left',
    margin: '0.6em 0 0 0.4em',

    li: {
      float: 'none',
      clear: 'both',
      fontSize: '1.1em',
    },

    'ul ul': {
      position: 'relative',
      margin: '0 0 0 0.5em',

      li: {
        fontSize: '0.9em',
      },
    },
  },

  '&.hide': {
    '.Menu': {
      'ul li': {
        display: 'none',

        '&:first-child': {
          display: 'inherit',
        },
      },

      'ul ul': {
        display: 'none',
      },
    },
  },
})

export const propTypes = {
  Header: [
    { key: 'logo', type: 'string' },
    { key: 'logotext', type: 'string' },
    { key: 'menu', type: 'array' },
    { key: 'hideMenu', type: 'boolean' },
  ],
}
