export const View = props => List({ class: 'Organizers', ...props })

export const style = {
  li: {
    display: 'block',
    width: '80%',
    margin: '0 auto 5em',
  },

  '@media screen and (min-width: 850px)': {
    li: {
      float: 'left',
      width: '50%',
      margin: '0 1.49% 5em',

      '&:first-child, &:last-child': {
        width: '20%',
      },
    },
  },
}
