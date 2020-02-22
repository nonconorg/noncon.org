export const View = props => div({ class: 'Burger', onclick: props.action }, [div(), div(), div()])

export const style = {
  position: 'absolute',
  right: 0,
  left: 'auto',
  top: 0,
  padding: '0.5em',
  cursor: 'pointer',

  div: {
    height: '5px',
    width: '30px',
    margin: '0 0 5px',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
  },
}
