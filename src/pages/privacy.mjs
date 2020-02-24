export const state = {
  title: 'Non Con Org',
  description: 'noncon.org privacy',
}

export const View = state => [
  div([
    h2('Privacy Notice'),

    p('This page does not:'),
    p([
      'Collect personal data, load tracking scripts,',
      ' or use any other means of spying on its users',
    ]),

    p([
      'Since this page and the connecting databases were setup in about 12 hours,',
      ' so we used ',
      Link({ to: 'https://www.typeform.com/' }, 'typeform'),
      ' to implement the form.',
      ' For now, we save all submitted forms in a google document.',
      ' This is expected to change very soon.',
    ]),

    p('We will in no way try to correlate form inputs with ticket purchases'),

    p([
      'All purchasers of tickets will receive an non-personalized ntf token.',
      ' This token will not be required for entry, ! just come !,',
      ' but will unlock some awesome goodies instead.',
    ]),
  ]),
]
