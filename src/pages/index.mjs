export const state = {
  title: 'Non Con Org',
  description: 'noncon.org',
}

export const View = (state) => [
  h2({ id: 'vienna' }, 'Vienna Calling'),

  div([
    h2('some content'),
    p(['to show some usage of html content and meta']),
    p({ class: 'aclass', title: 'add any html meta here.' }, 'content'),

    p(Link({ to: '/news/', text: 'smart Link, internal' })),

    p(Link({ to: 'https://parallele.at' }, 'smart Link, external')),
  ]),
]
