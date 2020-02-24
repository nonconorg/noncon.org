export const state = {
  title: 'Non Con Org',
  description: 'noncon.org',
}

export const View = state => [
  HeroImage(state),

  Cta({ to: 'https://the-commons-stack.typeform.com/to/SemYgK', text: 'SIGNUP' }),

  div([
    h2([p('Not a Conference.'), p(' Not a Conjob.')]),
    p([
      'We intend for NONCON 2020 to be much smaller in scope, cheaper,',
      ' and in general more community oriented than EDCON,',
      ' as well as tilting the main topics towards community, development, and security,',
      ' while also being more inviting to interests outside the Ethereum ecosystem',
      ' to include all cypherpunk and privacy focused individuals and communities.',
      ' Please bear with us in the coming weeks,',
      ' as this is very much last notice',
      ' and we will do our best to deliver an experience that proves fulfilling for its participants.',
      ' There might or might not be speakers, there might or might not be hackbounties,',
      ' but there will definitely be a place to hang out with peers',
      ' and do whatever it is ya wanna do together for four days in beautiful Vienna.',
      ' Open source Blockchain projects celebrate permissionless innovation and self sovereignty.',
      ' We subscribe to these values and support them flowing out into other social spaces. ',
      Link({ to: 'https://www.parallele.at/not-a-conference-not-a-conjob/' }, 'Read More...'),
    ]),
  ]),

  div([
    h2('How do we intend to deal with Covid19?'),

    p([
      "It's the reason for the edcon cancellation after all.",
      ' We believe that public communication needs to shift from',
      Link({ to: 'https://www.psandman.com/col/swineflu2.htm' }, ' containment to coping'),
      ', based on lessons learned from past viral infections.',
      ' Are we Crazy? Well, lets say we are willing to take a calculated risk.',
    ]),

    h3('Things that we will provide:'),

    p([
      'EN 12054 certified ',
      Link(
        { to: 'https://en.wikipedia.org/wiki/Hand_sanitizer#Surgical_hand_disinfection' },
        'Surgical hand sanitizer',
      ),
      ' and Masks. ',
      Link(
        { to: 'https://twitter.com/TheRealSmuggler/status/1203361366708494342?s=20' },
        "(It's a cypherpunk event after all)",
      ),
    ]),

    h3('Sanitization Process'),

    p('First, every attendee will be required to sanitize their hands.'),

    p([
      ' Then, we will provide disinfectant for the masks.',
      ' You will hodl the mask,',
      ' our team will handle the disinfectant,',
      ' to prevent the bottle(s) from being our infection vector.',
    ]),

    p(['We advise everyone to wear some kind of glasses or goggles. ', DealWithIt(state)]),

    p([
      'After sanitizing your hands,',
      ' please make sure to cough into your elbow and not in your hands.',
    ]),

    p([
      'If you have any further suggestions to refine these processes, please ',
      Link({ to: '/#contacts' }, 'contact us'),
    ]),
  ]),

  div([
    h2('Venue'),

    Img({ class: 'pageImg', src: '/img/qryptoquberaumd.jpg', height: 400 }),

    p([
      'Located in the center of Vienna,',
      ' our tentative venue ',
      Link({ to: 'https://www.mqw.at/en/institutions/q21/institutions/raum-d-q21/' }, 'Raum D'),
      ' can comfortably hold 100 people.',
      ' It is directly opposite our ',
      Link({ to: 'https://www.parallele.at/#qrypto-qube' }, 'Qrypto Qube'),
      ' on Electric Avenue in the ',
      Link({ to: 'https://www.mqw.at/institutionen/q21/' }, 'Museumsquarter'),
      ' and based on the response, we can scale up the amount of space we utilize there.',
      ' If you are arriving earlier than April 3rd,',
      ' and staying longer than April 6, you can hang out in our coworking space, ',
      Link({ to: 'https://www.parallele.at/#paperhub-coworking' }, 'Paper Hub'),
      ' a short trip via ',
      Link(
        {
          to:
            'https://www.google.com/maps/dir/MuseumsQuartier,+Museumsplatz,+Vienna/Hofstattgasse+4,+1180+Wien/@48.2167831,16.3352999,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x476d07903eeb4fdf:0x94d429b3eb41ebff!2m2!1d16.3586166!2d48.2033369!1m5!1m1!1s0x476d07d13a94c74d:0x9a5f70aab1cc7fb5!2m2!1d16.3409366!2d48.2283202!3e3)',
        },
        'public transport',
      ),
      ' from the Museumsquarter.',
    ]),
  ]),

  div({ id: 'contacts' }, [
    h2('Connect'),
    p([
      'If you would like to attend, sponsor, or speak at NonCon 2020 in Vienna, ',
      Link({ to: 'https://the-commons-stack.typeform.com/to/SemYgK' }, 'sign up via this Typeform'),
      ' (thx to ',
      Link({ to: 'https://commonsstack.org' }, 'Commons Stack'),
      ") and we'll keep you informed.",
    ]),

    p([
      'Join our ',
      Link({ to: 'https://keybase.io/team/nonconorg' }, 'Keybase Team Chat'),
      ' to collaborate with us on production.',
    ]),

    p([
      'Join our ',
      Link({ to: 'https://t.me/joinchat/E9fhuBVwENCRcC3-df9wxA' }, 'Telegram Channel'),
      ' to coordinate with other attendees.',
    ]),

    p([
      "Don't forget to ",
      Link({ to: 'https://twitter.com/ParallelePolis' }, 'follow us on Twitter'),
      ' to keep up to date :-)',
    ]),

    p(['Oldskool-stylee: ', Link({ to: 'mailto:info@parallele.at' }, 'email')]),
  ]),

  div(Organizers()),

  div(Support()),

  Cta({ to: 'https://app.ens.domains/name/noncon.eth', text: 'Donate' }),
]
