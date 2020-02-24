export const View = () =>
  div({ class: 'Organizers' }, [
    h2('Organizers'),
    List([
      {
        img: '/img/organizers/parallele.jpg',
        to: 'https://parallele.at',
        title: 'parallele polis',
      },
      {
        img: '/img/organizers/bwb.png',
        to: 'https://bwb.is',
        title: 'bwb.is',
      },
      {
        img: '/img/organizers/riat.jpg',
        to: 'https://riat.at',
        title: 'riat.at',
      },
    ]),
  ])

export const style = {
  '@media screen and (min-width: 850px)': {
    '.List': {
      li: {
        width: '30%',
        margin: '0 1.49% 5em',
      },
    },
  },
}
