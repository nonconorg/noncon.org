export const View = ({ state }) =>
  Link(
    { class: 'Hero', to: '/' },
    Img({ height: 300, src: `/img/virtualnoncon-logo-${state.theme || 'light'}.jpg` }),
  )

export const style = {
  width: '100%',
  display: 'block',
  padding: '1.5em 0 0',
  margin: '0 auto',
  backgroundColor: 'transparent',

  '.light &&': {
    backgroundColor: 'transparent',
  },

  img: {
    display: 'block',
    height: 'auto',
    margin: '0 auto',
    maxWidth: '70vw',
    width: 'auto',
  },
}
