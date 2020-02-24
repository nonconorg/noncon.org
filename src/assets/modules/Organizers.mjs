export const View = () => [
  h2('Organizers'),
  List([
    {
      img: '/support/parallele.jpg',
      to: 'https://parallele.at',
      title: 'parallele polis',
    },
    {
      img: '/support/bwb.jpg',
      to: 'https://bwb.is',
      title: 'bwb',
    },
    {
      img: '/support/riat.jpg',
      to: 'https://riat.at',
      title: 'riat',
    },
  ]),
]
