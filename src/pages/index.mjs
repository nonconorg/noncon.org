export const state = {
  title: 'Non Con Org',
  description: 'noncon.org',
}

export const View = state => [
  Hero(state),
  div([h2({ id: 'vienna' }, 'Vienna Calling.'), h3('stay tuned.')]),
]
