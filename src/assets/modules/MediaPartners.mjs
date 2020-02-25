export const View = () =>
  div([
    h2('Media Partners'),

    List([
      {
        img: '/img/mediapartners/bitcoinundco.jpg',
        to: 'https://bitcoinundco.com',
        title: 'Bitcoin und co',
      },
    ]),
  ])
