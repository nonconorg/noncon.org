export const View = ({ hero, ...state }) =>
  p({ class: 'Hero' }, Img({ height: 300, src: '/img/noncon2020-banner.png' }))


export const style = vars => ({
  width: '100%',
  textAlign: 'center',
  padding: '1.5em 0 0',

  img: {
    width: 'auto',
    height: 'auto',
    maxWidth: '70vw',
  },
})
