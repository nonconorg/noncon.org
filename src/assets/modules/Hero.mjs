export const View = ({ state }) =>
  Link({ class: 'Hero', to: '/' }, Img({ height: 300, src: `/img/noncon2020-banner-${state.theme || 'light'}.jpg` }))

export const style = vars => ({
  width: '100%',
  display: 'block',
  padding: '1.5em 0 0',
  backgroundColor: vars.background.dark,

  img: {
    display: 'block',
    height: 'auto',
    margin: '0 auto',
    maxWidth: '70vw',
    width: 'auto',
  },
})
