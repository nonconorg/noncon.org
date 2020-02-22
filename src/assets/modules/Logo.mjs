export const View = ({ branding, root }) =>
  Link({ to: root, class: 'Logo' }, [
    Img('/noncon2020-logo.png'),
  ])

export const style = vars => ({
  float: 'left',
  height: '2.4em',

  svg: {
    display: 'inline-block',
    width: '3em',
  },

  span: {
    '.Header &&': {
      lineHeight: 1,
      margin: '0.4em',
    },
  },
})
