export const View = (props = {}) => {
  CHECK_PROPS(props, propTypes, 'Cta')

  const { to, text } = props

  return h2({ class: 'Cta' }, Link({ to }, text))
}

export const style = {
  margin: '1em 0',
  padding: 0,
  fontSize: '1.7em',
  textAlign: 'center',

  '&.small': {
    margin: 0,
  },
}

export const propTypes = {
  Cta: [
    { key: 'to', type: 'string', required: true },
    { key: 'text', type: 'string', required: true },
  ],
}
