export const View = () =>
  p({ class: 'HeroImage' }, Img({ height: 300, src: '/img/noncon2020-banner.jpg' }))

export const style = vars => ({
  width: '100%',
  textAlign: 'center',
  padding: '1.5em 0 0',
  backgroundColor: vars.background.dark,

  img: {
    width: 'auto',
    height: 'auto',
    maxWidth: '70vw',
  },
})
