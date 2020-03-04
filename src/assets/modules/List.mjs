export const View = ({ items, title, class: cl = '' }) =>
  ul(
    {
      class: {
        List: true,
        [cl]: cl,
      },
    },
    items.map(i => [li(Link({ to: i.to }, [Img({ src: i.img, height: '90' }), i.title]))]),
  )

export const style = {
  width: '100%',

  li: {
    clear: 'both',
    display: 'inline-block',
    margin: '0 0.99% 5em',
    textAlign: 'center',
    width: '48%',
  },

  img: {
    display: 'block',
    height: 'auto',
    margin: '0 auto 1em',
    maxHeight: '90px',
    width: 'auto',
  },

  '@media screen and (min-width: 600px)': {
    li: {
      clear: 'none',
      margin: '0 1.49% 5em',
      width: '30%',
    },
  },

  '@media screen and (min-width: 850px)': {
    li: {
      margin: '0 0.99% 5em',
      width: '23%',
    },
  },
}
