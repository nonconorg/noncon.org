export const View = () => [
  h2('Organizers'),
  List([
    {
      img: '/img/organizers/parallele.png',
      to: 'https://parallele.at',
      title: 'parallele polis',
    },
    {
      img: '/img/organizers/bwb.png',
      to: 'https://bwb.is',
      title: 'bwb',
    },
    {
      img: '/img/organizers/riat.png',
      to: 'https://riat.at',
      title: 'riat',
    },
  ]),
]
