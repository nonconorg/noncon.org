export const View = state =>[
  HeroImage(),

  div([
    h2('404 - not found.'),
    p('unfortunately, there is nothing here but nothingness.'),
    p([Link({ to: '/' }, 'click here'), ' to get back to safety']),
  ]),
]
