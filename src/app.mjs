export const state = {
  title: 'noncon.org',
  description: ['noncon - description'],

  menu: [
    { to: '/news/', text: 'News' },
    { to: '/events/', text: 'Events' },
  ],

  hero: {
    // title: 'noncon',
    description: 'more info soon.',

    // content: 'the non con.',

    menu: [
      { to: '/#about', text: 'about' },
      { to: '/#venue', text: 'venue' },
      { to: '/#support', text: 'support' },
    ],
  },

  footer: {
    one: {
      title: 'noncon',
      before: ['created by the parallele polis dao.'],
      menu: [{ to: '/privacy/', text: 'privacy notice' }],
    },
    two: {
      title: 'network',
      menu: [
        { to: 'https://parallele.at', text: 'parallele polis' },
      ],
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
