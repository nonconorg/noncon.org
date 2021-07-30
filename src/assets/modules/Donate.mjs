export const View = () =>
  div({ class: 'Donate' }, [
    h2("Tickets: You don't need one. But you can donate :-)"),

    p('NonCon is free, and non-coercive. Opt-in.'),

    p([
      'If you feel like donating,',
      "we'll accept any token at the ",
      Link({ text: 'noncon.eth', to: 'https://etherscan.io/address/noncon.eth' }),
      ' address,',
      ' or you can contribute to our ',
      Link({
        text: 'interspace.chat gitcoin grant',
        to: 'https://gitcoin.co/grants/516/interspacechat?tab=description',
      }),
      ' and get those sweet sweet multiples during the 5th Matching Round.',
      "Those who don't have, or don't want a gitcoin account can donate directly to the ",
      Link({
        text: 'support.interspacechat.eth',
        to: 'https://etherscan.io/address/support.interspacechat.eth',
      }),
      ' address',
    ]),

    List({
      items: [
        {
          img: '/img/donate/gitcoin.png',
          to: 'https://gitcoin.co/grants/516/interspacechat',
          title: 'gitcoin grant',
        },
        {
          to: 'https://etherscan.io/enslookup?q=noncon.eth',
          img: '/img/donate/noncon.eth.png',
          title: 'noncon.eth',
        },
      ],
    }),

    p([
      'Although we have no production costs associated with a conference produced in meatspace,',
      ' the hours of organization, pre-production, ',
      ' public communication are just as high as with a normal event.',
    ]),

    p([
      'When the livestreams have ended,',
      ' all individual talks will be available in edited form in playlists on our Youtube channel,',
      ' so any donation you make will also be to the benefit of our videocuttin volunteers,',
      ' as well as towards the streamers that work 11 hour shifts of sitting there, streaming to youtube.',
    ]),
  ])

export const style = {
  '.List': {
    margin: '3em 0 0',
  },
}
