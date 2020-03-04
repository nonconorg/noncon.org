export const View = ({ items, title, class: cl = '' }) =>
  ul(
    {
      class: {
        'Speakers': true,
        [cl]: cl,
      },
    },
    items.map(i => li([Link({ to: i[1] }, i[0]), p(i[2])])),
  )

export const style = vars => ({
  width: '100%',

  li: {
    clear: 'both',
    display: 'block',
    textAlign: 'center',
    width: '100%',
  },

  a: {
    color: vars.primary.neutral,
  }
})
