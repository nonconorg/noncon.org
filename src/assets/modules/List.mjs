export const View = items =>
  ul(
    { class: 'List' },
    items.map(i => [li(Link({ to: i.to }, [Img({ src: i.img, height: '90' }), i.title]))]),
  )

export const style = {
  width: '100%',

  li: {
    clear: 'both',
    display: 'inline-block',
    margin: '0.5em 0 5em',
    width: '48%',
    margin: '0 0.99% 5em',
    textAlign: 'center',
  },

  img: {
    width: 'auto',
    display: 'block',
    margin: '0 auto 1em',
    maxHeight: '90px',
    height: 'auto',
  },

  '@media screen and (min-width: 600px)': {
    li: {
      clear: 'none',
      width: '30%',
      margin: '0 1.49% 5em',
    },
  },

  '@media screen and (min-width: 850px)': {
    li: {
      width: '23%',
      margin: '0 0.99% 5em',
    },
  },
}
