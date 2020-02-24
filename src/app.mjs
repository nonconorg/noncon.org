export const state = {
  title: 'noncon.org',
  description: ['noncon - description'],

  menu: [],
  // menu: [
  //   { to: '/news/', text: 'News' },
  //   { to: '/events/', text: 'Events' },
  // ],

  hero: {
    // title: 'Not a Conference. Not a Conjob.',
    // description: 'more info soon.',
    // content: 'the non con.',
    // menu: [
    //   { to: 'https://the-commons-stack.typeform.com/to/SemYgK', text: 'SIGNUP' },
    //   { to: '/#venue', text: 'venue' },
    //   { to: '/#support', text: 'support' },
    // ],
  },

  footer: {
    one: {
      title: 'noncon',
      before: ['created by the parallele polis dao.'],
      menu: [
        { to: '/privacy/', text: 'privacy notice' },
        { to: 'https://www.parallele.at/code-of-conduct/', text: 'code of conduct' },
      ],
    },
    two: {
      title: 'network',
      menu: [{ to: 'https://parallele.at', text: 'parallele polis' }],
    },
    three: {
      title: 'social',
      menu: [
        { to: 'https://keybase.io/noncon', text: 'keybase' },
        { to: 'https://github.com/nonconorg', text: 'github' },
      ],
    },
  },
}
