export const View = state => [
  h2('404 - not found.'),
  p('unfortunately, there is nothing here but nothingness.'),
  p([Link({ to: '/' }, 'click here'), ' to get back to safety']),
]

export const state = {
  title: '404 - not found',
  description: [
    'unfortunately, there is nothing here but nothingness.',
    ' i think you looked for something on https://parallele.at and got lost.',
  ],
}
