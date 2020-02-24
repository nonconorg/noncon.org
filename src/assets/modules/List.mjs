export const View = items =>
  ul(
    { class: 'List' },
    items.map(i => [
      li([Img({ src: i.img, height: '90' }), div([h4(Link({ to: i.to }, i.title)), p(i.text)])]),
    ]),
  )

export const style = {
  width: '100%',

  li: {
    clear: 'both',
    display: 'inline-block',
    margin: '0.5em 0',
    width: '100%',
    textAlign: 'center',

    h4: {
      lineHeight: 1,
      padding: 0,
    },
  },

  img: {
    width: 'auto',
    margin: '0 0 1em',
  },

  '@media screen and (min-width: 600px)': {
    li: {
      clear: 'none',
      width: '49%',
      margin: '0 0.99%',
    },
  },

  '@media screen and (min-width: 850px)': {
    li: {
      width: '30%',
      margin: '0 1.49%',
    },
  },
}
