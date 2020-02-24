export const View = state =>
  span({ class: 'DealWithIt', onclick: actions.dealwithit.toggle }, [
    'Deal with it.',
    state.dealwithit && div(Img({ src: '/img/dealwithit.gif' })),
  ])

export const actions = {
  dealwithit: {
    toggle: state => ({
      ...state,
      dealwithit: !state.dealwithit,
    }),
  },
}

export const state = {
  dealwithit: false,
}

export const style = vars => ({
  color: vars.primary.neutral,
  cursor: 'pointer',

  div: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    top: 0,
    left: 0,
  },

  img: {
    height: '33vh',
    width: '33vh',
    margin: '33vh auto',
    display: 'block',
  },
})

export const global = {
  state: {
    dealwithit: true,
  },
  actions: {
    dealwithit: true,
  },
}
