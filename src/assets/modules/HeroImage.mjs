export const View = () =>
  p({ class: 'HeroImage' }, Img({ height: 300, src: '/img/noncon2020-banner.png' }))


export const style = {
  width: '100%',
  textAlign: 'center',
  padding: '1.5em 0 0',

  img: {
    width: 'auto',
    height: 'auto',
    maxWidth: '70vw',
  },
}
