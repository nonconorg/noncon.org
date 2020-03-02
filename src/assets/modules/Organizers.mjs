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
        img: '/img/organizers/institue-for-cryptoeconomics.jpg',
        to: 'https://www.wu.ac.at/cryptoeconomics',
        title: 'Cryptoeconomic Institute',
      },
      {
        img: '/img/organizers/bwb.png',
        to: 'https://bwb.is',
        title: 'bwb.is',
      },
    ]),
  ])

export const style = {
  li: {
    display: 'block',
    width: '80%',
    margin: '0 auto 5em',
  },

  '@media screen and (min-width: 850px)': {
    '.List': {
      li: {
        width: '30%',
        margin: '0 1.49% 5em',
      },
    },
  },
}
